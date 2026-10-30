// 发音全景看板（#/map）与入门课（#/lesson/:id）
import {
  S, LANGS, UNITS, unitItems, unitState, nextUnit, foundProgress, foundReady, itemStatus, completeUnit, skipUnits,
  soundsOf, soundById, counterpart, confusables, JA_PAIRS, JA_HOMOPHONE, JA_SKIP, kanaSpeech,
} from '../store.js';
import { speak, stop } from '../speech.js';
import { esc, romaji, shuffle, toast } from '../util.js';
import { ICON, header, playBtn, tl } from '../ui.js';
import { baseTabs } from './library.js';

const VOWELS = 'aiueo';
const JA_ROW_LABEL = ['あ行', 'か行', 'さ行', 'た行', 'な行', 'は行', 'ま行', 'や行', 'ら行', 'わ行', 'が行', 'ざ行', 'だ行', 'ば行', 'ぱ行'];
const JA_ROW_CONS = ['', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'g', 'z', 'd', 'b', 'p'];
const KANA_RATE = 0.8;

const unitOfRow = (set, row) => UNITS.ja.find(u => u.set === set && u.rows.includes(row));
const unitOfItem = (lang, id) => UNITS[lang].find(u => (lang === 'ja' ? unitItems('ja', u).some(x => x.id === id) : u.items.includes(id)));
const unitNo = (lang, u) => UNITS[lang].indexOf(u) + 1;
const shortAnchor = a => String(a || '').split(/[，,（(]/)[0];
// 每个条目"本身"的发音：假名读假名（用片假名读，避免被当成助词）；法语音素读示范；规则读例词
const sayOf = item => (item.k ? kanaSpeech(item.k) : item.type === 'p' ? item.demo : item.ex.join(', '));
const sayItem = (lang, item) => speak(sayOf(item), lang, { rate: item.k ? KANA_RATE : undefined, count: false });

// ======================================================================
// 全景看板
// ======================================================================
export function renderMap(el, lang, tab) {
  const M = LANGS[lang].meta;
  const p = foundProgress(lang);
  const nu = nextUnit(lang);
  el.innerHTML = `${header('基础')}${baseTabs('map')}
    <p class="lede">${lang === 'ja'
      ? '日语的全部发音都在这张表里：5 个元音 × 十几个辅音行。按行学，一行就是一课；每个假名都来自一个汉字，这是你作为中文母语者的捷径。'
      : '法语的全部发音都在这里。元音按"舌头前后 × 嘴巴开合 × 嘴唇圆不圆"排列，辅音按"清 / 浊"成对排列。看懂这张图，就知道每个新音"在哪儿"。'}</p>
    <section class="found-head">
      <div class="fh-top"><b>入门课 ${p.done} / ${p.total}</b><span class="muted">${foundReady(lang) ? '基础已打好，每天开始学新词' : `学完前 ${lang === 'ja' ? 8 : 5} 课后开始每天学新词`}</span></div>
      <div class="m-bar"><i style="width:${Math.round(p.done / p.total * 100)}%"></i></div>
      ${nu ? `<a class="btn primary wide" href="#/lesson/${nu.id}">${p.done ? '继续' : '开始'}：第 ${unitNo(lang, nu)} 课 · ${esc(nu.title)}</a>` : '<p class="ok-text">入门课全部完成。表里的每个音都会按间隔出现在每日复习里。</p>'}
    </section>
    <div class="map-body"></div>
    <section class="panel">
      <h2>入门路线</h2>
      <ol class="course">${UNITS[lang].map((u, i) => {
        const st = unitState(lang, u.id);
        return `<li class="${st.done ? 'done' : u === nu ? 'next' : ''}"><a href="#/lesson/${u.id}"><span class="cn">${st.done ? '✓' : i + 1}</span><span><b>${esc(u.title)}</b><small>${esc(u.sub)}${st.skipped ? ' · 已跳过' : st.best ? ` · 首次答对 ${st.best}%` : ''}</small></span></a></li>`;
      }).join('')}</ol>
      ${nu ? `<button class="link-btn" id="skipall">我已经会${lang === 'ja' ? '假名' : '法语发音'}了，跳过全部入门课</button>` : ''}
    </section>
    <div class="sheet-wrap" hidden><div class="sheet-bg"></div><div class="sheet" role="dialog" aria-modal="true"><button class="icon-btn sheet-x" aria-label="关闭">✕</button><div class="sheet-body"></div></div></div>`;

  const body = el.querySelector('.map-body');
  if (lang === 'ja') jaMap(body, tab === 'kata' ? '片假名' : '平假名');
  else frMap(body);

  el.querySelector('#skipall')?.addEventListener('click', () => {
    if (!confirm(`把全部入门课标记为完成？${lang === 'ja' ? '假名' : '发音'}就不会通过入门课进入复习了。只在你确实已经掌握时这样做。`)) return;
    skipUnits(lang, UNITS[lang].map(u => u.id));
    renderMap(el, lang, tab);
  });
  bindSheet(el, lang);
}

function cell(lang, item, extraCls = '') {
  if (!item) return '<span class="cell empty"></span>';
  const st = itemStatus(lang, item.id);
  const g = lang === 'ja' ? item.k : '/' + item.ipa + '/';
  const sub = lang === 'ja' ? item.r : item.label;
  return `<button class="cell st-${st} ${item.hard ? 'hard' : ''} ${extraCls}" data-item="${esc(item.id)}"><span class="g" ${lang === 'ja' ? 'lang="ja"' : ''}>${esc(g)}</span><span class="r">${esc(sub)}</span></button>`;
}
function rowHead(lang, unit, label, sub) {
  const st = unit ? unitState(lang, unit.id) : {};
  return `<a class="rh ${st.done ? 'done' : ''}" ${unit ? `href="#/lesson/${unit.id}"` : ''} title="${unit ? `第 ${unitNo(lang, unit)} 课` : ''}"><b lang="ja">${esc(label)}</b><small>${st.done ? '✓' : esc(sub)}</small></a>`;
}

function jaMap(body, set) {
  const kana = soundsOf('ja').filter(k => k.set === set);
  const at = (row, v) => kana.find(k => k.row === row && k.r.endsWith(v) && k.r !== 'n');
  const grid = rows => `<div class="kgrid">
      <span></span>${[...VOWELS].map(v => `<span class="ch">${v}</span>`).join('')}
      ${rows.map(r => `${rowHead('ja', unitOfRow(set, r), set === '片假名' ? toKataLabel(JA_ROW_LABEL[r]) : JA_ROW_LABEL[r], JA_ROW_CONS[r] || '元音')}${[...VOWELS].map(v => cell('ja', at(r, v))).join('')}`).join('')}
    </div>`;
  const n = kana.find(k => k.r === 'n');
  const youon = kana.filter(k => k.row >= 15);
  const yRows = [];
  for (let i = 0; i < youon.length; i += 3) yRows.push(youon.slice(i, i + 3));
  const yUnit = unitOfRow(set, 15), dUnit = unitOfRow(set, 10);
  body.innerHTML = `
    <div class="seg tabs">${['平假名', '片假名'].map(s => `<a href="#/map/${s === '片假名' ? 'kata' : 'hira'}" class="${s === set ? 'on' : ''}">${s}</a>`).join('')}</div>
    <p class="hint">${set === '平假名' ? '平假名来自汉字的草书，用来写日语固有的词和语法部分。点任意一个看字源、听发音、看例词。' : '片假名取汉字的一部分，读音和平假名完全一样，主要用来写外来语。点任意一个看字源。'}</p>
    <h2 class="map-h">清音 <span class="muted">${set === '平假名' ? '第 1–8 课' : '第 12–16 课'}</span></h2>
    ${grid([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])}
    <div class="kgrid n-row"><span></span>${cell('ja', n)}<span class="muted n-note">${set === '平假名' ? 'ん' : 'ン'}：独立的一拍鼻音</span></div>
    <h2 class="map-h">浊音・半浊音 <span class="muted">第 ${unitNo('ja', dUnit)} 课</span></h2>
    <p class="hint">右上角加两点 ゛= 声带振动（k→g、s→z、t→d、h→b）；加圈 ゜：h→p。记住规则，不用逐个背。</p>
    ${grid([10, 11, 12, 13, 14])}
    <h2 class="map-h">拗音 <span class="muted">第 ${unitNo('ja', yUnit)} 课</span></h2>
    <p class="hint">い段假名 + 小写的 ${set === '平假名' ? 'ゃ ゅ ょ' : 'ャ ュ ョ'}，合成一拍。</p>
    <div class="kgrid y3"><span></span>${['ya', 'yu', 'yo'].map(v => `<span class="ch">${v}</span>`).join('')}
      ${yRows.map(r => `${rowHead('ja', yUnit, r[0].k[0], '')}${r.map(k => cell('ja', k)).join('')}`).join('')}</div>
    ${set === '平假名' ? `<h2 class="map-h">长音・促音・拨音 <span class="muted">第 ${unitNo('ja', UNITS.ja.find(u => u.id === 's1'))} 课</span></h2>
    <p class="hint">日语按拍子说话。这三个音各占一拍，拍数错了意思就变了。点两边对比听：</p>
    <div class="pairs">${JA_PAIRS.special.slice(0, 6).map(pairBtns).join('')}</div>` : ''}
    <h2 class="map-h">长得像的字</h2>
    <div class="confuse">${confuseGroups(set).map(g => `<button class="cgroup" data-cmp="${esc(g.map(k => k.id).join(','))}" lang="ja">${g.map(k => esc(k.k)).join(' ')}</button>`).join('')}</div>`;
}
const toKataLabel = s => s.replace(/[ぁ-ゖ]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60));
function confuseGroups(set) {
  const all = soundsOf('ja').filter(k => k.set === set);
  const seen = new Set(), out = [];
  for (const k of all) {
    if (seen.has(k.id)) continue;
    const c = confusables('ja', k.id).filter(x => x.set === set);
    if (!c.length) continue;
    const g = [k, ...c];
    g.forEach(x => seen.add(x.id));
    out.push(g);
  }
  return out;
}
function pairBtns(p) {
  return `<div class="pair"><button class="btn small ghost" data-say="${esc(p[0])}" data-lang="ja">${ICON.play}<span lang="ja">${esc(p[0])}</span><small>${esc(p[2])}</small></button><button class="btn small ghost" data-say="${esc(p[1])}" data-lang="ja">${ICON.play}<span lang="ja">${esc(p[1])}</span><small>${esc(p[3])}</small></button></div>`;
}

