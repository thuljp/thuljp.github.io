// 经济学知识图谱 · 页面逻辑
import * as D from './data.js';

const $ = s => document.querySelector(s);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const human = s => String(s || '').replace(/_/g, ' ');

const S = { meta: null, papers: [], byId: {}, concepts: [], conceptById: {}, cards: [], links: [], quality: {}, ready: false };

// ---------------------------------------------------------------- 分组
const GROUPS = [
  { key: 'device', name: '可解性假设', color: '--c-device', fam: 'tractability_family', fine: 'tractability_device', kind: 'th' },
  { key: 'technique', name: '求解技术', color: '--c-technique', fam: 'technique_family', fine: 'solution_technique', kind: 'th' },
  { key: 'dataform', name: '数据的形式化', color: '--c-dataform', fam: 'data_modeled_as', fine: 'data_modeled_as', kind: 'th' },
  { key: 'design', name: '识别设计', color: '--c-design', fam: 'design', fine: 'design', kind: 'em' },
  { key: 'robust', name: '稳健性检验', color: '--c-robust', fam: 'robustness_check', fine: 'robustness_check', kind: 'em' },
  { key: 'taste', name: '研究品味', color: '--c-taste', facets: ['question_type', 'novelty_source', 'framing_device'], kind: 'all' },
];
const FACET_GROUP = {};
GROUPS.forEach(g => { (g.facets || [g.fam, g.fine]).forEach(f => { FACET_GROUP[f] = g; }); });
const TYPE_ZH = { theory: '理论', empirical_reduced_form: '实证', empirical_structural: '结构', mixed: '混合', experiment: '实验', survey: '综述' };
const DIM_ZH = { theory: '理论建模', empirics: '实证方法', taste: '研究品味' };
const TACIT_ZH = { stated: '作者明说', partly_stated: '零散提及', unstated: '仅跨篇可见' };
const CONF_ZH = { low: '低置信', medium: '中置信', high: '高置信' };
const COV_ZH = { full_text: '全文', most_sections: '大部分章节', partial: '部分', abstract_only: '仅摘要' };
const ptypeCls = t => t === 'theory' ? 't' : (t === 'mixed' || t === 'empirical_structural') ? 'm' : 'e';

function conceptName(facet, label) {
  if (facet.endsWith('_family')) return (S.meta?.family_zh || {})[label] || human(label);
  return (S.meta?.label_zh || {})[label] || human(label);
}
function facetName(f) { return (S.meta?.facet_zh || {})[f] || human(f); }
function paperLink(id) {
  const p = S.byId[id];
  return p ? `<button class="link" data-paper="${esc(id)}">${esc(p.label)}</button>` : esc(id);
}
function period(y, w = 5) { const a = Math.floor(y / w) * w; return `${a}–${a + w - 1}`; }
function locHtml(ev) {
  if (!ev || !ev.loc) return '';
  const cls = ev.cue_found === false || ev.cf === false ? ' nf' : (ev.inferred || ev.inf) ? ' inf' : '';
  return `<span class="loc${cls}">${esc(ev.loc)}</span>`;
}

// 每篇论文在某个分组、某个层级下的概念 id
function paperConcepts(p, g, level) {
  if (g.facets) return g.facets.flatMap(f => (p.f[f] || []).map(l => `${f}:${l}`));
  if (level === 'fam' && g.fam !== g.fine) return (p.fam[g.fam] || []).map(l => `${g.fam}:${l}`);
  return (p.f[g.fine] || []).map(l => `${g.fine}:${l}`);
}

// ---------------------------------------------------------------- 加载
async function loadCore() {
  const [meta, papers, concepts, cards, links, quality] = await Promise.all([
    D.get('site-data/meta.json'), D.get('site-data/papers.json'), D.get('site-data/concepts.json'),
    D.get('site-data/cards.json'), D.tryGet('site-data/links.json'), D.tryGet('site-data/quality.json')]);
  Object.assign(S, { meta, papers, concepts, cards, links: links || [], quality: quality || {} });
  S.byId = Object.fromEntries(papers.map(p => [p.id, p]));
  S.conceptById = Object.fromEntries(concepts.map(c => [c.id, c]));
  S.ready = true;
  const y = meta.years ? `${meta.years[0]}–${meta.years[1]}` : '';
  $('#sum').textContent = `${meta.n_papers} 篇论文 · ${meta.n_concepts} 个概念 · ${meta.n_cards} 张模式卡片 · ${y} · 数据更新于 ${String(meta.built).replace('T', ' ')}`;
}

// ---------------------------------------------------------------- 路由
const VIEWS = ['graph', 'cards', 'papers', 'trends', 'about', 'settings'];
let current = null;
async function route() {
  let v = (location.hash || '#graph').slice(1);
  if (!VIEWS.includes(v)) v = 'graph';
  if (!S.ready && v !== 'settings') {
    try { await loadCore(); }
    catch (e) { if (v !== 'about') { showNeedSetup(e); return; } }
  }
  current = v;
  VIEWS.forEach(x => { $('#view-' + x).hidden = x !== v; });
  document.querySelectorAll('nav.tabs a').forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === '#' + v ? 'page' : 'false'));
  closeDrawer();
  ({ graph: viewGraph, cards: viewCards, papers: viewPapers, trends: viewTrends, about: viewAbout, settings: viewSettings })[v]();
}

function showNeedSetup(e) {
  VIEWS.forEach(x => { $('#view-' + x).hidden = x !== 'settings'; });
  document.querySelectorAll('nav.tabs a').forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === '#settings' ? 'page' : 'false'));
  viewSettings(e);
}

// ---------------------------------------------------------------- 图谱
const G = { level: 'fam', on: new Set(['device', 'technique', 'dataform']), period: '', type: '', minN: 1, papers: false, cy: null, sel: null };

function filteredPapers(f = G) {
  return S.papers.filter(p => (!f.period || period(p.year) === f.period) && (!f.type || ptypeCls(p.type) === f.type));
}

