import * as FR from './data/fr.js';
import * as JA from './data/ja.js';
import * as FD from './data/found.js';
import * as CF from './data/course_fr.js';
import * as CJ from './data/course_ja.js';
import { newCard, schedule, isMature, isLearned, DAY } from './fsrs.js';
import { dayKey, endOfDay, romaji, uid } from './util.js';

export const LANGS = { fr: FR, ja: JA };
export const COURSE_DATA = { fr: CF, ja: CJ };
export const COURSE = { fr: CF.units, ja: CJ.units };
const KEY = 'yujing.v1';

// 每台设备一个固定 id：每日统计按设备分开记，多设备同步时相加而不是互相覆盖
export const DEVICE = (() => {
  try {
    let id = localStorage.getItem('yujing.device');
    if (!id) { id = 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); localStorage.setItem('yujing.device', id); }
    return id;
  } catch { return 'd-local'; }
})();

const DEFAULT = {
  v: 1,
  onboarded: false,
  lang: 'fr',
  active: { fr: true, ja: true },
  settings: {
    newWords: { fr: 10, ja: 8 },
    newSounds: { fr: 4, ja: 10 },
    weeklyGoal: 5,
    reminderTime: '20:30',
    remind: false,
    ttsRate: 0.9,
    showRomaji: true,
    voice: { fr: '', ja: '' },
    ai: { preset: 'deepseek', baseUrl: 'https://api.deepseek.com', model: 'deepseek-flash', apiKey: '', proxy: '', extra: '{"thinking":{"type":"disabled"}}' },
  },
  cards: {},
  intro: {},        // { 'YYYY-MM-DD': { 'fr|w': n, 'fr|s': n } }
  dd: {},           // 按设备的每日统计 { 设备id: { 'YYYY-MM-DD': { reviews, correct, newCards, inputSec, scenes, speakSec } } }
  settingsAt: 0,    // 学习计划类设置的修改时间（多设备同步时新的生效）
  log: [],          // [t, cardId, grade, elapsedDays]
  scenes: {},       // { 'fr|cafe': { step, done, doneAt, best } }
  custom: { fr: { scenes: [], words: [] }, ja: { scenes: [], words: [] } },
  readings: { fr: [], ja: [] },
  stamps: [],       // [{ lang, sceneId, text, date }]
  found: {},        // 入门课进度 { 'ja|h1': { done, at, best, skipped } }
  notes: {},        // 卡片联想笔记 { cardId: { text, ai, t } }
  lastNotified: '',
};

let state = load();
const listeners = new Set();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULT);
    return migrate(deepMerge(structuredClone(DEFAULT), JSON.parse(raw)));
  } catch { return structuredClone(DEFAULT); }
}
function migrate(st) {
  // 旧版本的 days（不分设备）并入本设备
  if (st.days && Object.keys(st.days).length) {
    const mine = (st.dd[DEVICE] ||= {});
    for (const [k, v] of Object.entries(st.days)) mine[k] = maxRec(mine[k], v);
  }
  delete st.days;
  for (const id of Object.keys(st.cards)) if (/^fr\|s\|r\d+$/.test(id)) delete st.cards[id];
  return st;
}
function deepMerge(base, add) {
  for (const k in add) {
    if (add[k] && typeof add[k] === 'object' && !Array.isArray(add[k]) && base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) deepMerge(base[k], add[k]);
    else base[k] = add[k];
  }
  return base;
}
let saveT;
export function save() {
  dayCache = null;
  clearTimeout(saveT);
  saveT = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { console.error(e); alert('本地存储已满或不可用，请到"设置"里导出备份。'); }
  }, 150);
  listeners.forEach(f => f());
}
export const S = () => state;
export function onChange(f) { listeners.add(f); return () => listeners.delete(f); }
export function replaceState(next) { state = migrate(deepMerge(structuredClone(DEFAULT), next)); dayCache = null; save(); }
export function exportState() { return JSON.stringify(state, null, 1); }
export function resetAll() { state = structuredClone(DEFAULT); save(); }

