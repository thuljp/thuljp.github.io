# 语境 · 核心课程大纲（法语 / 日语，A1 → B2，各 80 课）

本文件是课程内容的"施工图"。每一课的内容写在 `js/data/course/<文件>.js` 里，格式见第二部分。
已有的第 1–12 课（`js/data/course_fr.js`、`js/data/course_ja.js`）是格式和质量的样板，写新课前务必通读对应语言的那个文件。

---

## 一、总体设计

| 阶段 | 法语（CEFR） | 日语（大致对应 JLPT） | 课数 |
|---|---|---|---|
| A1 | 生存交际：介绍、点餐、问路、时间、日常 | N5 | 24 |
| A2 | 讲过去和将来、比较、代词、请求与建议 | N4 | 20 |
| B1 | 表达观点、假设、虚拟式、复杂从句 | N3 | 20 |
| B2 | 论证、书面语、细微语气、职场 | N2 | 16 |

每一课 = 一个情景（或一篇短文）+ 1–2 个语法点 + 一组主题词 + 练习 + 写作。
写课时的原则：

1. **干货**：语法讲解要讲清"规则 + 例外 + 中国人最常犯的错"，配表格；不要空话。
2. **真实自然**：对话和课文必须是母语者真会说的话，符合当前级别；新语法点在对话里至少出现 2 次。
3. **只用学过的**：尽量只用本课和之前课的语法；生词控制在 newWords 里列出的范围（常见的功能词除外）。
4. **由浅入深**：A1 每句短；B1/B2 句子更长、对话更长或改成短文（说话人写空字符串 `''` 表示旁白/课文段落）。
5. **中文讲解**：所有讲解、翻译、提示都用简体中文。

### 词汇量目标

| 级别 | 每课 newWords | 对话 / 课文行数 | 课文句 sentences | 填空 cloze | 发现规律 discover |
|---|---|---|---|---|---|
| A1 | 4–7 | 6–8 | 4 | 4 | 1 |
| A2 | 6–9 | 7–9 | 4–5 | 5 | 1–2 |
| B1 | 7–10 | 8–10 | 5 | 5 | 1–2 |
| B2 | 8–12 | 8–12 | 5 | 5–6 | 1–2 |

---

## 二、文件格式

每个文件是一个 ES 模块，导出三样东西：

```js
export const grammar = [ /* 本文件新增的语法点 */ ];
export const CAT = { /* 语法点 id → 类别名（必须用下面规定的类别） */ };
export const units = [ /* 按顺序排列的课 */ ];
```

### 语法点

```js
{ id: 'g-imparfait', title: '未完成过去时：过去的状态和习惯',
  body: `<p>…</p><table>…</table><ul>…</ul>`,     // HTML，只用 p b i table tr th td ul ol li br
  ex: [['Quand j\'étais petit, j\'habitais à Lyon.', '我小时候住在里昂。'], …] }   // 3–4 个例句
```

### 一课

```js
{
  id: 'a2-02',                  // 用大纲里给定的 id
  emoji: '🕰️',                  // 一个 emoji
  title: '小时候……',            // 法语课用中文标题；日语课可以用日语标题（像样板那样）
  sub: '未完成过去时',          // 语法/主题副标题
  can: '能描述小时候的生活和过去的习惯',   // "学完你能……"
  scene: null,                  // 一律写 null（只有样板课关联内置场景）
  grammar: ['g-imparfait'],     // 本课语法点 id（本文件里定义，或之前已存在）
  words: [],                    // 可选：引用词库里已有的词（写法即 id，必须和 js/data/fr.js / ja.js 的 words 第一项完全一致），没把握就留空
  newWords: [ … ],              // 本课新词，格式见下
  dialogue: [ … ],
  sentences: [ … ],             // 课文中的关键句，用于听力、拼句子、复习卡
  cloze: [ … ],
  discover: [{ q: '…', opts: ['正确项', '干扰项', …], a: 0, why: '…' }],
  write: { prompt: '写作题（中文）', model: '参考范文（目标语）' },
}
```

#### 法语

- newWords：`[词, 音标(不带斜杠，音节用点分), 中文, 例句, 例句中文, 'course']`
  名词带冠词（`'le travail'`、`"l'école (f.)"`），形容词写阴阳性（`'heureux · heureuse'`），动词写原形。
