// 核心课程：课程路线（#/course）、一课（#/unit/:id）、知识体系（#/library/grammar）
import {
  kanaSpeech, S, LANGS, COURSE, COURSE_DATA, courseUnit, courseState, nextCourse, courseProgress, unitWords, grammarOf, grammarLearned,
  completeCourse, foundProgress, foundReady, nextUnit, UNITS, findScene, practicePool, addSpeak,
} from '../store.js';
import { speak, stop, sttAvailable, listen } from '../speech.js';
import { esc, romaji, shuffle, toast, similarity } from '../util.js';
import { ICON, header, playBtn, tl, readingLine, frSpace } from '../ui.js';
import { baseTabs } from './library.js';

const unitNo = (lang, u) => COURSE[lang].indexOf(u) + 1;
const isMe = who => who === '我';
const stripHint = s => s.replace(/（[^）]*）/g, '').trim();
const PUNCT = /^[.,!?;:…。、！？「」]+$/;

// ======================================================================
// 课程路线
// ======================================================================
export function renderCourse(el, lang) {
  const M = LANGS[lang].meta;
  const fp = foundProgress(lang), ready = foundReady(lang), nu = nextUnit(lang);
  const cp = courseProgress(lang), nc = nextCourse(lang);
  const gate = lang === 'ja' ? 8 : 5;
  const stage1Done = !nu;
  const pool = practicePool(lang);
  el.innerHTML = `${header('课程')}${baseTabs('course')}
    <p class="lede">从发音到能开口交流，分三步走。每一步都建立在上一步之上；学过的东西会在复习和练习里反复出现，直到真正记住。</p>

    <section class="stage ${stage1Done ? 'done' : ready ? 'ok' : 'now'}">
      <div class="stage-head"><span class="stage-no">1</span><div><h2>发音入门</h2><p class="muted">${lang === 'ja' ? '平假名、片假名、浊音拗音、长音促音' : '34 个音素 + 10 条拼读规则'} · ${fp.done}/${fp.total} 课</p></div></div>
      <div class="m-bar"><i style="width:${Math.round(fp.done / fp.total * 100)}%"></i></div>
      <p class="stage-note">${stage1Done ? '已全部完成。' : ready ? `已能进入核心课程。剩下的 ${fp.total - fp.done} 课可以穿插着学。` : `先学完前 ${gate} 课（还差 ${UNITS[lang].slice(0, gate).filter(u => !S().found[lang + '|' + u.id]?.done).length} 课），就能看着${lang === 'ja' ? '假名' : '拼写'}读出新词。`}</p>
      ${nu ? `<a class="btn ${ready ? 'ghost' : 'primary'}" href="#/lesson/${nu.id}">${fp.done ? '继续' : '开始'}：${esc(nu.title)}</a>` : ''}
      <a class="btn ghost" href="#/map">发音全景</a>
    </section>

    <section class="stage ${cp.done === cp.total ? 'done' : ready ? 'now' : ''}">
      <div class="stage-head"><span class="stage-no">2</span><div><h2>核心课程 A1</h2><p class="muted">12 课 · 每课约 15 分钟 · ${cp.done}/${cp.total}</p></div></div>
      <div class="m-bar"><i style="width:${Math.round(cp.done / cp.total * 100)}%"></i></div>
      <p class="stage-note">每课一个真实情景：先听对话，再学新词和语法，最后做听、选、拼、说的练习。学完 12 课，覆盖欧洲语言框架 A1 的核心语法。${!ready ? '<br><b>建议先完成发音入门</b>，不过也可以先进来看看。' : ''}</p>
      <ol class="path">${COURSE[lang].map((u, i) => {
        const st = courseState(lang, u.id);
        const cls = st.done ? 'done' : u === nc ? 'next' : '';
        return `<li class="${cls}"><a href="#/unit/${u.id}">
          <span class="p-node">${st.done ? '✓' : u.emoji}</span>
          <span class="p-main"><small>第 ${i + 1} 课 · ${esc(u.sub)}</small><b ${lang === 'ja' ? 'lang="ja"' : ''}>${esc(u.title)}</b><em>${esc(u.can)}</em></span>
          <span class="p-state">${st.done ? (st.best ? st.best + '%' : '') : u === nc ? '开始' : ''}</span></a></li>`;
      }).join('')}</ol>
    </section>

    <section class="stage ${cp.done ? 'now' : ''}">
      <div class="stage-head"><span class="stage-no">3</span><div><h2>进阶练习</h2><p class="muted">听写 · 跟读 · 写作 · 场景对话 · 阅读</p></div></div>
      <p class="stage-note">用学过的句子反复练听、说、读、写。素材跟着你的课程走：现在有 ${pool.length} 句${cp.done ? '' : '（学完第 1 课后会更多）'}。</p>
      <a class="btn ${cp.done ? 'primary' : 'ghost'}" href="#/practice">去练习</a>
    </section>`;
}