function frMap(body) {
  const ph = soundsOf('fr').filter(x => x.type === 'p');
  const v = (r, c) => ph.find(x => x.kind === 'v' && x.row === r && x.col === c);
  const rowsLbl = ['闭', '半闭', '中', '半开', '开'];
  const unit = id => UNITS.fr.find(u => u.id === id);
  const pairs = [0, 1, 2, 3, 4, 5].map(i => [ph.find(x => x.kind === 'c' && x.pair === i && x.voice === 0), ph.find(x => x.kind === 'c' && x.pair === i && x.voice === 1)]);
  const rules = soundsOf('fr').filter(x => x.type === 'g');
  body.innerHTML = `
    <h2 class="map-h">元音 <span class="muted">第 1–3 课</span></h2>
    <div class="vchart">
      <span></span><span class="ch">舌前 · 扁唇</span><span class="ch hl">舌前 · 圆唇</span><span class="ch">舌后 · 圆唇</span>
      ${rowsLbl.map((l, r) => `<span class="rl">${l}</span>${[0, 1, 2].map(c => cell('fr', v(r, c), c === 1 ? 'hl' : '')).join('')}`).join('')}
    </div>
    <p class="hint">从上到下，嘴越张越大。<b>中间一列 = 左边的音 + 嘴唇撅圆</b>：i 撅圆就是 u（ü），é 撅圆就是 eu。汉语只有 ü，所以这一列是中国人的难点（带小点的格子）。</p>
    <h2 class="map-h">鼻化元音 <span class="muted">第 4 课</span></h2>
    <div class="row3">${ph.filter(x => x.kind === 'n').map(x => cell('fr', x)).join('')}</div>
    <p class="hint">元音 + n/m 在词尾或辅音前：n/m 不发音，元音带上鼻音。不要收出 n 或 ng 的尾巴。</p>
    <h2 class="map-h">半元音 <span class="muted">第 5 课</span></h2>
    <div class="row3">${ph.filter(x => x.kind === 's').map(x => cell('fr', x)).join('')}</div>
    <h2 class="map-h">辅音 <span class="muted">第 6–8 课</span></h2>
    <div class="cchart"><span></span><span class="ch">清（声带不振动）</span><span class="ch">浊（声带振动）</span>
      ${pairs.map(([a, b]) => `<span class="rl"></span>${cell('fr', a)}${cell('fr', b)}`).join('')}</div>
    <p class="hint">法语的 p t k 不送气，听起来像拼音 b d g；法语的 b d g 是汉语没有的"真浊音"。每一对口型相同，只差声带振不振动。</p>
    <div class="row5">${ph.filter(x => x.kind === 'c' && x.pair >= 6).map(x => cell('fr', x)).join('')}</div>
    <h2 class="map-h">拼读规则 <span class="muted">第 9–10 课</span></h2>
    <div class="rules-list">${rules.map(r => `<button class="rule-btn st-${itemStatus('fr', r.id)}" data-item="${r.id}"><b>${esc(r.title)}</b><small>${esc(r.q)}</small></button>`).join('')}</div>`;
}

