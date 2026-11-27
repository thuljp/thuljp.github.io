// 课程内容纠错：课里、语法页右上角的"纠错"按钮 → 记下哪一课、哪一步、什么问题（随私有仓库同步）
import { addReport, S, COURSE, grammarOf } from './store.js';
import { esc, toast } from './util.js';

export const KINDS = ['外语写错了', '翻译或意思不对', '读音 / 音标不对', '讲解有误', '题目答案有问题', '其他'];
export const reportBtn = () => '<button class="icon-btn report-btn" data-report aria-label="报告内容问题" title="报告内容问题"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 0h11l-2 4 2 4H5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';

// 当前页面登记一个取上下文的函数：点按钮时取，记录的是"当时"所在的步骤
let ctxFn = null;
export function setReportCtx(fn) { ctxFn = fn; }
document.addEventListener('click', e => {
  if (!e.target.closest('[data-report]') || !ctxFn) return;
  const sel = String(window.getSelection?.() || '').trim().slice(0, 300);
  open({ ...ctxFn(), quote: sel });
});

function open(c) {
  document.querySelector('.report-sheet')?.remove();
  const wrap = document.createElement('div');
  wrap.className = 'report-sheet';
  wrap.innerHTML = `<div class="rs-card" role="dialog" aria-modal="true" aria-labelledby="rs-h">
    <h2 id="rs-h">报告内容问题</h2>
    <p class="muted">${esc(c.label || '')}${c.where ? ' · ' + esc(c.where) : ''}</p>
    <div class="rs-kinds">${KINDS.map((k, i) => `<label class="chip-radio"><input type="radio" name="rk" value="${esc(k)}" ${i === 0 ? 'checked' : ''}><span>${esc(k)}</span></label>`).join('')}</div>
    <div class="field"><span class="label">原文（可选）</span><input id="rs-q" type="text" value="${esc(c.quote || '')}" placeholder="有问题的那句话或那个词"></div>
    <div class="field"><span class="label">哪里不对？</span><textarea id="rs-t" rows="3" placeholder="例如：这里应该用 aux 而不是 au"></textarea></div>
    <div class="row"><button class="btn primary" id="rs-ok">提交</button><button class="btn ghost" id="rs-no">取消</button></div>
    <p class="hint">记录会保存在你的学习数据里，可以在"设置 → 课程纠错"里查看和导出。</p>
  </div>`;
  document.body.appendChild(wrap);
  const close = () => wrap.remove();
  wrap.onclick = e => { if (e.target === wrap) close(); };
  wrap.querySelector('#rs-no').onclick = close;
  wrap.querySelector('#rs-ok').onclick = () => {
    const text = wrap.querySelector('#rs-t').value.trim(), quote = wrap.querySelector('#rs-q').value.trim();
    if (!text && !quote) { wrap.querySelector('#rs-t').focus(); return; }
    addReport({ lang: c.lang, unit: c.unit || '', where: c.where || '', label: c.label || '', kind: wrap.querySelector('input[name=rk]:checked').value, text, quote });
    close();
    toast('谢谢！已记下');
  };
  wrap.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  setTimeout(() => wrap.querySelector('#rs-t').focus(), 30);
}

// 导出成 Markdown，方便整理后统一修改
export function reportsMarkdown(list = S().reports) {
  const name = { fr: '法语', ja: '日语' };
  return list.map(r => {
    const no = r.unit ? COURSE[r.lang]?.findIndex(u => u.id === r.unit) + 1 : 0;
    const g = r.where?.startsWith('g-') ? grammarOf(r.lang).find(x => x.id === r.where)?.title : '';
    return `- [${r.done ? 'x' : ' '}] ${name[r.lang] || r.lang} ${r.unit ? `第 ${no} 课（${r.unit}）` : ''}${g ? `语法「${g}」` : ''}${r.where && !g ? ' · ' + r.where : ''} · ${r.kind}\n  ${r.quote ? `原文：${r.quote}\n  ` : ''}${r.text ? `说明：${r.text}` : ''}`;
  }).join('\n');
}
