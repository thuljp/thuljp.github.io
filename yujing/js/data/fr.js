// 法语内容：发音规则、核心词汇、语法微课、场景
// 词汇格式: [词, 音标, 中文, 例句, 例句中文, 标签]

export const sounds = [
  ['ou', '/u/', '嘴唇圆而突出，像汉语"乌"', 'vous · tout · rouge'],
  ['u', '/y/', '舌位发"衣"，嘴唇圆成"吁(ü)"', 'tu · rue · salut'],
  ['eau · au', '/o/', '闭口的"哦"，嘴唇圆紧', 'eau · beau · aussi'],
  ['ai · ei', '/ɛ/', '开口的"诶"', 'lait · mais · neige'],
  ['é', '/e/', '闭口的"诶"，嘴角略向两边拉', 'café · été · thé'],
  ['è · ê', '/ɛ/', '开口的"诶"', 'mère · fête · très'],
  ['oi', '/wa/', '读成"哇"', 'moi · trois · voilà'],
  ['on · om', '/ɔ̃/', '鼻化的"哦"：气流同时走口腔和鼻腔，不要发出n', 'bonjour · nom · on'],
  ['an · en · am · em', '/ɑ̃/', '鼻化的"啊"，口型张大', 'enfant · temps · chambre'],
  ['in · ain · ein · un', '/ɛ̃/', '鼻化的"诶"（现代口语里 un 也多读这个音）', 'vin · pain · plein · un'],
  ['ch', '/ʃ/', '像汉语"诗"的声母，但嘴唇撅起', 'chat · chercher · chaud'],
  ['gn', '/ɲ/', '像"你"的声母', 'montagne · champagne'],
  ['qu', '/k/', '只发 k，u 不发音', 'qui · quatre · quand'],
  ['c / ç', '/s/ 或 /k/', '在 e、i、y 前读 s，其余读 k；ç 永远读 s', 'ce · ici · café · ça'],
  ['g', '/ʒ/ 或 /g/', '在 e、i、y 前读 ʒ（像"日"），其余读 g', 'orange · gîte · gare'],
  ['h', '不发音', '法语的 h 永远不发音', 'hôtel · homme · heure'],
  ['r', '/ʁ/', '小舌音：舌根抬向软腭，像轻轻漱口', 'rue · Paris · merci'],
  ['词尾辅音', '通常不发音', '例外记 CaReFuL：c、r、f、l 结尾常发音', 'petit · grand · avec · neuf'],
  ['词尾 e', '不发音', '词尾不带重音符号的 e 不读', 'table · porte · rue'],
  ['eu · œu', '/ø/ · /œ/', '舌位发"诶"，嘴唇圆起', 'deux · peu · sœur · heure'],
  ['-er · -ez', '/e/', '动词词尾 -er 和 -ez 都读闭口"诶"', 'parler · chez · assez'],
  ['ill', '/ij/', '多读"伊耶"（例外：ville、mille 读 l）', 'fille · famille · billet'],
  ['ail · eil', '/aj/ · /ɛj/', '尾音是轻轻的"耶"', 'travail · soleil'],
  ['tion', '/sjɔ̃/', 't 在这里读 s', 'nation · attention · addition'],
  ['s / ss', '/z/ · /s/', '两个元音之间的单个 s 读 z；ss 读 s', 'maison · rose · poisson'],
  ['连诵 liaison', '把词尾辅音接到下个词', '后一个词以元音开头时，前一个词不发音的尾辅音要读出来并连上', 'les amis · vous avez · un enfant'],
];

