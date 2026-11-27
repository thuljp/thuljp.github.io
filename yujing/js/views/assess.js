// 分级测试（#/placement）与薄弱点补练（#/drill、#/drill/<语法点>）
import {
  S, LANGS, COURSE, LEVELS, UNITS, courseState, courseProgress, grammarOf, grammarUnits, masteryOf, weakPoints,
  applyPlacement, addEvidence,
} from '../store.js';
import { speak, stop } from '../speech.js';
import { esc, shuffle } from '../util.js';
import { ICON, header, frSpace } from '../ui.js';

const stripHint = s => s.replace(/（[^）]*）/g, '').trim();

// 一道选择题：法语句子 / 日语句子（A2 起带读音）+ 中文 + 选项
function clozeQ(lang, c, extra = {}) {
  const [sent, opts, a, zh, why, cr] = c;
  const order = shuffle(opts.map((o, i) => ({ o, ok: i === a })));
  return { kind: 'cloze', sent, cr, zh, why, order, say: stripHint(sent.replace('___', opts[a])), ...extra };
}
function promptHTML(lang, q) {
  if (q.kind === 'discover') return `<p class="q-prompt">${esc(q.q)}</p>`;
  const ja = lang === 'ja';
  return `<div class="q-prompt"><span class="q-sent" lang="${lang}">${esc(ja ? q.sent : frSpace(q.sent)).replace('___', '<b class="blank">　?　</b>')}</span>${ja && q.cr ? `<span class="reading" lang="ja">${esc(q.cr).replace('___', '＿＿')}</span>` : ''}<span class="q-zh">${esc(q.zh)}</span></div>`;
}
const top = (label, pct, back) => `<div class="review-top"><a class="icon-btn back" href="${back}" aria-label="退出">${ICON.back}</a><div class="bar"><i style="width:${pct}%"></i></div><span class="count">${esc(label)}</span></div>`;

