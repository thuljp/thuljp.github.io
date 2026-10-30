// 接入 OpenAI 兼容接口的国产大模型（DeepSeek / 通义千问 / Kimi / 智谱 / 硅基流动 / 自定义）
import { S, save, LANGS, knownWordList, scenesOf, wordsOf } from './store.js';

export const PRESETS = {
  deepseek: { name: 'DeepSeek', baseUrl: 'https://api.deepseek.com', model: 'deepseek-flash', extra: '{"thinking":{"type":"disabled"}}', console: 'https://platform.deepseek.com/api_keys', note: 'DeepSeek 不允许浏览器直接调用，需要先部署一个中转（见部署说明，5 分钟）。' },
  qwen: { name: '通义千问（阿里云百炼）', baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1', model: 'qwen-plus', extra: '', console: 'https://bailian.console.aliyun.com/', note: '模型名以百炼控制台为准。' },
  kimi: { name: 'Kimi（月之暗面）', baseUrl: 'https://api.moonshot.cn/v1', model: '', extra: '', console: 'https://platform.moonshot.cn/console/api-keys', note: '请在控制台复制当前可用的模型名填入。' },
  zhipu: { name: '智谱 GLM', baseUrl: 'https://open.bigmodel.cn/api/paas/v4', model: '', extra: '', console: 'https://open.bigmodel.cn/usercenter/apikeys', note: '请在控制台复制当前可用的模型名填入。' },
  siliconflow: { name: '硅基流动', baseUrl: 'https://api.siliconflow.cn/v1', model: '', extra: '', console: 'https://cloud.siliconflow.cn/account/ak', note: '一个 Key 可用多家开源模型，模型名形如 deepseek-ai/DeepSeek-V3。' },
  custom: { name: '自定义', baseUrl: '', model: '', extra: '', console: '', note: '任何兼容 OpenAI /chat/completions 接口的服务都可以。' },
};

// 同一网站上的 Job Desk 已经配置过 DeepSeek 的话，可以直接共用（同源，读得到它的本地设置）
export function jobdeskConfig() {
  try {
    const c = JSON.parse(localStorage.getItem('jd-gh-config') || 'null');
    if (!c || !c.dsKey) return null;
    const base = String(c.dsBase || 'https://api.deepseek.com').replace(/\/+$/, '');
    const direct = /^https:\/\/api\.deepseek\.com$/.test(base);
    return { apiKey: c.dsKey, model: c.dsModel || 'deepseek-flash', proxy: direct ? '' : base };
  } catch { return null; }
}

export const aiReady = () => { const a = S().settings.ai; return !!(a.apiKey && a.baseUrl && a.model); };

export async function chat(messages, { json = false, temperature = 0.7, maxTokens = 1500, signal } = {}) {
  const a = S().settings.ai;
  if (!aiReady()) throw new Error('还没有配置 AI。请到"设置"填写 API Key 和模型名。');
  const base = a.baseUrl.replace(/\/+$/, '');
  let url = base + '/chat/completions';
  const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + a.apiKey };
  if (a.proxy) {
    url = a.proxy.replace(/\/+$/, '') + '/chat/completions';
    // 中转默认转发到 DeepSeek；只有其他服务商才需要告诉中转目标地址（也因此兼容 Job Desk 的旧中转）
    if (!/^https:\/\/api\.deepseek\.com\/?$/.test(base)) headers['X-Target-Base'] = base;
  }
  let extra = {};
  if (a.extra?.trim()) { try { extra = JSON.parse(a.extra); } catch { throw new Error('"额外参数"不是合法的 JSON，请到设置里修改。'); } }
  const body = { model: a.model, messages, temperature, max_tokens: maxTokens, ...extra };
  if (json) body.response_format = { type: 'json_object' };
  let res;
  try {
    res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body), signal });
  } catch (e) {
    if (e.name === 'AbortError') throw e;
    throw new Error(a.proxy
      ? '连不上中转地址。请检查中转是否部署成功、地址是否正确。'
      : '浏览器拦截了请求（跨域限制）。这家服务不允许网页直接调用，请在设置里填写中转地址。');
  }
  if (!res.ok) {
    let msg = '';
    try { const j = await res.json(); msg = j.error?.message || j.message || JSON.stringify(j); } catch { msg = await res.text().catch(() => ''); }
    if (res.status === 401) throw new Error('API Key 无效（401）。请检查 Key 是否复制完整。');
    if (res.status === 402) throw new Error('账户余额不足（402）。请到服务商控制台充值。');
    if (res.status === 429) throw new Error('请求太频繁或额度用完（429），稍后再试。');
    throw new Error(`AI 服务返回错误 ${res.status}：${msg.slice(0, 200)}`);
  }
  const data = await res.json();
  const text = data.choices?.[0]?.message?.content ?? '';
  if (!json) return text;
  return parseJSON(text);
}

