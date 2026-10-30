import { S, save, LANGS, counts, scenesOf, sceneState, studiedOn, todayTotal as todayRec, stats, onChange, nextUnit, foundProgress, foundReady, UNITS } from './store.js';
import { aiReady } from './ai.js';
import { stop } from './speech.js';
import { startReminderLoop } from './reminder.js';
import { startSync, onSyncStatus, syncCfg, saveSyncCfg, testRepo, syncNow, syncStatus, jobdeskToken } from './sync.js';
import { esc, dayKey, addDays } from './util.js';
import { ICON, bindSay, tl, fmtMin } from './ui.js';
import { renderReview } from './views/review.js';
import { renderScenes, renderScene } from './views/scene.js';
import { renderLibrary, renderGrammar, renderRead } from './views/library.js';
import { renderProgress } from './views/progress.js';
import { renderSettings } from './views/settings.js';
import { renderMap, renderLesson } from './views/learn.js';

const view = document.getElementById('view');
const nav = document.getElementById('nav');
const langSwitch = document.getElementById('lang-switch');
bindSay(view);

const NAV = [['today', '今天', ICON.today], ['scenes', '场景', ICON.scenes], ['map', '基础', ICON.library], ['progress', '进度', ICON.progress], ['settings', '设置', ICON.settings]];
nav.innerHTML = NAV.map(([k, n, i]) => `<a href="#/${k}" data-nav="${k}">${i}<span>${n}</span></a>`).join('');

function drawLangSwitch() {
  const st = S();
  const act = Object.keys(LANGS).filter(l => st.active[l]);
  langSwitch.innerHTML = act.length > 1 ? act.map(l => `<button data-l="${l}" class="${l === st.lang ? 'on' : ''}" aria-pressed="${l === st.lang}"><span aria-hidden="true">${LANGS[l].meta.flag}</span>${LANGS[l].meta.name}</button>`).join('') : '';
  document.documentElement.dataset.lang = st.lang;
}
langSwitch.onclick = e => {
  const b = e.target.closest('[data-l]'); if (!b) return;
  S().lang = b.dataset.l; save(); drawLangSwitch();
  // 场景详情等页面属于某一门语言，切换后回到对应列表
  const h = location.hash;
  if (/^#\/(scene|grammar|read|lesson)\//.test(h)) location.hash = h.startsWith('#/scene/') ? '#/scenes' : h.startsWith('#/grammar/') ? '#/library/grammar' : h.startsWith('#/lesson/') ? '#/map' : '#/read';
  else route();
};

// 私人应用：这台设备连接过你的私有仓库（有有效令牌）才能使用，和 Job Desk 一样
const unlocked = () => { const c = syncCfg(); return c.enabled && !!c.token; };

function route() {
  stop();
  const st = S();
  document.body.classList.toggle('locked', !unlocked());
  if (!unlocked()) { document.body.classList.remove('focus-mode'); window.scrollTo(0, 0); return renderGate(view); }
  if (!st.onboarded && !/^#\/(welcome|settings)/.test(location.hash)) { location.hash = '#/welcome'; return; }
  const [path, query] = (location.hash.slice(2) || 'today').split('?');
  const parts = path.split('/');
  const lang = st.lang;
  drawLangSwitch();
  nav.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.dataset.nav === parts[0] || (parts[0] === 'scene' && a.dataset.nav === 'scenes') || (['grammar', 'library', 'lesson'].includes(parts[0]) && a.dataset.nav === 'map') || ((parts[0] === 'review' || parts[0] === 'read') && a.dataset.nav === 'today')));
  document.body.classList.toggle('focus-mode', ['review', 'welcome', 'lesson'].includes(parts[0]));
  view.scrollTop = 0; window.scrollTo(0, 0);
  const from = new URLSearchParams(query || '').get('from');
  switch (parts[0]) {
    case 'welcome': return renderWelcome(view);
    case 'review': return renderReview(view, lang);
    case 'scenes': return renderScenes(view, lang);
    case 'scene': return renderScene(view, lang, parts[1], parts[2]);
    case 'map': return renderMap(view, lang, parts[1]);
    case 'lesson': return renderLesson(view, lang, parts[1]);
    case 'library': return parts[1] === 'sounds' ? renderMap(view, lang) : renderLibrary(view, lang, parts[1] || 'words');
    case 'grammar': return renderGrammar(view, lang, parts[1], from);
    case 'read': return renderRead(view, lang, parts[1]);
    case 'progress': return renderProgress(view, lang);
    case 'settings': return renderSettings(view);
    default: return renderToday(view, lang);
  }
}
window.addEventListener('hashchange', route);

