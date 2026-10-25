// 数据从哪里来：
//  1) 公开模式：本页面旁边有 data/site-data/meta.json（运行过 07_site_data.py --public）就直接读；
//  2) 私有模式（默认）：用 GitHub 令牌从私有仓库 thuljp/econkg-data 读。令牌只保存在这台设备的浏览器里。

const CFG_KEY = 'econkg.gh';
const DEFAULTS = { owner: 'thuljp', repo: 'econkg-data', branch: 'main', token: '' };

export function loadCfg() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(CFG_KEY) || '{}') }; } catch { return { ...DEFAULTS }; }
}
export function saveCfg(c) { try { localStorage.setItem(CFG_KEY, JSON.stringify(c)); } catch {} }
export function clearCfg() { try { localStorage.removeItem(CFG_KEY); } catch {} }
// Job Desk 在同一网站、同一浏览器里保存的令牌（需要令牌也勾选了 econkg-data）
export function jobdeskToken() { try { return JSON.parse(localStorage.getItem('jd-gh-config') || '{}').token || ''; } catch { return ''; } }

export class DataError extends Error { constructor(msg, code) { super(msg); this.code = code; } }

const cache = new Map();
let mode = null;   // 'public' | 'private'

export function getMode() { return mode; }

async function fetchPublic(path) {
  const r = await fetch('data/' + path, { cache: 'no-cache' });
  if (!r.ok) throw new DataError(`读取 ${path} 失败（${r.status}）`, r.status === 404 ? 'notfound' : 'http');
  return r.json();
}

async function fetchPrivate(path) {
  const c = loadCfg();
  if (!c.token) throw new DataError('还没有填 GitHub 令牌。', 'notoken');
  const url = `https://api.github.com/repos/${encodeURIComponent(c.owner)}/${encodeURIComponent(c.repo)}/contents/`
    + path.split('/').map(encodeURIComponent).join('/') + '?ref=' + encodeURIComponent(c.branch);
  let r;
  try {
    r = await fetch(url, { headers: { Authorization: 'Bearer ' + c.token, Accept: 'application/vnd.github.raw', 'X-GitHub-Api-Version': '2022-11-28' }, cache: 'no-cache' });
  } catch { throw new DataError('连不上 GitHub，检查网络。', 'net'); }
  if (r.status === 401) throw new DataError('令牌无效或已过期，请到 GitHub 重新生成一个。', 'auth');
  if (r.status === 403) throw new DataError('令牌没有读取这个仓库的权限，或请求太频繁（稍后再试）。', 'auth');
  if (r.status === 404) throw new DataError(`在 ${c.owner}/${c.repo} 里找不到 ${path}：仓库没建好、令牌没勾选这个仓库，或者还没运行「一键发布」。`, 'notfound');
  if (!r.ok) throw new DataError(`GitHub 返回 ${r.status}`, 'http');
  const text = await r.text();
  try { return JSON.parse(text); } catch { throw new DataError(`${path} 不是有效的 JSON。`, 'corrupt'); }
}

export async function init() {
  try { await fetchPublic('site-data/meta.json'); mode = 'public'; }
  catch { mode = 'private'; }
  return mode;
}

export async function get(path) {
  if (cache.has(path)) return cache.get(path);
  const p = (mode === 'public' ? fetchPublic : fetchPrivate)(path);
  cache.set(path, p);
  try { return await p; } catch (e) { cache.delete(path); throw e; }
}

export async function tryGet(path) { try { return await get(path); } catch (e) { if (e.code === 'notfound') return null; throw e; } }

export function clearCache() { cache.clear(); }

// 测试：仓库能否访问、是否私有
export async function testRepo(c) {
  let r;
  try {
    r = await fetch(`https://api.github.com/repos/${encodeURIComponent(c.owner)}/${encodeURIComponent(c.repo)}`,
      { headers: { Authorization: 'Bearer ' + c.token, Accept: 'application/vnd.github+json' } });
  } catch { throw new DataError('连不上 GitHub，检查网络。', 'net'); }
  if (r.status === 401) throw new DataError('令牌无效或已过期。', 'auth');
  if (r.status === 404) throw new DataError(`找不到 ${c.owner}/${c.repo}：仓库还没创建，或者令牌没有勾选这个仓库。`, 'notfound');
  if (!r.ok) throw new DataError(`GitHub 返回 ${r.status}`, 'http');
  const j = await r.json();
  return { private: !!j.private, branch: j.default_branch || 'main' };
}