const DAY_FIELDS = ['reviews', 'correct', 'newCards', 'inputSec', 'scenes', 'speakSec'];
const emptyRec = () => ({ reviews: 0, correct: 0, newCards: 0, inputSec: 0, scenes: 0, speakSec: 0 });
function maxRec(a, b) { const o = emptyRec(); for (const f of DAY_FIELDS) o[f] = Math.max(a?.[f] || 0, b?.[f] || 0); return o; }

// 本设备今天的记录（写入用）
export function today() {
  const k = dayKey();
  dayCache = null;
  const mine = (state.dd[DEVICE] ||= {});
  return (mine[k] ||= emptyRec());
}
// 所有设备相加后的每日记录（显示用）
let dayCache = null;
export function allDays() {
  if (dayCache) return dayCache;
  const out = {};
  for (const dev of Object.values(state.dd)) for (const [k, r] of Object.entries(dev)) {
    const o = (out[k] ||= emptyRec());
    for (const f of DAY_FIELDS) o[f] += r[f] || 0;
  }
  return (dayCache = out);
}
export function todayTotal() { return allDays()[dayKey()] || emptyRec(); }
export function addInput(sec) { if (sec > 0) { today().inputSec += sec; save(); } }
export function addSpeak(sec) { if (sec > 0) { today().speakSec += sec; save(); } }

// ---------- 内容 ----------
export function scenesOf(lang) { return [...LANGS[lang].scenes, ...state.custom[lang].scenes]; }
export function findScene(lang, id) { return scenesOf(lang).find(s => s.id === id); }
const courseWords = {}, grammarAll = {};
export function wordsOf(lang) {
  courseWords[lang] ||= COURSE[lang].flatMap(u => u.newWords);
  return [...LANGS[lang].words, ...courseWords[lang], ...state.custom[lang].words];
}
export function grammarOf(lang) { return (grammarAll[lang] ||= [...LANGS[lang].grammar, ...COURSE_DATA[lang].grammar]); }
// 发音条目：日语 = 假名（带字源和例词）；法语 = 音素 + 拼读规则
let soundCache = {};
export function soundsOf(lang) {
  if (soundCache[lang]) return soundCache[lang];
  if (lang === 'ja') {
    soundCache.ja = JA.kana.map(k => {
      const base = k.k.length === 1 ? k.k : null;
      const ex = base && FD.KANA_EX[base];
      return { ...k, origin: base ? FD.KANA_ORIGIN[base] || '' : '', originNote: FD.ORIGIN_NOTE[k.k] || '', ex: ex ? { w: ex[0], r: ex[1], zh: ex[2], emoji: ex[3] } : null };
    });
  } else {
    soundCache.fr = [...FD.FR_PHONEMES.map(p => ({ ...p, type: 'p', demo: FD.FR_DEMO[p.id][0], demoNote: FD.FR_DEMO[p.id][1] })), ...FD.FR_RULES.map(r => ({ ...r, type: 'g' }))];
  }
  return soundCache[lang];
}
export const soundById = (lang, id) => soundsOf(lang).find(x => x.id === id);
// 单独朗读一个假名时用片假名：发音相同，但语音引擎不会把 は/へ 当成助词读成 wa/e
export const kanaSpeech = k => String(k).replace(/[\u3041-\u3096]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60));
export function counterpart(kanaItem) {   // 平假名 ↔ 片假名
  const other = kanaItem.id.startsWith('h-') ? 'k-' : 'h-';
  return soundsOf('ja').find(x => x.id.startsWith(other) && x.r === kanaItem.r && x.row === kanaItem.row);
}
export function confusables(lang, id) {
  const groups = lang === 'ja' ? FD.JA_CONFUSE : FD.FR_CONFUSE;
  const key = lang === 'ja' ? soundById('ja', id)?.k : id;
  const out = new Set();
  for (const g of groups) if (g.includes(key)) g.forEach(x => x !== key && out.add(x));
  return lang === 'ja' ? [...out].map(k => soundsOf('ja').find(x => x.k === k)).filter(Boolean) : [...out].map(i => soundById('fr', i)).filter(Boolean);
}

