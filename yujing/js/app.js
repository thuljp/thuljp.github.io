import { S, save, LANGS, counts, scenesOf, sceneState, studiedOn, todayTotal as todayRec, stats, onChange } from './store.js';
import { aiReady } from './ai.js';
import { stop } from './speech.js';
import { startReminderLoop } from './reminder.js';
import { startSync, onSyncStatus } from './sync.js';
import { esc, dayKey, addDays } from './util.js';
import { ICON, bindSay, tl, fmtMin } from './ui.js';
import { renderReview } from './views/review.js';
import { renderScenes, renderScene } from './views/scene.js';
import { renderLibrary, renderGrammar, renderRead } from './views/library.js';
import { renderProgress } from './views/progress.js';
import { renderSettings } from './views/settings.js';

const view = document.getElementById('view');
const nav = document.getElementById('nav');
const langSwitch = document.getElementById('lang-switch');
bindSay(view);

const NAV = [['today', '今天', ICON.today], ['scenes', '场景', ICON.scenes], ['library', '词库', ICON.library], ['progress', '进度', ICON.progress], ['settings', '设置', ICON.settings]];
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
  if (/^#\/(scene|grammar|read)\//.test(h)) location.hash = h.startsWith('#/scene/') ? '#/scenes' : h.startsWith('#/grammar/') ? '#/library/grammar' : '#/read';
  else route();
};

function route() {
  stop();
  const st = S();
  if (!st.onboarded && !/^#\/(welcome|settings)/.test(location.hash)) { location.hash = '#/welcome'; return; }
  const [path, query] = (location.hash.slice(2) || 'today').split('?');
  const parts = path.split('/');
  const lang = st.lang;
  drawLangSwitch();
  nav.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.dataset.nav === parts[0] || (parts[0] === 'scene' && a.dataset.nav === 'scenes') || (parts[0] === 'grammar' && a.dataset.nav === 'library') || ((parts[0] === 'review' || parts[0] === 'read') && a.dataset.nav === 'today')));
  document.body.classList.toggle('focus-mode', parts[0] === 'review' || parts[0] === 'welcome');
  view.scrollTop = 0; window.scrollTo(0, 0);
  const from = new URLSearchParams(query || '').get('from');
  switch (parts[0]) {
    case 'welcome': return renderWelcome(view);
    case 'review': return renderReview(view, lang);
    case 'scenes': return renderScenes(view, lang);
    case 'scene': return renderScene(view, lang, parts[1], parts[2]);
    case 'library': return renderLibrary(view, lang, parts[1] || 'words');
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
      <li class="${reviewDone ? 'done' : ''}">
        <div class="plan-main"><h2>复习与新词</h2>
          <p>${reviewDone ? '今天的卡片都完成了。' : `<b>${c.due}</b> 张到期 · <b>${c.fresh}</b> 个新条目`}</p>
          <p class="muted">${lang === 'ja' && s.sounds < s.soundTotal ? `假名 ${s.sounds}/${s.soundTotal}，先把假名认熟。` : '约 10–15 分钟。先回忆，再看答案。'}</p></div>
        ${reviewDone ? '<span class="tick" aria-label="已完成">✓</span>' : '<a class="btn primary" href="#/review">开始</a>'}
      </li>
      <li class="${sceneDoneToday ? 'done' : ''}">
        <div class="plan-main"><h2>今日场景</h2>
          ${sceneDoneToday ? `<p>${doneTodayScene.emoji} ${esc(doneTodayScene.title)} ${tl(doneTodayScene.place, lang, 'muted')}</p>
          <p class="muted">今天已完成${nextScene ? `。想多练的话，下一个是${esc(nextScene.title)}：<a href="#/scene/${nextScene.id}">开始</a>` : ''}</p>` : nextScene ? `<p>${nextScene.emoji} ${esc(nextScene.title)} ${tl(nextScene.place, lang, 'muted')}</p>
          <p class="muted">${ns.step ? `进行到第 ${Math.min(ns.step + 1, 5)} 步 · ` : ''}${esc(nextScene.cando)}</p>` : '<p>内置场景都完成了。让 AI 按你的需要生成新的吧。</p>'}</div>
        ${sceneDoneToday ? '<span class="tick" aria-label="已完成">✓</span>' : `<a class="btn ${reviewDone ? 'primary' : ''}" href="${nextScene ? '#/scene/' + nextScene.id : '#/scenes'}">${ns?.step ? '继续' : '开始'}</a>`}
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

    ${s.words + s.sounds < 15 ? `<section class="panel method">
      <h2>这套方法怎么用</h2>
      <p>${esc(M.tips)}</p>
      <p>每天两件事：<b>复习</b>负责把词和语块"存进长期记忆"，<b>场景</b>负责让你在真实情境里把它们用出来。复习卡片在你快要忘记时出现，所以每天花的时间不多，但记得牢。</p>
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
      <p class="hint center" style="margin-top:16px">已经在电脑或手机上学过？<a href="#/settings">先连接私有仓库，取回学习进度</a></p>
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
