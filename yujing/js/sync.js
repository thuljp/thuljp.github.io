// 多设备同步：学习数据存在私有 GitHub 仓库（默认 thuljp/yujing-data 的 yujing.json），做法与 Job Desk 相同。
// 令牌只保存在本设备浏览器里，不会写进仓库。
import { S, syncPayload, mergeStates, applyMerged, onChange } from './store.js';

const CFG_KEY = 'yujing.sync';
const DEFAULTS = { enabled: false, owner: 'thuljp', repo: 'yujing-data', branch: 'main', path: 'yujing.json', token: '' };

export function syncCfg() { try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(CFG_KEY) || '{}') }; } catch { return { ...DEFAULTS }; } }
export function saveSyncCfg(c) { try { localStorage.setItem(CFG_KEY, JSON.stringify(c)); } catch {} }

// Job Desk 的 GitHub 令牌（同一网站、同一浏览器）。令牌需要同时有 yujing-data 的权限才能共用。
export function jobdeskToken() { try { return JSON.parse(localStorage.getItem('jd-gh-config') || '{}').token || ''; } catch { return ''; } }

// ---------- 状态（给顶栏和设置页显示） ----------
let status = { kind: 'off', text: '未开启同步', at: 0 };
const subs = new Set();
export const syncStatus = () => status;
export function onSyncStatus(f) { subs.add(f); return () => subs.delete(f); }
function setStatus(kind, text) { status = { kind, text, at: Date.now() }; subs.forEach(f => f(status)); }
const hhmm = () => new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });

// ---------- GitHub Contents API ----------
function b64enc(str) { const bytes = new TextEncoder().encode(str); let bin = ''; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(bin); }
function b64dec(b64) { const bin = atob(b64.replace(/\s/g, '')); const bytes = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i); return new TextDecoder().decode(bytes); }