- dialogue：`[说话人, 法文, 中文]`，学习者本人写 `'我'`；旁白/课文写 `''`。
- sentences：`[法文, 中文]`
- cloze：`[带一个 ___ 的法文句子, [选项…3 个], 正确下标, 中文翻译, 说明为什么]`
- 法语标点：? ! : ; 前面有空格（`Tu viens ?`），和样板一致。

#### 日语

- newWords：`[词, 读音(全平假名，不加空格), 中文, 例句, 例句读音, 例句中文, 'course']`
- dialogue：`[说话人, 日文, 读音, 中文]`
- sentences：`[日文, 读音, 中文]`
- cloze：`[带一个 ___ 的句子, [选项…3 个], 正确下标, 中文, 说明, 读音]`
  A1 课（样板）的填空句写成假名分词；**A2 起填空句用正常的汉字假名混写**，第 6 项写整句读音（___ 处读音里也写 ___）。
- **读音规则（非常重要，程序会用它拼句子、生成罗马音）**：
  全部用平假名（外来语也写平假名，如 こーひー）；按词用半角空格分开，助词单独成词；句末标点紧跟前一个词。
  例：`'わたし は きのう ともだち と えいが を みました。'`
  助词 は/へ/を 按写法写（は 不写成 わ）。数字也写成平假名读音。
- 日文里的汉字以常用汉字为准；B1/B2 可以正常使用汉字。

### 类别（CAT 只能用这些）

法语：`动词变位`、`时态与语气`、`代词`、`名词与形容词`、`句型`、`从句与连接`、`数字与时间`、`介词`、`表达与语用`
日语：`基础句型`、`助词`、`动词活用`、`时态与体`、`形容词与愿望`、`条件与假设`、`授受与敬语`、`推测与传闻`、`复合句型`、`书面与文体`、`数字`

### 自检

写完运行：`node docs/check_course.mjs <文件路径>`，必须 0 错误。它会检查格式、id、读音、填空、拼句子等。

---

## 三、法语大纲

样板课 c1–c12 已存在。A1 的新课插在它们之间，最终顺序：

| # | id | 标题 / 主题 | 语法点 id：内容 |
|---|---|---|---|
| 1 | c1 | 你好！初次见面 | （已有）|
| 2 | c2 | 我是…… | （已有）|
| 3 | c3 | 这是什么？ | （已有）|
| 4 | c4 | 有：年龄和家人 | （已有）|
| 5 | a1-13 | 我的家人 · 所有格 | g-poss：主有形容词 mon/ma/mes, ton, son, notre, votre, leur（元音前 mon amie）|
| 6 | c5 | 我想要…… | （已有）|
| 7 | a1-14 | 数到 100 · 价格和电话 | g-num100：21–100，soixante-dix / quatre-vingts / quatre-vingt-dix，et un，电话号码两位一读 |
| 8 | c6 | 我喜欢…… | （已有）|
| 9 | c7 | 不……？提问 | （已有）|
| 10 | a1-15 | 在市场 · 部分冠词 | g-partitif：du/de la/de l'/des；数量 un kilo de, beaucoup de, un peu de；否定 pas de |
| 11 | a1-16 | 一日三餐 · prendre / boire | g-prendre：prendre、boire、manger 的变位；le petit-déjeuner/déjeuner/dîner |
| 12 | c8 | 问路与出行 | （已有）|
| 13 | a1-17 | 来自哪里 · venir 与国家 | g-venir：venir 变位，venir de；g-pays：en France / au Japon / aux États-Unis / à Paris |
| 14 | c9 | 几点了？ | （已有）|
| 15 | a1-18 | 日期、月份和季节 | g-date：le 14 juillet, le premier mai, en mars, au printemps / en été；年份读法 |
| 16 | a1-19 | 天气与爱好 · faire | g-faire：faire 变位；il fait beau/chaud/froid, il pleut；faire du sport / de la musique |
| 17 | c10 | 描述：大的、美的 | （已有）|
| 18 | a1-20 | 买衣服 · 指示形容词 | g-ce：ce/cet/cette/ces；quel/quelle 疑问；颜色、尺码 |
| 19 | a1-21 | 我的家 · 方位介词 | g-lieu：sur, sous, devant, derrière, à côté de, entre, en face de, dans；房间家具 |
| 20 | a1-22 | 我的一天 · 代词式动词 | g-pronominal：se lever, se coucher, s'habiller；me/te/se/nous/vous/se；否定 je ne me lève pas |
| 21 | a1-23 | 能、想、必须 · 情态动词 | g-modaux：vouloir, pouvoir, devoir 变位 + 原形 |
| 22 | c11 | 明天我要…… | （已有）|
| 23 | c12 | 昨天我…… | （已有，avoir 型复合过去时）|
| 24 | a1-24 | 周末去了哪 · être 型复合过去时 | g-pc-etre：用 être 的 14 个动作动词（aller, venir, partir, arriver, rester, tomber, naître…），配合性数 |

