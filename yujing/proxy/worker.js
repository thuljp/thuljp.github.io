// apps.lijinpu.com（原 thuljp.github.io）全站共用的 AI 中转（Cloudflare Workers）
// 同时服务 Job Desk 和 语境：
//   - 默认转发到 DeepSeek（/chat/completions、/v1/tools/search、/v1/tools/fetch），和 Job Desk 原来的中转完全兼容；
//   - 语境选用通义、Kimi 等其他服务商时，会带上 X-Target-Base 头，这里按白名单转发。
// API Key 只是"经过"这里，不会被保存。
//
// 部署：Cloudflare → Workers & Pages → 你原来给 Job Desk 建的 Worker（或新建一个）→ Edit code，
// 把内容替换成这个文件 → Deploy。两个应用都填这个 Worker 的地址即可。

const ALLOWED_ORIGINS = ['https://apps.lijinpu.com', 'https://thuljp.github.io'];   // 本地预览时想用 AI，可临时加上 'http://localhost:8000'
const DEFAULT_UPSTREAM = 'https://api.deepseek.com';
const ALLOWED_HOSTS = [
  'api.deepseek.com',
  'dashscope.aliyuncs.com',
  'dashscope-intl.aliyuncs.com',
  'api.moonshot.cn',
  'open.bigmodel.cn',
  'api.siliconflow.cn',
];

export default {
  async fetch(request) {
    const origin = request.headers.get('Origin') || '';
    const originOk = ALLOWED_ORIGINS.includes(origin);
    const cors = {
      'Access-Control-Allow-Origin': originOk ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Target-Base',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin',
    };
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (!originOk) return new Response('Forbidden', { status: 403, headers: cors });
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: cors });

    const path = new URL(request.url).pathname;
    const target = request.headers.get('X-Target-Base');
    let upstream;
    if (!target) {
      // 默认：DeepSeek（Job Desk 和 语境 的 DeepSeek 请求都走这里）
      if (!/^\/(chat\/completions|v1\/tools\/(search|fetch))$/.test(path)) return new Response('Not found', { status: 404, headers: cors });
      upstream = DEFAULT_UPSTREAM + path;
    } else {
      let base;
      try { base = new URL(target); } catch { return json({ error: { message: 'X-Target-Base 不是合法地址' } }, 400, cors); }
      if (base.protocol !== 'https:' || !ALLOWED_HOSTS.includes(base.hostname)) {
        return json({ error: { message: `不允许转发到 ${base.hostname}，请在 worker.js 的 ALLOWED_HOSTS 里添加` } }, 400, cors);
      }
      if (path !== '/chat/completions') return new Response('Not found', { status: 404, headers: cors });
      upstream = base.href.replace(/\/+$/, '') + '/chat/completions';
    }

    const res = await fetch(upstream, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: request.headers.get('Authorization') || '' },
      body: request.body,
    });
    const headers = new Headers(res.headers);
    Object.entries(cors).forEach(([k, v]) => headers.set(k, v));
    return new Response(res.body, { status: res.status, headers });
  },
};

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), { status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });
}