export const words = [
  // 打招呼与礼貌
  ['bonjour', 'bɔ̃.ʒuʁ', '你好（白天）', 'Bonjour, madame !', '您好，女士！', 'core'],
  ['bonsoir', 'bɔ̃.swaʁ', '晚上好', 'Bonsoir, bienvenue !', '晚上好，欢迎！', 'core'],
  ['salut', 'sa.ly', '嗨 / 再见（熟人之间）', 'Salut, ça va ?', '嗨，还好吗？', 'core'],
  ['merci', 'mɛʁ.si', '谢谢', 'Merci beaucoup !', '非常感谢！', 'core'],
  ["s'il vous plaît", 'sil vu plɛ', '请（礼貌用语）', "Un café, s'il vous plaît.", '请来一杯咖啡。', 'core'],
  ['oui', 'wi', '是，对', 'Oui, c\'est ça.', '对，就是这样。', 'core'],
  ['non', 'nɔ̃', '不，不是', 'Non, merci.', '不用了，谢谢。', 'core'],
  ['pardon', 'paʁ.dɔ̃', '对不起；（没听清）什么？', 'Pardon, je ne comprends pas.', '抱歉，我没听懂。', 'core'],
  ['excusez-moi', 'ɛk.sky.ze mwa', '打扰一下 / 对不起', 'Excusez-moi, où est la gare ?', '打扰一下，火车站在哪？', 'core'],
  ['au revoir', 'o ʁə.vwaʁ', '再见', 'Merci, au revoir !', '谢谢，再见！', 'core'],
  ["d'accord", 'da.kɔʁ', '好的，同意', "D'accord, à demain.", '好的，明天见。', 'core'],
  ['voilà', 'vwa.la', '给您 / 这就是', 'Voilà votre café.', '这是您的咖啡。', 'core'],
  // 代词
  ['je', 'ʒə', '我', 'Je suis chinois.', '我是中国人。', 'core'],
  ['tu', 'ty', '你（熟人）', 'Tu parles français ?', '你会说法语吗？', 'core'],
  ['il · elle', 'il · ɛl', '他 · 她', 'Elle est professeure.', '她是老师。', 'core'],
  ['nous', 'nu', '我们', 'Nous sommes deux.', '我们两个人。', 'core'],
  ['vous', 'vu', '您；你们', 'Vous êtes d\'où ?', '您是哪里人？', 'core'],
  ['moi', 'mwa', '我（强调形式）', 'Et moi, un thé.', '我呢，要一杯茶。', 'core'],
  // 核心动词
  ['être', 'ɛtʁ', '是', 'Je suis étudiant.', '我是学生。', 'core'],
  ['avoir', 'a.vwaʁ', '有', "J'ai une réservation.", '我有预订。', 'core'],
  ['aller', 'a.le', '去', 'Je vais à la gare.', '我去火车站。', 'core'],
  ['faire', 'fɛʁ', '做', 'Ça fait combien ?', '一共多少钱？', 'core'],
  ['vouloir', 'vu.lwaʁ', '想要', 'Je voudrais un croissant.', '我想要一个可颂。', 'core'],
  ['pouvoir', 'pu.vwaʁ', '能，可以', 'Je peux payer par carte ?', '我可以刷卡吗？', 'core'],
  ['prendre', 'pʁɑ̃dʁ', '拿；点（餐）；乘坐', 'Je vais prendre un café.', '我要一杯咖啡。', 'core'],
  ['parler', 'paʁ.le', '说（语言）', 'Je parle un peu français.', '我会说一点法语。', 'core'],
  ['comprendre', 'kɔ̃.pʁɑ̃dʁ', '懂，理解', 'Je ne comprends pas.', '我不懂。', 'core'],
  ['savoir', 'sa.vwaʁ', '知道', 'Je ne sais pas.', '我不知道。', 'core'],
  ['venir', 'və.niʁ', '来', 'Je viens de Chine.', '我来自中国。', 'core'],
  ['voir', 'vwaʁ', '看见', 'On se voit demain ?', '明天见面吗？', 'core'],
  ['dire', 'diʁ', '说，告诉', "Comment on dit « merci » ?", '"谢谢"怎么说？', 'core'],
  ['aimer', 'ɛ.me', '喜欢；爱', "J'aime le café.", '我喜欢咖啡。', 'core'],
  ['manger', 'mɑ̃.ʒe', '吃', 'On mange ici ?', '我们在这儿吃吗？', 'core'],
  ['boire', 'bwaʁ', '喝', 'Vous voulez boire quelque chose ?', '您想喝点什么吗？', 'core'],
  ['payer', 'pe.je', '付钱', 'Je voudrais payer.', '我想付钱。', 'core'],
  ['chercher', 'ʃɛʁ.ʃe', '找', 'Je cherche la gare.', '我在找火车站。', 'core'],
  ['habiter', 'a.bi.te', '居住', "J'habite à Paris.", '我住在巴黎。', 'core'],
  ['travailler', 'tʁa.va.je', '工作', 'Je travaille dans une école.', '我在一所学校工作。', 'core'],
  ["s'appeler", 'sa.ple', '名叫', "Je m'appelle Lin.", '我叫林。', 'core'],
  // 小词
  ['le · la · les', 'lə · la · le', '这个/那个（定冠词：阳·阴·复）', 'la gare, le métro, les amis', '火车站、地铁、朋友们', 'core'],
  ['un · une', 'œ̃ · yn', '一个（不定冠词：阳·阴）', 'un café, une baguette', '一杯咖啡、一根法棍', 'core'],
  ['de', 'də', '……的；从', 'la gare de Lyon', '里昂火车站', 'core'],
  ['à', 'a', '在；去；到', 'Je suis à Paris.', '我在巴黎。', 'core'],
  ['et', 'e', '和', 'un café et un thé', '一杯咖啡和一杯茶', 'core'],
  ['mais', 'mɛ', '但是', "C'est bon, mais c'est cher.", '好是好，但是贵。', 'core'],
  ['avec', 'a.vɛk', '和……一起；带有', 'Un café avec du lait.', '一杯加奶的咖啡。', 'core'],
  ['pour', 'puʁ', '为了；给', 'Pour moi, un thé.', '给我来一杯茶。', 'core'],
  ['dans', 'dɑ̃', '在……里', 'dans la rue', '在街上', 'core'],
  ["c'est", 'sɛ', '这是', "C'est combien ?", '这个多少钱？', 'core'],
  ['il y a', 'il i a', '有（存在）', 'Il y a un problème.', '有个问题。', 'core'],
  ['ça', 'sa', '这，那（口语）', 'Ça va ?', '还好吗？', 'core'],
  // 疑问词
  ['où', 'u', '哪里', 'Où est le métro ?', '地铁在哪？', 'core'],
  ['quand', 'kɑ̃', '什么时候', 'Tu pars quand ?', '你什么时候走？', 'core'],
  ['comment', 'kɔ.mɑ̃', '怎么；如何', 'Comment ça va ?', '最近怎么样？', 'core'],
  ['combien', 'kɔ̃.bjɛ̃', '多少', "C'est combien ?", '多少钱？', 'core'],
  ['pourquoi', 'puʁ.kwa', '为什么', 'Pourquoi pas ?', '为什么不呢？', 'core'],
  ['qui', 'ki', '谁', "Qui est-ce ?", '这是谁？', 'core'],
  ['quel · quelle', 'kɛl', '哪个，什么', 'Quelle ligne ?', '哪条线？', 'core'],
  ["qu'est-ce que", 'kɛs kə', '什么（问句开头）', "Qu'est-ce que vous prenez ?", '您点什么？', 'core'],
  // 副词与时间
  ['très', 'tʁɛ', '很，非常', 'Très bien !', '很好！', 'core'],
  ['bien', 'bjɛ̃', '好；很', 'Tu parles bien français.', '你法语说得很好。', 'core'],
  ['beaucoup', 'bo.ku', '很多；非常', 'Merci beaucoup.', '非常感谢。', 'core'],
  ['un peu', 'œ̃ pø', '一点', 'Je parle un peu français.', '我会说一点法语。', 'core'],
  ['aussi', 'o.si', '也', 'Vous aussi !', '您也是！', 'core'],
  ['encore', 'ɑ̃.kɔʁ', '再；还', 'Encore un café ?', '再来一杯咖啡吗？', 'core'],
  ['maintenant', 'mɛ̃t.nɑ̃', '现在', "Je suis libre maintenant.", '我现在有空。', 'core'],
  ["aujourd'hui", 'o.ʒuʁ.dɥi', '今天', "Il fait beau aujourd'hui.", '今天天气很好。', 'core'],
  ['demain', 'də.mɛ̃', '明天', 'À demain !', '明天见！', 'core'],
  ['hier', 'jɛʁ', '昨天', "J'étais à Lyon hier.", '我昨天在里昂。', 'core'],
  ['ici', 'i.si', '这里', 'Installez-vous ici.', '请在这里坐。', 'core'],
  ['là', 'la', '那里；这里', 'Il est là.', '他在那儿。', 'core'],
  ["l'heure (f.)", 'lœʁ', '小时；点钟', 'À quelle heure ?', '几点？', 'core'],
  ['le jour', 'lə ʒuʁ', '天，日子', 'trois jours', '三天', 'core'],
  ['la semaine', 'la sə.mɛn', '星期，周', 'la semaine prochaine', '下周', 'core'],
  // 数字
  ['un', 'œ̃', '1', 'un croissant', '一个可颂', 'num'],
  ['deux', 'dø', '2', 'deux cafés', '两杯咖啡', 'num'],
  ['trois', 'tʁwa', '3', 'trois nuits', '三晚', 'num'],
  ['quatre', 'katʁ', '4', 'quatre euros', '四欧元', 'num'],
  ['cinq', 'sɛ̃k', '5', 'cinq minutes', '五分钟', 'num'],
  ['six', 'sis', '6', 'six euros', '六欧元', 'num'],
  ['sept', 'sɛt', '7', 'à sept heures', '七点', 'num'],
  ['huit', 'ɥit', '8', 'huit jours', '八天', 'num'],
  ['neuf', 'nœf', '9', 'neuf heures', '九点', 'num'],
  ['dix', 'dis', '10', 'dix minutes', '十分钟', 'num'],
  ['vingt', 'vɛ̃', '20', 'vingt euros', '二十欧元', 'num'],
  ['cent', 'sɑ̃', '100', 'cent euros', '一百欧元', 'num'],
  ["l'euro (m.)", 'lø.ʁo', '欧元', 'trois euros quarante', '三欧四十分', 'num'],
  // 面包店 · 咖啡馆
  ['le pain', 'lə pɛ̃', '面包', 'Le pain est chaud.', '面包是热的。', 'boulangerie'],
  ['la baguette', 'la ba.ɡɛt', '法棍', 'Une baguette, s\'il vous plaît.', '请给我一根法棍。', 'boulangerie'],
  ['le croissant', 'lə kʁwa.sɑ̃', '可颂', 'Deux croissants, s\'il vous plaît.', '请给我两个可颂。', 'boulangerie'],
  ['le café', 'lə ka.fe', '咖啡；咖啡馆', 'Un café, s\'il vous plaît.', '请来一杯咖啡。', 'cafe'],
  ['le thé', 'lə te', '茶', 'Pour moi, un thé.', '我要一杯茶。', 'cafe'],
  ["l'eau (f.)", 'lo', '水', "Une carafe d'eau, s'il vous plaît.", '请来一壶水。', 'cafe'],
  ['le vin', 'lə vɛ̃', '葡萄酒', 'Un verre de vin rouge.', '一杯红葡萄酒。', 'cafe'],
  ["l'addition (f.)", 'la.di.sjɔ̃', '账单', "L'addition, s'il vous plaît.", '请结账。', 'cafe'],
  ['la carte', 'la kaʁt', '菜单；卡', 'Je peux payer par carte ?', '可以刷卡吗？', 'cafe'],
  ['la table', 'la tabl', '桌子', 'Une table pour deux.', '一张两人桌。', 'cafe'],
  // 出行
  ['la gare', 'la ɡaʁ', '火车站', 'Je cherche la gare.', '我在找火车站。', 'chemin'],
  ['le métro', 'lə me.tʁo', '地铁', 'Je prends le métro.', '我坐地铁。', 'metro'],
  ['le billet · le ticket', 'lə bi.jɛ · lə ti.kɛ', '票', 'Un ticket, s\'il vous plaît.', '请给我一张票。', 'metro'],
  ['la ligne', 'la liɲ', '线路', 'Prenez la ligne 12.', '请坐 12 号线。', 'metro'],
  ['la rue', 'la ʁy', '街道', 'dans cette rue', '在这条街上', 'chemin'],
  ['à droite', 'a dʁwat', '在右边；向右', 'Tournez à droite.', '向右转。', 'chemin'],
  ['à gauche', 'a ɡoʃ', '在左边；向左', 'Tournez à gauche.', '向左转。', 'chemin'],
  ['tout droit', 'tu dʁwa', '一直往前', 'Allez tout droit.', '一直往前走。', 'chemin'],
  ['loin', 'lwɛ̃', '远', "C'est loin d'ici ?", '离这儿远吗？', 'chemin'],
  ['près', 'pʁɛ', '近', "C'est tout près.", '很近。', 'chemin'],
  ["l'hôtel (m.)", 'lo.tɛl', '酒店', "L'hôtel est en face.", '酒店在对面。', 'hotel'],
  ['la chambre', 'la ʃɑ̃bʁ', '房间', 'une chambre simple', '一间单人房', 'hotel'],
  ['la clé', 'la kle', '钥匙', 'Voici votre clé.', '这是您的钥匙。', 'hotel'],
  ['la nuit', 'la nɥi', '夜晚；（住）晚', 'pour trois nuits', '住三晚', 'hotel'],
  // 描述
  ['grand · grande', 'ɡʁɑ̃ · ɡʁɑ̃d', '大的', 'une grande ville', '一座大城市', 'core'],
  ['petit · petite', 'pə.ti · pə.tit', '小的', 'un petit café', '一杯小杯咖啡', 'core'],
  ['bon · bonne', 'bɔ̃ · bɔn', '好的；好吃的', 'Bonne journée !', '祝您今天愉快！', 'core'],
  ['chaud · chaude', 'ʃo · ʃod', '热的', 'Il fait chaud.', '天气很热。', 'core'],
  ['froid · froide', 'fʁwa · fʁwad', '冷的', "L'eau est froide.", '水是凉的。', 'core'],
  ['cher · chère', 'ʃɛʁ', '贵的', "C'est trop cher.", '太贵了。', 'core'],
  // 人与生活
  ["l'ami · l'amie", 'la.mi', '朋友（男·女）', 'mon amie Léa', '我的朋友莱娅', 'presenter'],
  ['le nom', 'lə nɔ̃', '名字；姓', 'au nom de Wang', '用王的名字', 'hotel'],
  ['le travail', 'lə tʁa.vaj', '工作', 'Le travail, ça va ?', '工作还顺利吗？', 'presenter'],
  ['la maison', 'la mɛ.zɔ̃', '家；房子', 'Je rentre à la maison.', '我回家。', 'core'],
  ['le prix', 'lə pʁi', '价格', 'Quel est le prix ?', '价格是多少？', 'core'],
  ['chinois · chinoise', 'ʃi.nwa · ʃi.nwaz', '中国人；中文', 'Je suis chinoise.', '我是中国人（女）。', 'presenter'],
  ['français · française', 'fʁɑ̃.sɛ · fʁɑ̃.sɛz', '法国人；法语', 'Il est français.', '他是法国人。', 'presenter'],
];