### A2（a2-01 … a2-20）

| id | 标题 / 主题 | 语法点 id：内容 |
|---|---|---|
| a2-01 | 我知道 · 我认识 | g-ir-re：-ir 规则动词（finir）与 -re 动词（attendre）；g-savoir：savoir vs connaître |
| a2-02 | 小时候 | g-imparfait：未完成过去时构成与用法（状态、习惯、背景）|
| a2-03 | 那天发生了什么 | g-pc-imp：复合过去时 vs 未完成过去时（讲故事：背景 vs 事件）|
| a2-04 | 我买了它 | g-cod：直接宾语代词 me te le la nous vous les，位置（含复合过去时配合 je l'ai vue）|
| a2-05 | 给他打电话 | g-coi：间接宾语代词 me te lui nous vous leur；téléphoner/parler/donner à |
| a2-06 | 我去过那里 · y 和 en | g-y-en：代词 y（地点、à + 东西）与 en（de + 东西、数量）|
| a2-07 | 更好、最好 | g-comparatif：plus/moins/aussi … que；meilleur/mieux；最高级 le plus |
| a2-08 | 十年以后 | g-futur：简单将来时（规则 + être/avoir/aller/faire/venir/pouvoir 不规则词根）；quand + 将来时 |
| a2-09 | 我推荐的那家店 | g-relatif：关系代词 qui / que / où |
| a2-10 | 看医生 | g-mal：avoir mal à；g-il-faut：il faut + 原形 / 名词；身体部位、症状 |
| a2-11 | 经常、有时、从不 | g-adverbe：-ment 副词构成（rapide→rapidement, évident→évidemment）与位置；频率副词 |
| a2-12 | 什么都没有 | g-neg2：ne … jamais / plus / rien / personne / que |
| a2-13 | 哪一个？ | g-quel：quel 疑问形容词；lequel/laquelle 疑问代词；倒装疑问句 Où habitez-vous ? |
| a2-14 | 是我！ | g-tonique：重读人称代词 moi toi lui elle nous vous eux elles；c'est … qui 强调；chez moi, avec lui |
| a2-15 | 刚刚、正在 | g-recent：venir de + 原形（近过去时），être en train de（正在），être sur le point de |
| a2-16 | 旅行预订 | g-duree：depuis / il y a / pendant / dans / en 表示时间；订酒店、火车 |
| a2-17 | 昨天我很早起床 | g-pc-pron：代词式动词的复合过去时（je me suis levé(e)，配合）|
| a2-18 | 你应该…… | g-cond：条件式现在时构成；礼貌请求（pourriez-vous）、建议（tu devrais）、愿望（j'aimerais）|
| a2-19 | 找工作 | g-possessif：主有代词 le mien, la tienne, les leurs…；职业、简历词汇 |
| a2-20 | 写一封邮件 | g-tout：tout/toute/tous/toutes 的用法；书信格式（Madame, Monsieur / Cordialement / Bien à vous）|

### B1（b1-01 … b1-20）

