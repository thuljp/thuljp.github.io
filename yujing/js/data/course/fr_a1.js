// 法语核心课程 A1 新课：a1-13 … a1-24（插在样板课 c1–c12 之间）
// 格式见 docs/SYLLABUS.md 第二部分

export const grammar = [
  {
    id: 'g-poss', title: '主有形容词：我的、你的、他的',
    body: `<p>主有形容词放在名词前面，代替冠词：<b>le</b> père → <b>mon</b> père（我的父亲）。</p>
<table><tr><th>拥有者</th><th>+ 阳性单数</th><th>+ 阴性单数</th><th>+ 复数</th></tr>
<tr><td>我的</td><td>mon père</td><td>ma mère</td><td>mes parents</td></tr>
<tr><td>你的</td><td>ton père</td><td>ta mère</td><td>tes parents</td></tr>
<tr><td>他的 / 她的</td><td>son père</td><td>sa mère</td><td>ses parents</td></tr>
<tr><td>我们的</td><td colspan="2">notre père / notre mère</td><td>nos parents</td></tr>
<tr><td>您的；你们的</td><td colspan="2">votre père / votre mère</td><td>vos parents</td></tr>
<tr><td>他们的 / 她们的</td><td colspan="2">leur père / leur mère</td><td>leurs parents</td></tr></table>
<p><b>最关键的规则</b>：用 mon/ma 还是 son/sa，看的是<b>后面那个名词</b>的阴阳性，<b>不看拥有者</b>是男是女。</p>
<ul><li>Léa 的爸爸 → <b>son</b> père（père 是阳性，虽然 Léa 是女生）</li>
<li>Paul 的妈妈 → <b>sa</b> mère（mère 是阴性，虽然 Paul 是男生）</li>
<li>所以 son / sa 既可以是"他的"也可以是"她的"，要靠上下文判断。</li></ul>
<p><b>元音前的例外</b>：阴性名词如果以元音或哑音 h 开头，ma/ta/sa 要换成 <b>mon/ton/son</b>，为了好读：<b>mon</b> amie（我的女性朋友）、<b>son</b> école（他的学校）。</p>
<p>复数 mes/tes/ses/nos/vos/leurs 遇到元音要连读：mes‿amis [me.za.mi]。</p>
<p><b>中国人常犯的错</b>：① 按拥有者选词："她的爸爸"说成 ✗ sa père；② ✗ ma amie → ✓ mon amie；③ leur 和 leurs 混用：他们<b>一个</b>孩子是 leur enfant，<b>几个</b>孩子是 leurs enfants。</p>`,
    ex: [['Mon père est ingénieur.', '我爸爸是工程师。'], ["Léa et son frère sont étudiants.", '莱娅和她哥哥是学生。'], ["Mon amie s'appelle Anne.", '我的（女性）朋友叫安娜。'], ['Ils ont deux enfants. Leurs enfants sont petits.', '他们有两个孩子。他们的孩子还小。']],
  },
  {
    id: 'g-num100', title: '数字 21–100：价格和电话号码',
    body: `<p><b>21–69</b>：十位 + 个位，中间加连字符。只有 1 比较特别，用 <b>et un</b>：</p>
<table><tr><td>21 vingt <b>et</b> un</td><td>22 vingt-deux</td><td>29 vingt-neuf</td></tr>
<tr><td>31 trente <b>et</b> un</td><td>40 quarante</td><td>45 quarante-cinq</td></tr>
<tr><td>50 cinquante</td><td>60 soixante</td><td>61 soixante <b>et</b> un</td></tr></table>
<p><b>70–99</b> 是法语数字的难点，要用"加法"和"乘法"思考：</p>
<table><tr><th>数字</th><th>法语</th><th>直译</th></tr>
<tr><td>70</td><td>soixante-dix</td><td>60 + 10</td></tr>
<tr><td>71</td><td>soixante <b>et</b> onze</td><td>60 + 11</td></tr>
<tr><td>75</td><td>soixante-quinze</td><td>60 + 15</td></tr>
<tr><td>80</td><td>quatre-vingt<b>s</b></td><td>4 × 20</td></tr>
<tr><td>81</td><td>quatre-vingt-un（没有 et）</td><td>4 × 20 + 1</td></tr>
<tr><td>90</td><td>quatre-vingt-dix</td><td>4 × 20 + 10</td></tr>
<tr><td>99</td><td>quatre-vingt-dix-neuf</td><td>4 × 20 + 19</td></tr>
<tr><td>100</td><td>cent</td><td></td></tr></table>
<ul><li>80 单独出现时 quatre-vingt<b>s</b> 带 s；后面再接数字就去掉 s：quatre-vingt-deux。</li>
<li>et 只出现在 21、31、41、51、61、71；81 和 91 不加 et。</li>
<li>比利时和瑞士说 septante（70）、nonante（90），听到别慌，但在法国用上面的说法。</li></ul>
<p><b>电话号码</b>：法国手机号是 10 位，以 06 或 07 开头，<b>两位两位地读</b>：06 71 84 52 99 → zéro six, soixante et onze, quatre-vingt-quatre, cinquante-deux, quatre-vingt-dix-neuf。</p>
<p><b>中国人常犯的错</b>：① 一位一位地读电话号码，法国人反而听不懂；② 听到 quatre-vingt 就停，没等后面的 -dix-sept，结果 97 听成 80；③ 21 说成 ✗ vingt-un。</p>`,
    ex: [['Ça fait soixante-quinze euros.', '一共七十五欧元。'], ["Mon grand-père a quatre-vingt-deux ans.", '我爷爷八十二岁。'], ["Mon numéro, c'est le zéro six, quarante et un, soixante-dix, quatre-vingts, quatorze.", '我的号码是 06 41 70 80 14。'], ['Vingt et un euros, s\'il vous plaît.', '请付二十一欧元。']],
  },
  {
    id: 'g-partitif', title: '部分冠词：du / de la / des 和数量表达',
    body: `<p>中文说"我买面包""我喝水"，名词前面什么都不加。法语<b>不能光秃秃地放名词</b>：说"一些、一点（数不清的量）"要用部分冠词。</p>
<table><tr><th>阳性</th><th>阴性</th><th>元音前</th><th>复数</th></tr>
<tr><td><b>du</b> fromage</td><td><b>de la</b> viande</td><td><b>de l'</b>eau</td><td><b>des</b> pommes</td></tr></table>
<p><b>le 和 du 的区别</b>：</p>
<ul><li>说喜好、泛指"这一类东西"用定冠词：J'aime <b>le</b> fromage.（我喜欢奶酪。）</li>
<li>说吃、买、要"一些"用部分冠词：Je mange <b>du</b> fromage.（我吃点奶酪。）</li>
<li>能数的单个东西用 un/une：<b>une</b> pomme（一个苹果）。</li></ul>
<p><b>数量词后面只用 de</b>（元音前 d'），不再加冠词：</p>
<table><tr><td>un kilo <b>de</b> tomates</td><td>一公斤西红柿</td></tr>
<tr><td>beaucoup <b>de</b> fromage</td><td>很多奶酪</td></tr>
<tr><td>un peu <b>de</b> vin</td><td>一点葡萄酒</td></tr>
<tr><td>une bouteille <b>d'</b>eau</td><td>一瓶水</td></tr></table>
<p><b>否定句里 du / de la / des / un / une 都变成 de</b>：Je ne mange pas <b>de</b> viande. / Il n'y a pas <b>d'</b>eau.（但 c'est 的否定不变：Ce n'est pas du fromage.）</p>
<p><b>中国人常犯的错</b>：① 漏掉冠词 ✗ Je mange pain；② ✗ un kilo des tomates → ✓ un kilo de tomates；③ ✗ Je n'ai pas du pain → ✓ Je n'ai pas de pain。</p>`,
    ex: [["Je voudrais du pain et de la confiture.", '我想要点面包和果酱。'], ["Un kilo de pommes, s'il vous plaît.", '请给我一公斤苹果。'], ["Il n'y a pas de lait.", '没有牛奶了。'], ["J'aime le fromage. Je mange beaucoup de fromage.", '我喜欢奶酪。我吃很多奶酪。']],
  },
  {
    id: 'g-prendre', title: 'prendre、boire、manger 的变位',
    body: `<p>吃喝离不开这三个动词。prendre 和 boire 不规则，manger 是 -er 动词但有个小陷阱。</p>
<table><tr><th>prendre 拿；吃；喝；乘坐</th><th>boire 喝</th><th>manger 吃</th></tr>
<tr><td>je prends</td><td>je bois</td><td>je mange</td></tr>
<tr><td>tu prends</td><td>tu bois</td><td>tu manges</td></tr>
<tr><td>il prend</td><td>il boit</td><td>il mange</td></tr>
<tr><td>nous pre<b>n</b>ons</td><td>nous <b>buv</b>ons</td><td>nous mang<b>e</b>ons</td></tr>
<tr><td>vous pre<b>n</b>ez</td><td>vous <b>buv</b>ez</td><td>vous mangez</td></tr>
<tr><td>ils pre<b>nn</b>ent</td><td>ils <b>boiv</b>ent</td><td>ils mangent</td></tr></table>
<ul><li><b>prendre</b>：单数三个读音都是 [pʁɑ̃]；nous/vous 一个 n，ils pre<b>nn</b>ent 两个 n，读 [pʁɛn]。comprendre（懂）、apprendre（学）变位完全一样。</li>
<li><b>boire</b>：nous/vous 的词干变成 buv-，ils 变成 boiv-。</li>
<li><b>manger</b>：nous mang<b>e</b>ons 要保留 e，否则 g 会读成硬音 [g]。</li></ul>
<p><b>prendre 的万能用法</b>：点餐 Je prends un café（我要一杯咖啡）；吃早餐 prendre le petit-déjeuner；坐车 prendre le métro。</p>
<p>一日三餐：le petit-déjeuner（早餐）、le déjeuner（午餐）、le dîner（晚餐）。"吃午饭/吃晚饭"也可以直接用动词 déjeuner / dîner：On dîne ensemble ?</p>
<p><b>中国人常犯的错</b>：① ✗ ils prenent / ✗ ils prendent → ✓ ils prennent；② ✗ nous mangons；③ ✗ vous boivez → ✓ vous buvez；④ 别忘了部分冠词：✗ Je bois thé → ✓ Je bois du thé。</p>`,
    ex: [["Je prends un café au lait.", '我要一杯牛奶咖啡。'], ['Nous mangeons du riz.', '我们吃米饭。'], ["Qu'est-ce que vous buvez ?", '你们喝什么？'], ['Ils prennent le petit-déjeuner ensemble.', '他们一起吃早餐。']],
  },
  {
    id: 'g-venir', title: 'venir（来）的变位与 venir de',
    body: `<table><tr><th colspan="2">venir 来</th></tr>
<tr><td>je viens</td><td>nous venons</td></tr>
<tr><td>tu viens</td><td>vous venez</td></tr>
<tr><td>il/elle vient</td><td>ils/elles viennent</td></tr></table>
<p>单数三个人称读音相同 [vjɛ̃]；nous/vous 词干变回 ven-；ils vie<b>nn</b>ent 两个 n，读 [vjɛn]。</p>
<p><b>venir de + 地方 = 来自……</b>：</p>
<ul><li>城市：Je viens <b>de</b> Shanghai. / Il vient <b>d'</b>Orléans.（元音前 d'）</li>
<li>国家要看阴阳性：de France、<b>du</b> Japon、<b>des</b> États-Unis（详见下一个语法点）。</li>
<li>问别人哪里人：Tu viens d'où ? / Vous venez d'où ?</li></ul>
<p><b>venir 的其他常用法</b>：Tu viens ?（你来吗？/ 走吗？）、Tu viens avec moi ?（你和我一起去吗？）——法语邀请别人"一起去"常用 venir，而不是 aller。</p>
<p>以后还会学 venir de + 动词原形 = "刚刚做了……"，现在先记住"来自"的意思。</p>
<p><b>中国人常犯的错</b>：① ✗ ils vienent / ✗ ils venent → ✓ ils viennent；② ✗ vous viennez → ✓ vous venez；③ 来自某国时加了冠词 ✗ Je viens de la Chine（口语也有人说，但标准是 Je viens de Chine）。</p>`,
    ex: [["Je viens de Chine.", '我来自中国。'], ["Tu viens d'où ?", '你是哪里人？'], ['Ils viennent du Canada.', '他们来自加拿大。'], ['Tu viens avec nous ?', '你和我们一起去吗？']],
  },
  {
    id: 'g-pays', title: '国家和城市前的介词：en / au / aux / à',
    body: `<p>国家名也有阴阳性。粗略规律：<b>以 -e 结尾的大多是阴性</b>（la France、la Chine、l'Italie），其他多为阳性（le Japon、le Canada）。例外：le Mexique、le Cambodge 是阳性。</p>
<table><tr><th></th><th>在 / 去（où ?）</th><th>来自（d'où ?）</th></tr>
<tr><td>阴性国家 la France</td><td><b>en</b> France</td><td><b>de</b> France</td></tr>
<tr><td>元音开头的国家 l'Italie</td><td><b>en</b> Italie</td><td><b>d'</b>Italie</td></tr>
<tr><td>阳性国家 le Japon</td><td><b>au</b> Japon</td><td><b>du</b> Japon</td></tr>
<tr><td>复数国家 les États-Unis</td><td><b>aux</b> États-Unis</td><td><b>des</b> États-Unis</td></tr>
<tr><td>城市 Paris</td><td><b>à</b> Paris</td><td><b>de</b> Paris</td></tr></table>
<p>"在"和"去"用同一个介词：J'habite <b>en</b> France.（我住在法国。）/ Je vais <b>en</b> France.（我去法国。）</p>
<p>au = à + le，aux = à + les，du = de + le，des = de + les，和你在 c8 学的缩合规律一样。</p>
<p><b>中国人常犯的错</b>：① 把中文的"在"一律翻成 à：✗ à France、✗ à Chine；② ✗ en Japon → ✓ au Japon；③ 用 dans：✗ dans la France（dans 表示"在……里面"，不用于国家）。</p>`,
    ex: [["J'habite en France, à Lyon.", '我住在法国里昂。'], ['Il travaille au Japon.', '他在日本工作。'], ['Je voudrais aller aux États-Unis.', '我想去美国。'], ["Elle vient d'Italie.", '她来自意大利。']],
  },
  {
    id: 'g-date', title: '日期、月份、季节和年份',
    body: `<p><b>日期 = le + 数字 + 月份</b>，和中文顺序相反，中间<b>不加 de</b>：</p>
<table><tr><td>3 月 14 日</td><td>le 14 mars</td></tr>
<tr><td>7 月 14 日（法国国庆）</td><td>le 14 juillet</td></tr>
<tr><td>5 月 1 日</td><td>le <b>premier</b> mai（写作 le 1er mai）</td></tr></table>
<p>只有"1 号"用序数词 <b>premier</b>，其他日子都用普通数字：le deux, le trois…</p>
<p><b>十二个月</b>（小写）：janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre。"在几月"用 <b>en</b>：<b>en</b> mars、<b>en</b> août。</p>
<p><b>四季</b>（都是阳性）：</p>
<table><tr><td>le printemps 春天</td><td><b>au</b> printemps</td></tr>
<tr><td>l'été 夏天</td><td><b>en</b> été</td></tr>
<tr><td>l'automne 秋天</td><td><b>en</b> automne</td></tr>
<tr><td>l'hiver 冬天</td><td><b>en</b> hiver</td></tr></table>
<p>只有春天用 au（因为 printemps 是辅音开头），其他三季都是元音开头，用 en。</p>
<p><b>问日期</b>：Quelle est la date aujourd'hui ? 回答：<b>C'est le</b> 12 mars. / <b>Nous sommes le</b> 12 mars.</p>
<p><b>年份</b>：2026 = deux <b>mille</b> vingt-six（mille 永远不加 s）；1998 = mille neuf cent quatre-vingt-dix-huit。"在某年"用 en：<b>en</b> 2026。</p>
<p><b>中国人常犯的错</b>：① 照中文顺序说 ✗ le mars 14；② ✗ le 14 de mars；③ ✗ le un mai；④ 月份大写 ✗ Mars；⑤ ✗ en printemps。</p>`,
    ex: [["Aujourd'hui, c'est le premier mai.", '今天是五月一日。'], ["Mon anniversaire, c'est le 14 juillet.", '我的生日是七月十四日。'], ['En août, je vais en Italie.', '八月我去意大利。'], ['Au printemps, Paris est magnifique.', '春天的巴黎美极了。']],
  },
  {
    id: 'g-faire', title: 'faire（做）：天气和爱好',
    body: `<table><tr><th colspan="2">faire 做</th></tr>
<tr><td>je fais</td><td>nous faisons [fə.zɔ̃]</td></tr>
<tr><td>tu fais</td><td>vous <b>faites</b></td></tr>
<tr><td>il/elle fait</td><td>ils/elles <b>font</b></td></tr></table>
<p>注意 vous <b>faites</b>（不是 ✗ faisez），和 vous êtes、vous dites 一样是特殊形式；nous faisons 的 ai 读 [ə]。</p>
<p><b>用法一：问做什么</b>　Qu'est-ce que tu fais ?（你在做什么？/ 你做什么工作？）</p>
<p><b>用法二：天气</b>　法语说天气用无人称的 <b>il fait</b> + 形容词：</p>
<table><tr><td>Quel temps fait-il ?</td><td>天气怎么样？</td></tr>
<tr><td>Il fait beau. / Il fait mauvais.</td><td>天气好。/ 天气不好。</td></tr>
<tr><td>Il fait chaud. / Il fait froid.</td><td>天热。/ 天冷。</td></tr>
<tr><td>Il pleut. / Il neige.</td><td>下雨。/ 下雪。（这两个不用 faire）</td></tr></table>
<p><b>用法三：运动和爱好</b>　faire + 部分冠词 + 名词：faire <b>du</b> sport / <b>du</b> vélo / <b>de la</b> natation / <b>de la</b> musique。否定变成 de：Je ne fais pas <b>de</b> sport.（和上一课部分冠词的规律一样。）</p>
<p>固定说法：<b>faire la cuisine</b>（做饭）、faire les courses（买东西）。</p>
<p><b>中国人常犯的错</b>：① ✗ vous faisez；② 照中文"天气很热"说 ✗ Le temps est chaud，或 ✗ Il est chaud（这是"它/他是热的"）；③ "我觉得热"要用 avoir：J'ai chaud，不是 ✗ Je suis chaud；④ ✗ Il fait pleut。</p>`,
    ex: [["Qu'est-ce que tu fais samedi ?", '你星期六做什么？'], ["Il fait beau aujourd'hui.", '今天天气很好。'], ['Nous faisons du vélo le dimanche.', '我们每周日骑自行车。'], ['Il pleut, je ne fais pas de sport.', '下雨了，我不运动。']],
  },
  {
    id: 'g-ce', title: '指示形容词 ce / cet / cette / ces 与 quel',
    body: `<p>"这个、那个"用指示形容词，放在名词前面，代替冠词。和其他形容词一样要配合性数：</p>
<table><tr><th>阳性</th><th>阳性（元音/哑音 h 前）</th><th>阴性</th><th>复数</th></tr>
<tr><td><b>ce</b> pantalon</td><td><b>cet</b> hôtel / <b>cet</b> ami</td><td><b>cette</b> robe</td><td><b>ces</b> robes / <b>ces</b> pantalons</td></tr></table>
<ul><li>cet 和 cette 读音一样 [sɛt]。</li>
<li>ces [se] 和 c'est [sɛ] 读音接近，但意思完全不同：<b>ces</b> robes（这些裙子）/ <b>c'est</b> une robe（这是一条裙子）。</li>
<li>法语的 ce 不分"这"和"那"。一定要区分时在名词后加 -ci（这）/ -là（那）：cette robe-ci, cette robe-là。</li>
<li>时间里也常用：ce soir（今晚）、cet été（今年夏天）、cette semaine（这周）。</li></ul>
<p><b>疑问形容词 quel</b>（哪个、什么样的）也要配合：</p>
<table><tr><td>quel（阳单）</td><td>Quel pantalon ?</td></tr>
<tr><td>quelle（阴单）</td><td>Quelle taille ? Quelle couleur ?</td></tr>
<tr><td>quels（阳复）/ quelles（阴复）</td><td>Quelles chaussures ?</td></tr></table>
<p>四种写法读音都一样 [kɛl]。</p>
<p><b>颜色</b>放在名词后面，也要配合：une robe noir<b>e</b>、un pantalon blanc / une robe blan<b>che</b>、des robes bleu<b>es</b>。以 -e 结尾的颜色（rouge, jaune）阴阳同形。</p>
<p><b>买衣服常用句</b>：Je voudrais essayer… / Vous avez ça en bleu ? / Je fais du 38.（我穿 38 码。）</p>
<p><b>中国人常犯的错</b>：① ✗ ce hôtel → ✓ cet hôtel；② 写成 ✗ c'est robes；③ quel 不配合 ✗ quel couleur → ✓ quelle couleur。</p>`,
    ex: [["Je voudrais essayer cette robe.", '我想试一下这条裙子。'], ['Ce pantalon noir est trop petit.', '这条黑裤子太小了。'], ['Cet hôtel est très cher.', '这家酒店很贵。'], ['Quelle couleur préférez-vous ?', '您更喜欢什么颜色？']],
  },
  {
    id: 'g-lieu', title: '方位介词：在……上、下、前、后、旁边',
    body: `<p>中文说"在桌子<b>上</b>"，方位词放在名词后面；法语正好相反，方位介词放在<b>名词前面</b>：<b>sur</b> la table。</p>
<table><tr><th>介词</th><th>意思</th><th>例子</th></tr>
<tr><td>sur</td><td>在……上面</td><td>sur la table</td></tr>
<tr><td>sous</td><td>在……下面</td><td>sous le lit</td></tr>
<tr><td>dans</td><td>在……里面</td><td>dans la cuisine</td></tr>
<tr><td>devant</td><td>在……前面</td><td>devant le canapé</td></tr>
<tr><td>derrière</td><td>在……后面</td><td>derrière la porte</td></tr>
<tr><td>entre … et …</td><td>在……和……之间</td><td>entre la fenêtre et le lit</td></tr>
<tr><td>à côté <b>de</b></td><td>在……旁边</td><td>à côté <b>du</b> salon</td></tr>
<tr><td>en face <b>de</b></td><td>在……对面</td><td>en face <b>de la</b> cuisine</td></tr>
<tr><td>près <b>de</b> / loin <b>de</b></td><td>离……近 / 远</td><td>près <b>de l'</b>école</td></tr></table>
<p><b>带 de 的介词要注意缩合</b>：de + le → <b>du</b>，de + les → <b>des</b>；de la、de l' 不变。</p>
<ul><li>à côté <b>du</b> lit（✗ à côté de le lit）</li>
<li>en face <b>des</b> fenêtres</li>
<li>à côté <b>de</b> Paul（人名、城市名前面只用 de）</li></ul>
<p>问位置：<b>Où est</b> la cuisine ? / Mes clés <b>sont où</b> ?</p>
<p><b>中国人常犯的错</b>：① 漏掉 de ✗ à côté le salon；② 忘了缩合 ✗ à côté de le salon；③ 中文"在墙上、在桌上"都用"上"，但法语"在房间里"是 dans，不是 ✗ sur la chambre；④ devant / derrière 只表示位置，"在……之前（时间）"要用 avant。</p>`,
    ex: [['Le chat est sous le lit.', '猫在床底下。'], ['La lampe est sur la table.', '灯在桌子上。'], ['La salle de bains est à côté de la chambre.', '浴室在卧室旁边。'], ['La cuisine est entre le salon et la chambre.', '厨房在客厅和卧室之间。']],
  },
  {
    id: 'g-pronominal', title: '代词式动词：se lever, s\'habiller',
    body: `<p>有一类动词前面带 <b>se</b>，表示动作作用在<b>自己身上</b>：lever（举起、叫起来）→ <b>se</b> lever（让自己起来 = 起床）。你在第一课就见过一个：<b>s'appeler</b>（je m'appelle）。</p>
<p>变位时，se 要随主语变成对应的反身代词：</p>
<table><tr><th colspan="2">se lever 起床</th></tr>
<tr><td>je <b>me</b> lève</td><td>nous <b>nous</b> levons</td></tr>
<tr><td>tu <b>te</b> lèves</td><td>vous <b>vous</b> levez</td></tr>
<tr><td>il/elle <b>se</b> lève</td><td>ils/elles <b>se</b> lèvent</td></tr></table>
<ul><li>动词本身按 -er 规则变位。lever 单数和 ils 要加重音符：je l<b>è</b>ve（读 [lɛv]），nous levons 不加。</li>
<li>元音或哑音 h 前，me/te/se 缩写成 <b>m' / t' / s'</b>：je <b>m'</b>habille、il <b>s'</b>habille。</li></ul>
<p><b>否定</b>：ne 放在反身代词前面，pas 放在动词后面：Je <b>ne</b> me lève <b>pas</b> tôt.</p>
<p><b>和 aller / vouloir 等连用</b>：反身代词要跟着主语变：Je vais <b>me</b> coucher.（✗ Je vais se coucher）</p>
<table><tr><th>普通动词</th><th>代词式动词</th></tr>
<tr><td>Je lave la voiture. 我洗车。</td><td>Je me lave. 我洗漱。</td></tr>
<tr><td>Je réveille mon fils. 我叫醒儿子。</td><td>Je me réveille. 我醒来。</td></tr></table>
<p><b>中国人常犯的错</b>：① 漏掉代词 ✗ Je lève à sept heures；② 否定位置错 ✗ Je me ne lève pas；③ 代词不随主语变 ✗ Nous se levons → ✓ Nous nous levons。</p>`,
    ex: [['Je me lève à sept heures.', '我七点起床。'], ['Tu te couches tard ?', '你睡得晚吗？'], ["Elle s'habille et elle prend un café.", '她穿好衣服，喝杯咖啡。'], ['Le dimanche, je ne me lève pas tôt.', '星期天我不早起。']],
  },
  {
    id: 'g-modaux', title: '情态动词 vouloir / pouvoir / devoir + 原形',
    body: `<p>"想、能、必须"后面直接接<b>动词原形</b>，只有情态动词变位：Je peux <b>venir</b>.（✗ Je peux viens）</p>
<table><tr><th></th><th>vouloir 想要</th><th>pouvoir 能、可以</th><th>devoir 必须、应该</th></tr>
<tr><td>je</td><td>veux</td><td>peux</td><td>dois</td></tr>
<tr><td>tu</td><td>veux</td><td>peux</td><td>dois</td></tr>
<tr><td>il/elle</td><td>veut</td><td>peut</td><td>doit</td></tr>
<tr><td>nous</td><td>voulons</td><td>pouvons</td><td>devons</td></tr>
<tr><td>vous</td><td>voulez</td><td>pouvez</td><td>devez</td></tr>
<tr><td>ils/elles</td><td>veulent</td><td>peuvent</td><td>doivent</td></tr></table>
<p>三个动词规律相同：je/tu 以 <b>-x / -s</b> 结尾，il 以 <b>-t</b> 结尾；nous/vous 词干变（voul-, pouv-, dev-）；ils 又用单数的元音（veul-, peuv-, doiv-）。</p>
<ul><li><b>vouloir</b>：Tu veux venir ?（你想来吗？）——回答"好啊"常说 <b>Je veux bien</b>。对陌生人提要求用 je voudrais 更礼貌。</li>
<li><b>pouvoir</b>：能力、许可、请求：Je peux venir avec Léa ?（我能带莱娅来吗？）/ Vous pouvez répéter ?（您能再说一遍吗？）</li>
<li><b>devoir</b>：必须、应该：Je dois travailler.（我得工作。）</li></ul>
<p><b>否定</b>：ne … pas 夹住情态动词：Je <b>ne</b> peux <b>pas</b> venir.　如果说 Je peux ne pas venir，意思就变成"我可以不来"。</p>
<p><b>和代词式动词连用</b>：Je dois <b>me</b> lever tôt.（我得早起。）</p>
<p><b>中国人常犯的错</b>：① 后面的动词也变位 ✗ Je veux mange；② ✗ ils voulent / ✗ ils pouvent → ✓ ils veulent / peuvent；③ "会游泳"这种学来的技能用 savoir：Je sais nager，不用 pouvoir。</p>`,
    ex: [['Tu veux venir samedi ?', '你星期六想来吗？'], ['Je ne peux pas, je dois travailler.', '我不行，我得工作。'], ['Vous pouvez répéter, s\'il vous plaît ?', '您能再说一遍吗？'], ['Nous devons partir à huit heures.', '我们必须八点出发。']],
  },
  {
    id: 'g-pc-etre', title: '复合过去时（二）：用 être 的动词',
    body: `<p>c12 学过：复合过去时 = avoir + 过去分词。但有一组表示<b>移动或状态变化</b>的动词要用 <b>être</b> 做助动词。</p>
<table><tr><th>原形</th><th>过去分词</th><th>原形</th><th>过去分词</th></tr>
<tr><td>aller 去</td><td>allé</td><td>venir 来</td><td>venu</td></tr>
<tr><td>arriver 到达</td><td>arrivé</td><td>partir 出发</td><td>parti</td></tr>
<tr><td>entrer 进入</td><td>entré</td><td>sortir 出去</td><td>sorti</td></tr>
<tr><td>monter 上去</td><td>monté</td><td>descendre 下来</td><td>descendu</td></tr>
<tr><td>naître 出生</td><td>né</td><td>mourir 去世</td><td>mort</td></tr>
<tr><td>rester 留下</td><td>resté</td><td>tomber 摔倒、掉落</td><td>tombé</td></tr>
<tr><td>retourner 回去</td><td>retourné</td><td>passer 经过</td><td>passé</td></tr></table>
<p>它们大多成对出现（去/来、到/走、进/出、上/下、生/死），很好记。加上前缀的 revenir、rentrer（回家）、devenir（变成）也用 être。</p>
<p><b>过去分词要和主语配合性数</b>，像形容词一样：</p>
<table><tr><td>je suis allé（男）/ allé<b>e</b>（女）</td><td>nous sommes allé<b>s</b> / allé<b>es</b></td></tr>
<tr><td>tu es allé / allé<b>e</b></td><td>vous êtes allé(<b>e</b>)(<b>s</b>)</td></tr>
<tr><td>il est allé / elle est allé<b>e</b></td><td>ils sont allé<b>s</b> / elles sont allé<b>es</b></td></tr></table>
<p>-é、-ée、-és、-ées 读音都一样，所以配合主要是写的时候注意。男女混合的复数用阳性 -s。</p>
<p><b>否定</b>：ne … pas 夹住 être：Je <b>ne</b> suis <b>pas</b> allé à Lyon.</p>
<p><b>中国人常犯的错</b>：① 用 avoir ✗ J'ai allé；② 女生忘了加 e ✗ Elle est arrivé；③ 反过来给 avoir 的动词也用 être ✗ Je suis mangé（意思变成"我被吃了"！）。</p>`,
    ex: [['Je suis allé à Lyon samedi.', '我星期六去了里昂。'], ['Elle est arrivée hier soir.', '她昨晚到的。'], ['Nous sommes restés à la maison.', '我们待在家里。'], ['Ils ne sont pas venus.', '他们没来。']],
  },
];