export function parseJSON(text) {
  const t = String(text).trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  try { return JSON.parse(t); } catch {}
  const m = t.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch {} }
  throw new Error('AI 返回的内容不是有效 JSON，请重试一次。');
}

export async function testConnection() {
  const r = await chat([{ role: 'user', content: '只回复两个字：你好' }], { maxTokens: 20, temperature: 0 });
  return r.trim();
}

// ---------- 提示词 ----------
const levelOf = lang => {
  const n = knownWordList(lang, 5000).length;
  return n < 150 ? 'A1 入门（只会极少词汇）' : n < 500 ? 'A1–A2' : n < 1200 ? 'A2' : 'A2–B1';
};

const JA_RULE = '日语读音字段写全平假名（外来语也写平假名），按词用半角空格分开，助词单独成词，例：「わたし は がくせい です。」。';

// 角色扮演：每轮返回 JSON
export function roleplaySystem(lang, scene) {
  const M = LANGS[lang].meta;
  return `你在一个语言学习应用里扮演对话角色，帮助一位中文母语者练习${M.name}。
场景：${scene.title}（${scene.place}）
你的角色：${scene.task.role}
学习者要完成的任务：${scene.task.goal}
学习者水平：${levelOf(lang)}。

规则：
1. 始终保持角色，只用${M.name}说话。每次回复 1–2 个短句，用学习者水平能懂的常用词，自然口语。
2. 不要替学习者完成任务，等对方主动说出来；对方卡住时可以用简单的问题引导。
3. 学习者说错了不要打断纠正，像真人一样尽量理解并继续对话（纠错留到复盘）。
4. 学习者若用中文说话，请在 hint 里给出对应的${M.name}说法，回复仍用${M.name}。
5. 当任务已全部完成、对话自然结束时，把 done 设为 true。

每次只输出一个 JSON 对象：
{"reply":"你的${M.name}回复","reading":"${lang === 'ja' ? '回复的平假名读音' : ''}","zh":"回复的中文翻译","hint":"学习者下一句可以怎么说（${M.name}原文+中文）","done":false}
${lang === 'ja' ? JA_RULE : 'reading 字段留空字符串。'}`;
}

export async function roleplayTurn(lang, scene, history) {
  const msgs = [{ role: 'system', content: roleplaySystem(lang, scene) }, ...history];
  if (!history.length) msgs.push({ role: 'user', content: '（对话开始。请你先开口，用一句话打招呼或询问。）' });
  return chat(msgs, { json: true, temperature: 0.8, maxTokens: 500 });
}

export async function roleplayFeedback(lang, scene, transcript) {
  const M = LANGS[lang].meta;
  const prompt = `下面是一位中文母语的${M.name}学习者（水平 ${levelOf(lang)}）在"${scene.title}"场景中的角色扮演对话。
任务目标：${scene.task.goal}
检查项：${scene.task.checklist.join('、')}

对话记录（"学习者"是要点评的一方）：
${transcript}

请用中文点评，只输出 JSON：
{
 "score": 0到100的整数（综合任务完成度、准确度、自然度）,
 "done": ["已完成的检查项"],
 "missed": ["未完成的检查项"],
 "praise": "一句具体的表扬（指出说得好的一句）",
 "corrections": [{"you":"学习者原话","better":"更正确/更地道的${M.name}说法","reading":"${lang === 'ja' ? '平假名读音' : ''}","zh":"中文意思","why":"一句话说明问题"}],
 "next": "下次练习的一个具体建议"
}
corrections 最多 5 条，只挑最值得改的；如果学习者说得都对，可以给 1–2 条"更地道的说法"。${lang === 'ja' ? JA_RULE : ''}`;
  return chat([{ role: 'user', content: prompt }], { json: true, temperature: 0.3, maxTokens: 1500 });
}

