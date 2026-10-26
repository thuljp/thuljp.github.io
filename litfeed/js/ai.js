// 问一问：浏览器里直接调用 OpenAI 兼容接口（DeepSeek 需要经过网站共用的 Cloudflare Worker 中转）
const KEY = 'litfeed.ai';
const DEFAULTS = { baseUrl: 'https://api.deepseek.com', proxy: '', apiKey: '', model: 'deepseek-flash' };

export function loadAI() { try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { return { ...DEFAULTS }; } }
export function saveAI(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch {} }
export const aiReady = () => { const a = loadAI(); return !!(a.apiKey && a.baseUrl && a.model); };

// Job Desk 在同一浏览器里保存的 DeepSeek 设置
export function jobdeskAI() {
  try {
    const c = JSON.parse(localStorage.getItem('jd-gh-config') || 'null');
    if (!c || !c.dsKey) return null;
    const base = String(c.dsBase || 'https://api.deepseek.com').replace(/\/+$/, '');
    const direct = /^https:\/\/api\.deepseek\.com$/.test(base);
    return { baseUrl: 'https://api.deepseek.com', proxy: direct ? '' : base, apiKey: c.dsKey, model: c.dsModel || 'deepseek-flash' };
  } catch { return null; }
}

export async function chat(messages, { maxTokens = 2500, signal } = {}) {
  const a = loadAI();
  if (!aiReady()) throw new Error('还没有配置 AI。请到「设置」填写 API Key 和模型名。');
  const base = a.baseUrl.replace(/\/+$/, '');
  let url = base + '/chat/completions';
  const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + a.apiKey };
  if (a.proxy) {
    url = a.proxy.replace(/\/+$/, '') + '/chat/completions';
    if (!/^https:\/\/api\.deepseek\.com$/.test(base)) headers['X-Target-Base'] = base;
  }
  const body = { model: a.model, messages, temperature: 0.4, max_tokens: maxTokens };
  if (/deepseek/.test(base + a.model)) body.thinking = { type: 'disabled' };
  let res;
  try { res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body), signal }); }
  catch (e) {
    if (e.name === 'AbortError') throw e;
    throw new Error(a.proxy ? '连不上中转地址，检查 Worker 是否部署、地址是否正确。'
      : '浏览器拦截了请求（跨域限制）。DeepSeek 不允许网页直接调用，请在设置里填中转地址（和 Job Desk、语境用同一个 Worker）。');
  }
  if (!res.ok) {
    let msg = ''; try { const j = await res.json(); msg = j.error?.message || JSON.stringify(j); } catch {}
    if (res.status === 401) throw new Error('API Key 无效（401）。');
    if (res.status === 402) throw new Error('账户余额不足（402）。');
    if (res.status === 403) throw new Error('中转拒绝了请求（403）：Worker 的 ALLOWED_ORIGINS 里需要有这个网址。');
    throw new Error(`AI 服务返回 ${res.status}：${String(msg).slice(0, 200)}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? '';
}
