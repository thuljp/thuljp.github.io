// FSRS-4.5 间隔重复调度（默认参数），外加 Anki 式的当天学习步骤。
// 评分：1 重来  2 困难  3 良好  4 简单
// 目标记忆保持率 0.9：间隔恰好等于稳定性 S（天）。

const W = [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8975, 0.031, 1.6474, 0.1367, 1.0461, 2.1072, 0.0793, 0.3246, 1.587, 0.2272, 2.8755];
const DECAY = -0.5;
const FACTOR = 19 / 81;
export const MIN = 60 * 1000;
export const DAY = 24 * 60 * MIN;
const LEARN_STEPS = [1 * MIN, 10 * MIN];
const RELEARN_STEP = 10 * MIN;
const MAX_IVL = 365 * 3;
const RETENTION = 0.9;

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export function retrievability(elapsedDays, s) {
  return Math.pow(1 + FACTOR * Math.max(0, elapsedDays) / s, DECAY);
}
function intervalDays(s) {
  const ivl = (s / FACTOR) * (Math.pow(RETENTION, 1 / DECAY) - 1);
  return clamp(Math.round(ivl), 1, MAX_IVL);
}
const initS = g => W[g - 1];
const initD = g => clamp(W[4] - (g - 3) * W[5], 1, 10);
function nextD(d, g) {
  const d1 = d - W[6] * (g - 3);
  return clamp(W[7] * initD(4) + (1 - W[7]) * d1, 1, 10);
}
function recallS(d, s, r, g) {
  const hard = g === 2 ? W[15] : 1;
  const easy = g === 4 ? W[16] : 1;
  return s * (1 + Math.exp(W[8]) * (11 - d) * Math.pow(s, -W[9]) * (Math.exp(W[10] * (1 - r)) - 1) * hard * easy);
}
function forgetS(d, s, r) {
  return Math.min(s, W[11] * Math.pow(d, -W[12]) * (Math.pow(s + 1, W[13]) - 1) * Math.exp(W[14] * (1 - r)));
}

export function newCard() {
  return { state: 'new', due: 0, s: 0, d: 0, step: 0, reps: 0, lapses: 0, last: 0 };
}

// 返回新的卡片状态（不修改原对象）
export function schedule(card, g, now = Date.now()) {
  const c = { ...card, reps: card.reps + 1 };
  const elapsed = card.last ? (now - card.last) / DAY : 0;

  if (card.state === 'new' || card.state === 'learning') {
    if (card.state === 'new') { c.s = initS(g); c.d = initD(g); }
    else {
      // 当天重复：难度随评分微调，稳定性在重来时回落到初始值
      c.d = nextD(card.d, g);
      if (g === 1) c.s = Math.min(card.s, initS(1));
    }
    if (g === 1) { c.state = 'learning'; c.step = 0; c.due = now + LEARN_STEPS[0]; }
    else if (g === 2) { c.state = 'learning'; c.due = now + (card.state === 'new' ? 6 * MIN : LEARN_STEPS[Math.min(card.step, LEARN_STEPS.length - 1)]); }
    else if (g === 3) {
      const nextStep = (card.state === 'new' ? 0 : card.step) + 1;
      if (nextStep >= LEARN_STEPS.length) { c.state = 'review'; c.step = 0; c.due = now + intervalDays(c.s) * DAY; }
      else { c.state = 'learning'; c.step = nextStep; c.due = now + LEARN_STEPS[nextStep]; }
    } else {
      // 学习中按"很熟"：稳定性给奖励，间隔严格长于"记得"
      if (card.state === 'learning') c.s = Math.max(card.s * W[16] * 0.6, card.s + 1);
      c.state = 'review'; c.step = 0;
      c.due = now + Math.max(intervalDays(c.s), intervalDays(card.s || c.s) + 1, 2) * DAY;
    }
    c.last = now;
    return c;
  }

  if (card.state === 'relearning') {
    c.d = nextD(card.d, g);
    if (g === 1) { c.due = now + RELEARN_STEP; }
    else { c.state = 'review'; c.due = now + intervalDays(c.s) * DAY; }
    c.last = now;
    return c;
  }

  // review
  const r = retrievability(elapsed, card.s);
  c.d = nextD(card.d, g);
  if (g === 1) {
    c.s = forgetS(card.d, card.s, r);
    c.lapses = card.lapses + 1;
    c.state = 'relearning';
    c.due = now + RELEARN_STEP;
  } else {
    // 保证 困难 < 良好 < 简单 的间隔顺序
    const sH = recallS(card.d, card.s, r, 2), sG = recallS(card.d, card.s, r, 3), sE = recallS(card.d, card.s, r, 4);
    let iH = intervalDays(sH), iG = intervalDays(sG), iE = intervalDays(sE);
    iG = Math.max(iG, iH + 1); iE = Math.max(iE, iG + 1);
    const pick = { 2: [sH, iH], 3: [sG, iG], 4: [sE, iE] }[g];
    c.s = pick[0];
    c.due = now + pick[1] * DAY;
  }
  c.last = now;
  return c;
}

export function fmtIvl(ms) {
  if (ms < 60 * MIN) return Math.max(1, Math.round(ms / MIN)) + '分钟';
  if (ms < DAY) return Math.round(ms / (60 * MIN)) + '小时';
  const d = Math.round(ms / DAY);
  if (d < 31) return d + '天';
  if (d < 365) return (d / 30).toFixed(d < 90 ? 1 : 0).replace(/\.0$/, '') + '个月';
  return (d / 365).toFixed(1).replace(/\.0$/, '') + '年';
}

export function preview(card, now = Date.now()) {
  const out = {};
  for (const g of [1, 2, 3, 4]) out[g] = fmtIvl(schedule(card, g, now).due - now);
  return out;
}

// "已掌握"：进入复习状态且稳定性 ≥ 21 天
export const isMature = c => c && (c.state === 'review') && c.s >= 21;
export const isLearned = c => c && c.state !== 'new';
