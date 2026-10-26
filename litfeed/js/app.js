// 新刊速递：本周、期刊、主题 × 方法、书架、问一问、设置
import * as D from './data.js';
import { loadAI, saveAI, jobdeskAI, chat, aiReady } from './ai.js';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const view = $('#view');

const GROUPS = { econ: '经济', finance: '金融', mgmt: '管理', cn: '中文' };
const S = { meta: null, tax: {}, conf: null, shelf: {}, f: { rel: 'all', lang: 'all', q: '', sort: 'rel' }, mx: { weeks: 12, col: 'type', sel: null } };
const weekCache = new Map();

// ---------------------------------------------------------------- 工具
function toast(msg, ms = 2600) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toast._t); toast._t = setTimeout(() => { t.hidden = true; }, ms);
}
const journal = (code) => (S.conf?.journals || []).find((j) => j.code === code) || (S.meta?.journals || []).find((j) => j.code === code) || { code, name: code, group: '' };
const lab = (kind, id) => S.tax[kind]?.[id] || id;
const interestZh = (id) => (S.conf?.interests || []).find((x) => x.id === id)?.zh || id;
const year = (p) => (p.date || p.found || '').slice(0, 4);
const shortAuthors = (a = []) => a.length > 3 ? `${a.slice(0, 3).join(', ')} 等` : a.join(', ');

async function loadWeek(w) {
  if (!weekCache.has(w)) weekCache.set(w, D.tryGet(`papers/${w}.json`).then((x) => x || {}));
  return weekCache.get(w);
}
async function papersFor(pairs) {
  const weeks = [...new Set(pairs.map((x) => x[1]).filter(Boolean))];
  const data = Object.assign({}, ...(await Promise.all(weeks.map(loadWeek))));
  return pairs.map(([id]) => data[id]).filter(Boolean);
}

