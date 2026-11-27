// 捷径：中文母语者的对比层（#/library/bridge/<rules|words|mistakes>，小测 #/bridge-quiz）
// 日语：汉字音读规律 + 中日同形异义词；法语：英法同源规律 + 假朋友；两门都有：从语法讲解里汇总的"中国人常犯的错"
import { S, LANGS, grammarOf, grammarUnits, COURSE, masteryOf, addCustomWords, wordsOf, ensureCard, save } from '../store.js';
import * as BJ from '../data/bridge_ja.js';
import * as BF from '../data/bridge_fr.js';
import { speak, stop } from '../speech.js';
import { esc, shuffle, toast, romaji } from '../util.js';
import { ICON, header, playBtn, tl, readingLine } from '../ui.js';
import { baseTabs } from './library.js';

const DATA = { ja: BJ, fr: BF };

// 日语同形异义词 → 词库格式（可以加入复习）
const jaCards = () => BJ.falseFriends.map(w => [w[0], w[1], `${w[2]}（≠ 中文：${w[3]}）`, w[4], w[5], w[6], 'bridge']);

// 从语法讲解里摘出"中国人常犯的错"：含 ✗ 的段落
let mistakeCache = {};
export function mistakesOf(lang) {
  if (mistakeCache[lang]) return mistakeCache[lang];
  const out = [];
  for (const g of grammarOf(lang)) {
    const parts = g.body.split(/<\/?(?:li|p|tr|br)\b[^>]*>/i).map(x => x.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).filter(x => x.includes('✗'));
    if (parts.length) out.push({ g, items: parts.map(x => x.replace(/^中国(人|学生)(最)?常犯的错\s*[：:]?\s*/, '')) });
  }
  return (mistakeCache[lang] = out);
}
const markWrong = s => esc(s).replace(/✗\s*([^→；;，,。]+)/g, '<s class="mk-bad">✗ $1</s>').replace(/(✓|○)\s*([^；;，,。（(]+)/g, '<b class="mk-good">✓ $2</b>');

export function renderBridge(el, lang, sub = 'rules') {
  stop();
  const ja = lang === 'ja';
  const D = DATA[lang];
  const tabs = [['rules', ja ? '音读规律' : '同源规律'], ['words', ja ? '同形异义' : '假朋友'], ['mistakes', '常犯的错']];
  if (!tabs.some(t => t[0] === sub)) sub = 'rules';
  el.innerHTML = `${header('课程')}${baseTabs('bridge')}
    <p class="lede">${ja ? '你会中文，学日语天然有一条捷径：汉字。' : '你会英语，学法语天然有一条捷径。'}这里把它系统地整理出来，也汇总了中国人学${LANGS[lang].meta.name}最常犯的错。</p>
    <div class="seg sub-tabs">${tabs.map(([k, n]) => `<a href="#/library/bridge/${k}" class="${k === sub ? 'on' : ''}">${n}</a>`).join('')}</div>
    <section class="bridge-body"></section>`;
  const body = el.querySelector('.bridge-body');
  ({ rules, words, mistakes })[sub]();

  function rules() {
    body.innerHTML = `<p class="step-lede">${esc(D.intro)}</p>
      <a class="btn primary" href="#/bridge-quiz">${ja ? '小测：看汉字猜读音' : '小测：看英语猜法语'}</a>
      <div class="br-rules">${D.rules.map((r, i) => `<details class="br-rule" ${i < 2 ? 'open' : ''}><summary><b>${esc(r.t)}</b></summary>
        <p>${esc(r.d)}</p>
        <table class="br-ex">${ja
          ? `<tr><th>汉字</th><th>拼音</th><th>音读</th><th>例词</th></tr>${r.ex.map(x => `<tr><td class="br-k" lang="ja">${esc(x[0])}</td><td>${esc(x[1])}</td><td lang="ja">${esc(x[2])}</td><td><button class="say-inline" data-say="${esc(x[4])}" lang="ja">${esc(x[3])}</button><small lang="ja">${esc(x[4])}</small><small>${esc(x[5])}</small></td></tr>`).join('')}`
          : `<tr><th>英语</th><th>法语</th><th>中文</th></tr>${r.ex.map(x => `<tr><td lang="en">${esc(x[0])}</td><td><button class="say-inline" data-say="${esc(x[1].replace(/ · .*/, '').replace(/ \((m|f)\.\)/, ''))}" lang="fr">${esc(x[1])}</button></td><td>${esc(x[2])}</td></tr>`).join('')}`}
        </table></details>`).join('')}</div>`;
    body.onclick = e => { const b = e.target.closest('[data-say]'); if (b) speak(b.dataset.say, lang); };
  }

  function words() {
    const list = ja ? jaCards() : BF.falseFriends;
    const added = list.filter(w => S().cards[`${lang}|w|${w[0]}`]).length;
    body.innerHTML = `<p class="step-lede">${ja ? '下面这些词写法和中文一样（或几乎一样），意思却不同。最危险的不是不认识的词，而是"以为认识"的词。' : '这些法语词长得像英语词，意思却不同。会英语的人最容易在这里栽跟头。'}</p>
      <div class="row"><button class="btn primary" id="addall">全部加入复习</button><span class="muted">${added ? `已有 ${added} 个在复习中` : ''}</span></div>
      <ul class="br-words">${(ja ? BJ.falseFriends : BF.falseFriends).map(w => ja
        ? `<li>${playBtn(w[1], 'ja')}<div><p class="bw-head"><span class="tl" lang="ja">${esc(w[0])}</span><span class="w-read" lang="ja">${esc(w[1])}</span></p>
            <p class="bw-mean"><b>${esc(w[2])}</b><span class="bw-not">≠ 中文：${esc(w[3])}</span></p>
            <p class="bw-ex">${tl(w[4], 'ja')}${readingLine(w[5], romaji(w[5]), 'ja')}<span class="zh">${esc(w[6])}</span></p></div></li>`
        : `<li>${playBtn(w[0].replace(/ · .*/, '').replace(/ \((m|f)\.\)/, ''), 'fr')}<div><p class="bw-head"><span class="tl" lang="fr">${esc(w[0])}</span><span class="w-read">/${esc(w[1])}/</span></p>
            <p class="bw-mean"><b>${esc(w[2].replace(/（≠.*$/, ''))}</b><span class="bw-not">${esc((w[2].match(/（(≠.*)）$/) || [, ''])[1])}</span></p>
            <p class="bw-ex">${tl(w[3], 'fr')}<span class="zh">${esc(w[4])}</span></p></div></li>`).join('')}</ul>`;
    body.querySelector('#addall').onclick = e => {
      addCustomWords(lang, list);
      // 词库里已有的同名词：直接放进卡库，按每日新词额度出现
      let m = 0;
      for (const w of list) { const id = `${lang}|w|${w[0]}`; if (!S().cards[id]) { ensureCard(id); m++; } }
      save();
      e.currentTarget.disabled = true; e.currentTarget.textContent = '已加入复习';
      toast(m ? `加入了 ${m} 个词，会按每日新词额度出现在复习里` : '这些词都已经在复习里了');
    };
  }

  function mistakes() {
    const all = mistakesOf(lang);
    const n = all.reduce((a, x) => a + x.items.length, 0);
    body.innerHTML = `<p class="step-lede">从 ${all.length} 个语法点的讲解里汇总的 ${n} 条典型错误。先遮住右边自己判断错在哪，再看正确写法；拿不准的，点进去做专项练习。</p>
      ${all.map(({ g, items }) => { const m = masteryOf(lang, g.id); const us = grammarUnits(lang, g.id); return `<section class="mk-group">
        <h3><a href="#/grammar/${g.id}">${esc(g.title)}</a>${m ? `<span class="mbar ${m.level}"><i style="width:${m.score}%"></i></span>` : ''}</h3>
        <ul class="mk-list">${items.map(x => `<li lang="${lang}">${markWrong(x)}</li>`).join('')}</ul>
        ${us.length ? `<a class="link-btn" href="#/drill/${g.id}">专项练习</a>` : ''}
      </section>`; }).join('')}`;
  }
}

// ---------- 小测 ----------
export function renderBridgeQuiz(el, lang) {
  stop();
  const ja = lang === 'ja';
  const D = DATA[lang];
  const items = D.rules.flatMap(r => r.ex.map(x => ({ r, x })));
  const qs = shuffle(items).slice(0, 10).map(({ r, x }) => {
    const ans = ja ? x[4] : x[1];
    const pool = items.map(i => (ja ? i.x[4] : i.x[1])).filter(a => a !== ans && (!ja || Math.abs(a.length - ans.length) <= 1));
    return { r, x, ans, opts: shuffle([ans, ...shuffle([...new Set(pool)]).slice(0, 3)]) };
  });
  let i = 0, ok = 0;
  show();
  function show() {
    if (i >= qs.length) return done();
    const q = qs[i];
    el.innerHTML = `<div class="review-top"><a class="icon-btn back" href="#/library/bridge/rules" aria-label="退出">${ICON.back}</a><div class="bar"><i style="width:${i / qs.length * 100}%"></i></div><span class="count">${i + 1}/${qs.length}</span></div>
      <section class="quiz">
        <p class="eyebrow">${ja ? '这个词怎么读？' : '这个英语词，法语是？'}</p>
        <div class="q-prompt">${ja ? `<span class="q-sent" lang="ja">${esc(q.x[3])}</span><span class="q-zh">${esc(q.x[5])}</span>` : `<span class="q-sent" lang="en">${esc(q.x[0])}</span><span class="q-zh">${esc(q.x[2])}</span>`}</div>
        <div class="q-opts list n4">${q.opts.map((o, k) => `<button class="q-opt" data-i="${k}"><kbd>${k + 1}</kbd><span class="ow" lang="${lang}">${esc(o)}</span></button>`).join('')}</div>
        <div class="q-feedback" aria-live="polite"></div>
      </section>`;
    let done_ = false;
    el.querySelectorAll('.q-opt').forEach(b => b.onclick = () => {
      if (done_) return; done_ = true;
      const k = +b.dataset.i, right = q.opts[k] === q.ans;
      if (right) ok++;
      el.querySelectorAll('.q-opt').forEach((x, j) => { x.disabled = true; if (q.opts[j] === q.ans) x.classList.add('right'); else if (j === k) x.classList.add('wrong'); });
      el.querySelector('.q-feedback').innerHTML = `<div class="q-explain ${right ? 'good' : ''}"><b>${esc(q.r.t)}</b>${ja ? `${esc(q.x[0])}（${esc(q.x[1])}）→ ${esc(q.x[2])}` : `${esc(q.x[0])} → ${esc(q.x[1])}`}</div><button class="btn primary wide" id="cont">继续</button>`;
      speak(ja ? q.x[4] : q.x[1].replace(/ · .*/, ''), lang, { count: false });
      el.querySelector('#cont').onclick = () => { i++; show(); };
    });
  }
  function done() {
    el.innerHTML = `${header('小测完成', '#/library/bridge/rules')}
      <section class="done-card"><p class="done-num">${ok}<span>/ ${qs.length} 答对</span></p>
        <p class="done-note">${ja ? '规律能帮你"推"出大部分读音；推不出来的，往往正是吴音、汉音两套读音的字，单独记一下。' : '看到陌生的法语词，先想想它像哪个英语词，再按规律"还原"，命中率很高。'}</p>
        <div class="row"><a class="btn primary" href="#/bridge-quiz">再来一组</a><a class="btn ghost" href="#/library/bridge/rules">回规律</a></div></section>`;
  }
}