// ---------- 今天 ----------
function renderToday(el, lang) {
  const st = S();
  const M = LANGS[lang].meta;
  const c = counts(lang);
  const t = todayRec();
  const list = scenesOf(lang);
  const going = list.find(s => { const x = sceneState(lang, s.id); return x.step > 0 && !x.done; });
  const nextScene = going || list.find(s => !sceneState(lang, s.id).done);
  const ns = nextScene ? sceneState(lang, nextScene.id) : null;
  const k0 = dayKey();
  const doneTodayScene = list.find(s => { const x = sceneState(lang, s.id); return x.doneAt && dayKey(x.doneAt) === k0; });
  const sceneDoneToday = !!doneTodayScene;
  const reviewDone = c.due === 0 && c.fresh === 0;
  const nu = nextUnit(lang), fp = foundProgress(lang), ready = foundReady(lang);
  const nuNo = nu ? UNITS[lang].indexOf(nu) + 1 : 0;
  const lessonToday = UNITS[lang].some(u => { const x = st.found[lang + '|' + u.id]; return x?.at && !x.skipped && dayKey(x.at) === dayKey(); });

  // 本周
  const k = dayKey();
  const dow = (new Date().getDay() + 6) % 7;
  const monday = addDays(k, -dow);
  const week = [...Array(7)].map((_, i) => addDays(monday, i));
  const weekDone = week.filter(studiedOn).length;
  const s = stats(lang);
  const other = Object.keys(LANGS).filter(l => l !== lang && st.active[l]);
  const hour = new Date().getHours();
  const hello = hour < 5 ? '夜深了' : hour < 11 ? '早上好' : hour < 14 ? '中午好' : hour < 18 ? '下午好' : '晚上好';

  el.innerHTML = `
    <section class="today-hero">
      <p class="hello">${hello}。今天练${M.name}。</p>
      <p class="hero-line" lang="${lang}">${esc(heroPhrase(lang))}</p>
    </section>

    <ol class="plan">
      ${nu ? `<li class="${lessonToday ? 'done' : ''}">
        <div class="plan-main"><h2>入门课</h2>
          <p>${lessonToday ? `今天已学完一课。想多学，下一课是第 ${nuNo} 课 ${esc(nu.title)}` : `第 ${nuNo} 课 · ${esc(nu.title)} <span class="muted">${esc(nu.sub)}</span>`}</p>
          <p class="muted">入门 ${fp.done}/${fp.total} · 约 6 分钟 · <a href="#/map">看发音全景</a></p></div>
        <a class="btn ${lessonToday ? '' : 'primary'}" href="#/lesson/${nu.id}">${lessonToday ? '再学一课' : '开始'}</a>
      </li>` : ''}
      <li class="${reviewDone ? 'done' : ''}">
        <div class="plan-main"><h2>复习${ready ? '与新词' : ''}</h2>
          <p>${reviewDone ? (nu && !s.sounds ? '学完第一课，学过的内容会出现在这里。' : '今天的卡片都完成了。') : `<b>${c.due}</b> 张到期${c.fresh ? ` · <b>${c.fresh}</b> 个新条目` : ''}`}</p>
          <p class="muted">${ready ? '约 10–15 分钟。先回忆，再看答案。' : `学完前 ${lang === 'ja' ? 8 : 5} 课（基础发音）后，每天开始学新词。`}</p></div>
        ${reviewDone ? '<span class="tick" aria-label="已完成">✓</span>' : `<a class="btn ${nu && !lessonToday ? '' : 'primary'}" href="#/review">开始</a>`}
      </li>
      <li class="${sceneDoneToday ? 'done' : ''}">
        <div class="plan-main"><h2>今日场景</h2>
          ${sceneDoneToday ? `<p>${doneTodayScene.emoji} ${esc(doneTodayScene.title)} ${tl(doneTodayScene.place, lang, 'muted')}</p>
          <p class="muted">今天已完成${nextScene ? `。想多练的话，下一个是${esc(nextScene.title)}：<a href="#/scene/${nextScene.id}">开始</a>` : ''}</p>` : nextScene ? `<p>${nextScene.emoji} ${esc(nextScene.title)} ${tl(nextScene.place, lang, 'muted')}</p>
          <p class="muted">${ns.step ? `进行到第 ${Math.min(ns.step + 1, 5)} 步 · ` : ''}${esc(nextScene.cando)}${!ready && !ns.step ? '<br>建议先学几节入门课；先听听、跟读也可以。' : ''}</p>` : '<p>内置场景都完成了。让 AI 按你的需要生成新的吧。</p>'}</div>
        ${sceneDoneToday ? '<span class="tick" aria-label="已完成">✓</span>' : `<a class="btn ${reviewDone && !nu ? 'primary' : ''}" href="${nextScene ? '#/scene/' + nextScene.id : '#/scenes'}">${ns?.step ? '继续' : '开始'}</a>`}
      </li>
      <li>
        <div class="plan-main"><h2>阅读一篇小故事</h2>
          <p class="muted">${aiReady() ? '用你会的词写成，只夹几个新词。' : '接入 AI 后，每天生成一篇按你词汇量定制的短文。'}</p></div>
        <a class="btn ghost" href="${aiReady() ? '#/read' : '#/settings'}">${aiReady() ? '去读' : '去设置'}</a>
      </li>
    </ol>

    <section class="week">
      <div class="week-head"><h2>本周</h2><p><b>${weekDone}</b> / ${st.settings.weeklyGoal} 天${weekDone >= st.settings.weeklyGoal ? ' · 本周目标达成' : ''}</p></div>
      <ol class="week-days">${week.map((d, i) => `<li class="${studiedOn(d) ? 'on' : ''} ${d === k ? 'is-today' : ''}"><span>${'一二三四五六日'[i]}</span></li>`).join('')}</ol>
      <p class="muted">今天：复习 ${t.reviews} 次 · 听了 ${fmtMin(t.inputSec)} · 开口 ${fmtMin(t.speakSec)}</p>
    </section>

    ${!ready ? `<section class="panel method">
      <h2>零基础怎么开始</h2>
      <p>先打地基：每天 1–2 节入门课，${lang === 'ja' ? '大约两周把平假名、片假名和发音规则过一遍' : '大约一周把法语的所有发音和拼读规则过一遍'}。每节课先看全貌、再逐个认识、再练到答对。</p>
      <p>学过的内容会在你快要忘的时候出现在<b>复习</b>里。基础打好以后，每天开始学新词，并用<b>场景</b>把它们用起来。</p>
      <a class="btn ghost" href="#/map">看${lang === 'ja' ? '五十音' : '法语发音'}全景</a>
    </section>` : ''}

    ${other.length ? `<p class="other-lang">${other.map(l => { const oc = counts(l); return `<button class="link-btn" data-sw="${l}">${LANGS[l].meta.flag} ${LANGS[l].meta.name}：${oc.due} 张到期，${oc.fresh} 个新条目</button>`; }).join('')}</p>` : ''}
  `;
  el.querySelectorAll('[data-sw]').forEach(b => b.onclick = () => { S().lang = b.dataset.sw; save(); route(); });
}

