import { S, wordsOf, grammarOf, LANGS, addCustomWords, ensureCard, save, addReading, addInput, findScene } from '../store.js';
import { isMature, isLearned } from '../fsrs.js';
import { aiReady, generateWords, generateReading, ask } from '../ai.js';
import { speak, stop } from '../speech.js';
import { esc, romaji, toast } from '../util.js';
import { tl, readingLine, ICON, header, busy, playBtn } from '../ui.js';

function status(id) {
  const c = S().cards[id];
  if (isMature(c)) return ['m', '已掌握'];
  if (isLearned(c)) return ['l', '学习中'];
  return ['n', '未学'];
}

export function baseTabs(cur) {
  const tabs = [['map', '发音全景', '#/map'], ['words', '单词', '#/library/words'], ['grammar', '语法', '#/library/grammar']];
  return `<div class="seg tabs" role="tablist">${tabs.map(([k, n, h]) => `<a role="tab" href="${h}" class="${k === cur ? 'on' : ''}" aria-selected="${k === cur}">${n}</a>`).join('')}</div>`;
}

export function renderLibrary(el, lang, tab = 'words') {
  const M = LANGS[lang].meta;
  el.innerHTML = `${header('基础')}${baseTabs(tab)}
    <section class="lib-body"></section>`;
  const body = el.querySelector('.lib-body');
  ({ words, grammar })[tab === 'grammar' ? 'grammar' : 'words']();

  function words() {
    const list = wordsOf(lang);
    const st = list.map(w => status(`${lang}|w|${w[0]}`)[0]);
    const n = k => st.filter(x => x === k).length;
    body.innerHTML = `<p class="meta-line">共 ${list.length} 词 · 已掌握 ${n('m')} · 学习中 ${n('l')} · 未学 ${n('n')}</p>
      <div class="field"><input id="q" type="search" placeholder="搜索${M.name}或中文" lang="${lang}"></div>
      <ul class="wordlist">${list.map((w, i) => {
        const ja = lang === 'ja';
        const [k, label] = status(`${lang}|w|${w[0]}`);
        return `<li data-s="${esc((w[0] + ' ' + w[1] + ' ' + w[2]).toLowerCase())}">
          ${playBtn(ja ? w[1].split(' / ')[0] : w[0], lang)}
          <div class="w-main">${tl(w[0], lang)}<span class="w-read">${ja ? (w[1] !== w[0] ? esc(w[1]) : '') : '/' + esc(w[1]) + '/'}</span></div>
          <div class="w-mean">${esc(w[2])}</div>
          <span class="dot ${k}" title="${label}" aria-label="${label}"></span></li>`;
      }).join('')}</ul>
      <section class="panel">
        <h2>扩充词库</h2>
        <p>内置的是最高频的起步词。学得差不多了，让 AI 按词频补充下一批，并配上例句。</p>
        <div class="field"><input id="theme" type="text" placeholder="可选：侧重某个主题，如 购物、天气、工作" maxlength="40"></div>
        <button class="btn primary" id="more">${ICON.spark}补充 20 个高频词</button>
        ${aiReady() ? '' : '<p class="hint">需要先在 <a href="#/settings">设置</a> 里接入 AI。</p>'}
      </section>`;
    body.querySelector('#q').oninput = e => {
      const q = e.target.value.trim().toLowerCase();
      body.querySelectorAll('.wordlist li').forEach(li => li.hidden = q && !li.dataset.s.includes(q));
    };
    body.querySelector('#more').onclick = async e => {
      if (!aiReady()) { location.hash = '#/settings'; return; }
      const b = e.currentTarget; busy(b, true, '正在挑选，约 20 秒…');
      try {
        const ws = await generateWords(lang, 20, body.querySelector('#theme').value.trim());
        const n = addCustomWords(lang, ws);
        toast(n ? `加入了 ${n} 个新词，会按每日新词额度逐步出现在复习里` : 'AI 没有给出新的词，换个主题试试');
        renderLibrary(el, lang, 'words');
      } catch (err) { toast(err.message, 5000); busy(b, false); }
    };
  }

  function grammar() {
    const list = grammarOf(lang);
    body.innerHTML = `<p class="step-lede">语法在场景里第一次出现时学最有效。这里是全部微课，每节 1–2 分钟。</p>
      <ul class="glist">${list.map(g => `<li><a href="#/grammar/${g.id}">${esc(g.title)}</a></li>`).join('')}</ul>`;
  }
}

