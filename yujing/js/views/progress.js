import { S, stats, forecast, studiedOn, LANGS, addSpeak, allDays, foundProgress } from '../store.js';
import { startRecording, saveDiary, listDiary, deleteDiary } from '../speech.js';
import { esc, dayKey, addDays, uid, toast } from '../util.js';
import { header, ICON, fmtMin } from '../ui.js';

const MILESTONES = [[100, '能打招呼、点餐'], [300, '旅行生存'], [800, '日常基础对话'], [1500, '大部分日常话题'], [2500, '轻松聊天']];

export function renderProgress(el, lang) {
  const st = S();
  const M = LANGS[lang].meta;
  const s = stats(lang);
  const stamps = st.stamps.filter(x => x.lang === lang);
  const totalIn = Object.values(allDays()).reduce((a, d) => a + (d.inputSec || 0), 0);
  const totalSpeak = Object.values(allDays()).reduce((a, d) => a + (d.speakSec || 0), 0);
  const fc = forecast(lang, 7);
  const fmax = Math.max(1, ...fc);
  const next = MILESTONES.find(m => m[0] > s.words) || MILESTONES[MILESTONES.length - 1];
  const prev = [...MILESTONES].reverse().find(m => m[0] <= s.words);
  const lo = prev ? prev[0] : 0;
  const pct = Math.min(100, Math.round((s.words - lo) / (next[0] - lo) * 100));

  // 近 15 周热力图
  const today = dayKey();
  const cells = [];
  const first = addDays(today, -(7 * 14 + ((new Date().getDay() + 6) % 7)));
  for (let i = 0; i < 7 * 15; i++) {
    const k = addDays(first, i);
    if (k > today) { cells.push('<i class="h-future"></i>'); continue; }
    const d = allDays()[k];
    const v = d ? (d.reviews || 0) + (d.scenes || 0) * 20 + Math.round((d.inputSec || 0) / 30) : 0;
    const lv = v === 0 ? 0 : v < 20 ? 1 : v < 50 ? 2 : v < 100 ? 3 : 4;
    cells.push(`<i class="h${lv}" title="${k}${d ? `：复习 ${d.reviews} 次` : ''}"></i>`);
  }
  const activeDays = Object.keys(allDays()).filter(studiedOn).length;

  el.innerHTML = `${header('进度')}
    <p class="meta-line">${M.flag} ${M.name}</p>

    <section class="passport">
      <h2>能力印章 <span class="muted">${stamps.length}</span></h2>
      ${stamps.length ? `<div class="stamps">${stamps.map((x, i) => `<figure class="stamp" style="--r:${(i * 37 % 13) - 6}deg">
        <span class="stamp-emoji">${x.emoji}</span><span class="stamp-place">${esc(x.title)}</span><span class="stamp-date">${x.date.slice(5).replace('-', '.')}</span>
        <figcaption>${esc(x.text)}</figcaption></figure>`).join('')}</div>`
        : '<p class="empty-line">完成第一个场景，这里会盖上第一枚章。<a href="#/scenes">去场景</a></p>'}
    </section>

    <section class="stat-grid">
      <div><b>${s.words}</b><span>学过的词</span><small>${s.wordsMature} 个已牢固（间隔 ≥ 21 天）</small></div>
      <div><b>${s.sounds}<i>/${s.soundTotal}</i></b><span>${M.soundLabel}</span><small>入门课 ${foundProgress(lang).done}/${foundProgress(lang).total} · <a href="#/map">全景</a></small></div>
      <div><b>${s.chunks}</b><span>会说的语块</span><small>来自场景和复盘纠错</small></div>
      <div><b>${fmtMin(totalIn)}</b><span>可理解输入</span><small>开口 ${fmtMin(totalSpeak)}</small></div>
    </section>

    <section class="panel">
      <h2>词汇里程碑</h2>
      <div class="milestone"><div class="m-bar"><i style="width:${pct}%"></i></div>
        <p>${s.words} / ${next[0]} 词 · 下一站：<b>${next[1]}</b></p></div>
      <ol class="m-list">${MILESTONES.map(m => `<li class="${s.words >= m[0] ? 'ok' : ''}"><b>${m[0]}</b>${m[1]}</li>`).join('')}</ol>
      <p class="muted">里程碑是粗略参照：几百个高频词就能覆盖日常对话的大部分，之后每多一千词，能懂的内容会明显变多。</p>
    </section>

    <section class="panel">
      <h2>记忆保持率 <span class="muted">近 30 天</span></h2>
      ${s.retention == null ? '<p>复习满 10 次后显示。</p>' : `<p class="big-num ${s.retention >= 85 ? 'good' : s.retention >= 75 ? 'mid' : 'low'}">${s.retention}%</p>
      <p>算法的目标是 90%：复习时大约十次能想起九次，这是记得牢又不浪费时间的平衡点。${s.retention < 80 ? '偏低的话可以减少每日新词，让复习先跟上。' : s.retention > 95 ? '很高，可以考虑每天多学几个新词。' : '状态正好。'}</p>`}
    </section>

    <section class="panel">
      <h2>学习日历 <span class="muted">累计 ${activeDays} 天</span></h2>
      <div class="heat" aria-label="近 15 周学习记录">${cells.join('')}</div>
      <p class="muted">中断不会清零。今天回来，就是继续。</p>
    </section>

    <section class="panel">
      <h2>未来 7 天的复习量</h2>
      <div class="forecast">${fc.map((n, i) => `<div><i style="height:${Math.round(n / fmax * 100)}%"></i><b>${n}</b><span>${i === 0 ? '今天' : i === 1 ? '明天' : addDays(today, i).slice(5).replace('-', '/')}</span></div>`).join('')}</div>
    </section>

    <section class="panel diary">
      <h2>声音日记</h2>
      <p>每一两周用${M.name}录一段 30 秒的话，几个月后回头听第一条，进步一耳朵就能听出来。</p>
      <p class="diary-prompt">今天的题目：<b>${diaryPrompt(lang, stamps.length)}</b></p>
      <button class="btn primary" id="rec">${ICON.mic}开始录音</button>
      <ul class="diary-list"></ul>
    </section>`;

  drawDiary();
  let recorder = null;
  el.querySelector('#rec').onclick = async e => {
    const b = e.currentTarget;
    try {
      if (!recorder) { recorder = await startRecording(); b.innerHTML = ICON.stop + '停止并保存'; b.classList.add('rec'); return; }
      const { blob, sec } = await recorder.stop(); recorder = null;
      b.innerHTML = ICON.mic + '开始录音'; b.classList.remove('rec');
      if (sec < 2) { toast('太短了，再录一次'); return; }
      await saveDiary({ id: uid(), lang, t: Date.now(), sec, prompt: diaryPrompt(lang, stamps.length), blob });
      addSpeak(sec);
      toast('已保存到这台设备');
      drawDiary();
    } catch (err) { recorder = null; b.innerHTML = ICON.mic + '开始录音'; b.classList.remove('rec'); toast(err.message, 4000); }
  };

  async function drawDiary() {
    const ul = el.querySelector('.diary-list');
    try {
      const list = await listDiary(lang);
      if (!list.length) { ul.innerHTML = ''; return; }
      const show = list.length > 2 ? [list[0], ...list.slice(-3)] : list;
      ul.innerHTML = (list.length > 4 ? `<li class="muted">第一条和最近三条（共 ${list.length} 条）</li>` : '') + show.map((d, i) => `<li>
        <div><b>${new Date(d.t).toLocaleDateString('zh-CN')}</b> <span class="muted">${Math.round(d.sec)} 秒 · ${esc(d.prompt || '')}</span>${d === list[0] && list.length > 1 ? ' <span class="tag">第一条</span>' : ''}</div>
        <audio controls preload="none" src="${URL.createObjectURL(d.blob)}"></audio>
        <button class="link-btn" data-del="${d.id}">删除</button></li>`).join('');
      ul.querySelectorAll('[data-del]').forEach(b => b.onclick = async () => { if (confirm('删除这条录音？')) { await deleteDiary(b.dataset.del); drawDiary(); } });
    } catch { ul.innerHTML = '<li class="muted">这个浏览器不支持本地保存录音。</li>'; }
  }
}

function diaryPrompt(lang, n) {
  const fr = ['介绍你自己：名字、哪里人、做什么', '描述你今天做了什么', '你周末喜欢做什么', '介绍你住的城市', '讲一次难忘的旅行'];
  const ja = ['自己紹介：名字、哪里人、做什么', '今天做了什么', '喜欢吃什么、为什么', '介绍你住的城市', '讲一次难忘的旅行'];
  const list = lang === 'ja' ? ja : fr;
  return list[Math.min(list.length - 1, Math.floor(n / 2))];
}
