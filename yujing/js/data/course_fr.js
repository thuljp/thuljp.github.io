// 法语核心课程 A1：12 课
// words：引用词库里已有的词（写法即 id）；newWords：本课新增的词 [词, 音标, 中文, 例句, 例句中文, 'course']
// dialogue：[说话人, 法文, 中文]，"我"= 学习者
// sentences：课文句，用于拼句子、听力和复习卡 [法文, 中文]
// cloze：[带 ___ 的句子, 选项, 正确下标, 中文, 说明]
// discover：引导发现规律的小题；write：写作题 + 参考范文

export const grammar = [
  {
    id: 'g-pronoms', title: '主语代词与 tu / vous',
    body: `<table><tr><td>je 我</td><td>nous 我们</td></tr><tr><td>tu 你</td><td>vous 您；你们</td></tr><tr><td>il 他 · elle 她</td><td>ils 他们 · elles 她们</td></tr></table>
<p><b>tu 还是 vous？</b>对朋友、家人、孩子用 tu；对陌生人、长辈、店员和正式场合用 vous。拿不准就用 vous，不会失礼。vous 同时也是"你们"。</p>
<p>和中文不同，法语句子<b>必须有主语</b>：不能只说"parle français"，要说"je parle français"。</p>`,
    ex: [['Tu parles français ?', '你说法语吗？（朋友之间）'], ['Vous parlez français ?', '您说法语吗？']],
  },
  {
    id: 'g-time', title: '时间与星期',
    body: `<p>问时间：<b>Quelle heure est-il ?</b>　回答：<b>Il est</b> + 数字 + <b>heure(s)</b>。</p>
<p>八点 il est huit heures；八点半 huit heures <b>et demie</b>；八点一刻 huit heures <b>et quart</b>；中午 <b>midi</b>。</p>
<p>"在几点"用 <b>à</b>：à huit heures。</p>
<p>星期：lundi、mardi、mercredi、jeudi、vendredi、samedi、dimanche，小写。"星期一做某事"直接说 lundi，不加介词；"每周一"是 le lundi。</p>`,
    ex: [['Il est huit heures.', '八点了。'], ['Le train part à dix heures et demie.', '火车十点半出发。']],
  },
  {
    id: 'g-pc', title: '复合过去时：做过了',
    body: `<p><b>avoir 变位 + 过去分词</b> = 做过某事。</p>
<p>-er 动词的过去分词：去掉 -er 加 <b>é</b>，读音和原形一样：manger → mangé，visiter → visité。</p>
<table><tr><td>j'ai mangé</td><td>nous avons mangé</td></tr><tr><td>tu as mangé</td><td>vous avez mangé</td></tr><tr><td>il a mangé</td><td>ils ont mangé</td></tr></table>
<p>否定时 ne … pas 夹住 avoir：je <b>n'ai pas</b> mangé。</p>
<p>少数表示移动的动词（aller、venir 等）用 être：je suis allé(e)，以后再学。</p>`,
    ex: [["J'ai visité le Louvre.", '我参观了卢浮宫。'], ['Hier, nous avons mangé au restaurant.', '昨天我们在餐厅吃了饭。'], ["Je n'ai pas compris.", '我没听懂。']],
  },
];

// 知识体系里的分类
export const CAT = {
  'g-pronoms': '人称与动词', 'g-etre': '人称与动词', 'g-avoir': '人称与动词', 'g-er': '人称与动词', 'g-aller': '人称与动词', 'g-imp': '人称与动词', 'g-pc': '人称与动词',
  'g-gender': '名词与形容词', 'g-adj': '名词与形容词',
  'g-neg': '句型', 'g-question': '句型', 'g-voudrais': '句型',
  'g-numbers': '数字与时间', 'g-time': '数字与时间',
  'g-prep': '介词',
};
export const CAT_ORDER = ['人称与动词', '名词与形容词', '句型', '数字与时间', '介词'];