export const grammar = [
  {
    id: 'g-gender', title: '名词的阴阳性与冠词',
    body: `<p>法语每个名词都有性别：阳性或阴性。性别大多没有逻辑，所以<b>永远连着冠词一起记</b>：不要背 <i>pain</i>，要背 <i>le pain</i>。</p>
<table><tr><th></th><th>阳性</th><th>阴性</th><th>复数</th></tr>
<tr><td>定冠词（这个）</td><td>le</td><td>la</td><td>les</td></tr>
<tr><td>不定冠词（一个）</td><td>un</td><td>une</td><td>des</td></tr></table>
<p>元音或哑音 h 开头时，le/la 缩写成 <b>l'</b>：l'eau、l'hôtel。这时看不出性别，所以词库里会标注 (m.) 或 (f.)。</p>
<p>粗略规律：以 -tion、-té、-ette 结尾多为阴性；以 -ment、-age、-eau 结尾多为阳性。</p>`,
    ex: [['le pain, la baguette', '面包、法棍'], ["un café, une table", '一杯咖啡、一张桌子']],
  },
  {
    id: 'g-etre', title: 'être（是）的变位',
    body: `<p>être 是最常用的不规则动词，必须整组背下来。</p>
<table><tr><td>je suis</td><td>nous sommes</td></tr><tr><td>tu es</td><td>vous êtes</td></tr><tr><td>il/elle est</td><td>ils/elles sont</td></tr></table>
<p>用来说身份、国籍、状态：Je suis chinois. / Nous sommes deux.（我们两个人）</p>`,
    ex: [['Je suis étudiante.', '我是学生（女）。'], ['Vous êtes combien ?', '你们几位？']],
  },
  {
    id: 'g-avoir', title: 'avoir（有）的变位',
    body: `<table><tr><td>j'ai</td><td>nous avons</td></tr><tr><td>tu as</td><td>vous avez</td></tr><tr><td>il/elle a</td><td>ils/elles ont</td></tr></table>
<p>注意 je + ai 缩合成 <b>j'ai</b>。法语用 avoir 说年龄：J'ai trente ans（我三十岁，直译"我有三十年"）。</p>
<p><b>il y a</b> = "有（存在）"，相当于 there is：Il y a un problème.</p>`,
    ex: [["J'ai une réservation.", '我有预订。'], ["Il y a un café ici ?", '这附近有咖啡馆吗？']],
  },
  {
    id: 'g-er', title: '-er 动词的现在时',
    body: `<p>大约九成法语动词以 -er 结尾，变位规律完全一样：去掉 -er，加词尾。</p>
<table><tr><th colspan="2">parler（说）</th></tr><tr><td>je parl<b>e</b></td><td>nous parl<b>ons</b></td></tr><tr><td>tu parl<b>es</b></td><td>vous parl<b>ez</b></td></tr><tr><td>il parl<b>e</b></td><td>ils parl<b>ent</b></td></tr></table>
<p>好消息：-e、-es、-ent 三个词尾<b>都不发音</b>，所以 je parle / tu parles / ils parlent 读音完全相同。</p>`,
    ex: [["J'habite à Paris.", '我住在巴黎。'], ['Vous parlez anglais ?', '您说英语吗？']],
  },
  {
    id: 'g-neg', title: '否定：ne … pas',
    body: `<p>把动词夹在 ne 和 pas 中间：Je <b>ne</b> comprends <b>pas</b>.</p>
<p>ne 遇到元音缩写成 n'：Ce <b>n'</b>est <b>pas</b> loin.</p>
<p>口语里 ne 经常被省略：Je sais pas. 听力里要能认出来，但自己说时保留 ne 更稳妥。</p>`,
    ex: [["Je ne sais pas.", '我不知道。'], ["Ce n'est pas cher.", '这不贵。']],
  },
  {
    id: 'g-voudrais', title: '礼貌请求：je voudrais',
    body: `<p><b>Je voudrais</b> + 名词/动词原形 = "我想要……"，是点餐、购物最礼貌也最万能的说法。</p>
<p>它是 vouloir（想要）的条件式，语气比 je veux（我要）委婉得多。直接说 je veux 会显得生硬。</p>
<p>另外两个万能句型：<b>Je vais prendre</b> …（我要点……）、<b>… , s'il vous plaît</b>（直接说东西 + 请）。</p>`,
    ex: [["Je voudrais une baguette.", '我想要一根法棍。'], ["Je voudrais payer.", '我想付钱。']],
  },
  {
    id: 'g-question', title: '三种问句',
    body: `<p>同一个问题，法语有三种说法，从随意到正式：</p>
<ol><li><b>语调上扬</b>：Vous parlez anglais ?（最常用）</li>
<li><b>Est-ce que</b> 开头：Est-ce que vous parlez anglais ?</li>
<li><b>主谓倒装</b>：Parlez-vous anglais ?（书面、正式）</li></ol>
<p>疑问词可以放句首或句尾：Où est la gare ? / C'est où, la gare ?</p>`,
    ex: [["C'est combien ?", '多少钱？'], ["Qu'est-ce que vous prenez ?", '您点什么？']],
  },
  {
    id: 'g-numbers', title: '数字与价格',
    body: `<p>1–10：un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix</p>
<p>11–16：onze, douze, treize, quatorze, quinze, seize；17–19：dix-sept, dix-huit, dix-neuf</p>
<p>20 vingt、30 trente、40 quarante、50 cinquante、60 soixante。70 = 60+10（soixante-dix），80 = 4×20（quatre-vingts），90 = 4×20+10（quatre-vingt-dix）。</p>
<p>价格读法：3,40 € → <b>trois euros quarante</b>（欧元后面直接接分，不说"分"）。</p>`,
    ex: [['Ça fait trois euros quarante.', '一共3.40欧元。'], ['Deux euros cinquante.', '2.50欧元。']],
  },
  {
    id: 'g-prep', title: '介词缩合：au、du',
    body: `<p>à 和 de 遇到阳性定冠词 le、复数 les 时必须缩合：</p>
<table><tr><td>à + le → <b>au</b></td><td>de + le → <b>du</b></td></tr><tr><td>à + les → <b>aux</b></td><td>de + les → <b>des</b></td></tr></table>
<p>遇到 la 和 l' 不缩合：à la gare、à l'hôtel。</p>`,
    ex: [['Je vais au musée.', '我去博物馆。'], ['Tournez à gauche au feu.', '在红绿灯处左转。']],
  },
  {
    id: 'g-imp', title: '命令式：指路必备',
    body: `<p>对 vous 说的命令式 = 去掉主语 vous 的现在时：vous allez → <b>Allez</b> !</p>
<p>问路时听到的几乎都是这个形式：<b>Allez</b> tout droit、<b>Tournez</b> à gauche、<b>Prenez</b> la ligne 12、<b>Descendez</b> à Solférino。</p>
<p>听力技巧：抓住动词（走/转/坐/下车）+ 方向/地点，其他词可以暂时忽略。</p>`,
    ex: [['Allez tout droit.', '一直往前走。'], ['Prenez la deuxième rue à droite.', '走右边第二条街。']],
  },
  {
    id: 'g-aller', title: 'aller 与近将来时',
    body: `<table><tr><td>je vais</td><td>nous allons</td></tr><tr><td>tu vas</td><td>vous allez</td></tr><tr><td>il va</td><td>ils vont</td></tr></table>
<p><b>aller + 动词原形</b> = "将要做……"，是口语中最常用的将来时：Je vais prendre un café.（我要点一杯咖啡。）</p>`,
    ex: [['Je vais prendre le métro.', '我要坐地铁。'], ['On va au café ?', '我们去咖啡馆吗？']],
  },
  {
    id: 'g-adj', title: '形容词的阴阳性',
    body: `<p>形容词要和名词的性数一致。最常见的变法是阳性 + <b>e</b> = 阴性：petit → petit<b>e</b>，grand → grand<b>e</b>。</p>
<p>加 e 后原本不发音的尾辅音<b>要读出来</b>：petit [pəti] → petite [pətit]。所以你听到尾辅音，常常意味着是阴性。</p>
<p>介绍自己时：男生说 Je suis chinois / Enchanté，女生说 Je suis chinois<b>e</b> / Enchanté<b>e</b>。</p>`,
    ex: [['Une petite table.', '一张小桌子。'], ['Il est grand, elle est grande.', '他很高，她也很高。']],
  },
];