// 生成新场景
export async function generateScene(lang, wish) {
  const M = LANGS[lang].meta;
  const known = knownWordList(lang, 200);
  const existing = scenesOf(lang).map(s => s.title).join('、');
  const ja = lang === 'ja';
  const prompt = `为中文母语的${M.name}学习者设计一个"场景学习单元"。
学习者水平：${levelOf(lang)}。已会的词（尽量复用，新词控制在 8 个以内）：${known.join(', ') || '（几乎没有）'}
已有场景（不要重复）：${existing}
${wish ? '学习者想学的场景：' + wish : '请选一个真实生活中高频、实用的场景。'}

只输出 JSON，结构如下：
{
 "title":"中文场景名（≤8字）",
 "place":"${M.name}场景名",
 "emoji":"一个表情符号",
 "cando":"完成后学习者能做到什么（中文，一句话，以"能"开头）",
 "chunks":[${ja ? '["日文","平假名读音","中文"]' : '["法文","中文"]'}，6到8个最核心、可直接套用的语块],
 "dialogue":[${ja ? '["说话人","日文","平假名读音","中文"]' : '["说话人","法文","中文"]'}，8到12句自然对话，学习者一方的说话人写"我"],
 "task":{"role":"AI 要扮演的角色和说话风格（中文）","goal":"和示范对话相似但细节不同的任务（中文）","checklist":["3到5个检查项，每项≤6字"]},
 "words":[${ja ? '["写法","读音(平假名)","中文","例句","例句读音","例句中文"]' : '["词（名词带冠词）","国际音标(不带斜杠)","中文","例句","例句中文"]'}，场景里的新词 4到8个]
}
对话要地道、真实，符合当地生活习惯；${ja ? '使用です/ます体。' + JA_RULE : '注意名词阴阳性和连诵。'}`;
  const j = await chat([{ role: 'user', content: prompt }], { json: true, temperature: 0.8, maxTokens: 3000 });
  return normalizeScene(lang, j);
}

function normalizeScene(lang, j) {
  const ja = lang === 'ja';
  const id = 'ai-' + Date.now().toString(36);
  const arr = x => Array.isArray(x) ? x : [];
  const scene = {
    id, ai: true,
    title: String(j.title || 'AI 场景').slice(0, 16), place: String(j.place || ''), emoji: j.emoji || '✨', level: 'AI',
    cando: String(j.cando || '能应对这个场景'),
    grammar: [],
    chunks: arr(j.chunks).filter(c => Array.isArray(c) && c.length >= (ja ? 3 : 2)).map(c => c.slice(0, ja ? 3 : 2).map(String)),
    dialogue: arr(j.dialogue).filter(d => Array.isArray(d) && d.length >= (ja ? 4 : 3)).map(d => d.slice(0, ja ? 4 : 3).map(String)),
    task: { role: String(j.task?.role || '当地人'), goal: String(j.task?.goal || '完成对话'), checklist: arr(j.task?.checklist).map(String).slice(0, 5) },
  };
  if (scene.chunks.length < 3 || scene.dialogue.length < 4) throw new Error('AI 生成的场景不完整，请再试一次。');
  const words = arr(j.words).filter(w => Array.isArray(w) && w.length >= (ja ? 6 : 5)).map(w => {
    const x = w.map(String);
    return ja ? [x[0], x[1], x[2], x[3], x[4], x[5], id] : [x[0], x[1].replace(/^\/|\/$/g, ''), x[2], x[3], x[4], id];
  });
  return { scene, words };
}

