import { S, save, scenesOf, findScene, sceneState, setSceneStep, completeScene, addSceneChunks, addCorrection, addCustomScene, addCustomWords, addSpeak, LANGS, grammarOf } from '../store.js';
import { speak, stop, listen, sttAvailable, startRecording } from '../speech.js';
import { aiReady, roleplayTurn, roleplayFeedback, generateScene } from '../ai.js';
import { esc, similarity, diffWords, romaji, toast } from '../util.js';
import { tl, readingLine, ICON, header, busy, playBtn } from '../ui.js';

const STEPS = ['语块预热', '沉浸听', '跟读', '角色扮演', '复盘'];

// ---------- 场景列表 ----------
export function renderScenes(el, lang) {
  const M = LANGS[lang].meta;
  const list = scenesOf(lang);
  const doneN = list.filter(s => sceneState(lang, s.id).done).length;
  el.innerHTML = `${header('场景')}
    <p class="lede">每个场景走五步：先拿到关键语块，再沉浸听、跟读、和 AI 角色扮演，最后复盘。完成一个场景，盖一个能力章。</p>
    <p class="meta-line">${M.flag} ${M.name} · 已完成 ${doneN} / ${list.length}</p>
    <ol class="route">
      ${list.map((s, i) => {
        const st = sceneState(lang, s.id);
        return `<li class="route-item ${st.done ? 'done' : st.step ? 'going' : ''}">
          <a href="#/scene/${s.id}">
            <span class="route-dot" aria-hidden="true">${st.done ? '✓' : i + 1}</span>
            <span class="route-body">
              <span class="route-title">${s.emoji} ${esc(s.title)} ${s.ai ? '<span class="tag">AI</span>' : ''}</span>
              <span class="route-place">${tl(s.place, lang)}</span>
              <span class="route-can">${esc(s.cando)}</span>
            </span>
            <span class="route-state">${st.done ? '<span class="mini-stamp">已盖章</span>' : st.step ? `${st.step}/5` : ''}</span>
          </a></li>`;
      }).join('')}
    </ol>
    <section class="panel">
      <h2>想练别的场景？</h2>
      <p>说说你接下来会遇到的情境，AI 会按你的水平生成一个完整的场景单元（语块、对话、任务和新词）。</p>
      <div class="field"><input id="wish" type="text" placeholder="例：${lang === 'ja' ? '在药妆店问店员推荐防晒霜' : '在药店说自己感冒了，买药'}" maxlength="80"></div>
      <button class="btn primary" id="gen">${ICON.spark}生成新场景</button>
      ${aiReady() ? '' : '<p class="hint">需要先在 <a href="#/settings">设置</a> 里接入 AI。</p>'}
    </section>`;
  el.querySelector('#gen').onclick = async e => {
    if (!aiReady()) { location.hash = '#/settings'; return; }
    const btn = e.currentTarget;
    busy(btn, true, '正在设计场景，约 20 秒…');
    try {
      const { scene, words } = await generateScene(lang, el.querySelector('#wish').value.trim());
      addCustomScene(lang, scene);
      const n = addCustomWords(lang, words);
      toast(`新场景已加入${n ? `，另有 ${n} 个新词进入词库` : ''}`);
      location.hash = '#/scene/' + scene.id;
    } catch (err) { toast(err.message, 5000); busy(btn, false); }
  };
}