// ======================================================================
// 知识体系：所有语法点按类别排好，标出学没学过、在哪一课学
// ======================================================================
export function renderKnowledge(el, lang) {
  const D = COURSE_DATA[lang];
  const all = grammarOf(lang);
  const learned = grammarLearned(lang);
  const byCat = {};
  const ord = g => { const L = learned[g.id]; return L ? COURSE[lang].findIndex(u => u.id === L.unit) : -1; };
  for (const g of [...all].sort((a, b) => ord(a) - ord(b))) (byCat[D.CAT[g.id] || '其他'] ||= []).push(g);
  const cats = [...D.CAT_ORDER, ...Object.keys(byCat).filter(c => !D.CAT_ORDER.includes(c))].filter(c => byCat[c]);
  const nDone = all.filter(g => learned[g.id]?.done).length;
  const unitLabel = id => { const u = courseUnit(lang, id); return u ? `第 ${unitNo(lang, u)} 课` : ''; };
  el.innerHTML = `${header('课程')}${baseTabs('grammar')}
    <p class="lede">${LANGS[lang].meta.name} A1 的语法骨架。每个点都在某一课的情景里第一次出现；学完那一课就点亮。点进去看讲解和例句，也可以问 AI 老师。</p>
    <div class="km-sum"><b>${nDone}</b> / ${all.length} 个语法点已学<div class="m-bar"><i style="width:${Math.round(nDone / all.length * 100)}%"></i></div></div>
    ${cats.map(c => {
      const list = byCat[c];
      const d = list.filter(g => learned[g.id]?.done).length;
      return `<section class="km-cat"><h2>${esc(c)} <span class="muted">${d}/${list.length}</span></h2>
        <ul class="km-list">${list.map(g => {
          const L = learned[g.id];
          return `<li class="${L?.done ? 'done' : ''}"><a href="#/grammar/${g.id}"><span class="km-dot" aria-hidden="true"></span><span class="km-t">${esc(g.title)}</span><small>${L ? (L.done ? '已学 · ' : '') + unitLabel(L.unit) : '发音入门'}</small></a></li>`;
        }).join('')}</ul></section>`;
    }).join('')}`;
}

// ======================================================================
// 一课
// ======================================================================
let keys = null;
document.addEventListener('keydown', e => { if (keys && location.hash.startsWith('#/unit/') && !e.target.matches('input,textarea')) keys(e); });