// ---------------- 详情面板 ----------------
function bindSheet(el, lang) {
  const wrap = el.querySelector('.sheet-wrap'), sb = el.querySelector('.sheet-body');
  const close = () => { wrap.hidden = true; stop(); };
  const open = html => { sb.innerHTML = html; wrap.hidden = false; sb.scrollTop = 0; el.querySelector('.sheet-x').focus(); };
  el.querySelector('.sheet-bg').onclick = close;
  el.querySelector('.sheet-x').onclick = close;
  document.addEventListener('keydown', function esc_(e) { if (!document.body.contains(wrap)) return document.removeEventListener('keydown', esc_); if (e.key === 'Escape' && !wrap.hidden) close(); });
  el.addEventListener('click', e => {
    const b = e.target.closest('[data-item]');
    if (b) { const it = soundById(lang, b.dataset.item); if (it) { open(detailHTML(lang, it)); sayItem(lang, it); } return; }
    const c = e.target.closest('[data-cmp]');
    if (c) { open(compareHTML(c.dataset.cmp.split(',').map(id => soundById('ja', id)))); }
  });
}

export function detailHTML(lang, it) {
  const u = unitOfItem(lang, it.id);
  const lessonLink = u ? `<a class="btn ghost small" href="#/lesson/${u.id}">第 ${unitNo(lang, u)} 课 · ${esc(u.title)}</a>` : '';
  if (lang === 'ja') {
    const cp = counterpart(it);
    const conf = confusables('ja', it.id);
    return `<div class="d-head"><span class="d-g" lang="ja">${esc(it.k)}</span>${playBtn(kanaSpeech(it.k), 'ja')}<span class="d-r">${esc(it.r)}</span></div>
      ${originHTML(it)}
      ${it.hint ? `<p class="d-hint">${esc(it.hint)}</p>` : ''}
      ${exampleHTML(it)}
      ${cp ? `<p class="muted">${cp.set}：<button class="link-btn" data-item="${esc(cp.id)}" lang="ja">${esc(cp.k)}</button></p>` : ''}
      ${conf.length ? `<p class="muted">容易和 ${conf.map(x => `<button class="link-btn" data-item="${esc(x.id)}" lang="ja">${esc(x.k)}</button>`).join(' ')} 混淆</p>` : ''}
      <div class="row">${lessonLink}</div>`;
  }
  if (it.type === 'g') {
    return `<h3>${esc(it.title)}</h3><p>${esc(it.body)}</p>
      <div class="chips">${it.ex.map(w => `<button class="chip" data-say="${esc(w)}" data-lang="fr">${ICON.play}<span lang="fr">${esc(w)}</span></button>`).join('')}</div><div class="row">${lessonLink}</div>`;
  }
  return phonemeHTML(it) + `<div class="row">${lessonLink}</div>`;
}