function mdLite(text) {
  const lines = esc(text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').split(/\n/);
  let html = '', list = null;
  const close = () => { if (list) { html += `</${list}>`; list = null; } };
  for (const raw of lines) {
    const l = raw.trim();
    let m;
    if (!l) { close(); continue; }
    if ((m = l.match(/^#{1,4}\s+(.*)/))) { close(); html += `<h4>${m[1]}</h4>`; }
    else if ((m = l.match(/^[-*•]\s+(.*)/))) { if (list !== 'ul') { close(); html += '<ul>'; list = 'ul'; } html += `<li>${m[1]}</li>`; }
    else if ((m = l.match(/^\d+[.)、]\s*(.*)/))) { if (list !== 'ol') { close(); html += '<ol>'; list = 'ol'; } html += `<li>${m[1]}</li>`; }
    else { close(); html += `<p>${l}</p>`; }
  }
  close();
  return html;
}

// ---------------------------------------------------------------- 书架（写回仓库的 shelf.json）
const dirty = new Map();
function shelfSet(p, patch) {
  const cur = S.shelf[p.id] || {};
  const a = p.a || {};
  const next = { ...cur, ...patch, t: p.title, tz: a.title_zh || '', j: p.j, url: p.url || '', doi: p.doi || '', y: year(p),
    au: (p.authors || []).slice(0, 4), w: p.week || cur.w || '', _u: Date.now() };
  S.shelf[p.id] = next; dirty.set(p.id, next);
  clearTimeout(shelfSet._t); shelfSet._t = setTimeout(flushShelf, 1200);
}
async function flushShelf() {
  if (!dirty.size) return;
  const batch = new Map(dirty); dirty.clear();
  try {
    const saved = await D.update('shelf.json', (remote) => {
      const r = remote && typeof remote === 'object' ? remote : {};
      for (const [id, v] of batch) if (!r[id] || (r[id]._u || 0) <= v._u) r[id] = v;
      return r;
    }, `shelf: ${batch.size} 条`);
    S.shelf = { ...saved };
    toast('已保存到书架');
  } catch (e) {
    for (const [id, v] of batch) if (!dirty.has(id)) dirty.set(id, v);
    toast('书架没保存上：' + e.message, 5000);
  }
}
window.addEventListener('beforeunload', (e) => { if (dirty.size) { flushShelf(); e.preventDefault(); } });

const BASKET = 'litfeed.basket';
const basket = () => { try { return JSON.parse(localStorage.getItem(BASKET) || '[]'); } catch { return []; } };
const setBasket = (b) => { try { localStorage.setItem(BASKET, JSON.stringify(b.slice(0, 12))); } catch {} };

// ---------------------------------------------------------------- 文章卡片
const allPapers = new Map();   // id → 记录（页面上出现过的）

function card(p) {
  allPapers.set(p.id, p);
  const a = p.a || {}, j = journal(p.j), sh = S.shelf[p.id] || {};
  const inB = basket().some((x) => x[0] === p.id);
  const rel = a.relevance >= 2 ? `<span class="rel r${a.relevance}">${a.relevance >= 3 ? '很相关' : '相关'}</span>` : '';
  const ints = (a.interests || []).map((x) => `<span class="badge ok">${esc(interestZh(x))}</span>`).join('');
  const basis = p.skip ? `<span class="badge">${esc(p.skip)}</span>` : p.basis === 'title' ? '<span class="badge warn">仅据标题</span>'
    : p.basis === 'web' ? '<span class="badge warn">据网页正文</span>' : '';
  const where = p.ik ? (p.lang === 'zh' ? `${p.vol}年第${p.iss}期` : `${p.vol}${p.iss ? '(' + p.iss + ')' : ''}`) : '在线优先';
  const tags = [a.type && lab('type', a.type), ...(a.design || []).map((x) => lab('design', x)), ...(a.technique || []).map((x) => lab('technique', x)),
    ...(a.field || []).map((x) => lab('field', x))].filter(Boolean).map((t) => `<span class="badge">${esc(t)}</span>`).join('');
  const title = a.title_zh && p.lang !== 'zh' ? a.title_zh : p.title;
  const dl = [['问题', a.question], ['发现', a.finding], ['启发', a.takeaway], ['方法', a.method_note], ['数据', a.data],
    ['关键词', (a.keywords || []).join('、')]].filter((x) => x[1]).map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('');
  const abs = p.abs ? `<dt>摘要</dt><dd class="abs">${esc(p.abs)}${p.abs_src && p.abs_src.startsWith('web:') ? `<br><span class="note">来源：${esc(p.abs_src.slice(4))}</span>` : ''}</dd>` : '';
  return `<article class="pc" data-id="${esc(p.id)}">
    <div class="pc-top"><span class="jb g-${esc(j.group)}">${esc(p.j)}</span><span class="note">${esc(where)} · ${esc(year(p))}</span>${rel}${ints}${basis}</div>
    <h3><a href="${esc(p.url || '#')}" target="_blank" rel="noopener">${esc(title)}</a></h3>
    ${p.lang !== 'zh' && a.title_zh ? `<p class="orig">${esc(p.title)}</p>` : ''}
    <p class="note" style="margin:0 0 6px">${esc(shortAuthors(p.authors))}</p>
    ${a.one_liner ? `<p class="ol">${esc(a.one_liner)}</p>` : ''}
    ${(a.relevance ?? 0) < 2 && a.method_note ? `<p class="ol note">方法：${esc(a.method_note)}</p>` : ''}
    ${tags ? `<div class="tags">${tags}</div>` : ''}
    ${dl || abs ? `<details><summary>详情</summary><dl>${dl}${abs}</dl></details>` : ''}
    <div class="pc-act">
      <button class="act" data-act="want" aria-pressed="${sh.s === 'want'}">想读</button>
      <button class="act" data-act="read" aria-pressed="${sh.s === 'read'}">已读</button>
      <button class="act" data-act="star" aria-pressed="${!!sh.star}">★ 收藏</button>
      <button class="act" data-act="kg" aria-pressed="${!!sh.kg}" title="导出给经济学知识图谱">进图谱</button>
      <span class="sp"></span>
      <button class="act" data-act="basket" aria-pressed="${inB}">${inB ? '已加入提问' : '加入提问'}</button>
      <button class="act" data-act="note">${sh.note ? '笔记 ✎' : '笔记'}</button>
    </div>
    ${sh.note ? `<p class="note" style="margin:8px 0 0">笔记：${esc(sh.note)}</p>` : ''}
  </article>`;
}

view.addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]');
  if (b) {
    const art = b.closest('article.pc'); const p = allPapers.get(art?.dataset.id);
    if (!p) return;
    const sh = S.shelf[p.id] || {};
    const act = b.dataset.act;
    if (act === 'want' || act === 'read') shelfSet(p, { s: sh.s === act ? '' : act });
    else if (act === 'star') shelfSet(p, { star: !sh.star });
    else if (act === 'kg') shelfSet(p, { kg: !sh.kg });
    else if (act === 'basket') {
      let bk = basket();
      bk = bk.some((x) => x[0] === p.id) ? bk.filter((x) => x[0] !== p.id) : [...bk, [p.id, p.week]];
      if (bk.length > 12) { toast('最多 12 篇'); return; }
      setBasket(bk); toast(bk.some((x) => x[0] === p.id) ? `已加入提问（共 ${bk.length} 篇）` : '已移出');
    } else if (act === 'note') {
      if (art.querySelector('.mynote')) return;
      const ta = document.createElement('textarea'); ta.className = 'mynote'; ta.rows = 3; ta.value = sh.note || ''; ta.placeholder = '写点什么，离开输入框自动保存';
      art.append(ta); ta.focus();
      ta.addEventListener('blur', () => { if (ta.value !== (sh.note || '')) shelfSet(p, { note: ta.value.trim() }); refreshCard(art, p); });
      return;
    }
    refreshCard(art, p);
    return;
  }
  const go = e.target.closest('[data-goto]');
  if (go) { e.preventDefault(); flash(go.dataset.goto); }
});
function refreshCard(art, p) { const open = art.querySelector('details')?.open; art.outerHTML = card(p); if (open) $(`article.pc[data-id="${CSS.escape(p.id)}"] details`)?.setAttribute('open', ''); }
function flash(id) {
  const el = $(`article.pc[data-id="${CSS.escape(id)}"]`);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.querySelector('details')?.setAttribute('open', '');
  el.classList.add('flash'); setTimeout(() => el.classList.remove('flash'), 1600);
}
const ref = (id, label) => `<a href="#" class="link" data-goto="${esc(id)}">${esc(label)}</a>`;
const refTitle = (p) => p ? (p.lang !== 'zh' && p.a?.title_zh ? p.a.title_zh : p.title) : '';

