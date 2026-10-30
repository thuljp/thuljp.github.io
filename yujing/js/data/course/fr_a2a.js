// 法语核心课程 A2（上）：a2-01 … a2-10
// 格式见 docs/SYLLABUS.md：newWords [词, 音标, 中文, 例句, 例句中文, 'course']；dialogue [说话人, 法文, 中文]
// sentences [法文, 中文]；cloze [带 ___ 的句子, 选项, 正确下标, 中文, 说明]

export const grammar = [
  {
    id: 'g-ir-re', title: '-ir 动词（finir）与 -re 动词（attendre）',
    body: `<p>A1 学了 -er 动词。法语还有两类成批变位的动词：以 finir 为代表的 <b>-ir 第二组动词</b>，和以 attendre 为代表的 <b>-re 动词</b>。</p>
<table><tr><th></th><th>finir 结束</th><th>attendre 等待</th></tr>
<tr><td>je / j'</td><td>finis</td><td>attends</td></tr>
<tr><td>tu</td><td>finis</td><td>attends</td></tr>
<tr><td>il / elle / on</td><td>finit</td><td>attend</td></tr>
<tr><td>nous</td><td>fini<b>ss</b>ons</td><td>attendons</td></tr>
<tr><td>vous</td><td>fini<b>ss</b>ez</td><td>attendez</td></tr>
<tr><td>ils / elles</td><td>fini<b>ss</b>ent</td><td>attendent</td></tr>
<tr><td>过去分词</td><td>fini</td><td>attend<b>u</b></td></tr></table>
<p><b>-ir 第二组</b>：去掉 -ir，加 -is, -is, -it, -issons, -issez, -issent。复数多出一个 <b>-iss-</b>。单数三个形式读音相同 [fi.ni]。同类：choisir 选择、réussir 成功、grandir 长大、remplir 填写。</p>
<p><b>-re 动词</b>：去掉 -re，加 -s, -s, —, -ons, -ez, -ent。注意 <b>il attend</b> 后面什么都不加，词尾的 d 不发音。同类：répondre 回答、entendre 听见、vendre 卖、descendre 下来、perdre 丢失、rendre 归还。</p>
<p><b>例外</b>：不是所有 -ir 动词都有 -iss-：partir、sortir、dormir 是 je pars / nous partons；venir 另有一套。-re 结尾的 prendre、faire、dire、boire 也都不规则，要单独记。</p>
<ul><li>常见错误：<b>ils finent</b> ✗ → ils fini<b>ss</b>ent ✓；<b>il attendt</b> ✗ → il attend ✓。</li>
<li>attendre 直接加宾语，不需要介词：J'attends le bus ✓（不要照英语 wait for 说成 attendre pour）。</li>
<li>répondre 却要加 à：répondre <b>à</b> un message, répondre <b>au</b> téléphone。</li></ul>`,
    ex: [['Le cours finit à midi.', '课中午结束。'], ['Nous finissons le travail à six heures.', '我们六点下班。'], ["J'attends Léa devant la gare.", '我在火车站前等莱娅。'], ['Il ne répond pas au téléphone.', '他不接电话。']],
  },
  {
    id: 'g-savoir', title: 'savoir 与 connaître：知道 vs 认识',
    body: `<table><tr><th></th><th>savoir 知道；会</th><th>connaître 认识；熟悉</th></tr>
<tr><td>je</td><td>sais</td><td>connais</td></tr>
<tr><td>tu</td><td>sais</td><td>connais</td></tr>
<tr><td>il / elle</td><td>sait</td><td>connaît</td></tr>
<tr><td>nous</td><td>savons</td><td>connaissons</td></tr>
<tr><td>vous</td><td>savez</td><td>connaissez</td></tr>
<tr><td>ils / elles</td><td>savent</td><td>connaissent</td></tr>
<tr><td>过去分词</td><td>su</td><td>connu</td></tr></table>
<p>中文"知道、认识、会"在法语里分给两个动词，<b>看后面接什么</b>来选：</p>
<table><tr><th>savoir + …</th><th>connaître + …</th></tr>
<tr><td>从句：que / si / où / quand / comment…<br>Je sais <b>où</b> il habite.</td><td>人：Je connais <b>Léa</b>.</td></tr>
<tr><td>动词原形（学会的技能）：<br>Je sais <b>nager</b>. 我会游泳。</td><td>地方：Tu connais <b>Lyon</b> ? 你熟悉里昂吗？</td></tr>
<tr><td>一条具体信息：Je sais la réponse.</td><td>作品、东西、店：Je connais <b>ce livre</b> / <b>ce restaurant</b>.</td></tr></table>
<ul><li>savoir 后面<b>不能直接接人或地方</b>：Je sais Léa ✗ → Je connais Léa ✓。</li>
<li>带从句只能用 savoir：Je connais où il habite ✗ → Je sais où il habite ✓。</li>
<li>"会"做某事：学会的技能用 <b>savoir</b>（Je sais conduire 我会开车），条件允许用 <b>pouvoir</b>（Je ne peux pas conduire, j'ai bu 我不能开，我喝酒了）。中国人常把"会"一律说成 pouvoir。</li>
<li>connaît 的 î 只出现在 t 前面：il connaît，但 je connais。</li>
<li>口语里 Je ne sais pas 常说成 Je sais pas，甚至 [ʃɛ pa]。</li></ul>`,
    ex: [['Tu connais ce quartier ?', '你熟悉这个街区吗？'], ['Je ne sais pas à quelle heure il arrive.', '我不知道他几点到。'], ['Elle sait parler trois langues.', '她会说三种语言。'], ['Je connais un bon restaurant près d\'ici.', '我知道附近一家不错的餐厅。']],
  },
  {
    id: 'g-imparfait', title: '未完成过去时：过去的状态和习惯',
    body: `<p><b>构成</b>：取现在时 <b>nous</b> 的形式，去掉 -ons 得到词根，再加词尾 <b>-ais, -ais, -ait, -ions, -iez, -aient</b>。</p>
<table><tr><th>原形</th><th>nous 现在时</th><th>词根</th><th>未完成过去时</th></tr>
<tr><td>parler</td><td>nous parl<i>ons</i></td><td>parl-</td><td>je parlais</td></tr>
<tr><td>finir</td><td>nous finiss<i>ons</i></td><td>finiss-</td><td>je finissais</td></tr>
<tr><td>prendre</td><td>nous pren<i>ons</i></td><td>pren-</td><td>je prenais</td></tr>
<tr><td>faire</td><td>nous fais<i>ons</i></td><td>fais-</td><td>je faisais [fə.zɛ]</td></tr>
<tr><td>avoir</td><td>nous av<i>ons</i></td><td>av-</td><td>j'avais</td></tr>
<tr><td>aller</td><td>nous all<i>ons</i></td><td>all-</td><td>j'allais</td></tr></table>
<p><b>唯一的例外是 être</b>，词根是 <b>ét-</b>：j'étais, tu étais, il était, nous étions, vous étiez, ils étaient。</p>
<table><tr><td>j'habitais</td><td>nous habitions</td></tr><tr><td>tu habitais</td><td>vous habitiez</td></tr><tr><td>il habitait</td><td>ils habitaient</td></tr></table>
<p>-ais, -ait, -aient 读音完全相同 [ɛ]，写的时候要分清。</p>
<p><b>用法</b>：</p>
<ul><li><b>过去的状态和描写</b>：年龄、天气、心情、外貌、"当时是什么样"：J'avais dix ans. Il faisait froid. C'était super.</li>
<li><b>过去的习惯、反复发生的事</b>，常和 tous les jours、le dimanche、toujours、souvent 连用：Le dimanche, nous allions chez ma grand-mère.</li>
<li><b>Quand j'étais petit(e)…</b> "我小时候……" 是最典型的开头。</li></ul>
<p>拼写：-ger 动词在 a 前保留 e：je mangeais；-cer 动词用 ç：je commençais。</p>
<ul><li>中文"以前常常……"没有时态标记，法语必须用未完成过去时。别用复合过去时讲习惯：Quand j'étais petit, j'ai joué dehors tous les jours ✗ → je jouais ✓。</li>
<li>il y a → <b>il y avait</b>；c'est → <b>c'était</b>。</li>
<li>年龄照样用 avoir：J'avais dix ans ✓（J'étais dix ans ✗）。</li></ul>`,
    ex: [["Quand j'étais petit, j'habitais à la campagne.", '我小时候住在乡下。'], ['Le dimanche, nous allions chez mes grands-parents.', '每个星期天我们都去祖父母家。'], ["Il faisait froid et il y avait beaucoup de neige.", '那时天很冷，雪很多。'], ["Avant, c'était un petit village.", '以前这里是个小村子。']],
  },
  {
    id: 'g-pc-imp', title: '复合过去时 vs 未完成过去时：讲故事',
    body: `<p>讲过去的事时，两个时态分工合作：未完成过去时搭"舞台布景"，复合过去时推进"剧情"。</p>
<table><tr><th>未完成过去时 imparfait</th><th>复合过去时 passé composé</th></tr>
<tr><td>背景、描写：时间、天气、地点、人的状态<br>Il était huit heures. Il pleuvait.</td><td>事件：发生了什么、接着做了什么<br>Un monsieur est tombé. J'ai appelé une ambulance.</td></tr>
<tr><td>正在进行、被打断的动作<br>Je regardais la télé…</td><td>打断它的动作<br>… quand Paul est arrivé.</td></tr>
<tr><td>习惯、反复：tous les jours, souvent</td><td>一次性的、有明确次数或时间段：une fois, trois fois, hier</td></tr></table>
<p><b>经典句型</b>：imparfait + <b>quand</b> + passé composé<br>Je dormais <b>quand</b> le téléphone a sonné. 我正睡着，电话响了。<br>也可以用 <b>pendant que</b> + imparfait 表示"在……的时候"：Pendant que j'attendais, le bus est passé.</p>
<p><b>判断方法</b>：问自己"这句话让故事往前走了吗？"往前走 → 复合过去时；只是描述当时的样子 → 未完成过去时。<b>tout à coup</b>（突然）后面几乎总是复合过去时。</p>
<p>同一个动词，两种时态意思不同：<br>J'<b>avais</b> peur. 我（当时一直）很害怕。— J'<b>ai eu</b> peur. 我吓了一跳（那一下）。<br>Il <b>était</b> malade. 他那时病着。— Il <b>a été</b> malade toute la semaine. 他病了整整一周（已经结束）。</p>
<ul><li>中国人最常见的问题：因为中文用"了"，就把整个故事都写成复合过去时。背景要用未完成过去时：Ce jour-là, il a fait beau ✗（作背景时）→ il faisait beau ✓。</li>
<li>反过来，有明确起止的整段时间用复合过去时：J'ai habité à Lyon deux ans ✓（不用 j'habitais）。</li>
<li>别忘了 être 型动词：il est tombé, elle est arrivée（不是 il a tombé）。</li></ul>`,
    ex: [['Il pleuvait quand je suis sorti.', '我出门的时候正下着雨。'], ['Nous regardions la télé quand Paul est arrivé.', '保罗到的时候我们正在看电视。'], ["Il était tard, alors j'ai pris un taxi.", '当时已经很晚了，所以我打了辆车。'], ["Tout à coup, j'ai eu peur.", '突然，我吓了一跳。']],
  },
  {
    id: 'g-cod', title: '直接宾语代词 me, te, le, la, nous, vous, les',
    body: `<table><tr><th>单数</th><th>复数</th></tr>
<tr><td>me (m') 我</td><td>nous 我们</td></tr>
<tr><td>te (t') 你</td><td>vous 你们；您</td></tr>
<tr><td>le (l') 他；它（阳性）<br>la (l') 她；它（阴性）</td><td>les 他们；她们；它们</td></tr></table>
<p><b>直接宾语</b>是动词后面不加介词、直接跟着的宾语。代替它时用上表的代词：Je regarde <b>le film</b>. → Je <b>le</b> regarde.</p>
<p><b>位置：放在变位动词前面</b>（和中文、英语语序都相反）。</p>
<table><tr><th>句子类型</th><th>代词位置</th><th>例子</th></tr>
<tr><td>现在时</td><td>动词前</td><td>Je <b>la</b> connais.</td></tr>
<tr><td>否定</td><td>ne + 代词 + 动词 + pas</td><td>Je ne <b>la</b> connais pas.</td></tr>
<tr><td>aller / pouvoir / vouloir + 原形</td><td>原形前</td><td>Je vais <b>l'</b>acheter. Tu peux <b>le</b> rendre.</td></tr>
<tr><td>复合过去时</td><td>助动词前</td><td>Je <b>l'</b>ai acheté.</td></tr>
<tr><td>肯定命令式</td><td>动词后，加连字符</td><td>Prends-<b>le</b> ! Regarde-<b>moi</b> !（me → moi）</td></tr>
<tr><td>否定命令式</td><td>动词前</td><td>Ne <b>le</b> prends pas !</td></tr></table>
<p><b>复合过去时的配合</b>：直接宾语代词放在 avoir 前面时，过去分词要和它的性数一致：</p>
<ul><li>la veste → Je <b>l'</b>ai acheté<b>e</b>.</li>
<li>les chaussures → Je <b>les</b> ai acheté<b>es</b>.</li>
<li>le pantalon → Je <b>l'</b>ai acheté.（阳性单数不加）</li>
<li>大多数配合听不出来（achetée = acheté），但以辅音结尾的分词会变音：la robe → je l'ai pri<b>se</b> [pʁiz]。</li></ul>
<p>别把代词和冠词搞混：Je prends <b>le</b> bus（冠词，在名词前）/ Je <b>le</b> prends（代词，在动词前）。</p>
<ul><li>常见错误①：代词放在动词后面：Je connais la ✗ → Je la connais ✓。</li>
<li>常见错误②：照中文习惯把宾语省掉。"你买那件外套了吗？——买了。"法语不能说 Oui, j'ai acheté ✗，要说 Oui, je l'ai achetée ✓。</li>
<li>只有<b>不带介词</b>的宾语才用这组代词；带 à 的人要用间接宾语代词（下一课）。</li></ul>`,
    ex: [['Ce pull ? Je le prends.', '这件毛衣？我要了。'], ['Tu connais Léa ? — Oui, je la connais bien.', '你认识莱娅吗？——认识，很熟。'], ['Les chaussures, je les ai achetées hier.', '那双鞋我是昨天买的。'], ['Tu peux m\'aider ?', '你能帮我吗？']],
  },
  {
    id: 'g-coi', title: '间接宾语代词 me, te, lui, nous, vous, leur',
    body: `<table><tr><th>单数</th><th>复数</th></tr>
<tr><td>me (m') 给我</td><td>nous 给我们</td></tr>
<tr><td>te (t') 给你</td><td>vous 给你们；给您</td></tr>
<tr><td><b>lui</b> 给他；给她</td><td><b>leur</b> 给他们；给她们</td></tr></table>
<p><b>间接宾语</b>是用 <b>à + 人</b> 引出的宾语。代替时第三人称用 lui / leur：Je téléphone <b>à Paul</b>. → Je <b>lui</b> téléphone.</p>
<ul><li><b>lui</b> 不分阴阳："给他""给她"都是 lui。</li>
<li><b>leur</b> 作代词<b>永远不加 s</b>（主有形容词才有 leurs：leurs amis）。</li>
<li>me, te, nous, vous 直接宾语和间接宾语同形。</li></ul>
<table><tr><th colspan="2">常用"动词 + à + 人"</th></tr>
<tr><td>téléphoner à 给……打电话</td><td>parler à 跟……说话</td></tr>
<tr><td>dire à 告诉</td><td>demander à 问；请求</td></tr>
<tr><td>donner à 给</td><td>offrir à 送</td></tr>
<tr><td>envoyer à 寄给；发给</td><td>écrire à 写信给</td></tr>
<tr><td>répondre à 回答</td><td>plaire à 讨……喜欢</td></tr></table>
<p><b>位置</b>和直接宾语代词完全一样：变位动词前；原形前；复合过去时放在助动词前；肯定命令式放在动词后（Téléphone-<b>lui</b> ! Dis-<b>moi</b> !）。</p>
<p><b>复合过去时不配合</b>：Léa ? Je <b>lui</b> ai téléphoné.（分词不加 e）只有直接宾语代词在前面才配合。</p>
<ul><li>中文"给他打电话""问他"看不出直接还是间接，<b>要按法语动词记</b>：téléphoner <b>à</b> qqn → lui；appeler qqn（不加 à）→ le / la：Je lui téléphone = Je l'appelle。</li>
<li>demander à qqn → Je <b>lui</b> demande（不说 je la demande）；aider qqn 是直接宾语 → Je <b>l'</b>aide（不说 je lui aide）。</li>
<li>Je téléphone lui ✗ → Je lui téléphone ✓。</li>
<li>à + 东西或地方不用 lui，用 y（下一课）。</li></ul>`,
    ex: [['Je lui téléphone ce soir.', '我今晚给他（她）打电话。'], ['Tu leur as parlé ?', '你跟他们谈过了吗？'], ["Qu'est-ce que tu vas lui offrir ?", '你打算送他（她）什么？'], ['Écris-moi un message !', '给我发条消息！']],
  },
  {
    id: 'g-y-en', title: '代词 y 和 en',
    body: `<p><b>y</b> 代替：</p>
<ul><li><b>地点</b>（à / en / chez / dans / sur + 地点）：Tu vas à Lyon ? — Oui, j'<b>y</b> vais. 我去（那儿）。</li>
<li><b>à + 东西 / 事情</b>：Tu as répondu à son e-mail ? — Oui, j'<b>y</b> ai répondu.</li></ul>
<p><b>en</b> 代替：</p>
<ul><li><b>de + 东西</b>（包括部分冠词 du / de la / des 后面的东西）：Tu veux du café ? — Oui, j'<b>en</b> veux bien.</li>
<li><b>数量</b>：数词或数量词<b>留在句末</b>：Tu as des frères ? — J'<b>en</b> ai <b>deux</b>. / J'en ai beaucoup. / J'en voudrais un kilo.</li>
<li><b>de + 地点</b>（从那儿）：Tu viens de la gare ? — Oui, j'en viens.</li>
<li>带 de 的动词搭配：avoir envie de, avoir besoin de, parler de：Tu as besoin de ton passeport ? — Oui, j'en ai besoin.</li></ul>
<table><tr><th>问</th><th>答</th></tr>
<tr><td>Tu vas <b>au musée</b> ?</td><td>Oui, j'<b>y</b> vais.</td></tr>
<tr><td>Tu es déjà allé <b>à Marseille</b> ?</td><td>Oui, j'<b>y</b> suis allé.</td></tr>
<tr><td>Il y a <b>du pain</b> ?</td><td>Oui, il y <b>en</b> a.</td></tr>
<tr><td>Tu as <b>des amis</b> là-bas ?</td><td>Oui, j'<b>en</b> ai <b>deux</b>.</td></tr></table>
<p><b>位置</b>和其他宾语代词一样：变位动词前（Je n'y vais pas）；复合过去时助动词前（J'en ai mangé）；原形前（Je vais y aller）；肯定命令式放后面，-er 动词的 tu 命令式要补回 s：<b>Vas-y !</b> <b>Manges-en !</b></p>
<p>常用固定说法：<b>On y va ?</b> 走吗？<b>Allons-y !</b> 走吧！<b>Vas-y !</b> 来吧／加油！il y a 里的 y 也是它。</p>
<ul><li>中文"我去"可以不说"那儿"，法语 aller 后面必须有地点或 y：Tu vas à Paris ? — Oui, je vais ✗ → Oui, j'y vais ✓。</li>
<li>回答数量时别丢数字，也别丢 en：J'ai deux ✗ → J'en ai deux ✓。</li>
<li>y / en 一般不代替人：à + 人 → lui / leur；de + 人 → de lui / d'elle。</li>
<li>en 在复合过去时前面<b>不引起配合</b>：Des pommes ? J'en ai mangé（不写 mangées）。</li></ul>`,
    ex: [["Tu es déjà allé à Marseille ? — Oui, j'y suis allé l'été dernier.", '你去过马赛吗？——去过，去年夏天去的。'], ['Il reste du pain ? — Oui, il en reste un peu.', '还有面包吗？——还剩一点。'], ['Combien de cafés tu bois par jour ? — J\'en bois trois.', '你一天喝几杯咖啡？——三杯。'], ['On y va ?', '我们走吗？']],
  },
  {
    id: 'g-comparatif', title: '比较级与最高级：plus, moins, aussi, meilleur, mieux',
    body: `<table><tr><th>结构</th><th>意思</th><th>例子</th></tr>
<tr><td><b>plus</b> + 形容词/副词 + <b>que</b></td><td>比……更</td><td>Paris est plus grand que Lyon.</td></tr>
<tr><td><b>moins</b> + 形容词/副词 + <b>que</b></td><td>不如……</td><td>Le train est moins cher que l'avion.</td></tr>
<tr><td><b>aussi</b> + 形容词/副词 + <b>que</b></td><td>和……一样</td><td>Elle est aussi grande que sa mère.</td></tr></table>
<p>形容词照常和主语配合：Ma sœur est plus grand<b>e</b> que moi。que 后面接人称代词要用重读形式：que <b>moi</b>, que <b>toi</b>, que <b>lui</b>。</p>
<p><b>比名词、比动作</b>：plus de / moins de / <b>autant de</b> + 名词（不加冠词）：J'ai plus de travail que toi. 动词 + plus / moins / <b>autant</b>：Il travaille plus que moi. 注意"一样多"在名词、动词前是 autant，不是 aussi。</p>
<p><b>不规则：bon 和 bien</b></p>
<table><tr><th>原级</th><th>比较级</th><th>最高级</th></tr>
<tr><td>bon(ne) 好的（形容词，修饰名词）</td><td><b>meilleur(e)(s)</b></td><td>le / la / les meilleur(e)(s)</td></tr>
<tr><td>bien 好地（副词，修饰动词）</td><td><b>mieux</b></td><td>le mieux</td></tr></table>
<p>Ce café est <b>meilleur</b>.（plus bon ✗）　Elle chante <b>mieux</b> que moi.（plus bien ✗）<br>判断：说"东西好"用 meilleur，说"做得好"用 mieux。C'est mieux（这样更好）是固定说法。</p>
<p><b>最高级</b>：le / la / les + plus / moins + 形容词，"在……中"用 <b>de</b>：</p>
<ul><li>形容词在名词后：冠词要<b>重复</b>：le restaurant <b>le plus</b> cher <b>du</b> quartier。</li>
<li>形容词在名词前（grand, petit, beau, bon）：la plus belle ville de France，le meilleur restaurant de Paris。</li></ul>
<ul><li>别漏掉 que：Paris est plus grand Lyon ✗。</li>
<li>最高级的范围用 de，不用 dans：le plus grand <b>de</b> la classe ✓（dans la classe ✗）。</li>
<li>最高级的冠词要配合：<b>la</b> plus belle、<b>les</b> plus chers。</li></ul>`,
    ex: [['Le train est plus rapide que le bus.', '火车比公交车快。'], ["Ce restaurant est meilleur que l'autre.", '这家餐厅比另一家好。'], ['Tu parles mieux français que moi !', '你法语说得比我好！'], ["C'est la plus belle ville de France.", '这是法国最美的城市。']],
  },
  {
    id: 'g-futur', title: '简单将来时：将来、预测和承诺',
    body: `<p><b>构成</b>：动词原形 + 词尾 <b>-ai, -as, -a, -ons, -ez, -ont</b>（就是 avoir 的现在时去掉 av-）。-re 动词先去掉末尾的 e。</p>
<table><tr><th></th><th>parler</th><th>finir</th><th>prendre</th></tr>
<tr><td>je</td><td>parler<b>ai</b></td><td>finir<b>ai</b></td><td>prendr<b>ai</b></td></tr>
<tr><td>tu</td><td>parler<b>as</b></td><td>finir<b>as</b></td><td>prendr<b>as</b></td></tr>
<tr><td>il / elle</td><td>parler<b>a</b></td><td>finir<b>a</b></td><td>prendr<b>a</b></td></tr>
<tr><td>nous</td><td>parler<b>ons</b></td><td>finir<b>ons</b></td><td>prendr<b>ons</b></td></tr>
<tr><td>vous</td><td>parler<b>ez</b></td><td>finir<b>ez</b></td><td>prendr<b>ez</b></td></tr>
<tr><td>ils / elles</td><td>parler<b>ont</b></td><td>finir<b>ont</b></td><td>prendr<b>ont</b></td></tr></table>
<p><b>不规则词根</b>（词尾不变，词根都以 r 结尾）：</p>
<table><tr><td>être → <b>ser-</b> je serai</td><td>avoir → <b>aur-</b> j'aurai</td></tr>
<tr><td>aller → <b>ir-</b> j'irai</td><td>faire → <b>fer-</b> je ferai</td></tr>
<tr><td>venir → <b>viendr-</b> je viendrai</td><td>pouvoir → <b>pourr-</b> je pourrai</td></tr>
<tr><td>voir → verr- je verrai</td><td>vouloir → voudr- je voudrai</td></tr>
<tr><td>il faut → il faudra</td><td>il pleut → il pleuvra</td></tr></table>
<p><b>用法</b>：</p>
<ul><li>预测、较远或不太确定的将来：Dans dix ans, je serai en France.</li>
<li>承诺、计划：Je t'appellerai demain.</li>
<li>和近将来时 aller + 原形的区别：近将来时更口语，表示马上发生或已经安排好的事（Je vais partir 我这就走）；简单将来时更书面，多用于较远的将来、预测和承诺。</li></ul>
<p><b>quand + 将来时</b>：主句是将来，quand 从句<b>也要用将来时</b>（中文、英语都用现在时）：<b>Quand je serai</b> grand, je serai médecin. 等我长大了，我要当医生。</p>
<ul><li>Quand j'ai trente ans, j'achèterai une maison ✗ → Quand j'<b>aurai</b> trente ans ✓（英语 when I am 的干扰）。</li>
<li>但 <b>si</b> 后面不用将来时：S'il fait beau demain, nous irons à la plage.（si + 现在时，主句将来时）</li>
<li>aller 的将来是 j'irai，不是 j'allerai；faire 是 je ferai，不是 je fairai。</li>
<li>je parlerai（将来时）和 je parlerais（条件式，以后学）读音几乎一样，拼写不同。</li></ul>`,
    ex: [["Dans dix ans, j'habiterai à la campagne.", '十年后，我会住在乡下。'], ['Quand je serai à Paris, je t\'appellerai.', '等我到了巴黎，我给你打电话。'], ['Demain, il fera beau.', '明天天气会很好。'], ['Tu viendras avec nous ?', '你会跟我们一起来吗？']],
  },
  {
    id: 'g-relatif', title: '关系代词 qui, que, où',
    body: `<p>关系代词把两个句子连成一句，相当于中文的"……的"。区别在于：法语的修饰从句放在名词<b>后面</b>，中文放在前面。<br>我推荐的餐厅 → le restaurant <b>que</b> je recommande</p>
<table><tr><th>代词</th><th>作用</th><th>例子</th></tr>
<tr><td><b>qui</b></td><td>在从句里作<b>主语</b>，后面紧跟动词</td><td>un ami <b>qui</b> habite à Lyon<br>一个住在里昂的朋友</td></tr>
<tr><td><b>que</b> (qu')</td><td>在从句里作<b>直接宾语</b>，后面跟"主语 + 动词"</td><td>le livre <b>que</b> je lis<br>我在读的书</td></tr>
<tr><td><b>où</b></td><td>代替<b>地点</b>或<b>时间</b></td><td>la ville <b>où</b> je suis né 我出生的城市<br>le jour <b>où</b> je suis arrivé 我到的那天</td></tr></table>
<p><b>判断方法</b>：看关系代词后面紧接的是什么。<br>… <b>qui</b> + 动词（qui habite）　… <b>que</b> + 主语（que je lis）</p>
<ul><li>que 遇元音缩写成 qu'：le film qu'il a vu。<b>qui 永远不缩写</b>：l'ami qui arrive（qu'arrive ✗）。</li>
<li>qui 后面的动词和它代替的名词一致：les amis qui <b>viennent</b>。</li>
<li>que + 复合过去时：que 是直接宾语，放在 avoir 前面，所以分词要配合：la veste que j'ai acheté<b>e</b>。</li>
<li>où 也能表示时间："……的那天"是 le jour où（le jour quand ✗）。</li></ul>
<ul><li>不要按中文"谁 / 什么"来选！qui 不一定指人，que 不一定指物：le bus <b>qui</b> arrive（物，作主语）、la femme <b>que</b> j'aime（人，作宾语）。</li>
<li>关系代词不能省：la ville je suis né ✗（英语可以省 that，法语不行）。</li>
<li>语序别照搬中文：le je recommande restaurant ✗。</li></ul>`,
    ex: [["J'ai un ami qui habite à Lyon.", '我有个朋友住在里昂。'], ["C'est le restaurant que je préfère.", '这是我最喜欢的餐厅。'], ["Voici le quartier où j'habite.", '这就是我住的街区。'], ["La veste que j'ai achetée est trop grande.", '我买的那件外套太大了。']],
  },
  {
    id: 'g-mal', title: 'avoir mal à：哪里疼',
    body: `<p><b>avoir mal à + 定冠词 + 身体部位</b> = ……疼。à 要和冠词缩合：</p>
<table><tr><th>à + 冠词</th><th>例子</th></tr>
<tr><td>à + le → <b>au</b></td><td>J'ai mal <b>au</b> ventre. 我肚子疼。</td></tr>
<tr><td>à + la → <b>à la</b></td><td>J'ai mal <b>à la</b> tête. 我头疼。</td></tr>
<tr><td>à + l' → <b>à l'</b></td><td>J'ai mal <b>à l'</b>oreille. 我耳朵疼。</td></tr>
<tr><td>à + les → <b>aux</b></td><td>J'ai mal <b>aux</b> dents. 我牙疼。</td></tr></table>
<table><tr><td>la tête 头</td><td>la gorge 嗓子</td><td>le ventre 肚子</td></tr>
<tr><td>le dos 背</td><td>le bras 胳膊</td><td>la jambe 腿</td></tr>
<tr><td>le pied 脚</td><td>les yeux 眼睛（单数 l'œil）</td><td>les dents 牙</td></tr></table>
<p>身体部位前用<b>定冠词</b>，不用主有形容词：J'ai mal à ma tête ✗ → J'ai mal à la tête ✓。</p>
<p><b>其他常用说法</b>：</p>
<ul><li>医生问：<b>Où est-ce que vous avez mal ?</b> 您哪里疼？ <b>Qu'est-ce qui ne va pas ?</b> 哪里不舒服？</li>
<li><b>Ça fait mal.</b> 疼。 <b>Ça me fait mal ici.</b> 我这里疼。</li>
<li>症状：J'ai de la fièvre 我发烧；Je tousse 我咳嗽；J'ai la grippe 我得了流感；J'ai un rhume 我感冒了；Je suis malade 我病了。</li>
<li>小心：<b>avoir mal au cœur</b> 是"恶心想吐"，不是心脏疼。</li></ul>
<ul><li>中国人常说 Ma tête est mal ✗ 或 Je suis mal à la tête ✗。法语用 avoir："我有疼在头上"：J'ai mal à la tête ✓。</li>
<li>à + le 必须缩合：J'ai mal à le dos ✗ → J'ai mal au dos ✓。</li>
<li>mal 在这里是名词，"很疼"说 J'ai très mal。</li></ul>`,
    ex: [["J'ai mal à la tête et à la gorge.", '我头疼，嗓子也疼。'], ['Tu as mal au dos ?', '你背疼吗？'], ['Ça me fait mal quand je marche.', '我走路的时候会疼。'], ['Elle a mal aux yeux.', '她眼睛疼。']],
  },
  {
    id: 'g-il-faut', title: 'il faut：必须、需要',
    body: `<p><b>il faut</b> 是无人称结构：主语永远是 il，不指任何人，也只有这一个形式（没有 je faut、nous faut）。</p>
<table><tr><th>结构</th><th>意思</th><th>例子</th></tr>
<tr><td>il faut + 动词原形</td><td>必须、应该（泛指大家）</td><td>Il faut boire beaucoup d'eau. 要多喝水。</td></tr>
<tr><td>il faut + 名词</td><td>需要某样东西</td><td>Il faut une ordonnance. 需要处方。<br>Il faut deux heures pour aller à Lyon.</td></tr>
<tr><td><b>il ne faut pas</b> + 原形</td><td><b>不可以</b>、禁止</td><td>Il ne faut pas fumer ici. 这里不许抽烟。</td></tr></table>
<p>其他时态：过去 il fallait / il a fallu；将来 <b>il faudra</b>：Il faudra revenir dans une semaine.</p>
<p><b>il ne faut pas ≠ 不必</b>。"不必、不用"要说 <b>pas besoin de</b> 或 <b>ce n'est pas la peine de</b>：Ce n'est pas la peine de revenir. 不用再来了。</p>
<p>想说清楚"谁"必须做，口语常用 <b>devoir</b>：Vous devez rester au lit. 也可以说 il me faut / il vous faut + 名词：Il vous faut du repos. 您需要休息。（il faut que + 虚拟式在 B1 学。）</p>
<ul><li>Je faut ✗ / Tu faut ✗：只能是 il faut。</li>
<li>il faut 后面直接接原形，不加 de：Il faut de boire ✗ → Il faut boire ✓。</li>
<li>中国人常把 il ne faut pas 理解成"不需要"，其实是"绝对不能"。</li></ul>`,
    ex: [["Il faut boire beaucoup d'eau.", '要多喝水。'], ['Il ne faut pas fumer ici.', '这里不许抽烟。'], ['Il faut une ordonnance pour ce médicament.', '这种药需要处方。'], ['Il faudra revenir dans une semaine.', '一周后需要再来一趟。']],
  },
];