const wordId = w => w[0];

// 把卡片 id 解析成可显示的内容
export function cardView(id) {
  const [lang, kind, ...rest] = id.split('|');
  const ref = rest.join('|');
  const M = LANGS[lang]?.meta;
  if (!M) return null;
  if (kind === 'w') {
    const w = wordsOf(lang).find(x => wordId(x) === ref);
    if (!w) return null;
    if (lang === 'fr') return { id, lang, kind, front: w[0], reading: '/' + w[1] + '/', meaning: w[2], ex: w[3], exm: w[4], speak: w[0], speakEx: w[3], tag: w[5] };
    return { id, lang, kind, front: w[0], reading: w[1] !== w[0] ? w[1] : '', romaji: romaji(w[1].split(' / ')[0]), meaning: w[2], ex: w[3], exReading: w[4], exRomaji: romaji(w[4]), exm: w[5], speak: w[1].split(' / ')[0], speakEx: w[3], tag: w[6] };
  }
  if (kind === 's') {
    const s = soundsOf(lang).find(x => x.id === ref);
    if (!s) return null;
    if (lang === 'ja') return { id, lang, kind, front: s.k, meaning: s.r, tip: s.hint, set: s.set, speak: kanaSpeech(s.k), big: true, origin: s.origin, kex: s.ex, item: s };
    if (s.type === 'p') return { id, lang, kind, phoneme: true, item: s, front: '/' + s.ipa + '/', label: s.label, speak: s.demo };
    return { id, lang, kind, rule: true, item: s, front: s.q, speak: s.ex.join(', ') };
  }
  if (kind === 'c') {
    // 语块：产出卡（看中文说外语）
    const [sceneId, idx] = ref.split('#');
    const sc = findScene(lang, sceneId);
    const c = sc?.chunks[+idx];
    if (!c) return null;
    const ja = lang === 'ja';
    return { id, lang, kind, prod: true, prompt: ja ? c[2] : c[1], front: c[0], reading: ja ? c[1] : '', romaji: ja ? romaji(c[1]) : '', speak: c[0], scene: sc.title };
  }
  if (kind === 'u') {
    // 课文句：产出卡
    const [uid_, idx] = ref.split('#');
    const u = COURSE[lang].find(x => x.id === uid_);
    const st = u?.sentences[+idx];
    if (!st) return null;
    const ja = lang === 'ja';
    return { id, lang, kind, prod: true, prompt: ja ? st[2] : st[1], front: st[0], reading: ja ? st[1] : '', romaji: ja ? romaji(st[1]) : '', speak: st[0], scene: '第' + u.id.slice(1) + '课 · ' + u.title };
  }
  if (kind === 'x') {
    const card = state.cards[id];
    const d = card?.data;
    if (!d) return null;
    return { id, lang, kind, prod: true, prompt: d.m, front: d.t, reading: d.r || '', romaji: lang === 'ja' && d.r ? romaji(d.r) : '', speak: d.t, note: d.why, scene: d.src || '复盘纠错' };
  }
  return null;
}

// ---------- 卡片 ----------
export function ensureCard(id, data) {
  if (!state.cards[id]) state.cards[id] = { ...newCard(), added: Date.now(), ...(data ? { data } : {}) };
  return state.cards[id];
}
export function rate(id, g) {
  const c = state.cards[id];
  if (!c) return;
  const wasNew = c.state === 'new';
  const elapsed = c.last ? (Date.now() - c.last) / DAY : 0;
  const prevState = c.state;
  state.cards[id] = { ...c, ...schedule(c, g) };
  const t = today();
  if (wasNew) {
    t.newCards++;
    const k = dayKey(), [lang, kind] = id.split('|');
    const bucket = (state.intro[k] ||= {});
    const key = lang + '|' + (kind === 's' ? 's' : 'w');
    bucket[key] = (bucket[key] || 0) + 1;
  }
  t.reviews++;
  if (g > 1) t.correct++;
  state.log.push([Date.now(), id, g, +elapsed.toFixed(2), prevState]);
  if (state.log.length > 6000) state.log.splice(0, state.log.length - 6000);
  save();
}

