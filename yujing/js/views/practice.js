// 进阶练习：练习首页（#/practice）、听写、跟读、写作
import { S, LANGS, COURSE, courseState, courseUnit, practicePool, addCorrection, addSpeak, counts, courseProgress, scenesOf, sceneState } from '../store.js';
import { speak, stop, sttAvailable, listen, startRecording } from '../speech.js';
import { aiReady, correctWriting } from '../ai.js';
import { esc, romaji, shuffle, toast, similarity, normalizeText, diffWords, dayKey } from '../util.js';
import { ICON, header, playBtn, tl, readingLine, busy } from '../ui.js';

const rd = (lang, r) => (lang === 'ja' && r ? readingLine(r, romaji(r), lang) : '');
const stripAcc = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '');

export function renderPractice(el, lang, sub, query) {
  stop();
  if (sub === 'dictation') return dictation(el, lang);
  if (sub === 'speak') return shadow(el, lang);
  if (sub === 'write') return writing(el, lang, query.get('u'));
  hub(el, lang);
}

// ---------- 首页 ----------
function hub(el, lang) {
  const pool = practicePool(lang);
  const cp = courseProgress(lang);
  const c = counts(lang);
  const scenes = scenesOf(lang);
  const sDone = scenes.filter(s => sceneState(lang, s.id).done).length;
  const items = [
    ['dictation', '🎧', '听写', '听一句，写下来。同时练耳朵和拼写，是最"硬"的听力练习。', '#/practice/dictation', '8 句 · 约 6 分钟'],
    ['speak', '🗣️', '跟读', '听原声，跟着说一遍，语音识别给你打分，标出没读准的词。', '#/practice/speak', sttAvailable() ? '6 句 · 约 5 分钟' : '这个浏览器不支持识别，可以录音自己对比'],
    ['write', '✍️', '写作', '按每课的题目写几句，AI 老师逐句批改；也可以看参考范文。', '#/practice/write', aiReady() ? 'AI 批改已接入' : '接入 AI 后可以批改'],
    ['scenes', '🎬', '场景对话', '在真实任务里用上学过的句子：跟读、角色扮演、完成任务拿印章。', '#/scenes', `${sDone}/${scenes.length} 个场景已完成`],
    ['read', '📖', '阅读 · 听力', '用你会的词写成的小故事。打开"只听不看"，先纯听，再看文字。', '#/read', aiReady() ? 'AI 按词汇量生成' : '需要接入 AI'],
    ['review', '🔁', '复习', '间隔重复：在快要忘的时候想起来一次，记得最牢。', '#/review', `${c.due} 张到期 · ${c.fresh} 个新条目`],
  ];
  const k = dayKey();
  const pick = ['dictation', 'speak', 'write', 'read'][Number(k.slice(-2)) % 4];
  el.innerHTML = `${header('练习')}
    <p class="lede">课上学过的东西，在这里用听、说、读、写反复调用，从"认识"变成"会用"。素材跟着你的课程走：${cp.done ? `已学完 ${cp.done} 课，共 ${pool.length} 句可练` : `学完第 1 课前，先用第 1 课的 ${pool.length} 句`}。</p>
    <div class="pr-grid">${items.map(([id, ic, t, d, h, m]) => `<a class="pr-card ${id === pick ? 'pick' : ''}" href="${h}">${id === pick ? '<i class="tag new">今日推荐</i>' : ''}<span class="pr-ic" aria-hidden="true">${ic}</span><b>${t}</b><p>${d}</p><small>${esc(m)}</small></a>`).join('')}</div>
    <section class="panel method">
      <h2>怎么安排</h2>
      <p>每天的底线是<b>复习</b>（10–15 分钟）。在此之上，新课学完当天做一次<b>场景</b>或<b>写作</b>，其余日子轮换<b>听写</b>和<b>跟读</b>。输入（听、读）要多，输出（说、写）要勤，每次都短一点没关系。</p>
    </section>`;
}

function pickItems(lang, n) {
  const pool = practicePool(lang).filter(x => (lang === 'ja' ? x.t.length >= 4 && x.t.length <= 28 : x.t.split(' ').length >= 2 && x.t.split(' ').length <= 11));
  const uniq = [...new Map(pool.map(x => [x.t, x])).values()];
  // 最近学的课多一些
  const recent = uniq.filter(x => x.unit === uniq[uniq.length - 1]?.unit);
  return shuffle([...shuffle(recent).slice(0, Math.ceil(n / 3)), ...shuffle(uniq)]).filter((x, i, a) => a.findIndex(y => y.t === x.t) === i).slice(0, n);
}

