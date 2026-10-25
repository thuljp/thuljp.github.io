import { kana } from './data/ja.js';

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// 学习日以凌晨 4 点为分界，熬夜复习仍算前一天
const ROLLOVER_H = 4;
export function dayKey(t = Date.now()) {
  const d = new Date(t - ROLLOVER_H * 3600e3);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function endOfDay(t = Date.now()) {
  const d = new Date(t - ROLLOVER_H * 3600e3);
  d.setHours(24 + ROLLOVER_H, 0, 0, 0);
  return d.getTime();
}
export function addDays(key, n) {
  const [y, m, d] = key.split('-').map(Number);
  const dt = new Date(y, m - 1, d + n, 12);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
}

export function toast(msg, ms = 2600) {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), ms);
}

export function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

export function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

// ---------- 假名 → 罗马音 ----------
const MONO = {}, DI = {};
kana.filter(k => k.set === '平假名').forEach(({ k, r }) => { (k.length === 2 ? DI : MONO)[k] = r; });
Object.assign(MONO, { 'ぁ': 'a', 'ぃ': 'i', 'ぅ': 'u', 'ぇ': 'e', 'ぉ': 'o', 'ゔ': 'vu', 'を': 'o' });
Object.assign(DI, {
  'ふぁ': 'fa', 'ふぃ': 'fi', 'ふぇ': 'fe', 'ふぉ': 'fo', 'てぃ': 'ti', 'でぃ': 'di', 'とぅ': 'tu', 'どぅ': 'du',
  'うぃ': 'wi', 'うぇ': 'we', 'うぉ': 'wo', 'しぇ': 'she', 'じぇ': 'je', 'ちぇ': 'che', 'つぁ': 'tsa', 'ゔぁ': 'va', 'ゔぃ': 'vi', 'ゔぇ': 've', 'ゔぉ': 'vo',
});
const SPECIAL = { 'こんにちは': 'konnichiwa', 'こんばんは': 'konbanwa', 'は': 'wa', 'へ': 'e', 'を': 'o' };
const PUNCT = { '。': '.', '、': ',', '！': '!', '？': '?', '「': '"', '」': '"', '・': ' ', '〜': '~', '～': '~' };

export const toHira = s => String(s).replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));

function wordRomaji(w) {
  const h = toHira(w);
  if (SPECIAL[h.replace(/[。、！？]/g, '')] && h.length <= 6) {
    const tail = h.match(/[。、！？]+$/);
    return SPECIAL[h.replace(/[。、！？]/g, '')] + (tail ? [...tail[0]].map(c => PUNCT[c]).join('') : '');
  }
  let out = '', i = 0;
  while (i < h.length) {
    const two = h.slice(i, i + 2), c = h[i];
    if (DI[two]) { out += DI[two]; i += 2; continue; }
    if (c === 'っ') {
      const nx = DI[h.slice(i + 1, i + 3)] || MONO[h[i + 1]] || '';
      out += nx.startsWith('ch') ? 't' : (nx[0] || '');
      i++; continue;
    }
    if (c === 'ー') { const v = out.match(/[aeiou](?=[^aeiou]*$)/); out += v ? v[0] : '-'; i++; continue; }
    if (MONO[c]) { out += MONO[c]; i++; continue; }
    out += PUNCT[c] ?? c; i++;
  }
  return out;
}
export function romaji(reading) {
  return String(reading).split(/\s+/).filter(Boolean).map(wordRomaji).join(' ');
}

// ---------- 文本相似度（跟读打分） ----------
export function normalizeText(s, lang) {
  let t = String(s).toLowerCase().normalize('NFC');
  t = t.replace(/[.,!?;:«»"“”'’…。、！？「」・\-–—()（）]/g, ' ');
  if (lang === 'ja') return toHira(t).replace(/\s+/g, '');
  return t.replace(/\s+/g, ' ').trim();
}
function lcs(a, b) {
  const m = a.length, n = b.length;
  if (!m || !n) return 0;
  let prev = new Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    const cur = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
    prev = cur;
  }
  return prev[n];
}
// 返回 0–100。法语按词比较，日语按字比较（识别结果可能是汉字或假名，所以同时和原文、读音比，取高分）
export function similarity(heard, target, lang, targetReading) {
  const score = (h, t) => {
    const a = lang === 'ja' ? [...normalizeText(h, lang)] : normalizeText(h, lang).split(' ').filter(Boolean);
    const b = lang === 'ja' ? [...normalizeText(t, lang)] : normalizeText(t, lang).split(' ').filter(Boolean);
    if (!b.length) return 0;
    return Math.round((2 * lcs(a, b)) / (a.length + b.length) * 100);
  };
  let s = score(heard, target);
  if (targetReading) s = Math.max(s, score(heard, targetReading));
  return s;
}

// 逐词比对，标出漏掉/读错的词（法语）
export function diffWords(heard, target) {
  const h = new Set(normalizeText(heard, 'fr').split(' '));
  return target.split(/(\s+)/).map(tok => {
    if (/^\s+$/.test(tok)) return tok;
    const n = normalizeText(tok, 'fr');
    if (!n) return esc(tok);
    return h.has(n) ? `<span class="ok">${esc(tok)}</span>` : `<span class="miss">${esc(tok)}</span>`;
  }).join('');
}

export function download(filename, content, type = 'text/plain') {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
