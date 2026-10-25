import { esc } from './util.js';
import { S } from './store.js';
import { speak } from './speech.js';

export const ICON = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="1.5" fill="currentColor"/></svg>',
  mic: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3" fill="currentColor"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  today: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  scenes: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.3" fill="currentColor"/></svg>',
  library: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM13 4h5.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H13z" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  progress: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2.2"/><path d="m8.5 12.2 2.4 2.4 4.7-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h2M10 17h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="7" r="2.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="8" cy="17" r="2.2" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6 8.5 12l6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="currentColor"/></svg>',
};

// 目标语文本（带正确字体与语言标记）
export const tl = (text, lang, cls = '') => `<span class="tl ${cls}" lang="${lang}">${esc(text)}</span>`;

export function playBtn(text, lang, { label = '播放', alt = false, cls = '' } = {}) {
  return `<button class="icon-btn play ${cls}" data-say="${esc(text)}" data-lang="${lang}"${alt ? ' data-alt="1"' : ''} aria-label="${esc(label)}">${ICON.play}</button>`;
}

// 全局委托：任何 [data-say] 按钮点击即朗读
export function bindSay(root) {
  root.addEventListener('click', e => {
    const b = e.target.closest('[data-say]');
    if (!b || !root.contains(b)) return;
    e.preventDefault();
    b.classList.add('speaking');
    speak(b.dataset.say, b.dataset.lang, { alt: !!b.dataset.alt }).then(() => b.classList.remove('speaking'));
  });
}

export function readingLine(reading, romajiText, lang) {
  if (lang !== 'ja' || !reading) return '';
  const showR = S().settings.showRomaji;
  return `<div class="reading" lang="ja">${esc(reading)}${showR && romajiText ? `<span class="romaji" lang="en">${esc(romajiText)}</span>` : ''}</div>`;
}

export function header(title, back) {
  return `<div class="page-head">${back ? `<a class="icon-btn back" href="${back}" aria-label="返回">${ICON.back}</a>` : ''}<h1>${title}</h1></div>`;
}

export function busy(btn, on, text) {
  if (!btn) return;
  if (on) { btn.dataset.label = btn.innerHTML; btn.disabled = true; btn.innerHTML = `<span class="spinner" aria-hidden="true"></span>${text || '请稍候…'}`; }
  else { btn.disabled = false; btn.innerHTML = btn.dataset.label || btn.innerHTML; }
}

export function fmtMin(sec) {
  const m = Math.round(sec / 60);
  if (m < 60) return m + ' 分钟';
  return (m / 60).toFixed(1).replace(/\.0$/, '') + ' 小时';
}