const topBar = (label, pct, back = '#/practice') => `<div class="review-top"><a class="icon-btn back" href="${back}" aria-label="退出">${ICON.back}</a><div class="bar"><i style="width:${pct}%"></i></div><span class="count">${esc(label)}</span></div>`;

// ---------- 听写 ----------
function grade(lang, input, it) {
  if (lang === 'ja') {
    const sc = similarity(input, it.t, 'ja', it.r.replace(/\s+/g, ''));
    return { sc };
  }
  if (normalizeText(input, 'fr') === normalizeText(it.t, 'fr')) return { sc: 100 };
  if (normalizeText(stripAcc(input), 'fr') === normalizeText(stripAcc(it.t), 'fr')) return { sc: 95, accent: true };
  return { sc: similarity(input, it.t, 'fr') };
}

function dictation(el, lang) {
  const list = pickItems(lang, 8);
  const res = [];
  let i = 0;
  show();
  function show() {
    stop();
    if (i >= list.length) return summary();
    const it = list[i];
    el.innerHTML = `${topBar(`听写 ${i + 1}/${list.length}`, i / list.length * 100)}
      <section class="dict">
        <p class="eyebrow">🎧 听写下来</p>
        <div class="dict-btns"><button class="btn primary big-play" id="play">${ICON.play}播放</button><button class="btn ghost" id="slow">🐢 慢速</button></div>
        <div class="field"><textarea id="in" rows="2" lang="${lang}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${lang === 'ja' ? '用假名或汉字输入都可以' : '注意重音符号：é è à ç ê ô…'}"></textarea></div>
        ${lang === 'fr' ? `<div class="acc-keys">${['é', 'è', 'ê', 'à', 'â', 'ç', 'ô', 'î', 'û', 'ù', 'ë', 'œ'].map(c => `<button class="chip" data-c="${c}">${c}</button>`).join('')}</div>` : ''}
        <div class="row"><button class="btn primary" id="check">检查</button><button class="link-btn" id="hint">给点提示</button></div>
        <div class="dict-out" aria-live="polite"></div>
      </section>`;
    const inp = el.querySelector('#in'), out = el.querySelector('.dict-out');
    const play = rate => speak(it.t, lang, { rate });
    setTimeout(() => play(), 250);
    el.querySelector('#play').onclick = () => play();
    el.querySelector('#slow').onclick = () => play(0.6);
    el.querySelector('#hint').onclick = () => { out.innerHTML = `<p class="hint">意思是：${esc(it.zh)}${lang === 'fr' ? ` · 共 ${it.t.split(' ').filter(w => !/^[?!.,:;]+$/.test(w)).length} 个词` : ''}</p>`; };
    el.querySelectorAll('.acc-keys .chip').forEach(b => b.onclick = () => {
      const s = inp.selectionStart, e = inp.selectionEnd;
      inp.value = inp.value.slice(0, s) + b.dataset.c + inp.value.slice(e);
      inp.focus(); inp.selectionStart = inp.selectionEnd = s + 1;
    });
    let checked = false;
    const check = () => {
      if (checked) { i++; return show(); }
      const v = inp.value.trim();
      if (!v) { inp.focus(); return; }
      checked = true;
      const g = grade(lang, v, it);
      res.push({ ...it, input: v, sc: g.sc });
      const cls = g.sc >= 90 ? 2 : g.sc >= 60 ? 1 : 0;
      out.innerHTML = `<div class="dict-res s${cls}">
        <p><span class="score s${cls}">${g.sc}</span> ${g.sc === 100 ? '完全正确！' : g.accent ? '差一点：注意重音符号。' : g.sc >= 90 ? '几乎全对！' : g.sc >= 60 ? '大部分听出来了。' : '再听几遍，对照下面的原文。'}</p>
        <div class="dict-ans">${playBtn(it.t, lang)}<div>${lang === 'fr' ? `<span class="tl" lang="fr">${diffWords(v, it.t)}</span>` : tl(it.t, lang)}${rd(lang, it.r)}<p class="zh">${esc(it.zh)}</p></div></div>
        ${g.sc < 100 ? `<p class="hint">你写的：<span lang="${lang}">${esc(v)}</span></p>` : ''}</div>`;
      el.querySelector('#check').textContent = i === list.length - 1 ? '看总结' : '下一句';
      inp.readOnly = true;
    };
    el.querySelector('#check').onclick = check;
    inp.onkeydown = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); check(); } };
    inp.focus({ preventScroll: true });
  }
  function summary() {
    const avg = Math.round(res.reduce((a, b) => a + b.sc, 0) / (res.length || 1));
    const miss = res.filter(r => r.sc < 90);
    el.innerHTML = `${topBar('完成', 100)}
      <section class="done-card">
        <p class="done-num">${avg}<span>平均分 · ${res.length - miss.length}/${res.length} 句全对或几乎全对</span></p>
        ${miss.length ? `<h2>没听准的</h2><ul class="chunks left">${miss.map(r => `<li>${playBtn(r.t, lang)}<div>${tl(r.t, lang)}${rd(lang, r.r)}<p class="zh">${esc(r.zh)} · 你写的：${esc(r.input)}</p></div></li>`).join('')}</ul>
        <button class="btn" id="add">把这 ${miss.length} 句加入复习</button>` : '<p class="ok-text">全部听写正确，耳朵越来越灵了！</p>'}
        <div class="row"><a class="btn primary" href="#/practice/dictation">再来一组</a><a class="btn ghost" href="#/practice">回练习</a></div>
      </section>`;
    el.querySelector('#add')?.addEventListener('click', e => {
      miss.forEach(r => addCorrection(lang, { t: r.t, r: r.r || '', m: r.zh, why: '听写没写对', src: '听写' }));
      e.currentTarget.disabled = true; e.currentTarget.textContent = '已加入复习';
      toast('会作为"看中文说出来"的卡片出现在复习里');
    });
  }
}