export const units = [
  {
    id: 'c1', emoji: '👋', title: '你好！初次见面', sub: '问候 · tu 和 vous', can: '能和人打招呼、说出自己的名字、问对方好不好', scene: 'presenter', grammar: ['g-pronoms'],
    words: ['bonjour', 'salut', 'merci', 'au revoir', "s'appeler"],
    newWords: [
      ['enchanté · enchantée', 'ɑ̃.ʃɑ̃.te', '很高兴认识你（男·女说）', "Enchanté, je m'appelle Paul.", '很高兴认识你，我叫保罗。', 'course'],
      ['comment ça va ?', 'kɔ.mɑ̃ sa va', '你好吗？', 'Salut Léa, comment ça va ?', '嗨，莱娅，你好吗？', 'course'],
      ['ça va', 'sa va', '还好；挺好', 'Ça va bien, merci.', '挺好的，谢谢。', 'course'],
    ],
    dialogue: [
      ['Léa', "Salut ! Je m'appelle Léa. Et toi ?", '嗨！我叫莱娅。你呢？'],
      ['我', "Salut ! Je m'appelle Lin.", '嗨！我叫林。'],
      ['Léa', 'Enchantée, Lin ! Comment ça va ?', '很高兴认识你，林！你好吗？'],
      ['我', 'Ça va bien, merci. Et toi ?', '挺好的，谢谢。你呢？'],
      ['Léa', 'Très bien ! Tu parles bien français.', '很好！你法语说得不错。'],
      ['我', 'Merci beaucoup !', '非常感谢！'],
    ],
    sentences: [["Je m'appelle Lin.", '我叫林。'], ['Comment ça va ?', '你好吗？'], ['Ça va bien, merci.', '挺好的，谢谢。'], ["Enchanté, je m'appelle Paul.", '很高兴认识你，我叫保罗。']],
    cloze: [
      ["___ m'appelle Lin.", ['Je', 'Tu', 'Vous'], 0, '我叫林。', "说自己用 je；m'appelle 是和 je 搭配的形式"],
      ['Bonjour madame, ___ parlez français ?', ['vous', 'tu', 'je'], 0, '女士您好，您说法语吗？', '对陌生人、长辈用 vous'],
      ['Salut Léa, ___ vas bien ?', ['tu', 'vous', 'je'], 0, '嗨，莱娅，你还好吗？', '对朋友用 tu（vas 也是配 tu 的形式）'],
    ],
    discover: [{ q: 'Léa 是女生。她说"很高兴认识你"应该写成？', opts: ['Enchantée', 'Enchanté'], a: 0, why: '女性说的时候形容词末尾多一个 e：enchantée。读音完全一样。' }],
    write: { prompt: '用法语向新朋友打招呼，介绍你的名字，再问候对方（2–3 句）。', model: "Salut ! Je m'appelle Lin. Enchanté ! Comment ça va ?" },
  },
  {
    id: 'c2', emoji: '🪪', title: '我是……', sub: 'être · 国籍和职业', can: '能说出自己的国籍和职业，并反问对方', scene: 'presenter', grammar: ['g-etre'],
    words: ['être', 'chinois · chinoise', 'français · française'],
    newWords: [
      ['étudiant · étudiante', 'e.ty.djɑ̃ · e.ty.djɑ̃t', '学生（男·女）', 'Je suis étudiante.', '我是学生（女）。', 'course'],
      ['professeur · professeure', 'pʁɔ.fɛ.sœʁ', '老师', 'Il est professeur.', '他是老师。', 'course'],
      ['ingénieur · ingénieure', 'ɛ̃.ʒe.njœʁ', '工程师', 'Elle est ingénieure.', '她是工程师。', 'course'],
      ["d'où", 'du', '从哪里', "Tu es d'où ?", '你是哪里人？', 'course'],
      ['et toi ?', 'e twa', '你呢？', 'Je suis chinois, et toi ?', '我是中国人，你呢？', 'course'],
    ],
    dialogue: [
      ['Paul', "Tu es d'où ?", '你是哪里人？'],
      ['我', 'Je suis chinois. Et toi ?', '我是中国人。你呢？'],
      ['Paul', 'Moi, je suis français. Tu es étudiant ?', '我是法国人。你是学生吗？'],
      ['我', 'Non, je suis ingénieur. Et toi ?', '不是，我是工程师。你呢？'],
      ['Paul', 'Je suis professeur.', '我是老师。'],
      ['我', "Ah, c'est bien !", '哦，挺好的！'],
    ],
    sentences: [['Je suis chinois.', '我是中国人。'], ["Tu es d'où ?", '你是哪里人？'], ['Elle est professeure.', '她是老师。'], ['Nous sommes étudiants.', '我们是学生。']],
    cloze: [
      ['Je ___ étudiant.', ['suis', 'es', 'est'], 0, '我是学生。', 'je → suis'],
      ['Vous ___ français ?', ['êtes', 'est', 'sommes'], 0, '您是法国人吗？', 'vous → êtes'],
      ['Elle est ___.', ['chinoise', 'chinois', 'chinoises'], 0, '她是中国人。', '阴性形式加 e'],
      ['Ils ___ ingénieurs.', ['sont', 'est', 'sommes'], 0, '他们是工程师。', 'ils → sont'],
    ],
    discover: [{ q: 'il est français → elle est ___', opts: ['française', 'français'], a: 0, why: '国籍、职业的阴性形式一般加 e；加 e 后原本不读的 s 要读出来：fran-çaise。' }],
    write: { prompt: '用法语介绍自己：名字、国籍、职业（3 句）。', model: "Je m'appelle Lin. Je suis chinois. Je suis ingénieur." },
  },
  {
    id: 'c3', emoji: '🥐', title: '这是什么？', sub: '名词的阴阳性 · 冠词', can: '能问"这是什么"，并用 un / une 说出东西的名字', scene: 'boulangerie', grammar: ['g-gender'],
    words: ['le pain', 'la baguette', 'le croissant', 'le café', "l'eau (f.)", 'un · une'],
    newWords: [
      ['le livre', 'lə livʁ', '书', "C'est un livre.", '这是一本书。', 'course'],
      ["qu'est-ce que c'est ?", 'kɛs kə sɛ', '这是什么？', "Qu'est-ce que c'est ?", '这是什么？', 'course'],
    ],
    dialogue: [
      ['店员', 'Bonjour ! Vous désirez ?', '您好！您要点什么？'],
      ['我', "Qu'est-ce que c'est ?", '这是什么？'],
      ['店员', "C'est un pain au chocolat.", '这是巧克力面包。'],
      ['我', "Et ça, c'est une baguette ?", '那这个是法棍吗？'],
      ['店员', "Oui, c'est une baguette.", '对，是法棍。'],
      ['我', "Une baguette et un croissant, s'il vous plaît.", '请给我一根法棍和一个可颂。'],
    ],
    sentences: [["C'est un croissant.", '这是一个可颂。'], ["C'est une baguette.", '这是一根法棍。'], ["Qu'est-ce que c'est ?", '这是什么？'], ['Le café est chaud.', '咖啡是热的。']],
    cloze: [
      ["C'est ___ croissant.", ['un', 'une', 'des'], 0, '这是一个可颂。', 'croissant 是阳性 → un'],
      ["C'est ___ baguette.", ['une', 'un', 'le'], 0, '这是一根法棍。', 'baguette 是阴性 → une'],
      ['___ eau est froide.', ["L'", 'La', 'Le'], 0, '水是凉的。', "元音开头时 le / la 缩写成 l'"],
      ["J'aime ___ café.", ['le', 'un', 'la'], 0, '我喜欢咖啡。', '泛指"喜欢某类东西"用定冠词 le / la / les'],
    ],
    discover: [{ q: '"une table、une chambre、une carte"……那 table 是？', opts: ['阴性', '阳性'], a: 0, why: '看冠词就知道：une 是阴性。所以背单词一定要连着冠词背。' }],
    write: { prompt: "看看你身边的东西，用 C'est un / une … 说出 3 样（可以去词库查词）。", model: "C'est une table. C'est un livre. C'est un café." },
  },
  {
    id: 'c4', emoji: '🎂', title: '有：年龄和家人', sub: 'avoir · 数字', can: '能说出自己的年龄和家里有什么人', scene: 'hotel', grammar: ['g-avoir', 'g-numbers'],
    words: ['avoir', 'un', 'deux', 'trois', 'dix', 'vingt'],
    newWords: [
      ['trente', 'tʁɑ̃t', '30', "J'ai trente ans.", '我三十岁。', 'course'],
      ["l'an (m.)", 'lɑ̃', '岁；年', "Il a vingt ans.", '他二十岁。', 'course'],
      ['le frère', 'lə fʁɛʁ', '兄弟', "J'ai un frère.", '我有一个兄弟。', 'course'],
      ['la sœur', 'la sœʁ', '姐妹', 'Elle a deux sœurs.', '她有两个姐妹。', 'course'],
    ],
    dialogue: [
      ['Léa', 'Tu as quel âge ?', '你多大了？'],
      ['我', "J'ai trente ans. Et toi ?", '我三十岁。你呢？'],
      ['Léa', "J'ai vingt-cinq ans. Tu as des frères ?", '我二十五岁。你有兄弟吗？'],
      ['我', "Oui, j'ai un frère. Et toi ?", '有，我有一个兄弟。你呢？'],
      ['Léa', "J'ai deux sœurs.", '我有两个姐妹。'],
      ['我', 'Super !', '真好！'],
    ],
    sentences: [["J'ai trente ans.", '我三十岁。'], ["J'ai un frère.", '我有一个兄弟。'], ['Elle a deux sœurs.', '她有两个姐妹。'], ['Il y a un café ici.', '这里有一家咖啡馆。']],
    cloze: [
      ["J'___ un frère.", ['ai', 'as', 'a'], 0, '我有一个兄弟。', "je + ai 缩合成 j'ai"],
      ['Tu ___ quel âge ?', ['as', 'a', 'ai'], 0, '你多大了？', 'tu → as'],
      ['Il ___ vingt ans.', ['a', 'as', 'est'], 0, '他二十岁。', '法语用 avoir 说年龄'],
      ['___ un café ici.', ['Il y a', 'Il a', "C'est"], 0, '这里有一家咖啡馆。', '"某处有某物"用 il y a'],
    ],
    discover: [{ q: '中文"我三十岁"，法语怎么说？', opts: ["J'ai trente ans.", 'Je suis trente ans.'], a: 0, why: '法语用"有"说年龄，直译是"我有三十年"。这是中国人最常犯的错之一。' }],
    write: { prompt: '用法语说说你的年龄和家人（2–3 句）。', model: "J'ai trente ans. J'ai un frère et une sœur." },
  },
  {
    id: 'c5', emoji: '☕', title: '我想要……', sub: 'je voudrais · 点餐', can: '能在咖啡馆点饮料、要账单、问价格', scene: 'cafe', grammar: ['g-voudrais'],
    words: ['le thé', 'le vin', "l'addition (f.)", 'combien', "l'euro (m.)", 'payer'],
    newWords: [
      ['je voudrais', 'ʒə vu.dʁɛ', '我想要（礼貌）', 'Je voudrais un thé.', '我想要一杯茶。', 'course'],
      ['un verre de', 'œ̃ vɛʁ də', '一杯……', "Un verre de vin, s'il vous plaît.", '请来一杯葡萄酒。', 'course'],
    ],
    dialogue: [
      ['服务员', "Bonjour ! Qu'est-ce que vous prenez ?", '您好！您要点什么？'],
      ['我', "Je voudrais un thé, s'il vous plaît.", '我想要一杯茶。'],
      ['服务员', 'Et pour vous, madame ?', '这位女士呢？'],
      ['朋友', 'Un verre de vin rouge.', '一杯红葡萄酒。'],
      ['我', "L'addition, s'il vous plaît. C'est combien ?", '请结账。多少钱？'],
      ['服务员', 'Ça fait huit euros.', '一共八欧元。'],
    ],
    sentences: [['Je voudrais un thé.', '我想要一杯茶。'], ["L'addition, s'il vous plaît.", '请结账。'], ["C'est combien ?", '多少钱？'], ["Un verre de vin, s'il vous plaît.", '请来一杯葡萄酒。']],
    cloze: [
      ["___ un café, s'il vous plaît.", ['Je voudrais', 'Je veux', 'Je suis'], 0, '我想要一杯咖啡。', '点餐用 je voudrais，比 je veux 礼貌'],
      ["C'est ___ ?", ['combien', 'comment', 'où'], 0, '多少钱？', 'combien = 多少'],
      ['Ça fait cinq ___.', ['euros', 'euro', "l'euro"], 0, '一共五欧元。', '复数加 s（读音不变）'],
    ],
    discover: [{ q: '在咖啡馆点单，哪句最自然、礼貌？', opts: ['Je voudrais un café.', 'Je veux un café.', 'Donne-moi un café.'], a: 0, why: 'je voudrais 是条件式，语气委婉；je veux 太直接；donne-moi 是命令口气。' }],
    write: { prompt: '你在法国咖啡馆：点一杯饮料、要账单、问多少钱（3 句）。', model: "Je voudrais un café, s'il vous plaît. L'addition, s'il vous plaît. C'est combien ?" },
  },
  {
    id: 'c6', emoji: '🎵', title: '我喜欢……', sub: '-er 动词现在时', can: '能说出自己住在哪、在哪工作、喜欢什么', scene: 'presenter', grammar: ['g-er'],
    words: ['parler', 'aimer', 'habiter', 'travailler', 'manger'],
    newWords: [
      ['la musique', 'la my.zik', '音乐', "J'aime la musique.", '我喜欢音乐。', 'course'],
      ['le sport', 'lə spɔʁ', '运动', 'Il aime le sport.', '他喜欢运动。', 'course'],
      ['regarder', 'ʁə.ɡaʁ.de', '看', 'Je regarde un film.', '我看电影。', 'course'],
    ],
    dialogue: [
      ['Léa', 'Tu habites où ?', '你住在哪？'],
      ['我', "J'habite à Paris. Je travaille dans une banque.", '我住在巴黎。我在一家银行工作。'],
      ['Léa', 'Tu aimes Paris ?', '你喜欢巴黎吗？'],
      ['我', "Oui, j'aime beaucoup Paris. J'aime la musique et le sport.", '喜欢，我很喜欢巴黎。我喜欢音乐和运动。'],
      ['Léa', 'Moi aussi ! On regarde un match ce soir ?', '我也是！今晚一起看比赛吗？'],
      ['我', "D'accord !", '好的！'],
    ],
    sentences: [["J'habite à Paris.", '我住在巴黎。'], ["J'aime la musique.", '我喜欢音乐。'], ['Tu parles français ?', '你说法语吗？'], ['Nous travaillons ici.', '我们在这里工作。']],
    cloze: [
      ['Je ___ français.', ['parle', 'parles', 'parlons'], 0, '我说法语。', 'je → -e'],
      ['Vous ___ où ?', ['habitez', 'habitons', 'habite'], 0, '您住在哪？', 'vous → -ez'],
      ['Nous ___ le sport.', ['aimons', 'aimez', 'aime'], 0, '我们喜欢运动。', 'nous → -ons'],
      ['Ils ___ ici.', ['travaillent', 'travaillez', 'travaillons'], 0, '他们在这里工作。', 'ils → -ent（不发音）'],
    ],
    discover: [{ q: 'je parle、tu parles、ils parlent——这三个读音？', opts: ['完全一样', '都不一样'], a: 0, why: '-e、-es、-ent 都不发音，所以读起来一样。只有 nous -ons、vous -ez 听得出区别。' }],
    write: { prompt: '说说你住在哪、在哪工作或学习、喜欢什么（3 句）。', model: "J'habite à Shanghai. Je travaille dans une école. J'aime la musique." },
  },
  {
    id: 'c7', emoji: '❓', title: '不……？提问', sub: 'ne … pas · 三种问句', can: '能说"我不懂""我不知道"，并用疑问词提问', scene: 'hotel', grammar: ['g-neg', 'g-question'],
    words: ['comprendre', 'savoir', 'où', 'quand', 'comment', 'pourquoi', 'qui'],
    newWords: [['ne … pas', 'nə pa', '不（否定）', 'Je ne comprends pas.', '我不懂。', 'course']],
    dialogue: [
      ['前台', 'Bonsoir ! Vous avez une réservation ?', '晚上好！您有预订吗？'],
      ['我', 'Non. Vous avez une chambre pour ce soir ?', '没有。今晚有房间吗？'],
      ['前台', "Oui. C'est pour combien de nuits ?", '有。住几晚？'],
      ['我', 'Pardon, je ne comprends pas.', '抱歉，我没听懂。'],
      ['前台', 'Combien de nuits ? Une, deux… ?', '几晚？一晚、两晚……？'],
      ['我', 'Ah ! Deux nuits. Est-ce que le petit-déjeuner est compris ?', '哦！两晚。含早餐吗？'],
    ],
    sentences: [['Je ne comprends pas.', '我不懂。'], ['Je ne sais pas.', '我不知道。'], ['Où est la gare ?', '火车站在哪？'], ['Est-ce que vous parlez anglais ?', '您说英语吗？']],
    cloze: [
      ['Je ne parle ___ anglais.', ['pas', 'ne', 'non'], 0, '我不说英语。', '否定：ne + 动词 + pas'],
      ['Ce ___ pas cher.', ["n'est", 'ne est', 'est'], 0, '这不贵。', "ne 遇到元音缩写成 n'"],
      ['___ est la gare ?', ['Où', 'Quand', 'Qui'], 0, '火车站在哪？', 'où = 哪里'],
      ['___ vous parlez anglais ?', ['Est-ce que', "Qu'est-ce que", 'Où'], 0, '您说英语吗？', '是非问句可以在句首加 est-ce que'],
    ],
    discover: [{ q: '把 "Je parle anglais." 变成否定，ne 和 pas 放在哪？', opts: ['Je ne parle pas anglais.', 'Je ne pas parle anglais.', 'Je parle ne pas anglais.'], a: 0, why: 'ne 和 pas 把动词"夹"在中间。' }],
    write: { prompt: '写 3 个问句：问路、问价格、问对方会不会说英语。', model: "Où est la gare ? C'est combien ? Est-ce que vous parlez anglais ?" },
  },
  {
    id: 'c8', emoji: '🧭', title: '问路与出行', sub: '命令式 · au / du', can: '能问路，听懂"直走、左转、在……旁边"', scene: 'chemin', grammar: ['g-imp', 'g-prep'],
    words: ['à droite', 'à gauche', 'tout droit', 'la rue', 'la gare', 'le métro', 'loin', 'près'],
    newWords: [],
    dialogue: [
      ['我', 'Excusez-moi, où est le musée ?', '打扰一下，博物馆在哪？'],
      ['路人', 'Allez tout droit, puis tournez à gauche.', '一直走，然后左转。'],
      ['我', "C'est loin ?", '远吗？'],
      ['路人', "Non, c'est près. C'est à côté du café.", '不远，很近。在咖啡馆旁边。'],
      ['我', 'Merci ! Et la gare ?', '谢谢！那火车站呢？'],
      ['路人', 'Prenez le métro, ligne 4.', '坐地铁 4 号线。'],
    ],
    sentences: [['Allez tout droit.', '一直往前走。'], ['Tournez à gauche.', '向左转。'], ["C'est à côté du café.", '在咖啡馆旁边。'], ['Je vais à la gare.', '我去火车站。']],
    cloze: [
      ['___ tout droit.', ['Allez', 'Aller', 'Allons'], 0, '一直往前走。', '对 vous 的命令式：去掉主语 vous'],
      ['Je vais ___ musée.', ['au', 'à le', 'à la'], 0, '我去博物馆。', 'à + le → au'],
      ["C'est à côté ___ café.", ['du', 'de le', 'de la'], 0, '在咖啡馆旁边。', 'de + le → du'],
      ['Je vais ___ gare.', ['à la', 'au', 'à le'], 0, '我去火车站。', 'à la 不缩合'],
    ],
    discover: [{ q: 'à + le 必须缩合成 au。那 à + les 是？', opts: ['aux', 'à les', 'als'], a: 0, why: 'à + le = au，à + les = aux：aux toilettes（去洗手间）。' }],
    write: { prompt: '告诉朋友从车站到附近一家咖啡馆怎么走（2–3 句，用 allez / tournez）。', model: 'Allez tout droit. Tournez à droite. Le café est à côté de la gare.' },
  },
  {
    id: 'c9', emoji: '🕗', title: '几点了？', sub: '时间 · 星期', can: '能问时间、说出几点、说出一周的安排', scene: 'metro', grammar: ['g-time'],
    words: ["l'heure (f.)", "aujourd'hui", 'demain', 'maintenant'],
    newWords: [
      ['le matin', 'lə ma.tɛ̃', '早上', 'Je travaille le matin.', '我上午工作。', 'course'],
      ['le soir', 'lə swaʁ', '晚上', 'À ce soir !', '晚上见！', 'course'],
      ['lundi', 'lœ̃.di', '星期一', 'Lundi, je travaille.', '星期一我工作。', 'course'],
      ['et demie', 'e də.mi', '……点半', 'Il est huit heures et demie.', '八点半了。', 'course'],
    ],
    dialogue: [
      ['我', 'Excusez-moi, quelle heure est-il ?', '打扰一下，几点了？'],
      ['路人', 'Il est neuf heures et demie.', '九点半。'],
      ['我', 'Le prochain métro est à quelle heure ?', '下一班地铁几点？'],
      ['工作人员', 'À dix heures.', '十点。'],
      ['我', 'Et demain matin, le premier métro ?', '那明天早上的首班地铁呢？'],
      ['工作人员', 'À cinq heures et demie.', '五点半。'],
    ],
    sentences: [['Quelle heure est-il ?', '几点了？'], ['Il est huit heures.', '八点了。'], ['À ce soir !', '晚上见！'], ['Lundi, je travaille.', '星期一我工作。']],
    cloze: [
      ['Il est huit ___.', ['heures', 'heure', "l'heure"], 0, '八点了。', '复数 heures'],
      ['Il est neuf heures ___ demie.', ['et', 'à', 'de'], 0, '九点半。', '半点：et demie'],
      ['Le train part ___ dix heures.', ['à', 'en', 'de'], 0, '火车十点出发。', '"在几点"用 à'],
    ],
    discover: [{ q: '"我星期一工作"法语怎么说？', opts: ['Lundi, je travaille.', 'À lundi, je travaille.', 'En lundi, je travaille.'], a: 0, why: '星期几前面不加介词。注意 "À lundi !" 的意思是"星期一见！"' }],
    write: { prompt: '写写你的一天：几点上班、几点吃饭、几点回家（用 à … heures，3 句）。', model: 'Je travaille à neuf heures. Je mange à midi. Je rentre à six heures.' },
  },
  {
    id: 'c10', emoji: '🏙️', title: '描述：大的、美的', sub: '形容词的阴阳性和位置', can: '能描述房间、城市和食物', scene: 'hotel', grammar: ['g-adj'],
    words: ['grand · grande', 'petit · petite', 'bon · bonne', 'chaud · chaude', 'froid · froide', 'cher · chère'],
    newWords: [
      ['beau · belle', 'bo · bɛl', '美的', 'Paris est une belle ville.', '巴黎是座美丽的城市。', 'course'],
      ['la ville', 'la vil', '城市', "C'est une grande ville.", '这是一座大城市。', 'course'],
    ],
    dialogue: [
      ['Paul', 'Tu aimes ta chambre ?', '你喜欢你的房间吗？'],
      ['我', 'Oui, elle est grande et belle. Mais elle est chère !', '喜欢，又大又漂亮。但是很贵！'],
      ['Paul', 'Et le petit-déjeuner ?', '早餐呢？'],
      ['我', 'Le café est bon, mais le pain est froid.', '咖啡不错，但面包是凉的。'],
      ['Paul', 'Paris est une belle ville, non ?', '巴黎是座美丽的城市，对吧？'],
      ['我', 'Oui, très belle !', '是啊，非常美！'],
    ],
    sentences: [['La chambre est grande.', '房间很大。'], ['Le café est bon.', '咖啡很好喝。'], ["C'est une belle ville.", '这是一座美丽的城市。'], ['Le pain est froid.', '面包是凉的。']],
    cloze: [
      ['La chambre est ___.', ['grande', 'grand', 'grands'], 0, '房间很大。', 'chambre 是阴性 → grande'],
      ['Le café est ___.', ['chaud', 'chaude', 'chauds'], 0, '咖啡是热的。', 'café 是阳性 → chaud'],
      ["C'est une ___ ville.", ['belle', 'beau', 'beaux'], 0, '这是一座美丽的城市。', 'beau 的阴性是 belle（不规则）'],
    ],
    discover: [{ q: '形容词通常放在名词哪边？un café ___', opts: ['后面：un café chaud', '前面：un chaud café'], a: 0, why: '大多数形容词放在名词后面；少数常用短词（grand、petit、bon、beau）放前面：une grande ville。' }],
    write: { prompt: '描述你的房间或你的城市（3 句，注意阴阳性）。', model: 'Ma chambre est petite. Elle est belle. Shanghai est une grande ville.' },
  },
  {
    id: 'c11', emoji: '🗓️', title: '明天我要……', sub: '近将来时 aller + 动词', can: '能说出周末和明天的计划，约朋友一起做事', scene: 'presenter', grammar: ['g-aller'],
    words: ['aller', 'demain', 'voir'],
    newWords: [
      ['visiter', 'vi.zi.te', '参观', 'Je vais visiter le Louvre.', '我要去参观卢浮宫。', 'course'],
      ['le week-end', 'lə wi.kɛnd', '周末', 'Ce week-end, je vais à Lyon.', '这个周末我去里昂。', 'course'],
      ['le musée', 'lə my.ze', '博物馆', 'Le musée est fermé.', '博物馆关门了。', 'course'],
      ['le film', 'lə film', '电影', 'On va voir un film ?', '我们去看电影吗？', 'course'],
    ],
    dialogue: [
      ['Léa', "Qu'est-ce que tu vas faire ce week-end ?", '这个周末你打算做什么？'],
      ['我', 'Je vais visiter le Louvre. Et toi ?', '我要去参观卢浮宫。你呢？'],
      ['Léa', 'Je vais aller à Lyon. Demain, on va voir un film ?', '我要去里昂。明天我们去看电影吗？'],
      ['我', 'Bonne idée ! On va manger ensemble avant ?', '好主意！之前一起吃饭吗？'],
      ['Léa', "D'accord. Je vais réserver une table.", '好的。我去订位。'],
      ['我', 'Super, à demain !', '太好了，明天见！'],
    ],
    sentences: [['Je vais visiter le Louvre.', '我要去参观卢浮宫。'], ['On va voir un film ?', '我们去看电影吗？'], ["Qu'est-ce que tu vas faire ?", '你打算做什么？'], ['Demain, je vais travailler.', '明天我要工作。']],
    cloze: [
      ['Je ___ visiter le musée.', ['vais', 'vas', 'va'], 0, '我要去参观博物馆。', 'je → vais'],
      ['Nous ___ manger ensemble.', ['allons', 'allez', 'vont'], 0, '我们要一起吃饭。', 'nous → allons'],
      ['Elle va ___ un film.', ['voir', 'vois', 'voit'], 0, '她要去看电影。', 'aller + 动词原形'],
    ],
    discover: [{ q: '"我明天要工作"：aller 后面的动词用什么形式？', opts: ['原形：Je vais travailler.', '变位：Je vais travaille.'], a: 0, why: '近将来时 = aller 变位 + 动词原形。这是口语里最常用的将来时。' }],
    write: { prompt: '写写你这个周末的计划（3 句，用 je vais + 动词原形）。', model: 'Ce week-end, je vais visiter un musée. Je vais manger avec des amis. Dimanche, je vais regarder un film.' },
  },
  {
    id: 'c12', emoji: '📸', title: '昨天我……', sub: '复合过去时', can: '能讲昨天、上周末做过的事', scene: 'presenter', grammar: ['g-pc'],
    words: ['hier'],
    newWords: [
      ['le restaurant', 'lə ʁɛs.tɔ.ʁɑ̃', '餐厅', "J'ai mangé au restaurant.", '我在餐厅吃了饭。', 'course'],
      ['visité', 'vi.zi.te', '参观了（visiter 的过去分词）', "J'ai visité Paris.", '我参观了巴黎。', 'course'],
      ['mangé', 'mɑ̃.ʒe', '吃了（manger 的过去分词）', 'Tu as mangé ?', '你吃了吗？', 'course'],
      ['fini', 'fi.ni', '完成了（finir 的过去分词）', "J'ai fini.", '我做完了。', 'course'],
      ['ce matin', 'sə ma.tɛ̃', '今天早上', "Ce matin, j'ai travaillé.", '今天早上我工作了。', 'course'],
    ],
    dialogue: [
      ['Paul', "Qu'est-ce que tu as fait hier ?", '你昨天做了什么？'],
      ['我', "J'ai visité le musée d'Orsay.", '我参观了奥赛博物馆。'],
      ['Paul', 'Super ! Et le soir ?', '真棒！那晚上呢？'],
      ['我', "J'ai mangé au restaurant avec Léa.", '我和莱娅在餐厅吃了饭。'],
      ['Paul', 'Vous avez aimé ?', '你们喜欢吗？'],
      ['我', 'Oui, nous avons beaucoup aimé !', '喜欢，我们很喜欢！'],
    ],
    sentences: [["J'ai visité le musée.", '我参观了博物馆。'], ['Tu as mangé ?', '你吃了吗？'], ['Nous avons beaucoup aimé.', '我们很喜欢。'], ["Je n'ai pas compris.", '我没听懂。']],
    cloze: [
      ["Hier, j'___ visité Paris.", ['ai', 'suis', 'as'], 0, '昨天我参观了巴黎。', '大多数动词用 avoir + 过去分词'],
      ['Nous avons ___ au restaurant.', ['mangé', 'manger', 'mange'], 0, '我们在餐厅吃了饭。', '过去分词：manger → mangé'],
      ["Je n'ai ___ compris.", ['pas', 'ne', 'non'], 0, '我没听懂。', 'ne … pas 夹住 avoir'],
    ],
    discover: [{ q: 'parler 的过去分词是？', opts: ['parlé', 'parlu', 'parlait'], a: 0, why: '-er 动词：去掉 -er 加 é。parler → parlé，读音和原形一样。' }],
    write: { prompt: "写写你昨天做了什么（3 句，用 j'ai + 过去分词）。", model: "Hier, j'ai travaillé. J'ai mangé avec un ami. Le soir, j'ai regardé un film." },
  },
];