export function originHTML(it) {
  if (!it.origin) return '';
  const hira = it.id.startsWith('h-');
  return `<div class="origin"><span class="han">${esc(it.origin)}</span><span class="arrow" aria-hidden="true">›</span><span class="o-kana" lang="ja">${esc(it.k)}</span></div>
    <p class="origin-note">${hira ? `来自汉字「${esc(it.origin)}」的草书` : `取汉字「${esc(it.origin)}」的一部分`}${it.originNote ? `（${esc(it.originNote)}）` : ''}</p>`;
}
export function exampleHTML(it) {
  const ex = it.ex;
  if (!ex || !ex.r) return '';
  return `<div class="kex"><span class="emoji" aria-hidden="true">${ex.emoji}</span><div><span lang="ja" class="kex-w">${highlightKana(ex.w, it.k)}</span><span class="romaji">${esc(romaji(ex.r))}</span><span class="zh">${esc(ex.zh)}</span></div>${playBtn(ex.w, 'ja', { label: '听例词' })}</div>`;
}
function highlightKana(word, k) {
  const i = word.indexOf(k);
  return i < 0 ? esc(word) : esc(word.slice(0, i)) + '<b>' + esc(k) + '</b>' + esc(word.slice(i + k.length));
}
export function phonemeHTML(it) {
  return `<div class="d-head"><span class="d-g">/${esc(it.ipa)}/</span>${playBtn(it.demo, 'fr', { label: '听这个音' })}<span class="d-r" lang="fr">${esc(it.label)}</span></div>
    <p class="d-demo">单独发音示范：<b lang="fr">${esc(it.demo)}</b><span class="muted">（${esc(it.demoNote)}）</span></p>
    <p class="d-anchor"><b>${esc(it.anchor)}</b></p>
    ${it.mouth ? `<p class="d-hint">${esc(it.mouth)}</p>` : ''}
    <h4>拼写</h4><div class="chips">${it.spell.map(([g, w]) => `<button class="chip" data-say="${esc(w)}" data-lang="fr"><b lang="fr">${esc(g)}</b><span lang="fr">${highlightFr(w, g)}</span></button>`).join('')}</div>
    <h4>例词（都含这个音）</h4><ul class="d-words">${it.words.map(([w, zh]) => `<li>${playBtn(w, 'fr')}<span lang="fr" class="tl">${esc(w)}</span><span class="zh">${esc(zh)}</span></li>`).join('')}</ul>
    ${it.pairs?.length ? `<h4>对比听</h4><div class="pairs">${it.pairs.map(([a, b]) => `<div class="pair"><button class="btn small ghost" data-say="${esc(a)}" data-lang="fr">${ICON.play}<span lang="fr">${esc(a)}</span></button><button class="btn small ghost" data-say="${esc(b)}" data-lang="fr">${ICON.play}<span lang="fr">${esc(b)}</span></button></div>`).join('')}</div>` : ''}`;
}
export function highlightFr(word, g) {
  const key = g.replace(/^-/, '');
  const i = g.startsWith('-') ? word.lastIndexOf(key) : word.toLowerCase().indexOf(key.toLowerCase());
  return i < 0 ? esc(word) : esc(word.slice(0, i)) + '<b>' + esc(word.slice(i, i + key.length)) + '</b>' + esc(word.slice(i + key.length));
}
function compareHTML(items) {
  return `<h3>长得像，这样区分</h3><div class="cmp-grid">${items.map(it => `<div class="cmp-card"><span class="d-g" lang="ja">${esc(it.k)}</span>${playBtn(kanaSpeech(it.k), 'ja')}<b>${esc(it.r)}</b>${it.origin ? `<span class="muted">${it.id.startsWith('h-') ? '草书' : '取自'}「<span lang="zh">${esc(it.origin)}</span>」</span>` : ''}${it.hint ? `<small>${esc(it.hint)}</small>` : ''}</div>`).join('')}</div>`;
}