export const CAT = {
  'g-ir-re': '动词变位', 'g-savoir': '动词变位',
  'g-imparfait': '时态与语气', 'g-pc-imp': '时态与语气', 'g-futur': '时态与语气',
  'g-cod': '代词', 'g-coi': '代词', 'g-y-en': '代词',
  'g-comparatif': '名词与形容词',
  'g-relatif': '从句与连接',
  'g-mal': '表达与语用', 'g-il-faut': '句型',
};

export const units = [
  {
    id: 'a2-01', emoji: '🧠', title: '我知道 · 我认识', sub: '-ir / -re 动词 · savoir 和 connaître', can: '能分清"知道"和"认识"，用 finir、attendre 等动词谈日常安排', scene: null, grammar: ['g-ir-re', 'g-savoir'],
    words: ['savoir'],
    newWords: [
      ['connaître', 'kɔ.nɛtʁ', '认识；熟悉', 'Tu connais ce quartier ?', '你熟悉这个街区吗？', 'course'],
      ['finir', 'fi.niʁ', '结束；完成', 'Le cours finit à midi.', '课中午结束。', 'course'],
      ['attendre', 'a.tɑ̃dʁ', '等待', "J'attends Léa devant la gare.", '我在火车站前等莱娅。', 'course'],
      ['répondre', 'ʁe.pɔ̃dʁ', '回答；回复', 'Il ne répond pas au téléphone.', '他不接电话。', 'course'],
      ['choisir', 'ʃwa.ziʁ', '选择', 'Tu as choisi un restaurant ?', '你选好餐厅了吗？', 'course'],
      ['descendre', 'de.sɑ̃dʁ', '下来；下（车）', 'Je descends du bus ici.', '我在这儿下车。', 'course'],
      ['le quartier', 'lə kaʁ.tje', '街区；居住区', "J'aime bien ce quartier.", '我挺喜欢这个街区的。', 'course'],
      ['le retard', 'lə ʁə.taʁ', '迟到；延误', 'Pardon pour le retard !', '抱歉来晚了！', 'course'],
    ],
    dialogue: [
      ['Léa', 'Tu connais Marc, le frère de Paul ?', '你认识马克吗？保罗的兄弟。'],
      ['我', 'Non, je ne connais pas Marc. Il arrive quand ?', '不认识。他什么时候到？'],
      ['Léa', 'Je ne sais pas. Il finit son travail à six heures, mais il ne répond pas au téléphone.', '我不知道。他六点下班，可是不接电话。'],
      ['我', 'Alors, on attend ici ?', '那我们就在这儿等？'],
      ['Léa', 'Oui. Tu connais ce quartier ? Il y a un bon restaurant juste à côté.', '嗯。你熟悉这个街区吗？旁边就有一家不错的餐厅。'],
      ['我', 'Non, je ne connais pas bien Paris. Tu sais à quelle heure il ferme ?', '不熟，我对巴黎还不太熟。你知道它几点关门吗？'],
      ['Léa', 'Vers minuit, je pense. Ah, regarde ! Marc descend du bus.', '大概半夜吧。啊，你看！马克下公交车了。'],
      ['Marc', 'Pardon pour le retard ! Vous avez choisi le restaurant ?', '抱歉来晚了！你们选好餐厅了吗？'],
      ['我', 'Oui, Léa connaît un bon restaurant. Et elle sait choisir les vins !', '选好了，莱娅知道一家好餐厅。而且她很会挑酒！'],
    ],
    sentences: [
      ['Je ne connais pas bien Paris.', '我对巴黎不太熟。'],
      ['Tu sais à quelle heure il ferme ?', '你知道它几点关门吗？'],
      ['Il finit son travail à six heures.', '他六点下班。'],
      ['Nous attendons le bus devant la gare.', '我们在火车站前等公交车。'],
      ['Elle sait choisir les vins.', '她很会挑酒。'],
    ],
    cloze: [
      ['Tu ___ Marc, le frère de Paul ?', ['connais', 'sais', 'connaît'], 0, '你认识保罗的兄弟马克吗？', '认识一个人用 connaître；主语是 tu，所以是 connais（connaît 是 il / elle 的形式）'],
      ['Je ne ___ pas où il habite.', ['sais', 'connais', 'peux'], 0, '我不知道他住在哪儿。', '后面接 où 引导的从句，只能用 savoir；connaître 只接名词'],
      ['Nous ___ le travail à six heures.', ['finissons', 'finons', 'finis'], 0, '我们六点下班。', 'finir 型动词复数要加 -iss-：nous finissons'],
      ['Il ___ le bus devant la gare.', ['attend', 'attent', 'attende'], 0, '他在火车站前等公交车。', '-re 动词的 il 形式去掉 -re 后什么都不加：il attend（d 不发音）'],
      ['Elle ___ nager, mais elle n\'aime pas l\'eau froide.', ['sait', 'peut', 'connaît'], 0, '她会游泳，但不喜欢冷水。', '学会的技能用 savoir + 原形；pouvoir 是"能够、条件允许"'],
    ],
    discover: [
      { q: 'Je connais ce restaurant. / Je sais où est ce restaurant. 两句的区别在哪？', opts: ['connaître 后面接名词（人、地方、东西），savoir 后面接从句', '两个动词可以随便换', 'savoir 只能用于人'], a: 0, why: '看后面接什么：名词 → connaître；que / où / si / quand 等从句或动词原形 → savoir。' },
      { q: 'finir → nous finissons。那么 choisir → nous ___ ?', opts: ['choisissons', 'choisons', 'choisirons'], a: 0, why: 'finir 型（第二组）动词的复数都有 -iss-：nous choisissons, vous choisissez, ils choisissent。' },
    ],
    write: { prompt: '写 3–4 句：你熟悉哪座城市、认识什么有趣的人，你会做什么（savoir + 原形），平时几点下班或下课（finir）。', model: 'Je connais bien Shanghai, mais je ne connais pas encore Paris. Je sais nager et je sais faire la cuisine. Je finis mon travail à six heures.' },
  },
  {
    id: 'a2-02', emoji: '🧸', title: '小时候', sub: '未完成过去时', can: '能描述小时候的生活、过去的状态和习惯', scene: null, grammar: ['g-imparfait'],
    words: [],
    newWords: [
      ['la campagne', 'la kɑ̃.paɲ', '乡下；农村', 'Mes grands-parents habitent à la campagne.', '我祖父母住在乡下。', 'course'],
      ['à cette époque', 'a sɛ.te.pɔk', '那时候；在那个年代', "À cette époque, je n'avais pas de téléphone.", '那时候我没有手机。', 'course'],
      ['la rivière', 'la ʁi.vjɛʁ', '河；小河', 'Il y a une rivière derrière la maison.', '房子后面有一条小河。', 'course'],
      ['jouer', 'ʒwe', '玩；（玩）游戏、运动', 'Je jouais au foot avec mon frère.', '我以前和哥哥踢足球。', 'course'],
      ['dehors', 'də.ɔʁ', '在外面', 'Il fait beau, on mange dehors ?', '天气真好，我们在外面吃吗？', 'course'],
      ['timide', 'ti.mid', '害羞的；胆小的', "Quand j'étais petite, j'étais très timide.", '我小时候很害羞。', 'course'],
      ['le gâteau', 'lə ɡa.to', '蛋糕；糕点', 'Ma grand-mère faisait des gâteaux.', '我奶奶以前常做蛋糕。', 'course'],
      ['avant', 'a.vɑ̃', '以前；之前', "Avant, j'habitais à Pékin.", '我以前住在北京。', 'course'],
    ],
    dialogue: [
      ['Léa', "C'est toi sur la photo ? Tu avais quel âge ?", '照片上是你吗？你那时几岁？'],
      ['我', "J'avais huit ans. À cette époque, j'habitais chez mes grands-parents, à la campagne.", '八岁。那时候我住在爷爷奶奶家，在乡下。'],
      ['Léa', "C'était comment ?", '那时候怎么样？'],
      ['我', "C'était super ! Il y avait une rivière derrière la maison, et je jouais dehors tous les jours.", '特别好！房子后面有一条小河，我每天都在外面玩。'],
      ['Léa', 'Et tes parents ?', '那你父母呢？'],
      ['我', 'Ils travaillaient à Shanghai. Ils venaient le week-end.', '他们在上海工作，周末才过来。'],
      ['Léa', "Moi, quand j'étais petite, j'allais chez ma grand-mère le dimanche. Elle faisait toujours un gâteau.", '我小时候每个星期天都去外婆家。她总会做一个蛋糕。'],
      ['我', "Et tu aimais l'école ?", '那你那时候喜欢上学吗？'],
      ['Léa', "Pas vraiment ! J'étais très timide et je ne parlais pas beaucoup.", '不太喜欢！我那时很害羞，话也不多。'],
    ],
    sentences: [
      ["Quand j'étais petit, j'habitais à la campagne.", '我小时候住在乡下。'],
      ['Je jouais dehors tous les jours.', '我每天都在外面玩。'],
      ['Elle faisait un gâteau le dimanche.', '她每个星期天都做蛋糕。'],
      ['À cette époque, il y avait une rivière derrière la maison.', '那时候房子后面有一条小河。'],
      ["J'étais très timide.", '我那时很害羞。'],
    ],
    cloze: [
      ["Quand j'___ petit, j'habitais à Lyon.", ['étais', 'avais', 'été'], 0, '我小时候住在里昂。', 'être 的未完成过去时词根是 ét-：j\'étais；été 是过去分词，不能单独用'],
      ['Le dimanche, nous ___ chez ma grand-mère.', ['allions', 'sommes allés', 'allons'], 0, '以前每个星期天我们都去外婆家。', '过去反复发生的习惯用未完成过去时'],
      ['Pendant les vacances, il ___ très chaud.', ['faisait', 'fesait', 'a fait'], 0, '那个假期天气很热。', '描写过去的天气用未完成过去时；拼写是 faisait，虽然读 [fə.zɛ]'],
      ['Mes parents ___ à Shanghai.', ['travaillaient', 'travaillait', 'travailliez'], 0, '我父母那时在上海工作。', 'ils 的词尾是 -aient；和 -ait 读音一样，但拼写不同'],
      ['Avant, il y ___ une rivière ici.', ['avait', 'a', 'était'], 0, '以前这里有一条河。', 'il y a 的未完成过去时是 il y avait'],
    ],
    discover: [
      { q: 'nous prenons → je prenais。那么 nous finissons → je ___ ?', opts: ['finissais', 'finais', 'finirais'], a: 0, why: '未完成过去时的词根 = nous 现在时去掉 -ons。finiss- + ais = finissais。' },
      { q: '"我十岁的时候"法语怎么说？', opts: ["Quand j'avais dix ans", "Quand j'étais dix ans", "Quand j'ai eu dix ans"], a: 0, why: '年龄用 avoir；描述过去某个时期的状态用未完成过去时：j\'avais。' },
    ],
    write: { prompt: '写 3–4 句：你小时候住在哪、是个什么样的孩子、经常做什么。', model: "Quand j'étais petit, j'habitais à Chengdu. J'étais un enfant timide. Le week-end, je jouais dehors avec mes amis et ma grand-mère faisait des gâteaux." },
  },
  {
    id: 'a2-03', emoji: '🌧️', title: '那天发生了什么', sub: '复合过去时 vs 未完成过去时', can: '能讲一件过去发生的事：先交代背景，再说发生了什么', scene: null, grammar: ['g-pc-imp'],
    words: [],
    newWords: [
      ["qu'est-ce qui s'est passé ?", 'kɛs ki sɛ pa.se', '发生什么事了？', "Qu'est-ce qui s'est passé hier soir ?", '昨天晚上发生什么事了？', 'course'],
      ["l'histoire (f.)", 'lis.twaʁ', '故事；事情；历史', "C'est une longue histoire !", '说来话长！', 'course'],
      ['incroyable', 'ɛ̃.kʁwa.jabl', '难以置信的', "C'est incroyable !", '太不可思议了！', 'course'],
      ['tout à coup', 'tu.ta.ku', '突然', 'Tout à coup, il a commencé à pleuvoir.', '突然下起雨来。', 'course'],
      ['blessé · blessée', 'blɛ.se', '受伤的', 'Il est blessé à la jambe.', '他腿受伤了。', 'course'],
      ['appeler', 'a.pə.le', '叫；打电话给', "J'ai appelé un taxi.", '我叫了一辆出租车。', 'course'],
      ["l'ambulance (f.)", 'lɑ̃.by.lɑ̃s', '救护车', "L'ambulance est arrivée tout de suite.", '救护车马上就到了。', 'course'],
      ['pendant que', 'pɑ̃.dɑ̃ kə', '在……的时候', 'Pendant que je dormais, il a neigé.', '我睡觉的时候下雪了。', 'course'],
    ],
    dialogue: [
      ['Paul', "Tu es arrivé en retard ce matin. Qu'est-ce qui s'est passé ?", '你今天早上迟到了。发生什么事了？'],
      ['我', "Une histoire incroyable ! Il était huit heures, il pleuvait et j'attendais le bus.", '一件不可思议的事！当时八点，下着雨，我在等公交车。'],
      ['Paul', 'Comme tous les matins, quoi.', '跟每天早上一样嘛。'],
      ['我', 'Oui. Mais tout à coup, un vieux monsieur est tombé devant moi.', '对。可是突然，一位老先生在我面前摔倒了。'],
      ['Paul', 'Oh non ! Il était blessé ?', '哎呀！他受伤了吗？'],
      ['我', "Oui, un peu. Il ne pouvait pas se lever, alors j'ai appelé une ambulance.", '伤了一点。他站不起来，所以我叫了救护车。'],
      ['Paul', 'Tu as bien fait ! Et ton bus ?', '你做得对！那你的公交车呢？'],
      ['我', "Pendant que j'attendais l'ambulance avec lui, le bus est passé… sans moi !", '我陪他等救护车的时候，公交车开过去了……没等我！'],
      ['Paul', 'Ah, voilà pourquoi tu étais en retard !', '啊，原来你是因为这个才迟到的！'],
    ],
    sentences: [
      ["Il pleuvait et j'attendais le bus.", '当时下着雨，我在等公交车。'],
      ['Tout à coup, un vieux monsieur est tombé.', '突然，一位老先生摔倒了。'],
      ["Il ne pouvait pas se lever, alors j'ai appelé une ambulance.", '他站不起来，所以我叫了救护车。'],
      ['Je regardais la télé quand Paul est arrivé.', '保罗到的时候，我正在看电视。'],
      ["Qu'est-ce qui s'est passé ?", '发生什么事了？'],
    ],
    cloze: [
      ['Il ___ quand je suis sorti.', ['pleuvait', 'a plu', 'pleut'], 0, '我出门的时候正在下雨。', '天气是故事的背景，用未完成过去时'],
      ['Je regardais un film quand Léa ___ .', ['est arrivée', 'arrivait', 'a arrivé'], 0, '我正在看电影，莱娅来了。', '打断正在进行的动作的事件用复合过去时；arriver 用 être，主语是阴性要加 e'],
      ["Hier, ___ très fatigué, alors je suis rentré tôt.", ["j'étais", "j'ai été", 'je suis'], 0, '昨天我很累，所以早早回家了。', '"很累"是当时的状态，是"回家"的背景和原因，用未完成过去时'],
      ['Tout à coup, le vieux monsieur ___ .', ['est tombé', 'tombait', 'a tombé'], 0, '突然，那位老先生摔倒了。', 'tout à coup 引出一个突发事件，用复合过去时；tomber 的助动词是 être'],
      ['Quand j\'étais étudiant, je ___ au café tous les jours.', ['travaillais', 'ai travaillé', 'travaille'], 0, '我上学的时候每天都在咖啡馆学习。', 'tous les jours 表示过去的习惯，用未完成过去时'],
    ],
    discover: [
      { q: '"Il pleuvait. Tout à coup, j\'ai vu Léa." 哪一部分是故事的"背景"？', opts: ['Il pleuvait', "j'ai vu Léa", '两部分都是背景'], a: 0, why: 'Il pleuvait 描述当时的情况（未完成过去时）；j\'ai vu Léa 是发生的事件（复合过去时），推动故事往前走。' },
      { q: "J'avais peur 和 J'ai eu peur 有什么区别？", opts: ['前者是当时持续的害怕状态，后者是那一刻吓了一跳', '意思完全一样', '前者更礼貌'], a: 0, why: '未完成过去时描述状态；复合过去时把它看成一个发生了、结束了的事件。' },
    ],
    write: { prompt: '讲一件你遇到过的意外或有趣的事：先写背景（时间、天气、你在做什么），再写发生了什么（4 句左右）。', model: "C'était un samedi soir. Il faisait froid et je marchais dans la rue. Tout à coup, j'ai vu un vieil ami. Nous sommes allés boire un café ensemble." },
  },
  {
    id: 'a2-04', emoji: '🛍️', title: '我买了它', sub: '直接宾语代词 le, la, les', can: '能用 le / la / les 代替前面说过的人和东西，谈论购物', scene: null, grammar: ['g-cod'],
    words: [],
    newWords: [
      ['la veste', 'la vɛst', '外套；夹克', 'Cette veste est trop chère.', '这件外套太贵了。', 'course'],
      ['trouver', 'tʁu.ve', '找到；觉得', 'Je ne trouve pas mes clés.', '我找不到我的钥匙。', 'course'],
      ['la boutique', 'la bu.tik', '小商店；精品店', 'Il y a une jolie boutique dans cette rue.', '这条街上有一家漂亮的小店。', 'course'],
      ['en solde', 'ɑ̃ sɔld', '打折（的）', 'Les manteaux sont en solde.', '大衣在打折。', 'course'],
      ['commander', 'kɔ.mɑ̃.de', '订购；点（菜）', "J'ai commandé un livre sur Internet.", '我在网上订了一本书。', 'course'],
      ['les chaussures (f.)', 'le ʃo.syʁ', '鞋', "J'ai acheté des chaussures noires.", '我买了一双黑鞋。', 'course'],
      ['rendre', 'ʁɑ̃dʁ', '归还；退（货）', 'Je dois rendre ce livre à la bibliothèque.', '我得把这本书还给图书馆。', 'course'],
      ['accompagner', 'a.kɔ̃.pa.ɲe', '陪伴；陪同', "Tu m'accompagnes à la gare ?", '你陪我去火车站吗？', 'course'],
    ],
    dialogue: [
      ['Léa', "Elle est jolie, ta veste ! Tu l'as achetée où ?", '你的外套真好看！在哪儿买的？'],
      ['我', "Je l'ai trouvée dans une petite boutique près de chez moi. Elle était en solde.", '我在家附近一家小店淘到的。当时在打折。'],
      ['Léa', 'Super ! Et tes chaussures, tu les as prises dans la même boutique ?', '真不错！那你的鞋也是在那家店买的？'],
      ['我', 'Non, je les ai commandées sur Internet.', '不是，鞋是我在网上订的。'],
      ['Léa', "Moi, je n'aime pas acheter sur Internet. J'aime voir les vêtements et les essayer.", '我不喜欢网购。我喜欢亲眼看看衣服，再试一试。'],
      ['我', "Tu as raison. Regarde ce pantalon : je l'ai acheté hier, mais il est trop petit.", '你说得对。你看这条裤子：我昨天买的，可是太小了。'],
      ['Léa', 'Tu peux le rendre, non ?', '可以退吧？'],
      ['我', 'Oui, je vais le rendre samedi.', '可以，我星期六去退。'],
      ['Léa', "Si tu veux, je t'accompagne ! Je veux voir cette boutique.", '你愿意的话，我陪你去！我也想看看那家店。'],
    ],
    sentences: [
      ["Je l'ai trouvée dans une petite boutique.", '我在一家小店淘到的（它）。'],
      ['Je les ai commandées sur Internet.', '我在网上订的（它们）。'],
      ["J'aime voir les vêtements et les essayer.", '我喜欢亲眼看看衣服，再试一试。'],
      ['Tu peux le rendre, non ?', '你可以把它退掉吧？'],
      ['Ce pull ? Je le prends.', '这件毛衣？我要了。'],
    ],
    cloze: [
      ['Ce pull ? Je ___ prends.', ['le', 'la', 'lui'], 0, '这件毛衣？我要了。', 'pull 是阳性单数的直接宾语 → le；lui 是间接宾语代词'],
      ['Tu connais Léa ? Oui, je ___ connais bien.', ['la', 'le', 'lui'], 0, '你认识莱娅吗？认识，很熟。', 'connaître 直接接宾语；Léa 是阴性单数 → la，放在动词前'],
      ["La veste ? Je l'ai ___ hier.", ['achetée', 'acheté', 'achetés'], 0, '那件外套？我昨天买的。', "l' 代替 la veste（阴性单数），在 avoir 前面，过去分词要加 e"],
      ['Les chaussures ? Je vais ___ essayer.', ['les', 'leur', 'des'], 0, '那双鞋？我要试一试。', '代替 les chaussures 用 les，放在原形 essayer 前；leur 是间接宾语'],
      ['Cette veste est jolie ! Prends-___ !', ['la', 'le', 'lui'], 0, '这件外套真好看！买下吧！', '肯定命令式里代词放在动词后，用连字符；veste 是阴性 → la'],
    ],
    discover: [
      { q: 'Je prends le bus. / Je le prends. 这两个 le 分别是什么？', opts: ['前者是冠词（在名词前），后者是代词（在动词前）', '两个都是冠词', '两个都是代词'], a: 0, why: '看位置：名词前的 le 是冠词，动词前的 le 是代词，代替"它（阳性）"。' },
      { q: "J'ai vu Léa → Je l'ai ___", opts: ['vue', 'vu', 'vues'], a: 0, why: "l' 代替 Léa（阴性单数），放在 avoir 前面，过去分词要配合加 e：vue。读音不变。" },
    ],
    write: { prompt: '朋友夸你的一样东西（衣服、包、手机……）。回答：在哪儿买的、什么时候买的、你喜不喜欢它（用 le / la / les，3–4 句）。', model: "Ce sac ? Je l'ai acheté à Paris l'année dernière. Je l'ai trouvé dans une petite boutique. Je l'adore et je le prends tous les jours." },
  },
  {
    id: 'a2-05', emoji: '📞', title: '给他打电话', sub: '间接宾语代词 lui, leur', can: '能说"给他打电话、跟她说、送他们礼物"，不重复人名', scene: null, grammar: ['g-coi'],
    words: [],
    newWords: [
      ['pas encore', 'pa.zɑ̃.kɔʁ', '还没有', "Tu as fini ? — Pas encore.", '你做完了吗？——还没有。', 'course'],
      ['téléphoner', 'te.le.fɔ.ne', '打电话', 'Je téléphone à ma mère tous les dimanches.', '我每个星期天给妈妈打电话。', 'course'],
      ['envoyer', 'ɑ̃.vwa.je', '寄；发送', "Tu peux m'envoyer la photo ?", '你能把照片发给我吗？', 'course'],
      ['offrir', 'ɔ.fʁiʁ', '送（礼物）；请客', 'Je lui offre un cadeau.', '我送他（她）一份礼物。', 'course'],
      ['le roman', 'lə ʁɔ.mɑ̃', '小说', 'Elle lit un roman français.', '她在读一本法国小说。', 'course'],
      ['la fleur', 'la flœʁ', '花', 'Il offre des fleurs à sa femme.', '他送花给他妻子。', 'course'],
      ["l'adresse (f.)", 'la.dʁɛs', '地址', 'Quelle est ton adresse ?', '你的地址是什么？', 'course'],
      ['poser une question', 'po.ze yn kɛs.tjɔ̃', '提问；问问题', 'Je peux vous poser une question ?', '我可以问您一个问题吗？', 'course'],
    ],
    dialogue: [
      ['Paul', "C'est l'anniversaire de Léa samedi. Tu lui as téléphoné ?", '星期六是莱娅的生日。你给她打电话了吗？'],
      ['我', 'Pas encore. Je vais lui envoyer un message ce soir.', '还没有。我今晚给她发条消息。'],
      ['Paul', "Et qu'est-ce que tu vas lui offrir ?", '那你打算送她什么？'],
      ['我', 'Elle aime lire, non ? Je peux lui offrir un roman.', '她喜欢看书，对吧？我可以送她一本小说。'],
      ['Paul', 'Bonne idée. Moi, je lui offre des fleurs. Ses parents viennent aussi, tu les connais ?', '好主意。我送她花。她父母也会来，你认识他们吗？'],
      ['我', 'Oui, je leur ai parlé à Noël. Ils sont très sympas.', '认识，圣诞节的时候我跟他们聊过。他们人很好。'],
      ['Paul', 'Au fait, la fête est chez Léa, mais je ne connais pas son adresse.', '对了，聚会在莱娅家，可是我不知道她的地址。'],
      ['我', 'Pas de problème, je lui pose la question ce soir et je te réponds demain.', '没问题，我今晚问问她，明天回复你。'],
      ['Paul', 'Merci ! Et dis-lui que je viens avec un gâteau !', '谢谢！告诉她我会带个蛋糕来！'],
    ],
    sentences: [
      ['Tu lui as téléphoné ?', '你给他（她）打电话了吗？'],
      ['Je vais lui envoyer un message ce soir.', '我今晚给他（她）发条消息。'],
      ['Je peux lui offrir un roman.', '我可以送他（她）一本小说。'],
      ['Je leur ai parlé à Noël.', '圣诞节时我跟他们聊过。'],
      ['Dis-lui que je viens avec un gâteau.', '告诉他（她）我会带个蛋糕来。'],
    ],
    cloze: [
      ['Tu as parlé à Léa ? Oui, je ___ ai parlé hier.', ['lui', 'la', 'leur'], 0, '你跟莱娅说了吗？说了，我昨天跟她说的。', 'parler à + 人 是间接宾语；单数用 lui（不分阴阳）；la 是直接宾语'],
      ["J'ai téléphoné à mes parents. Je ___ ai dit bonjour.", ['leur', 'les', 'leurs'], 0, '我给父母打了电话，跟他们问了好。', 'dire à + 人；复数用 leur，作代词永远不加 s'],
      ['Paul ? Je ___ offre un livre.', ['lui', 'le', 'la'], 0, '保罗？我送他一本书。', 'offrir qqch à qqn：un livre 是直接宾语，Paul 是间接宾语 → lui'],
      ['Léa ? Je lui ai ___ un message.', ['envoyé', 'envoyée', 'envoyer'], 0, '莱娅？我给她发了一条消息。', 'lui 是间接宾语，过去分词不配合——即使 Léa 是女生也不加 e'],
      ['Marc ? Tu peux ___ demander son numéro ?', ['lui', 'le', 'la'], 0, '马克？你能问问他的电话号码吗？', 'demander à qqn（问某人）是间接宾语 → lui'],
    ],
    discover: [
      { q: 'Je téléphone à Léa → Je lui téléphone。那 J\'appelle Léa → ?', opts: ["Je l'appelle.", 'Je lui appelle.', "J'appelle lui."], a: 0, why: 'appeler 后面不加 à，Léa 是直接宾语 → la → l\'。中文都是"给她打电话"，法语要看动词本身。' },
      { q: 'leur 什么时候加 s？', opts: ['作主有形容词时加（leurs amis）；作代词时永远不加', '指很多人时就加 s', '从来不加 s'], a: 0, why: 'Je leur parle（代词，不加 s）；leurs parents（主有形容词，后面是复数名词，加 s）。' },
    ],
    write: { prompt: '朋友下周过生日。写 3–4 句：你会给他 / 她打电话吗？送他 / 她什么？你跟其他朋友说了什么？（用 lui / leur）', model: "Samedi, c'est l'anniversaire de Paul. Je vais lui téléphoner le matin et je vais lui offrir un roman. J'ai parlé à nos amis et je leur ai envoyé son adresse." },
  },
  {
    id: 'a2-06', emoji: '🗺️', title: '我去过那里 · y 和 en', sub: '代词 y 和 en', can: '能用 y 和 en 简洁地回答"去过吗？""有几个？""要不要？"', scene: null, grammar: ['g-y-en'],
    words: [],
    newWords: [
      ['déjà', 'de.ʒa', '已经；曾经', 'Tu as déjà mangé ?', '你已经吃过了吗？', 'course'],
      ['magnifique', 'ma.ɲi.fik', '壮丽的；极美的', 'La vue est magnifique !', '景色美极了！', 'course'],
      ['avoir envie de', 'a.vwaʁ ɑ̃.vi də', '想要；很想（做）', "J'ai envie d'un café.", '我想喝杯咖啡。', 'course'],
      ['direct · directe', 'di.ʁɛkt', '直达的；直接的', 'Il y a un train direct pour Lyon.', '有去里昂的直达火车。', 'course'],
      ['là-bas', 'la.ba', '那边；在那儿', 'Tu vois le café là-bas ?', '你看到那边那家咖啡馆了吗？', 'course'],
      ['le voyage', 'lə vwa.jaʒ', '旅行；旅途', 'Bon voyage !', '一路顺风！', 'course'],
      ['mettre', 'mɛtʁ', '放；穿上', 'Je mets du sucre dans mon café.', '我在咖啡里放糖。', 'course'],
      ['le sandwich', 'lə sɑ̃d.witʃ', '三明治', 'Je prends un sandwich au jambon.', '我要一个火腿三明治。', 'course'],
    ],
    dialogue: [
      ['Léa', 'Tu connais Marseille ? Tu y es déjà allé ?', '你了解马赛吗？你去过吗？'],
      ['我', "Oui, j'y suis allé l'année dernière. C'est une ville magnifique !", '去过，我去年去的。那座城市美极了！'],
      ['Léa', "Moi, je ne connais pas. J'ai envie d'y aller cet été.", '我没去过。我今年夏天很想去。'],
      ['我', 'On y va ensemble en juillet ? Il y a des trains directs depuis Paris.', '我们七月一起去？从巴黎有直达火车。'],
      ['Léa', 'Bonne idée ! Tu as des amis là-bas ?', '好主意！你在那边有朋友吗？'],
      ['我', "Oui, j'en ai deux. Ils habitent près du Vieux-Port.", '有，我有两个朋友。他们住在老港附近。'],
      ['Léa', 'Génial ! Et pour le voyage, on prend des sandwichs ?', '太棒了！路上我们带三明治吗？'],
      ['我', "D'accord, j'en fais demain matin. Tu veux du fromage dedans ?", '好，我明天早上做几个。你要在里面加奶酪吗？'],
      ['Léa', 'Oui, mets-en beaucoup !', '要，多放点！'],
    ],
    sentences: [
      ['Tu y es déjà allé ?', '你去过那儿吗？'],
      ["J'y suis allé l'année dernière.", '我去年去过那儿。'],
      ["J'ai envie d'y aller cet été.", '我今年夏天很想去那儿。'],
      ["Oui, j'en ai deux.", '有，我有两个。'],
      ['On y va ensemble en juillet ?', '我们七月一起去吗？'],
    ],
    cloze: [
      ["Tu vas à Lyon demain ? Oui, j'___ vais.", ['y', 'en', 'le'], 0, '你明天去里昂吗？对，我去。', 'à + 地点 → y；法语 aller 后面不能什么都不带'],
      ["Tu veux du café ? Oui, j'___ veux bien.", ['en', 'y', 'le'], 0, '你要咖啡吗？好，来点儿。', 'du café（部分冠词 + 东西）→ en；le 只代替确指的"那杯咖啡"'],
      ['Combien de frères as-tu ? ___', ["J'en ai deux.", "J'ai deux.", "J'y ai deux."], 0, '你有几个兄弟？我有两个。', '回答数量时用 en 代替名词，数字留在句末；不能只说 j\'ai deux'],
      ['Marseille ? Je vais ___ aller cet été.', ['y', 'en', 'là'], 0, '马赛？我今年夏天要去那儿。', 'y 放在原形 aller 前面（aller + 原形结构中，代词跟着原形走）'],
      ["Des pommes ? J'en ai ___ trois.", ['mangé', 'mangées', 'manger'], 0, '苹果？我吃了三个。', 'en 放在 avoir 前面不引起过去分词配合，只有直接宾语代词 le / la / les 才配合'],
    ],
    discover: [
      { q: 'Tu vas à la plage ? — Oui, je vais. 这个回答对吗？', opts: ["不对，要说 Oui, j'y vais.", '对，很自然', "要说 Oui, j'en vais."], a: 0, why: 'aller 必须带上地点，回答时用 y 代替 à la plage。' },
      { q: 'y 和 en 大致对应哪个介词？', opts: ['y ↔ à（地点、à + 东西）；en ↔ de（东西、数量）', 'y ↔ de；en ↔ à', '没有规律，只能死记'], a: 0, why: '记住这组对应：à Lyon → y；du pain、des amis、beaucoup de… → en。' },
    ],
    write: { prompt: '朋友问你："Tu es déjà allé(e) à Paris ? Tu as des amis là-bas ?" 用 y 和 en 回答（3–4 句）。', model: "Oui, j'y suis allé l'année dernière. C'est une ville magnifique et j'ai envie d'y retourner. J'ai des amis là-bas : j'en ai trois." },
  },
  {
    id: 'a2-07', emoji: '🏆', title: '更好、最好', sub: '比较级与最高级', can: '能比较两座城市、两样东西，说出"最好的""最……的"', scene: null, grammar: ['g-comparatif'],
    words: [],
    newWords: [
      ['préférer', 'pʁe.fe.ʁe', '更喜欢；宁愿', 'Je préfère le thé au café.', '比起咖啡，我更喜欢茶。', 'course'],
      ['calme', 'kalm', '安静的；平静的', "C'est un quartier calme.", '这是个安静的街区。', 'course'],
      ['meilleur · meilleure', 'mɛ.jœʁ', '更好的；最好的', "C'est le meilleur restaurant de la ville.", '这是城里最好的餐厅。', 'course'],
      ['mieux', 'mjø', '更好地；更好', "Ça va mieux aujourd'hui ?", '今天好些了吗？', 'course'],
      ['le choix', 'lə ʃwa', '选择', 'Il y a beaucoup de choix.', '选择很多。', 'course'],
      ['pratique', 'pʁa.tik', '方便的；实用的', 'Le métro est très pratique.', '地铁很方便。', 'course'],
      ['à ton avis', 'a tɔ̃.na.vi', '依你看；你觉得', "À ton avis, c'est une bonne idée ?", '你觉得这是个好主意吗？', 'course'],
      ['comparer', 'kɔ̃.pa.ʁe', '比较', 'On compare les prix ?', '我们比较一下价格吧？', 'course'],
      ['lyonnais · lyonnaise', 'ljɔ.nɛ · ljɔ.nɛz', '里昂的；里昂人', 'La cuisine lyonnaise est très connue.', '里昂菜很有名。', 'course'],
    ],
    dialogue: [
      ['我', 'Tu préfères Paris ou Lyon ?', '你更喜欢巴黎还是里昂？'],
      ['Paul', 'Lyon, bien sûr ! Paris est plus grand, mais Lyon est plus calme et moins cher.', '当然是里昂！巴黎更大，但里昂更安静，也没那么贵。'],
      ['我', 'Et on mange mieux à Lyon ?', '那在里昂吃得更好吗？'],
      ['Paul', 'Oui ! Pour moi, la cuisine lyonnaise est la meilleure de France.', '对！在我看来，里昂菜是全法国最好的。'],
      ['我', 'Mais à Paris, il y a plus de musées et plus de choix.', '可是巴黎的博物馆更多，选择也更多。'],
      ['Paul', "C'est vrai. Et le métro parisien est le plus pratique de France.", '没错。而且巴黎地铁是全法国最方便的。'],
      ['我', 'Alors, quelle est la plus belle ville, à ton avis ?', '那你觉得哪座城市最美？'],
      ['Paul', 'Lyon ! Mais je suis lyonnais… Je ne suis pas aussi objectif que toi !', '里昂！不过我是里昂人……我可没你那么客观！'],
      ['我', 'Bon, je vais y aller ce week-end et je vais comparer moi-même !', '好吧，我这个周末去一趟，亲自比较一下！'],
    ],
    sentences: [
      ['Paris est plus grand que Lyon.', '巴黎比里昂大。'],
      ['Lyon est plus calme et moins cher.', '里昂更安静，也没那么贵。'],
      ['On mange mieux à Lyon.', '在里昂吃得更好。'],
      ['La cuisine lyonnaise est la meilleure de France.', '里昂菜是全法国最好的。'],
      ['Quelle est la plus belle ville, à ton avis ?', '你觉得哪座城市最美？'],
    ],
    cloze: [
      ["Ce gâteau est ___ que l'autre.", ['meilleur', 'mieux', 'plus bon'], 0, '这块蛋糕比那块好吃。', '说"东西好"（修饰名词 gâteau）用 meilleur；没有 plus bon 这种说法'],
      ['Elle chante ___ que moi.', ['mieux', 'meilleur', 'plus bien'], 0, '她唱得比我好。', '说"做得好"（修饰动词 chanter）用 mieux；没有 plus bien'],
      ['Le train est plus rapide ___ le bus.', ['que', 'de', 'comme'], 0, '火车比公交车快。', '比较级用 plus … que；别受英语 than 或中文"比"的语序影响漏掉 que'],
      ["C'est le plus grand musée ___ monde.", ['du', 'dans le', 'que le'], 0, '这是世界上最大的博物馆。', '最高级的范围用 de（de + le = du），不用 dans'],
      ["J'ai ___ travail que toi cette semaine.", ['plus de', 'plus', 'plus du'], 0, '这周我的工作比你多。', '比较名词的数量：plus de + 名词，de 后面不加冠词'],
    ],
    discover: [
      { q: 'bon → meilleur。那么 bien → ?', opts: ['mieux', 'plus bien', 'meilleur'], a: 0, why: 'bien 是副词，比较级是 mieux：Je vais mieux. Tu parles mieux que moi.' },
      { q: '"巴黎最贵的餐厅"哪一种说法正确？', opts: ['le restaurant le plus cher de Paris', 'le restaurant plus cher de Paris', 'le plus restaurant cher dans Paris'], a: 0, why: '形容词在名词后面时，最高级要重复冠词：le restaurant le plus cher；范围用 de。' },
    ],
    write: { prompt: '比较你住的城市和另一座城市（大小、价格、食物、交通），最后说说你觉得哪里最好（4 句）。', model: 'Shanghai est plus grand que Hangzhou, mais Hangzhou est plus calme. La vie à Shanghai est plus chère. À Shanghai, il y a plus de choix. Pour moi, Hangzhou est la plus belle ville de Chine.' },
  },
  {
    id: 'a2-08', emoji: '🔮', title: '十年以后', sub: '简单将来时 · quand + 将来时', can: '能谈未来的计划和梦想，说"等……的时候，我会……"', scene: null, grammar: ['g-futur'],
    words: [],
    newWords: [
      ['peut-être', 'pø.tɛtʁ', '也许；可能', 'Il va peut-être pleuvoir.', '也许会下雨。', 'course'],
      ['propre', 'pʁɔpʁ', '自己的（放名词前）；干净的（放名词后）', "J'ai ma propre chambre.", '我有自己的房间。', 'course'],
      ["l'entreprise (f.)", 'lɑ̃.tʁə.pʁiz', '企业；公司', 'Elle travaille dans une grande entreprise.', '她在一家大公司工作。', 'course'],
      ['organiser', 'ɔʁ.ɡa.ni.ze', '组织；安排', 'Nous organisons une fête samedi.', '我们星期六办个聚会。', 'course'],
      ['au bord de la mer', 'o bɔʁ də la mɛʁ', '在海边', 'Ils ont une maison au bord de la mer.', '他们在海边有一座房子。', 'course'],
      ['vivre', 'vivʁ', '生活；居住', 'Je voudrais vivre à Paris.', '我想在巴黎生活。', 'course'],
      ['espérer', 'ɛs.pe.ʁe', '希望', "J'espère que tu vas bien.", '希望你一切都好。', 'course'],
      ['riche', 'ʁiʃ', '富有的', 'Il est très riche.', '他很有钱。', 'course'],
      ['inviter', 'ɛ̃.vi.te', '邀请；请客', "Je t'invite au cinéma.", '我请你看电影。', 'course'],
    ],
    dialogue: [
      ['Léa', 'À ton avis, où est-ce que tu seras dans dix ans ?', '你觉得十年后你会在哪儿？'],
      ['我', "Je serai en France, je pense. J'aurai peut-être ma propre entreprise.", '我想我会在法国。说不定我会有自己的公司。'],
      ['Léa', "Ta propre entreprise ? Qu'est-ce que tu feras ?", '你自己的公司？做什么呢？'],
      ['我', "J'organiserai des voyages en Chine pour les Français. Et toi ?", '我会给法国人组织去中国的旅行。你呢？'],
      ['Léa', "Moi, j'irai vivre au bord de la mer. J'aurai une petite maison avec un jardin.", '我会去海边生活。我会有一座带花园的小房子。'],
      ['我', 'Et ton travail ?', '那你的工作呢？'],
      ['Léa', "Je travaillerai à distance… enfin, j'espère !", '我会远程工作……至少我希望如此！'],
      ['我', 'Quand tu auras ta maison, je viendrai te voir chaque été !', '等你有了房子，我每年夏天都去看你！'],
      ['Léa', "Promis ! Et quand tu seras riche, tu m'inviteras au restaurant !", '一言为定！等你发财了，你要请我吃饭！'],
    ],
    sentences: [
      ['Dans dix ans, je serai en France.', '十年后，我会在法国。'],
      ["J'irai vivre au bord de la mer.", '我会去海边生活。'],
      ['Quand tu auras ta maison, je viendrai te voir.', '等你有了房子，我会去看你。'],
      ["Qu'est-ce que tu feras ?", '你会做什么？'],
      ["Quand tu seras riche, tu m'inviteras au restaurant.", '等你发财了，你要请我吃饭。'],
    ],
    cloze: [
      ['Dans dix ans, je ___ en France.', ['serai', 'suis', 'serais'], 0, '十年后我会在法国。', '对较远将来的预测用简单将来时；être 的将来时词根是 ser-（serais 是条件式，以后学）'],
      ['Demain, nous ___ à la plage.', ['irons', 'allerons', 'allons'], 0, '明天我们要去海滩。', 'aller 的将来时词根是 ir-：nous irons；allerons 是常见错误'],
      ["Quand j'___ le temps, je t'écrirai.", ['aurai', 'ai', 'avrai'], 0, '等我有时间，我会给你写信。', '主句是将来时，quand 从句也要用将来时；avoir 的将来时词根是 aur-'],
      ["S'il fait beau demain, on ___ une promenade.", ['fera', 'fait', 'faira'], 0, '如果明天天气好，我们就去散步。', 'si + 现在时，主句用将来时；faire 的将来时词根是 fer-'],
      ['Est-ce que tu ___ m\'aider demain ?', ['pourras', 'pouvras', 'pouveras'], 0, '明天你能帮我吗？', 'pouvoir 的将来时词根是 pourr-（两个 r）'],
    ],
    discover: [
      { q: '"等我长大了，我要当医生。" quand 后面用什么时态？', opts: ['将来时：Quand je serai grand', '现在时：Quand je suis grand', '近将来时：Quand je vais être grand'], a: 0, why: '法语讲逻辑：长大是将来的事，quand 从句也用将来时。这一点和中文、英语都不同。' },
      { q: 'parler → je parlerai。那么 prendre → je ___ ?', opts: ['prendrai', 'prenderai', 'prendrerai'], a: 0, why: '-re 动词先去掉末尾的 e，再加 -ai, -as, -a…：prendr- + ai = prendrai。' },
    ],
    write: { prompt: '写写十年后的你：住在哪、做什么工作、过怎样的生活（4 句，用简单将来时，至少一句 quand + 将来时）。', model: "Dans dix ans, j'habiterai à Lyon. Je serai professeur de chinois. J'aurai un petit appartement avec un jardin. Quand j'aurai des vacances, je ferai le tour de l'Europe." },
  },
  {
    id: 'a2-09', emoji: '🍜', title: '我推荐的那家店', sub: '关系代词 qui / que / où', can: '能用一句话描述"……的人 / 东西 / 地方"，向朋友推荐餐厅和小店', scene: null, grammar: ['g-relatif'],
    words: [],
    newWords: [
      ['recommander', 'ʁə.kɔ.mɑ̃.de', '推荐', 'Je te recommande ce livre.', '我向你推荐这本书。', 'course'],
      ['le patron · la patronne', 'lə pa.tʁɔ̃ · la pa.tʁɔn', '老板 · 老板娘', 'Le patron est très sympa.', '老板人很好。', 'course'],
      ['les nouilles (f.)', 'le nuj', '面条', "J'adore les nouilles sautées.", '我超爱炒面。', 'course'],
      ['à la main', 'a la mɛ̃', '手工（做的）', 'Ce pain est fait à la main.', '这个面包是手工做的。', 'course'],
      ['délicieux · délicieuse', 'de.li.sjø · de.li.sjøz', '美味的', 'Ce gâteau est délicieux !', '这块蛋糕真好吃！', 'course'],
      ['les raviolis (m.)', 'le ʁa.vjɔ.li', '饺子；意式小方饺', 'On mange des raviolis au Nouvel An chinois.', '春节我们吃饺子。', 'course'],
      ['préparer', 'pʁe.pa.ʁe', '准备；做（饭）', 'Je prépare le dîner.', '我在做晚饭。', 'course'],
      ["l'endroit (m.)", 'lɑ̃.dʁwa', '地方', "C'est un endroit très calme.", '这是个很安静的地方。', 'course'],
    ],
    dialogue: [
      ['Léa', 'Je cherche un bon restaurant chinois. Tu connais une adresse ?', '我在找一家好吃的中餐馆。你知道哪家吗？'],
      ['我', "Oui ! Je te recommande un petit restaurant que j'adore, à Belleville.", '知道！我推荐你美丽城一家我超爱的小馆子。'],
      ['Léa', "C'est le restaurant où tu as mangé avec Paul ?", '是你跟保罗去吃过的那家吗？'],
      ['我', "Exactement. Le patron est un monsieur qui vient de Xi'an. Il fait les nouilles à la main.", '没错。老板是一位从西安来的先生，面条都是他手工做的。'],
      ['Léa', "Des nouilles faites à la main ? Ça a l'air délicieux !", '手工面？听起来就很好吃！'],
      ['我', "Oui, et les raviolis qu'il prépare sont les meilleurs de Paris.", '对，而且他包的饺子是全巴黎最好吃的。'],
      ['Léa', "C'est cher ?", '贵吗？'],
      ['我', "Non, c'est un endroit où on mange bien pour dix euros. Mais c'est petit, alors réserve une table !", '不贵，那是个花十欧元就能吃好的地方。不过店很小，记得订位！'],
      ['Léa', "Merci ! Tu m'envoies l'adresse ?", '谢谢！你把地址发给我吧？'],
    ],
    sentences: [
      ["C'est un petit restaurant que j'adore.", '那是一家我超爱的小馆子。'],
      ["Le patron est un monsieur qui vient de Xi'an.", '老板是一位从西安来的先生。'],
      ["C'est un endroit où on mange bien.", '那是个能吃好的地方。'],
      ["Les raviolis qu'il prépare sont délicieux.", '他包的饺子很好吃。'],
      ["C'est le restaurant où tu as mangé avec Paul ?", '是你跟保罗去吃过的那家餐厅吗？'],
    ],
    cloze: [
      ["J'ai un ami ___ habite à Lyon.", ['qui', 'que', 'où'], 0, '我有个朋友住在里昂。', '后面紧跟动词 habite，说明它在从句里作主语 → qui'],
      ["C'est le film ___ je préfère.", ['que', 'qui', 'où'], 0, '这是我最喜欢的电影。', '后面跟着主语 je，film 是 préférer 的直接宾语 → que'],
      ['Voici la ville ___ je suis né.', ['où', 'que', 'qui'], 0, '这就是我出生的城市。', '代替地点用 où'],
      ["La veste que j'ai ___ est trop petite.", ['achetée', 'acheté', 'achetés'], 0, '我买的那件外套太小了。', 'que 代替 la veste（阴性单数），是直接宾语且在 avoir 前面，过去分词要加 e'],
      ["C'était le jour ___ je suis arrivé en France.", ['où', 'quand', 'que'], 0, '那是我到法国的那一天。', '"……的那天"也用 où；不要照英语 when 说成 quand'],
    ],
    discover: [
      { q: "le bus ___ arrive / la femme ___ j'aime：分别填什么？", opts: ['qui / que', 'que / qui', 'qui / qui'], a: 0, why: '不看是人还是物，看语法作用：arrive 前面需要主语 → qui；j\'aime 已经有主语 j\'，la femme 是宾语 → que。' },
      { q: '中文"我推荐的餐厅"，法语的语序是？', opts: ['le restaurant que je recommande', 'le que je recommande restaurant', 'le je recommande restaurant'], a: 0, why: '中文修饰语在名词前，法语的关系从句放在名词后面，而且关系代词不能省。' },
    ],
    write: { prompt: '向朋友推荐一家你喜欢的店（餐厅、咖啡馆、书店……），qui、que、où 各至少用一次（3–4 句）。', model: "Je te recommande un café que j'adore. C'est un endroit où on peut lire tranquillement. La patronne est une dame qui fait des gâteaux délicieux. Le gâteau au chocolat qu'elle prépare est le meilleur du quartier." },
  },
  {
    id: 'a2-10', emoji: '🩺', title: '看医生', sub: 'avoir mal à · il faut', can: '能向医生说清哪里不舒服、有什么症状，听懂医嘱', scene: null, grammar: ['g-mal', 'g-il-faut'],
    words: [],
    newWords: [
      ['la tête', 'la tɛt', '头', "J'ai mal à la tête.", '我头疼。', 'course'],
      ['la gorge', 'la ɡɔʁʒ', '喉咙；嗓子', "J'ai mal à la gorge.", '我嗓子疼。', 'course'],
      ['le ventre', 'lə vɑ̃tʁ', '肚子', 'Il a mal au ventre.', '他肚子疼。', 'course'],
      ['le dos', 'lə do', '背', "J'ai mal au dos après le sport.", '运动完我背疼。', 'course'],
      ['la fièvre', 'la fjɛvʁ', '发烧', 'Le bébé a de la fièvre.', '宝宝发烧了。', 'course'],
      ['tousser', 'tu.se', '咳嗽', 'Il tousse beaucoup la nuit.', '他夜里咳得很厉害。', 'course'],
      ['la grippe', 'la ɡʁip', '流感', "J'ai la grippe.", '我得了流感。', 'course'],
      ['le médicament', 'lə me.di.ka.mɑ̃', '药', 'Prenez ce médicament trois fois par jour.', '这个药每天吃三次。', 'course'],
      ["l'ordonnance (f.)", 'lɔʁ.dɔ.nɑ̃s', '处方', "Le médecin m'a donné une ordonnance.", '医生给我开了处方。', 'course'],
    ],
    dialogue: [
      ['医生', "Bonjour, asseyez-vous. Qu'est-ce qui ne va pas ?", '您好，请坐。哪里不舒服？'],
      ['我', "Bonjour docteur. J'ai mal à la tête et à la gorge. Ça a commencé avant-hier.", '医生您好。我头疼，嗓子也疼。前天开始的。'],
      ['医生', 'Vous avez de la fièvre ?', '您发烧吗？'],
      ['我', 'Oui, trente-huit cinq hier soir. Et je tousse beaucoup.', '发烧，昨晚三十八度五。而且我咳得很厉害。'],
      ['医生', "D'accord. Vous avez mal au ventre aussi ?", '好的。肚子也疼吗？'],
      ['我', "Non, mais j'ai un peu mal au dos.", '不疼，但背有点疼。'],
      ['医生', "C'est la grippe. Il faut rester au lit et il faut boire beaucoup d'eau.", '是流感。您得卧床休息，还要多喝水。'],
      ['我', 'Il faut prendre des médicaments ?', '需要吃药吗？'],
      ['医生', 'Oui, voici une ordonnance. Et il ne faut pas aller travailler cette semaine !', '要，这是处方。还有，这周不能去上班！'],
    ],
    sentences: [
      ["J'ai mal à la tête et à la gorge.", '我头疼，嗓子也疼。'],
      ['Vous avez de la fièvre ?', '您发烧吗？'],
      ['Il faut rester au lit.', '得卧床休息。'],
      ["Il faut boire beaucoup d'eau.", '要多喝水。'],
      ['Il ne faut pas aller travailler cette semaine.', '这周不能去上班。'],
    ],
    cloze: [
      ["J'ai mal ___ ventre.", ['au', 'à le', 'à la'], 0, '我肚子疼。', 'ventre 是阳性，à + le 必须缩合成 au'],
      ["J'ai mal à ___ tête.", ['la', 'ma', 'une'], 0, '我头疼。', '身体部位前用定冠词，不用主有形容词 ma'],
      ['Je ___ mal à la gorge.', ['ai', 'suis', 'fais'], 0, '我嗓子疼。', '"疼"用 avoir mal，不是 être mal（中国人常见错误）'],
      ["Il faut ___ beaucoup d'eau.", ['boire', 'de boire', 'bois'], 0, '要多喝水。', 'il faut 后面直接接动词原形，不加 de'],
      ["Il ne faut pas ___ ici : c'est interdit.", ['fumer', 'fume', 'de fumer'], 0, '这里不许抽烟：这是禁止的。', 'il ne faut pas + 原形 = 禁止、不可以（不是"不需要"）'],
    ],
    discover: [
      { q: '"我牙疼"怎么说？（dents 是复数）', opts: ["J'ai mal aux dents.", "J'ai mal à les dents.", 'Mes dents sont mal.'], a: 0, why: 'à + les 必须缩合成 aux；"疼"要用 avoir mal à。' },
      { q: 'Il ne faut pas prendre ce médicament. 是什么意思？', opts: ['不可以吃这种药', '不需要吃这种药', '不想吃这种药'], a: 0, why: 'il ne faut pas 表示禁止。"不需要"要说 pas besoin de 或 ce n\'est pas la peine de。' },
    ],
    write: { prompt: '你病了，给同事或老师写几句话说明情况：哪里不舒服、有什么症状、医生说要做什么（3–4 句，用 avoir mal à 和 il faut）。', model: "Je suis malade aujourd'hui. J'ai mal à la tête et à la gorge, et j'ai de la fièvre. Le médecin dit que c'est la grippe : il faut rester au lit et prendre des médicaments. Je ne peux pas venir au bureau cette semaine." },
  },
];