function viewGraph() {
  const el = $('#view-graph');
  if (!el.dataset.built) {
    const periods = [...new Set(S.papers.map(p => period(p.year)))].sort();
    el.innerHTML = `
      <div class="desk">
        <div class="panel graph-box">
          <div class="toolbar">
            <div class="seg" role="group" aria-label="层级">
              <button id="lv-fam" data-lv="fam">家族</button><button id="lv-fine" data-lv="fine">细标签</button>
            </div>
            <div class="grp chips" id="gchips">${GROUPS.map(g => `<button class="chip" id="g-${g.key}" data-g="${g.key}"><span class="dot" style="background:var(${g.color})"></span>${g.name}</button>`).join('')}</div>
            <div class="grp">
              <select id="g-period" aria-label="时期"><option value="">全部时期</option>${periods.map(x => `<option>${x}</option>`).join('')}</select>
              <select id="g-type" aria-label="论文类型"><option value="">全部论文</option><option value="t">理论</option><option value="e">实证</option><option value="m">混合/结构</option></select>
              <label class="note"><input type="checkbox" id="g-papers"> 显示论文</label>
            </div>
          </div>
          <div id="cy" role="img" aria-label="概念共现网络"></div>
          <div class="hint">节点 = 概念，大小 = 用到它的论文数。连线只画每个概念关联最强的 3 个伙伴（经常在同一篇论文里一起出现），越粗越常一起出现。只有一篇论文用到的概念，点开相邻节点后才显示名称。</div>
        </div>
        <aside class="panel side" id="g-side" aria-live="polite"></aside>
      </div>`;
    el.dataset.built = '1';
    el.querySelector('.seg').addEventListener('click', e => { const b = e.target.closest('[data-lv]'); if (b) { G.level = b.dataset.lv; drawGraph(); } });
    $('#gchips').addEventListener('click', e => {
      const b = e.target.closest('[data-g]'); if (!b) return;
      G.on.has(b.dataset.g) ? G.on.delete(b.dataset.g) : G.on.add(b.dataset.g);
      if (!G.on.size) G.on.add(b.dataset.g);
      drawGraph();
    });
    $('#g-period').addEventListener('change', e => { G.period = e.target.value; drawGraph(); });
    $('#g-type').addEventListener('change', e => { G.type = e.target.value; drawGraph(); });
    $('#g-papers').addEventListener('change', e => { G.papers = e.target.checked; drawGraph(); });
    sideIntro();
  }
  drawGraph();
}

function sideIntro() {
  $('#g-side').innerHTML = `<div class="lbl">怎么看</div><h2>从一个节点开始</h2>
    <ol class="note" style="padding-left:18px;margin:6px 0 0">
      <li>先看「家族」层级：哪些简化手法、求解技术和数据的写法总是一起出现。</li>
      <li>点一个节点，看每篇论文为什么用它、换来了什么、原文在哪一页。</li>
      <li>切到「细标签」看具体假设；勾选「显示论文」把论文也画进来。</li>
      <li>「模式卡片」里是跨论文归纳出的规律，「演化」里看它们怎样随时间变化。</li>
    </ol>`;
}