// ======================================================================
// 入门课
// ======================================================================
export function renderLesson(el, lang, unitId) {
  const units = UNITS[lang];
  const unit = units.find(u => u.id === unitId);
  if (!unit) { el.innerHTML = header('找不到这一课', '#/map'); return; }
  const no = unitNo(lang, unit);
  const items = unitItems(lang, unit);
  const isRuleUnit = lang === 'ja' && !!unit.rule;
  const st = unitState(lang, unit.id);

  const top = (title, pct) => `<div class="review-top"><a class="icon-btn back" href="#/map${lang === 'ja' && unit.set === '片假名' ? '/kata' : ''}" aria-label="退出这一课">${ICON.back}</a><div class="bar"><i style="width:${pct}%"></i></div><span class="count">${esc(title)}</span></div>`;

  intro();

  // ---- 1. 开场：这一课学什么 ----
  function intro() {
    stop();
    const preview = lang === 'ja'
      ? `<div class="preview" lang="ja">${items.filter(k => !JA_SKIP.has(k.k)).slice(0, 40).map(k => `<span>${esc(k.k)}</span>`).join('')}</div>`
      : `<div class="preview">${items.map(x => `<span>${x.type === 'p' ? '/' + esc(x.ipa) + '/' : esc(x.title)}</span>`).join('')}</div>`;
    el.innerHTML = `${top(`第 ${no} 课`, 0)}
      <section class="lesson-intro">
        <p class="muted">第 ${no} 课 · ${lang === 'ja' ? esc(unit.set) : '法语发音'}</p>
        <h1>${esc(unit.title)}</h1>
        ${preview}
        ${unit.rule ? `<div class="lesson-text">${unit.rule.body}</div>` : `<p class="lesson-text">${esc(unit.tip)}</p>`}
        <p class="muted">${unit.contrast ? '先听几组对比，再做听辨练习，约 4 分钟。' : isRuleUnit ? '先看规则，再做练习，约 6 分钟。' : `先逐个认识 ${items.filter(k => !JA_SKIP.has(k.k)).length} 个${lang === 'ja' ? '假名' : unit.items[0].startsWith('g-') ? '规则' : '音'}，再做练习，约 ${Math.max(4, Math.round(items.length * 1.2))} 分钟。`}</p>
        <button class="btn primary wide" id="go">${unit.contrast || isRuleUnit ? '开始' : '开始认识'}</button>
        ${st.done ? '' : '<button class="link-btn" id="skip">我已经会了，跳过这一课</button>'}
      </section>`;
    el.querySelector('#go').onclick = () => (isRuleUnit || unit.contrast ? ruleScreen() : learn(0));
    el.querySelector('#skip')?.addEventListener('click', () => {
      skipUnits(lang, [unit.id]);
      toast('已跳过这一课');
      const n = nextUnit(lang);
      location.hash = n ? '#/lesson/' + n.id : '#/map';
    });
  }

  // ---- 2a. 逐个认识 ----
  function learn(i) {
    const list = lang === 'ja' ? items.filter(k => !JA_SKIP.has(k.k) || k.k === 'を' || k.k === 'ヲ') : items;
    const it = list[i];
    const pct = Math.round((i / (list.length * 3)) * 100);
    let card;
    if (lang === 'ja') {
      card = `<div class="learn-card"><div class="d-head big"><span class="d-g" lang="ja">${esc(it.k)}</span><span class="d-r">${esc(it.r)}</span></div>
        ${originHTML(it)}${exampleHTML(it)}${it.hint ? `<p class="d-hint">${esc(it.hint)}</p>` : ''}
        ${JA_SKIP.has(it.k) ? '<p class="d-hint">这个字现代只当助词用（读 o），练习里不单独考。</p>' : ''}</div>`;
    } else if (it.type === 'p') {
      card = `<div class="learn-card">${phonemeHTML(it)}</div>`;
    } else {
      card = `<div class="learn-card"><h2>${esc(it.title)}</h2><p class="lesson-text">${esc(it.body)}</p><div class="chips">${it.ex.map(w => `<button class="chip" data-say="${esc(w)}" data-lang="fr">${ICON.play}<span lang="fr">${esc(w)}</span></button>`).join('')}</div></div>`;
    }
    el.innerHTML = `${top(`认识 ${i + 1}/${list.length}`, pct)}${card}
      <div class="learn-nav">
        <button class="btn ghost" id="prev" ${i === 0 ? 'disabled' : ''}>上一个</button>
        <button class="btn ghost" id="again">${ICON.play}再听</button>
        <button class="btn primary" id="next">${i === list.length - 1 ? '开始练习' : '下一个'}</button>
      </div>
      <p class="hint center">${lang === 'ja' ? '看着字源读两遍，把"汉字的样子"和"读音"连起来。' : '跟着读两遍，注意嘴型。'}</p>`;
    sayItem(lang, it);
    el.querySelector('#again').onclick = () => sayItem(lang, it);
    el.querySelector('#prev').onclick = () => learn(i - 1);
    el.querySelector('#next').onclick = () => (i === list.length - 1 ? practice() : learn(i + 1));
    keys = e => { if (e.key === 'ArrowRight' || e.key === 'Enter') el.querySelector('#next').click(); else if (e.key === 'ArrowLeft' && i > 0) learn(i - 1); else if (e.key === 'r') sayItem(lang, it); };
  }

  // ---- 2b. 规则课：看规则 + 全表可点听 ----
  function ruleScreen() {
    const pairs = unit.pairs ? JA_PAIRS[unit.pairs] : [];
    let table = '';
    if (!unit.contrast) {
      table = `<div class="rule-table" lang="ja">${items.filter(k => !JA_SKIP.has(k.k)).map(k => `<button class="rt-cell" data-say="${esc(kanaSpeech(k.k))}" data-lang="ja"><span>${esc(k.k)}</span><small>${esc(k.r)}</small></button>`).join('')}</div>`;
    }
    el.innerHTML = `${top('规则', 10)}
      <div class="learn-card"><h2>${esc(unit.rule.title)}</h2><div class="lesson-text">${unit.rule.body}</div>
        ${table ? `<p class="hint">点任意一个听发音：</p>${table}` : ''}
        ${pairs.length ? `<h4>对比听</h4><div class="pairs">${pairs.map(pairBtns).join('')}</div>` : ''}</div>
      <div class="learn-nav"><button class="btn primary wide" id="next">开始练习</button></div>`;
    el.querySelector('#next').onclick = practice;
    keys = e => { if (e.key === 'Enter') practice(); };
  }

  // ---- 3. 练习 ----
  function practice() {
    const qs = buildQuestions(lang, unit, items);
    if (!qs.length) return finish({ items: {}, score: 100 });
    const results = { items: {}, first: 0, total: qs.length };
    let qi = 0, answered = 0;
    const requeued = {};
    show();

    function show() {
      stop();
      if (qi >= qs.length) {
        results.score = Math.round(results.first / results.total * 100);
        return finish(results);
      }
      const q = qs[qi];
      if (typeof window.__yjTest === 'function') window.__yjTest(q);   // 自动化测试用
      const pct = 10 + Math.round(answered / (qs.length) * 90);
      el.innerHTML = `${top(`${qi + 1}/${qs.length}`, pct)}
        <section class="quiz">
          <p class="q-prompt">${q.prompt}</p>
          ${q.say && q.listen ? `<button class="btn ghost q-play" id="replay">${ICON.play}再听一遍</button>` : ''}
          <div class="q-opts ${q.big ? 'big' : ''} n${q.options.length}">${q.options.map((o, i) => `<button class="q-opt" data-i="${i}"><kbd>${i + 1}</kbd>${o.html}</button>`).join('')}</div>
          <div class="q-feedback" aria-live="polite"></div>
        </section>`;
      if (q.say && q.listen) {
        const play = () => speak(q.say, lang, { rate: lang === 'ja' ? KANA_RATE : 0.85, count: false });
        setTimeout(play, 250);
        el.querySelector('#replay').onclick = play;
      }
      let done = false;
      const pick = i => {
        if (done) return;
        done = true;
        answered++;
        const ok = q.options[i].correct;
        const r = (results.items[q.item] ||= { right: 0, wrong: 0 });
        el.querySelectorAll('.q-opt').forEach((b, j) => { b.disabled = true; if (q.options[j].correct) b.classList.add('right'); else if (j === i) b.classList.add('wrong'); });
        const fb = el.querySelector('.q-feedback');
        if (ok) {
          r.right++;
          if (!q.retry) results.first++;
          fb.innerHTML = `<p class="ok-text">对了。${q.after ? esc(q.after) : ''}</p>`;
          // 听辨题刚听过，答对不再重播；看字题答对后读一遍，读完再进入下一题（不和下一题的声音叠在一起）
          let gone = false;
          const go = () => { if (gone || !document.body.contains(fb)) return; gone = true; next(); };
          const audio = q.say && !q.listen ? speak(q.say, lang, { rate: lang === 'ja' ? KANA_RATE : 0.9, count: false }) : Promise.resolve();
          Promise.all([audio, new Promise(r => setTimeout(r, q.after ? 1400 : 800))]).then(go);
          keys = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } };
          el.querySelector('.quiz').onclick = e => { if (!e.target.closest('.q-opt')) go(); };
        } else {
          r.wrong++;
          if (q.say) speak(q.say, lang, { rate: lang === 'ja' ? KANA_RATE : 0.85, count: false });
          fb.innerHTML = `<div class="q-explain">${q.explain || ''}</div><button class="btn primary wide" id="cont">继续</button>`;
          // 答错的过几题再考一次（每个条目最多补考 2 次）
          const key = q.item + q.type;
          if ((requeued[key] || 0) < 2) {
            requeued[key] = (requeued[key] || 0) + 1;
            const again = { ...q, retry: true, options: shuffle(q.options) };
            qs.splice(Math.min(qs.length, qi + 3), 0, again);
          }
          el.querySelector('#cont').onclick = next;
          el.querySelector('#cont').focus();
          keys = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } };
        }
      };
      el.querySelectorAll('.q-opt').forEach(b => b.onclick = () => pick(+b.dataset.i));
      keys = e => { if (/^[1-4]$/.test(e.key) && +e.key <= q.options.length) pick(+e.key - 1); else if (e.key === 'r' && q.listen) speak(q.say, lang, { rate: KANA_RATE, count: false }); };
    }
    function next() { qi++; show(); }
  }

  // ---- 4. 完成 ----
  function finish(results) {
    stop();
    completeUnit(lang, unit, results);
    const n = nextUnit(lang);
    const learned = items.filter(x => !(lang === 'ja' && JA_SKIP.has(x.k)));
    const unlockedWords = foundReady(lang) && (lang === 'ja' ? unit.id === 'h8' : unit.id === 'f5');
    el.innerHTML = `${top('完成', 100)}
      <section class="done-card">
        <p class="done-num">${unit.contrast ? '✓' : learned.length}<span>${unit.contrast ? '学会了听"拍子"' : lang === 'ja' ? '个假名进入记忆' : '个音 / 规则进入记忆'}</span></p>
        ${unit.contrast ? '' : `<div class="lit ${lang === 'ja' ? 'ja' : ''}">${learned.map((x, i) => `<span style="--d:${i * 40}ms" ${lang === 'ja' ? 'lang="ja"' : ''}>${esc(lang === 'ja' ? x.k : x.type === 'p' ? '/' + x.ipa + '/' : x.title)}</span>`).join('')}</div>`}
        <ul class="done-stats"><li>首次答对 <b>${results.score}%</b></li></ul>
        <p class="done-note">${unit.contrast ? '这一课没有卡片，但之后读到长音、促音时你会自然注意到拍子。' : '它们会在 10 分钟后、明天、几天后再出现在复习里。在快要忘的时候想起来一次，记得最牢。'}</p>
        ${unlockedWords ? '<p class="ok-text">基础打好了：从今天起，每天会开始学新词。</p>' : ''}
        <div class="row">${n ? `<a class="btn primary" href="#/lesson/${n.id}">下一课：${esc(n.title)}</a>` : ''}<a class="btn ghost" href="#/map${lang === 'ja' && unit.set === '片假名' ? '/kata' : ''}">回全景</a><a class="btn ghost" href="#/review">去复习</a></div>
      </section>`;
    keys = null;
  }
}