// ---------- 跟读 ----------
function shadow(el, lang) {
  const list = pickItems(lang, 6);
  const scores = [];
  let i = 0;
  show();
  function show() {
    stop();
    if (i >= list.length) return summary();
    const it = list[i];
    let rec = null;
    el.innerHTML = `${topBar(`跟读 ${i + 1}/${list.length}`, i / list.length * 100)}
      <section class="shadow">
        <p class="eyebrow">🗣️ 听一遍，跟着说</p>
        <div class="sh-card">${tl(it.t, lang, 'sh-t')}${rd(lang, it.r)}<p class="zh">${esc(it.zh)}</p></div>
        <div class="row center-row">
          <button class="btn ghost" id="play">${ICON.play}原声</button>
          <button class="btn ghost" id="slow">🐢 慢速</button>
          <button class="btn primary" id="mic">${ICON.mic}${sttAvailable() ? '跟读' : '录音'}</button>
        </div>
        <div class="sh-out" aria-live="polite"></div>
        <div class="row center-row"><button class="btn" id="next">${i === list.length - 1 ? '完成' : '下一句'}</button></div>
      </section>`;
    const out = el.querySelector('.sh-out'), mic = el.querySelector('#mic');
    setTimeout(() => speak(it.t, lang), 250);
    el.querySelector('#play').onclick = () => speak(it.t, lang);
    el.querySelector('#slow').onclick = () => speak(it.t, lang, { rate: 0.6 });
    el.querySelector('#next').onclick = () => { if (rec) rec.stop(); i++; show(); };
    mic.onclick = async () => {
      stop();
      if (sttAvailable()) {
        mic.disabled = true; mic.classList.add('rec'); mic.innerHTML = ICON.mic + '在听…';
        const t0 = Date.now();
        try {
          const heard = await listen(lang, { onInterim: s => { out.innerHTML = `<p class="heard">${esc(s)}</p>`; } });
          addSpeak((Date.now() - t0) / 1000);
          const sc = similarity(heard, it.t, lang, it.r);
          scores.push(sc);
          const cls = sc >= 80 ? 2 : sc >= 55 ? 1 : 0;
          out.innerHTML = `<p><span class="score s${cls}">${sc}</span> ${sc >= 80 ? '很准！' : sc >= 55 ? '不错，听原声再来一次。' : '放慢一点，一个词一个词跟。'}</p>
            ${lang === 'fr' ? `<p class="tl" lang="fr">${diffWords(heard, it.t)}</p>` : ''}<p class="heard">识别到：${esc(heard || '（没听清）')}</p>`;
        } catch (err) { out.innerHTML = `<p class="err-text">${esc(err.message)}</p>`; }
        mic.disabled = false; mic.classList.remove('rec'); mic.innerHTML = ICON.mic + '再说一次';
      } else {
        if (rec) {
          const r = await rec.stop(); rec = null;
          addSpeak(r.sec);
          const url = URL.createObjectURL(r.blob);
          out.innerHTML = `<p>听听自己的，再和原声比一比：</p><audio controls src="${url}"></audio>`;
          mic.classList.remove('rec'); mic.innerHTML = ICON.mic + '重录';
          return;
        }
        try { rec = await startRecording(); mic.classList.add('rec'); mic.innerHTML = ICON.stop + '停止'; }
        catch (err) { out.innerHTML = `<p class="err-text">${esc(err.message)}</p>`; }
      }
    };
  }
  function summary() {
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
    el.innerHTML = `${topBar('完成', 100)}
      <section class="done-card">
        <p class="done-num">${avg ?? '✓'}<span>${avg != null ? `平均分 · 跟读了 ${scores.length} 句` : '跟读完成'}</span></p>
        <p class="done-note">发音是肌肉记忆：每天几分钟，比偶尔一小时有效得多。</p>
        <div class="row"><a class="btn primary" href="#/practice/speak">再来一组</a><a class="btn ghost" href="#/practice">回练习</a></div>
      </section>`;
  }
}

