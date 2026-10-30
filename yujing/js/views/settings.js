import { S, save, LANGS, exportState, replaceState, resetAll, touchSettings } from '../store.js';
import { syncCfg, saveSyncCfg, testRepo, syncNow, syncStatus, onSyncStatus, jobdeskToken, startSync } from '../sync.js';
import { PRESETS, testConnection, jobdeskConfig } from '../ai.js';
import { voicesFor, speak } from '../speech.js';
import { downloadICS, enableNotifications } from '../reminder.js';
import { esc, toast, download, dayKey } from '../util.js';
import { header, busy } from '../ui.js';

export function renderSettings(el) {
  const st = S(), set = st.settings, ai = set.ai;
  const langs = Object.keys(LANGS);
  const preset = PRESETS[ai.preset] || PRESETS.custom;
  const jd = jobdeskConfig();
  const jdSame = jd && jd.apiKey === ai.apiKey && jd.proxy === ai.proxy;
  const sc = syncCfg();
  const jdTok = jobdeskToken();

  el.innerHTML = `${header('设置')}

  <section class="panel" data-plan>
    <h2>学习计划</h2>
    <div class="field"><span class="label">在学的语言</span>
      <div class="checks-inline">${langs.map(l => `<label class="check"><input type="checkbox" data-active="${l}" ${st.active[l] ? 'checked' : ''}> ${LANGS[l].meta.flag} ${LANGS[l].meta.name}</label>`).join('')}</div></div>
    ${langs.map(l => `<div class="field-row">
      <span class="label">${LANGS[l].meta.name}</span>
      <label>每天新词 <input type="number" min="0" max="50" data-nw="${l}" value="${set.newWords[l]}"></label>
      <label>课后待复习的新${LANGS[l].meta.soundLabel}（每天） <input type="number" min="0" max="30" data-ns="${l}" value="${set.newSounds[l]}"></label></div>`).join('')}
    <p class="hint">新词学进来之后要按间隔反复复习。粗略经验：坚持一段时间后，每天的复习量大约是每日新词数的 4–6 倍（每天 10 个新词 ≈ 每天 40–60 张复习，10–15 分钟）。复习积压时先减新词。</p>
    <div class="field-row"><label>每周目标 <input type="number" min="1" max="7" id="wg" value="${set.weeklyGoal}"> 天</label></div>
  </section>

  <section class="panel">
    <h2>每日提醒</h2>
    <div class="field-row"><label>提醒时间 <input type="time" id="rt" value="${set.reminderTime}"></label></div>
    <p><b>推荐：加到手机日历。</b>下载一个每天重复的日程，用 iPhone/安卓/电脑的日历打开即可，到点会弹提醒，最可靠。</p>
    <button class="btn" id="ics">下载日历提醒（.ics）</button>
    <p style="margin-top:1rem">也可以开启网页通知：当这个网页或已安装的应用开着时，到点还没学习会弹出通知。</p>
    <button class="btn ghost" id="notif">${set.remind && typeof Notification !== 'undefined' && Notification.permission === 'granted' ? '网页通知已开启' : '开启网页通知'}</button>
  </section>

  <section class="panel">
    <h2>发音</h2>
    <div class="field-row"><label>朗读语速 <input type="range" min="0.6" max="1.1" step="0.05" id="rate" value="${set.ttsRate}"> <output id="rateOut">${set.ttsRate}</output></label></div>
    ${langs.map(l => {
      const vs = voicesFor(l);
      return `<div class="field-row"><label>${LANGS[l].meta.name}声音
        <select data-voice="${l}"><option value="">自动选择</option>${vs.map(v => `<option value="${esc(v.voiceURI)}" ${set.voice[l] === v.voiceURI ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select></label>
        <button class="btn small ghost" data-test="${l}">试听</button></div>
        ${vs.length ? '' : `<p class="hint">这台设备没有找到${LANGS[l].meta.name}语音。iPhone：设置 → 辅助功能 → 朗读内容 → 声音，下载对应语言；Windows：设置 → 时间和语言 → 语音，添加语音包。</p>`}`;
    }).join('')}
    <label class="check"><input type="checkbox" id="romaji" ${set.showRomaji ? 'checked' : ''}> 日语显示罗马音（假名熟练后建议关掉）</label>
  </section>

  <section class="panel">
    <h2>AI（生成场景、对话、复盘、阅读）</h2>
    <p>用你自己的 API Key，按量付费，单次对话通常不到一分钱。Key 只保存在这台设备的浏览器里，不会上传到任何地方（除了你选的模型服务）。</p>
    ${jd && !jdSame ? `<div class="task"><p><b>发现 Job Desk 的 DeepSeek 设置</b>这台设备上的 Job Desk 已经配好了 DeepSeek${jd.proxy ? '和中转' : ''}，可以直接共用，不用再填一遍。</p><button class="btn primary small" id="usejd">使用 Job Desk 的设置</button></div>` : ''}
    <div class="field"><span class="label">服务商</span>
      <select id="preset">${Object.entries(PRESETS).map(([k, p]) => `<option value="${k}" ${k === ai.preset ? 'selected' : ''}>${p.name}</option>`).join('')}</select>
      <p class="hint" id="pnote">${esc(preset.note)}${preset.console ? ` <a href="${preset.console}" target="_blank" rel="noopener">获取 API Key</a>` : ''}</p></div>
    <div class="field"><span class="label">接口地址</span><input id="base" type="url" value="${esc(ai.baseUrl)}" placeholder="https://…/v1"></div>
    <div class="field"><span class="label">模型名</span><input id="model" type="text" value="${esc(ai.model)}" placeholder="例如 deepseek-flash"></div>
    <div class="field"><span class="label">API Key</span><input id="key" type="password" value="${esc(ai.apiKey)}" autocomplete="off" placeholder="sk-…"></div>
    <div class="field"><span class="label">中转地址（可选）</span><input id="proxy" type="url" value="${esc(ai.proxy)}" placeholder="https://你的中转.workers.dev">
      <p class="hint">浏览器不能直接调用的服务（如 DeepSeek）需要它。部署方法见项目里的 README，免费、5 分钟。</p></div>
    <details><summary>高级：额外请求参数</summary>
      <div class="field"><textarea id="extra" rows="2" spellcheck="false">${esc(ai.extra)}</textarea>
      <p class="hint">会合并进每次请求的 JSON。DeepSeek 默认关掉"思考模式"，回复更快更省。</p></div></details>
    <div class="row"><button class="btn primary" id="saveai">保存</button><button class="btn ghost" id="test">测试连接</button></div>
    <p class="test-out" aria-live="polite"></p>
  </section>

  <section class="panel" id="sync">
    <h2>私有仓库同步 <span class="muted" id="sync-text">${esc(syncStatus().text)}</span></h2>
    <p>学习进度保存到你的<b>私有</b> GitHub 仓库里，电脑和手机自动同步。令牌只保存在这台设备的浏览器里。</p>
    <details ${sc.enabled ? '' : 'open'}><summary>第一次设置怎么做</summary>
      <ol class="steps">
        <li>GitHub → New repository，名字填 <b>yujing-data</b>，选 <b>Private</b>，勾选 Add a README，创建。</li>
        <li>生成令牌：头像 → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token。Repository access 选 Only select repositories，勾 <b>yujing-data</b>；Permissions → Contents 选 <b>Read and write</b>。<br>也可以编辑 Job Desk 用的那个令牌，把 yujing-data 加进去，两边共用一个。</li>
        <li>把令牌粘贴到下面，点"测试并开启"。其他设备上重复这一步即可。</li>
      </ol></details>
    <div class="field-row"><label>仓库 <input type="text" id="srepo" value="${esc(sc.owner + '/' + sc.repo)}" style="width:14em" spellcheck="false"></label></div>
    <div class="field"><span class="label">GitHub 令牌</span><input id="stoken" type="password" value="${esc(sc.token)}" autocomplete="off" placeholder="github_pat_…"></div>
    ${jdTok && jdTok !== sc.token ? '<button class="btn small ghost" id="usejdtok">填入 Job Desk 的令牌</button>' : ''}
    <div class="row">${sc.enabled
      ? '<button class="btn primary" id="snow">立即同步</button><button class="btn ghost" id="soff">断开这台设备</button>'
      : '<button class="btn primary" id="son">测试并开启</button>'}</div>
    <p class="test-out" id="sout" aria-live="polite"></p>
  </section>

  <section class="panel">
    <h2>数据</h2>
    <p>所有学习记录都保存在这台设备的浏览器里。换设备或清理浏览器前，先导出备份。</p>
    <div class="row"><button class="btn" id="exp">导出备份</button><label class="btn ghost file-btn">导入备份<input type="file" id="imp" accept="application/json" hidden></label></div>
    <button class="link-btn danger" id="reset">清空全部学习数据</button>
  </section>
  <p class="muted"><a href="../">返回网站首页（所有应用）</a></p>`;

  const q = s => el.querySelector(s);
  // 学习计划类设置改动时记下时间，多设备同步时后改的生效
  el.addEventListener('change', e => { if (e.target.closest('[data-plan]') || e.target.id === 'romaji' || e.target.id === 'rt') touchSettings(); }, true);

  // ---- 多设备同步 ----
  const sout = q('#sout');
  const off = onSyncStatus(s => { const t = el.querySelector('#sync-text'); if (!t || !document.body.contains(t)) { off(); return; } t.textContent = s.text; });
  const readCfg = () => {
    const [owner, repo] = q('#srepo').value.trim().split('/').map(x => x.trim());
    return { ...syncCfg(), owner: owner || 'thuljp', repo: repo || 'yujing-data', token: q('#stoken').value.trim() };
  };
  const jdBtn = q('#usejdtok');
  if (jdBtn) jdBtn.onclick = () => { q('#stoken').value = jdTok; jdBtn.remove(); };
  const son = q('#son');
  if (son) son.onclick = async e => {
    const c = readCfg();
    if (!c.token) { sout.innerHTML = '<span class="err-text">先填入 GitHub 令牌。</span>'; return; }
    busy(e.currentTarget, true, '检查仓库…');
    try {
      const info = await testRepo(c);
      if (!info.private && !confirm(`${c.owner}/${c.repo} 是公开仓库，学习记录会被所有人看到。确定继续吗？（建议到仓库 Settings 改成 Private）`)) { busy(e.currentTarget, false); return; }
      const wasOnboarded = S().onboarded;
      saveSyncCfg({ ...c, branch: info.branch, enabled: true });
      sout.innerHTML = '<span class="ok-text">仓库可以访问，正在同步…</span>';
      startSync();
      await syncNow();
      const st2 = syncStatus();
      if (st2.kind === 'error') { sout.innerHTML = `<span class="err-text">${esc(st2.text)}</span>`; busy(e.currentTarget, false); return; }
      if (!wasOnboarded) {
        toast(S().onboarded ? '已取回学习进度' : '同步已开启，私有仓库里还没有记录');
        location.hash = S().onboarded ? '#/today' : '#/welcome';
        return;
      }
      toast('同步已开启');
      renderSettings(el);
    } catch (err) { sout.innerHTML = `<span class="err-text">${esc(err.message)}</span>`; busy(e.currentTarget, false); }
  };
  const snow = q('#snow');
  if (snow) snow.onclick = async e => {
    saveSyncCfg({ ...readCfg(), enabled: true });
    busy(e.currentTarget, true, '同步中…');
    await syncNow();
    busy(e.currentTarget, false);
    const st2 = syncStatus();
    sout.innerHTML = st2.kind === 'error' ? `<span class="err-text">${esc(st2.text)}</span>` : `<span class="ok-text">${esc(st2.text)}</span>`;
  };
  const soff = q('#soff');
  if (soff) soff.onclick = () => {
    if (!confirm('断开后这台设备会锁定，需要重新填令牌才能使用。私有仓库里的记录都保留。确定吗？')) return;
    saveSyncCfg({ ...syncCfg(), enabled: false, token: '' });
    syncNow(); location.hash = '#/today';
  };
  el.querySelectorAll('[data-active]').forEach(cb => cb.onchange = () => {
    st.active[cb.dataset.active] = cb.checked;
    if (!Object.values(st.active).some(Boolean)) { cb.checked = true; st.active[cb.dataset.active] = true; toast('至少保留一门语言'); }
    if (!st.active[st.lang]) st.lang = Object.keys(st.active).find(k => st.active[k]);
    save();
  });
  el.querySelectorAll('[data-nw]').forEach(i => i.onchange = () => { set.newWords[i.dataset.nw] = clampInt(i.value, 0, 50); save(); });
  el.querySelectorAll('[data-ns]').forEach(i => i.onchange = () => { set.newSounds[i.dataset.ns] = clampInt(i.value, 0, 30); save(); });
  q('#wg').onchange = e => { set.weeklyGoal = clampInt(e.target.value, 1, 7); save(); };
  q('#rt').onchange = e => { set.reminderTime = e.target.value || '20:30'; st.lastNotified = ''; save(); };
  q('#ics').onclick = () => { downloadICS(); toast('已下载。用日历打开它，选择"添加"即可。'); };
  q('#notif').onclick = async e => {
    try { await enableNotifications(); e.target.textContent = '网页通知已开启'; toast('到点且当天还没学习时会提醒你'); }
    catch (err) { toast(err.message, 5000); }
  };
  q('#rate').oninput = e => { set.ttsRate = +e.target.value; q('#rateOut').textContent = e.target.value; save(); };
  el.querySelectorAll('[data-voice]').forEach(s => s.onchange = () => { set.voice[s.dataset.voice] = s.value; save(); });
  el.querySelectorAll('[data-test]').forEach(b => b.onclick = () => speak(b.dataset.test === 'ja' ? 'こんにちは。今日もがんばりましょう。' : "Bonjour ! On commence la leçon d'aujourd'hui ?", b.dataset.test, { count: false }));
  q('#romaji').onchange = e => { set.showRomaji = e.target.checked; save(); };

  q('#preset').onchange = e => {
    const p = PRESETS[e.target.value];
    q('#base').value = p.baseUrl; q('#model').value = p.model; q('#extra').value = p.extra;
    q('#pnote').innerHTML = esc(p.note) + (p.console ? ` <a href="${p.console}" target="_blank" rel="noopener">获取 API Key</a>` : '');
  };
  const saveAI = () => {
    Object.assign(ai, {
      preset: q('#preset').value, baseUrl: q('#base').value.trim(), model: q('#model').value.trim(),
      apiKey: q('#key').value.trim(), proxy: q('#proxy').value.trim(), extra: q('#extra').value.trim(),
    });
    save();
  };
  q('#saveai').onclick = () => { saveAI(); toast('已保存'); };
  const usejd = q('#usejd');
  if (usejd) usejd.onclick = () => {
    Object.assign(ai, { preset: 'deepseek', baseUrl: PRESETS.deepseek.baseUrl, model: jd.model, apiKey: jd.apiKey, proxy: jd.proxy, extra: PRESETS.deepseek.extra });
    save(); toast('已共用 Job Desk 的 DeepSeek 设置'); renderSettings(el);
  };
  q('#test').onclick = async e => {
    saveAI();
    const out = q('.test-out');
    busy(e.currentTarget, true, '连接中…'); out.textContent = '';
    try { const r = await testConnection(); out.innerHTML = `<span class="ok-text">连接成功。</span>模型回复：${esc(r)}`; }
    catch (err) { out.innerHTML = `<span class="err-text">${esc(err.message)}</span>`; }
    busy(e.currentTarget, false);
  };

  q('#exp').onclick = () => {
    const data = JSON.parse(exportState());
    data.settings.ai.apiKey = ''; // 备份里不含 Key
    download(`语境备份-${dayKey()}.json`, JSON.stringify(data), 'application/json');
  };
  q('#imp').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      if (!data.cards || !data.settings) throw new Error();
      if (!confirm('导入会覆盖当前设备上的学习记录，确定吗？')) return;
      const key = S().settings.ai.apiKey;
      replaceState(data);
      if (!S().settings.ai.apiKey) { S().settings.ai.apiKey = key; save(); }
      toast('已导入'); location.hash = '#/today';
    } catch { toast('这不是有效的备份文件'); }
  };
  q('#reset').onclick = () => {
    const syncing = syncCfg().enabled;
    if (confirm(syncing ? '确定清空这台设备上的学习记录吗？\n\n注意：同步开着，私有仓库里的记录不会被删除，下次同步会取回来。想彻底重来，先关闭同步。' : '确定清空全部学习记录和设置吗？这无法撤销。') && confirm('真的确定？建议先导出备份。')) { resetAll(); location.hash = '#/welcome'; }
  };
}

function clampInt(v, a, b) { const n = parseInt(v, 10); return isNaN(n) ? a : Math.min(b, Math.max(a, n)); }