// ---------------------------------------------------------------- 列表过滤
function filterBar(n) {
  const f = S.f;
  const seg = (k, opts) => `<span class="seg" data-f="${k}">${opts.map(([v, t]) => `<button data-v="${v}" aria-pressed="${f[k] === v}">${t}</button>`).join('')}</span>`;
  return `<div class="toolbar" id="fbar">
    ${seg('rel', [['all', '全部'], ['rel', '和我相关']])}
    ${seg('lang', [['all', '中英文'], ['en', '英文'], ['zh', '中文']])}
    ${seg('sort', [['rel', '按相关度'], ['journal', '按期刊']])}
    <input type="search" id="fq" placeholder="搜索标题、方法、关键词" value="${esc(f.q)}">
    <span class="note" id="fn">${n} 篇</span></div>`;
}
function applyFilter(list) {
  const f = S.f, q = f.q.trim().toLowerCase();
  let out = list.filter((p) => (f.rel === 'all' || (p.a?.relevance || 0) >= 2) && (f.lang === 'all' || p.lang === f.lang));
  if (q) out = out.filter((p) => JSON.stringify([p.title, p.authors, p.a]).toLowerCase().includes(q));
  return out;
}
function listHTML(list) {
  const order = (S.conf?.journals || []).map((j) => j.code);
  if (!list.length) return '<p class="empty">没有符合条件的文章。</p>';
  if (S.f.sort === 'journal') {
    const by = new Map();
    for (const p of [...list].sort((a, b) => order.indexOf(a.j) - order.indexOf(b.j))) { if (!by.has(p.j)) by.set(p.j, []); by.get(p.j).push(p); }
    return [...by].map(([j, ps]) => `<div class="group-h"><span class="jb g-${esc(journal(j).group)}">${esc(j)}</span>${esc(journal(j).name)} · ${ps.length} 篇</div><div class="plist">${ps.map(card).join('')}</div>`).join('');
  }
  const sorted = [...list].sort((a, b) => (b.a?.relevance || 0) - (a.a?.relevance || 0) || (a.skip ? 1 : 0) - (b.skip ? 1 : 0) || order.indexOf(a.j) - order.indexOf(b.j));
  return `<div class="plist">${sorted.map(card).join('')}</div>`;
}
function bindFilter(list, box) {
  const redraw = () => { const l = applyFilter(list); box.innerHTML = listHTML(l); $('#fn').textContent = `${l.length} 篇`; };
  $('#fbar').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-v]'); if (!b) return;
    S.f[b.parentElement.dataset.f] = b.dataset.v;
    $$('button', b.parentElement).forEach((x) => x.setAttribute('aria-pressed', x === b));
    redraw();
  });
  $('#fq').addEventListener('input', (e) => { S.f.q = e.target.value; clearTimeout(bindFilter._t); bindFilter._t = setTimeout(redraw, 200); });
  redraw();
}

// ---------------------------------------------------------------- 本周
async function viewWeek(arg) {
  const weeks = S.meta.weeks || [];
  if (!weeks.length) { view.innerHTML = noData(); return; }
  const w = weeks.some((x) => x.week === arg) ? arg : weeks[0].week;
  const [dg, data] = await Promise.all([D.tryGet(`digests/${w}.json`), loadWeek(w)]);
  const list = Object.values(data);
  const byId = Object.fromEntries(list.map((p) => [p.id, p]));
  const d = dg || {};
  const idsLinks = (ids = []) => `<div class="refs">${ids.filter((i) => byId[i]).map((i) => ref(i, `${byId[i].j}：${refTitle(byId[i]).slice(0, 28)}${refTitle(byId[i]).length > 28 ? '…' : ''}`)).join('')}</div>`;
  const blocks = (arr = [], key = 'name') => arr.map((x) => `<div class="block"><h4>${esc(x[key])}</h4>${x.summary ? `<p>${esc(x.summary)}</p>` : ''}${idsLinks(x.ids)}</div>`).join('');
  const nEn = list.filter((p) => p.lang === 'en').length;
  view.innerHTML = `
    <div class="week-head">
      <div><p class="lbl">${esc(w)} · ${esc(d.date || '')}</p>
        <p class="headline">${esc(d.headline || '本周速递')}</p>
        <div class="stats"><span><b>${list.length}</b>篇新文章</span><span><b>${d.n_rel ?? list.filter((p) => (p.a?.relevance || 0) >= 2).length}</b>篇和你相关</span><span><b>${nEn}</b>英文 · <b>${list.length - nEn}</b>中文</span></div></div>
      <label class="note">换一周 <select id="wsel">${weeks.map((x) => `<option value="${x.week}" ${x.week === w ? 'selected' : ''}>${x.week}（${x.n} 篇）</option>`).join('')}</select></label>
    </div>
    ${d.must_read?.length || d.interest?.length ? `<div class="digest">
      <div class="panel"><p class="lbl">值得一读</p><ol class="must">${(d.must_read || []).filter((m) => byId[m.id]).map((m) => `<li><span class="jb g-${esc(journal(byId[m.id].j).group)}">${esc(byId[m.id].j)}</span>
        <span class="t">${ref(m.id, refTitle(byId[m.id]))}</span><span class="why">${esc(m.why)}</span></li>`).join('')}</ol></div>
      <div class="panel"><p class="lbl">你的研究方向</p><div class="blocks">${blocks(d.interest, 'topic') || '<p class="note">本周没有直接相关的文章。</p>'}</div></div>
    </div>` : ''}
    ${d.themes?.length || d.methods?.length ? `<div class="cols3">
      <div class="panel" style="grid-column:span 2"><p class="lbl">跨期刊主题</p><div class="blocks">${blocks(d.themes)}</div></div>
      <div class="panel"><p class="lbl">方法与技巧</p><div class="blocks">${blocks(d.methods)}</div></div>
    </div>` : ''}
    ${d.cn_en ? `<p class="cn-en">中英文对比：${esc(d.cn_en)}</p>` : ''}
    <h3 class="h">全部文章</h3>
    ${filterBar(list.length)}
    <div id="plist"></div>`;
  $('#wsel').addEventListener('change', (e) => { location.hash = '#week/' + e.target.value; });
  bindFilter(list, $('#plist'));
}