// ---------- 写作 ----------
const draftKey = (lang, id) => `yujing.draft.${lang}.${id}`;
const getDraft = k => { try { return localStorage.getItem(k) || ''; } catch { return ''; } };
const setDraft = (k, v) => { try { v ? localStorage.setItem(k, v) : localStorage.removeItem(k); } catch {} };

function writing(el, lang, uid) {
  const units = COURSE[lang];
  const done = units.filter(u => courseState(lang, u.id).done);
  const avail = done.length ? done : units.slice(0, 1);
  if (uid === 'free' || (uid && courseUnit(lang, uid))) return editor(el, lang, uid);
  el.innerHTML = `${header('写作', '#/practice')}
    <p class="lede">写作逼你主动调用词和语法，是最能暴露问题的练习。题目来自学过的课，从两三句开始。</p>
    <ul class="wr-list">${avail.map(u => `<li><a href="#/practice/write?u=${u.id}"><span>${u.emoji}</span><div><small>第 ${units.indexOf(u) + 1} 课 · ${esc(u.title)}</small><b>${esc(u.write.prompt)}</b></div>${getDraft(draftKey(lang, u.id)) ? '<i class="tag">草稿</i>' : ''}</a></li>`).join('')}
      <li><a href="#/practice/write?u=free"><span>📝</span><div><small>自由写作</small><b>想写什么写什么：日记、计划、给朋友的消息</b></div></a></li></ul>
    ${!done.length ? '<p class="hint">学完更多课程后，这里会出现更多题目。</p>' : ''}`;
}