export const CAT = {
  'g-poss': '名词与形容词',
  'g-num100': '数字与时间',
  'g-partitif': '名词与形容词',
  'g-prendre': '动词变位',
  'g-venir': '动词变位',
  'g-pays': '介词',
  'g-date': '数字与时间',
  'g-faire': '动词变位',
  'g-ce': '名词与形容词',
  'g-lieu': '介词',
  'g-pronominal': '动词变位',
  'g-modaux': '动词变位',
  'g-pc-etre': '时态与语气',
};

export const units = [
  {
    id: 'a1-13', emoji: '👨‍👩‍👧', title: '我的家人', sub: '主有形容词 mon / ma / mes', can: '能看着照片介绍自己的家人，问别人的家庭', scene: null, grammar: ['g-poss'],
    words: ['être', 'avoir'],
    newWords: [
      ['la famille', 'la fa.mij', '家庭；家人', "C'est ma famille.", '这是我的家人。', 'course'],
      ['le père', 'lə pɛʁ', '父亲', 'Mon père est professeur.', '我爸爸是老师。', 'course'],
      ['la mère', 'la mɛʁ', '母亲', "Ma mère s'appelle Anne.", '我妈妈叫安娜。', 'course'],
      ['les parents (m.)', 'le pa.ʁɑ̃', '父母', 'Mes parents sont chinois.', '我父母是中国人。', 'course'],
      ['le mari', 'lə ma.ʁi', '丈夫', 'Son mari est ingénieur.', '她丈夫是工程师。', 'course'],
      ["l'enfant (m./f.)", 'lɑ̃.fɑ̃', '孩子', 'Ils ont deux enfants.', '他们有两个孩子。', 'course'],
      ['la fille', 'la fij', '女儿；女孩', 'Leur fille a deux ans.', '他们的女儿两岁。', 'course'],
    ],
    dialogue: [
      ['Léa', 'Voilà une photo de ma famille.', '这是我家人的照片。'],
      ['我', "C'est ton père ?", '这是你爸爸吗？'],
      ['Léa', "Oui, c'est mon père, et voilà ma mère. Ils sont professeurs.", '对，这是我爸爸，这是我妈妈。他们都是老师。'],
      ['我', "Et là, c'est ton frère ?", '那这个是你哥哥吗？'],
      ['Léa', 'Oui, mon frère Hugo. Il a vingt ans. Et ta famille ?', '对，我哥哥雨果。他二十岁。你家呢？'],
      ['我', "Mes parents sont à Shanghai. J'ai une sœur. Son mari est français !", '我父母在上海。我有一个姐姐。她丈夫是法国人！'],
      ['Léa', 'Ah bon ? Ils ont des enfants ?', '真的吗？他们有孩子吗？'],
      ['我', 'Oui, une fille. Leur fille a deux ans.', '有，一个女儿。他们的女儿两岁。'],
    ],
    sentences: [["C'est mon père.", '这是我爸爸。'], ["Ma mère s'appelle Anne.", '我妈妈叫安娜。'], ['Mes parents sont à Shanghai.', '我父母在上海。'], ['Leur fille a deux ans.', '他们的女儿两岁。']],
    cloze: [
      ['___ amie Léa est française.', ['Mon', 'Ma', 'Mes'], 0, '我的朋友莱娅是法国人。', 'amie 虽然是阴性，但以元音开头，ma 要换成 mon，读作 mon‿amie'],
      ['Léa et ___ père sont à Paris.', ['son', 'sa', 'leur'], 0, '莱娅和她爸爸在巴黎。', '看名词不看拥有者：père 是阳性 → son，哪怕 Léa 是女生'],
      ['___ parents sont chinois.', ['Mes', 'Mon', 'Ma'], 0, '我父母是中国人。', 'parents 是复数 → mes'],
      ['Ils ont une fille. ___ fille a deux ans.', ['Leur', 'Leurs', 'Son'], 0, '他们有一个女儿。他们的女儿两岁。', '拥有者是"他们" → leur；女儿只有一个，不加 s。son 是"他的/她的"'],
    ],
    discover: [{ q: 'Léa（女生）说"她的哥哥"，法语是？', opts: ['son frère', 'sa frère'], a: 0, why: '主有形容词跟被拥有的东西配合，不跟拥有者。frère 是阳性 → son frère。这和中文、英语（his / her）的思路完全不同。' }],
    write: { prompt: '介绍你的家人：他们叫什么、做什么、在哪里（3 句，用 mon / ma / mes / son / sa）。', model: "Mon père s'appelle Wei. Ma mère est professeure. J'ai une sœur, son mari est ingénieur." },
  },
  {
    id: 'a1-14', emoji: '🔢', title: '数到 100', sub: '数字 21–100 · 价格和电话', can: '能听懂和说出 100 以内的价格，能报自己的电话号码', scene: null, grammar: ['g-num100'],
    words: ['vingt', 'cent', 'combien', "l'euro (m.)"],
    newWords: [
      ['quarante', 'ka.ʁɑ̃t', '40', "Ça fait quarante euros.", '一共四十欧元。', 'course'],
      ['cinquante', 'sɛ̃.kɑ̃t', '50', "Mon père a cinquante-huit ans.", '我爸爸五十八岁。', 'course'],
      ['soixante', 'swa.sɑ̃t', '60', "Soixante et un euros, s'il vous plaît.", '请付六十一欧元。', 'course'],
      ['soixante-dix', 'swa.sɑ̃t.dis', '70', "C'est soixante-dix euros.", '七十欧元。', 'course'],
      ['quatre-vingts', 'ka.tʁə.vɛ̃', '80', "Ma grand-mère a quatre-vingts ans.", '我奶奶八十岁。', 'course'],
      ['quatre-vingt-dix', 'ka.tʁə.vɛ̃.dis', '90', "Le grand dictionnaire, c'est quatre-vingt-dix euros.", '大词典九十欧元。', 'course'],
      ['le numéro', 'lə ny.me.ʁo', '号码', "Votre numéro, s'il vous plaît ?", '请问您的号码？', 'course'],
    ],
    dialogue: [
      ['我', "Bonjour ! Le dictionnaire chinois-français, c'est combien ?", '您好！汉法词典多少钱？'],
      ['店员', "Le grand, c'est quatre-vingt-dix euros. Le petit, trente-neuf euros.", '大的九十欧元，小的三十九欧元。'],
      ['我', "Quatre-vingt-dix ? C'est cher ! Je voudrais le petit, s'il vous plaît.", '九十？好贵！我要小的。'],
      ['店员', "Ah, le petit n'est pas là aujourd'hui. Demain, d'accord ? Votre numéro, s'il vous plaît ?", '啊，小的今天没货。明天可以吗？请问您的电话号码？'],
      ['我', "C'est le zéro six, soixante et onze, quatre-vingt-quatre, cinquante-deux, quatre-vingt-dix-neuf.", '是 06 71 84 52 99。'],
      ['店员', 'Zéro six, soixante et onze, quatre-vingt-quatre, cinquante-deux, quatre-vingt-dix-neuf. Merci !', '06 71 84 52 99。谢谢！'],
      ['我', 'Merci, à demain !', '谢谢，明天见！'],
    ],
    sentences: [['Ça fait soixante-quinze euros.', '一共七十五欧元。'], ["Le grand, c'est quatre-vingt-dix euros.", '大的九十欧元。'], ["Votre numéro, s'il vous plaît ?", '请问您的号码？'], ["J'ai quarante-deux ans.", '我四十二岁。']],
    cloze: [
      ['Ça fait ___ euros. (71)', ['soixante et onze', 'soixante-dix-un', 'septante-un'], 0, '一共七十一欧元。', '71 = 60 + 11 → soixante et onze。septante 是比利时、瑞士的说法'],
      ['Ma grand-mère a ___ ans. (80)', ['quatre-vingts', 'quatre-vingt', 'huit-dix'], 0, '我奶奶八十岁。', '80 = 4 × 20，单独出现时 vingts 带 s'],
      ["Le livre, c'est ___ euros. (21)", ['vingt et un', 'vingt-un', 'vingt et une'], 0, '这本书二十一欧元。', '21、31……61 用 et un；euro 是阳性，所以是 un 不是 une'],
      ["C'est ___ euros. (95)", ['quatre-vingt-quinze', 'quatre-vingts-quinze', 'quatre-vingt-cinq'], 0, '九十五欧元。', '95 = 4 × 20 + 15；后面接数字时 vingt 去掉 s。quatre-vingt-cinq 是 85'],
    ],
    discover: [{ q: '法国人读电话号码 06 12 34 56 78 时，怎么读？', opts: ['两位一读：zéro six, douze, trente-quatre…', '一位一位读：zéro, six, un, deux…'], a: 0, why: '法国电话号码习惯两位两位地读，所以必须熟练掌握 0–99。一位一位地读，对方反而要想半天。' }],
    write: { prompt: '用法语写出你的年龄和电话号码（数字用单词写出来），再问一样东西的价格（3 句）。', model: "J'ai trente-quatre ans. Mon numéro, c'est le zéro six, quarante-cinq, soixante-dix-huit, quatre-vingt-onze, vingt-trois. Le dictionnaire, c'est combien ?" },
  },
  {
    id: 'a1-15', emoji: '🧺', title: '在市场', sub: '部分冠词 du / de la / des', can: '能在市场买菜，说出数量，说"没有……"', scene: null, grammar: ['g-partitif'],
    words: ['le pain', 'un peu', 'beaucoup', 'de'],
    newWords: [
      ['le marché', 'lə maʁ.ʃe', '市场；集市', "Le marché est loin ?", '市场远吗？', 'course'],
      ['le fromage', 'lə fʁɔ.maʒ', '奶酪', "Vous avez du fromage ?", '您有奶酪吗？', 'course'],
      ['la pomme', 'la pɔm', '苹果', "Je voudrais des pommes.", '我想要些苹果。', 'course'],
      ['la tomate', 'la tɔ.mat', '西红柿', "Un kilo de tomates, s'il vous plaît.", '请给我一公斤西红柿。', 'course'],
      ['la viande', 'la vjɑ̃d', '肉', 'Je ne mange pas de viande.', '我不吃肉。', 'course'],
      ['le kilo', 'lə ki.lo', '公斤', "C'est trois euros le kilo.", '三欧元一公斤。', 'course'],
      ['désolé · désolée', 'de.zɔ.le', '抱歉的（男·女说）', "Désolé, je n'ai pas de fromage.", '抱歉，我没有奶酪。', 'course'],
    ],
    dialogue: [
      ['摊主', 'Bonjour ! Vous désirez ?', '您好！您要点什么？'],
      ['我', "Bonjour ! Je voudrais un kilo de tomates, s'il vous plaît.", '您好！请给我一公斤西红柿。'],
      ['摊主', 'Voilà. Et avec ça ?', '给您。还要别的吗？'],
      ['我', 'Des pommes aussi. Et vous avez du fromage ?', '还要些苹果。您有奶酪吗？'],
      ['摊主', "Désolé, je n'ai pas de fromage. Mais j'ai de la viande.", '抱歉，我没有奶酪。不过我有肉。'],
      ['我', "Non merci, je ne mange pas de viande. C'est combien ?", '不用了，谢谢，我不吃肉。多少钱？'],
      ['摊主', 'Les tomates et les pommes… ça fait six euros cinquante.', '西红柿加苹果……一共六欧元五十。'],
      ['我', 'Voilà. Merci, au revoir !', '给您。谢谢，再见！'],
    ],
    sentences: [['Je voudrais un kilo de tomates.', '我想要一公斤西红柿。'], ['Vous avez du fromage ?', '您有奶酪吗？'], ['Je ne mange pas de viande.', '我不吃肉。'], ['Il y a beaucoup de pommes.', '有很多苹果。']],
    cloze: [
      ['Je voudrais ___ fromage.', ['du', 'de la', 'le'], 0, '我想要点奶酪。', 'fromage 是阳性，表示"一些"用 du。le fromage 是泛指，用在 j\'aime 后面'],
      ["Un kilo ___ tomates, s'il vous plaît.", ['de', 'des', 'du'], 0, '请给我一公斤西红柿。', '数量词（un kilo, beaucoup, un peu）后面只用 de，不加冠词'],
      ['Je ne mange pas ___ viande.', ['de', 'de la', 'la'], 0, '我不吃肉。', '否定句里部分冠词 de la 变成 de'],
      ['Vous avez ___ eau ?', ["de l'", 'du', 'de la'], 0, '您有水吗？', "eau 以元音开头，部分冠词用 de l'"],
    ],
    discover: [{ q: "J'aime le fromage. / Je mange du fromage. 为什么一个用 le，一个用 du？", opts: ['le 表示"奶酪这种东西"（泛指喜好），du 表示"一些奶酪"（吃的那一部分）', '没有区别，可以随便换'], a: 0, why: 'aimer、préférer 这类表示喜好的动词后面用定冠词；manger、boire、acheter、vouloir 后面说"一些"用部分冠词。' }],
    write: { prompt: '你在市场买东西：说出想买的 3 样东西（用 du / de la / des 或 un kilo de），再说一样你不吃的东西。', model: "Je voudrais du fromage, un kilo de pommes et de la viande, s'il vous plaît. Je ne mange pas de tomates." },
  },
  {
    id: 'a1-16', emoji: '🍳', title: '一日三餐', sub: 'prendre · boire · manger', can: '能说出自己早中晚吃什么、喝什么，问别人的饮食习惯', scene: null, grammar: ['g-prendre'],
    words: ['prendre', 'boire', 'manger'],
    newWords: [
      ['le petit-déjeuner', 'lə pə.ti.de.ʒœ.ne', '早餐', "Qu'est-ce que tu prends au petit-déjeuner ?", '你早餐吃什么？', 'course'],
      ['le déjeuner', 'lə de.ʒœ.ne', '午餐', 'Le déjeuner est prêt !', '午饭好了！', 'course'],
      ['le dîner', 'lə di.ne', '晚餐', 'Nous buvons du vin au dîner.', '我们晚餐时喝葡萄酒。', 'course'],
      ['le lait', 'lə lɛ', '牛奶', 'Je bois un café au lait.', '我喝一杯牛奶咖啡。', 'course'],
      ["le jus d'orange", 'lə ʒy dɔ.ʁɑ̃ʒ', '橙汁', "Je prends un jus d'orange.", '我要一杯橙汁。', 'course'],
      ['le riz', 'lə ʁi', '米饭；大米', 'Nous mangeons du riz.', '我们吃米饭。', 'course'],
    ],
    dialogue: [
      ['Paul', "Qu'est-ce que tu prends au petit-déjeuner ?", '你早餐吃什么？'],
      ['我', 'Je prends du pain et je bois du thé. Et toi ?', '我吃面包，喝茶。你呢？'],
      ['Paul', 'Moi, je bois un café au lait. Je ne mange pas beaucoup.', '我喝一杯牛奶咖啡。我吃得不多。'],
      ['我', 'À Shanghai, nous mangeons du riz au petit-déjeuner !', '在上海，我们早餐吃米饭！'],
      ['Paul', 'Du riz ? Intéressant ! Ce soir, tu dînes avec nous ?', '米饭？有意思！今晚你和我们一起吃晚饭吗？'],
      ['我', "Avec plaisir ! Qu'est-ce que vous buvez au dîner ?", '很乐意！你们晚餐喝什么？'],
      ['Paul', "Nous buvons de l'eau et un peu de vin. Tu bois du vin ?", '我们喝水，再喝一点葡萄酒。你喝葡萄酒吗？'],
      ['我', "Non, je ne bois pas de vin. Je prends un jus d'orange.", '不，我不喝葡萄酒。我喝橙汁。'],
    ],
    sentences: [['Je prends du pain au petit-déjeuner.', '我早餐吃面包。'], ['Nous mangeons du riz.', '我们吃米饭。'], ["Qu'est-ce que vous buvez ?", '你们喝什么？'], ['Je ne bois pas de vin.', '我不喝葡萄酒。']],
    cloze: [
      ['Ils ___ le petit-déjeuner ensemble.', ['prennent', 'prenent', 'prendent'], 0, '他们一起吃早餐。', 'ils prennent：两个 n，读 [pʁɛn]'],
      ['Nous ___ du riz.', ['mangeons', 'mangons', 'mangez'], 0, '我们吃米饭。', 'nous mangeons 要保留 e，让 g 读软音 [ʒ]'],
      ['Vous ___ du vin ?', ['buvez', 'boivez', 'boisez'], 0, '你们喝葡萄酒吗？', 'boire 的 nous / vous 词干是 buv-：nous buvons, vous buvez'],
      ["Je ___ un café, s'il vous plaît.", ['prends', 'prend', 'prenons'], 0, '我要一杯咖啡。', 'je prends 以 s 结尾；点餐时常用 prendre'],
    ],
    discover: [{ q: 'je prends、tu prends、il prend——这三个读音？', opts: ['完全一样，都读 [pʁɑ̃]', '都不一样'], a: 0, why: '词尾的 s 和 d 都不发音。只有 ils prennent [pʁɛn] 听起来不同，nous prenons、vous prenez 也能听出来。' }],
    write: { prompt: '说说你一日三餐吃什么、喝什么（3 句，用 prendre / manger / boire）。', model: "Au petit-déjeuner, je prends du pain et je bois du thé. Au déjeuner, je mange du riz. Au dîner, je bois de l'eau." },
  },
  {
    id: 'a1-17', emoji: '🌍', title: '你来自哪里？', sub: 'venir · 国家前的介词', can: '能说出自己来自哪个国家、住在哪里，问别人的国籍', scene: null, grammar: ['g-venir', 'g-pays'],
    words: ['venir', 'à'],
    newWords: [
      ['le pays', 'lə pe.i', '国家', 'Tu viens de quel pays ?', '你来自哪个国家？', 'course'],
      ['la France', 'la fʁɑ̃s', '法国', "J'habite en France.", '我住在法国。', 'course'],
      ['la Chine', 'la ʃin', '中国', 'Je viens de Chine.', '我来自中国。', 'course'],
      ['le Japon', 'lə ʒa.pɔ̃', '日本', 'Il travaille au Japon.', '他在日本工作。', 'course'],
      ['les États-Unis (m.)', 'le.ze.ta.zy.ni', '美国', 'Elle vient des États-Unis.', '她来自美国。', 'course'],
      ['le Canada', 'lə ka.na.da', '加拿大', 'Nous venons du Canada.', '我们来自加拿大。', 'course'],
      ["l'Italie (f.)", 'li.ta.li', '意大利', 'Je vais en Italie demain.', '我明天去意大利。', 'course'],
    ],
    dialogue: [
      ['Emma', "Salut ! Tu viens d'où ?", '嗨！你是哪里人？'],
      ['我', 'Je viens de Chine, de Shanghai. Et toi ?', '我来自中国上海。你呢？'],
      ['Emma', "Moi, je viens du Canada. Mais j'habite en France maintenant.", '我来自加拿大。不过我现在住在法国。'],
      ['我', "Et Kenji, il vient d'où ?", '那健二是哪里人？'],
      ['Emma', 'Il vient du Japon. Et Sarah vient des États-Unis.', '他来自日本。萨拉来自美国。'],
      ['我', "Le Japon ! Je voudrais aller au Japon et aux États-Unis.", '日本！我想去日本和美国。'],
      ['Emma', 'Et en Italie ? Je vais en Italie demain. Tu viens avec moi ?', '那意大利呢？我明天去意大利。你和我一起去吗？'],
      ['我', 'Avec plaisir… mais je travaille demain !', '很乐意……可是我明天要上班！'],
    ],
    sentences: [['Je viens de Chine.', '我来自中国。'], ['Il vient du Japon.', '他来自日本。'], ["J'habite en France maintenant.", '我现在住在法国。'], ['Je voudrais aller aux États-Unis.', '我想去美国。']],
    cloze: [
      ['Nous ___ du Canada.', ['venons', 'venez', 'viennent'], 0, '我们来自加拿大。', 'nous → venons（词干 ven-）'],
      ["Elle ___ d'Italie.", ['vient', 'viens', 'viennent'], 0, '她来自意大利。', 'il / elle → vient，以 t 结尾'],
      ["J'habite ___ Japon.", ['au', 'en', 'à'], 0, '我住在日本。', 'Japon 是阳性国家 → au（à + le）'],
      ['Ils travaillent ___ France.', ['en', 'à', 'au'], 0, '他们在法国工作。', 'France 是阴性国家 → en；à 只用于城市'],
    ],
    discover: [{ q: '以 -e 结尾的国名大多是阴性。那"我住在中国"是？', opts: ["J'habite en Chine.", "J'habite au Chine.", "J'habite à Chine."], a: 0, why: 'la Chine 是阴性 → en Chine。阳性国家才用 au（au Japon），城市用 à（à Pékin）。' }],
    write: { prompt: '介绍你来自哪里、现在住在哪里、想去哪个国家（3 句）。', model: "Je viens de Chine, de Shanghai. Maintenant, j'habite en France, à Lyon. Je voudrais aller au Japon." },
  },
  {
    id: 'a1-18', emoji: '📅', title: '日期、月份和季节', sub: 'le 14 juillet · en mars · au printemps', can: '能说出今天几号、自己的生日，谈论季节和月份', scene: null, grammar: ['g-date'],
    words: ['le jour', "aujourd'hui"],
    newWords: [
      ['le mois', 'lə mwa', '月；月份', 'Je vais en Chine pour un mois.', '我去中国一个月。', 'course'],
      ["l'anniversaire (m.)", 'la.ni.vɛʁ.sɛʁ', '生日', "Mon anniversaire, c'est le 8 octobre.", '我的生日是十月八日。', 'course'],
      ['premier · première', 'pʁə.mje · pʁə.mjɛʁ', '第一（的）；（每月）一号', "Aujourd'hui, c'est le premier mai.", '今天是五月一日。', 'course'],
      ['le printemps', 'lə pʁɛ̃.tɑ̃', '春天', 'Au printemps, je vais à Paris.', '春天我去巴黎。', 'course'],
      ["l'été (m.)", 'le.te', '夏天', "J'aime beaucoup l'été.", '我很喜欢夏天。', 'course'],
      ["l'automne (m.)", 'lo.tɔn', '秋天', 'En automne, je travaille beaucoup.', '秋天我工作很忙。', 'course'],
      ["l'hiver (m.)", 'li.vɛʁ', '冬天', "Tu aimes l'hiver ?", '你喜欢冬天吗？', 'course'],
    ],
    dialogue: [
      ['Léa', "Quelle est la date aujourd'hui ?", '今天几号？'],
      ['我', "Aujourd'hui, c'est le 12 mars. Pourquoi ?", '今天是三月十二日。怎么了？'],
      ['Léa', "Mon anniversaire, c'est le 14 mars ! C'est jeudi.", '我的生日是三月十四日！就在星期四。'],
      ['我', "Super ! Moi, mon anniversaire, c'est en juillet, le premier juillet.", '太好了！我的生日在七月，七月一日。'],
      ['Léa', "En été ! J'aime beaucoup l'été. Et toi ?", '夏天！我很喜欢夏天。你呢？'],
      ['我', "Moi, j'aime le printemps. Au printemps, ma mère vient à Paris.", '我喜欢春天。春天我妈妈会来巴黎。'],
      ['Léa', 'Ah bon ? Elle vient quand ?', '真的吗？她什么时候来？'],
      ['我', 'Le 2 avril, pour un mois !', '四月二日，待一个月！'],
    ],
    sentences: [["Aujourd'hui, c'est le 12 mars.", '今天是三月十二日。'], ["Mon anniversaire, c'est le premier juillet.", '我的生日是七月一日。'], ["J'aime beaucoup l'été.", '我很喜欢夏天。'], ['Au printemps, ma mère vient à Paris.', '春天我妈妈会来巴黎。']],
    cloze: [
      ["Mon anniversaire, c'est le ___ mai.", ['premier', 'un', 'une'], 0, '我的生日是五月一日。', '每月一号用序数词 premier，其他日子用普通数字'],
      ['Je vais à Nice ___ juillet.', ['en', 'au', 'le'], 0, '我七月去尼斯。', '"在几月"用 en：en juillet, en mars'],
      ['___ printemps, je vais à Lyon.', ['Au', 'En', 'Le'], 0, '春天我去里昂。', '四季里只有春天用 au；en été, en automne, en hiver'],
      ['Nous sommes en deux ___ vingt-six.', ['mille', 'milles', 'cent'], 0, '现在是 2026 年。', 'mille（一千）永远不加 s：deux mille'],
    ],
    discover: [{ q: '中文"3 月 14 日"，法语怎么说？', opts: ['le 14 mars', 'le mars 14', 'le 14 de mars'], a: 0, why: '法语日期是"le + 日 + 月"，日在前、月在后，中间不加 de。月份小写。' }],
    write: { prompt: '写写你的生日、你最喜欢的季节，以及你几月去旅行（3 句）。', model: "Mon anniversaire, c'est le 8 octobre. J'aime l'automne. En août, je vais en Italie." },
  },
  {
    id: 'a1-19', emoji: '🌦️', title: '天气与爱好', sub: 'faire · il fait beau', can: '能谈论天气，说出自己常做的运动和爱好，约朋友周末活动', scene: null, grammar: ['g-faire'],
    words: ['faire'],
    newWords: [
      ['le temps', 'lə tɑ̃', '天气；时间', 'Quel temps fait-il ?', '天气怎么样？', 'course'],
      ['il fait beau', 'il fɛ bo', '天气好', "Il fait beau aujourd'hui.", '今天天气很好。', 'course'],
      ['il pleut', 'il plø', '下雨', 'Il pleut, je reste ici.', '下雨了，我待在这儿。', 'course'],
      ['le vélo', 'lə ve.lo', '自行车', 'Je fais du vélo le samedi.', '我每周六骑自行车。', 'course'],
      ['la natation', 'la na.ta.sjɔ̃', '游泳（运动）', 'Elle fait de la natation.', '她游泳。', 'course'],
      ['faire la cuisine', 'fɛʁ la kɥi.zin', '做饭', 'Le dimanche, je fais la cuisine.', '每周日我做饭。', 'course'],
    ],
    dialogue: [
      ['Paul', "Salut ! Qu'est-ce que tu fais ce week-end ?", '嗨！你这个周末做什么？'],
      ['我', 'Je ne sais pas. Quel temps fait-il samedi ?', '不知道。星期六天气怎么样？'],
      ['Paul', 'Il fait beau et chaud. Nous faisons du vélo à Versailles. Tu viens ?', '天气晴朗，很暖和。我们去凡尔赛骑车。你来吗？'],
      ['我', 'Oui ! Je fais du sport le samedi.', '来！我每周六都运动。'],
      ['Paul', 'Et dimanche ? Il pleut, dimanche.', '那星期天呢？星期天下雨。'],
      ['我', 'Alors je fais la cuisine. Et toi, tu fais de la natation ?', '那我就做饭。你呢，你游泳吗？'],
      ['Paul', 'Oui, en été. En hiver, il fait froid !', '游，夏天游。冬天太冷了！'],
      ['我', "D'accord. À samedi, alors !", '好的。那星期六见！'],
    ],
    sentences: [['Quel temps fait-il ?', '天气怎么样？'], ['Il fait beau et chaud.', '天气晴朗，很暖和。'], ['Nous faisons du vélo.', '我们骑自行车。'], ['Il pleut, je fais la cuisine.', '下雨了，我做饭。']],
    cloze: [
      ['Vous ___ du sport ?', ['faites', 'faisez', 'font'], 0, '您运动吗？', 'vous faites 是不规则形式，没有 ✗ faisez'],
      ["Aujourd'hui, il ___ froid.", ['fait', 'est', 'a'], 0, '今天很冷。', '说天气用 il fait + 形容词'],
      ['Je fais ___ natation.', ['de la', 'du', 'la'], 0, '我游泳。', 'natation 是阴性 → faire de la natation'],
      ['Nous ___ du vélo le dimanche.', ['faisons', 'faisont', 'fais'], 0, '我们每周日骑自行车。', 'nous faisons，读 [fə.zɔ̃]'],
    ],
    discover: [{ q: '"今天很热"（天气），法语是？', opts: ['Il fait chaud.', 'Il est chaud.', "J'ai chaud."], a: 0, why: '天气用 il fait chaud。Il est chaud 是"它（某样东西）是热的"；J\'ai chaud 是"我（觉得）热"，说的是人的感受。' }],
    write: { prompt: '说说今天的天气，以及你周末常做的运动或爱好（3 句，用 faire）。', model: "Aujourd'hui, il fait beau. Le samedi, je fais du vélo. Quand il pleut, je fais la cuisine." },
  },
  {
    id: 'a1-20', emoji: '👗', title: '买衣服', sub: '指示形容词 ce / cette · quel', can: '能在服装店说想试哪件、问尺码和颜色、问价格', scene: null, grammar: ['g-ce'],
    words: ['quel · quelle', 'cher · chère', 'chercher'],
    newWords: [
      ['la robe', 'la ʁɔb', '连衣裙', 'Cette robe est belle.', '这条裙子很漂亮。', 'course'],
      ['le pantalon', 'lə pɑ̃.ta.lɔ̃', '裤子', 'Ce pantalon est trop grand.', '这条裤子太大了。', 'course'],
      ['la taille', 'la taj', '尺码；身材', 'Quelle taille faites-vous ?', '您穿多大码？', 'course'],
      ['essayer', 'e.se.je', '试；尝试', 'Je voudrais essayer cette robe.', '我想试一下这条裙子。', 'course'],
      ['noir · noire', 'nwaʁ', '黑色的', 'Je voudrais une robe noire.', '我想要一条黑裙子。', 'course'],
      ['blanc · blanche', 'blɑ̃ · blɑ̃ʃ', '白色的', 'Ce pantalon blanc est joli.', '这条白裤子很好看。', 'course'],
      ['bleu · bleue', 'blø', '蓝色的', 'Vous avez cette robe en bleu ?', '这条裙子有蓝色的吗？', 'course'],
    ],
    dialogue: [
      ['店员', 'Bonjour ! Vous cherchez quelque chose ?', '您好！您在找什么吗？'],
      ['我', "Oui, je voudrais essayer cette robe, s'il vous plaît.", '是的，我想试一下这条裙子。'],
      ['店员', 'Bien sûr. Quelle taille faites-vous ?', '当然可以。您穿多大码？'],
      ['我', 'Je fais du trente-huit. Vous avez cette robe en bleu ?', '我穿 38 码。这条裙子有蓝色的吗？'],
      ['店员', 'Non, désolée, en noir ou en blanc. Quelle couleur préférez-vous ?', '没有，抱歉，只有黑色和白色。您更喜欢哪个颜色？'],
      ['我', "En noir. Et ce pantalon blanc, c'est combien ?", '黑色。那这条白裤子多少钱？'],
      ['店员', "Quarante-cinq euros. Cet été, le blanc, c'est très à la mode !", '四十五欧元。今年夏天很流行白色！'],
      ['我', "D'accord, je prends la robe et ce pantalon.", '好的，我要这条裙子和这条裤子。'],
    ],
    sentences: [['Je voudrais essayer cette robe.', '我想试一下这条裙子。'], ['Quelle taille faites-vous ?', '您穿多大码？'], ['Ces robes sont très belles.', '这些裙子很漂亮。'], ['Quelle couleur préférez-vous ?', '您更喜欢哪个颜色？']],
    cloze: [
      ['Je voudrais essayer ___ robe.', ['cette', 'ce', 'cet'], 0, '我想试一下这条裙子。', 'robe 是阴性 → cette'],
      ['___ hôtel est très cher.', ['Cet', 'Ce', 'Cette'], 0, '这家酒店很贵。', 'hôtel 是阳性，以哑音 h 开头 → cet'],
      ['Vous préférez ___ couleur ?', ['quelle', 'quel', 'quels'], 0, '您喜欢哪个颜色？', 'couleur 是阴性单数 → quelle'],
      ["J'aime ___ robes blanches.", ['ces', 'ce', "c'est"], 0, '我喜欢这些白裙子。', "复数用 ces；c'est 读音相近，但意思是\"这是\""],
    ],
    discover: [{ q: 'ce pantalon → 如果名词是 ami（朋友，阳性，元音开头），要说？', opts: ['cet ami', 'ce ami', 'cette ami'], a: 0, why: '阳性名词以元音或哑音 h 开头时，ce 变成 cet，读 [sɛt]，和 cette 读音一样。这和 mon amie 的道理相同：为了好读。' }],
    write: { prompt: '你在服装店：说想试哪件衣服、你穿多大码，再问有没有别的颜色（3 句，用 ce / cette 和 quel）。', model: 'Je voudrais essayer ce pantalon. Je fais du quarante. Vous avez cette robe en bleu ?' },
  },
  {
    id: 'a1-21', emoji: '🏠', title: '我的家', sub: '方位介词 sur / sous / à côté de', can: '能描述房间布局，说出东西在哪里，帮人找东西', scene: null, grammar: ['g-lieu'],
    words: ['la chambre', 'la table', 'la clé', 'la maison'],
    newWords: [
      ["l'appartement (m.)", 'la.paʁ.tə.mɑ̃', '公寓', "Voilà mon appartement.", '这是我的公寓。', 'course'],
      ['le salon', 'lə sa.lɔ̃', '客厅', 'Le canapé est dans le salon.', '沙发在客厅里。', 'course'],
      ['la cuisine', 'la kɥi.zin', '厨房', 'La cuisine est à côté du salon.', '厨房在客厅旁边。', 'course'],
      ['la salle de bains', 'la sal də bɛ̃', '浴室；卫生间', 'Où est la salle de bains ?', '浴室在哪？', 'course'],
      ['le lit', 'lə li', '床', 'Mon lit est sous la fenêtre.', '我的床在窗户下面。', 'course'],
      ['le canapé', 'lə ka.na.pe', '沙发', 'Le chat est sur le canapé.', '猫在沙发上。', 'course'],
      ['la fenêtre', 'la fə.nɛtʁ', '窗户', 'La table est devant la fenêtre.', '桌子在窗户前面。', 'course'],
    ],
    dialogue: [
      ['Paul', 'Bienvenue ! Voilà mon appartement.', '欢迎！这就是我的公寓。'],
      ['我', 'Il est grand ! Où est la cuisine ?', '好大！厨房在哪？'],
      ['Paul', 'Elle est à côté du salon, en face de la salle de bains.', '在客厅旁边，浴室对面。'],
      ['我', 'Et ta chambre ?', '你的卧室呢？'],
      ['Paul', 'Elle est derrière le salon. Mon lit est sous la fenêtre.', '在客厅后面。我的床在窗户下面。'],
      ['我', 'Très bien ! Euh… où sont mes clés ?', '挺好的！呃……我的钥匙在哪？'],
      ['Paul', 'Tes clés ? Elles sont sur la table, devant le canapé.', '你的钥匙？在桌子上，沙发前面。'],
      ['我', 'Ah oui, entre ton livre et ton café. Merci !', '啊，对，在你的书和咖啡中间。谢谢！'],
    ],
    sentences: [['La cuisine est à côté du salon.', '厨房在客厅旁边。'], ['Mon lit est sous la fenêtre.', '我的床在窗户下面。'], ['Les clés sont sur la table.', '钥匙在桌子上。'], ['La salle de bains est en face de la cuisine.', '浴室在厨房对面。']],
    cloze: [
      ['La cuisine est à côté ___ salon.', ['du', 'de', 'de le'], 0, '厨房在客厅旁边。', 'à côté de + le salon → du salon（必须缩合）'],
      ['Les clés sont ___ la table.', ['sur', 'dans', 'en'], 0, '钥匙在桌子上。', '"在……上面"用 sur；dans 是"在……里面"'],
      ['Le canapé est ___ la fenêtre et la table.', ['entre', 'devant', 'à côté de'], 0, '沙发在窗户和桌子之间。', '"在 A 和 B 之间"：entre A et B'],
      ['La salle de bains est en face ___ la chambre.', ['de', 'du', 'à'], 0, '浴室在卧室对面。', 'en face de + la：de la 不缩合'],
    ],
    discover: [{ q: '中文说"在桌子上"，方位词"上"放在名词后面。法语呢？', opts: ['放在名词前面：sur la table', '也放在后面：la table sur'], a: 0, why: '法语的方位词是"介词"，永远放在名词前面：sur la table（在桌子上）、sous le lit（在床下）。' }],
    write: { prompt: '描述你的房间：床、桌子和窗户分别在哪里（3 句，用方位介词）。', model: 'Mon lit est à côté de la fenêtre. La table est devant le lit. Mes livres sont sur la table.' },
  },
  {
    id: 'a1-22', emoji: '⏰', title: '我的一天', sub: '代词式动词 se lever', can: '能描述自己每天几点起床、洗漱、睡觉', scene: null, grammar: ['g-pronominal'],
    words: ["s'appeler"],
    newWords: [
      ['se réveiller', 'sə ʁe.ve.je', '醒来', 'Je me réveille à six heures.', '我六点醒。', 'course'],
      ['se lever', 'sə lə.ve', '起床', 'Je me lève à sept heures.', '我七点起床。', 'course'],
      ['se doucher', 'sə du.ʃe', '洗澡（淋浴）', 'Je me douche le matin.', '我早上洗澡。', 'course'],
      ["s'habiller", 'sa.bi.je', '穿衣服', "Elle s'habille vite.", '她穿衣服很快。', 'course'],
      ['se coucher', 'sə ku.ʃe', '上床睡觉', 'Tu te couches à quelle heure ?', '你几点睡觉？', 'course'],
      ['tôt', 'to', '早', 'Je me lève tôt.', '我起得早。', 'course'],
      ['tard', 'taʁ', '晚', 'Il se couche tard.', '他睡得晚。', 'course'],
    ],
    dialogue: [
      ['Léa', 'Tu te lèves à quelle heure le matin ?', '你早上几点起床？'],
      ['我', 'Je me réveille à six heures et demie, mais je me lève à sept heures !', '我六点半醒，但七点才起床！'],
      ['Léa', "Tu te lèves tôt ! Moi, je me lève à huit heures. Je me douche, je m'habille et je prends un café.", '你起得真早！我八点起床。洗个澡，穿好衣服，喝杯咖啡。'],
      ['我', 'Et le soir, tu te couches tard ?', '那晚上你睡得晚吗？'],
      ['Léa', 'Oui, à minuit. Et toi ?', '晚，十二点。你呢？'],
      ['我', 'Je me couche à dix heures et demie. Mais le dimanche, je ne me lève pas tôt !', '我十点半睡。不过星期天我不早起！'],
      ['Léa', 'Moi aussi, le dimanche, je me lève à onze heures !', '我也是，星期天我十一点才起！'],
    ],
    sentences: [['Je me lève à sept heures.', '我七点起床。'], ['Tu te couches tard ?', '你睡得晚吗？'], ["Je me douche et je m'habille.", '我洗澡，然后穿衣服。'], ['Le dimanche, je ne me lève pas tôt.', '星期天我不早起。']],
    cloze: [
      ['Nous ___ levons à sept heures.', ['nous', 'se', 'vous'], 0, '我们七点起床。', '反身代词跟着主语变：nous … nous levons'],
      ['Je ___ habille vite.', ["m'", 'me', 'se'], 0, '我穿衣服很快。', "habiller 以哑音 h 开头，me 缩写成 m'"],
      ['Le dimanche, je ___ me lève pas tôt.', ['ne', 'pas', 'non'], 0, '星期天我不早起。', '否定时 ne 放在反身代词前面：je ne me lève pas'],
      ['Elle ___ couche à onze heures.', ['se', 'me', 'te'], 0, '她十一点睡觉。', 'il / elle / ils / elles → se'],
    ],
    discover: [{ q: '"我洗澡" = Je me douche。那"我给孩子洗澡"是？', opts: ["Je douche mon enfant.", "Je me douche mon enfant."], a: 0, why: '动作作用在自己身上才加反身代词；作用在别人身上，就是普通动词 + 宾语。' }],
    write: { prompt: '写写你的一天：几点醒、起床后做什么、几点睡觉（3 句，用代词式动词）。', model: "Je me réveille à six heures. Je me lève, je me douche et je m'habille. Le soir, je me couche à onze heures." },
  },
  {
    id: 'a1-23', emoji: '💪', title: '能、想、必须', sub: '情态动词 vouloir / pouvoir / devoir', can: '能邀请别人、接受或拒绝邀请，说出自己必须做的事', scene: null, grammar: ['g-modaux'],
    words: ['vouloir', 'pouvoir'],
    newWords: [
      ['devoir', 'də.vwaʁ', '必须；应该', 'Je dois travailler demain.', '我明天得工作。', 'course'],
      ['libre', 'libʁ', '有空的；自由的', 'Tu es libre samedi ?', '你星期六有空吗？', 'course'],
      ['la fête', 'la fɛt', '聚会；节日', 'Tu veux venir à la fête ?', '你想来参加聚会吗？', 'course'],
      ['chez', 'ʃe', '在……家', 'On mange chez moi ?', '我们在我家吃饭吧？', 'course'],
      ['apporter', 'a.pɔʁ.te', '带来', 'Je dois apporter quelque chose ?', '我需要带点什么吗？', 'course'],
      ['le dessert', 'lə de.sɛʁ', '甜点', 'Je fais un dessert.', '我做一道甜点。', 'course'],
    ],
    dialogue: [
      ['Paul', 'Tu es libre samedi soir ? Je fais une fête chez moi. Tu veux venir ?', '你星期六晚上有空吗？我在家办个聚会。你想来吗？'],
      ['我', 'Oui, je veux bien ! Je peux venir avec Léa ?', '好啊，很乐意！我能带莱娅一起来吗？'],
      ['Paul', 'Bien sûr ! Vous pouvez arriver à huit heures ?', '当然！你们八点能到吗？'],
      ['我', 'Léa ne peut pas arriver à huit heures. Elle doit travailler.', '莱娅八点到不了。她得工作。'],
      ['Paul', 'Pas de problème, vous pouvez venir à neuf heures.', '没问题，你们可以九点来。'],
      ['我', 'Super. Je dois apporter quelque chose ?', '太好了。我需要带点什么吗？'],
      ['Paul', 'Tu peux faire un dessert, si tu veux !', '你愿意的话，可以做个甜点！'],
      ['我', "D'accord ! À samedi !", '好的！星期六见！'],
    ],
    sentences: [['Tu veux venir à la fête ?', '你想来参加聚会吗？'], ['Je peux venir avec Léa ?', '我能带莱娅一起来吗？'], ['Elle doit travailler samedi.', '她星期六得工作。'], ['Je ne peux pas venir à huit heures.', '我八点来不了。']],
    cloze: [
      ['Tu ___ venir samedi ?', ['peux', 'peut', 'pouvez'], 0, '你星期六能来吗？', 'tu → peux（je / tu 以 x 结尾，il 以 t 结尾）'],
      ['Je veux ___ un dessert.', ['faire', 'fais', 'fait'], 0, '我想做一道甜点。', '情态动词后面用动词原形'],
      ['Nous ___ travailler demain.', ['devons', 'doivons', 'devez'], 0, '我们明天得工作。', 'nous / vous 的词干是 dev-：nous devons'],
      ['Ils ___ venir à la fête.', ['veulent', 'voulent', 'veut'], 0, '他们想来参加聚会。', 'ils veulent：词干用回单数的 eu，不是 ✗ voulent'],
    ],
    discover: [{ q: '"我不能来"，ne … pas 放在哪里？', opts: ['Je ne peux pas venir.', 'Je peux ne pas venir.', 'Je ne peux venir pas.'], a: 0, why: 'ne … pas 夹住变位的情态动词。Je peux ne pas venir 意思变成"我可以不来"，完全不同。' }],
    write: { prompt: '朋友约你周末出去：说你想不想去、能不能去、必须做什么（3 句，用 vouloir / pouvoir / devoir）。', model: 'Je veux bien venir samedi. Mais je ne peux pas arriver à huit heures. Je dois travailler.' },
  },
  {
    id: 'a1-24', emoji: '🚆', title: '周末去了哪？', sub: 'être 型复合过去时', can: '能讲周末去了哪里、什么时候出发和回来', scene: null, grammar: ['g-pc-etre'],
    words: ['aller', 'venir', 'hier'],
    newWords: [
      ['partir', 'paʁ.tiʁ', '出发；离开', 'Nous sommes partis samedi matin.', '我们星期六早上出发的。', 'course'],
      ['arriver', 'a.ʁi.ve', '到达', 'Elle est arrivée hier soir.', '她昨晚到的。', 'course'],
      ['rester', 'ʁɛs.te', '留下；待着', 'Je suis resté à la maison.', '我待在家里。', 'course'],
      ['tomber', 'tɔ̃.be', '摔倒；掉落', "Il est tombé dans l'eau.", '他掉进水里了。', 'course'],
      ['rentrer', 'ʁɑ̃.tʁe', '回家；回来', 'Tu es rentré quand ?', '你什么时候回来的？', 'course'],
      ['naître', 'nɛtʁ', '出生', 'Je suis né à Shanghai.', '我出生在上海。', 'course'],
      ['la mer', 'la mɛʁ', '大海', 'Nous sommes allés à la mer.', '我们去了海边。', 'course'],
    ],
    dialogue: [
      ['Léa', 'Salut ! Tu es allé où ce week-end ?', '嗨！你这个周末去哪了？'],
      ['我', 'Je suis allé à Nice avec mon frère. Nous sommes partis samedi matin.', '我和我哥哥去了尼斯。我们星期六早上出发的。'],
      ['Léa', 'Super ! Vous êtes arrivés à quelle heure ?', '真棒！你们几点到的？'],
      ['我', 'À midi. Nous sommes restés deux jours à la mer.', '中午。我们在海边待了两天。'],
      ['Léa', 'Il a fait beau ?', '天气好吗？'],
      ['我', "Oui, très beau ! Mais mon frère est tombé dans l'eau !", '很好！不过我哥哥掉进水里了！'],
      ['Léa', 'Oh non ! Et vous êtes rentrés quand ?', '哎呀！那你们什么时候回来的？'],
      ['我', 'Dimanche soir. Et toi, tu es restée à Paris ?', '星期天晚上。你呢，你留在巴黎了？'],
    ],
    sentences: [['Je suis allé à Nice.', '我去了尼斯。'], ['Nous sommes partis samedi matin.', '我们星期六早上出发的。'], ['Elle est restée à Paris.', '她留在了巴黎。'], ['Je suis né à Shanghai.', '我出生在上海。']],
    cloze: [
      ['Samedi, je ___ allé à Lyon.', ['suis', 'ai', 'vais'], 0, '星期六我去了里昂。', 'aller 是移动动词，复合过去时用 être'],
      ['Léa est ___ hier soir.', ['arrivée', 'arrivé', 'arrivés'], 0, '莱娅昨晚到的。', '用 être 时过去分词和主语配合：Léa 是女生 → arrivée'],
      ['Nous sommes ___ à la maison.', ['restés', 'resté', 'rester'], 0, '我们待在家里。', 'nous 是复数 → restés（男女混合也用阳性复数）'],
      ["Hier, j'___ mangé au restaurant.", ['ai', 'suis', 'es'], 0, '昨天我在餐厅吃了饭。', 'manger 不是移动动词，还是用 avoir'],
    ],
    discover: [{ q: 'Léa 和 Emma（两个女生）去了巴黎，怎么说？', opts: ['Elles sont allées à Paris.', 'Elles ont allé à Paris.', 'Elles sont allé à Paris.'], a: 0, why: 'aller 用 être 做助动词；过去分词要和主语配合：阴性 + e，复数 + s → allées。' }],
    write: { prompt: '写写你上个周末去了哪里、什么时候出发和回来（3 句，用 être 型复合过去时）。', model: 'Samedi, je suis allé à Lyon avec mes parents. Nous sommes arrivés à dix heures. Dimanche soir, nous sommes rentrés à Paris.' },
  },
];