function api(c, sub = '') {
  return `https://api.github.com/repos/${encodeURIComponent(c.owner)}/${encodeURIComponent(c.repo)}${sub}`;
}
const headers = c => ({ Authorization: 'Bearer ' + c.token, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' });

class SyncError extends Error { constructor(msg, code) { super(msg); this.code = code; } }

async function req(url, opts) {
  let r;
  try { r = await fetch(url, { cache: 'no-store', ...opts }); }
  catch { throw new SyncError('连不上 GitHub，检查网络。', 'net'); }
  if (r.status === 401) throw new SyncError('令牌无效或已过期，请在设置里换一个新的。', 'auth');
  if (r.status === 403) throw new SyncError('令牌没有写入权限：需要这个仓库的 Contents 读写权限。', 'auth');
  return r;
}

const filePath = c => '/contents/' + c.path.split('/').map(encodeURIComponent).join('/');

async function getRemote(c) {
  const url = api(c, filePath(c)) + '?ref=' + encodeURIComponent(c.branch);
  const r = await req(url, { headers: headers(c) });
  if (r.status === 404) return null;
  if (!r.ok) throw new SyncError(`读取失败（${r.status}）`, 'http');
  const j = await r.json();
  let text;
  if (j.content && j.encoding === 'base64') text = b64dec(j.content);
  else { // 超过 1MB 时 GitHub 不内联内容，改用原始格式下载
    const raw = await req(url, { headers: { ...headers(c), Accept: 'application/vnd.github.raw' } });
    if (!raw.ok) throw new SyncError(`读取失败（${raw.status}）`, 'http');
    text = await raw.text();
  }
  try { return { sha: j.sha, data: JSON.parse(text || '{}') }; }
  catch { throw new SyncError('私有仓库里的 yujing.json 不是有效的 JSON。', 'corrupt'); }
}

async function putRemote(c, body, sha) {
  const r = await req(api(c, filePath(c)), {
    method: 'PUT', headers: { ...headers(c), 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: `同步学习记录 ${new Date().toISOString().slice(0, 16).replace('T', ' ')}`, content: b64enc(body), branch: c.branch, ...(sha ? { sha } : {}) }),
  });
  if (r.status === 409 || r.status === 422) return { conflict: true };
  if (r.status === 404) throw new SyncError('找不到仓库或分支。确认私有仓库已创建，并且令牌包含这个仓库。', 'notfound');
  if (!r.ok) throw new SyncError(`保存失败（${r.status}）`, 'http');
  const j = await r.json();
  return { sha: j.content?.sha };
}

// 测试：仓库是否存在、是否私有、令牌能否访问
export async function testRepo(c) {
  const r = await req(api(c), { headers: headers(c) });
  if (r.status === 404) throw new SyncError(`找不到 ${c.owner}/${c.repo}：仓库还没创建，或者令牌没有勾选这个仓库。`, 'notfound');
  if (!r.ok) throw new SyncError(`GitHub 返回 ${r.status}`, 'http');
  const j = await r.json();
  if (!j.permissions?.push) throw new SyncError('令牌只有读取权限，需要 Contents 的读写权限。', 'auth');
  return { private: !!j.private, branch: j.default_branch || 'main' };
}

// ---------- 比较（键排序后再比，避免因字段顺序不同而误判有变化） ----------
function canon(v) {
  if (Array.isArray(v)) return '[' + v.map(canon).join(',') + ']';
  if (v && typeof v === 'object') return '{' + Object.keys(v).filter(k => v[k] !== undefined && k !== 'updatedAt').sort().map(k => JSON.stringify(k) + ':' + canon(v[k])).join(',') + '}';
  return JSON.stringify(v ?? null);
}

// ---------- 同步 ----------
let running = null, again = false, lastCanon = '', lastSyncAt = 0;
let onRemoteChange = () => {};

export function syncNow() {
  const c = syncCfg();
  if (!c.enabled || !c.token) { setStatus('off', '未开启同步'); return Promise.resolve(false); }
  if (running) { again = true; return running; }
  running = (async () => {
    let changedLocal = false;
    try {
      setStatus('busy', '同步中…');
      for (let attempt = 0; attempt < 4; attempt++) {
        const remote = await getRemote(c);
        const before = canon(syncPayload());
        const merged = remote ? mergeStates(S(), remote.data) : S();
        if (canon(syncPayload(merged)) !== before) { applyMerged(merged); changedLocal = true; }
        const payload = syncPayload();
        const now = canon(payload);
        if (remote && now === canon(remote.data)) { lastCanon = now; break; }   // 两边一致，不用写
        const body = JSON.stringify(payload);
        const res = await putRemote(c, body, remote?.sha);
        if (res.conflict) continue;      // 另一台设备刚写过：重新读取、合并、再写
        lastCanon = now;
        break;
      }
      lastSyncAt = Date.now();
      setStatus('ok', '已同步 ' + hhmm());
    } catch (e) {
      setStatus('error', e instanceof SyncError ? e.message : '同步出错：' + (e.message || e));
      if (e.code === 'auth') { const cc = syncCfg(); cc.enabled = false; saveSyncCfg(cc); }
    } finally {
      running = null;
      if (changedLocal) onRemoteChange();
      if (again) { again = false; setTimeout(syncNow, 500); }
    }
    return changedLocal;
  })();
  return running;
}

// 启动：打开时拉取一次；学习时改动 20 秒后推送；切到后台时推送；回到前台时拉取
let started = false;
export function startSync(onChangeFromRemote) {
  onRemoteChange = onChangeFromRemote || (() => {});
  syncNow();
  if (started) return;
  started = true;
  let t;
  onChange(() => {
    if (!syncCfg().enabled) return;
    clearTimeout(t);
    t = setTimeout(() => { if (canon(syncPayload()) !== lastCanon) syncNow(); }, 20000);
  });
  document.addEventListener('visibilitychange', () => {
    if (!syncCfg().enabled) return;
    if (document.visibilityState === 'hidden') { if (canon(syncPayload()) !== lastCanon) syncNow(); }
    else if (Date.now() - lastSyncAt > 60000) syncNow();
  });
  setInterval(() => { if (document.visibilityState === 'visible' && syncCfg().enabled) syncNow(); }, 5 * 60000);
}