let keys = null;
document.addEventListener('keydown', e => { if (keys && location.hash.startsWith('#/lesson/') && !e.target.matches('input,textarea')) keys(e); });

// ======================================================================
// 出题
// ======================================================================
function buildQuestions(lang, unit, items) {
  if (lang === 'ja') return unit.contrast ? pairQuestions(JA_PAIRS[unit.pairs], 8) : unit.rule ? jaRuleQuestions(unit, items) : jaItemQuestions(unit, items);
  if (unit.items[0].startsWith('g-')) return frRuleQuestions(items);
  return frPhonemeQuestions(unit, items);
}

const homophone = (a, b) => JA_HOMOPHONE.some(g => g.includes(a) && g.includes(b));
function learnedKana(set) {
  // 已经学过（完成过的课里）的同一套假名，用作干扰项，顺便复习
  const done = UNITS.ja.filter(u => u.set === set && unitState('ja', u.id).done && !u.rule);
  return done.flatMap(u => unitItems('ja', u)).filter(k => !JA_SKIP.has(k.k));
}
function pickDistractors(answer, pool, n, ok = () => true) {
  const out = [], seen = new Set([answer.id]);
  for (const x of shuffle(pool)) {
    if (out.length >= n) break;
    if (seen.has(x.id) || !ok(x)) continue;
    seen.add(x.id); out.push(x);
  }
  return out;
}
const kanaOpt = (k, correct) => ({ html: `<span lang="ja" class="og">${esc(k.k)}</span>`, correct });
const romOpt = (r, correct) => ({ html: `<span class="or">${esc(r)}</span>`, correct });