function introducedToday(lang, kind) { return state.intro[dayKey()]?.[lang + '|' + kind] || 0; }

const viewable = id => { const [lang, , ref] = id.split('|'); return !!soundById(lang, ref); };

// 新卡候选：未进卡库的条目，按顺序
function newCandidates(lang, kind) {
  // 发音条目只来自入门课：课上没考到的（例如浊音、拗音这类规则课）按每日额度逐步进入复习
  if (kind === 's') return soundsOf(lang).map(s => `${lang}|s|${s.id}`).filter(id => state.cards[id]?.state === 'new' && state.cards[id].lesson);
  // 单词：先学当前/已学场景相关词，再按词表顺序
  const doneScenes = new Set(Object.entries(state.scenes).filter(([k, v]) => k.startsWith(lang + '|') && v.step > 0).map(([k]) => k.split('|')[1]));
  // 课程：学完的课里的词最优先；课程专属的新词等学到那一课再出现
  const cw = courseWordUnits(lang);
  const doneUnit = key => cw[key] && courseState(lang, cw[key]).done;
  const list = wordsOf(lang).map((w, i) => ({ id: `${lang}|w|${wordId(w)}`, key: wordId(w), tag: lang === 'fr' ? w[5] : w[6], i }));
  const pri = x => (doneUnit(x.key) ? 0 : doneScenes.has(x.tag) ? 1 : x.tag === 'core' ? 2 : x.tag === 'num' ? 3 : 4) * 10000 + x.i;
  return list.filter(x => (!state.cards[x.id] || state.cards[x.id].state === 'new') && (x.tag !== 'course' || doneUnit(x.key))).sort((a, b) => pri(a) - pri(b)).map(x => x.id);
}

export function queueFor(lang, { extraNew = 0 } = {}) {
  const now = Date.now(), eod = endOfDay(now);
  const due = [], learning = [];
  for (const [id, c] of Object.entries(state.cards)) {
    if (!id.startsWith(lang + '|') || c.state === 'new' || c.suspended) continue;
    if (id.includes('|s|') && !viewable(id)) continue;
    if (c.state === 'learning' || c.state === 'relearning') learning.push(id);
    else if (c.due <= eod) due.push(id);
  }
  // 复习卡：最可能忘的先复习
  due.sort((a, b) => state.cards[a].due - state.cards[b].due);
  const st = state.settings;
  const wLeft = Math.max(0, st.newWords[lang] + extraNew - introducedToday(lang, 'w'));
  const sLeft = Math.max(0, st.newSounds[lang] - introducedToday(lang, 's'));
  const newW = foundReady(lang) ? newCandidates(lang, 'w').slice(0, wLeft) : [];
  const newS = newCandidates(lang, 's').slice(0, sLeft);
  // 场景语块与纠错卡（state=new，已加入卡库）优先于普通新词
  const pending = Object.entries(state.cards).filter(([id, c]) => id.startsWith(lang + '|') && c.state === 'new' && (id.includes('|c|') || id.includes('|x|') || id.includes('|u|'))).map(([id]) => id);
  return { due, learning, newCards: [...newS, ...pending, ...newW] };
}

export function counts(lang) {
  const q = queueFor(lang);
  return { due: q.due.length + q.learning.length, fresh: q.newCards.length };
}