// ---------------------------------------------------------------- 期刊
async function viewJournals(arg) {
  const idx = (await D.tryGet('issues.json')) || {};
  const js = (S.conf?.journals || S.meta.journals || []).filter((j) => j.enabled !== false);
  const [code0, key0] = (arg || '').split('/').map(decodeURIComponent);
  const code = js.some((j) => j.code === code0) ? code0 : (js.find((j) => idx[j.code]?.issues?.length) || js[0])?.code;
  if (!code) { view.innerHTML = noData(); return; }
  const ji = idx[code] || { issues: [], online: [] };
  const key = key0 === 'online' ? 'online' : (ji.issues.some((e) => e.key === key0) ? key0 : ji.issues[0]?.key || (ji.online.length ? 'online' : ''));
  const nav = Object.entries(GROUPS).map(([g, gz]) => {
    const items = js.filter((j) => j.group === g);
    if (!items.length) return '';
    return `<h4>${gz}</h4>` + items.map((j) => { const e = idx[j.code]?.issues?.[0];
      return `<button data-j="${esc(j.code)}" aria-current="${j.code === code}"><span class="nm">${esc(j.code === j.name ? j.name : `${j.code} · ${j.name}`)}</span>
        <span class="lt">${e ? esc(e.label) : '还没有数据'}</span><span class="ct">${e ? e.ids.length : ''}</span></button>`; }).join('');
  }).join('');
  const ent = key === 'online' ? null : ji.issues.find((e) => e.key === key);
  const pairs = ent ? ent.ids : (ji.online || []).map((x) => [x[0], x[1]]);
  const list = await papersFor(pairs);
  const byId = Object.fromEntries(list.map((p) => [p.id, p]));
  const ov = ent?.overview;
  const j = journal(code);
  view.innerHTML = `<div class="jdesk">
    <nav class="panel jnav" aria-label="期刊">${nav}</nav>
    <div>
      <select class="jsel" id="jsel">${js.map((x) => `<option value="${esc(x.code)}" ${x.code === code ? 'selected' : ''}>${esc(GROUPS[x.group] || '')} · ${esc(x.name)}</option>`).join('')}</select>
      <h2 class="h">${esc(j.name)}</h2>
      <div class="toolbar" style="margin-top:10px">
        <select id="isel">${ji.issues.map((e) => `<option value="${esc(e.key)}" ${e.key === key ? 'selected' : ''}>${esc(e.label)}（${e.ids.length} 篇）</option>`).join('')}
          ${ji.online?.length ? `<option value="online" ${key === 'online' ? 'selected' : ''}>在线优先（${ji.online.length} 篇）</option>` : ''}</select>
        ${ent?.date ? `<span class="note">出版 ${esc(ent.date.slice(0, 7))} · 收录于 ${esc(ent.found || '')}</span>` : ''}
      </div>
      ${ov ? `<div class="panel overview"><p class="lbl">本期速览</p><p>${esc(ov.overview)}</p>
        ${(ov.picks || []).filter((x) => byId[x.id]).map((x) => `<p class="note">★ ${ref(x.id, refTitle(byId[x.id]))}：${esc(x.why)}</p>`).join('')}
        ${ov.themes?.length ? `<div class="chips" style="margin-top:6px">${ov.themes.map((t) => `<span class="badge">${esc(t.name)} · ${t.ids.length}</span>`).join('')}</div>` : ''}</div>` : ''}
      ${!pairs.length ? '<p class="empty">这本期刊还没有收录的文章。下次每周检索后会出现。</p>' : listHTML(list)}
    </div></div>`;
  $$('.jnav button').forEach((b) => b.addEventListener('click', () => { location.hash = '#journals/' + encodeURIComponent(b.dataset.j); }));
  $('#jsel').addEventListener('change', (e) => { location.hash = '#journals/' + encodeURIComponent(e.target.value); });
  $('#isel')?.addEventListener('change', (e) => { location.hash = `#journals/${encodeURIComponent(code)}/${encodeURIComponent(e.target.value)}`; });
}