export function renderGrammar(el, lang, id, from) {
  const g = grammarOf(lang).find(x => x.id === id);
  if (!g) { el.innerHTML = header('找不到这节语法', '#/library/grammar'); return; }
  const back = from ? `#/scene/${from}/1` : '#/library/grammar';
  el.innerHTML = `${header(esc(g.title), back)}
    <article class="lesson" lang="zh">${g.body}</article>
    <h2>例句</h2>
    <ul class="chunks">${g.ex.map(([t, m]) => `<li>${playBtn(t, lang)}<div>${tl(t, lang)}<p class="zh">${esc(m)}</p></div></li>`).join('')}</ul>
    <section class="panel">
      <h2>还有疑问？</h2>
      <div class="field"><textarea id="q" rows="2" placeholder="例：为什么这里用 ${lang === 'ja' ? 'が 不用 は' : 'au 不用 à le'}？"></textarea></div>
      <button class="btn" id="ask">问 AI 老师</button>
      <div class="answer-box" aria-live="polite"></div>
    </section>`;
  el.querySelector('#ask').onclick = async e => {
    const q = el.querySelector('#q').value.trim();
    if (!q) return;
    if (!aiReady()) { location.hash = '#/settings'; return; }
    const b = e.currentTarget; busy(b, true, '思考中…');
    try {
      const a = await ask(lang, q, g.title + '：' + g.body.replace(/<[^>]+>/g, ' ').slice(0, 600));
      el.querySelector('.answer-box').innerHTML = `<p>${esc(a).replace(/\n+/g, '</p><p>')}</p>`;
    } catch (err) { toast(err.message, 5000); }
    busy(b, false);
  };
}

// ---------- 今日阅读 ----------
export function renderRead(el, lang, rid) {
  const list = S().readings[lang];
  if (rid) {
    const r = list.find(x => x.id === rid);
    if (!r) { location.hash = '#/read'; return; }
    return readingView(el, lang, r);
  }
  el.innerHTML = `${header('阅读', '#/today')}
    <p class="lede">用你已经会的词写成的小故事，只夹杂几个新词。这是最接近"泡在语言里"的练习：大量、能懂、有一点挑战。</p>
    <section class="panel">
      <div class="field"><input id="topic" type="text" placeholder="可选：想读什么？如 周末去市场、和猫的一天" maxlength="60"></div>
      <button class="btn primary" id="gen">${ICON.spark}生成一篇新短文</button>
      ${aiReady() ? '' : '<p class="hint">需要先在 <a href="#/settings">设置</a> 里接入 AI。</p>'}
    </section>
    ${list.length ? `<h2>读过的</h2><ul class="readlist">${list.map(r => `<li><a href="#/read/${r.id}">${tl(r.title, lang)}<span>${esc(r.titleZh)}</span><time>${new Date(r.t).toLocaleDateString('zh-CN')}</time></a></li>`).join('')}</ul>` : ''}`;
  el.querySelector('#gen').onclick = async e => {
    if (!aiReady()) { location.hash = '#/settings'; return; }
    const b = e.currentTarget; busy(b, true, '正在写，约 15 秒…');
    try {
      const r = await generateReading(lang, el.querySelector('#topic').value.trim());
      addReading(lang, r);
      location.hash = '#/read/' + r.id;
    } catch (err) { toast(err.message, 5000); busy(b, false); }
  };
}

function readingView(el, lang, r) {
  const ja = lang === 'ja';
  let playing = false;
  el.innerHTML = `${header(tl(r.title, lang), '#/read')}
    <p class="muted">${esc(r.titleZh)}</p>
    <div class="toolbar"><button class="btn primary" id="all">${ICON.play}从头朗读</button>
      <label class="check"><input type="checkbox" id="zh"> 显示中文</label></div>
    <div class="story hide-zh">${r.sentences.map((s, i) => `<p class="sent" data-i="${i}">${tl(s.t, lang)}${ja && s.r ? readingLine(s.r, romaji(s.r), lang) : ''}<span class="zh">${esc(s.zh || '')}</span></p>`).join('')}</div>
    ${r.newWords?.length ? `<h2>新词</h2><ul class="newwords">${r.newWords.map(w => `<li>${playBtn(ja ? (w[1] || w[0]) : w[0], lang)}${tl(w[0], lang)}${ja && w[1] ? `<span class="w-read">${esc(w[1])}</span>` : ''}<span>${esc(ja ? w[2] : w[1])}</span></li>`).join('')}</ul>` : ''}
    ${r.questions?.length ? `<h2>读懂了吗？</h2><ol class="qs">${r.questions.map(q => `<li><p>${esc(q.q)}</p><details><summary>看答案</summary><p>${esc(q.a)}</p></details></li>`).join('')}</ol>` : ''}
    <p class="muted">点任意一句可单独朗读。</p>`;
  const story = el.querySelector('.story');
  el.querySelector('#zh').onchange = e => story.classList.toggle('hide-zh', !e.target.checked);
  const say = i => { story.querySelectorAll('.sent').forEach(p => p.classList.toggle('now', +p.dataset.i === i)); return speak(r.sentences[i].t, lang); };
  story.onclick = e => { const p = e.target.closest('.sent'); if (p) { playing = false; say(+p.dataset.i); } };
  el.querySelector('#all').onclick = async e => {
    const b = e.currentTarget;
    if (playing) { playing = false; stop(); b.innerHTML = ICON.play + '从头朗读'; return; }
    playing = true; b.innerHTML = ICON.stop + '停止';
    for (let i = 0; i < r.sentences.length && playing; i++) { await say(i); await new Promise(res => setTimeout(res, 350)); }
    playing = false; b.innerHTML = ICON.play + '再读一遍';
  };
}