// ---------- 统计 ----------
export function stats(lang) {
  const ids = Object.keys(state.cards).filter(id => id.startsWith(lang + '|'));
  let words = 0, wordsMature = 0, sounds = 0, chunks = 0;
  for (const id of ids) {
    const c = state.cards[id];
    if (!isLearned(c)) continue;
    if (id.includes('|w|')) { words++; if (isMature(c)) wordsMature++; }
    else if (id.includes('|s|')) { if (viewable(id)) sounds++; }
    else chunks++;
  }
  const since = Date.now() - 30 * DAY;
  const recent = state.log.filter(l => l[0] > since && l[1].startsWith(lang + '|') && l[4] === 'review');
  const retention = recent.length >= 10 ? Math.round(recent.filter(l => l[2] > 1).length / recent.length * 100) : null;
  const soundTotal = soundsOf(lang).length;
  return { words, wordsMature, sounds, soundTotal, chunks, retention, reviewsLogged: recent.length };
}

// ---------- 入门课 ----------
export const UNITS = { ja: FD.JA_UNITS, fr: FD.FR_UNITS };
export const JA_PAIRS = FD.JA_PAIRS;
export const JA_HOMOPHONE = FD.JA_HOMOPHONE;
export const JA_SKIP = FD.JA_SKIP;

export function unitItems(lang, unit) {
  if (lang === 'ja') return unit.rows.flatMap(r => soundsOf('ja').filter(k => k.set === unit.set && k.row === r));
  return unit.items.map(id => soundById('fr', id)).filter(Boolean);
}
export const unitState = (lang, id) => state.found[lang + '|' + id] || { done: false };
export const nextUnit = lang => UNITS[lang].find(u => !unitState(lang, u.id).done) || null;
export function foundProgress(lang) {
  const us = UNITS[lang];
  return { done: us.filter(u => unitState(lang, u.id).done).length, total: us.length };
}
export function foundReady(lang) {
  return (lang === 'ja' ? FD.JA_WORD_GATE : FD.FR_WORD_GATE).every(id => unitState(lang, id).done);
}
// 'n' 未学 · 'l' 学习中 · 'm' 已牢固（间隔 ≥ 21 天）
export function itemStatus(lang, itemId) {
  const c = state.cards[`${lang}|s|${itemId}`];
  return isMature(c) ? 'm' : isLearned(c) ? 'l' : 'n';
}
// 完成一课：课上答过的进入复习（答错过的间隔更短）；没考到的标记为"课上学过"，按每日额度进入复习
export function completeUnit(lang, unit, results) {
  const k = lang + '|' + unit.id, prev = state.found[k] || {};
  state.found[k] = { done: true, at: prev.at || Date.now(), best: Math.max(prev.best || 0, results.score || 0) };
  for (const it of unitItems(lang, unit)) {
    const id = `${lang}|s|${it.id}`;
    const c = ensureCard(id);
    if (c.state !== 'new') continue;            // 已经在复习的，不打乱它的排程
    const r = results.items[it.id];
    if (r) rate(id, r.wrong ? 2 : 3);
    else c.lesson = true;
  }
  save();
}
export function skipUnits(lang, ids) {
  for (const id of ids) { const k = lang + '|' + id; if (!state.found[k]?.done) state.found[k] = { done: true, skipped: true, at: Date.now() }; }
  save();
}
export function resetUnit(lang, id) { delete state.found[lang + '|' + id]; save(); }