function heroPhrase(lang) {
  const fr = ['Petit à petit, l’oiseau fait son nid.', 'On apprend en parlant.', 'Un jour, une scène.', 'Chaque mot compte.'];
  const ja = ['継続は力なり。', '少しずつ、毎日。', '今日も一歩前へ。', '習うより慣れろ。'];
  const list = lang === 'ja' ? ja : fr;
  return list[new Date().getDate() % list.length];
}

// ---------- 锁屏：连接私有仓库 ----------
function renderGate(el) {
  const c = syncCfg();
  const jdTok = jobdeskToken();
  el.innerHTML = `
    <section class="welcome gate">
      <h1 class="brand-big">语境</h1>
      <p class="lede">这是私人应用。学习进度保存在私有仓库 <b>${esc(c.owner)}/${esc(c.repo)}</b> 里，用有权限的 GitHub 令牌连接后才能使用。</p>
      <div class="field"><span class="label">GitHub 令牌</span><input id="gtoken" type="password" autocomplete="off" placeholder="github_pat_…" value="${esc(c.token)}"></div>
      ${jdTok ? '<button class="btn small ghost" id="gjd">填入 Job Desk 的令牌</button>' : ''}
      <details><summary>换一个仓库</summary><div class="field"><input id="grepo" type="text" spellcheck="false" value="${esc(c.owner + '/' + c.repo)}"></div></details>
      <button class="btn primary wide" id="gopen">连接</button>
      <p class="test-out" id="gout" aria-live="polite">${syncStatus().kind === 'error' ? `<span class="err-text">${esc(syncStatus().text)}</span>` : ''}</p>
      <p class="hint">令牌只保存在这台设备的浏览器里。第一次用的话，私有仓库和令牌的准备步骤见 README 第六节。</p>
      <p class="hint"><a href="../">返回网站首页</a></p>
    </section>`;
  const out = el.querySelector('#gout');
  const jd = el.querySelector('#gjd');
  if (jd) jd.onclick = () => { el.querySelector('#gtoken').value = jdTok; jd.remove(); };
  el.querySelector('#gopen').onclick = async e => {
    const token = el.querySelector('#gtoken').value.trim();
    const [owner, repo] = el.querySelector('#grepo').value.trim().split('/').map(x => (x || '').trim());
    if (!token) { out.innerHTML = '<span class="err-text">先填入 GitHub 令牌。</span>'; return; }
    const cfg = { ...syncCfg(), owner: owner || 'thuljp', repo: repo || 'yujing-data', token };
    const b = e.currentTarget; b.disabled = true; b.textContent = '连接中…';
    try {
      const info = await testRepo(cfg);
      if (!info.private) throw new Error(`${cfg.owner}/${cfg.repo} 是公开仓库。请到仓库 Settings 把它改成 Private 再连接。`);
      saveSyncCfg({ ...cfg, branch: info.branch, enabled: true });
      await syncNow();
      if (syncStatus().kind === 'error') { saveSyncCfg({ ...syncCfg(), enabled: false }); throw new Error(syncStatus().text); }
      const target = S().onboarded ? '#/today' : '#/welcome';
      if (location.hash === target) route(); else location.hash = target;
    } catch (err) {
      out.innerHTML = `<span class="err-text">${esc(err.message)}</span>`;
      b.disabled = false; b.textContent = '连接';
    }
  };
}