// 扩充词库：按词频补充下一批
export async function generateWords(lang, n = 20, theme = '') {
  const M = LANGS[lang].meta;
  const have = wordsOf(lang).map(w => w[0]);
  const ja = lang === 'ja';
  const prompt = `为中文母语的${M.name}初学者补充 ${n} 个最该学的${M.name}词。
挑选原则：按日常口语词频从高到低，优先选还没学过的高频词（动词、形容词、副词、日常名词、常用表达都要有）。${theme ? '本批侧重主题：' + theme + '。' : ''}
已有的词（不要重复）：${have.join(', ')}

只输出 JSON：{"words":[${ja ? '["写法","读音(平假名)","中文释义","例句","例句读音","例句中文"]' : '["词（名词带 le/la/l\' 并在 l\' 后注明 (m.) 或 (f.)）","国际音标(不带斜杠)","中文释义","简短例句","例句中文"]'}]}
例句要短（≤8个词）、口语化、实用。${ja ? JA_RULE : ''}`;
  const j = await chat([{ role: 'user', content: prompt }], { json: true, temperature: 0.5, maxTokens: 3500 });
  const tag = 'ai';
  return (Array.isArray(j.words) ? j.words : []).filter(w => Array.isArray(w) && w.length >= (ja ? 6 : 5)).map(w => {
    const x = w.map(String);
    return ja ? [x[0], x[1], x[2], x[3], x[4], x[5], tag] : [x[0], x[1].replace(/^\/|\/$/g, ''), x[2], x[3], x[4], tag];
  });
}

// 今日阅读：用已会的词写 i+1 小故事
export async function generateReading(lang, topic = '') {
  const M = LANGS[lang].meta;
  const known = knownWordList(lang, 300);
  const ja = lang === 'ja';
  const prompt = `用${M.name}写一篇给初学者的短文（"可理解输入"）。
学习者水平：${levelOf(lang)}。
学习者已会的词：${known.join(', ') || '（极少，请只用最基础的词）'}
要求：90% 以上的词来自已会词汇或最基础的功能词，最多引入 5 个新词；句子短；内容有趣、有一点小情节，像真实生活里的一件小事。${topic ? '主题：' + topic : ''}
长度：${ja ? '6–10 句' : '6–10 句'}。

只输出 JSON：
{"title":"${M.name}标题","titleZh":"中文标题","sentences":[{"t":"原文句子","r":"${ja ? '平假名读音' : ''}","zh":"中文翻译"}],"newWords":[${ja ? '["写法","读音","中文"]' : '["词","中文"]'}],"questions":[{"q":"中文理解题","a":"答案（中文）"}]}
questions 出 2 道。${ja ? JA_RULE : ''}`;
  const j = await chat([{ role: 'user', content: prompt }], { json: true, temperature: 0.9, maxTokens: 2500 });
  if (!Array.isArray(j.sentences) || !j.sentences.length) throw new Error('AI 生成的短文不完整，请再试一次。');
  return { id: 'r' + Date.now().toString(36), t: Date.now(), title: j.title || '', titleZh: j.titleZh || '', sentences: j.sentences, newWords: j.newWords || [], questions: j.questions || [] };
}

// 随问随答：语法、用法
export async function ask(lang, question, context = '') {
  const M = LANGS[lang].meta;
  return chat([
    { role: 'system', content: `你是耐心的${M.name}老师，学生是中文母语的初学者。用中文简洁回答（不超过 200 字），给 1–2 个${M.name}例句并附中文。不要用 markdown 标题。` },
    { role: 'user', content: (context ? `相关内容：${context}\n\n` : '') + question },
  ], { temperature: 0.4, maxTokens: 800 });
}

// 记忆法：给难记的卡片编一个联想
export async function mnemonic(lang, v) {
  const M = LANGS[lang].meta;
  let what;
  if (v.kind === 'w') what = `单词「${v.front}」${v.reading ? `（读音 ${v.reading}）` : ''}，意思是「${v.meaning}」`;
  else if (v.big) what = `假名「${v.front}」，读 ${v.meaning}${v.origin ? `，来自汉字「${v.origin}」` : ''}`;
  else if (v.phoneme) what = `发音 /${v.item.ipa}/（拼写 ${v.item.spell.map(s => s[0]).join('、')}），例词 ${v.item.words.map(w => w[0]).join('、')}`;
  else if (v.rule) what = `拼读规则「${v.item.title}」：${v.item.body}`;
  else what = `句子「${v.front}」，意思是「${v.prompt}」`;
  const prompt = `帮一位中文母语的${M.name}初学者记住：${what}。
给一个简短、好记、有画面感的记忆法（谐音、拆字、字形联想、和中文或英文的联系都可以），不超过 50 个字。只输出记忆法本身，不要解释，不要加引号。`;
  return (await chat([{ role: 'user', content: prompt }], { temperature: 0.9, maxTokens: 200 })).trim();
}