function editor(el, lang, uid) {
  const u = uid === 'free' ? null : courseUnit(lang, uid);
  const M = LANGS[lang].meta;
  const dk = draftKey(lang, uid);
  el.innerHTML = `${header('写作', '#/practice/write')}
    <section class="wr-task">
      ${u ? `<p class="muted">${u.emoji} 第 ${COURSE[lang].indexOf(u) + 1} 课 · ${esc(u.title)}</p><h2>${esc(u.write.prompt)}</h2>` : `<h2>自由写作</h2><div class="field"><input id="topic" type="text" maxlength="60" placeholder="题目（可选）：例如 我的周末"></div>`}
      <div class="field"><textarea id="txt" rows="5" lang="${lang}" spellcheck="false" placeholder="用${M.name}写…不会的词可以先写中文，AI 会告诉你怎么说。">${esc(getDraft(dk))}</textarea></div>
      ${lang === 'fr' ? `<div class="acc-keys">${['é', 'è', 'ê', 'à', 'â', 'ç', 'ô', 'î', 'û', 'ù', 'ë', 'œ'].map(c => `<button class="chip" data-c="${c}">${c}</button>`).join('')}</div>` : ''}
      <div class="row">
        <button class="btn primary" id="ai">✨ AI 批改</button>
        ${u ? '<button class="btn ghost" id="model">看参考范文</button>' : ''}
        <span class="muted wc" id="wc"></span>
      </div>
      ${aiReady() ? '' : '<p class="hint">AI 批改需要先在 <a href="#/settings">设置</a> 里接入（可直接用 Job Desk 的设置）。</p>'}
      <div class="wr-model" hidden></div>
      <div class="wr-out" aria-live="polite"></div>
    </section>`;
  const txt = el.querySelector('#txt'), wc = el.querySelector('#wc');
  const count = () => { const v = txt.value.trim(); wc.textContent = v ? (lang === 'ja' ? `${v.replace(/\s/g, '').length} 字` : `${v.split(/\s+/).length} 词`) : ''; setDraft(dk, txt.value); };
  txt.oninput = count; count();
  el.querySelectorAll('.acc-keys .chip').forEach(b => b.onclick = () => {
    const s = txt.selectionStart, e = txt.selectionEnd;
    txt.value = txt.value.slice(0, s) + b.dataset.c + txt.value.slice(e);
    txt.focus(); txt.selectionStart = txt.selectionEnd = s + 1; count();
  });
  el.querySelector('#model')?.addEventListener('click', e => {
    const box = el.querySelector('.wr-model');
    box.hidden = !box.hidden;
    box.innerHTML = `<h3>参考范文</h3><div class="dict-ans">${playBtn(u.write.model, lang)}<div>${tl(u.write.model, lang)}</div></div><p class="hint">先自己写，再对照。范文只是一种写法，用你会的词写对就很好。</p>`;
    e.currentTarget.textContent = box.hidden ? '看参考范文' : '收起范文';
  });
  el.querySelector('#ai').onclick = async e => {
    const text = txt.value.trim();
    if (!text) { txt.focus(); return; }
    if (!aiReady()) { location.hash = '#/settings'; return; }
    const task = u ? u.write.prompt : (el.querySelector('#topic').value.trim() || '自由写作');
    const b = e.currentTarget; busy(b, true, '批改中，约 15 秒…');
    try {
      const r = await correctWriting(lang, task, text);
      showResult(r, task);
    } catch (err) { toast(err.message, 5000); }
    busy(b, false);
  };
  function showResult(r, task) {
    const out = el.querySelector('.wr-out');
    const cs = Array.isArray(r.corrections) ? r.corrections.filter(c => c && c.better) : [];
    const sc = Math.max(0, Math.min(100, Math.round(+r.score || 0)));
    const cls = sc >= 80 ? 2 : sc >= 60 ? 1 : 0;
    out.innerHTML = `<div class="wr-res">
      <p class="wr-score"><span class="score s${cls}">${sc}</span> ${esc(r.praise || '')}</p>
      ${r.corrected ? `<h3>改好的版本</h3><div class="dict-ans">${playBtn(r.corrected, lang)}<div>${tl(r.corrected, lang)}</div></div>` : ''}
      ${cs.length ? `<h3>逐句看 <span class="muted">${cs.length} 处</span></h3><ul class="corr">${cs.map((c, i) => `<li><p class="c-you"><s lang="${lang}">${esc(c.you || '')}</s></p><p class="c-better">${playBtn(c.better, lang)}${tl(c.better, lang)}</p>${rd(lang, c.reading)}<p class="zh">${esc(c.zh || '')}</p><p class="c-why">💡 ${esc(c.why || '')}</p></li>`).join('')}</ul>
        <button class="btn" id="addc">把这 ${cs.length} 句加入复习</button>` : '<p class="ok-text">没有发现错误，写得很好！</p>'}
      ${r.upgrade ? `<h3>再进一步</h3><div class="dict-ans">${playBtn(r.upgrade, lang)}<div>${tl(r.upgrade, lang)}<p class="zh">${esc(r.upgradeZh || '')}</p></div></div>` : ''}
    </div>`;
    out.querySelector('#addc')?.addEventListener('click', ev => {
      cs.forEach(c => addCorrection(lang, { t: c.better, r: c.reading || '', m: c.zh || c.why || '', why: c.why || '', src: '写作：' + task.slice(0, 20) }));
      ev.currentTarget.disabled = true; ev.currentTarget.textContent = '已加入复习';
      toast('会作为"看中文说出来"的卡片出现在复习里');
    });
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