function drawGraph() {
  document.querySelectorAll('.seg [data-lv]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lv === G.level));
  document.querySelectorAll('#gchips [data-g]').forEach(b => b.setAttribute('aria-pressed', G.on.has(b.dataset.g)));
  if (typeof cytoscape === 'undefined') { $('#cy').innerHTML = '<p class="empty">图谱组件没有加载成功，其他页面仍可用。</p>'; return; }
  const ps = filteredPapers();
  const groups = GROUPS.filter(g => G.on.has(g.key));
  const count = new Map(), pairs = new Map(), pc = new Map();
  for (const p of ps) {
    const ids = [...new Set(groups.flatMap(g => paperConcepts(p, g, G.level)))];
    pc.set(p.id, ids);
    ids.forEach(id => count.set(id, (count.get(id) || 0) + 1));
    for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) {
      const k = ids[i] < ids[j] ? ids[i] + '|' + ids[j] : ids[j] + '|' + ids[i];
      pairs.set(k, (pairs.get(k) || 0) + 1);
    }
  }
  const minN = ps.length > 150 ? 3 : 1;
  const nodes = [...count.entries()].filter(([, n]) => n >= minN);
  const keep = new Set(nodes.map(([id]) => id));
  // 只画"骨架"：每个概念保留关联最强的几条边（Jaccard = 共同出现 / 任一出现），否则小语料里几乎两两相连
  const minE = ps.length >= 10 ? 2 : 1, K = 3;
  const cand = [...pairs.entries()].map(([k, n]) => { const [a, b] = k.split('|'); return { a, b, n, j: n / (count.get(a) + count.get(b) - n) }; })
    .filter(e => e.n >= minE && keep.has(e.a) && keep.has(e.b));
  const byNode = new Map();
  cand.forEach(e => { [e.a, e.b].forEach(x => { if (!byNode.has(x)) byNode.set(x, []); byNode.get(x).push(e); }); });
  const chosen = new Set();
  byNode.forEach(list => list.sort((x, y) => y.j - x.j || y.n - x.n).slice(0, K).forEach(e => chosen.add(e)));
  const edges = [...chosen].sort((x, y) => y.j - x.j).slice(0, 700).map(e => [e.a + '|' + e.b, e.n, e.j]);
  // 只出现在一篇论文、又没有强关联的概念不画，免得满屏孤点（论文详情里仍能看到）
  const linked = new Set(edges.flatMap(e => e[0].split('|')));
  for (const [id, n] of [...nodes]) if (n < 2 && !linked.has(id) && !(G.papers && ps.length <= 250)) nodes.splice(nodes.findIndex(x => x[0] === id), 1);
  const els = nodes.map(([id, n]) => {
    const [facet, label] = id.split(/:(.+)/);
    return { data: { id, label: conceptName(facet, label), n, kind: FACET_GROUP[facet]?.key || 'taste' } };
  });
  edges.forEach(([k, n, j], i) => { const [a, b] = k.split('|'); els.push({ data: { id: 'e' + i, source: a, target: b, w: n, j } }); });
  if (G.papers && ps.length <= 250) {
    ps.forEach(p => {
      els.push({ data: { id: 'p:' + p.id, label: p.label, n: 1, kind: 'paper' } });
      (pc.get(p.id) || []).filter(x => keep.has(x)).forEach((c, i) => els.push({ data: { id: `pe:${p.id}:${i}`, source: 'p:' + p.id, target: c, w: 0, pe: 1 } }));
    });
    const inSet = new Set(ps.map(p => p.id));
    S.links.filter(l => inSet.has(l.source) && inSet.has(l.target)).forEach((l, i) =>
      els.push({ data: { id: 'pl' + i, source: 'p:' + l.source, target: 'p:' + l.target, w: 0, pl: 1 } }));
  }
  const maxW = Math.max(1, ...edges.map(e => e[1])), maxJ = Math.max(.01, ...edges.map(e => e[2]));
  const color = k => css({ device: '--c-device', technique: '--c-technique', dataform: '--c-dataform', design: '--c-design', robust: '--c-robust', taste: '--c-taste', paper: '--c-paper' }[k]);
  if (G.cy) G.cy.destroy();
  G.cy = cytoscape({
    container: $('#cy'), elements: els, minZoom: 0.2, maxZoom: 3,
    layout: { name: 'cose', animate: false, randomize: true, nodeRepulsion: () => 120000, idealEdgeLength: e => e.data('pe') ? 50 : 110 - 50 * ((e.data('j') || 0) / maxJ),
      edgeElasticity: () => 80, gravity: 0.4, numIter: 3000, padding: 30, nodeOverlap: 30, componentSpacing: 60 },
    style: [
      { selector: 'node', style: { 'background-color': e => color(e.data('kind')), label: 'data(label)', color: css('--ink'), 'font-family': css('--font'),
        'font-size': 12, 'text-valign': 'bottom', 'text-margin-y': 4, 'text-wrap': 'wrap', 'text-max-width': 120,
        'text-background-color': css('--surface'), 'text-background-opacity': .8, 'text-background-padding': 1, 'min-zoomed-font-size': 7,
        width: e => 12 + 7 * Math.sqrt(e.data('n')), height: e => 12 + 7 * Math.sqrt(e.data('n')) } },
      { selector: 'node[n < 2]', style: { label: G.level === 'fine' || ps.length >= 10 ? '' : 'data(label)' } },
      { selector: 'node.lab', style: { label: 'data(label)' } },
      { selector: 'node[kind="paper"]', style: { shape: 'round-rectangle', width: 12, height: 12, 'font-size': 10, 'font-weight': 600 } },
      { selector: 'edge', style: { width: e => 0.8 + 5 * ((e.data('j') || 0) / maxJ), 'line-color': css('--faint'), 'curve-style': 'haystack', opacity: .45 } },
      { selector: 'edge[pe = 1]', style: { width: .6, opacity: .5 } },
      { selector: 'edge[pl = 1]', style: { width: 1.4, 'line-color': css('--accent'), 'curve-style': 'bezier', 'target-arrow-shape': 'triangle', 'target-arrow-color': css('--accent'), 'arrow-scale': .7 } },
      { selector: '.dim', style: { opacity: .1 } },
    ],
  });
  // 缩放后让文字在屏幕上保持约 12px
  const z = G.cy.zoom();
  G.cy.style().selector('node').style({ 'font-size': Math.min(22, 12 / Math.max(z, .3)), 'text-max-width': Math.min(220, 120 / Math.max(z, .3)) }).update();
  G.cy.on('tap', 'node', ev => {
    const id = ev.target.id();
    G.cy.elements().removeClass('dim');
    G.cy.elements().not(ev.target.closedNeighborhood()).addClass('dim');
    G.cy.nodes().removeClass('lab'); ev.target.closedNeighborhood().nodes().addClass('lab');
    if (id.startsWith('p:')) showPaper(id.slice(2), $('#g-side'));
    else showConcept(id, $('#g-side'), ps, ev.target);
  });
  G.cy.on('tap', ev => { if (ev.target === G.cy) { G.cy.elements().removeClass('dim'); G.cy.nodes().removeClass('lab'); sideIntro(); } });
  if (!nodes.length) $('#g-side').innerHTML = '<p class="empty">这个筛选条件下没有论文。</p>';
}

