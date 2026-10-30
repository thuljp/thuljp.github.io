// 课程内容自检：node docs/check_course.mjs js/data/course/fr_a2.js [更多文件…]
// 不带参数时检查全部课程文件（以及合并后的全局一致性）
import { readdirSync } from 'node:fs';
import { resolve, basename, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CATS = {
  fr: ['动词变位', '时态与语气', '代词', '名词与形容词', '句型', '从句与连接', '数字与时间', '介词', '表达与语用'],
  ja: ['基础句型', '助词', '动词活用', '时态与体', '形容词与愿望', '条件与假设', '授受与敬语', '推测与传闻', '复合句型', '书面与文体', '数字', '发音'],
};
const HIRA_OK = /^[ぁ-ゖー 。、！？…「」・〜～\-]+$/;

let files = process.argv.slice(2);
if (!files.length) files = readdirSync(resolve(root, 'js/data/course')).filter(f => f.endsWith('.js')).map(f => 'js/data/course/' + f);

let errors = 0, warns = 0;
const err = (f, where, msg) => { errors++; console.log(`✗ ${basename(f)} ${where}: ${msg}`); };
const warn = (f, where, msg) => { warns++; console.log(`· ${basename(f)} ${where}: ${msg}`); };

const base = { fr: await import(pathToFileURL(resolve(root, 'js/data/fr.js'))), ja: await import(pathToFileURL(resolve(root, 'js/data/ja.js'))) };
const sample = { fr: await import(pathToFileURL(resolve(root, 'js/data/course_fr.js'))), ja: await import(pathToFileURL(resolve(root, 'js/data/course_ja.js'))) };

for (const f of files) {
  const lang = basename(f).startsWith('ja') ? 'ja' : 'fr';
  const ja = lang === 'ja';
  let M;
  try { M = await import(pathToFileURL(resolve(root, f)) + '?t=' + Date.now()); }
  catch (e) { err(f, 'import', e.message); continue; }
  const { grammar = [], CAT = {}, units = [] } = M;
  if (!Array.isArray(units) || !units.length) err(f, 'units', '没有导出 units');
  const baseKeys = new Set(base[lang].words.map(w => w[0]));
  const knownG = new Set([...base[lang].grammar, ...sample[lang].grammar, ...grammar].map(g => g.id));
  // 语法点
  const gids = new Set();
  for (const g of grammar) {
    const w = 'grammar ' + g.id;
    if (!/^g-[a-z0-9-]+$/.test(g.id || '')) err(f, w, 'id 格式应为 g-xxx');
    if (gids.has(g.id)) err(f, w, 'id 重复');
    gids.add(g.id);
    if (!g.title) err(f, w, '缺 title');
    if (!g.body || g.body.length < 120) err(f, w, 'body 太短（至少讲清规则）');
    if (/<(?!\/?(p|b|i|table|tr|th|td|ul|ol|li|br|thead|tbody)\b)[a-z]/i.test(g.body || '')) err(f, w, 'body 里有不允许的标签');
    if (!Array.isArray(g.ex) || g.ex.length < 2 || g.ex.some(e => !Array.isArray(e) || e.length !== 2 || !e[0] || !e[1])) err(f, w, 'ex 至少 2 个 [原文, 中文]');
    if (!CAT[g.id]) err(f, w, 'CAT 里没有它的类别');
    else if (!CATS[lang].includes(CAT[g.id])) err(f, w, `类别"${CAT[g.id]}"不在规定列表里`);
  }
  const used = new Set();
  const uids = new Set(), nw = new Set();
  for (const u of units) {
    const w = 'unit ' + (u.id || '?');
    if (!/^(a1|a2|b1|b2)-\d\d$/.test(u.id || '')) err(f, w, 'id 格式应为 a2-01 这样');
    if (uids.has(u.id)) err(f, w, 'id 重复');
    uids.add(u.id);
    for (const k of ['emoji', 'title', 'sub', 'can']) if (!u[k] || typeof u[k] !== 'string') err(f, w, '缺 ' + k);
    if (u.scene !== null && u.scene !== undefined) warn(f, w, 'scene 应为 null');
    if (!Array.isArray(u.grammar) || !u.grammar.length) err(f, w, 'grammar 不能为空');
    for (const g of u.grammar || []) { used.add(g); if (!knownG.has(g)) err(f, w, '未定义的语法点 ' + g); }
    for (const k of u.words || []) if (!baseKeys.has(k)) err(f, w, `words 里的"${k}"不在词库里（不确定就别引用）`);
    // 新词
    const nlen = ja ? 7 : 6;
    if (!Array.isArray(u.newWords) || u.newWords.length < 3) err(f, w, 'newWords 至少 3 个');
    for (const x of u.newWords || []) {
      const ww = w + ' 词 ' + (x?.[0] || '?');
      if (!Array.isArray(x) || x.length !== nlen) { err(f, ww, `应有 ${nlen} 项`); continue; }
      if (x[nlen - 1] !== 'course') err(f, ww, "最后一项应为 'course'");
      if (x.slice(0, nlen - 1).some(v => typeof v !== 'string' || !v.trim())) err(f, ww, '有空字段');
      if (nw.has(x[0])) err(f, ww, '本文件里重复');
      nw.add(x[0]);
      if (baseKeys.has(x[0])) warn(f, ww, '词库里已有（会自动去重，可以改放进 words）');
      if (ja) {
        if (!HIRA_OK.test(x[1])) err(f, ww, `读音"${x[1]}"应为纯平假名`);
        if (!HIRA_OK.test(x[4])) err(f, ww, `例句读音"${x[4]}"应为平假名分词`);
      } else if (/[\/]/.test(x[1])) err(f, ww, '音标不要带斜杠');
    }
    // 对话
    const dlen = ja ? 4 : 3;
    if (!Array.isArray(u.dialogue) || u.dialogue.length < 5) err(f, w, 'dialogue 至少 5 行');
    (u.dialogue || []).forEach((d, i) => {
      const dw = `${w} 对话${i + 1}`;
      if (!Array.isArray(d) || d.length !== dlen) return err(f, dw, `应有 ${dlen} 项`);
      if (typeof d[0] !== 'string') err(f, dw, '说话人应为字符串（旁白写空字符串）');
      if (!d[1] || !d[dlen - 1]) err(f, dw, '有空字段');
      if (ja && !HIRA_OK.test(d[2])) err(f, dw, `读音"${d[2]}"应为平假名分词`);
    });
    // 课文句
    const slen = ja ? 3 : 2;
    if (!Array.isArray(u.sentences) || u.sentences.length < 4) err(f, w, 'sentences 至少 4 句');
    (u.sentences || []).forEach((s, i) => {
      const sw = `${w} 句${i + 1}`;
      if (!Array.isArray(s) || s.length !== slen) return err(f, sw, `应有 ${slen} 项`);
      if (ja) {
        if (!HIRA_OK.test(s[1])) err(f, sw, `读音"${s[1]}"应为平假名分词`);
        if (s[1].split(/\s+/).filter(Boolean).length < 2) err(f, sw, '读音要按词用空格分开');
      } else if (s[0].split(/\s+/).length < 3) warn(f, sw, '句子太短，拼句子会很简单');
    });
    // 填空
    if (!Array.isArray(u.cloze) || u.cloze.length < 4) err(f, w, 'cloze 至少 4 题');
    (u.cloze || []).forEach((c, i) => {
      const cw = `${w} 填空${i + 1}`;
      const need = ja ? [5, 6] : [5];
      if (!Array.isArray(c) || !need.includes(c.length)) return err(f, cw, `应有 ${need.join('或')} 项`);
      const [s, opts, a, zh, why] = c;
      if ((s.match(/___/g) || []).length !== 1) err(f, cw, '句子里要有且只有一个 ___');
      if (!Array.isArray(opts) || opts.length < 2 || opts.length > 4) err(f, cw, '选项 2–4 个');
      else if (new Set(opts).size !== opts.length) err(f, cw, '选项重复');
      if (!Number.isInteger(a) || a < 0 || a >= (opts?.length || 0)) err(f, cw, '正确下标越界');
      if (!zh || !why) err(f, cw, '缺中文或说明');
      if (ja && u.id && !u.id.startsWith('a1') && c.length !== 6) err(f, cw, 'A2 起日语填空要有第 6 项：整句读音');
      if (ja && c.length === 6 && !HIRA_OK.test(c[5].replace(/___/g, ''))) err(f, cw, `读音"${c[5]}"应为平假名分词`);
    });
    // 发现规律
    if (!Array.isArray(u.discover) || !u.discover.length) err(f, w, 'discover 至少 1 题');
    (u.discover || []).forEach((d, i) => {
      if (!d.q || !Array.isArray(d.opts) || d.opts.length < 2 || !Number.isInteger(d.a) || d.a >= d.opts.length || !d.why) err(f, `${w} 发现${i + 1}`, '格式不对');
    });
    if (!u.write?.prompt || !u.write?.model) err(f, w, 'write 要有 prompt 和 model');
    // 至少一个课文句能拼（3 个词块以上）
    const tiles = (u.sentences || []).map(s => (ja ? s[1] : s[0]).split(/\s+/).filter(t => t && !/^[.,!?;:…。、！？]+$/.test(t)).length);
    if (!tiles.some(n => n >= 3)) err(f, w, '没有能拼的句子（至少一句 3 个词块）');
    // 推荐长度
    const lvl = (u.id || '').slice(0, 2);
    const minW = { a1: 4, a2: 6, b1: 7, b2: 8 }[lvl] || 3;
    if ((u.newWords || []).length < minW) warn(f, w, `newWords 只有 ${u.newWords?.length} 个，${lvl.toUpperCase()} 建议至少 ${minW}`);
  }
  for (const g of gids) if (!used.has(g)) warn(f, 'grammar ' + g, '没有课用到它');
  console.log(`${basename(f)}：${units.length} 课，${grammar.length} 个语法点，${nw.size} 个新词`);
}
console.log(errors ? `\n共 ${errors} 个错误，${warns} 个提醒` : `\n通过（${warns} 个提醒）`);
process.exit(errors ? 1 : 0);