// ---------------------------------------------------------------- 主题 × 方法
async function viewMatrix() {
  const weeks = (S.meta.weeks || []).slice(0, S.mx.weeks);
  if (!weeks.length) { view.innerHTML = noData(); return; }
  view.innerHTML = '<p class="empty">加载中…</p>';
  const data = await Promise.all(weeks.map((w) => loadWeek(w.week)));
  const list = data.flatMap((d) => Object.values(d)).filter((p) => p.a && !p.skip);
  const colKind = S.mx.col;
  const cols = Object.keys(S.tax[colKind] || {}).filter((c) => list.some((p) => colKind === 'type' ? p.a.type === c : (p.a[colKind] || []).includes(c)));
  const has = (p, c) => colKind === 'type' ? p.a.type === c : (p.a[colKind] || []).includes(c);
  const rows = [['sec', '研究兴趣'], ...(S.conf?.interests || []).map((x) => ['interests', x.id, x.zh]), ['sec', '领域'],
    ...Object.entries(S.tax.field || {}).map(([id, zh]) => ['field', id, zh])];
  const inRow = (p, kind, id) => (p.a[kind] || []).includes(id);
  const max = Math.max(1, ...rows.filter((r) => r[0] !== 'sec').flatMap(([k, id]) => cols.map((c) => list.filter((p) => inRow(p, k, id) && has(p, c)).length)));
  const body = rows.map((r) => {
    if (r[0] === 'sec') return `<tr class="sec"><th colspan="${cols.length + 2}">${r[1]}</th></tr>`;
    const [k, id, zh] = r;
    const inR = list.filter((p) => inRow(p, k, id));
    if (!inR.length && k === 'field') return '';
    return `<tr><th>${esc(zh)}</th>${cols.map((c) => { const n = inR.filter((p) => has(p, c)).length; const sel = S.mx.sel && S.mx.sel.join() === [k, id, c].join();
      return n ? `<td><button data-cell="${k}|${id}|${c}" class="${n / max > .55 ? 'hot' : ''}" style="--v:${(0.12 + 0.88 * n / max).toFixed(2)}" aria-pressed="${!!sel}">${n}</button></td>` : '<td class="z">·</td>'; }).join('')}
      <td class="tot">${inR.length ? `<button data-cell="${k}|${id}|*" style="--v:0" aria-pressed="${!!(S.mx.sel && S.mx.sel.join() === [k, id, '*'].join())}">${inR.length}</button>` : '·'}</td></tr>`;
  }).join('');
  let sel = [];
  if (S.mx.sel) { const [k, id, c] = S.mx.sel; sel = list.filter((p) => inRow(p, k, id) && (c === '*' || has(p, c))); }
  const segW = [4, 12, 26, 52].map((n) => `<button data-w="${n}" aria-pressed="${S.mx.weeks === n}">${n} 周</button>`).join('');
  view.innerHTML = `<div class="toolbar"><span class="seg">${segW}</span>
      <span class="seg"><button data-c="type" aria-pressed="${colKind === 'type'}">研究类型</button><button data-c="design" aria-pressed="${colKind === 'design'}">实证设计</button><button data-c="technique" aria-pressed="${colKind === 'technique'}">理论技术</button></span>
      <span class="note">最近 ${weeks.length} 周，${list.length} 篇已整理的文章。点数字看文章。</span></div>
    <div class="panel mx-wrap"><table class="mx"><thead><tr><th></th>${cols.map((c) => `<th>${esc(lab(colKind, c))}</th>`).join('')}<th class="tot">合计</th></tr></thead><tbody>${body}</tbody></table></div>
    <div id="mxsel">${S.mx.sel ? `<h3 class="h">${esc(S.mx.sel[0] === 'interests' ? interestZh(S.mx.sel[1]) : lab('field', S.mx.sel[1]))}${S.mx.sel[2] !== '*' ? ' × ' + esc(lab(colKind, S.mx.sel[2])) : ''} · ${sel.length} 篇</h3>${listHTML(sel)}` : ''}</div>`;
  $$('[data-w]').forEach((b) => b.addEventListener('click', () => { S.mx.weeks = +b.dataset.w; viewMatrix(); }));
  $$('[data-c]').forEach((b) => b.addEventListener('click', () => { S.mx.col = b.dataset.c; S.mx.sel = null; viewMatrix(); }));
  $$('[data-cell]').forEach((b) => b.addEventListener('click', () => { S.mx.sel = b.dataset.cell.split('|'); viewMatrix().then(() => $('#mxsel').scrollIntoView({ behavior: 'smooth' })); }));
}