| id | 标题 / 主题 | 语法点 id：内容 |
|---|---|---|
| b1-01 | 必须做的事 | g-subj：虚拟式现在时构成（规则 + être/avoir/aller/faire/pouvoir/savoir/vouloir）；il faut que |
| b1-02 | 我希望你来 | g-subj2：虚拟式用于愿望、情感、怀疑：je veux que, je suis content que, je doute que；同主语用原形 |
| b1-03 | 如果我中了彩票 | g-si-imp：si + 未完成过去时，条件式（假设现在）|
| b1-04 | 那时他已经走了 | g-pqp：愈过去时 plus-que-parfait |
| b1-05 | 等你回来的时候 | g-fut-ant：先将来时 futur antérieur；quand / dès que + 先将来时 |
| b1-06 | 我需要的东西 | g-dont：关系代词 dont；ce qui / ce que / ce dont |
| b1-07 | 我说的那个原因 | g-lequel：复合关系代词 lequel, auquel, duquel, avec qui, pour laquelle |
| b1-08 | 我把它给了他 | g-double：双宾语代词顺序 me/te/se/nous/vous > le/la/les > lui/leur > y > en；命令式 donne-le-moi |
| b1-09 | 边走边听 | g-gerondif：现在分词与副动词 en + -ant（同时、方式、条件）|
| b1-10 | 这座桥建于…… | g-passif：被动语态（être + 过去分词，par / de），各时态 |
| b1-11 | 他说他会来 | g-indirect：间接引语（现在时主句）：dire que, demander si, demander ce que, 命令变 de + 原形 |
| b1-12 | 她说她很累 | g-concordance：间接引语时态配合（主句过去时：现在→未完成，过去→愈过去，将来→条件式）|
| b1-13 | 因为……所以 | g-cause：原因与结果 parce que, puisque, car, comme, grâce à, à cause de；donc, alors, c'est pourquoi, si bien que |
| b1-14 | 为了、尽管 | g-but：目的与让步 pour / pour que + 虚拟式, afin de；bien que + 虚拟式, même si, malgré |
| b1-15 | 在……之前 / 之后 | g-temps：avant de + 原形 / avant que + 虚拟式, après + 不定式过去式 (après avoir mangé), pendant que, dès que, jusqu'à ce que |
| b1-16 | 我认为…… | g-opinion：表达观点 je pense que / je trouve que（直陈式）vs je ne pense pas que（虚拟式）；赞成、反对、委婉表达 |
| b1-17 | 新闻标题 | g-nominal：名词化（augmenter → l'augmentation）；新闻词汇 |
| b1-18 | 每个人都…… | g-indef：不定代词与形容词 quelqu'un, quelque chose, chacun, aucun, plusieurs, certains, n'importe qui/quoi |
| b1-19 | 我本该…… | g-cond-passe：条件式过去时：后悔、责备、未证实的消息（j'aurais dû, tu aurais pu, selon…il y aurait eu）|
| b1-20 | 求职面试 | g-registre：正式语域：vous 的礼貌套路、正式邮件、面试表达（综合复习）|

### B2（b2-01 … b2-16）

| id | 标题 / 主题 | 语法点 id：内容 |
|---|---|---|
| b2-01 | 我很高兴你来过 | g-subj-passe：虚拟式过去时 |
| b2-02 | 要是当初…… | g-si-all：si 从句的三类（si + 现在/将来；si + 未完成/条件式；si + 愈过去/条件式过去）及混合 |
| b2-03 | 读小说 | g-ps：简单过去时（书面叙事，识读为主：il fut, elle alla, ils eurent）|
| b2-04 | 然而、尽管 | g-concession：高级让步与对立 quoique, alors que, tandis que, en dépit de, pourtant, néanmoins, toutefois |
| b2-05 | 书面风格 | g-style：名词化与书面风格；被动代替主动；减少 on 和 ça |
| b2-06 | 完成之后 | g-participe：过去分词从句与复合分词（ayant fini, étant arrivé）；独立分词结构 |
| b2-07 | 我让人修了车 | g-faire-faire：使役 faire + 原形、se faire + 原形、laisser + 原形 |
| b2-08 | 正是这一点 | g-mise-relief：强调结构 c'est … que / qui，ce qui …, c'est …；ce que je préfère, c'est … |
| b2-09 | 他一定是忘了 | g-modal-nuance：devoir/pouvoir 的推测义（il a dû oublier, il se peut que + 虚拟式），条件式表推测 |
| b2-10 | 日常口语 | g-oral：口语特征：省略 ne、on 代 nous、ça、口语疑问、常见俚语和 verlan（ouf, relou），与书面对照 |
| b2-11 | 论证文 | g-argument：论证连接词 tout d'abord, en outre, de plus, d'une part … d'autre part, en revanche, en somme, par conséquent |
| b2-12 | 万一…… | g-hypothese：假设与条件 au cas où + 条件式, à condition que, à moins que, pourvu que, en supposant que |
| b2-13 | 地道表达 | g-expressions：常用习语与固定表达（avoir le cafard, poser un lapin, coûter les yeux de la tête…）|
| b2-14 | 读评论文章 | g-impersonnel：无人称结构与客观表达 il est nécessaire que, il s'agit de, il convient de, force est de constater |
| b2-15 | 会议与谈判 | g-nuance：职场委婉：缓和语气、提建议、表达不同意（il me semble que, je me permets de, sauf erreur de ma part）|
| b2-16 | 议论：科技与社会 | g-synthese：B2 议论文综合：立论、反驳、结论（复习虚拟式、条件式、让步）|

---

## 四、日语大纲

样板课 c1–c12 已存在，A1 新课排在其后。