export function renderUnit(el, lang, id) {
  const unit = courseUnit(lang, id);
  if (!unit) { el.innerHTML = header('找不到这一课', '#/course'); return; }
  const ja = lang === 'ja';
  const no = unitNo(lang, unit);
  const W = unitWords(lang, unit).map(w => ja
    ? { key: w[0], w: w[0], r: w[1] !== w[0] ? w[1] : '', zh: w[2], say: w[1].split(' / ')[0], ex: w[3], exr: w[4], exzh: w[5], isNew: w[6] === 'course' }
    : { key: w[0], w: w[0], r: '/' + w[1] + '/', zh: w[2], say: w[0], ex: w[3], exzh: w[4], isNew: w[5] === 'course' });
  const G = unit.grammar.map(g => grammarOf(lang).find(x => x.id === g)).filter(Boolean);
  const DL = unit.dialogue.map(d => ja ? { who: d[0], t: d[1], r: d[2], zh: d[3] } : { who: d[0], t: d[1], zh: d[2] });
  const SE = unit.sentences.map(s => ja ? { t: s[0], r: s[1], zh: s[2] } : { t: s[0], zh: s[1] });
  const results = { words: {}, first: 0, total: 0 };
  const st = courseState(lang, unit.id);
  const say = (text, o = {}) => speak(text, lang, { count: true, ...o });

  const top = (label, pct) => `<div class="review-top"><a class="icon-btn back" href="#/course" aria-label="退出这一课">${ICON.back}</a><div class="bar"><i style="width:${pct}%"></i></div><span class="count">${esc(label)}</span></div>`;
  const rd = r => (ja && r ? readingLine(r, romaji(r), lang) : '');

  intro();

  // ---- 0. 开场 ----
  function intro() {
    stop(); keys = null;
    el.innerHTML = `${top(`第 ${no} 课`, 0)}
      <section class="lesson-intro unit-intro">
        <p class="muted">核心课程 · 第 ${no} 课</p>
        <div class="u-emoji" aria-hidden="true">${unit.emoji}</div>
        <h1 ${ja ? 'lang="ja"' : ''}>${esc(unit.title)}</h1>
        <p class="u-sub">${esc(unit.sub)}</p>
        <div class="goal"><b>学完这课，你能</b><p>${esc(unit.can)}</p></div>
        <ol class="u-plan">
          <li><span>🎬</span>情景对话<small>${DL.length} 句</small></li>
          <li><span>🧩</span>词汇<small>${W.length} 个${W.some(w => w.isNew) ? `，其中新词 ${W.filter(w => w.isNew).length}` : ''}</small></li>
          <li><span>💡</span>语法<small>${G.map(g => esc(g.title)).join('；')}</small></li>
          <li><span>✍️</span>练习<small>听 · 选 · 拼 · 接话 · 开口</small></li>
        </ol>
        <button class="btn primary wide" id="go">开始 · 约 15 分钟</button>
        ${st.done ? `<p class="hint center">已学过（首次答对 ${st.best || 0}%）。再学一遍会重新计分，但不会打乱复习安排。</p>` : ''}
      </section>`;
    el.querySelector('#go').onclick = () => dialogue();
    keys = e => { if (e.key === 'Enter') dialogue(); };
  }

  // ---- 1. 情景对话：一句一句出现 ----
  function dialogue() {
    let shown = 0, showZh = false;
    el.innerHTML = `${top('情景对话', 8)}
      <section class="dlg-wrap">
        <h2>🎬 先听，猜猜他们在说什么</h2>
        <p class="hint">点"继续"出现下一句；点任意一句可以重听。不懂没关系，后面会逐个拆开学。</p>
        <ol class="dlg"></ol>
        <div class="learn-nav"><button class="btn ghost" id="zh">显示中文</button><button class="btn ghost" id="again">${ICON.play}重听</button><button class="btn primary" id="next">继续</button></div>
      </section>`;
    const ol = el.querySelector('.dlg'), nx = el.querySelector('#next');
    const line = (d, i) => `<li class="${isMe(d.who) ? 'me' : 'other'}" data-i="${i}"><span class="who">${esc(d.who)}</span><div class="bubble">${tl(d.t, lang)}${rd(d.r)}<span class="zh">${esc(d.zh)}</span></div></li>`;
    const playLine = i => { ol.querySelectorAll('li').forEach(li => li.classList.toggle('now', +li.dataset.i === i)); return say(DL[i].t, { alt: !isMe(DL[i].who) }); };
    const step = () => {
      if (shown >= DL.length) return words();
      ol.insertAdjacentHTML('beforeend', line(DL[shown], shown));
      ol.lastElementChild.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      playLine(shown);
      shown++;
      nx.textContent = shown >= DL.length ? '学这课的词' : '继续';
      el.querySelector('.review-top .bar i').style.width = (8 + shown / DL.length * 14) + '%';
    };
    ol.onclick = e => { const li = e.target.closest('li'); if (li) playLine(+li.dataset.i); };
    el.querySelector('#zh').onclick = e => { showZh = !showZh; ol.classList.toggle('show-zh', showZh); e.currentTarget.textContent = showZh ? '隐藏中文' : '显示中文'; };
    el.querySelector('#again').onclick = () => shown && playLine(shown - 1);
    nx.onclick = step;
    keys = e => { if (e.key === 'Enter' || e.key === 'ArrowRight') step(); else if (e.key === 'r' && shown) playLine(shown - 1); };
    step();
  }

  // ---- 2a. 词汇：点卡片听、看例句 ----
  function words() {
    stop();
    const heard = new Set();
    el.innerHTML = `${top('词汇', 24)}
      <h2>🧩 这课的 ${W.length} 个词</h2>
      <p class="hint">点每张卡听发音、看例句。<b>新</b> 是第一次见的词，其余是词库里的高频词。</p>
      <div class="wcards">${W.map((w, i) => `<button class="wcard ${w.isNew ? 'is-new' : ''}" data-i="${i}">${w.isNew ? '<i class="tag new">新</i>' : ''}<span class="wc-w" lang="${lang}">${esc(w.w)}</span>${w.r ? `<span class="wc-r" ${ja ? 'lang="ja"' : ''}>${esc(w.r)}</span>` : ''}<span class="wc-zh">${esc(w.zh)}</span></button>`).join('')}</div>
      <div class="wdetail" aria-live="polite"><p class="hint">← 点一张卡</p></div>
      <div class="learn-nav"><button class="btn primary wide" id="next">配对小游戏</button></div>`;
    const det = el.querySelector('.wdetail');
    el.querySelector('.wcards').onclick = e => {
      const b = e.target.closest('.wcard'); if (!b) return;
      const w = W[+b.dataset.i];
      heard.add(w.key); b.classList.add('seen');
      el.querySelectorAll('.wcard').forEach(x => x.classList.toggle('on', x === b));
      det.innerHTML = `<div class="wd-ex">${playBtn(w.ex, lang, { label: '播放例句' })}<div>${tl(w.ex, lang)}${rd(w.exr)}<p class="zh">${esc(w.exzh)}</p></div></div>`;
      say(w.say);
    };
    el.querySelector('#next').onclick = () => match(0);
    keys = e => { if (e.key === 'Enter') match(0); };
  }

  // ---- 2b. 配对游戏：每轮 5 对 ----
  function match(round) {
    stop();
    const batch = W.slice(round * 5, round * 5 + 5);
    if (!batch.length) return grammarIntro();
    const rounds = Math.ceil(W.length / 5);
    const left = shuffle(batch), right = shuffle(batch);
    let pickL = null, pickR = null, left_ = batch.length;
    el.innerHTML = `${top(`配对 ${round + 1}/${rounds}`, 30 + round / rounds * 12)}
      <h2>把词和意思连起来</h2>
      <p class="hint">先点左边的词（会读出来），再点右边的意思。</p>
      <div class="match">
        <div class="m-col">${left.map(w => `<button class="m-it" data-k="${esc(w.key)}" data-side="l"><span lang="${lang}">${esc(w.w)}</span></button>`).join('')}</div>
        <div class="m-col">${right.map(w => `<button class="m-it" data-k="${esc(w.key)}" data-side="r">${esc(w.zh)}</button>`).join('')}</div>
      </div>`;
    const box = el.querySelector('.match');
    const check = () => {
      if (!pickL || !pickR) return;
      const a = pickL, b = pickR; pickL = pickR = null;
      if (a.dataset.k === b.dataset.k) {
        [a, b].forEach(x => { x.classList.remove('sel'); x.classList.add('matched'); x.disabled = true; });
        results.words[a.dataset.k] ||= { wrong: 0 };
        if (--left_ === 0) setTimeout(() => match(round + 1), 650);
      } else {
        const k = a.dataset.k;
        (results.words[k] ||= { wrong: 0 }).wrong = 1;
        [a, b].forEach(x => { x.classList.remove('sel'); x.classList.add('shake'); setTimeout(() => x.classList.remove('shake'), 400); });
      }
    };
    box.onclick = e => {
      const b = e.target.closest('.m-it'); if (!b || b.disabled) return;
      const side = b.dataset.side;
      box.querySelectorAll(`[data-side="${side}"]`).forEach(x => x.classList.remove('sel'));
      b.classList.add('sel');
      if (side === 'l') { pickL = b; say(W.find(w => w.key === b.dataset.k).say, { count: false }); } else pickR = b;
      check();
    };
    keys = null;
  }

  // ---- 3a. 发现规律：先猜，再看规则 ----
  function grammarIntro() {
    stop();
    const qs = unit.discover || [];
    if (!qs.length) return grammar(0);
    const q = qs[0];
    const order = shuffle(q.opts.map((o, i) => ({ o, i })));
    el.innerHTML = `${top('发现规律', 46)}
      <section class="quiz">
        <p class="eyebrow">💡 先猜一猜</p>
        <p class="q-prompt">${esc(q.q)}</p>
        <div class="q-opts n${order.length}">${order.map((x, j) => `<button class="q-opt" data-j="${j}"><kbd>${j + 1}</kbd><span class="ow" lang="${lang}">${esc(x.o)}</span></button>`).join('')}</div>
        <div class="q-feedback" aria-live="polite"></div>
      </section>`;
    let done = false;
    const pick = j => {
      if (done) return; done = true;
      const ok = order[j].i === q.a;
      el.querySelectorAll('.q-opt').forEach((b, k) => { b.disabled = true; if (order[k].i === q.a) b.classList.add('right'); else if (k === j) b.classList.add('wrong'); });
      el.querySelector('.q-feedback').innerHTML = `<div class="q-explain ${ok ? 'good' : ''}"><b>${ok ? '猜对了！' : '其实是这样：'}</b>${esc(q.why)}</div><button class="btn primary wide" id="cont">看完整规则</button>`;
      el.querySelector('#cont').onclick = () => grammar(0);
      keys = e => { if (e.key === 'Enter') grammar(0); };
    };
    el.querySelectorAll('.q-opt').forEach(b => b.onclick = () => pick(+b.dataset.j));
    keys = e => { if (/^[1-4]$/.test(e.key) && +e.key <= order.length) pick(+e.key - 1); };
  }

  // ---- 3b. 语法卡 ----
  function grammar(i) {
    stop();
    const g = G[i];
    if (!g) return practice();
    el.innerHTML = `${top(`语法 ${i + 1}/${G.length}`, 50 + i / G.length * 8)}
      <article class="lesson gcard" lang="zh"><h2>${esc(g.title)}</h2>${g.body}</article>
      <h3 class="ex-h">例句</h3>
      <ul class="chunks">${g.ex.map(([t, m]) => `<li>${playBtn(t, lang)}<div>${tl(t, lang)}<p class="zh">${esc(m)}</p></div></li>`).join('')}</ul>
      <div class="learn-nav">${i > 0 ? '<button class="btn ghost" id="prev">上一个</button>' : '<span></span>'}<span></span><button class="btn primary" id="next">${i === G.length - 1 ? '开始练习' : '下一个'}</button></div>`;
    el.querySelector('#prev')?.addEventListener('click', () => grammar(i - 1));
    el.querySelector('#next').onclick = () => grammar(i + 1);
    keys = e => { if (e.key === 'Enter') grammar(i + 1); };
  }

  // ---- 4. 练习 ----
  function practice() {
    const qs = buildUnitQuestions(lang, unit, DL, SE);
    const total = qs.filter(q => q.type !== 'speak').length;
    results.total = total;
    let qi = 0, answered = 0;
    const requeued = {};
    show();

    function show() {
      stop();
      if (qi >= qs.length) { results.score = total ? Math.round(results.first / total * 100) : 100; return finish(); }
      const q = qs[qi];
      if (typeof window.__yjTest === 'function') window.__yjTest(q);
      const pct = 60 + Math.round(answered / qs.length * 40);
      const head = `${top(`练习 ${Math.min(qi + 1, qs.length)}/${qs.length}`, pct)}`;
      if (q.type === 'build') return showBuild(q, head);
      if (q.type === 'speak') return showSpeak(q, head);
      el.innerHTML = `${head}
        <section class="quiz">
          <p class="eyebrow">${q.label}</p>
          <div class="q-prompt">${q.prompt}</div>
          ${q.listen ? `<button class="btn ghost q-play" id="replay">${ICON.play}再听一遍</button>` : ''}
          <div class="q-opts list n${q.options.length}">${q.options.map((o, i) => `<button class="q-opt" data-i="${i}"><kbd>${i + 1}</kbd>${o.html}</button>`).join('')}</div>
          <div class="q-feedback" aria-live="polite"></div>
        </section>`;
      if (q.listen) {
        const play = () => say(q.listen, { alt: q.alt, count: false });
        setTimeout(play, 200);
        el.querySelector('#replay').onclick = play;
      }
      let done = false;
      const pick = i => {
        if (done) return; done = true; answered++;
        const ok = q.options[i].correct;
        el.querySelectorAll('.q-opt').forEach((b, j) => { b.disabled = true; if (q.options[j].correct) b.classList.add('right'); else if (j === i) b.classList.add('wrong'); });
        const fb = el.querySelector('.q-feedback');
        if (ok && !q.retry) results.first++;
        if (!ok) requeue(q);
        fb.innerHTML = `${q.reveal ? `<div class="q-reveal">${q.reveal}</div>` : ''}${ok ? `<p class="ok-text">对了！${q.why ? `<span class="muted">${esc(q.why)}</span>` : ''}</p>` : `<div class="q-explain">${q.why ? esc(q.why) : '记住正确答案，过一会儿再考你一次。'}</div>`}<button class="btn ${ok ? 'ghost' : 'primary'} wide" id="cont">继续</button>`;
        const audio = q.after ? say(q.after, { count: false }) : Promise.resolve(true);
        el.querySelector('#cont').onclick = next;
        el.querySelector('#cont').focus({ preventScroll: true });
        if (ok && !q.reveal) Promise.all([audio, new Promise(r => setTimeout(r, 900))]).then(() => { if (document.body.contains(fb) && !fb.dataset.gone) next(); });
        keys = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } };
      };
      el.querySelectorAll('.q-opt').forEach(b => b.onclick = () => pick(+b.dataset.i));
      keys = e => { if (/^[1-4]$/.test(e.key) && +e.key <= q.options.length) pick(+e.key - 1); else if (e.key === 'r' && q.listen) say(q.listen, { count: false }); };
    }

    function requeue(q) {
      const key = q.type + q.key;
      if ((requeued[key] || 0) >= 1) return;
      requeued[key] = 1;
      qs.splice(Math.min(qs.length, qi + 3), 0, { ...q, retry: true, options: q.options && shuffle(q.options) });
    }
    let advancing = false;
    function next() {
      if (advancing) return;
      advancing = true;
      const fb = el.querySelector('.q-feedback'); if (fb) fb.dataset.gone = '1';
      qi++; show();
      advancing = false;
    }

    // 拼句子：点词块排成句
    function showBuild(q, head) {
      const placed = [];
      const pool = q.tiles.map((t, i) => ({ t, i }));
      const order = shuffle(pool);
      el.innerHTML = `${head}
        <section class="quiz build">
          <p class="eyebrow">${q.label}</p>
          <div class="q-prompt"><span class="q-zh">${esc(q.zh)}</span></div>
          <div class="b-ans" aria-label="你拼的句子"></div>
          <div class="b-pool">${order.map(x => `<button class="b-tile" data-i="${x.i}" ${ja ? 'lang="ja"' : 'lang="fr"'}>${esc(x.t)}</button>`).join('')}</div>
          <div class="q-feedback" aria-live="polite"><button class="btn primary wide" id="check" disabled>检查</button></div>
        </section>`;
      const ans = el.querySelector('.b-ans'), poolEl = el.querySelector('.b-pool'), chk = el.querySelector('#check');
      const draw = () => {
        ans.innerHTML = placed.map((i, k) => `<button class="b-tile on" data-k="${k}" ${ja ? 'lang="ja"' : 'lang="fr"'}>${esc(q.tiles[i])}</button>`).join('') || '<span class="hint">点下面的词块</span>';
        poolEl.querySelectorAll('.b-tile').forEach(b => b.classList.toggle('used', placed.includes(+b.dataset.i)));
        chk.disabled = placed.length !== q.tiles.length;
      };
      poolEl.onclick = e => { const b = e.target.closest('.b-tile'); if (!b || b.classList.contains('used') || done) return; placed.push(+b.dataset.i); say(q.tiles[+b.dataset.i], { count: false }); draw(); };
      ans.onclick = e => { const b = e.target.closest('.b-tile'); if (!b || done) return; placed.splice(+b.dataset.k, 1); draw(); };
      let done = false;
      chk.onclick = () => {
        if (done) return; done = true; answered++;
        const got = placed.map(i => q.tiles[i]).join(' ');
        const ok = got === q.tiles.join(' ');
        if (ok && !q.retry) results.first++;
        if (!ok) requeue(q);
        ans.classList.add(ok ? 'right' : 'wrong');
        el.querySelector('.q-feedback').innerHTML = `<div class="q-reveal">${tl(q.t, lang)}${rd(q.r)}</div>${ok ? '<p class="ok-text">完全正确！</p>' : '<div class="q-explain">正确顺序见上面。注意词序：过一会儿再拼一次。</div>'}<button class="btn primary wide" id="cont">继续</button>`;
        say(q.t, { count: false });
        el.querySelector('#cont').onclick = next;
        keys = e => { if (e.key === 'Enter') next(); };
      };
      draw();
      keys = e => { if (e.key === 'Enter' && !chk.disabled) chk.click(); else if (e.key === 'Backspace' && placed.length) { placed.pop(); draw(); } };
    }

    // 开口说：看中文说出来（语音识别打分；没有识别就自评）
    function showSpeak(q, head) {
      el.innerHTML = `${head}
        <section class="quiz speak-q">
          <p class="eyebrow">${q.label}</p>
          <div class="q-prompt"><span class="q-zh">${esc(q.zh)}</span><span class="hint">先自己说出来，再听标准答案</span></div>
          <div class="sp-box"></div>
          <div class="row center-row">
            ${sttAvailable() ? `<button class="btn primary" id="mic">${ICON.mic}按下说</button>` : ''}
            <button class="btn ${sttAvailable() ? 'ghost' : 'primary'}" id="show">看答案</button>
          </div>
          <div class="q-feedback" aria-live="polite"></div>
        </section>`;
      const box = el.querySelector('.sp-box');
      const reveal = extra => {
        box.innerHTML = `<div class="q-reveal">${playBtn(q.t, lang)}${tl(q.t, lang)}${rd(q.r)}</div>${extra || ''}`;
        el.querySelector('.q-feedback').innerHTML = '<button class="btn primary wide" id="cont">继续</button>';
        el.querySelector('#cont').onclick = () => { answered++; next(); };
        say(q.t, { count: false });
        keys = e => { if (e.key === 'Enter') { answered++; next(); } };
      };
      el.querySelector('#show').onclick = () => reveal();
      const mic = el.querySelector('#mic');
      if (mic) mic.onclick = async () => {
        stop();
        mic.disabled = true; mic.classList.add('rec'); mic.innerHTML = ICON.mic + '在听…';
        const t0 = Date.now();
        try {
          const heard = await listen(lang, { onInterim: s => { box.innerHTML = `<p class="heard">${esc(s)}</p>`; } });
          addSpeak((Date.now() - t0) / 1000);
          const sc = similarity(heard, q.t, lang, q.r);
          reveal(`<p class="heard">你说的：${esc(heard || '（没听清）')}</p><p><span class="score s${sc >= 80 ? 2 : sc >= 55 ? 1 : 0}">${sc}</span> ${sc >= 80 ? '很棒！' : sc >= 55 ? '不错，再听一遍跟读。' : '跟着标准答案再说一次。'}</p>`);
        } catch (err) { toast(err.message, 4000); reveal(); }
      };
      keys = e => { if (e.key === 'Enter') reveal(); };
    }
  }

  // ---- 5. 完成 ----
  function finish() {
    stop(); keys = null;
    const r = completeCourse(lang, unit, results);
    const nc = nextCourse(lang);
    const sc = findScene(lang, unit.scene);
    el.innerHTML = `${top('完成', 100)}
      <section class="done-card unit-done">
        <div class="seal" aria-hidden="true"><span>${unit.emoji}</span></div>
        <p class="muted">第 ${no} 课完成</p>
        <h1 ${ja ? 'lang="ja"' : ''}>${esc(unit.title)}</h1>
        <p class="can-do">✓ ${esc(unit.can)}</p>
        <ul class="done-stats"><li>首次答对 <b>${results.score}%</b></li><li>新进复习的词 <b>${r.words}</b></li><li>开口句卡 <b>${r.sents}</b></li></ul>
        <div class="lit">${G.map((g, i) => `<span style="--d:${i * 80}ms">${esc(g.title)}</span>`).join('')}</div>
        <p class="done-note">词和句子会在快要忘的时候出现在复习里。趁热打铁，用下面任意一种方式把这课"用"一次：</p>
        <div class="next-grid">
          ${sc ? `<a class="nx" href="#/scene/${sc.id}"><span>${sc.emoji}</span><b>场景实战</b><small>${esc(sc.title)}</small></a>` : ''}
          <a class="nx" href="#/practice/write?u=${unit.id}"><span>✍️</span><b>写几句</b><small>${esc(unit.write.prompt.slice(0, 18))}…</small></a>
          <a class="nx" href="#/practice/dictation"><span>🎧</span><b>听写</b><small>练耳朵和拼写</small></a>
        </div>
        <div class="row">${nc ? `<a class="btn primary" href="#/unit/${nc.id}">下一课：${esc(nc.title)}</a>` : '<p class="ok-text">12 课全部完成！A1 的骨架已经搭好了。</p>'}<a class="btn ghost" href="#/course">回课程</a></div>
      </section>`;
  }
}