// ---------------------------------------------------------------- 书架
async function viewShelf(arg) {
  const tabs = [['want', '想读', (x) => x.s === 'want'], ['read', '已读', (x) => x.s === 'read'], ['star', '收藏', (x) => x.star],
    ['kg', '进图谱', (x) => x.kg], ['note', '有笔记', (x) => !!x.note]];
  const t = tabs.find((x) => x[0] === arg) || tabs[0];
  const entries = Object.entries(S.shelf).filter(([, v]) => t[2](v)).sort((a, b) => (b[1]._u || 0) - (a[1]._u || 0));
  const list = await papersFor(entries.map(([id, v]) => [id, v.w]));
  const found = new Set(list.map((p) => p.id));
  const missing = entries.filter(([id]) => !found.has(id));
  view.innerHTML = `<div class="toolbar"><span class="seg">${tabs.map(([k, z, f]) => `<button data-t="${k}" aria-pressed="${k === t[0]}">${z} <span class="note">${Object.values(S.shelf).filter(f).length}</span></button>`).join('')}</span>
    ${t[0] === 'kg' ? '<button class="btn sm" id="kgcsv">下载知识图谱候选清单（CSV）</button>' : ''}
    <span class="note">书架保存在仓库的 shelf.json，换设备也能看到。</span></div>
    ${!entries.length ? '<p class="empty">这里还是空的。在文章卡片上点「想读」「收藏」等按钮。</p>' : listHTML(list)}
    ${missing.length ? `<h3 class="h">找不到原记录的条目</h3><ul>${missing.map(([, v]) => `<li><a href="${esc(v.url)}" target="_blank" rel="noopener">${esc(v.tz || v.t)}</a> <span class="note">${esc(v.j)} ${esc(v.y)}</span></li>`).join('')}</ul>` : ''}`;
  $$('[data-t]').forEach((b) => b.addEventListener('click', () => { location.hash = '#shelf/' + b.dataset.t; }));
  $('#kgcsv')?.addEventListener('click', () => {
    const rows = [['title', 'authors', 'year', 'venue', 'doi', 'url', 'note']];
    for (const [, v] of entries) rows.push([v.t, (v.au || []).join('; '), v.y, v.j, v.doi, v.url, v.note || '']);
    const csv = '﻿' + rows.map((r) => r.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = 'litfeed_to_econkg.csv'; a.click();
  });
}

// ---------------------------------------------------------------- 问一问
const PRESETS = [
  ['启发', '这几篇对我的研究（数字经济、数据经济、人工智能、无形资本）有什么启发？可以延伸出哪些研究问题？'],
  ['比较方法', '比较这几篇的研究设计：识别策略或模型设定、数据、关键假设、可能的弱点。用表格或分点。'],
  ['写综述', '把这几篇写成一段中文文献综述（300–500 字），按观点而不是按文章组织，标注作者和年份。'],
  ['可借鉴技巧', '这几篇里有哪些可以直接借鉴到我自己论文里的写作、识别或建模技巧？'],
];
async function viewAsk() {
  const bk = basket();
  const list = await papersFor(bk);
  view.innerHTML = `<div class="ask">
    <div class="panel basket"><p class="lbl">提问的文章（${list.length}/12）</p>
      ${list.length ? `<ol>${list.map((p) => `<li>${esc(refTitle(p))} <span class="note">${esc(p.j)} ${esc(year(p))}</span> <button class="link" data-rm="${esc(p.id)}">移出</button></li>`).join('')}</ol>
      <p><button class="btn sm" id="clr">清空</button></p>` : '<p class="note">在任意文章卡片上点「加入提问」。也可以不选文章，直接问本周的情况。</p>'}
    </div>
    <div>
      ${aiReady() ? '' : '<p class="status bad">还没有配置 AI，先到「设置 → AI」填一下（可以直接用 Job Desk 的设置）。</p>'}
      <div class="presets">${PRESETS.map(([k, v]) => `<button class="chip" data-p="${esc(v)}">${k}</button>`).join('')}</div>
      <textarea id="q" rows="4" placeholder="想问什么？"></textarea>
      <p style="display:flex; gap:10px; align-items:center"><button class="btn primary" id="send">发送</button><span class="note" id="st"></span></p>
      <div class="panel answer" id="ans" hidden></div>
    </div></div>`;
  $$('[data-rm]').forEach((b) => b.addEventListener('click', () => { setBasket(basket().filter((x) => x[0] !== b.dataset.rm)); viewAsk(); }));
  $('#clr')?.addEventListener('click', () => { setBasket([]); viewAsk(); });
  $$('[data-p]').forEach((b) => b.addEventListener('click', () => { $('#q').value = b.dataset.p; $('#q').focus(); }));
  $('#send').addEventListener('click', async () => {
    const q = $('#q').value.trim(); if (!q) return;
    let papers = list;
    if (!papers.length && S.meta.weeks?.length) papers = Object.values(await loadWeek(S.meta.weeks[0].week)).filter((p) => (p.a?.relevance || 0) >= 2).slice(0, 15);
    const ctx = papers.map((p, i) => { const a = p.a || {};
      return `[${i + 1}] ${p.authors?.slice(0, 4).join(', ')} (${year(p)}). ${p.title}. ${journal(p.j).name}.\n${a.title_zh ? '中文标题：' + a.title_zh + '\n' : ''}${p.abs ? '摘要：' + p.abs.slice(0, 2500) + '\n' : ''}`
        + `整理：${a.one_liner || ''} 方法：${a.method_note || ''} ${a.finding ? '发现：' + a.finding : ''}`; }).join('\n\n');
    const sys = `你是一位经济学研究助手。${S.conf?.interests_note || ''}回答用中文，引用文章时用 [编号] 和作者年份。只依据给出的文章信息，不知道的就说不知道，不要编造文献。`;
    const btn = $('#send'); btn.disabled = true; $('#st').textContent = '思考中…';
    try {
      const out = await chat([{ role: 'system', content: sys }, { role: 'user', content: `文章：\n${ctx || '（没有选文章）'}\n\n问题：${q}` }]);
      $('#ans').hidden = false; $('#ans').innerHTML = mdLite(out); $('#st').textContent = '';
    } catch (e) { $('#st').textContent = e.message; }
    btn.disabled = false;
  });
}

// ---------------------------------------------------------------- 设置
function viewSettings(err) {
  const c = D.loadCfg(), ai = loadAI(), conf = S.conf, lr = S.meta?.lastRun;
  const jdTok = D.jobdeskToken(), jdAI = jobdeskAI();
  const jt = conf ? Object.entries(GROUPS).map(([g, gz]) => `<p class="lbl" style="margin-top:8px">${gz}</p><div class="jt">${conf.journals.filter((j) => j.group === g)
    .map((j) => `<label><input type="checkbox" data-jc="${esc(j.code)}" ${j.enabled !== false ? 'checked' : ''}> ${esc(j.code === j.name ? j.name : j.code)}</label>`).join('')}</div>`).join('') : '';
  const usage = Object.entries(S.meta?.usage || {}).reverse();
  view.innerHTML = `<div class="prose" style="max-width:760px">
    ${err ? `<p class="status ${err.code === 'notoken' ? '' : 'bad'}">${esc(err.message)}</p>` : ''}
    <div class="panel sect"><h3>连接数据仓库</h3>
      <div class="form">
        <label>GitHub 令牌<input type="password" id="s-token" value="${esc(c.token)}" placeholder="github_pat_…"></label>
        <div style="display:flex; gap:10px; flex-wrap:wrap"><label style="flex:1">用户名<input type="text" id="s-owner" value="${esc(c.owner)}"></label>
          <label style="flex:1">仓库<input type="text" id="s-repo" value="${esc(c.repo)}"></label><label style="flex:1">分支<input type="text" id="s-branch" value="${esc(c.branch)}"></label></div>
        <p style="display:flex; gap:10px; flex-wrap:wrap; margin:0"><button class="btn primary" id="s-save">测试并保存</button>${jdTok ? '<button class="btn" id="s-jd">使用 Job Desk 的令牌</button>' : ''}</p>
        <p class="status" id="s-st" hidden></p>
      </div>
      <p class="note">令牌：GitHub → Settings → Developer settings → Fine-grained tokens，Repository access 只选 <code>litfeed-data</code>，Contents 选 <b>Read and write</b>（书架和检索设置要写回仓库）。令牌只保存在这台设备的浏览器里。</p>
    </div>
    <div class="panel sect"><h3>AI（问一问）</h3>
      <div class="form">
        <label>接口地址<input type="text" id="a-base" value="${esc(ai.baseUrl)}"></label>
        <label>中转地址（DeepSeek 需要，和 Job Desk、语境共用一个 Worker）<input type="text" id="a-proxy" value="${esc(ai.proxy)}" placeholder="https://xxx.workers.dev"></label>
        <label>API Key<input type="password" id="a-key" value="${esc(ai.apiKey)}"></label>
        <label>模型<input type="text" id="a-model" value="${esc(ai.model)}"></label>
        <p style="display:flex; gap:10px; flex-wrap:wrap; margin:0"><button class="btn primary" id="a-save">保存</button>${jdAI ? '<button class="btn" id="a-jd">使用 Job Desk 的 DeepSeek 设置</button>' : ''}</p>
      </div></div>
    ${conf ? `<div class="panel sect"><h3>每周检索</h3>
      <p class="note">保存后写进仓库的 config.json，下一次检索生效（每周一 07:15，也可以在 GitHub Actions 里手动运行）。</p>
      ${jt}
      <div class="form">
        <label>研究兴趣说明（模型据此判断相关度、决定写多详细）<textarea id="c-note" rows="3">${esc(conf.interests_note || '')}</textarea></label>
        ${(conf.interests || []).map((x) => `<label>${esc(x.zh)} 包括<textarea data-int="${esc(x.id)}" rows="2">${esc(x.desc)}</textarea></label>`).join('')}
        <div style="display:flex; gap:12px; flex-wrap:wrap">
          <label>每月预算（元）<input type="number" id="c-budget" min="1" step="1" value="${esc(conf.budget_cny_per_month ?? 8)}" style="width:7em"></label>
          <label>逐篇整理用的模型<select id="c-m1">${['deepseek-flash', 'qwen-flash', 'deepseek-v4-pro'].map((m) => `<option ${conf.models?.annotate === m ? 'selected' : ''}>${m}</option>`).join('')}</select></label>
          <label>每周归纳用的模型<select id="c-m2">${['deepseek-flash', 'deepseek-v4-pro', 'qwen-flash'].map((m) => `<option ${conf.models?.digest === m ? 'selected' : ''}>${m}</option>`).join('')}</select></label>
        </div>
        <label style="flex-direction:row; display:flex; gap:8px; align-items:center; color:var(--ink)"><input type="checkbox" id="c-of" ${conf.include_online_first !== false ? 'checked' : ''}> 收录在线优先（还没分进纸本期次）的文章</label>
        <p style="margin:0"><button class="btn primary" id="c-save">保存检索设置</button></p>
      </div></div>` : ''}
    ${lr ? `<div class="panel sect"><h3>运行情况</h3>
      <p>上次运行：${esc(lr.date)}（${esc(lr.week)}），新增 ${lr.added} 篇，整理 ${lr.analyzed} 篇，本次约 ${Number(lr.cost_cny).toFixed(2)} 元。</p>
      ${lr.issues?.length ? `<ul>${lr.issues.map((x) => `<li class="note">${esc(x)}</li>`).join('')}</ul>` : ''}
      <table class="tbl"><thead><tr><th>月份</th><th>费用</th><th>模型调用</th><th>搜索</th><th>读取网页</th></tr></thead><tbody>
      ${usage.map(([m, u]) => `<tr><td>${m}</td><td>${Number(u.cny).toFixed(2)} 元</td><td>${u.llm_calls}</td><td>${u.search}</td><td>${u.fetch}</td></tr>`).join('')}</tbody></table>
      <p class="note">预算 ${esc(S.meta.budget_cny)} 元 / 月；费用是按官方价格估算的，以 DeepSeek 控制台账单为准。</p></div>` : ''}
  </div>`;
  const st = $('#s-st');
  const show = (m, cls = '') => { st.hidden = false; st.className = 'status ' + cls; st.textContent = m; };
  $('#s-jd')?.addEventListener('click', () => { $('#s-token').value = jdTok; show('已填入 Job Desk 的令牌（需要在 GitHub 上给它加上 litfeed-data），点「测试并保存」。'); });
  $('#s-save').addEventListener('click', async () => {
    const nc = { owner: $('#s-owner').value.trim(), repo: $('#s-repo').value.trim(), branch: $('#s-branch').value.trim() || 'main', token: $('#s-token').value.trim() };
    if (!nc.token) { show('先填令牌。', 'bad'); return; }
    show('测试中…');
    try {
      const r = await D.testRepo(nc);
      if (!r.private) { show('这个仓库是公开的！请到 GitHub 仓库 Settings 改成 Private 再用。', 'bad'); return; }
      D.saveCfg({ ...nc, branch: $('#s-branch').value.trim() || r.branch }); D.clearCache(); weekCache.clear();
      show('连接成功，正在加载…', 'ok'); await boot(true);
    } catch (e) { show(e.message, 'bad'); }
  });
  $('#a-jd')?.addEventListener('click', () => { const j = jobdeskAI(); $('#a-base').value = j.baseUrl; $('#a-proxy').value = j.proxy; $('#a-key').value = j.apiKey; $('#a-model').value = j.model; toast('已填入，点「保存」'); });
  $('#a-save').addEventListener('click', () => { saveAI({ baseUrl: $('#a-base').value.trim(), proxy: $('#a-proxy').value.trim(), apiKey: $('#a-key').value.trim(), model: $('#a-model').value.trim() }); toast('AI 设置已保存在这台设备'); });
  $('#c-save')?.addEventListener('click', async (e) => {
    const en = Object.fromEntries($$('[data-jc]').map((x) => [x.dataset.jc, x.checked]));
    const desc = Object.fromEntries($$('[data-int]').map((x) => [x.dataset.int, x.value.trim()]));
    const budget = Math.max(1, Number($('#c-budget').value) || 8);
    e.target.disabled = true;
    try {
      S.conf = await D.update('config.json', (r) => {
        const cfg = r || conf;
        cfg.journals = (cfg.journals || []).map((j) => (j.code in en ? { ...j, enabled: en[j.code] } : j));
        cfg.interests = (cfg.interests || []).map((x) => (x.id in desc ? { ...x, desc: desc[x.id] || x.desc } : x));
        cfg.interests_note = $('#c-note').value.trim();
        cfg.budget_cny_per_month = budget;
        cfg.models = { ...(cfg.models || {}), annotate: $('#c-m1').value, digest: $('#c-m2').value };
        cfg.include_online_first = $('#c-of').checked;
        return cfg;
      }, '网页：修改检索设置');
      toast('已保存，下次检索生效');
    } catch (err) { toast(err.message, 5000); }
    e.target.disabled = false;
  });
}

function noData() {
  return `<div class="empty prose" style="margin:0 auto; text-align:left">
    <h2 class="h">还没有数据</h2>
    <p>仓库已经连上，但每周检索还没跑过。到 GitHub 上的 <code>litfeed-data</code> → Actions → Weekly literature feed → Run workflow 运行一次（第一次大约 10–20 分钟），完成后刷新这个页面。</p></div>`;
}

// ---------------------------------------------------------------- 路由
const ROUTES = { week: viewWeek, journals: viewJournals, matrix: viewMatrix, shelf: viewShelf, ask: viewAsk, settings: () => viewSettings(S.err) };
async function route() {
  const [name, ...rest] = (location.hash.slice(1) || 'week').split('/');
  const r = ROUTES[name] ? name : 'week';
  $$('nav.tabs a').forEach((a) => a.setAttribute('aria-current', a.getAttribute('href') === '#' + r ? 'page' : 'false'));
  if (!S.meta && r !== 'settings' && r !== 'ask') return;
  try { await ROUTES[r](rest.join('/')); }
  catch (e) { console.error(e); view.innerHTML = `<p class="status bad">${esc(e.message)}</p>`; }
  if (!rest.length) window.scrollTo(0, 0);
}

async function boot(fromSettings = false) {
  try {
    const [meta, tax, conf, shelf] = await Promise.all([D.get('meta.json').catch((e) => { if (e.code === 'notfound') return { weeks: [], journals: [] }; throw e; }),
      D.tryGet('taxonomy.json'), D.tryGet('config.json'), D.tryGet('shelf.json')]);
    S.meta = meta; S.tax = tax || {}; S.conf = conf; S.shelf = shelf || {}; S.err = null;
    const lr = meta.lastRun;
    $('#sum').textContent = lr ? `更新于 ${lr.date} · ${(meta.weeks || []).reduce((n, w) => n + w.n, 0)} 篇` : '';
    if (fromSettings && location.hash !== '#week') location.hash = '#week';
    else route();
  } catch (e) {
    S.meta = null; S.err = e;
    if (location.hash !== '#settings') location.hash = '#settings';
    else route();
  }
}

window.addEventListener('hashchange', route);
boot();