let keys = null;
document.addEventListener('keydown', e => { if (keys && /^#\/(placement|drill)/.test(location.hash) && !e.target.matches('input,textarea')) keys(e); });

// ======================================================================
// 分级测试
// ======================================================================
export function renderPlacement(el, lang) {
  stop(); keys = null;
  const M = LANGS[lang].meta;
  const prev = S().placement[lang];
  const cp = courseProgress(lang);
  el.innerHTML = `${top('分级测试', 0, '#/course')}
    <section class="lesson-intro unit-intro">
      <div class="u-emoji" aria-hidden="true">🧭</div>
      <h1>${M.name}分级测试</h1>
      <p class="u-sub">约 10 分钟 · 最多 40 题</p>
      <div class="goal"><b>测完你会知道</b><p>自己大约在哪个级别、该从第几课开始，以及哪些语法点需要补。</p></div>
      <ul class="u-plan pl-rules">
        <li><span>🎯</span><span>题目从易到难，按级别逐段推进；答得好就往后跳，吃力了就停下</span></li>
        <li><span>🤔</span><span>不会的题点<b>"不知道"</b>，别猜：猜对会把起点放得太靠后</span></li>
        <li><span>🔁</span><span>跳过的课不会消失：里面的词会按每日额度进复习，答不上来就说明要回去学</span></li>
      </ul>
      <button class="btn primary wide" id="go">开始测试</button>
      <a class="btn ghost wide" href="#/course">我是零基础，从第 1 课学起</a>
      ${prev ? `<p class="hint center">上次测试：${new Date(prev.at).toLocaleDateString('zh-CN')}，建议从第 ${prev.start + 1} 课开始（${esc(prev.level)}）。</p>` : ''}
      ${cp.done ? `<p class="hint center">你已经学了 ${cp.done} 课。测试只会把起点之前还没学的课标记为"测试通过"，不会改动已学的课。</p>` : ''}
    </section>`;
  el.querySelector('#go').onclick = () => run(el, lang);
  keys = e => { if (e.key === 'Enter') run(el, lang); };
}

function run(el, lang) {
  const levels = LEVELS[lang].map(l => l[0]);
  const all = COURSE[lang];
  const probes = [];           // { u, idx, score, qs: [..] }
  const used = new Set();
  let li = 0, asked = 0, correct = 0;
  const MAX = 40;
  nextLevel();

  function nextLevel() {
    if (li >= levels.length || asked >= MAX) return finish();
    const us = all.filter(u => u.level === levels[li]);
    const picks = [...new Set([1, 3, 5, 7].map(f => Math.min(us.length - 1, Math.floor(us.length * f / 8))))].map(i => us[i]);
    const level = picks.map(u => ({ u, idx: all.indexOf(u), score: 0, answers: [] }));
    probes.push(...level);
    let pi = 0, qi = 0;
    ask();

    function ask() {
      if (pi >= level.length || asked >= MAX) {
        const sum = level.reduce((a, p) => a + p.score, 0);
        li++;
        if (sum >= 3 && asked < MAX) return nextLevel();
        return finish();
      }
      const p = level[pi];
      const pool = p.u.cloze.map((c, i) => [c, i]).filter(([, i]) => !used.has(p.u.id + '#' + i));
      const [c, ci] = shuffle(pool)[0] || shuffle(p.u.cloze.map((x, i) => [x, i]))[0];
      used.add(p.u.id + '#' + ci);
      const q = clozeQ(lang, c);
      asked++;
      if (typeof window.__yjTest === 'function') window.__yjTest({ type: 'placement', correct: q.order.findIndex(x => x.ok), n: q.order.length, level: levels[li], unit: p.u.id });
      const pct = Math.min(95, Math.round(asked / 34 * 100));
      el.innerHTML = `${top(`${levels[li]} · 第 ${asked} 题`, pct, '#/placement')}
        <section class="quiz">
          <p class="eyebrow">选出正确的一项</p>
          ${promptHTML(lang, q)}
          <div class="q-opts list n${q.order.length}">${q.order.map((x, i) => `<button class="q-opt" data-i="${i}"><kbd>${i + 1}</kbd><span class="ow" lang="${lang}">${esc(x.o)}</span></button>`).join('')}</div>
          <button class="btn ghost wide" id="idk">不知道</button>
        </section>`;
      const answer = ok => {
        keys = null;
        p.answers.push(ok);
        if (ok) correct++;
        qi++;
        if (qi >= 2) { p.score = p.answers.filter(Boolean).length / 2; pi++; qi = 0; }
        ask();
      };
      el.querySelectorAll('.q-opt').forEach(b => b.onclick = () => answer(q.order[+b.dataset.i].ok));
      el.querySelector('#idk').onclick = () => answer(false);
      keys = e => { if (/^[1-4]$/.test(e.key) && +e.key <= q.order.length) answer(q.order[+e.key - 1].ok); else if (e.key === '0' || e.key === '?') answer(false); };
    }
  }

  function finish() {
    keys = null;
    // 起点：整级通过（4 个测试点里 ≥ 3 个全对）就推到这一级末尾；
    // 停下的那一级里，取最后一个"两题全对"的测试点之后（允许一次失误：半对且下一个全对也算通过）
    let start = 0;
    for (const L of levels) {
      const ps = probes.filter(p => p.u.level === L);
      if (!ps.length) break;
      const sum = ps.reduce((a, p) => a + p.score, 0);
      if (sum >= 3) { start = Math.max(start, all.filter(u => u.level === L).map(u => all.indexOf(u)).pop() + 1); continue; }
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i], nx = ps[i + 1];
        if (!(p.score === 1 || (p.score === 0.5 && nx && nx.score === 1))) break;
        start = Math.max(start, p.idx + 1);
      }
      break;
    }
    const startU = all[start];
    const lvName = startU ? (LEVELS[lang].find(l => l[0] === startU.level) || [])[1] : '';
    const inLevel = startU ? all.filter(u => u.level === startU.level) : [];
    const pos = startU ? inLevel.indexOf(startU) / inLevel.length : 1;
    const part = pos < 0.34 ? '开头' : pos < 0.67 ? '中段' : '后段';
    const skipFoundDefault = start >= 6;
    const byLevel = levels.map(l => ({ l, ps: probes.filter(p => p.u.level === l) })).filter(x => x.ps.length);
    el.innerHTML = `${top('测试结果', 100, '#/course')}
      <section class="done-card pl-result">
        <div class="seal" aria-hidden="true"><span>🧭</span></div>
        <p class="muted">共 ${asked} 题，答对 ${correct} 题</p>
        <h1>${start === 0 ? '建议从第 1 课开始' : startU ? `大约在 ${esc(startU.level)} ${part}` : '全部通过！'}</h1>
        <p class="can-do">${start === 0 ? '从头学最扎实，前面的课也会很快。' : startU ? `从第 ${start + 1} 课「${esc(startU.title)}」开始（${esc(lvName || '')}）` : '可以直接按知识体系查漏补缺。'}</p>
        <ul class="pl-levels">${byLevel.map(({ l, ps }) => `<li><span class="lv-tag">${l}</span><span class="pl-dots">${ps.map(p => `<i class="pl-dot s${p.score * 2}" title="第 ${p.idx + 1} 课 ${esc(p.u.title)}：${p.score === 1 ? '全对' : p.score === 0.5 ? '对一题' : '没答对'}"></i>`).join('')}</span><small>${ps.map(p => `第 ${p.idx + 1} 课 ${p.score === 1 ? '✓' : p.score === 0.5 ? '½' : '✗'}`).join(' · ')}</small></li>`).join('')}</ul>
        ${start > 0 ? `<p class="done-note">第 1–${start} 课会标记为"测试通过"，其中的语法点在知识体系里按测试结果显示掌握度；词会按每日额度出现在复习里，答不上来的就是需要回炉的。</p>
        <label class="check"><input type="checkbox" id="sf" ${skipFoundDefault ? 'checked' : ''}> 发音入门也标记为已会</label>` : ''}
        <div class="row">
          <button class="btn primary" id="apply">${start > 0 ? `从第 ${start + 1} 课开始` : '好的，从第 1 课开始'}</button>
          <a class="btn ghost" href="#/placement">重新测一次</a>
        </div>
      </section>`;
    el.querySelector('#apply').onclick = () => {
      const pr = {};
      for (const p of probes) if (p.idx < start) pr[p.u.id] = p.score;
      applyPlacement(lang, { start, probes: pr, asked, correct, skipFound: !!el.querySelector('#sf')?.checked });
      location.hash = '#/course';
    };
  }
}

// ======================================================================
// 薄弱点补练
// ======================================================================
export function renderDrill(el, lang, gid) {
  stop(); keys = null;
  const targets = gid ? grammarOf(lang).filter(g => g.id === gid) : weakPoints(lang, 3).map(x => x.g);
  const back = gid ? `#/grammar/${gid}` : '#/library/grammar';
  if (!targets.length) {
    el.innerHTML = `${header('补练', back)}<section class="empty"><p>没有需要补练的语法点。</p><p class="muted">学过的语法点掌握度都在 60 以上。继续上新课、按时复习就好。</p><a class="btn" href="#/library/grammar">看知识体系</a></section>`;
    return;
  }
  const per = targets.length === 1 ? 8 : Math.max(3, Math.floor(10 / targets.length));
  const qs = [];
  for (const g of targets) {
    const us = grammarUnits(lang, g.id);
    const pool = shuffle(us.flatMap(u => u.cloze.map(c => clozeQ(lang, c, { gid: g.id }))));
    const disc = us.flatMap(u => (u.discover || []).map(d => ({ kind: 'discover', q: d.q, why: d.why, order: shuffle(d.opts.map((o, i) => ({ o, ok: i === d.a }))), gid: g.id })));
    qs.push(...pool.slice(0, per - (disc.length ? 1 : 0)), ...disc.slice(0, 1));
  }
  const order = shuffle(qs);
  const before = Object.fromEntries(targets.map(g => [g.id, masteryOf(lang, g.id)?.score ?? null]));
  const res = Object.fromEntries(targets.map(g => [g.id, { ok: 0, n: 0 }]));
  let i = 0;
  intro();

  function intro() {
    el.innerHTML = `${top('补练', 0, back)}
      <section class="lesson-intro unit-intro">
        <div class="u-emoji" aria-hidden="true">🛠️</div>
        <h1>${targets.length === 1 ? '专项练习' : '补练薄弱点'}</h1>
        <p class="u-sub">${order.length} 题 · 约 ${Math.ceil(order.length * 0.6)} 分钟</p>
        <ul class="km-list drill-targets">${targets.map(g => { const m = masteryOf(lang, g.id); return `<li><a href="#/grammar/${g.id}"><span class="mbar ${m ? m.level : 'none'}"><i style="width:${m ? m.score : 0}%"></i></span><span class="km-t">${esc(g.title)}</span><small>${m ? m.score : '—'}</small></a></li>`; }).join('')}</ul>
        <button class="btn primary wide" id="go">开始</button>
      </section>`;
    el.querySelector('#go').onclick = show;
    keys = e => { if (e.key === 'Enter') show(); };
  }
  function show() {
    stop(); keys = null;
    if (i >= order.length) return done();
    const q = order[i];
    if (typeof window.__yjTest === 'function') window.__yjTest({ type: 'drill', correct: q.order.findIndex(x => x.ok), n: q.order.length });
    el.innerHTML = `${top(`补练 ${i + 1}/${order.length}`, Math.round(i / order.length * 100), back)}
      <section class="quiz">
        <p class="eyebrow">${q.kind === 'discover' ? '💡 想一想' : '✏️ 选词填空'}</p>
        ${promptHTML(lang, q)}
        <div class="q-opts list n${q.order.length}">${q.order.map((x, k) => `<button class="q-opt" data-i="${k}"><kbd>${k + 1}</kbd><span class="ow" lang="${lang}">${esc(x.o)}</span></button>`).join('')}</div>
        <div class="q-feedback" aria-live="polite"></div>
      </section>`;
    let answered = false;
    const pick = k => {
      if (answered) return; answered = true;
      const ok = q.order[k].ok;
      res[q.gid].n++; if (ok) res[q.gid].ok++;
      el.querySelectorAll('.q-opt').forEach((b, j) => { b.disabled = true; if (q.order[j].ok) b.classList.add('right'); else if (j === k) b.classList.add('wrong'); });
      const g = grammarOf(lang).find(x => x.id === q.gid);
      el.querySelector('.q-feedback').innerHTML = `${ok ? '<p class="ok-text">对了！</p>' : ''}<div class="q-explain ${ok ? 'good' : ''}">${esc(q.why)}<br><a href="#/grammar/${q.gid}">看「${esc(g?.title || '')}」的讲解</a></div><button class="btn primary wide" id="cont">继续</button>`;
      if (q.kind === 'cloze') speak(q.say, lang, { count: false });
      el.querySelector('#cont').onclick = () => { i++; show(); };
      keys = e => { if (e.key === 'Enter') { i++; show(); } };
    };
    el.querySelectorAll('.q-opt').forEach(b => b.onclick = () => pick(+b.dataset.i));
    keys = e => { if (/^[1-4]$/.test(e.key) && +e.key <= q.order.length) pick(+e.key - 1); };
  }
  function done() {
    keys = null;
    for (const g of targets) { const r = res[g.id]; if (r.n) addEvidence(lang, [g.id], r.ok / r.n, 1, 'drill'); }
    const total = Object.values(res).reduce((a, r) => a + r.ok, 0);
    el.innerHTML = `${top('完成', 100, back)}
      <section class="done-card">
        <p class="done-num">${total}<span>/ ${order.length} 题答对</span></p>
        <ul class="km-list drill-targets">${targets.map(g => { const m = masteryOf(lang, g.id), b = before[g.id]; return `<li><a href="#/grammar/${g.id}"><span class="mbar ${m ? m.level : 'none'}"><i style="width:${m ? m.score : 0}%"></i></span><span class="km-t">${esc(g.title)}</span><small>${b ?? '—'} → <b>${m ? m.score : '—'}</b></small></a></li>`; }).join('')}</ul>
        <p class="done-note">掌握度会随复习继续变化：隔几天再练一次，比今天连练三遍更有效。</p>
        <div class="row"><a class="btn primary" href="#/library/grammar">回知识体系</a><a class="btn ghost" href="#/today">回今天</a></div>
      </section>`;
  }
}
