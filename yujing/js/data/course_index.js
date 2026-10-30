// 核心课程总目录：把各级别文件按大纲顺序合并（大纲见 docs/SYLLABUS.md）
import * as CF from './course_fr.js';
import * as CJ from './course_ja.js';
import * as FA1 from './course/fr_a1.js';
import * as FA2a from './course/fr_a2a.js';
import * as FA2b from './course/fr_a2b.js';
import * as FB1a from './course/fr_b1a.js';
import * as FB1b from './course/fr_b1b.js';
import * as FB2a from './course/fr_b2a.js';
import * as FB2b from './course/fr_b2b.js';
import * as JA1 from './course/ja_a1.js';
import * as JA2a from './course/ja_a2a.js';
import * as JA2b from './course/ja_a2b.js';
import * as JB1a from './course/ja_b1a.js';
import * as JB1b from './course/ja_b1b.js';
import * as JB2a from './course/ja_b2a.js';
import * as JB2b from './course/ja_b2b.js';

const seq = (p, a, b) => Array.from({ length: b - a + 1 }, (_, i) => `${p}-${String(a + i).padStart(2, '0')}`);

// 法语 A1：新课插在样板课之间（按语法的自然顺序）
const ORDER = {
  fr: ['c1', 'c2', 'c3', 'c4', 'a1-13', 'c5', 'a1-14', 'c6', 'c7', 'a1-15', 'a1-16', 'c8', 'a1-17', 'c9', 'a1-18', 'a1-19', 'c10', 'a1-20', 'a1-21', 'a1-22', 'a1-23', 'c11', 'c12', 'a1-24',
    ...seq('a2', 1, 20), ...seq('b1', 1, 20), ...seq('b2', 1, 16)],
  ja: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', ...seq('a1', 13, 24),
    ...seq('a2', 1, 20), ...seq('b1', 1, 20), ...seq('b2', 1, 16)],
};
const FILES = { fr: [CF, FA1, FA2a, FA2b, FB1a, FB1b, FB2a, FB2b], ja: [CJ, JA1, JA2a, JA2b, JB1a, JB1b, JB2a, JB2b] };

export const LEVELS = {
  fr: [['A1', 'A1 入门', '能应付最基本的日常交流：介绍、点餐、问路、时间、购物'], ['A2', 'A2 基础', '能讲过去和将来，描述经历，处理旅行和日常事务'], ['B1', 'B1 进阶', '能表达观点和理由，讲述假设，读懂一般文章'], ['B2', 'B2 中高级', '能论证、辩论，读懂报刊评论，在职场自如交流']],
  ja: [['A1', 'A1 入门 · N5', '能用礼貌体应付最基本的日常交流'], ['A2', 'A2 基础 · N4', '能用授受、条件、可能、被动、敬语处理日常事务'], ['B1', 'B1 进阶 · N3', '能表达意图、推测、因果，读懂一般文章和邮件'], ['B2', 'B2 中高级 · N2', '能读懂报刊评论，在职场用得体的敬语交流']],
};
export const levelOf = id => (/^(c\d+|a1-)/.test(id) ? 'A1' : id.slice(0, 2).toUpperCase());

// 样板课的语法类别统一到新的类别表
const CAT_FIX = {
  fr: { 'g-pronoms': '代词', 'g-etre': '动词变位', 'g-avoir': '动词变位', 'g-er': '动词变位', 'g-imp': '动词变位', 'g-aller': '时态与语气', 'g-pc': '时态与语气', 'g-gender': '名词与形容词', 'g-adj': '名词与形容词', 'g-neg': '句型', 'g-question': '句型', 'g-voudrais': '句型', 'g-numbers': '数字与时间', 'g-time': '数字与时间', 'g-prep': '介词' },
  ja: { 'g-sound': '发音', 'g-pitch': '发音', 'g-desu': '基础句型', 'g-no': '基础句型', 'g-kosoado': '基础句型', 'g-arimasu': '基础句型', 'g-wa-ga': '助词', 'g-wo': '助词', 'g-ni-de': '助词', 'g-masu': '动词活用', 'g-mashou': '动词活用', 'g-te': '动词活用', 'g-tai': '形容词与愿望', 'g-adj': '形容词与愿望', 'g-adjpast': '形容词与愿望', 'g-hoshii': '形容词与愿望', 'g-numbers': '数字' },
};
const CAT_ORDER = {
  fr: ['动词变位', '时态与语气', '代词', '名词与形容词', '句型', '从句与连接', '数字与时间', '介词', '表达与语用'],
  ja: ['基础句型', '助词', '动词活用', '时态与体', '形容词与愿望', '条件与假设', '授受与敬语', '推测与传闻', '复合句型', '书面与文体', '数字', '发音'],
};

function build(lang) {
  const byId = new Map(), grammar = [], seen = new Set(), CAT = {};
  for (const F of FILES[lang]) {
    for (const u of F.units || []) byId.set(u.id, u);
    for (const g of F.grammar || []) if (!seen.has(g.id)) { seen.add(g.id); grammar.push(g); }
    Object.assign(CAT, F.CAT || {});
  }
  Object.assign(CAT, CAT_FIX[lang]);
  const units = ORDER[lang].map(id => byId.get(id)).filter(Boolean).map(u => ({ ...u, level: levelOf(u.id) }));
  // 大纲之外的课（如果有）排在最后
  for (const [id, u] of byId) if (!ORDER[lang].includes(id)) units.push({ ...u, level: levelOf(id) });
  return { units, grammar, CAT, CAT_ORDER: CAT_ORDER[lang] };
}
export const COURSE_DATA = { fr: build('fr'), ja: build('ja') };