| # | id | 标题 / 主题 | 语法点 id：内容 |
|---|---|---|---|
| 1–12 | c1…c12 | （已有）| |
| 13 | a1-13 | 家族 | g-family：家族称呼（自己家 はは/ちち vs 别人家 おかあさん/おとうさん），人数 ～人（ひとり、ふたり、さんにん），～がいます |
| 14 | a1-14 | 何時に起きますか | g-time：～時～分、曜日、何月何日（特殊读法 ついたち、ふつか、はつか），～から～まで，時間に |
| 15 | a1-15 | いくつありますか | g-counter：量词 ～枚・～本・～冊・～台・～匹・～個（音变 いっぽん、さんぼん、ろっぽん）|
| 16 | a1-16 | どちらが好きですか | g-hikaku：比较 AはBより～、AとBとどちらが～、Aのほうが～、～の中で～が一番 |
| 17 | a1-17 | 動詞のグループ | g-jisho：动词三类与辞书形；～ことができます；趣味は～ことです |
| 18 | a1-18 | 今、何をしていますか | g-teiru：～ています（进行；状态：結婚しています、住んでいます、知っています）|
| 19 | a1-19 | 写真を撮ってもいいですか | g-temoii：～てもいいです・～てはいけません；～てから |
| 20 | a1-20 | 薬を飲まなければなりません | g-nai：ない形构成；～ないでください；～なければなりません；～なくてもいいです |
| 21 | a1-21 | 富士山に登ったことがあります | g-ta：た形构成；～たことがあります；～たり～たりします |
| 22 | a1-22 | 友達と話す | g-futsu：普通形（简体）全部变化；朋友之间的说话方式（だ 的省略、疑问用升调）|
| 23 | a1-23 | 明日は雨だと思います | g-omou：普通形 + と思います；～と言いました；～でしょう |
| 24 | a1-24 | 昨日買った本 | g-meishi：名词修饰从句（私が昨日買った本、眼鏡をかけている人），从句里 が→の |

### A2（≈N4，a2-01 … a2-20）

| id | 标题 / 主题 | 语法点 id：内容 |
|---|---|---|
| a2-01 | プレゼント | g-ageru：あげる・もらう・くれる（视角）|
| a2-02 | 手伝ってくれました | g-tekureru：～てあげる・～てもらう・～てくれる |
| a2-03 | 漢字が読めます | g-kanou：可能形（読める、食べられる、来られる、できる），可能形前用 が |
| a2-04 | 来年、留学しようと思っています | g-ikou：意向形；～ようと思っています；～つもりです；～予定です |
| a2-05 | 子供のとき | g-toki：～とき（时态：日本へ行くとき / 行ったとき）|
| a2-06 | ボタンを押すと | g-to：条件 と（必然结果、发现）|
| a2-07 | 安ければ買います | g-ba：条件 ば（ば形构成）；～ばいいですか |
| a2-08 | 雨だったら | g-tara：条件 たら（假设、之后）；なら（话题、建议）|
| a2-09 | 雨が降りそうです | g-sou1：样态 ～そうです（看起来要……）；おいしそう、よさそう |
| a2-10 | 雨が降るそうです | g-sou2：传闻 ～そうです；～らしい |
| a2-11 | 風邪のようです | g-you：～ようです・～みたいです（推测、比喻）|
| a2-12 | 宿題を忘れてしまいました | g-shimau：～てしまう（完成、遗憾，口语ちゃう）；～ておく（事先做好）|
| a2-13 | 窓が開いています | g-jitadoushi：自动词 / 他动词成对（開く/開ける）；～ている（状态）vs ～てある |
| a2-14 | 音楽を聞きながら | g-nagara：～ながら；～し、～し（列举理由）|
| a2-15 | 合格するために | g-tame：～ために（目的）vs ～ように（目标，接可能形/否定）|
| a2-16 | 先生に褒められました | g-ukemi：被动形（直接被动、受害被动 雨に降られた）|
| a2-17 | 子供に野菜を食べさせます | g-shieki：使役形（让、允许）；～させてください |
| a2-18 | 社長がいらっしゃいます | g-sonkei：尊敬语（特殊动词 いらっしゃる、召し上がる、おっしゃる；お～になる；～られる）|
| a2-19 | お持ちします | g-kenjou：谦让语（伺う、申す、参る、いたす；お～します）|
| a2-20 | アルバイトの面接 | g-keigo-mix：敬语综合（打电话、面试、店员用语 ～でございます）|