async function showConcept(id, box, ps, node) {
  const [facet, label] = id.split(/:(.+)/);
  const c = S.conceptById[id] || { papers: [], years: {} };
  const inSet = new Set(ps.map(p => p.id));
  const papers = (c.papers || []).filter(x => inSet.has(x));
  const g = FACET_GROUP[facet];
  const denom = g?.kind === 'th' ? ps.filter(p => p.th).length : g?.kind === 'em' ? ps.filter(p => p.em).length : ps.length;
  let html = `<div class="lbl">${esc(facetName(facet))}</div><h2>${esc(conceptName(facet, label))}</h2>
    <div class="note">${facet.endsWith('_family') ? `<span class="mono">${esc(label)}</span> · ` : ''}${papers.length} 篇论文${denom ? `（占相关论文 ${Math.round(100 * papers.length / denom)}%）` : ''}</div>
    ${sparkline(c.years)}`;
  if (node) {
    const nb = node.connectedEdges().filter(e => !e.data('pe') && !e.data('pl')).map(e => ({ o: e.source().id() === id ? e.target() : e.source(), w: e.data('w') }))
      .filter(x => !x.o.id().startsWith('p:')).sort((a, b) => b.w - a.w).slice(0, 8);
    if (nb.length) html += `<h3 class="lbl">常和它一起出现</h3><div class="chips">${nb.map(x => `<span class="badge">${esc(x.o.data('label'))} · ${x.w}</span>`).join('')}</div>`;
  }
  const rel = S.cards.filter(cd => (cd.concepts || []).some(x => x === label || x === id) || (cd.topic || '').endsWith(label));
  if (rel.length) html += `<h3 class="lbl">相关模式卡片</h3>${rel.map(cd => `<p style="margin:4px 0"><button class="link" data-card="${esc(cd.id)}">${esc(cd.title)}</button></p>`).join('')}`;
  html += `<h3 class="lbl">各篇论文里的具体条目</h3><div id="c-items" class="kv"><p class="note">加载中…</p></div>`;
  box.innerHTML = html;
  box.scrollTop = 0;
  const items = await D.tryGet(`site-data/items/${facet}/${label}.json`);
  const target = box.querySelector('#c-items');
  if (!target) return;
  if (!items) {
    target.innerHTML = papers.length ? papers.map(x => `<div class="item">${paperLink(x)}</div>`).join('') : '<p class="note">没有条目。</p>';
    return;
  }
  const list = items.filter(it => inSet.has(it.p));
  target.innerHTML = list.slice(0, 80).map(it => `<div class="item">${paperLink(it.p)} <span class="mono muted">${esc(it.sub ? human(it.sub) : it.raw)}</span>
      ${it.what_it_buys ? `<p>换来：${esc(it.what_it_buys)}</p>` : ''}${it.stated_reason ? `<p class="muted">作者理由：${esc(it.stated_reason)}</p>` : ''}
      ${it.acknowledged_limitation ? `<p class="muted">承认的局限：${esc(it.acknowledged_limitation)}</p>` : ''}
      ${it.relaxed_in_paper ? `<span class="badge">文中放松：${esc({ yes: '是', partially: '部分', no: '否', not_discussed: '未讨论' }[it.relaxed_in_paper] || it.relaxed_in_paper)}</span>` : ''}
      ${it.used_for ? `<p>${esc(it.used_for)}</p>` : ''}${it.treatment ? `<p>处理：${esc(it.treatment)}</p>` : ''}
      ${it.comparison ? `<p class="muted">对照：${esc(it.comparison)}</p>` : ''}${it.threat_addressed ? `<p>针对：${esc(it.threat_addressed)}</p>` : ''}
      ${locHtml(it)}</div>`).join('') + (list.length > 80 ? `<p class="note">还有 ${list.length - 80} 条。</p>` : '');
}

