import { S, queueFor, cardView, ensureCard, rate, LANGS, noteOf, setNote } from '../store.js';
import { aiReady, mnemonic } from '../ai.js';
import { originHTML, exampleHTML, highlightFr } from './learn.js';
import { preview, MIN } from '../fsrs.js';
import { speak, stop, listen, sttAvailable } from '../speech.js';
import { esc, similarity, toast } from '../util.js';
import { tl, readingLine, ICON, header } from '../ui.js';

// 一次复习会话：到期卡 + 新卡穿插；当天学习步骤的卡片在会话内回炉
export function renderReview(el, lang) {
  const q = queueFor(lang);
  const now = Date.now();
  // 学习中/到期的先排，新卡每 3 张复习卡插 1 张
  const learningNow = q.learning.sort((a, b) => S().cards[a].due - S().cards[b].due);
  const mixed = [];
  const due = [...q.due], fresh = [...q.newCards];
  while (due.length || fresh.length) {
    for (let i = 0; i < 3 && due.length; i++) mixed.push(due.shift());
    if (fresh.length) mixed.push(fresh.shift());
  }
  let queue = [...learningNow, ...mixed].filter(id => cardView(id));
  const session = { done: 0, correct: 0, fresh: 0, t0: now, again: 0 };
  const total0 = queue.length;

  if (!queue.length) {
    el.innerHTML = `${header('复习', '#/today')}
      <div class="empty"><p class="big">今天的卡片都复习完了。</p>
      <p>记忆在间隔中巩固，明天再来效果最好。想多学一点的话：</p>
      <div class="row"><button class="btn" id="more">再加 5 个新词</button><a class="btn ghost" href="#/scenes">去学一个场景</a></div></div>`;
    el.querySelector('#more').onclick = () => {
      const extra = queueFor(lang, { extraNew: 5 }).newCards.filter(id => id.includes('|w|')).slice(0, 5);
      if (!extra.length) { el.querySelector('#more').textContent = '词库里的词都学过了'; return; }
      extra.forEach(id => ensureCard(id));
      // 用一个临时会话直接开始
      queue = extra; startSession();
    };
    return;
  }

  startSession();

  function startSession() { showNext(); }

  function pickNext() {
    // 优先已到时间的卡；若剩下的都是还没到时间的学习卡，提前学
    const t = Date.now();
    const idx = queue.findIndex(id => { const c = S().cards[id]; return !c || c.state === 'new' || c.due <= t + 20 * 1000 || (c.state !== 'learning' && c.state !== 'relearning'); });
    if (idx >= 0) return queue.splice(idx, 1)[0];
    queue.sort((a, b) => S().cards[a].due - S().cards[b].due);
    return queue.shift();
  }

  function showNext() {
    stop();
    if (!queue.length) return finish();
    const id = pickNext();
    ensureCard(id);
    const card = S().cards[id];
    const v = cardView(id);
    if (!v) return showNext();
    const isNew = card.state === 'new';
    const remaining = queue.length + 1;
    const progress = Math.min(100, Math.round((session.done / Math.max(1, session.done + remaining)) * 100));

    el.innerHTML = `
      <div class="review-top">
        <a class="icon-btn back" href="#/today" aria-label="结束复习">${ICON.back}</a>
        <div class="bar" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"><i style="width:${progress}%"></i></div>
        <span class="count">${remaining}</span>
      </div>
      <article class="flash ${v.prod ? 'prod' : ''} ${isNew ? 'is-new' : ''}">
        <div class="flash-kind">${kindLabel(v, isNew)}</div>
        <div class="flash-front">${front(v)}</div>
        <div class="flash-back" hidden>${back(v)}${memoBox(v, card)}</div>
      </article>
      <div class="flash-actions"></div>`;

    const actions = el.querySelector('.flash-actions');
    const backEl = el.querySelector('.flash-back');
    bindMemo(el, v, card);

    const reveal = () => {
      backEl.hidden = false;
      el.querySelector('.flash').classList.add('revealed');
      speak(v.speak, lang);
      showGrades();
    };

    if (isNew) {
      // 新卡：直接展示全部信息，先"认识"再进入回忆
      backEl.hidden = false;
      el.querySelector('.flash').classList.add('revealed');
      speak(v.speak, lang);
      actions.innerHTML = `<p class="hint">第一次见。听两遍、跟着读一遍，然后点"记住了"。过几分钟会考你一次。</p>
        <div class="grades two"><button class="btn ghost" data-g="4">早就会了</button><button class="btn primary" data-g="3">记住了</button></div>`;
    } else if (v.prod) {
      actions.innerHTML = `<div class="grades two">${sttAvailable() ? `<button class="btn ghost" id="say">${ICON.mic}说出来</button>` : ''}<button class="btn primary" id="show">看答案 <kbd>空格</kbd></button></div><p class="heard" aria-live="polite"></p>`;
      const sayBtn = el.querySelector('#say');
      if (sayBtn) sayBtn.onclick = async () => {
        sayBtn.disabled = true; sayBtn.classList.add('rec');
        const heardEl = el.querySelector('.heard');
        try {
          const heard = await listen(lang, { onInterim: t => heardEl.textContent = t });
          const sc = heard ? similarity(heard, v.front, lang, v.reading) : 0;
          heardEl.innerHTML = heard ? `听到：<span lang="${lang}">${esc(heard)}</span> <b class="score s${Math.floor(sc / 34)}">${sc}</b>` : '没听清，可以直接看答案。';
        } catch (e) { heardEl.textContent = e.message; }
        sayBtn.disabled = false; sayBtn.classList.remove('rec');
        reveal();
      };
      el.querySelector('#show').onclick = reveal;
    } else {
      actions.innerHTML = `<div class="grades one"><button class="btn primary" id="show">显示答案 <kbd>空格</kbd></button></div>`;
      el.querySelector('#show').onclick = reveal;
    }

    function showGrades() {
      const p = preview(card);
      actions.innerHTML = `<div class="grades four">
        <button class="btn g1" data-g="1"><b>忘了</b><small>${p[1]}</small></button>
        <button class="btn g2" data-g="2"><b>模糊</b><small>${p[2]}</small></button>
        <button class="btn g3" data-g="3"><b>记得</b><small>${p[3]}</small></button>
        <button class="btn g4" data-g="4"><b>很熟</b><small>${p[4]}</small></button></div>`;
    }

    actions.onclick = e => {
      const b = e.target.closest('[data-g]');
      if (b) grade(+b.dataset.g);
    };
    el.querySelector('.flash').onclick = e => {
      if (e.target.closest('[data-say]')) return;
      if (backEl.hidden) reveal();
    };

    function grade(g) {
      rate(id, g);
      session.done++;
      if (isNew) session.fresh++;
      if (g > 1) session.correct++; else session.again++;
      const c = S().cards[id];
      if ((c.state === 'learning' || c.state === 'relearning') && c.due - Date.now() < 30 * MIN) queue.push(id);
      showNext();
    }

    keyHandler = e => {
      if (e.target.matches('input,textarea')) return;
      if (e.code === 'Space') { e.preventDefault(); if (!backEl.hidden) return; reveal(); }
      else if (/^[1-4]$/.test(e.key) && !backEl.hidden) {
        const b = actions.querySelector(`[data-g="${e.key}"]`);
        if (b) grade(+e.key);
      } else if (e.key === 'r' || e.key === 'R') speak(v.speak, lang);
    };
  }

  function finish() {
    stop();
    const min = Math.max(1, Math.round((Date.now() - session.t0) / 60000));
    const pct = session.done ? Math.round(session.correct / session.done * 100) : 0;
    el.innerHTML = `${header('复习完成', '#/today')}
      <section class="done-card">
        <p class="done-num">${session.done}<span>次回忆</span></p>
        <ul class="done-stats">
          <li><b>${session.fresh}</b> 个新条目进入记忆</li>
          <li><b>${pct}%</b> 一次想起来</li>
          <li><b>${min}</b> 分钟</li>
        </ul>
        <p class="done-note">${pct >= 85 ? '回忆很稳。算法会把这些卡的间隔拉长，下次见面会更晚。' : pct >= 60 ? '忘掉的那些会在 10 分钟后和明天再出现，这正是记忆被加固的时候。' : '想不起来很正常，"努力回忆"本身就是在加深记忆。算法会安排它们更快回来。'}</p>
        <div class="row"><a class="btn primary" href="#/scenes">去走一个场景</a><a class="btn ghost" href="#/today">回到今天</a></div>
      </section>`;
    keyHandler = null;
  }
}