### B1（≈N3，b1-01 … b1-20）

| id | 标题 / 主题 | 语法点 id：内容 |
|---|---|---|
| b1-01 | 残業させられた | g-shiekiukemi：使役被动（させられる / 口语 される）|
| b1-02 | 毎日運動するようにしています | g-youni：～ようにする・～ようになる |
| b1-03 | 引っ越すことにしました | g-kotoni：～ことにする・～ことになる・～ことにしている |
| b1-04 | 来るはずです | g-hazu：～はずだ・～はずがない・～わけだ |
| b1-05 | 謝るべきです | g-beki：～べきだ・～べきではない；～ほうがいい 对比 |
| b1-06 | 来たばかり | g-bakari：～たばかり・～ばかり（尽是）・～ばかりでなく |
| b1-07 | 今、出かけるところです | g-tokoro：～るところ・～ているところ・～たところ |
| b1-08 | 頑張ったのに | g-noni：～のに（转折不满）；～のに（目的 この箱は物を入れるのに便利）|
| b1-09 | 嫌いなわけではない | g-wake：～わけではない・～わけにはいかない・～わけがない |
| b1-10 | 環境について | g-nitsuite：～について・～に対して・～によって（手段/原因/被动者/因…而异）|
| b1-11 | 私にとって | g-toshite：～として・～にとって・～にしては |
| b1-12 | 水さえあれば | g-sae：～さえ（～ば）・～こそ・～しか～ない・～だけ |
| b1-13 | 若いうちに | g-uchini：～うちに・～間（に）・～たびに・～最中に |
| b1-14 | 忘れっぽい | g-ppoi：～っぽい・～がち・～気味・～やすい/にくい |
| b1-15 | たとえ雨でも | g-temo：～ても・たとえ～ても・疑问词 + ても（いくら～ても）|
| b1-16 | 先生のおかげで | g-okage：～おかげで・～せいで・～ため（に）（原因）|
| b1-17 | 練習すればするほど | g-hodo：～ば～ほど・～につれて・～にしたがって |
| b1-18 | 心配することはない | g-koto：～ことはない・～ものだ（感慨、常理）・～ことだ（建议）|
| b1-19 | 新聞を読む | g-dearu：である体与书面语；新闻常见表达（～とみられる、～とされる）|
| b1-20 | ビジネスメール | g-business：商务邮件格式与表达（お世話になっております、～いただけますでしょうか、ご確認ください）|

### B2（≈N2，b2-01 … b2-16）

| id | 标题 / 主题 | 语法点 id：内容 |
|---|---|---|
| b2-01 | 値段のわりに | g-warini：～わりに・～にしては・～くせに |
| b2-02 | 彼に違いない | g-chigainai：～に違いない・～に決まっている・～かねない・～おそれがある |
| b2-03 | 行かざるを得ない | g-zaruwoenai：～ざるを得ない・～しかない・～ほかない・～ないわけにはいかない |
| b2-04 | 努力したものの | g-monono：～ものの・～にもかかわらず・～とはいえ・～ながら（も）|
| b2-05 | よく考えた上で | g-uede：～上で・～上は・～以上（は）・～からには |
| b2-06 | 調査に基づいて | g-motozuite：～に基づいて・～を通じて・～をめぐって・～に沿って |
| b2-07 | 笑わずにはいられない | g-zuniha：～ずにはいられない・～てたまらない・～てならない・～てしょうがない |
| b2-08 | 増えつつある | g-tsutsu：～つつ（も）・～つつある・～一方だ |
| b2-09 | 便利な反面 | g-hanmen：～反面・～一方で・～かわりに |
| b2-10 | どんなに嬉しいことか | g-kotoka：～ことか・～ものか・～ものなら・～ものだから |
| b2-11 | 夏はビールに限る | g-nikagiru：～に限る・～に限らず・～に限って・～とは限らない |
| b2-12 | 準備ができ次第 | g-shidai：～次第・～をきっかけに・～を契機に・～に先立って |
| b2-13 | 冗談はともかく | g-tomokaku：～はともかく・～はもちろん・～抜きで・～をはじめ |
| b2-14 | 論説文を読む | g-ronsetsu：论说文结构与常见表达（～と言えよう、～のではないだろうか、～に他ならない）|
| b2-15 | 会議で意見を言う | g-keigo2：商务敬语进阶与委婉表达（～させていただく、恐れ入りますが、～かねます）|
| b2-16 | 総合：社会問題 | g-n2：N2 综合读解与议论（复习本阶段句型）|