function sparkline(years) {
  const ks = Object.keys(years || {}).sort();
  if (ks.length < 2) return '';
  const vals = ks.map(k => years[k]), max = Math.max(...vals), W = 220, H = 36;
  const x = i => 4 + i * (W - 8) / (ks.length - 1), y = v => H - 6 - (H - 14) * v / max;
  const pts = vals.map((v, i) => `${x(i)},${y(v)}`).join(' ');
  return `<svg class="spark" width="${W}" height="${H + 12}" viewBox="0 0 ${W} ${H + 12}" role="img" aria-label="按时期的论文数">
    <polyline points="${pts}" fill="none" stroke="${css('--accent')}" stroke-width="1.6"/>
    ${vals.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="2.4" fill="${css('--accent')}"/>`).join('')}
    <text x="4" y="${H + 10}" font-size="10" fill="${css('--muted')}">${esc(ks[0])}</text>
    <text x="${W - 4}" y="${H + 10}" font-size="10" text-anchor="end" fill="${css('--muted')}">${esc(ks[ks.length - 1])}</text></svg>`;
}

// ---------------------------------------------------------------- 论文详情
async function showPaper(id, box) {
  const p = S.byId[id];
  box.innerHTML = `<p class="note">加载 ${esc(p?.label || id)}…</p>`;
  let r;
  try { r = await D.get(`data/extractions/${id}.json`); }
  catch (e) { box.innerHTML = `<p class="status bad">${esc(e.message)}</p>`; return; }
  box.innerHTML = renderPaper(r);
  box.scrollTop = 0;
}

function renderPaper(r) {
  const m = r.meta || {}, ta = r.taste || {}, th = r.theory, em = r.empirics, nt = r.extraction_notes || {};
  const ver = nt.verification || {};
  const sv = m.source_version || {};
  const cueB = ver.cue_match == null ? '' : `<span class="badge ${ver.cue_match >= .8 ? 'ok' : ver.cue_match >= .6 ? 'warn' : 'bad'}">原文线索找到 ${Math.round(ver.cue_match * 100)}%</span>`;
  let h = `<div class="lbl">${esc(m.venue)} · ${esc(m.year)} · ${esc(TYPE_ZH[m.paper_type] || m.paper_type)}</div>
    <h2>${esc(m.title)}</h2><div class="note">${esc((m.authors || []).join(', '))}</div>
    <div style="margin-top:8px"><span class="badge">读取：${esc(COV_ZH[nt.coverage] || nt.coverage || '未知')}</span>
      <span class="badge">抽取：${esc(String(nt.extractor || '').replace(/^agent-.*/, 'Claude Opus（试点）'))}</span>${cueB}
      ${nt.escalated ? `<span class="badge warn">已升级重抽：${esc(nt.escalated.reason)}</span>` : ''}
      ${sv.url ? `<a class="badge" href="${esc(sv.url)}" target="_blank" rel="noopener">读的版本 ↗</a>` : ''}</div>`;
  if (ta.question) h += `<h3 class="lbl">研究问题</h3><p>${esc(ta.question)}</p>`;
  if (ta.foil) h += `<h3 class="lbl">对立面（foil）</h3><p>${esc(ta.foil)}</p>`;
  if (ta.contribution_claims?.length) h += `<h3 class="lbl">贡献表述</h3><div class="kv">${ta.contribution_claims.map(c => `<div class="item"><p>${esc(c.claim)}</p>${locHtml(c.evidence)}</div>`).join('')}</div>`;
  if (th) {
    if (th.data_modeled_as?.length) h += `<h3 class="lbl">数据被形式化为</h3><p>${th.data_modeled_as.map(x => `<span class="badge">${esc(human(x))}</span>`).join('')}</p>`;
    if (th.key_mechanism) h += `<h3 class="lbl">核心机制</h3><p>${esc(th.key_mechanism)}</p>`;
    if (th.tractability_devices?.length) h += `<h3 class="lbl">可解性假设（${th.tractability_devices.length}）</h3><div class="kv">${th.tractability_devices.map(d => `<div class="item"><div class="name">${esc(human(d.device))}</div>
      ${d.what_it_buys ? `<p>换来：${esc(d.what_it_buys)}</p>` : ''}${d.stated_reason ? `<p class="muted">作者理由：${esc(d.stated_reason)}</p>` : ''}
      ${d.acknowledged_limitation ? `<p class="muted">承认的局限：${esc(d.acknowledged_limitation)}</p>` : ''}${locHtml(d.evidence)}</div>`).join('')}</div>`;
    if (th.solution_techniques?.length) h += `<h3 class="lbl">求解技术</h3><div class="kv">${th.solution_techniques.map(d => `<div class="item"><div class="name">${esc(human(d.technique))}</div>${d.used_for ? `<p>${esc(d.used_for)}</p>` : ''}${locHtml(d.evidence)}</div>`).join('')}</div>`;
    if (th.main_results?.length) h += `<h3 class="lbl">主要结果</h3><div class="kv">${th.main_results.map(d => `<div class="item"><span class="badge">${esc(human(d.type))}</span><p>${esc(d.statement)}</p>${locHtml(d.evidence)}</div>`).join('')}</div>`;
  }
  if (em) {
    h += `<h3 class="lbl">实证设置</h3><p>${esc(em.setting || '')}</p>${em.unit_of_observation ? `<p class="note">观测单位：${esc(em.unit_of_observation)}</p>` : ''}${em.period ? `<p class="note">时期：${esc(em.period)}</p>` : ''}`;
    if (em.designs?.length) h += `<h3 class="lbl">识别设计</h3><div class="kv">${em.designs.map(d => `<div class="item"><div class="name">${esc(human(d.design))}</div>${d.treatment ? `<p>处理：${esc(d.treatment)}</p>` : ''}${d.comparison ? `<p>对照：${esc(d.comparison)}</p>` : ''}${d.identifying_assumption ? `<p class="muted">识别假设：${esc(d.identifying_assumption)}</p>` : ''}${locHtml(d.evidence)}</div>`).join('')}</div>`;
    if (em.inference && (em.inference.cluster_level || em.inference.other?.length)) h += `<h3 class="lbl">推断</h3><p>${esc(em.inference.cluster_level || '')}</p>${(em.inference.other || []).map(x => `<p class="note">${esc(x)}</p>`).join('')}`;
    if (em.robustness_checks?.length) h += `<h3 class="lbl">稳健性检验（${em.robustness_checks.length}）</h3><div class="kv">${em.robustness_checks.map(d => `<div class="item"><div class="name">${esc(human(d.check))}</div>${d.threat_addressed ? `<p>针对：${esc(d.threat_addressed)}</p>` : ''}${locHtml(d.evidence)}</div>`).join('')}</div>`;
    if (em.headline_magnitude) h += `<h3 class="lbl">主要量级</h3><p>${esc(em.headline_magnitude)}</p>`;
  }
  const rel = S.links.filter(l => l.source === r.id || l.target === r.id);
  if (rel.length) h += `<h3 class="lbl">语料内关系</h3><div class="kv">${rel.map(l => `<div class="item">${l.source === r.id ? '基于 ' + paperLink(l.target) : '被 ' + paperLink(l.source) + ' 引为基础'} <span class="badge">${esc(l.relation || '')}</span></div>`).join('')}</div>`;
  if (nt.uncertain_fields?.length) h += `<h3 class="lbl">抽取时不确定的地方</h3>${nt.uncertain_fields.map(x => `<p class="note">${esc(x)}</p>`).join('')}`;
  return h;
}

// ---------------------------------------------------------------- 抽屉
function openDrawer(html) {
  let d = $('#drawer');
  d.innerHTML = `<button class="close" id="dr-close">关闭</button>` + html;
  d.hidden = false;
  d.scrollTop = 0;
  $('#dr-close').focus();
}
function closeDrawer() { const d = $('#drawer'); if (d) d.hidden = true; }

// ---------------------------------------------------------------- 卡片
const C = { dim: '', q: '' };
function viewCards() {
  const el = $('#view-cards');
  if (!el.dataset.built) {
    el.innerHTML = `<div class="cards-tools"><div class="chips" id="c-dims"></div>
      <input type="search" id="c-q" placeholder="搜索卡片" aria-label="搜索卡片" style="flex:1 1 220px;min-width:0"></div><div class="cards" id="c-list"></div>`;
    el.dataset.built = '1';
    $('#c-dims').addEventListener('click', e => { const b = e.target.closest('[data-dim]'); if (b) { C.dim = b.dataset.dim; drawCards(); } });
    $('#c-q').addEventListener('input', e => { C.q = e.target.value.trim().toLowerCase(); drawCards(); });
  }
  drawCards();
}
function drawCards() {
  const dims = ['', 'theory', 'empirics', 'taste'];
  $('#c-dims').innerHTML = dims.map(d => `<button class="chip" data-dim="${d}" aria-pressed="${C.dim === d}">${d ? DIM_ZH[d] : '全部'} <span class="n">${d ? S.cards.filter(c => c.dimension === d).length : S.cards.length}</span></button>`).join('');
  const list = S.cards.filter(c => (!C.dim || c.dimension === C.dim) && (!C.q || JSON.stringify(c).toLowerCase().includes(C.q)));
  $('#c-list').innerHTML = list.length ? list.map(c => `
    <article class="card" id="card-${esc(c.id)}">
      <div class="head"><span class="lbl">${esc(DIM_ZH[c.dimension] || c.dimension)}</span>
        <span><span class="badge">${c.support} 篇支持</span><span class="badge">${esc(TACIT_ZH[c.tacit_level] || c.tacit_level)}</span><span class="badge ${c.confidence === 'low' ? 'warn' : c.confidence === 'high' ? 'ok' : ''}">${esc(CONF_ZH[c.confidence] || c.confidence)}</span></span></div>
      <h2>${esc(c.title)}</h2><p>${esc(c.pattern)}</p>
      <dl><dt>何时用</dt><dd>${esc(c.when_to_use)}</dd><dt>换来什么</dt><dd>${esc(c.what_it_buys)}</dd><dt>代价与脆弱处</dt><dd>${esc(c.cost_or_fragility)}</dd></dl>
      ${c.lineage?.length ? `<div class="lineage"><span class="muted">谱系</span>${c.lineage.map((l, i) => `${i ? '<span class="arr">→</span>' : ''}${paperLink(l.paper)}<span class="muted" style="font-size:12px">${esc(l.role)}</span>`).join('')}</div>` : ''}
      <details><summary>证据（${c.evidence.length}）${c.counterexamples?.length ? `与反例（${c.counterexamples.length}）` : ''}</summary><ul>
        ${c.evidence.map(e => `<li>${paperLink(e.paper)} <span class="loc">${esc(e.loc)}</span> ${esc(e.note)}</li>`).join('')}
        ${(c.counterexamples || []).map(e => `<li><span class="badge warn">反例</span>${paperLink(e.paper)} <span class="loc">${esc(e.loc)}</span> ${esc(e.note)}</li>`).join('')}</ul></details>
      ${c.outside_context ? `<div class="outside"><b>语料外背景</b>（不计入支持）：${esc(c.outside_context)}</div>` : ''}
    </article>`).join('') : '<p class="empty">没有符合条件的卡片。</p>';
}

// ---------------------------------------------------------------- 论文列表
const P = { q: '', type: '', venue: '', period: '', sel: null };
function viewPapers() {
  const el = $('#view-papers');
  if (!el.dataset.built) {
    const venues = [...new Set(S.papers.map(p => p.venue))].sort();
    const periods = [...new Set(S.papers.map(p => period(p.year)))].sort();
    el.innerHTML = `<div class="ptools"><input type="search" id="p-q" placeholder="搜索标题、作者、研究问题" aria-label="搜索论文">
        <select id="p-type" aria-label="类型"><option value="">全部类型</option><option value="t">理论</option><option value="e">实证</option><option value="m">混合/结构</option></select>
        <select id="p-venue" aria-label="期刊"><option value="">全部期刊</option>${venues.map(v => `<option>${esc(v)}</option>`).join('')}</select>
        <select id="p-period" aria-label="时期"><option value="">全部时期</option>${periods.map(v => `<option>${v}</option>`).join('')}</select>
        <span class="note" id="p-n"></span></div>
      <div class="desk"><div class="panel plist" id="p-list"></div><aside class="panel side" id="p-side" aria-live="polite"><p class="note">点左边任一篇论文，看完整的抽取记录和原文位置。</p></aside></div>`;
    el.dataset.built = '1';
    $('#p-q').addEventListener('input', e => { P.q = e.target.value.trim().toLowerCase(); drawPapers(); });
    ['type', 'venue', 'period'].forEach(k => $('#p-' + k).addEventListener('change', e => { P[k] = e.target.value; drawPapers(); }));
    $('#p-list').addEventListener('click', e => {
      const b = e.target.closest('.prow'); if (!b) return;
      P.sel = b.dataset.id; drawPapers(); showPaper(P.sel, $('#p-side'));
      if (matchMedia('(max-width:900px)').matches) $('#p-side').scrollIntoView({ block: 'start' });
    });
  }
  drawPapers();
}
function drawPapers() {
  const list = S.papers.filter(p => (!P.type || ptypeCls(p.type) === P.type) && (!P.venue || p.venue === P.venue) && (!P.period || period(p.year) === P.period)
    && (!P.q || (p.title + ' ' + p.label + ' ' + p.q).toLowerCase().includes(P.q)));
  $('#p-n').textContent = `${list.length} 篇`;
  const shown = list.slice(0, 500);
  $('#p-list').innerHTML = shown.length ? shown.map(p => `<button class="prow" data-id="${esc(p.id)}" aria-current="${P.sel === p.id}">
      <span class="yr">${esc(p.year)}</span><span class="who">${esc(p.label)} <small>${esc(p.venue)}</small></span>
      <span class="q">${esc(p.q || p.title)}</span><span class="ptype ${ptypeCls(p.type)}">${esc(TYPE_ZH[p.type] || p.type)}</span></button>`).join('')
    + (list.length > 500 ? `<p class="note" style="padding:10px 14px">只显示前 500 篇，用搜索或筛选缩小范围。</p>` : '')
    : '<p class="empty">没有符合条件的论文。</p>';
}

// ---------------------------------------------------------------- 演化
const T = { facet: 'tractability_family', type: '', picked: null };
const TREND_FACETS = [['tractability_family', '可解性假设（家族）'], ['technique_family', '求解技术（家族）'], ['data_modeled_as', '数据的形式化'],
  ['design', '识别设计'], ['robustness_check', '稳健性检验'], ['question_type', '问题类型'], ['novelty_source', '新意来源'], ['framing_device', '叙事框架']];
function viewTrends() {
  const el = $('#view-trends');
  if (!el.dataset.built) {
    el.innerHTML = `<div class="trend-tools"><select id="t-facet" aria-label="看哪一类">${TREND_FACETS.map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select>
      <select id="t-type" aria-label="论文类型"><option value="">全部论文</option><option value="t">理论</option><option value="e">实证</option><option value="m">混合/结构</option></select>
      <span class="note">纵轴：该时期相关论文中用到它的比例。点下面的标签增减曲线。</span></div>
      <div class="panel trend-wrap"><div class="chips" id="t-chips" style="margin-bottom:10px"></div><div id="t-chart"></div><div id="t-table"></div></div>`;
    el.dataset.built = '1';
    $('#t-facet').addEventListener('change', e => { T.facet = e.target.value; T.picked = null; drawTrends(); });
    $('#t-type').addEventListener('change', e => { T.type = e.target.value; drawTrends(); });
    $('#t-chips').addEventListener('click', e => { const b = e.target.closest('[data-l]'); if (!b) return;
      T.picked.has(b.dataset.l) ? T.picked.delete(b.dataset.l) : T.picked.add(b.dataset.l); drawTrends(); });
  }
  drawTrends();
}
function drawTrends() {
  const f = T.facet;
  const g = FACET_GROUP[f];
  const ps = S.papers.filter(p => (!T.type || ptypeCls(p.type) === T.type) && (g?.kind === 'th' ? p.th : g?.kind === 'em' ? p.em : true));
  const periods = [...new Set(ps.map(p => period(p.year)))].sort();
  const labelsOf = p => f.endsWith('_family') ? (p.fam[f] || []) : (p.f[f] || []);
  const denom = Object.fromEntries(periods.map(x => [x, 0]));
  const cnt = {};
  ps.forEach(p => { const pr = period(p.year); denom[pr]++; labelsOf(p).forEach(l => { (cnt[l] ||= {})[pr] = (cnt[l][pr] || 0) + 1; }); });
  const labels = Object.keys(cnt).sort((a, b) => sum(cnt[b]) - sum(cnt[a]));
  if (!T.picked) T.picked = new Set(labels.slice(0, 5));
  const palette = ['--c-design', '--c-device', '--c-technique', '--c-robust', '--c-dataform', '--accent', '--c-taste', '--muted'];
  const picked = labels.filter(l => T.picked.has(l));
  const colorOf = l => css(palette[picked.indexOf(l) % palette.length]);
  $('#t-chips').innerHTML = labels.map(l => `<button class="chip" data-l="${esc(l)}" aria-pressed="${T.picked.has(l)}">${T.picked.has(l) ? `<span class="dot" style="background:${colorOf(l)}"></span>` : ''}${esc(conceptName(f, l))} <span class="n">${sum(cnt[l])}</span></button>`).join('');
  if (periods.length < 2) { $('#t-chart').innerHTML = '<p class="empty">至少需要两个时期的论文才能画趋势。</p>'; $('#t-table').innerHTML = ''; return; }
  const W = 860, H = 300, L = 44, R = 44, Tp = 12, B = 34;
  const x = i => L + i * (W - L - R) / (periods.length - 1), y = v => Tp + (H - Tp - B) * (1 - v);
  let svg = `<svg class="trend-svg" viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;min-width:520px" role="img" aria-label="按时期的使用比例">`;
  [0, .25, .5, .75, 1].forEach(v => { svg += `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" stroke="${css('--line')}"/><text x="${L - 8}" y="${y(v) + 4}" text-anchor="end">${v * 100}%</text>`; });
  periods.forEach((pr, i) => { svg += `<text x="${x(i)}" y="${H - 12}" text-anchor="middle">${pr}</text><text x="${x(i)}" y="${H - 1}" text-anchor="middle" font-size="10">n=${denom[pr]}</text>`; });
  picked.forEach(l => {
    const pts = periods.map((pr, i) => [x(i), y(denom[pr] ? (cnt[l][pr] || 0) / denom[pr] : 0)]);
    svg += `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="${colorOf(l)}" stroke-width="2"/>`;
    pts.forEach(([a, b]) => { svg += `<circle cx="${a}" cy="${b}" r="3.5" fill="${colorOf(l)}"/>`; });
  });
  svg += '</svg>';
  $('#t-chart').innerHTML = svg;
  $('#t-table').innerHTML = `<table class="trend-table"><thead><tr><th>${esc(facetName(f))}</th>${periods.map(p => `<th>${p}</th>`).join('')}</tr></thead><tbody>
    ${labels.slice(0, 30).map(l => `<tr><td>${esc(conceptName(f, l))}</td>${periods.map(p => `<td>${cnt[l][p] ? `${cnt[l][p]}/${denom[p]}` : '·'}</td>`).join('')}</tr>`).join('')}</tbody></table>
    <p class="note">${S.papers.length < 200 ? '试点样本很小，每个时期只有几篇论文，曲线只用来演示，不能当结论。' : ''}</p>`;
}
const sum = o => Object.values(o || {}).reduce((a, b) => a + b, 0);