let keyHandler = null;
document.addEventListener('keydown', e => { if (keyHandler && location.hash.startsWith('#/review')) keyHandler(e); });

function kindLabel(v, isNew) {
  const k = v.kind === 'w' ? '单词' : v.kind === 's' ? (v.lang === 'ja' ? v.set : v.phoneme ? '发音' : '拼读规则') : v.kind === 'c' ? `语块 · ${esc(v.scene)}` : '纠错';
  return `${isNew ? '<span class="tag new">新</span>' : ''}<span>${k}</span>${v.prod ? '<span class="tag">说出来</span>' : ''}`;
}

function front(v) {
  const L = v.lang;
  if (v.prod) return `<p class="prompt">${esc(v.prompt)}</p><p class="sub">用${LANGS[L].meta.name}怎么说？</p>`;
  if (v.big) return `<div class="kana-big" lang="ja">${esc(v.front)}</div><p class="sub">读什么？</p>`;
  if (v.phoneme) return `<div class="pattern ipa">${esc(v.front)}</div><p class="sub">拼写：<span lang="fr">${v.item.spell.map(s => esc(s[0])).join(' · ')}</span></p><p class="sub">这个音怎么发？先在心里发一遍，再看答案</p>`;
  if (v.rule) return `<p class="prompt">${esc(v.front)}</p><p class="sub">拼读规则</p>`;
  return `<div class="word">${tl(v.front, L)} <button class="icon-btn play" data-say="${esc(v.speak)}" data-lang="${L}" aria-label="播放">${ICON.play}</button></div>`;
}