// ---------- 首次设置 ----------
function renderWelcome(el) {
  const st = S();
  let pace = 'mid';
  el.innerHTML = `
    <section class="welcome">
      <h1 class="brand-big">语境</h1>
      <p class="lede">在真实场景里学语言：每天复习一点，走一个场景，开口说出来。</p>

      <h2>想学哪门？</h2>
      <div class="pick">${Object.keys(LANGS).map(l => `<label class="pick-card"><input type="checkbox" name="lang" value="${l}" checked><span><b>${LANGS[l].meta.flag} ${LANGS[l].meta.name}</b><span lang="${l}">${LANGS[l].meta.native}</span></span></label>`).join('')}</div>

      <h2>每天能投入多少时间？</h2>
      <div class="pick">${[['low', '15 分钟', '每门 5 个新词'], ['mid', '30 分钟', '每门 8–10 个新词'], ['high', '45 分钟以上', '每门 15 个新词']].map(([k, a, b]) => `<label class="pick-card"><input type="radio" name="pace" value="${k}" ${k === pace ? 'checked' : ''}><span><b>${a}</b><span>${b}</span></span></label>`).join('')}</div>

      <h2>每天几点提醒你？</h2>
      <input type="time" id="rt" value="${st.settings.reminderTime}">
      <p class="hint">稍后可以在"设置"里把提醒加到手机日历。</p>

      <button class="btn primary wide" id="go">开始学习</button>
    </section>`;
  el.querySelector('#go').onclick = () => {
    const langs = [...el.querySelectorAll('[name=lang]:checked')].map(i => i.value);
    if (!langs.length) { alert('至少选一门语言'); return; }
    pace = el.querySelector('[name=pace]:checked').value;
    const nw = { low: 5, mid: 0, high: 15 }[pace];
    Object.keys(LANGS).forEach(l => {
      st.active[l] = langs.includes(l);
      if (nw) st.settings.newWords[l] = nw;
    });
    if (pace === 'mid') { st.settings.newWords.fr = 10; st.settings.newWords.ja = 8; }
    if (pace === 'low') { st.settings.newSounds.ja = 6; }
    st.settings.reminderTime = el.querySelector('#rt').value || '20:30';
    st.lang = langs[0];
    st.onboarded = true;
    if (!st.settingsAt) st.settingsAt = 1;   // 首次设置的默认值：同步时让位于其他设备上改过的计划
    save();
    location.hash = '#/today';
  };
}

// ---------- 启动 ----------
route();
startReminderLoop();

// 多设备同步：从私有仓库拉到别的设备的新进度时，刷新"浏览类"页面（不打断正在进行的复习或场景）
const syncDot = document.getElementById('sync-dot');
onSyncStatus(s => {
  syncDot.hidden = s.kind === 'off';
  syncDot.dataset.kind = s.kind;
  syncDot.title = s.text;
  syncDot.setAttribute('aria-label', '同步状态：' + s.text);
  if (s.kind === 'error' && !unlocked() && !document.body.classList.contains('locked')) route();   // 令牌失效：立即锁定
});
startSync(() => {
  const page = (location.hash.slice(2) || 'today').split(/[/?]/)[0];
  if (['today', 'scenes', 'library', 'progress', 'welcome'].includes(page)) {
    if (page === 'welcome' && S().onboarded) location.hash = '#/today'; else route();
  }
});
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
let redrawT;
onChange(() => { clearTimeout(redrawT); redrawT = setTimeout(drawLangSwitch, 50); });