// ---------------------------------------------------------------- 方法与质量
function viewAbout() {
  const m = S.meta, q = S.quality || {};
  const au = q.audit?.summary;
  const ev = q.eval;
  const pct = v => v == null ? '—' : Math.round(v * 100) + '%';
  let evHtml = '<p class="note">还没有运行过模型评测（双击 econkg-data 里的「评测模型」）。</p>';
  if (ev?.models) {
    evHtml = `<p class="note">${ev.papers.length} 篇论文；参考：${esc(ev.reference_kind || '')}</p><table><thead><tr><th>模型</th><th>理论 F1</th><th>实证 F1</th><th>品味 F1</th><th>线索找到率</th><th>每篇费用</th></tr></thead><tbody>
      ${Object.entries(ev.models).map(([k, s]) => `<tr><td>${esc(k)}</td><td>${s.groups['理论'].f1.toFixed(2)}</td><td>${s.groups['实证'].f1.toFixed(2)}</td><td>${s.groups['品味'].f1.toFixed(2)}</td><td>${pct(s.cue_match)}</td><td>$${(s.cost_per_paper_usd || 0).toFixed(4)}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#view-about').innerHTML = `<div class="prose">
    <h2>这是什么</h2>
    <p>把顶刊和领域顶刊论文逐篇抽成结构化记录：研究问题与叙事、模型里"为了可解"做的假设和它换来的东西、求解技术、识别设计与稳健性检验。每条都附原文位置。再在聚合层上找跨论文的规律，写成模式卡片。</p>
    ${m ? `<p class="note">当前 ${m.n_papers} 篇论文，${m.n_concepts} 个概念，${m.n_cards} 张卡片。数据更新于 ${esc(String(m.built).replace('T', ' '))}。</p>` : ''}
    <h2>流程</h2>
    <p>PDF 先读自带的文本层，文本层不可用的才 OCR。便宜模型（默认 DeepSeek）逐篇抽取；程序自动核对每条"原文线索"能否在 PDF 里找到，找不到的比例高、或结构不合格的论文，换更强的模型重抽。跨论文综合用 Claude / ChatGPT 订阅完成，不走 API。</p>
    <h2>质量</h2>
    ${au ? `<p>独立核查（${esc(q.audit.date || '')}，${q.audit.papers.length} 篇，${au.checked} 个字段）：正确 ${au.correct}，小问题 ${au.minor_issue}，错误 ${au.wrong}，无法核实 ${au.unverifiable}。问题已在记录里更正。</p>` : '<p class="note">暂无独立核查结果。</p>'}
    <h3 class="lbl">便宜模型评测</h3>${evHtml}
    <p class="note">页码旁标"原文未找到"的条目：模型给的原话在 PDF 文本里找不到，可能是编的，使用前请核对原文。标"推断"的是抽取者的理解，不是作者原话。</p>
    <h2>数据与版权</h2>
    <p>原文 PDF、OCR 结果只在本机。GitHub 私有仓库里只有改写后的结构化信息、页码和不超过 12 个词的原文线索。</p>
  </div>`;
}

// ---------------------------------------------------------------- 设置
function viewSettings(err) {
  const c = D.loadCfg();
  const jd = D.jobdeskToken();
  const mode = D.getMode();
  $('#view-settings').innerHTML = `<div class="prose">
    ${err ? `<p class="status ${err.code === 'notoken' ? '' : 'bad'}">${esc(err.message)}</p>` : ''}
    <h2>连接数据仓库</h2>
    ${mode === 'public' ? '<p class="status ok">这个页面正在读取公开数据（data/ 文件夹），不需要令牌。</p>' : `
    <p>分析结果在私有仓库 <span class="mono">${esc(c.owner)}/${esc(c.repo)}</span>。填一个只能读这个仓库的 GitHub 令牌，就能在这台设备上看到图谱。令牌只保存在这台设备的浏览器里。</p>
    <form class="form" id="s-form" autocomplete="off">
      <label>仓库所有者<input type="text" id="s-owner" value="${esc(c.owner)}"></label>
      <label>仓库名<input type="text" id="s-repo" value="${esc(c.repo)}"></label>
      <label>分支<input type="text" id="s-branch" value="${esc(c.branch)}"></label>
      <label>GitHub 令牌<input type="password" id="s-token" value="${esc(c.token)}" placeholder="github_pat_…"></label>
      <div class="row"><button class="btn primary" type="submit">测试并保存</button>
        ${jd ? '<button class="btn" type="button" id="s-jd">使用 Job Desk 的令牌</button>' : ''}
        <button class="btn" type="button" id="s-clear">清除</button></div>
      <p class="status" id="s-status" hidden></p>
    </form>
    <h2>怎么生成令牌</h2>
    <ol><li>GitHub 头像 → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token。</li>
      <li>Repository access 选 Only select repositories，勾选 <span class="mono">econkg-data</span>（想和 Job Desk 共用一个令牌，就把三个数据仓库都勾上）。</li>
      <li>Permissions → Repository permissions → Contents 选 Read-only 就够了。</li>
      <li>有效期按需设置，过期后回到这里换新的。</li></ol>`}
  </div>`;
  const f = $('#s-form');
  if (!f) return;
  const st = $('#s-status');
  const show = (msg, cls) => { st.hidden = false; st.className = 'status ' + (cls || ''); st.textContent = msg; };
  f.addEventListener('submit', async e => {
    e.preventDefault();
    const nc = { owner: $('#s-owner').value.trim(), repo: $('#s-repo').value.trim(), branch: $('#s-branch').value.trim() || 'main', token: $('#s-token').value.trim() };
    if (!nc.token) { show('先填令牌。', 'bad'); return; }
    show('测试中…');
    try {
      const info = await D.testRepo(nc);
      D.saveCfg(nc); D.clearCache(); S.ready = false;
      show(`已连接 ${nc.owner}/${nc.repo}${info.private ? '（私有）' : '（注意：这个仓库是公开的）'}。正在打开图谱…`, 'ok');
      setTimeout(() => { location.hash = '#graph'; route(); }, 600);
    } catch (er) { show(er.message, 'bad'); }
  });
  $('#s-jd')?.addEventListener('click', () => { $('#s-token').value = jd; show('已填入 Job Desk 的令牌，点「测试并保存」。'); });
  $('#s-clear').addEventListener('click', () => { D.clearCfg(); D.clearCache(); S.ready = false; viewSettings(); });
}

// ---------------------------------------------------------------- 全局事件
document.addEventListener('click', e => {
  const pb = e.target.closest('[data-paper]');
  if (pb) {
    const id = pb.dataset.paper;
    if (current === 'graph') { showPaper(id, $('#g-side')); if (G.cy) { const n = G.cy.getElementById('p:' + id); if (n.length) { G.cy.elements().removeClass('dim'); G.cy.elements().not(n.closedNeighborhood()).addClass('dim'); } } }
    else if (current === 'papers') { P.sel = id; drawPapers(); showPaper(id, $('#p-side')); }
    else { openDrawer('<div id="dr-body"></div>'); showPaper(id, $('#dr-body')); }
    return;
  }
  const cb = e.target.closest('[data-card]');
  if (cb) { location.hash = '#cards'; setTimeout(() => document.getElementById('card-' + cb.dataset.card)?.scrollIntoView({ block: 'start' }), 50); return; }
  if (e.target.id === 'dr-close') closeDrawer();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
let rt;
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => { if (current === 'graph') drawGraph(); });
window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => G.cy?.resize(), 200); });
window.addEventListener('hashchange', route);

(async () => { await D.init(); route(); })();