function jaExplain(it) {
  return `<div class="d-head"><span class="d-g sm" lang="ja">${esc(it.k)}</span><span class="d-r">${esc(it.r)}</span></div>${originHTML(it)}${it.hint ? `<p class="d-hint">${esc(it.hint)}</p>` : ''}`;
}

function jaItemQuestions(unit, items) {
  const pool = items.filter(k => !JA_SKIP.has(k.k));
  const learned = learnedKana(unit.set);
  const wide = [...pool, ...learned];
  const kata = unit.set === '片假名';
  const r1 = [], r2 = [];
  for (const it of pool) {
    const conf = confusables('ja', it.id).filter(x => !JA_SKIP.has(x.k));
    // 听音选字：干扰项优先用易混字和同课的字，不能有同音字
    const ds = pickDistractors(it, [...conf, ...conf, ...pool, ...learned], 3, x => !homophone(x.k, it.k) && x.set === it.set);
    r1.push({ type: 'listen', item: it.id, listen: true, say: kanaSpeech(it.k), prompt: '听，选出你听到的假名', big: true, options: shuffle([kanaOpt(it, true), ...ds.map(d => kanaOpt(d, false))]), explain: jaExplain(it) });
    // 看字选音
    const dr = pickDistractors(it, wide, 3, x => x.r !== it.r);
    r2.push({ type: 'read', item: it.id, say: kanaSpeech(it.k), prompt: `<span lang="ja" class="q-big">${esc(it.k)}</span>读什么？`, options: shuffle([romOpt(it.r, true), ...dr.map(d => romOpt(d.r, false))]), explain: jaExplain(it) });
    // 片假名：和平假名配对
    if (kata) {
      const h = counterpart(it);
      if (h) {
        const dk = pickDistractors(it, [...conf, ...pool], 3, x => x.r !== it.r);
        r2.push({ type: 'match', item: it.id, say: kanaSpeech(it.k), prompt: `平假名 <span lang="ja" class="q-big sm">${esc(h.k)}</span> 的片假名是？`, big: true, options: shuffle([kanaOpt(it, true), ...dk.map(d => kanaOpt(d, false))]), explain: jaExplain(it) });
      }
    }
    // 易混字专项
    const confIn = conf.filter(x => wide.some(w => w.id === x.id));
    if (confIn.length) r2.push({ type: 'confuse', item: it.id, say: kanaSpeech(it.k), prompt: `哪个读 <b class="or">${esc(it.r)}</b>？`, big: true, options: shuffle([kanaOpt(it, true), ...confIn.slice(0, 2).map(d => kanaOpt(d, false))]), explain: jaExplain(it) + `<p class="d-hint">和 ${confIn.map(x => `<span lang="ja">${esc(x.k)}</span>（${esc(x.r)}）`).join('、')} 长得像。</p>` });
  }
  return [...shuffle(r1), ...spread(shuffle(r2))];
}
// 同一个条目的两道题尽量不挨着
function spread(list) {
  for (let i = 1; i < list.length; i++) {
    if (list[i].item === list[i - 1].item) {
      const j = list.findIndex((q, k) => k > i && q.item !== list[i - 1].item);
      if (j > 0) [list[i], list[j]] = [list[j], list[i]];
    }
  }
  return list;
}