// ---------- 核心课程 ----------
// 进度和入门课一样存在 found 里（键 'fr|c3'），所以多设备同步不用改
const cwCache = {};
export function courseWordUnits(lang) {   // 词 → 第一次出现的课
  if (cwCache[lang]) return cwCache[lang];
  const m = {};
  for (const u of COURSE[lang]) for (const k of [...u.words, ...u.newWords.map(w => w[0])]) m[k] ||= u.id;
  return (cwCache[lang] = m);
}
export const courseUnit = (lang, id) => COURSE[lang].find(u => u.id === id);
export const courseState = (lang, id) => state.found[lang + '|' + id] || { done: false };
export const nextCourse = lang => COURSE[lang].find(u => !courseState(lang, u.id).done) || null;
export function courseProgress(lang) {
  const us = COURSE[lang];
  return { done: us.filter(u => courseState(lang, u.id).done).length, total: us.length };
}
export function unitWords(lang, unit) {
  const all = wordsOf(lang);
  return [...unit.words, ...unit.newWords.map(w => w[0])].map(k => all.find(w => w[0] === k)).filter(Boolean);
}
// 学过的语法点：出现在已完成的课里
export function grammarLearned(lang) {
  const out = {};
  for (const u of COURSE[lang]) {
    const done = courseState(lang, u.id).done;
    for (const g of u.grammar) { out[g] ||= { unit: u.id, done: false }; if (done) out[g].done = true; }
  }
  return out;
}
// 现在该学什么：发音入门（到能学单词为止）→ 核心课程 → 剩下的发音课
export function nextStep(lang) {
  const nu = nextUnit(lang);
  if (!foundReady(lang) && nu) return { kind: 'found', unit: nu };
  const nc = nextCourse(lang);
  if (nc) return { kind: 'course', unit: nc };
  if (nu) return { kind: 'found', unit: nu };
  return null;
}
// 完成一课：配对游戏里的词进入复习（配错过的间隔更短），课文句子作为"开口说"卡加入卡库
export function completeCourse(lang, unit, results) {
  const k = lang + '|' + unit.id, prev = state.found[k] || {};
  const first = !prev.done;
  state.found[k] = { done: true, at: prev.at || Date.now(), best: Math.max(prev.best || 0, results.score || 0) };
  let words = 0;
  for (const w of unitWords(lang, unit)) {
    const id = `${lang}|w|${w[0]}`;
    const c = ensureCard(id);
    if (c.state !== 'new') continue;
    const r = results.words?.[w[0]];
    if (r) { rate(id, r.wrong ? 2 : 3); words++; }
  }
  let sents = 0;
  unit.sentences.forEach((_, i) => { const id = `${lang}|u|${unit.id}#${i}`; if (!state.cards[id]) { ensureCard(id); sents++; } });
  if (first) state.stamps.push({ lang, sceneId: 'course-' + unit.id, text: unit.can, title: '第' + unit.id.slice(1) + '课 ' + unit.title, emoji: unit.emoji, date: dayKey() });
  save();
  return { first, words, sents };
}
// 练习素材：已完成课程的句子（一课都没学时用第 1 课）
export function practicePool(lang) {
  const done = COURSE[lang].filter(u => courseState(lang, u.id).done);
  const units = done.length ? done : COURSE[lang].slice(0, 1);
  const ja = lang === 'ja';
  return units.flatMap(u => [
    ...u.sentences.map(s => ({ t: s[0], r: ja ? s[1] : '', zh: ja ? s[2] : s[1], unit: u.id })),
    ...u.dialogue.map(d => ({ t: d[1], r: ja ? d[2] : '', zh: ja ? d[3] : d[2], unit: u.id })),
  ]);
}

// ---------- 联想笔记 ----------
export const noteOf = id => state.notes[id];
export function setNote(id, patch) { state.notes[id] = { ...(state.notes[id] || {}), ...patch, t: Date.now() }; save(); }

export function forecast(lang, days = 7) {
  const eod = endOfDay();
  const out = new Array(days).fill(0);
  for (const [id, c] of Object.entries(state.cards)) {
    if (!id.startsWith(lang + '|') || c.state === 'new') continue;
    const idx = c.due <= eod ? 0 : Math.ceil((c.due - eod) / DAY);
    if (idx < days) out[idx]++;
  }
  return out;
}

export function studiedOn(key) {
  const d = allDays()[key];
  return !!d && (d.reviews > 0 || d.scenes > 0 || d.inputSec > 60);
}