function back(v) {
  const L = v.lang;
  if (v.prod) return `<div class="answer">${tl(v.front, L)} <button class="icon-btn play" data-say="${esc(v.speak)}" data-lang="${L}" aria-label="播放">${ICON.play}</button></div>
    ${readingLine(v.reading, v.romaji, L)}${v.note ? `<p class="note">${esc(v.note)}</p>` : ''}`;
  if (v.big) return `<p class="romaji-big">${esc(v.meaning)}</p>${originHTML(v.item)}${exampleHTML(v.item)}${v.tip ? `<p class="note">${esc(v.tip)}</p>` : ''}`;
  if (v.phoneme) {
    const it = v.item;
    return `<p class="meaning">${esc(it.anchor)}</p>${it.mouth ? `<p class="note">${esc(it.mouth)}</p>` : ''}
      <div class="chips center">${it.spell.map(([g, w]) => `<button class="chip" data-say="${esc(w)}" data-lang="fr"><b lang="fr">${esc(g)}</b><span lang="fr">${highlightFr(w, g)}</span></button>`).join('')}</div>`;
  }
  if (v.rule) return `<p class="meaning">${esc(v.item.title)}</p><p class="note">${esc(v.item.body)}</p>
      <div class="chips center">${v.item.ex.map(w => `<button class="chip" data-say="${esc(w)}" data-lang="fr">${ICON.play}<span lang="fr">${esc(w)}</span></button>`).join('')}</div>`;
  return `${L === 'fr' ? `<p class="ipa">${esc(v.reading)}</p>` : readingLine(v.reading, v.romaji, L)}
    <p class="meaning">${esc(v.meaning)}</p>
    ${v.ex ? `<div class="example"><button class="icon-btn play small" data-say="${esc(v.speakEx)}" data-lang="${L}" aria-label="播放例句">${ICON.play}</button><div>${tl(v.ex, L)}${L === 'ja' ? readingLine(v.exReading, v.exRomaji, L) : ''}<p class="exm">${esc(v.exm)}</p></div></div>` : ''}`;
}

// ---------- 联想笔记：自己编的联想最好记；忘了几次的卡片会提醒你编一个 ----------
function memoBox(v, card) {
  const n = noteOf(v.id) || {};
  const leech = (card.lapses || 0) >= 2;
  const canAI = aiReady();
  return `<div class="memo ${leech ? 'leech' : ''}">
    ${leech && !n.text ? `<p class="memo-nudge">这张已经忘了 ${card.lapses} 次。给它编一个联想（谐音、字形、画面都行），下次会好记很多。</p>` : ''}
    ${n.text ? `<p class="memo-mine"><b>我的联想</b>${esc(n.text)}</p>` : ''}
    ${n.ai ? `<p class="memo-ai"><b>AI 记忆法</b>${esc(n.ai)}</p>` : ''}
    <div class="memo-edit" hidden><textarea rows="2" placeholder="例：${v.lang === 'ja' ? 'ぬ 像一根打了结的面条 → nu（面条 noodle）' : 'rue（街）读起来像"驴"——街上走着一头驴'}">${esc(n.text || '')}</textarea>
      <div class="row"><button class="btn small primary" data-memo="save">保存</button><button class="btn small ghost" data-memo="cancel">取消</button></div></div>
    <div class="memo-btns"><button class="link-btn" data-memo="edit">${n.text ? '改一下联想' : '写个联想'}</button>${canAI ? `<button class="link-btn" data-memo="ai">${n.ai ? 'AI 换一个' : 'AI 帮我想一个'}</button>` : ''}</div>
  </div>`;
}
function bindMemo(el, v, card) {
  const box = el.querySelector('.memo');
  if (!box) return;
  box.addEventListener('click', async e => {
    const b = e.target.closest('[data-memo]');
    if (!b) return;
    e.stopPropagation();
    const act = b.dataset.memo;
    const edit = box.querySelector('.memo-edit');
    if (act === 'edit') { edit.hidden = false; edit.querySelector('textarea').focus(); return; }
    if (act === 'cancel') { edit.hidden = true; return; }
    if (act === 'save') {
      const t = edit.querySelector('textarea').value.trim();
      setNote(v.id, { text: t });
      box.outerHTML = memoBox(v, card);
      bindMemo(el, v, card);
      return;
    }
    if (act === 'ai') {
      b.disabled = true; b.textContent = '想一想…';
      try { setNote(v.id, { ai: await mnemonic(v.lang, v) }); box.outerHTML = memoBox(v, card); bindMemo(el, v, card); }
      catch (err) { toast(err.message, 4000); b.disabled = false; b.textContent = 'AI 帮我想一个'; }
    }
  });
}