// ======================================================================
// 出题
// ======================================================================
function buildUnitQuestions(lang, unit, DL, SE) {
  const ja = lang === 'ja';
  const qs = [];
  const zhPool = [...SE.map(s => s.zh), ...DL.map(d => d.zh)];
  const others = COURSE[lang].filter(u => u !== unit);
  const otherMe = others.flatMap(u => u.dialogue.filter(d => isMe(d[0])).map(d => ja ? { t: d[1], r: d[2], zh: d[3] } : { t: d[1], zh: d[2] }));
  const rd = r => (ja && r ? readingLine(r, romaji(r), lang) : '');
  const pickN = (pool, n, not) => shuffle([...new Set(pool)].filter(x => !not.includes(x))).slice(0, n);

  // 听音选义 ×2
  shuffle(SE).slice(0, 2).forEach((s, i) => {
    const wrong = pickN(zhPool, 2, [s.zh]);
    qs.push({ type: 'listen', key: 'l' + i, label: '🎧 听一听，是什么意思？', prompt: '<span class="q-ear" aria-hidden="true">🎧</span>', listen: s.t,
      options: shuffle([{ html: esc(s.zh), correct: true }, ...wrong.map(z => ({ html: esc(z), correct: false }))]),
      reveal: `${tl(s.t, lang)}${rd(s.r)}` });
  });
  // 选词填空：全部
  unit.cloze.forEach((c, i) => {
    const [sent, opts, a, zh, why] = c;
    const filled = stripHint(sent.replace('___', opts[a]));
    qs.push({ type: 'cloze', key: 'c' + i, label: '✏️ 选词填空',
      prompt: `<span class="q-sent" lang="${lang}">${esc(ja ? sent : frSpace(sent)).replace('___', '<b class="blank">　?　</b>')}</span><span class="q-zh">${esc(zh)}</span>`,
      options: shuffle(opts.map((o, j) => ({ html: `<span class="ow" lang="${lang}">${esc(o)}</span>`, correct: j === a }))), why, after: filled });
  });
  // 拼句子 ×2（选长一点的句子）
  shuffle(SE).filter(s => tilesOf(lang, s).length >= 3).slice(0, 2).forEach((s, i) => {
    qs.push({ type: 'build', key: 'b' + i, label: '🧱 拼出这句话', zh: s.zh, t: s.t, r: s.r, tiles: tilesOf(lang, s) });
  });
  // 对话接话 ×2
  const turns = DL.map((d, i) => i).filter(i => i + 1 < DL.length && !isMe(DL[i].who) && isMe(DL[i + 1].who));
  shuffle(turns).slice(0, 2).forEach((i, k) => {
    const ans = DL[i + 1];
    const mine = DL.filter(d => isMe(d.who) && d.t !== ans.t);
    const wrong = shuffle([...mine, ...shuffle(otherMe)]).filter((d, j, arr) => arr.findIndex(x => x.t === d.t) === j && d.t !== ans.t).slice(0, 2);
    qs.push({ type: 'reply', key: 'r' + k, label: '💬 对方这样说，你怎么接？',
      prompt: `<span class="q-said"><span class="who">${esc(DL[i].who)}</span>${tl(DL[i].t, lang)}</span><span class="q-zh">${esc(DL[i].zh)}</span>`,
      listen: DL[i].t, alt: true,
      options: shuffle([{ html: `<span class="ow" lang="${lang}">${esc(ans.t)}</span>`, correct: true }, ...wrong.map(d => ({ html: `<span class="ow" lang="${lang}">${esc(d.t)}</span>`, correct: false }))]),
      after: ans.t, why: ans.zh });
  });
  // 开口说 ×1（放最后）
  const sp = shuffle(SE)[0];
  const out = [...qs.filter(q => q.type === 'listen'), ...shuffle(qs.filter(q => q.type === 'cloze' || q.type === 'reply')), ...qs.filter(q => q.type === 'build')];
  if (sp) out.push({ type: 'speak', key: 's', label: '🗣️ 看中文，说出来', zh: sp.zh, t: sp.t, r: sp.r });
  return out;
}

// 拼句子的词块：法语按空格分（去掉标点，句首小写，免得一眼看出谁打头）；
// 日语按读音里的空格分（假名词块），原文里是片假名的词用片假名
const NAMES = new Set(['Lin', 'Paul', 'Léa', 'Paris', 'Lyon', 'Shanghai', 'Louvre', 'Orsay']);
export function tilesOf(lang, s) {
  if (lang === 'ja') {
    return s.r.split(/\s+/).map(x => x.replace(/[。、！？…]/g, '')).filter(Boolean).map(x => (x.length > 1 && s.t.includes(kanaSpeech(x)) ? kanaSpeech(x) : x));
  }
  const ts = s.t.split(/\s+/).map(x => x.replace(/[.,!?;:…]+$/, '')).filter(x => x && !PUNCT.test(x));
  if (ts[0] && !NAMES.has(ts[0])) ts[0] = ts[0][0].toLowerCase() + ts[0].slice(1);
  return ts;
}