// ---------- 场景进度 ----------
export function sceneState(lang, id) { return state.scenes[lang + '|' + id] || { step: 0, done: false }; }
export function setSceneStep(lang, id, step) {
  const k = lang + '|' + id;
  const s = (state.scenes[k] ||= { step: 0, done: false });
  s.step = Math.max(s.step, step);
  save();
}
export function completeScene(lang, scene, score) {
  const k = lang + '|' + scene.id;
  const s = (state.scenes[k] ||= { step: 0, done: false });
  const first = !s.done;
  s.done = true; s.step = 5; s.doneAt ||= Date.now();
  if (score != null) s.best = Math.max(s.best || 0, score);
  if (first) {
    state.stamps.push({ lang, sceneId: scene.id, text: scene.cando, title: scene.title, emoji: scene.emoji, date: dayKey() });
    today().scenes++;
  }
  save();
  return first;
}
// 把场景语块加入卡库
export function addSceneChunks(lang, scene) {
  let n = 0;
  scene.chunks.forEach((_, i) => { const id = `${lang}|c|${scene.id}#${i}`; if (!state.cards[id]) { ensureCard(id); n++; } });
  save();
  return n;
}
export function addCorrection(lang, data) {
  const id = `${lang}|x|${uid()}`;
  ensureCard(id, data);
  save();
  return id;
}
export function addCustomScene(lang, scene) { state.custom[lang].scenes.push(scene); save(); }
export function addCustomWords(lang, list) {
  const have = new Set(wordsOf(lang).map(w => w[0]));
  const fresh = list.filter(w => !have.has(w[0]));
  state.custom[lang].words.push(...fresh);
  save();
  return fresh.length;
}
export function addReading(lang, r) { state.readings[lang].unshift(r); state.readings[lang] = state.readings[lang].slice(0, 30); save(); }

export function knownWordList(lang, max = 300) {
  return wordsOf(lang).filter(w => isLearned(state.cards[`${lang}|w|${w[0]}`])).slice(0, max).map(w => w[0]);
}

// ---------- 多设备同步：载荷与合并 ----------
// 只同步学习数据和学习计划；API Key、声音、语速、当前语言等留在本设备
const SYNC_SETTINGS = ['newWords', 'newSounds', 'weeklyGoal', 'reminderTime', 'showRomaji'];

export function syncPayload(st = state) {
  const settings = {};
  for (const k of SYNC_SETTINGS) settings[k] = st.settings[k];
  return {
    app: 'yujing', v: 2, updatedAt: new Date().toISOString(),
    onboarded: st.onboarded, active: st.active, settings, settingsAt: st.settingsAt || 0,
    cards: st.cards, intro: st.intro, dd: st.dd, log: st.log, scenes: st.scenes,
    custom: st.custom, readings: st.readings, stamps: st.stamps, found: st.found, notes: st.notes,
  };
}

const newer = (a, b) => {
  if (!a) return b; if (!b) return a;
  if ((a.last || 0) !== (b.last || 0)) return (a.last || 0) > (b.last || 0) ? a : b;
  if ((a.reps || 0) !== (b.reps || 0)) return (a.reps || 0) > (b.reps || 0) ? a : b;
  return a;
};
const unionBy = (a = [], b = [], key) => { const m = new Map(); [...b, ...a].forEach(x => m.set(key(x), x)); return [...m.values()]; };