function baseKana(k) {
  const c = k.k[0].charCodeAt(0);
  const hira = c < 0x30a0;
  // 浊音/半浊音的 Unicode 紧跟在清音后面：か(304B) が(304C)；は(306F) ば(3070) ぱ(3071)
  for (const d of [1, 2]) {
    const b = String.fromCharCode(c - d);
    const it = soundsOf('ja').find(x => x.k === b + k.k.slice(1) && x.row <= 9 && (hira ? x.id.startsWith('h-') : x.id.startsWith('k-')));
    if (it && it.row !== k.row) return it;
  }
  return null;
}
function jaRuleQuestions(unit, items) {
  const pool = items.filter(k => !JA_SKIP.has(k.k));
  const sample = shuffle(pool).slice(0, 12);
  const qs = [];
  sample.forEach((it, i) => {
    const base = baseKana(it);
    const near = pool.filter(x => x.k[0] === it.k[0] || x.r.slice(-1) === it.r.slice(-1) || x.k.slice(1) === it.k.slice(1));
    if (i % 2 === 0) {
      const ds = pickDistractors(it, [...(base ? [base, base] : []), ...near, ...pool], 3, x => !homophone(x.k, it.k) && x.r !== it.r);
      qs.push({ type: 'listen', item: it.id, listen: true, say: kanaSpeech(it.k), prompt: '听，选出你听到的', big: true, options: shuffle([kanaOpt(it, true), ...ds.map(d => kanaOpt(d, false))]), explain: jaExplain(it) + (base ? `<p class="d-hint"><span lang="ja">${esc(base.k)}</span>（${esc(base.r)}）加 ゛゜ → <span lang="ja">${esc(it.k)}</span>（${esc(it.r)}）</p>` : '') });
    } else {
      const ds = pickDistractors(it, [...near, ...pool, ...(base ? [base] : [])], 3, x => x.r !== it.r);
      qs.push({ type: 'read', item: it.id, say: kanaSpeech(it.k), prompt: `<span lang="ja" class="q-big">${esc(it.k)}</span>读什么？`, options: shuffle([romOpt(it.r, true), ...ds.map(d => romOpt(d.r, false))]), explain: jaExplain(it) });
    }
  });
  const pairs = unit.pairs ? pairQuestions(JA_PAIRS[unit.pairs], 3) : [];
  return spread(shuffle([...qs, ...pairs]));
}
function pairQuestions(pairs, n) {
  return shuffle(pairs).slice(0, n).map(p => {
    const which = Math.random() < 0.5 ? 0 : 1;
    const opt = i => ({ html: `<span lang="ja" class="ow">${esc(p[i])}</span><small>${esc(p[i + 2])}</small>`, correct: i === which });
    return { type: 'pair', item: 'pair-' + p[0], listen: true, say: p[which], prompt: '听，是哪一个？', options: [opt(0), opt(1)], explain: `<p>听到的是 <b lang="ja">${esc(p[which])}</b>（${esc(p[which + 2])}）。</p><div class="pairs">${pairBtns(p)}</div>` };
  });
}

function learnedFr() {
  const done = UNITS.fr.filter(u => unitState('fr', u.id).done);
  return done.flatMap(u => unitItems('fr', u)).filter(x => x.type === 'p');
}
const phOpt = (p, correct) => ({ html: `<span class="og ipa">/${esc(p.ipa)}/</span><small>${esc(shortAnchor(p.anchor))}</small>`, correct });
function frExplain(p, word) {
  return `<p>${word ? `<b lang="fr">${esc(word)}</b> 里的这个音是 ` : ''}<b>/${esc(p.ipa)}/</b>：${esc(p.anchor)}。</p>${p.mouth ? `<p class="d-hint">${esc(p.mouth)}</p>` : ''}`;
}
function frPhonemeQuestions(unit, items) {
  const learned = learnedFr();
  const others = [...items, ...learned];
  const r1 = [], r2 = [];
  for (const it of items) {
    const conf = confusables('fr', it.id);
    const dpool = [...conf, ...conf, ...items, ...learned];
    // 看拼写：加粗部分读哪个音（读音在答完后播放）
    const sp = shuffle(it.spell).slice(0, it.spell.length > 1 ? 2 : 1);
    sp.forEach(([g, w]) => {
      const ds = pickDistractors(it, dpool, 3);
      r2.push({ type: 'spell', item: it.id, say: w, prompt: `<span class="q-word" lang="fr">${highlightFr(w, g)}</span>加粗部分读哪个音？`, options: shuffle([phOpt(it, true), ...ds.map(d => phOpt(d, false))]), explain: frExplain(it, w), after: `${w}：/${it.ipa}/` });
    });
    // 听词选词：训练耳朵
    const [w, zh] = it.words[Math.floor(Math.random() * it.words.length)];
    const wd = pickDistractors({ id: w }, others.flatMap(x => x.words.map(([ww]) => ({ id: ww }))).filter(x => x.id !== w), 3);
    r1.push({ type: 'hear', item: it.id, listen: true, say: w, prompt: '听，是哪个词？', options: shuffle([{ html: `<span lang="fr" class="ow">${esc(w)}</span>`, correct: true }, ...wd.map(d => ({ html: `<span lang="fr" class="ow">${esc(d.id)}</span>`, correct: false }))]), explain: `<p><b lang="fr">${esc(w)}</b>（${esc(zh)}）</p>` + frExplain(it) });
    // 最小对立：两个只差一个音的词
    (it.pairs || []).slice(0, 1).forEach(([a, b]) => {
      const which = Math.random() < 0.5 ? a : b;
      r2.push({ type: 'pair', item: it.id, listen: true, say: which, prompt: '只差一个音，听到的是哪个？', options: shuffle([{ html: `<span lang="fr" class="ow">${esc(a)}</span>`, correct: which === a }, { html: `<span lang="fr" class="ow">${esc(b)}</span>`, correct: which === b }]), explain: `<p>听到的是 <b lang="fr">${esc(which)}</b>。</p><div class="pairs"><div class="pair"><button class="btn small ghost" data-say="${esc(a)}" data-lang="fr">${ICON.play}${esc(a)}</button><button class="btn small ghost" data-say="${esc(b)}" data-lang="fr">${ICON.play}${esc(b)}</button></div></div>` });
    });
  }
  return [...shuffle(r1), ...spread(shuffle(r2))];
}
function frRuleQuestions(items) {
  const qs = [];
  for (const r of items) for (const [q, opts, a, say] of r.quiz) {
    const options = opts.map((o, i) => ({ html: `<span class="or">${esc(o)}</span>`, correct: i === a }));
    qs.push({ type: 'rule', item: r.id, say, prompt: `<span class="q-rule" lang="fr">${esc(q)}</span>`, options: shuffle(options), explain: `<p><b>${esc(r.title)}</b></p><p>${esc(r.body)}</p>`, after: say });
  }
  return spread(shuffle(qs));
}