export const scenes = [
  {
    id: 'boulangerie', emoji: '🥖', title: '面包店点单', place: 'À la boulangerie', level: 'A1',
    cando: '能在面包店打招呼、点面包、问价格并付款',
    grammar: ['g-gender', 'g-voudrais', 'g-numbers'],
    chunks: [
      ['Bonjour, madame.', '您好，女士。'],
      ["Je voudrais une baguette, s'il vous plaît.", '我想要一根法棍。'],
      ["Deux croissants, s'il vous plaît.", '请给我两个可颂。'],
      ['Et avec ceci ?', '还要别的吗？（店员常说）'],
      ["Non, c'est tout.", '不用了，就这些。'],
      ['Ça fait combien ?', '一共多少钱？'],
      ['Bonne journée !', '祝您今天愉快！'],
    ],
    dialogue: [
      ['店员', 'Bonjour monsieur !', '您好，先生！'],
      ['我', "Bonjour madame. Je voudrais une baguette, s'il vous plaît.", '您好。我想要一根法棍。'],
      ['店员', 'Une baguette… Et avec ceci ?', '一根法棍……还要别的吗？'],
      ['我', "Deux croissants, s'il vous plaît.", '请再来两个可颂。'],
      ['店员', 'Très bien. Autre chose ?', '好的。还要别的吗？'],
      ['我', "Non, c'est tout. Ça fait combien ?", '不用了，就这些。一共多少钱？'],
      ['店员', 'Ça fait trois euros quarante.', '一共3.40欧元。'],
      ['我', 'Voilà.', '给您。'],
      ['店员', 'Merci, bonne journée !', '谢谢，祝您今天愉快！'],
      ['我', 'Merci, vous aussi ! Au revoir.', '谢谢，您也是！再见。'],
    ],
    task: { role: '巴黎街角面包店的店员，热情但语速正常', goal: '买一根法棍和两个可颂，问清一共多少钱，然后礼貌道别', checklist: ['打招呼', '点法棍', '点两个可颂', '问价格', '道别'] },
  },
  {
    id: 'cafe', emoji: '☕', title: '咖啡馆', place: 'Au café', level: 'A1',
    cando: '能在咖啡馆说人数、点饮料、要账单并结账',
    grammar: ['g-question', 'g-etre', 'g-aller'],
    chunks: [
      ['Nous sommes deux.', '我们两个人。'],
      ["Qu'est-ce que vous prenez ?", '您要点什么？'],
      ['Je vais prendre un café.', '我要一杯咖啡。'],
      ["Pour moi, un thé, s'il vous plaît.", '我要一杯茶。'],
      ["Une carafe d'eau, s'il vous plaît.", '请来一壶水（免费的自来水）。'],
      ["L'addition, s'il vous plaît.", '请结账。'],
      ['Je peux payer par carte ?', '可以刷卡吗？'],
    ],
    dialogue: [
      ['服务员', 'Bonjour ! Vous êtes combien ?', '您好！几位？'],
      ['我', 'Bonjour, nous sommes deux.', '您好，我们两个人。'],
      ['服务员', "Installez-vous ici. Qu'est-ce que vous prenez ?", '请坐这边。要点什么？'],
      ['我', 'Je vais prendre un café, et pour mon amie, un thé.', '我要一杯咖啡，我朋友要一杯茶。'],
      ['服务员', "Un café et un thé. C'est tout ?", '一杯咖啡一杯茶。就这些吗？'],
      ['我', "Et une carafe d'eau, s'il vous plaît.", '再来一壶水，谢谢。'],
      ['服务员', "Très bien, j'arrive.", '好的，马上来。'],
      ['我', "Excusez-moi ! L'addition, s'il vous plaît.", '打扰一下！请结账。'],
      ['服务员', 'Voilà. Ça fait six euros.', '给您。一共六欧元。'],
      ['我', 'Je peux payer par carte ?', '可以刷卡吗？'],
      ['服务员', 'Bien sûr.', '当然可以。'],
      ['我', 'Merci beaucoup !', '非常感谢！'],
    ],
    task: { role: '巴黎咖啡馆的服务员，有点忙，说话干脆', goal: '为你和朋友点两杯不同的饮料和一壶水，然后要账单并问能否刷卡', checklist: ['说人数', '点两杯饮料', '要水', '要账单', '问能否刷卡'] },
  },
  {
    id: 'presenter', emoji: '🤝', title: '认识新朋友', place: 'Se présenter', level: 'A1',
    cando: '能介绍自己的名字、国籍、住处和职业，并反问对方',
    grammar: ['g-etre', 'g-er', 'g-adj', 'g-neg'],
    chunks: [
      ["Je m'appelle Lin.", '我叫林。'],
      ['Enchanté(e) !', '很高兴认识你！'],
      ['Je suis chinois(e).', '我是中国人。'],
      ["J'habite à Paris.", '我住在巴黎。'],
      ['Je travaille dans l\'informatique.', '我在IT行业工作。'],
      ['Et toi ? / Et vous ?', '你呢？/ 您呢？'],
      ['Je parle un peu français.', '我会说一点法语。'],
      ["Tu peux répéter, s'il te plaît ?", '你能再说一遍吗？'],
    ],
    dialogue: [
      ['Léa', "Salut ! Je m'appelle Léa. Et toi ?", '嗨！我叫莱娅。你呢？'],
      ['我', "Salut ! Moi, c'est Lin. Enchanté !", '嗨！我是林。很高兴认识你！'],
      ['Léa', "Enchantée ! Tu es d'où ?", '很高兴认识你！你是哪里人？'],
      ['我', "Je suis chinois. J'habite à Paris depuis un mois.", '我是中国人。我在巴黎住了一个月了。'],
      ['Léa', 'Ah, super ! Tu parles bien français !', '哇，真棒！你法语说得很好！'],
      ['我', 'Merci, mais je parle seulement un peu.', '谢谢，不过我只会说一点。'],
      ['Léa', "Qu'est-ce que tu fais dans la vie ?", '你是做什么工作的？'],
      ['我', "Je travaille dans l'informatique. Et toi ?", '我在IT行业工作。你呢？'],
      ['Léa', 'Je suis professeure de musique.', '我是音乐老师。'],
      ['我', "Pardon, tu peux répéter, s'il te plaît ?", '抱歉，你能再说一遍吗？'],
      ['Léa', 'Je suis prof de musique. Je travaille dans une école.', '我是音乐老师，在一所学校工作。'],
      ['我', "Ah, d'accord ! C'est cool.", '哦，明白了！真酷。'],
    ],
    task: { role: '派对上新认识的法国年轻人，好奇、友好，用 tu 称呼', goal: '介绍你的名字、国籍、住在哪、做什么工作，并至少反问对方一个问题', checklist: ['说名字', '说国籍', '说住处', '说工作', '反问对方'] },
  },
  {
    id: 'chemin', emoji: '🧭', title: '问路', place: 'Demander son chemin', level: 'A1',
    cando: '能问路，并听懂直走、左转、右转、步行几分钟等指示',
    grammar: ['g-imp', 'g-prep', 'g-neg'],
    chunks: [
      ['Excusez-moi, je cherche la gare.', '打扰一下，我在找火车站。'],
      ['Où est la station de métro ?', '地铁站在哪里？'],
      ["C'est loin d'ici ?", '离这里远吗？'],
      ['Allez tout droit.', '一直往前走。'],
      ['Tournez à gauche. / Tournez à droite.', '向左转。/ 向右转。'],
      ["C'est à cinq minutes à pied.", '步行五分钟。'],
      ['Je suis perdu(e).', '我迷路了。'],
    ],
    dialogue: [
      ['我', 'Excusez-moi, madame. Je cherche la gare de Lyon.', '打扰一下，女士。我在找里昂火车站。'],
      ['路人', "La gare de Lyon ? Ce n'est pas très loin.", '里昂火车站？不太远。'],
      ['我', "C'est à combien de minutes à pied ?", '走路要几分钟？'],
      ['路人', 'À dix minutes, à peu près. Allez tout droit, puis tournez à gauche au feu.', '大概十分钟。一直往前走，然后在红绿灯处左转。'],
      ['我', 'Tout droit, puis à gauche au feu…', '直走，然后在红绿灯左转……'],
      ['路人', "Oui, et après, c'est à droite, en face du café.", '对，然后就在右边，咖啡馆对面。'],
      ['我', "D'accord. Merci beaucoup, madame !", '好的。非常感谢，女士！'],
      ['路人', 'Je vous en prie. Bonne journée !', '不客气。祝您愉快！'],
    ],
    task: { role: '巴黎街头的路人，乐于助人，会给出两三步的路线', goal: '问去卢浮宫怎么走，确认要走多久，复述一遍路线确认没听错，然后道谢', checklist: ['礼貌开口', '问地点', '问时间', '复述路线', '道谢'] },
  },
  {
    id: 'metro', emoji: '🚇', title: '坐地铁', place: 'Au guichet du métro', level: 'A1',
    cando: '能在地铁站问坐哪条线、要不要换乘，并买票',
    grammar: ['g-aller', 'g-question', 'g-imp'],
    chunks: [
      ['Je voudrais aller au musée d\'Orsay.', '我想去奥赛博物馆。'],
      ['Quelle ligne je prends ?', '我该坐哪条线？'],
      ['Il faut changer ?', '需要换乘吗？'],
      ["Un ticket, s'il vous plaît.", '请给我一张票。'],
      ["C'est quelle direction ?", '是哪个方向？'],
      ['Descendez à Solférino.', '在 Solférino 站下车。'],
    ],
    dialogue: [
      ['工作人员', 'Bonjour, je peux vous aider ?', '您好，需要帮忙吗？'],
      ['我', "Bonjour. Je voudrais aller au musée d'Orsay. Quelle ligne je prends ?", '您好。我想去奥赛博物馆，该坐哪条线？'],
      ['工作人员', 'Prenez la ligne 12 et descendez à Solférino.', '坐12号线，在 Solférino 站下车。'],
      ['我', 'Il faut changer ?', '需要换乘吗？'],
      ['工作人员', "Non, c'est direct d'ici.", '不用，从这里直达。'],
      ['我', "Parfait. Un ticket, s'il vous plaît. C'est combien ?", '太好了。请给我一张票，多少钱？'],
      ['工作人员', 'Deux euros cinquante.', '2.50欧元。'],
      ['我', "Voilà. Et c'est quelle direction ?", '给您。是哪个方向？'],
      ['工作人员', "Direction Mairie d'Issy.", 'Mairie d\'Issy 方向。'],
      ['我', 'Merci beaucoup !', '非常感谢！'],
    ],
    task: { role: '巴黎地铁站服务台工作人员', goal: '问去埃菲尔铁塔坐哪条线、要不要换乘、往哪个方向，然后买一张票', checklist: ['说目的地', '问线路', '问换乘', '问方向', '买票'] },
  },
  {
    id: 'hotel', emoji: '🏨', title: '酒店入住', place: "À l'hôtel", level: 'A1',
    cando: '能办理酒店入住，确认预订，询问早餐时间和 wifi',
    grammar: ['g-avoir', 'g-numbers', 'g-question'],
    chunks: [
      ["J'ai une réservation au nom de Wang.", '我用"王"的名字预订了。'],
      ['Pour trois nuits.', '住三晚。'],
      ['Le petit-déjeuner est à quelle heure ?', '早餐是几点？'],
      ['Quel est le code wifi ?', 'wifi 密码是什么？'],
      ['La chambre est à quel étage ?', '房间在几楼？'],
      ['Il y a un problème avec la douche.', '淋浴有问题。'],
    ],
    dialogue: [
      ['前台', 'Bonsoir, bienvenue !', '晚上好，欢迎！'],
      ['我', "Bonsoir. J'ai une réservation au nom de Wang.", '晚上好。我用"王"的名字预订了。'],
      ['前台', "Un instant… Oui, une chambre simple pour trois nuits, c'est ça ?", '请稍等……有的，单人间住三晚，对吗？'],
      ['我', "Oui, c'est ça.", '对，没错。'],
      ['前台', "Voici votre clé. C'est la chambre 304, au troisième étage.", '这是您的钥匙。304房间，在四楼（法式三楼）。'],
      ['我', 'Merci. Le petit-déjeuner est à quelle heure ?', '谢谢。早餐几点？'],
      ['前台', 'De sept heures à dix heures, au rez-de-chaussée.', '七点到十点，在一楼（底层）。'],
      ['我', 'Et quel est le code wifi ?', 'wifi 密码是什么？'],
      ['前台', 'Il est sur votre carte, ici.', '写在您的房卡上，这里。'],
      ['我', 'Parfait, merci. Bonne soirée !', '好的，谢谢。晚安！'],
    ],
    task: { role: '巴黎小酒店的前台，礼貌、正式，用 vous', goal: '办理入住（预订了两晚双人间），问早餐时间和地点，再问能不能把行李寄存到明天下午', checklist: ['说预订人', '确认晚数', '问早餐', '问行李寄存', '道谢'] },
  },
];

export const meta = {
  id: 'fr', name: '法语', native: 'Français', locale: 'fr-FR', flag: '🇫🇷',
  soundLabel: '发音', soundUnit: '个',
  tips: '法语拼写和读音的对应很规律。先用一周把所有发音和拼读规则过一遍，之后看到新词基本都能读出来。',
};