// 本地状态 + 远程载荷 → 合并后的完整本地状态（不修改入参）
export function mergeStates(local, remote) {
  const out = structuredClone(local);
  if (!remote || typeof remote !== 'object') return out;
  out.onboarded = !!(local.onboarded || remote.onboarded);

  // 卡片：每张取"最近一次复习"更晚的版本
  for (const [id, rc] of Object.entries(remote.cards || {})) out.cards[id] = newer(local.cards[id], rc);

  // 复习日志：并集
  const seen = new Set(out.log.map(l => l[0] + '|' + l[1]));
  for (const l of remote.log || []) if (!seen.has(l[0] + '|' + l[1])) out.log.push(l);
  out.log.sort((a, b) => a[0] - b[0]);
  if (out.log.length > 6000) out.log.splice(0, out.log.length - 6000);

  // 每日统计：每台设备只写自己那份，逐项取大
  for (const [dev, days] of Object.entries(remote.dd || {})) {
    const mine = (out.dd[dev] ||= {});
    for (const [k, r] of Object.entries(days)) mine[k] = maxRec(mine[k], r);
  }
  // 每日新卡计数：取大
  for (const [k, r] of Object.entries(remote.intro || {})) {
    const o = (out.intro[k] ||= {});
    for (const [kk, n] of Object.entries(r)) o[kk] = Math.max(o[kk] || 0, n || 0);
  }
  // 场景进度
  for (const [k, r] of Object.entries(remote.scenes || {})) {
    const l = out.scenes[k];
    if (!l) { out.scenes[k] = r; continue; }
    out.scenes[k] = {
      step: Math.max(l.step || 0, r.step || 0), done: !!(l.done || r.done),
      doneAt: Math.min(l.doneAt || Infinity, r.doneAt || Infinity) === Infinity ? undefined : Math.min(l.doneAt || Infinity, r.doneAt || Infinity),
      best: Math.max(l.best || 0, r.best || 0) || undefined,
    };
  }
  // AI 生成的场景、词、阅读，能力印章：并集
  for (const lang of Object.keys(LANGS)) {
    const lc = (out.custom[lang] ||= { scenes: [], words: [] }), rc = remote.custom?.[lang] || {};
    lc.scenes = unionBy(lc.scenes, rc.scenes, s => s.id);
    lc.words = unionBy(lc.words, rc.words, w => w[0]);
    out.readings[lang] = unionBy(out.readings[lang], remote.readings?.[lang], r => r.id).sort((a, b) => b.t - a.t).slice(0, 30);
  }
  const stamps = new Map();
  for (const x of [...(remote.stamps || []), ...out.stamps]) {
    const k = x.lang + '|' + x.sceneId, prev = stamps.get(k);
    if (!prev || x.date < prev.date) stamps.set(k, x);
  }
  out.stamps = [...stamps.values()].sort((a, b) => (a.date < b.date ? -1 : 1));

  // 入门课：完成过就算完成；联想笔记：后写的生效
  for (const [k, r] of Object.entries(remote.found || {})) {
    const l = out.found[k];
    if (!l) { out.found[k] = r; continue; }
    const at = Math.min(l.at || Infinity, r.at || Infinity);
    out.found[k] = { done: !!(l.done || r.done), at: at === Infinity ? undefined : at, best: Math.max(l.best || 0, r.best || 0) || undefined, ...(l.skipped && r.skipped ? { skipped: true } : {}) };
  }
  for (const [id, r] of Object.entries(remote.notes || {})) {
    const l = out.notes[id];
    if (!l || (r.t || 0) > (l.t || 0)) out.notes[id] = r;
  }

  // 学习计划设置：后改的生效
  const lAt = local.settingsAt || 0, rAt = remote.settingsAt || 0;
  if (rAt > lAt || (lAt <= 1 && rAt >= 1)) {   // 远程更新，或本机还只是首次设置的默认值
    for (const k of SYNC_SETTINGS) if (remote.settings?.[k] !== undefined) out.settings[k] = remote.settings[k];
    if (remote.active) out.active = { ...out.active, ...remote.active };
    out.settingsAt = remote.settingsAt;
    if (!out.active[out.lang]) out.lang = Object.keys(out.active).find(k => out.active[k]) || out.lang;
  }
  return out;
}

// 原地更新（保持对象引用不变，正在打开的页面里拿着的 state / settings 引用依然有效）
function assignDeep(target, src) {
  for (const k of Object.keys(src)) {
    const v = src[k];
    if (v && typeof v === 'object' && !Array.isArray(v) && target[k] && typeof target[k] === 'object' && !Array.isArray(target[k])) assignDeep(target[k], v);
    else target[k] = v;
  }
}
export function applyMerged(next) { assignDeep(state, next); dayCache = null; save(); }
export function touchSettings() { state.settingsAt = Date.now(); }
