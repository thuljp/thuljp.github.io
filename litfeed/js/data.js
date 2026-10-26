// 读写私有仓库 thuljp/litfeed-data。令牌只保存在这台设备的浏览器里。
const CFG_KEY = 'litfeed.gh';
const DEFAULTS = { owner: 'thuljp', repo: 'litfeed-data', branch: 'main', token: '' };

export function loadCfg() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(CFG_KEY) || '{}') }; } catch { return { ...DEFAULTS }; }
}
export function saveCfg(c) { try { localStorage.setItem(CFG_KEY, JSON.stringify(c)); } catch {} }
// 同一网站上 Job Desk 保存的令牌（令牌需要也勾选 litfeed-data）
export function jobdeskToken() { try { return JSON.parse(localStorage.getItem('jd-gh-config') || '{}').token || ''; } catch { return ''; } }

export class DataError extends Error { constructor(msg, code) { super(msg); this.code = code; } }

const cache = new Map();
const api = (c, path) => `https://api.github.com/repos/${encodeURIComponent(c.owner)}/${encodeURIComponent(c.repo)}/contents/`
  + path.split('/').map(encodeURIComponent).join('/');

async function request(url, opts, c) {
  let r;
  try {
    r = await fetch(url, { cache: 'no-cache', ...opts, headers: { Authorization: 'Bearer ' + c.token, 'X-GitHub-Api-Version': '2022-11-28', ...(opts.headers || {}) } });
  } catch { throw new DataError('连不上 GitHub，检查网络。', 'net'); }
  if (r.status === 401) throw new DataError('令牌无效或已过期，请到 GitHub 重新生成一个。', 'auth');
  if (r.status === 403) throw new DataError('令牌没有这个仓库的权限，或请求太频繁（稍后再试）。', 'auth');
  return r;
}

export async function get(path) {
  if (cache.has(path)) return cache.get(path);
  const p = (async () => {
    const c = loadCfg();
    if (!c.token) throw new DataError('还没有填 GitHub 令牌。', 'notoken');
    const r = await request(api(c, path) + '?ref=' + encodeURIComponent(c.branch), { headers: { Accept: 'application/vnd.github.raw' } }, c);
    if (r.status === 404) throw new DataError(`在 ${c.owner}/${c.repo} 里找不到 ${path}。`, 'notfound');
    if (!r.ok) throw new DataError(`GitHub 返回 ${r.status}`, 'http');
    const text = await r.text();
    try { return JSON.parse(text); } catch { throw new DataError(`${path} 不是有效的 JSON。`, 'corrupt'); }
  })();
  cache.set(path, p);
  try { return await p; } catch (e) { cache.delete(path); throw e; }
}

export async function tryGet(path) { try { return await get(path); } catch (e) { if (e.code === 'notfound') return null; throw e; } }
export function clearCache() { cache.clear(); }

const b64encode = (str) => { const b = new TextEncoder().encode(str); let s = ''; for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode(...b.subarray(i, i + 0x8000)); return btoa(s); };
const b64decode = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\s/g, '')), (ch) => ch.charCodeAt(0)));

// 读文件和它的 sha（写回时要用）
async function getWithSha(path) {
  const c = loadCfg();
  const r = await request(api(c, path) + '?ref=' + encodeURIComponent(c.branch), { headers: { Accept: 'application/vnd.github+json' } }, c);
  if (r.status === 404) return { data: null, sha: null };
  if (!r.ok) throw new DataError(`GitHub 返回 ${r.status}`, 'http');
  const j = await r.json();
  return { data: JSON.parse(b64decode(j.content || '') || 'null'), sha: j.sha };
}

// 合并后写回：merge(远端最新数据) → 要写的数据。冲突时重新读取再合并，最多 4 次。
export async function update(path, merge, message) {
  const c = loadCfg();
  for (let i = 0; i < 4; i++) {
    const { data, sha } = await getWithSha(path);
    const next = merge(data);
    const body = { message, branch: c.branch, content: b64encode(JSON.stringify(next, null, 1) + '\n') };
    if (sha) body.sha = sha;
    const r = await request(api(c, path), { method: 'PUT', headers: { Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' }, body: JSON.stringify(body) }, c);
    if (r.ok) { cache.set(path, Promise.resolve(next)); return next; }
    if (r.status === 409 || r.status === 422) { await new Promise((ok) => setTimeout(ok, 600 * (i + 1))); continue; }
    if (r.status === 404) throw new DataError('令牌没有写入权限（Contents 需要选 Read and write）。', 'auth');
    throw new DataError(`保存失败：GitHub 返回 ${r.status}`, 'http');
  }
  throw new DataError('保存失败：多次冲突，请刷新后再试。', 'conflict');
}

export async function testRepo(c) {
  const r = await request(`https://api.github.com/repos/${encodeURIComponent(c.owner)}/${encodeURIComponent(c.repo)}`, { headers: { Accept: 'application/vnd.github+json' } }, c);
  if (r.status === 404) throw new DataError(`找不到 ${c.owner}/${c.repo}：仓库还没创建，或者令牌没有勾选这个仓库。`, 'notfound');
  if (!r.ok) throw new DataError(`GitHub 返回 ${r.status}`, 'http');
  const j = await r.json();
  return { private: !!j.private, branch: j.default_branch || 'main', push: !!(j.permissions && j.permissions.push) };
}