// ---------- 场景详情 ----------
export function renderScene(el, lang, id, stepParam) {
  const sc = findScene(lang, id);
  if (!sc) { el.innerHTML = header('找不到这个场景', '#/scenes'); return; }
  const st = sceneState(lang, id);
  let step = stepParam ? +stepParam : Math.min(st.done ? 1 : st.step + 1, 5);
  if (step > 5 || step < 1) step = 1;
  const ja = lang === 'ja';
  // 统一对话行格式
  const lines = sc.dialogue.map(d => ja ? { who: d[0], t: d[1], r: d[2], m: d[3], me: d[0] === '我' } : { who: d[0], t: d[1], r: '', m: d[2], me: d[0] === '我' });
  const chunks = sc.chunks.map(c => ja ? { t: c[0], r: c[1], m: c[2] } : { t: c[0], r: '', m: c[1] });

  const go = n => { stop(); location.hash = `#/scene/${id}/${n}`; };
  const finishStep = n => { setSceneStep(lang, id, n); go(n + 1); };

  el.innerHTML = `${header(`${sc.emoji} ${esc(sc.title)}`, '#/scenes')}
    <p class="scene-can">${esc(sc.cando)}</p>
    <ol class="stepper">${STEPS.map((s, i) => `<li class="${i + 1 === step ? 'cur' : ''} ${i + 1 <= st.step ? 'ok' : ''}"><a href="#/scene/${id}/${i + 1}"><span>${i + 1}</span>${s}</a></li>`).join('')}</ol>
    <section class="step-body"></section>`;
  const body = el.querySelector('.step-body');

  ({ 1: stepChunks, 2: stepListen, 3: stepShadow, 4: stepRoleplay, 5: stepReview })[step]();

  // ① 语块预热
  function stepChunks() {
    const gl = grammarOf(lang).filter(g => sc.grammar?.includes(g.id));
    body.innerHTML = `<p class="step-lede">这几句是这个场景的"骨架"。整句记，不拆开分析。每句点开听两遍，小声跟一遍。</p>
      <ul class="chunks">${chunks.map(c => `<li>${playBtn(c.t, lang)}<div>${tl(c.t, lang, 'chunk-t')}${readingLine(c.r, romaji(c.r), lang)}<p class="zh">${esc(c.m)}</p></div></li>`).join('')}</ul>
      <div class="row"><button class="btn ghost" id="all">${ICON.play}连续播放</button></div>
      ${gl.length ? `<div class="grammar-links"><h3>这个场景用到的语法</h3>${gl.map(g => `<a href="#/grammar/${g.id}?from=${id}">${esc(g.title)}</a>`).join('')}</div>` : ''}
      <div class="step-next"><button class="btn primary" id="next">下一步：沉浸听</button></div>`;
    body.querySelector('#all').onclick = async e => {
      const b = e.currentTarget; b.disabled = true;
      for (const c of chunks) { if (!location.hash.includes(id)) break; if (!(await speak(c.t, lang))) break; await pause(600); }
      b.disabled = false;
    };
    body.querySelector('#next').onclick = () => finishStep(1);
  }

  // ② 沉浸听
  function stepListen() {
    let mode = 0; // 0 无字幕 1 原文 2 原文+中文
    let rate = S().settings.ttsRate;
    let playing = false;
    body.innerHTML = `<p class="step-lede">先<b>不看字幕</b>完整听一遍，猜大意；再打开原文听一遍；最后对照中文确认。听不懂的句子单独点开重听。</p>
      <div class="toolbar">
        <div class="seg" role="group" aria-label="字幕">${['无字幕', '原文', '原文+中文'].map((s, i) => `<button data-mode="${i}" class="${i === mode ? 'on' : ''}">${s}</button>`).join('')}</div>
        <div class="seg" role="group" aria-label="语速">${[0.7, 0.9, 1].map(r => `<button data-rate="${r}" class="${r === rate ? 'on' : ''}">${r === 1 ? '原速' : r + '×'}</button>`).join('')}</div>
      </div>
      <button class="btn primary wide" id="playall">${ICON.play}播放整段对话</button>
      <ol class="dialogue mode-0">${lines.map((l, i) => `<li class="${l.me ? 'me' : ''}" data-i="${i}">
        <button class="icon-btn play small" data-line="${i}" aria-label="播放第 ${i + 1} 句">${ICON.play}</button>
        <div class="line"><span class="who">${esc(l.who)}</span>
          <span class="mask">· · · · · ·</span>
          <span class="orig">${tl(l.t, lang)}${readingLine(l.r, romaji(l.r), lang)}</span>
          <span class="zh">${esc(l.m)}</span></div></li>`).join('')}</ol>
      <div class="step-next"><button class="btn primary" id="next">下一步：跟读</button></div>`;
    const dl = body.querySelector('.dialogue');
    body.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => {
      mode = +b.dataset.mode; dl.className = 'dialogue mode-' + mode;
      body.querySelectorAll('[data-mode]').forEach(x => x.classList.toggle('on', x === b));
    });
    body.querySelectorAll('[data-rate]').forEach(b => b.onclick = () => {
      rate = +b.dataset.rate;
      body.querySelectorAll('[data-rate]').forEach(x => x.classList.toggle('on', x === b));
    });
    const sayLine = i => {
      dl.querySelectorAll('li').forEach(li => li.classList.toggle('now', +li.dataset.i === i));
      return speak(lines[i].t, lang, { rate, alt: !lines[i].me });
    };
    dl.onclick = e => { const b = e.target.closest('[data-line]'); if (b) { playing = false; sayLine(+b.dataset.line); } };
    body.querySelector('#playall').onclick = async e => {
      const b = e.currentTarget;
      if (playing) { playing = false; stop(); b.innerHTML = ICON.play + '播放整段对话'; return; }
      playing = true; b.innerHTML = ICON.stop + '停止';
      for (let i = 0; i < lines.length && playing; i++) { if (!(await sayLine(i))) break; await pause(450); }
      playing = false; b.innerHTML = ICON.play + '再听一遍';
      dl.querySelectorAll('li').forEach(li => li.classList.remove('now'));
    };
    body.querySelector('#next').onclick = () => { playing = false; finishStep(2); };
  }

  // ③ 跟读（影子跟读）
  function stepShadow() {
    const mine = lines.map((l, i) => ({ ...l, i })).filter(l => l.me);
    const canSTT = sttAvailable();
    body.innerHTML = `<p class="step-lede">这些是你在对话里要说的句子。听一句 → 模仿语调和节奏读出来 → 看评分。${canSTT ? '' : '你的浏览器不支持语音识别，可以录音后自己回放对比（电脑版 Chrome / Edge 可以打分）。'}</p>
      <ul class="shadow">${mine.map(l => `<li data-i="${l.i}">
        <div class="shadow-text">${tl(l.t, lang)}${readingLine(l.r, romaji(l.r), lang)}<p class="zh">${esc(l.m)}</p></div>
        <div class="shadow-act">${playBtn(l.t, lang, { label: '听原音' })}
          <button class="icon-btn mic" data-rec="${l.i}" aria-label="跟读">${ICON.mic}</button></div>
        <div class="shadow-result" aria-live="polite"></div></li>`).join('')}</ul>
      <div class="step-next"><button class="btn primary" id="next">下一步：角色扮演</button></div>`;
    body.querySelectorAll('[data-rec]').forEach(btn => {
      let recorder = null;
      btn.onclick = async () => {
        const l = lines[+btn.dataset.rec];
        const out = btn.closest('li').querySelector('.shadow-result');
        if (!canSTT) {
          // 录音模式：点一次开始，再点一次停止并回放
          try {
            if (!recorder) {
              recorder = await startRecording();
              btn.classList.add('rec'); btn.innerHTML = ICON.stop; btn.setAttribute('aria-label', '停止录音');
              out.innerHTML = '<span class="muted">录音中，读完再点一次</span>';
              return;
            }
            const { blob, sec } = await recorder.stop();
            recorder = null;
            btn.classList.remove('rec'); btn.innerHTML = ICON.mic; btn.setAttribute('aria-label', '跟读');
            out.innerHTML = `<audio controls src="${URL.createObjectURL(blob)}"></audio><span class="muted">和原音对比听听，节奏和语调像吗？</span>`;
            addSpeak(sec);
          } catch (e) { recorder = null; btn.classList.remove('rec'); out.textContent = e.message; }
          return;
        }
        btn.classList.add('rec'); btn.disabled = true;
        const t0 = Date.now();
        try {
          out.innerHTML = '<span class="muted">请说……</span>';
          const heard = await listen(lang, { onInterim: t => out.innerHTML = `<span class="muted">${esc(t)}</span>` });
          const sc2 = heard ? similarity(heard, l.t, lang, l.r) : 0;
          out.innerHTML = `<b class="score s${Math.floor(sc2 / 34)}">${sc2}</b> <span>${heard ? (lang === 'fr' ? diffWords(heard, l.t) : `听到：<span lang="ja">${esc(heard)}</span>`) : '没有听到声音'}</span>
            <span class="muted">${sc2 >= 85 ? '很清楚！' : sc2 >= 60 ? '大体正确，注意标红的部分。' : '再听一遍原音，放慢一点试试。'}</span>`;
          addSpeak((Date.now() - t0) / 1000);
        } catch (e) { out.textContent = e.message; }
        btn.classList.remove('rec'); btn.disabled = false;
      };
    });
    body.querySelector('#next').onclick = () => finishStep(3);
  }

  // ④ 角色扮演
  function stepRoleplay() {
    if (aiReady()) return roleplayAI();
    roleplayScript();
  }

  function taskCard() {
    return `<div class="task"><p><b>你的任务</b>${esc(sc.task.goal)}</p>
      <ul class="checks">${sc.task.checklist.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
      <p class="muted">对方：${esc(sc.task.role)}</p></div>`;
  }

  function roleplayAI() {
    const history = []; // OpenAI messages（assistant 内容存 JSON 字符串）
    const view = []; // { me, t, r, zh }
    let lastHint = '', ended = false;
    body.innerHTML = `${taskCard()}
      <p class="step-lede">这不是复述示范对话，细节变了，要用学到的语块灵活应对。说错没关系，复盘时再纠正。</p>
      <div class="chat" aria-live="polite"></div>
      <div class="hint-box" hidden></div>
      <form class="composer">
        ${sttAvailable() ? `<button type="button" class="icon-btn mic" id="mic" aria-label="语音输入">${ICON.mic}</button>` : ''}
        <input id="msg" type="text" autocomplete="off" placeholder="用${LANGS[lang].meta.name}回答，实在不会可以打中文" lang="${lang}">
        <button class="btn primary" type="submit">发送</button>
      </form>
      <div class="row"><button class="btn ghost" id="hint">给我提示</button><button class="btn ghost" id="end">结束并复盘</button></div>`;
    const chatEl = body.querySelector('.chat'), input = body.querySelector('#msg'), hintBox = body.querySelector('.hint-box');

    const draw = () => {
      chatEl.innerHTML = view.map((m, i) => m.me
        ? `<div class="bubble me" lang="${lang}">${esc(m.t)}</div>`
        : `<div class="bubble them"><div class="b-head">${playBtn(m.t, lang, { alt: true })}<span>${tl(m.t, lang)}</span></div>${readingLine(m.r, m.r ? romaji(m.r) : '', lang)}
            <details><summary>翻译</summary><p>${esc(m.zh || '')}</p></details></div>`).join('') + (ended ? '<p class="muted center">对话结束，进入复盘。</p>' : '');
      chatEl.scrollTop = chatEl.scrollHeight;
    };
    const aiSay = async () => {
      const typing = document.createElement('div'); typing.className = 'bubble them typing'; typing.innerHTML = '<i></i><i></i><i></i>';
      chatEl.appendChild(typing); chatEl.scrollTop = chatEl.scrollHeight;
      try {
        const j = await roleplayTurn(lang, sc, history);
        history.push({ role: 'assistant', content: JSON.stringify({ reply: j.reply }) });
        view.push({ me: false, t: String(j.reply || ''), r: j.reading || '', zh: j.zh || '' });
        lastHint = j.hint || '';
        draw();
        speak(String(j.reply || ''), lang, { alt: true });
        if (j.done && view.filter(v => v.me).length >= 2) { ended = true; draw(); setTimeout(() => toReview(), 1800); }
      } catch (e) { typing.remove(); toast(e.message, 5000); }
    };
    body.querySelector('.composer').onsubmit = async e => {
      e.preventDefault();
      const t = input.value.trim(); if (!t || ended) return;
      input.value = ''; hintBox.hidden = true;
      view.push({ me: true, t }); history.push({ role: 'user', content: t }); draw();
      await aiSay();
    };
    const mic = body.querySelector('#mic');
    if (mic) mic.onclick = async () => {
      mic.classList.add('rec'); const t0 = Date.now();
      try { const t = await listen(lang, { onInterim: x => input.value = x }); input.value = t; addSpeak((Date.now() - t0) / 1000); }
      catch (e) { toast(e.message); }
      mic.classList.remove('rec'); input.focus();
    };
    body.querySelector('#hint').onclick = () => { hintBox.hidden = false; hintBox.innerHTML = lastHint ? `<b>可以这样说：</b>${esc(lastHint)}` : '先听对方说了什么，点"翻译"看意思，再用语块回答。'; };
    body.querySelector('#end').onclick = () => {
      if (view.filter(v => v.me).length < 1) { toast('至少说一句再结束吧'); return; }
      toReview();
    };
    function toReview() {
      const transcript = view.map(v => (v.me ? '学习者：' : '对方：') + v.t).join('\n');
      sessionStorage.setItem('yj-rp-' + lang + id, transcript);
      finishStep(4);
    }
    aiSay();
  }

  // 没有 AI 时：脚本模式。App 扮演对方，你看中文提示说出自己的台词
  function roleplayScript() {
    let i = 0; const scores = [];
    body.innerHTML = `<div class="task"><p><b>脚本模式</b>App 扮演对方，你看中文提示，把自己的台词说出来（或打出来）。接入 AI 后可以和 AI 自由对话。</p></div>
      <div class="chat"></div>
      <div class="script-turn"></div>`;
    const chatEl = body.querySelector('.chat'), turn = body.querySelector('.script-turn');
    const next = async () => {
      while (i < lines.length && !lines[i].me) {
        const l = lines[i];
        chatEl.insertAdjacentHTML('beforeend', `<div class="bubble them"><div class="b-head">${playBtn(l.t, lang, { alt: true })}<span>${tl(l.t, lang)}</span></div><details><summary>翻译</summary><p>${esc(l.m)}</p></details></div>`);
        chatEl.scrollTop = chatEl.scrollHeight;
        await speak(l.t, lang, { alt: true }); await pause(300); i++;
      }
      if (i >= lines.length) {
        const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
        sessionStorage.setItem('yj-script-' + lang + id, String(avg));
        turn.innerHTML = `<p>对话完成。平均匹配度 <b>${avg}</b>。</p><button class="btn primary" id="go">去复盘</button>`;
        turn.querySelector('#go').onclick = () => finishStep(4);
        return;
      }
      const l = lines[i];
      turn.innerHTML = `<p class="prompt-zh">轮到你：<b>${esc(l.m)}</b></p>
        <form class="composer">${sttAvailable() ? `<button type="button" class="icon-btn mic" id="mic" aria-label="说出来">${ICON.mic}</button>` : ''}
        <input id="msg" type="text" lang="${lang}" autocomplete="off" placeholder="说出来或打出来"><button class="btn primary">确定</button></form>
        <button class="btn ghost small" id="peek">看答案</button>`;
      const input = turn.querySelector('#msg');
      const submit = t => {
        const s = similarity(t, l.t, lang, l.r); scores.push(s);
        chatEl.insertAdjacentHTML('beforeend', `<div class="bubble me"><span lang="${lang}">${esc(t || '（跳过）')}</span><div class="cmp"><b class="score s${Math.floor(s / 34)}">${s}</b> ${tl(l.t, lang)}</div></div>`);
        chatEl.scrollTop = chatEl.scrollHeight;
        speak(l.t, lang); i++; setTimeout(next, 1200);
      };
      turn.querySelector('form').onsubmit = e => { e.preventDefault(); submit(input.value.trim()); };
      turn.querySelector('#peek').onclick = () => { input.placeholder = l.t; speak(l.t, lang); };
      const mic = turn.querySelector('#mic');
      if (mic) mic.onclick = async () => { mic.classList.add('rec'); try { const t = await listen(lang, { onInterim: x => input.value = x }); submit(t); } catch (e) { toast(e.message); } mic.classList.remove('rec'); };
    };
    next();
  }

  // ⑤ 复盘
  async function stepReview() {
    const transcript = sessionStorage.getItem('yj-rp-' + lang + id);
    const scriptScore = sessionStorage.getItem('yj-script-' + lang + id);
    body.innerHTML = `<div class="review-box"><p class="muted">${transcript ? 'AI 正在看你的对话，约 10 秒…' : ''}</p></div>`;
    const box = body.querySelector('.review-box');
    let score = scriptScore != null ? +scriptScore : null;
    let corrections = [];

    if (transcript && aiReady()) {
      try {
        const fb = await roleplayFeedback(lang, sc, transcript);
        score = Math.max(0, Math.min(100, +fb.score || 0));
        corrections = Array.isArray(fb.corrections) ? fb.corrections.filter(c => c && c.better) : [];
        box.innerHTML = `
          <div class="score-ring" style="--p:${score}"><span>${score}</span></div>
          ${fb.praise ? `<p class="praise">${esc(fb.praise)}</p>` : ''}
          <ul class="checks result">${sc.task.checklist.map(c => `<li class="${(fb.missed || []).some(m => String(m).includes(c) || c.includes(String(m))) ? 'miss' : 'hit'}">${esc(c)}</li>`).join('')}</ul>
          ${corrections.length ? `<h3>这样说更好</h3><ul class="corrections">${corrections.map((c, k) => `<li>
            <p class="you"><s lang="${lang}">${esc(c.you || '')}</s></p>
            <p class="better">${playBtn(c.better, lang)}${tl(c.better, lang)}</p>
            ${readingLine(c.reading, c.reading ? romaji(c.reading) : '', lang)}
            <p class="why">${esc(c.zh ? c.zh + '。' : '')}${esc(c.why || '')}</p>
            <label class="check"><input type="checkbox" data-k="${k}" checked> 加入复习</label></li>`).join('')}</ul>` : ''}
          ${fb.next ? `<p class="next-tip"><b>下次试试：</b>${esc(fb.next)}</p>` : ''}`;
      } catch (e) {
        box.innerHTML = `<p>复盘没生成出来：${esc(e.message)}</p><button class="btn ghost" id="retry">重试</button>`;
        box.querySelector('#retry').onclick = () => stepReview();
      }
    } else if (score != null) {
      box.innerHTML = `<div class="score-ring" style="--p:${score}"><span>${score}</span></div><p>脚本模式的平均匹配度。接入 AI 后，复盘会逐句指出可以改进的地方，并把纠正后的说法自动加入复习。</p>`;
    } else {
      box.innerHTML = `<p>还没有角色扮演记录。可以回到上一步练一次，也可以直接完成这个场景。</p>`;
    }

    box.insertAdjacentHTML('beforeend', `<div class="finish">
      <p>完成后，这个场景的 ${chunks.length} 个语块会加入每日复习（看中文、说${LANGS[lang].meta.name}）。</p>
      <button class="btn primary wide" id="finish">完成场景，盖章</button></div>`);
    box.querySelector('#finish').onclick = () => {
      box.querySelectorAll('[data-k]').forEach(cb => {
        if (!cb.checked) return;
        const c = corrections[+cb.dataset.k];
        addCorrection(lang, { t: c.better, r: c.reading || '', m: c.zh || c.why || '', why: c.why || '', src: sc.title });
      });
      const nChunks = addSceneChunks(lang, sc);
      const first = completeScene(lang, sc, score);
      sessionStorage.removeItem('yj-rp-' + lang + id); sessionStorage.removeItem('yj-script-' + lang + id);
      showStamp(first, nChunks);
    };
  }

  function showStamp(first, nChunks) {
    const M = LANGS[lang].meta;
    body.innerHTML = `<div class="stamp-moment">
      <div class="stamp big ${first ? 'land' : ''}" aria-hidden="true"><span class="stamp-emoji">${sc.emoji}</span><span class="stamp-place" lang="${lang}">${esc(sc.place)}</span><span class="stamp-date">${new Date().toLocaleDateString('zh-CN')}</span></div>
      <h2>${first ? '新能力解锁' : '又练了一遍'}</h2>
      <p class="can">我${esc(sc.cando.replace(/^我/, ''))}</p>
      <p class="muted">${nChunks ? `${nChunks} 个语块已加入复习。` : ''}明天的复习里会出现它们，用${M.name}说出来就算掌握。</p>
      <div class="row"><a class="btn primary" href="#/review">去复习</a><a class="btn ghost" href="#/scenes">看下一个场景</a></div></div>`;
  }
}

const pause = ms => new Promise(r => setTimeout(r, ms));
