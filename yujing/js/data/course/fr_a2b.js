// 法语核心课程 A2 下半：a2-11 … a2-20
// newWords：[词, 音标, 中文, 例句, 例句中文, 'course']；dialogue：[说话人, 法文, 中文]，"我"= 学习者，"" = 旁白/课文
// sentences：[法文, 中文]；cloze：[带 ___ 的句子, 选项, 正确下标, 中文, 说明]

export const grammar = [
  {
    id: "g-adverbe", title: "-ment 副词与频率副词",
    body: `<p>副词修饰<b>动词、形容词或别的副词</b>，没有阴阳性和单复数变化。很多副词由形容词加 <b>-ment</b>（≈ 中文的“……地”）构成。</p>
<table><tr><th>规则</th><th>例子</th></tr>
<tr><td>一般：<b>阴性</b>形式 + -ment</td><td>lent → lente → <b>lentement</b>；heureux → heureuse → <b>heureusement</b>；doux → douce → <b>doucement</b></td></tr>
<tr><td>阳性以元音结尾：直接 + -ment</td><td>vrai → <b>vraiment</b>；poli → <b>poliment</b>；absolu → <b>absolument</b></td></tr>
<tr><td>-ant → <b>-amment</b></td><td>courant → <b>couramment</b>；constant → constamment</td></tr>
<tr><td>-ent → <b>-emment</b></td><td>évident → <b>évidemment</b>；prudent → prudemment</td></tr>
</table>
<p>-amment 和 -emment <b>读音完全一样</b>，都读 [amɑ̃]，写的时候看原来的形容词是 -ant 还是 -ent。</p>
<p><b>例外</b>：gentil → <b>gentiment</b>；précis → précis<b>é</b>ment；énorme → énorm<b>é</b>ment；bref → brièvement。最常用的两个完全不规则：bon → <b>bien</b>，mauvais → <b>mal</b>。</p>
<p><b>频率副词</b>（从多到少）：</p>
<table><tr><td>toujours 总是</td><td>souvent 经常</td><td>d'habitude / en général 通常</td><td>parfois / de temps en temps 有时</td><td>rarement 很少</td><td>ne … jamais 从不</td></tr></table>
<p><b>位置</b>：</p>
<ul><li>简单时态：放在<b>变位动词后面</b>：Je mange <b>souvent</b> du riz. Il parle <b>lentement</b>.</li>
<li>复合过去时：短副词（bien, mal, souvent, toujours, déjà, beaucoup, vraiment）放在<b>助动词和过去分词之间</b>：J'ai <b>bien</b> dormi. Nous avons <b>souvent</b> visité Lyon.</li>
<li>长的 -ment 副词一般放在过去分词后面：Il a répondu <b>rapidement</b>.</li>
<li>d'habitude、parfois 也常放句首：<b>D'habitude</b>, je me lève à sept heures.</li></ul>
<p><b>中国人最常犯的错</b>：① 按中文语序把副词放在动词前：✗ <i>Je souvent mange…</i> → ✓ Je mange souvent… ② 修饰动词却用形容词：✗ <i>Elle chante bon.</i> → ✓ Elle chante <b>bien</b>. ③ 拼错 évidemment（✗ évidamment）。④ jamais 一定要配 ne：Je <b>ne</b> bois <b>jamais</b> de café（下一课细讲）。</p>`,
    ex: [["Il parle lentement pour moi.", "他为了我说得很慢。"], ["D'habitude, je prends le métro.", "我通常坐地铁。"], ["J'ai bien dormi cette nuit.", "我昨晚睡得很好。"], ["Évidemment, il est encore en retard !", "显然，他又迟到了！"]],
  },
  {
    id: "g-neg2", title: "其他否定：ne … jamais / plus / rien / personne / que",
    body: `<p>除了 ne … pas，法语还有一整套“夹住动词”的否定。<b>ne 不变，换掉 pas</b>：</p>
<table><tr><th>结构</th><th>意思</th><th>例子</th></tr>
<tr><td>ne … <b>jamais</b></td><td>从不</td><td>Je ne bois jamais de café.</td></tr>
<tr><td>ne … <b>plus</b></td><td>不再；没有了</td><td>Il n'y a plus de lait.</td></tr>
<tr><td>ne … <b>rien</b></td><td>什么都不</td><td>Je ne comprends rien.</td></tr>
<tr><td>ne … <b>personne</b></td><td>谁都不</td><td>Je ne connais personne ici.</td></tr>
<tr><td>ne … <b>que</b></td><td>只（不是真正的否定）</td><td>Je n'ai que dix euros.</td></tr>
</table>
<p><b>复合过去时里的位置</b>（重点）：</p>
<ul><li>jamais / plus / rien 和 pas 一样，夹住<b>助动词</b>：Je n'ai <b>rien</b> mangé. Il n'est <b>jamais</b> venu.</li>
<li><b>personne 放在过去分词后面</b>：Je n'ai vu <b>personne</b>.（✗ Je n'ai personne vu）</li>
<li>que 放在被限制的东西前面：Je n'ai mangé <b>qu'</b>une pomme.</li></ul>
<p><b>做主语</b>：Rien / Personne 放句首，后面仍然要 ne，<b>不要 pas</b>：<b>Personne n'</b>est venu. <b>Rien n'</b>est simple.</p>
<p><b>冠词</b>：真正的否定后，un / une / du / de la / des 变成 <b>de</b>：Il n'y a plus <b>de</b> pain. 但 ne … que 意思是“只”，是肯定的，冠词<b>不变</b>：Je ne bois que <b>de l'</b>eau.</p>
<p><b>可以组合</b>：Je ne vois <b>plus personne</b>. Il ne dit <b>jamais rien</b>. Je n'y vais <b>plus jamais</b>.</p>
<p><b>单独回答</b>：— Qu'est-ce que tu as acheté ? — <b>Rien.</b>　— Qui est là ? — <b>Personne.</b>　口语里 ne 常被省掉（J'ai rien vu），但写的时候一定要写。</p>
<p><b>中国人最常犯的错</b>：① 受中文“没……什么都”影响，双重否定：✗ <i>Je n'ai pas rien</i> → ✓ Je n'ai rien。② personne 放错位置（见上）。③ ne … que 后面把冠词改成 de：✗ <i>Je n'ai que de pain</i> → ✓ Je n'ai que du pain。④ 名词 une personne（一个人）和代词 personne（没有人）混淆。</p>`,
    ex: [["Il n'y a plus rien dans le frigo.", "冰箱里什么都没有了。"], ["Je n'ai vu personne dans la rue.", "我在街上谁也没看见。"], ["Personne n'est libre samedi.", "周六谁都没空。"], ["Je ne mange que des légumes le soir.", "我晚上只吃蔬菜。"]],
  },
  {
    id: "g-quel", title: "quel 与 lequel · 倒装疑问句",
    body: `<p><b>1. quel（哪个、什么样的）+ 名词</b>：和名词性数配合，四种写法读音都一样 [kɛl]。</p>
<table><tr><th></th><th>单数</th><th>复数</th></tr><tr><td>阳性</td><td>quel</td><td>quels</td></tr><tr><td>阴性</td><td>quelle</td><td>quelles</td></tr></table>
<ul><li>直接加名词：<b>Quel</b> âge as-tu ? <b>Quelles</b> langues parles-tu ?</li>
<li><b>quel + être + 名词</b>（问“……是什么”）：<b>Quelle est</b> ton adresse ? <b>Quel est</b> ton numéro ?（✗ <i>Qu'est-ce que est ton adresse</i>）</li>
<li>介词放前面：<b>À quelle</b> heure ? <b>Dans quel</b> quartier ?</li>
<li>感叹：<b>Quel</b> dommage ! <b>Quelle</b> belle vue !</li></ul>
<p><b>2. lequel（哪一个）= le + quel，代替“quel + 名词”</b>，用于在已知的几样东西里挑：</p>
<table><tr><th></th><th>单数</th><th>复数</th></tr><tr><td>阳性</td><td>lequel</td><td>lesquels</td></tr><tr><td>阴性</td><td>laquelle</td><td>lesquelles</td></tr></table>
<p>J'ai deux livres. <b>Lequel</b> veux-tu ? 　<b>Laquelle de</b> ces robes préfères-tu ?（lequel de … = ……中的哪一个）</p>
<p><b>3. 倒装疑问句</b>：动词和主语代词对调，中间加<b>连字符</b>。三种问法的语域：</p>
<table><tr><th>口语</th><th>中性</th><th>正式 / 书面</th></tr><tr><td>Vous habitez où ?</td><td>Où est-ce que vous habitez ?</td><td>Où <b>habitez-vous</b> ?</td></tr></table>
<ul><li>动词以元音结尾、主语是 il / elle / on 时，中间加 <b>-t-</b> 方便读：<b>A-t-il</b> faim ? <b>Parle-t-elle</b> chinois ? <b>Va-t-on</b> au cinéma ?</li>
<li>主语是名词时，名词放前面，再用代词倒装：<b>Votre fille parle-t-elle</b> français ?</li>
<li>je 一般不倒装，只有固定说法：<b>Puis-je</b> vous aider ?（我可以帮您吗？）</li></ul>
<p><b>中国人最常犯的错</b>：① 忘了连字符或 -t-：✗ <i>A-il</i> → ✓ A-t-il。② 名词主语直接倒装：✗ <i>Parle votre fille français ?</i>。③ lequel 的性数跟着被选的东西，不是跟说话人：deux robes → laquelle。</p>`,
    ex: [["Quelle est votre adresse ?", "您的地址是什么？"], ["Il y a deux gâteaux. Lequel veux-tu ?", "有两块蛋糕，你要哪一块？"], ["Où habitez-vous ?", "您住在哪里？"], ["Quel âge a-t-elle ?", "她多大了？"]],
  },
  {
    id: "g-tonique", title: "重读人称代词：moi, toi, lui…",
    body: `<p>法语的主语代词（je、tu…）不能单独用，也不能放在介词后面。这时要换成<b>重读人称代词</b>：</p>
<table><tr><th>主语</th><td>je</td><td>tu</td><td>il</td><td>elle</td><td>nous</td><td>vous</td><td>ils</td><td>elles</td></tr>
<tr><th>重读</th><td><b>moi</b></td><td><b>toi</b></td><td><b>lui</b></td><td><b>elle</b></td><td><b>nous</b></td><td><b>vous</b></td><td><b>eux</b></td><td><b>elles</b></td></tr></table>
<p><b>什么时候用</b>：</p>
<ul><li><b>介词后面</b>：avec moi, chez lui, pour elle, sans eux, à côté de toi。Tu viens <b>chez moi</b> ?</li>
<li><b>强调 / 对比</b>：<b>Moi</b>, je préfère le thé. <b>Lui</b>, il oublie toujours tout.</li>
<li><b>c'est / ce sont</b> 后面：C'est <b>moi</b> ! Ce sont <b>eux</b>.</li>
<li><b>c'est … qui 强调“是谁做的”</b>：C'est <b>moi qui</b> fais le dîner. 注意：qui 后面的动词和前面的代词配合 → C'est moi qui <b>fais</b>，C'est toi qui <b>as</b>，C'est nous qui <b>avons</b>。</li>
<li><b>简短回答</b>：Moi aussi（我也是）、Moi non plus（我也不）、Et toi ?</li>
<li><b>比较句 que 后面</b>：Il est plus grand que <b>moi</b>.</li>
<li><b>être à + 重读代词 = 属于谁</b>：Ce parapluie est <b>à moi</b>. C'est à qui ? — C'est <b>à lui</b>.</li>
<li><b>并列主语</b>：Paul et <b>moi</b>, nous partons demain.</li></ul>
<p><b>和间接宾语 lui 的区别</b>：间接宾语 lui 男女都用（je <b>lui</b> parle = 我跟他/她说话）；重读的 lui <b>只指男性</b>，女性用 elle：avec <b>elle</b>。</p>
<p><b>中国人最常犯的错</b>：① ✗ <i>Je aussi</i> → ✓ Moi aussi。② ✗ <i>avec je / pour il</i> → ✓ avec moi / pour lui。③ ✗ <i>C'est moi qui a</i> → ✓ C'est moi qui <b>ai</b>。④ 对否定句附和要用 moi non plus，不是 moi aussi。</p>`,
    ex: [["Ce n'est pas à moi, c'est à lui.", "这不是我的，是他的。"], ["C'est moi qui fais le dîner ce soir.", "今晚是我做饭。"], ["Tu viens avec nous ?", "你跟我们一起来吗？"], ["— Je n'aime pas danser. — Moi non plus.", "——我不喜欢跳舞。——我也不喜欢。"]],
  },
  {
    id: "g-recent", title: "刚刚、正在、马上：venir de / être en train de / être sur le point de",
    body: `<p>法语用三个固定结构加上已经学过的 aller + 原形，在时间轴上精确地说出动作的阶段：</p>
<table><tr><th>结构</th><th>意思</th><th>例子</th></tr>
<tr><td><b>venir de</b> + 原形</td><td>刚刚（近过去时）</td><td>Je <b>viens de</b> manger.</td></tr>
<tr><td><b>être en train de</b> + 原形</td><td>正在</td><td>Je <b>suis en train de</b> manger.</td></tr>
<tr><td><b>être sur le point de</b> + 原形</td><td>马上就要、正要</td><td>Je <b>suis sur le point de</b> partir.</td></tr>
<tr><td><b>aller</b> + 原形</td><td>将要（近将来时）</td><td>Je <b>vais</b> manger.</td></tr>
</table>
<p>venir 变位复习：je viens, tu viens, il vient, nous venons, vous venez, ils <b>viennent</b>。</p>
<p><b>要点</b>：</p>
<ul><li>de 在元音前省音：Il vient <b>d'</b>arriver. Je suis en train <b>d'</b>écrire.</li>
<li>代词放在原形前面：Il vient de <b>me</b> téléphoner. Je suis en train de <b>le</b> lire.</li>
<li>“刚刚”要用 venir 的<b>现在时</b>，意思却是过去：Je viens de finir = 我刚做完。讲过去的故事时用未完成过去时：Je <b>venais de</b> partir quand il est arrivé.（我刚走他就到了。）</li>
<li>法语的现在时本身就能表示“正在”：Je mange = 我在吃。être en train de 是<b>强调</b>“此刻正忙着做”，常用来解释为什么不方便。</li>
<li>être en train de 不和表示状态的动词连用：✗ <i>Je suis en train d'être fatigué</i>。</li></ul>
<p><b>中国人最常犯的错</b>：① 把“刚刚”说成复合过去时：✗ <i>Je suis venu de manger</i> → ✓ Je viens de manger。② 混淆 venir de + 地点（来自）和 venir de + 原形（刚刚）：Il vient <b>de Lyon</b>（他从里昂来）/ Il vient <b>de partir</b>（他刚走）。③ 忘记省音：✗ <i>Je viens de arriver</i>。</p>`,
    ex: [["Je viens de sortir du bureau.", "我刚从办公室出来。"], ["Ne fais pas de bruit, il est en train de dormir.", "别出声，他正在睡觉。"], ["Le film est sur le point de commencer.", "电影马上就要开始了。"], ["Ils viennent d'arriver à la gare.", "他们刚到火车站。"]],
  },
  {
    id: "g-duree", title: "时间的表达：depuis / il y a / pendant / dans / en",
    body: `<p>中文一个“……年”“……之后”可以对应法语好几个词，关键看<b>动作和现在的关系</b>：</p>
<table><tr><th>词</th><th>意思</th><th>常配的时态</th><th>例子</th></tr>
<tr><td><b>depuis</b></td><td>自从……；已经……了（到现在还在继续）</td><td><b>现在时</b></td><td>J'habite ici <b>depuis</b> trois ans / depuis 2020.</td></tr>
<tr><td><b>il y a</b></td><td>……以前</td><td>复合过去时</td><td>Je suis arrivé <b>il y a</b> deux jours.</td></tr>
<tr><td><b>pendant</b></td><td>在……期间；持续了……</td><td>各种时态</td><td>J'ai dormi <b>pendant</b> huit heures.</td></tr>
<tr><td><b>dans</b></td><td>（从现在起）……以后</td><td>将来时 / 现在时</td><td>Le train part <b>dans</b> dix minutes.</td></tr>
<tr><td><b>en</b></td><td>用了……时间（完成）</td><td>各种时态</td><td>J'ai lu ce livre <b>en</b> deux jours.</td></tr>
</table>
<p><b>细节</b>：</p>
<ul><li>问持续多久：<b>Depuis quand</b> … ?（从什么时候）<b>Depuis combien de temps</b> … ?（多久了）</li>
<li>en 还可以加月份、年份、季节：<b>en</b> août, <b>en</b> 2026, <b>en</b> été。</li>
<li>pendant 后面接一段时间时，口语里常省略：J'ai dormi (pendant) huit heures。</li>
<li>预订、出行时说“计划待多久”，常用 <b>pour</b>：Je pars <b>pour</b> une semaine. Une chambre <b>pour</b> trois nuits.</li>
<li>il y a 有两个意思：“有”（Il y a un café）和“……以前”（il y a un an），看后面是不是一段时间。</li></ul>
<p><b>中国人最常犯的错</b>：① “我学法语两年了（还在学）”用了过去时：✗ <i>J'ai appris le français depuis deux ans</i> → ✓ J'apprends le français <b>depuis</b> deux ans。② “十分钟后”说成 ✗ <i>après dix minutes</i> → ✓ <b>dans</b> dix minutes（après 要有另一个参照点：après le dîner）。③ 混淆 <b>dans</b> deux heures（两小时以后）和 <b>en</b> deux heures（两小时内完成）。</p>`,
    ex: [["J'apprends le français depuis deux ans.", "我学法语已经两年了。"], ["Je suis venu ici il y a trois ans.", "我三年前来过这里。"], ["Le TGV fait le trajet en trois heures.", "高铁三小时跑完全程。"], ["Je vous rappelle dans cinq minutes.", "我五分钟后给您回电话。"]],
  },
  {
    id: "g-pc-pron", title: "代词式动词的复合过去时",
    body: `<p>所有代词式动词（se lever、se coucher、s'habiller…）的复合过去时<b>一律用 être</b>：主语 + 自反代词 + être + 过去分词。</p>
<table><tr><th colspan="2">se lever（起床）</th></tr>
<tr><td>je <b>me suis</b> levé(e)</td><td>nous <b>nous sommes</b> levé(e)s</td></tr>
<tr><td>tu <b>t'es</b> levé(e)</td><td>vous <b>vous êtes</b> levé(e)(s)</td></tr>
<tr><td>il <b>s'est</b> levé</td><td>ils <b>se sont</b> levés</td></tr>
<tr><td>elle <b>s'est</b> levée</td><td>elles <b>se sont</b> levées</td></tr></table>
<p><b>配合</b>：一般情况下过去分词和<b>主语</b>性数配合：Elle s'est levé<b>e</b>. Nous nous sommes couché<b>s</b>. 对一位女士用 vous：Vous vous êtes bien reposé<b>e</b>, madame ?</p>
<p><b>不配合的两种情况</b>（A2 先认识）：</p>
<ul><li>后面还有直接宾语：Elle s'est lavé <b>les mains</b>.（不加 e）</li>
<li>se 是间接宾语（动词本来接 à 某人）：ils se sont <b>téléphoné</b>, parlé, dit, écrit（téléphoner <b>à</b> qqn）。</li></ul>
<p><b>否定</b>：ne 放在自反代词前，pas 放在 être 后：Je <b>ne me suis pas</b> réveillé. Elle <b>ne s'est pas</b> maquillée.</p>
<p><b>常用代词式动词</b>：se réveiller 醒、se lever 起床、se doucher 洗澡、s'habiller 穿衣、se dépêcher 赶紧、se promener 散步、se reposer 休息、se coucher 睡下、s'endormir 睡着（过去分词 endormi）、se disputer 吵架、s'excuser 道歉、se tromper 弄错。</p>
<p><b>中国人最常犯的错</b>：① 用 avoir：✗ <i>Je m'ai levé</i> → ✓ Je me suis levé。② 丢掉代词：✗ <i>Je suis levé</i>（这是“我已经起来了”的状态）。③ 否定位置：✗ <i>Je ne suis pas me levé</i> → ✓ Je ne me suis pas levé。④ 女生说自己时忘了加 e：Je me suis levé<b>e</b>（读音不变，但要写）。</p>`,
    ex: [["Hier, je me suis levé à six heures.", "昨天我六点起床。"], ["Elle s'est habillée très vite.", "她很快就穿好了衣服。"], ["Nous ne nous sommes pas disputés.", "我们没有吵架。"], ["Ils se sont téléphoné hier soir.", "他们昨晚通了电话。"]],
  },
  {
    id: "g-cond", title: "条件式现在时：礼貌、建议、愿望",
    body: `<p><b>构成 = 简单将来时的词根 + 未完成过去时的词尾</b>。</p>
<table><tr><th>词尾</th><td>je -<b>ais</b></td><td>tu -<b>ais</b></td><td>il -<b>ait</b></td><td>nous -<b>ions</b></td><td>vous -<b>iez</b></td><td>ils -<b>aient</b></td></tr></table>
<p>规则动词词根 = 原形（-re 去掉 e）：parler → je parler<b>ais</b>；finir → je finir<b>ais</b>；prendre → je prendr<b>ais</b>。</p>
<p><b>不规则词根</b>（和将来时完全一样）：</p>
<table><tr><td>être → <b>ser</b>ais</td><td>avoir → <b>aur</b>ais</td><td>aller → <b>ir</b>ais</td><td>faire → <b>fer</b>ais</td></tr>
<tr><td>pouvoir → <b>pourr</b>ais</td><td>vouloir → <b>voudr</b>ais</td><td>devoir → <b>devr</b>ais</td><td>venir → <b>viendr</b>ais</td></tr>
<tr><td>savoir → <b>saur</b>ais</td><td>voir → <b>verr</b>ais</td><td>falloir → il <b>faudr</b>ait</td><td>aimer → <b>aimer</b>ais</td></tr></table>
<p><b>三大用法</b>：</p>
<ul><li><b>礼貌请求</b>：Je <b>voudrais</b> un café. <b>Pourriez</b>-vous m'aider ? <b>Auriez</b>-vous un stylo ?</li>
<li><b>建议</b>：Tu <b>devrais</b> dormir plus.（你应该……，比 tu dois 委婉）Tu <b>pourrais</b> essayer… / Il <b>faudrait</b>… / <b>À ta place, je</b> + 条件式：À ta place, je <b>prendrais</b> le train.</li>
<li><b>愿望</b>：J'<b>aimerais</b> voyager au Japon. Ce <b>serait</b> génial !</li></ul>
<p>（“如果……就会……”的假设句 si + 未完成过去时，B1 再学。）</p>
<p><b>中国人最常犯的错</b>：① 和将来时混淆：je parler<b>ai</b> [e]（我将说）≠ je parler<b>ais</b> [ɛ]（我会说/想说），听写时尤其要注意。② 用未完成过去时的词根：✗ <i>je pouvais</i>（我那时能）→ ✓ je <b>pourr</b>ais。③ 给建议直接用 tu dois，听起来像命令；朋友之间用 tu devrais 更自然。</p>`,
    ex: [["Pourriez-vous parler plus lentement, s'il vous plaît ?", "您能说慢一点吗？"], ["Tu devrais te coucher plus tôt.", "你应该早点睡。"], ["À ta place, je prendrais le train.", "要是我是你，我会坐火车。"], ["J'aimerais bien vivre à Paris.", "我很想住在巴黎。"]],
  },
  {
    id: "g-possessif", title: "主有代词：le mien, la tienne, les leurs…",
    body: `<p>主有代词 = “定冠词 + 主有形式”，代替“主有形容词 + 名词”，避免重复：mon CV → <b>le mien</b>（我的那份）。</p>
<table><tr><th></th><th>阳性单数</th><th>阴性单数</th><th>阳性复数</th><th>阴性复数</th></tr>
<tr><td>我的</td><td>le mien</td><td>la mienne</td><td>les miens</td><td>les miennes</td></tr>
<tr><td>你的</td><td>le tien</td><td>la tienne</td><td>les tiens</td><td>les tiennes</td></tr>
<tr><td>他的 / 她的</td><td>le sien</td><td>la sienne</td><td>les siens</td><td>les siennes</td></tr>
<tr><td>我们的</td><td>le nôtre</td><td>la nôtre</td><td colspan="2">les nôtres</td></tr>
<tr><td>您的；你们的</td><td>le vôtre</td><td>la vôtre</td><td colspan="2">les vôtres</td></tr>
<tr><td>他们的 / 她们的</td><td>le leur</td><td>la leur</td><td colspan="2">les leurs</td></tr></table>
<p><b>核心规则</b>：性数跟着<b>被拥有的东西</b>走，不看主人是男是女（和 son / sa 一样）：</p>
<ul><li>Paul a perdu sa clé → il a perdu <b>la sienne</b>（clé 是阴性，Paul 是男的也无所谓）。</li>
<li>Marie a un vélo → c'est <b>le sien</b>。</li></ul>
<p><b>冠词缩合</b>：à + le mien = <b>au mien</b>；de + les tiens = <b>des tiens</b>：Je pense souvent <b>aux miens</b>（我常想念家人）。</p>
<p><b>拼写和读音</b>：主有形容词 notre / votre 没有音调符号，o 读短音 [ɔ]；主有代词 le n<b>ô</b>tre / le v<b>ô</b>tre 有 ^，o 读长音 [o]。leur 作代词时前面一定有冠词：les leurs。</p>
<p><b>另一种说法</b>：C'est le mien. ≈ C'est à moi.（上一课的 être à + 重读代词）</p>
<p><b>中国人最常犯的错</b>：① 按主人的性别选形式：✗ <i>Marie ? C'est la sienne</i>（指 le sac）→ ✓ le sien。② 漏掉冠词：✗ <i>Ce livre est mien</i> → ✓ C'est le mien。③ ✗ <i>la notre</i> → ✓ la nôtre。</p>`,
    ex: [["Ce n'est pas mon stylo, c'est le tien.", "这不是我的笔，是你的。"], ["Ton CV fait trois pages, le mien ne fait qu'une page.", "你的简历有三页，我的只有一页。"], ["Notre bureau est plus petit que le vôtre.", "我们的办公室比你们的小。"], ["Mes parents vont bien. Et les tiens ?", "我父母挺好的。你父母呢？"]],
  },
  {
    id: "g-tout", title: "tout / toute / tous / toutes · 书信格式",
    body: `<p><b>1. 形容词：tout + 限定词 + 名词</b>，和名词性数配合：</p>
<table><tr><th></th><th>单数（整个）</th><th>复数（所有、每）</th></tr>
<tr><td>阳性</td><td><b>tout</b> le temps, tout mon travail</td><td><b>tous</b> les jours, tous ces livres</td></tr>
<tr><td>阴性</td><td><b>toute</b> la journée, toute ma famille</td><td><b>toutes</b> les semaines, toutes les options</td></tr></table>
<p>注意意思的区别：<b>toute la journée</b> = 一整天；<b>tous les jours</b> = 每天。</p>
<p><b>2. 代词</b>：</p>
<ul><li><b>tout</b> = 一切、所有事：<b>Tout</b> va bien. J'ai <b>tout</b> compris.（复合过去时里放在助动词和分词之间，和 rien 一样）</li>
<li><b>tous / toutes</b> = 大家、全都：Ils sont <b>tous</b> venus. Je les connais <b>toutes</b>. 代词 tous 的 s <b>要读出来</b> [tus]；形容词 tous les jours 的 s 不读 [tu]。</li></ul>
<p><b>3. 常用表达</b>：<b>tout le monde</b>（大家，动词用<b>单数</b>：Tout le monde <b>est</b> là）、tout de suite（马上）、pas du tout（一点也不）、tout à fait（完全对）、en tout（总共）。</p>
<p><b>4. 正式邮件格式</b>：</p>
<table><tr><th>部分</th><th>正式</th><th>朋友之间</th></tr>
<tr><td>主题</td><td>Objet : Demande d'informations</td><td>—</td></tr>
<tr><td>称呼</td><td>Madame, Monsieur,（不知道对方是谁）/ Madame Dupont,</td><td>Cher Paul, / Chère Léa, / Salut !</td></tr>
<tr><td>开头</td><td>Je vous écris pour… / Je me permets de vous contacter…</td><td>Comment ça va ?</td></tr>
<tr><td>请求</td><td>Pourriez-vous… ? / J'aimerais savoir si…</td><td>Tu pourrais… ?</td></tr>
<tr><td>结尾句</td><td>Je vous remercie par avance de votre réponse.</td><td>Réponds-moi vite !</td></tr>
<tr><td>落款</td><td><b>Cordialement</b>（最通用）/ <b>Bien à vous</b>（稍亲切）</td><td>Bises / À bientôt</td></tr></table>
<p><b>中国人最常犯的错</b>：① ✗ <i>Tout le monde sont là</i> → ✓ Tout le monde est là。② 混淆 tous les jours 和 toute la journée。③ 正式邮件用 Salut 或 Bonjour 开头、用 Bises 结尾；给陌生人写信用 Madame, Monsieur,，称呼后面是逗号，下一行正文首字母大写。</p>`,
    ex: [["Je travaille toute la journée.", "我工作一整天。"], ["Les cours ont lieu tous les jours.", "每天都有课。"], ["Tout le monde est arrivé.", "大家都到了。"], ["Je vous remercie par avance. Cordialement,", "提前感谢您。此致敬礼，"]],
  },
];

export const CAT = {
  "g-adverbe": "名词与形容词",
  "g-neg2": "句型",
  "g-quel": "句型",
  "g-tonique": "代词",
  "g-recent": "时态与语气",
  "g-duree": "数字与时间",
  "g-pc-pron": "时态与语气",
  "g-cond": "时态与语气",
  "g-possessif": "代词",
  "g-tout": "名词与形容词",
};

export const units = [
  {
    id: "a2-11", emoji: "🔁", title: "经常、有时、从不", sub: "-ment 副词 · 频率副词", can: "能说出自己做事的频率和方式，谈谈生活习惯", scene: null, grammar: ["g-adverbe"],
    words: [],
    newWords: [
      ["souvent", "su.vɑ̃", "经常", "Je vais souvent au cinéma.", "我经常去看电影。", "course"],
      ["parfois", "paʁ.fwa", "有时", "Parfois, je travaille le samedi.", "我有时周六工作。", "course"],
      ["rarement", "ʁaʁ.mɑ̃", "很少", "Il mange rarement de la viande.", "他很少吃肉。", "course"],
      ["d'habitude", "da.bi.tyd", "通常；平时", "D'habitude, je me lève à sept heures.", "我平时七点起床。", "course"],
      ["lentement", "lɑ̃t.mɑ̃", "慢慢地", "Parlez lentement, s'il vous plaît.", "请说慢一点。", "course"],
      ["rapidement", "ʁa.pid.mɑ̃", "快速地", "Il a répondu rapidement.", "他很快就回复了。", "course"],
      ["régulièrement", "ʁe.ɡy.ljɛʁ.mɑ̃", "有规律地；定期", "Elle fait du sport régulièrement.", "她定期运动。", "course"],
      ["évidemment", "e.vi.da.mɑ̃", "当然；显然", "Évidemment, il est en retard !", "显然，他又迟到了！", "course"],
      ["la salle de sport", "la sal də spɔʁ", "健身房", "Je vais à la salle de sport le lundi.", "我每周一去健身房。", "course"],
    ],
    dialogue: [
      ["Léa", "Je fais un petit questionnaire sur la santé. Tu fais souvent du sport ?", "我在做一个关于健康的小问卷。你经常运动吗？"],
      ["我", "Pas vraiment. Je vais rarement à la salle de sport, une fois par mois peut-être.", "不怎么运动。我很少去健身房，大概一个月一次吧。"],
      ["Léa", "Et le matin, tu prends un petit-déjeuner ?", "那早上你吃早饭吗？"],
      ["我", "D'habitude, oui. Mais parfois, je me lève tard et je mange rapidement dans le métro.", "平时吃。但有时我起晚了，就在地铁里匆匆吃点。"],
      ["Léa", "Et tu dors bien ?", "那你睡得好吗？"],
      ["我", "Ça dépend. En général, je me couche vers minuit. Je ne dors jamais huit heures !", "看情况。我一般半夜十二点左右睡。我从来没睡够八小时！"],
      ["Léa", "Évidemment, tu es toujours fatigué ! Il faut manger lentement et dormir régulièrement.", "难怪你总是很累！要慢慢吃饭，作息要规律。"],
      ["我", "Tu as absolument raison. Je vais essayer !", "你说得完全对。我会试试的！"],
    ],
    sentences: [
      ["Je vais rarement à la salle de sport.", "我很少去健身房。"],
      ["D'habitude, je prends un petit-déjeuner.", "我平时吃早饭。"],
      ["Il faut manger lentement.", "要慢慢吃饭。"],
      ["Tu as absolument raison.", "你说得完全对。"],
      ["J'ai bien dormi cette nuit.", "我昨晚睡得很好。"],
    ],
    cloze: [
      ["Le professeur parle très ___.", ["lentement", "lent", "lente"], 0, "老师说得很慢。", "修饰动词 parle 要用副词：阴性 lente + -ment → lentement；lent / lente 是形容词。"],
      ["___, il est encore en retard !", ["Évidemment", "Évidamment", "Évidentement"], 0, "显然，他又迟到了！", "évident 以 -ent 结尾 → -emment。读音 [amɑ̃] 和 -amment 一样，但拼写要跟原来的形容词。"],
      ["Elle chante très ___.", ["bien", "bon", "bonne"], 0, "她唱得很好。", "修饰动词用副词 bien；bon / bonne 是形容词，只能修饰名词（un bon chanteur）。"],
      ["Il répond toujours ___ à mes questions.", ["gentiment", "gentilment", "gentillement"], 0, "他总是很亲切地回答我的问题。", "gentil 是例外：gentil → gentiment，没有 l。"],
      ["Je fais du sport cinq fois par semaine : j'en fais ___.", ["souvent", "rarement", "parfois"], 0, "我每周运动五次，经常运动。", "一周五次是“经常”；rarement 是“很少”，parfois 是“有时”。"],
    ],
    discover: [
      { q: "“我经常吃米饭”用法语怎么说？", opts: ["Je mange souvent du riz.", "Je souvent mange du riz.", "Souvent je du riz mange."], a: 0, why: "法语的副词放在变位动词后面，和中文“经常吃”的语序正好相反。" },
      { q: "rapide → rapidement；那 vrai → ？", opts: ["vraiment", "vraiement", "vraimment"], a: 0, why: "阳性形容词以元音结尾（vrai、poli、absolu）时，直接加 -ment，不用先变阴性：vraiment、poliment、absolument。" },
    ],
    write: { prompt: "写写你的生活习惯：多久运动一次、平时几点睡、怎么吃饭（4 句，用上 souvent / parfois / rarement / ne … jamais 和一个 -ment 副词）。", model: "D'habitude, je me lève à sept heures. Je vais souvent au travail à vélo. Je mange parfois rapidement au bureau. Je ne fais jamais de sport le dimanche !" },
  },
  {
    id: "a2-12", emoji: "🫙", title: "什么都没有", sub: "ne … jamais / plus / rien / personne / que", can: "能说“什么都没有”“谁都不”“不再”“只有”，抱怨和解释情况", scene: null, grammar: ["g-neg2"],
    words: [],
    newWords: [
      ["le frigo", "lə fʁi.ɡo", "冰箱（口语）", "Le frigo est vide.", "冰箱是空的。", "course"],
      ["rien", "ʁjɛ̃", "什么都（不）", "Je ne comprends rien.", "我什么都不懂。", "course"],
      ["personne", "pɛʁ.sɔn", "谁都（不）", "Je ne connais personne ici.", "我在这里谁都不认识。", "course"],
      ["ne … plus", "nə ply", "不再；没有了", "Il n'y a plus de lait.", "没有牛奶了。", "course"],
      ["ne … jamais", "nə ʒa.mɛ", "从不", "Je ne bois jamais de café.", "我从来不喝咖啡。", "course"],
      ["ne … que", "nə kə", "只", "Je n'ai que dix euros.", "我只有十欧元。", "course"],
      ["faire les courses", "fɛʁ le kuʁs", "（去超市）买东西", "Je fais les courses le samedi.", "我周六去买东西。", "course"],
      ["libre", "libʁ", "有空的；自由的", "Tu es libre ce soir ?", "你今晚有空吗？", "course"],
      ["commander", "kɔ.mɑ̃.de", "点（菜）；订购", "On commande une pizza ?", "我们叫个比萨吧？", "course"],
    ],
    dialogue: [
      ["Thomas", "J'ai faim ! Il reste quelque chose dans le frigo ?", "我饿了！冰箱里还有东西吗？"],
      ["我", "Non, il n'y a plus rien. Je n'ai pas fait les courses cette semaine.", "没有，什么都没了。我这周没去买东西。"],
      ["Thomas", "Encore ? Tu ne fais jamais les courses !", "又没去？你从来不买东西！"],
      ["我", "Ce n'est pas vrai ! Mais en ce moment, je n'ai que vingt euros.", "才不是！可我现在只有二十欧元了。"],
      ["Thomas", "Bon, on commande une pizza ? Au fait, tu as invité quelqu'un pour samedi ?", "好吧，叫个比萨？对了，周六你请人了吗？"],
      ["我", "Non, je n'ai invité personne. Personne n'est libre ce week-end.", "没有，我谁也没请。这个周末大家都没空。"],
      ["Thomas", "Ce n'est pas grave. On va regarder un film tous les deux.", "没关系。我们俩一起看部电影。"],
      ["我", "Bonne idée. Mais je ne veux plus de pizza : on en mange tous les soirs !", "好主意。不过我不想再吃比萨了，我们天天晚上都吃！"],
    ],
    sentences: [
      ["Il n'y a plus rien dans le frigo.", "冰箱里什么都没有了。"],
      ["Je n'ai invité personne.", "我谁也没请。"],
      ["Tu ne fais jamais les courses !", "你从来不买东西！"],
      ["Je n'ai que vingt euros.", "我只有二十欧元。"],
      ["Personne n'est libre ce week-end.", "这个周末大家都没空。"],
    ],
    cloze: [
      ["Je n'ai ___ mangé depuis ce matin.", ["rien", "pas rien", "personne"], 0, "我从早上到现在什么都没吃。", "“什么都没”是 ne … rien，rien 已经是否定，不能再加 pas；personne 指人。复合过去时里 rien 放在助动词和分词之间。"],
      ["Il n'y a ___ dans le bureau, tout le monde est parti.", ["personne", "rien", "pas"], 0, "办公室里一个人都没有，大家都走了。", "指“没有人”用 personne；rien 指东西。"],
      ["Je n'ai plus ___ lait.", ["de", "du", "le"], 0, "我没有牛奶了。", "真正的否定（ne … plus）后，部分冠词 du 变成 de。"],
      ["Le soir, je ne mange que ___ légumes.", ["des", "de", "les"], 0, "我晚上只吃蔬菜。", "ne … que = 只，意思是肯定的，所以冠词 des 不变成 de。"],
      ["___ n'est venu à la fête.", ["Personne", "Rien", "Pas personne"], 0, "没有人来参加聚会。", "personne 做主语放句首，后面接 ne，不要 pas。动词 venu 指人，所以用 personne。"],
    ],
    discover: [
      { q: "“我什么都没看见”怎么说？", opts: ["Je n'ai rien vu.", "Je n'ai vu rien.", "Je n'ai pas rien vu."], a: 0, why: "rien 和 pas 一样夹住助动词：n'ai rien vu。法语没有“双重否定”，有了 rien 就不要 pas。" },
      { q: "“我谁都没看见”呢？", opts: ["Je n'ai vu personne.", "Je n'ai personne vu."], a: 0, why: "personne 是例外，要放在过去分词后面：Je n'ai vu personne。" },
    ],
    write: { prompt: "你的冰箱空了，给室友留言：什么没有了、你只剩多少钱、谁都没空帮忙（3–4 句，至少用 3 种不同的否定）。", model: "Il n'y a plus rien dans le frigo. Je n'ai que dix euros. Personne n'est libre pour faire les courses avec moi. Tu peux acheter du pain ?" },
  },
  {
    id: "a2-13", emoji: "🎁", title: "哪一个？", sub: "quel / lequel · 倒装疑问句", can: "能在店里挑选东西、问“哪一个”，听懂并使用正式的倒装疑问句", scene: null, grammar: ["g-quel"],
    words: ["quel · quelle"],
    newWords: [
      ["le cadeau", "lə ka.do", "礼物", "C'est un cadeau pour toi.", "这是给你的礼物。", "course"],
      ["conseiller", "kɔ̃.se.je", "建议；推荐", "Qu'est-ce que vous me conseillez ?", "您推荐什么？", "course"],
      ["lequel · laquelle", "lə.kɛl · la.kɛl", "哪一个（阳·阴）", "Il y a deux robes. Laquelle préfères-tu ?", "有两条裙子，你更喜欢哪条？", "course"],
      ["lesquels · lesquelles", "le.kɛl", "哪一些（阳·阴）", "Lesquels de ces livres sont en français ?", "这些书里哪几本是法语的？", "course"],
      ["la bougie", "la bu.ʒi", "蜡烛；香薰蜡烛", "Cette bougie sent la vanille.", "这支蜡烛有香草味。", "course"],
      ["sentir", "sɑ̃.tiʁ", "闻起来；散发……气味", "Ça sent bon !", "好香啊！", "course"],
      ["la boutique", "la bu.tik", "小店；精品店", "Cette boutique est très jolie.", "这家小店很漂亮。", "course"],
      ["le paquet cadeau", "lə pa.kɛ ka.do", "礼品包装", "Je vous fais un paquet cadeau ?", "要给您包成礼物吗？", "course"],
      ["cuisiner", "kɥi.zi.ne", "做饭", "Mon père adore cuisiner.", "我爸爸很爱做饭。", "course"],
    ],
    dialogue: [
      ["店员", "Bonjour, puis-je vous aider ?", "您好，需要帮忙吗？"],
      ["我", "Oui, je cherche un cadeau pour une amie. Qu'est-ce que vous me conseillez ?", "是的，我想给一位朋友买礼物。您有什么推荐？"],
      ["店员", "Quel âge a-t-elle ? Qu'est-ce qu'elle aime ?", "她多大了？她喜欢什么？"],
      ["我", "Elle a trente ans et elle adore lire et cuisiner.", "她三十岁，很爱看书和做饭。"],
      ["店员", "Alors, j'ai ces deux livres de cuisine. Lequel préférez-vous ?", "那我这有两本菜谱。您更喜欢哪一本？"],
      ["我", "Le livre italien, je pense. Et ces bougies, lesquelles sentent la vanille ?", "我想要意大利菜那本。还有这些蜡烛，哪几支是香草味的？"],
      ["店员", "Les blanches. Voulez-vous un paquet cadeau ?", "白色的那些。要包成礼物吗？"],
      ["我", "Oui, s'il vous plaît. Quelle jolie boutique ! Quel est le prix total ?", "要，谢谢。这家店真漂亮！一共多少钱？"],
      ["店员", "Trente-deux euros. Payez-vous par carte ?", "三十二欧元。您刷卡吗？"],
    ],
    sentences: [
      ["Puis-je vous aider ?", "我可以帮您吗？"],
      ["Lequel préférez-vous ?", "您更喜欢哪一个？"],
      ["Quel âge a-t-elle ?", "她多大了？"],
      ["Quelle jolie boutique !", "多漂亮的小店啊！"],
      ["Lesquelles sentent la vanille ?", "哪些是香草味的？"],
    ],
    cloze: [
      ["___ est ton adresse ?", ["Quelle", "Quel", "Qu'est-ce que"], 0, "你的地址是什么？", "问“……是什么”用 quel + être + 名词；adresse 是阴性 → quelle。"],
      ["Il y a deux robes. ___ préfères-tu ?", ["Laquelle", "Lequel", "Quelle"], 0, "有两条裙子，你更喜欢哪条？", "代替前面说过的 robe（阴性单数）→ laquelle。quelle 后面必须跟名词。"],
      ["Quel âge ___ ?", ["a-t-elle", "a-elle", "elle a-t"], 0, "她多大了？", "a 以元音结尾，和 elle 倒装时中间加 -t-：a-t-elle。"],
      ["Où ___ ?", ["habitez-vous", "habitez vous", "vous habitez-vous"], 0, "您住在哪里？", "倒装时动词和代词之间要有连字符，主语只出现一次。"],
      ["Voici mes livres. ___ veux-tu emprunter ?", ["Lesquels", "Lesquelles", "Quels"], 0, "这是我的书。你想借哪几本？", "livres 是阳性复数 → lesquels。"],
    ],
    discover: [
      { q: "把 “Votre fille parle français ?” 改成倒装问句：", opts: ["Votre fille parle-t-elle français ?", "Parle votre fille français ?", "Parle-t-elle votre fille français ?"], a: 0, why: "主语是名词时，名词留在前面，再用代词 elle 倒装：Votre fille parle-t-elle … ?" },
      { q: "为什么说 “Parle-t-il chinois ?” 里有个 t？", opts: ["为了读音：两个元音之间加 t，没有意思", "t 是 tu 的缩写", "因为是过去时"], a: 0, why: "动词以元音结尾（parle、a、va）而主语是 il / elle / on 时，加 -t- 避免元音相碰。动词以 t / d 结尾就不用加：Prend-il … ?" },
    ],
    write: { prompt: "你在店里给家人挑礼物。写一段和店员的对话：问对方推荐什么、在两样东西里问“哪一个”、问价格（4 句，至少用一个倒装问句和一个 lequel / laquelle）。", model: "Bonjour, pouvez-vous m'aider ? Je cherche un cadeau pour ma mère. J'hésite entre ces deux bougies : laquelle sent le mieux ? Combien coûte-t-elle ?" },
  },
  {
    id: "a2-14", emoji: "🙋", title: "是我！", sub: "重读人称代词 · c'est … qui", can: "能说“是我的”“是他做的”“和你一起”，在对比和强调时用对代词", scene: null, grammar: ["g-tonique"],
    words: ["moi"],
    newWords: [
      ["le parapluie", "lə pa.ʁa.plɥi", "雨伞", "C'est ton parapluie ?", "这是你的伞吗？", "course"],
      ["les affaires (f.)", "le.z‿a.fɛʁ", "（个人的）东西、物品", "Range tes affaires !", "把你的东西收好！", "course"],
      ["oublier", "u.bli.je", "忘记；落下", "J'ai oublié mon téléphone.", "我把手机忘了。", "course"],
      ["le biscuit", "lə bis.kɥi", "饼干", "Tu veux un biscuit ?", "你要块饼干吗？", "course"],
      ["la boîte", "la bwat", "盒子", "La boîte est vide.", "盒子空了。", "course"],
      ["le · la stagiaire", "lə · la sta.ʒjɛʁ", "实习生", "Les stagiaires arrivent lundi.", "实习生周一来。", "course"],
      ["la fête", "la fɛt", "聚会；节日", "Je fais une fête chez moi.", "我在家办个聚会。", "course"],
      ["apporter", "a.pɔʁ.te", "带来", "J'apporte une bouteille de vin.", "我带一瓶葡萄酒来。", "course"],
      ["avec plaisir", "a.vɛk plɛ.ziʁ", "很乐意", "— Tu viens ? — Avec plaisir !", "——你来吗？——很乐意！", "course"],
    ],
    dialogue: [
      ["Sophie", "Ce parapluie, c'est à qui ? À toi ?", "这把伞是谁的？你的吗？"],
      ["我", "Non, ce n'est pas à moi. Je crois qu'il est à Marc. Lui, il oublie toujours ses affaires.", "不是，不是我的。我想是马克的。他呀，总是落东西。"],
      ["Sophie", "Ah oui, c'est sûrement à lui. Et qui a mangé mes biscuits ? C'est toi ?", "哦对，肯定是他的。那谁吃了我的饼干？是你吗？"],
      ["我", "Moi ? Non ! Ce sont les stagiaires. Ce sont eux qui ont fini la boîte hier.", "我？没有！是实习生。是他们昨天把一盒都吃完了。"],
      ["Sophie", "Eux ? Incroyable ! Bon, samedi, je fais une petite fête chez moi. Tu viens avec nous ?", "他们？真不敢相信！好吧，周六我在家办个小聚会。你跟我们一起吗？"],
      ["我", "Avec plaisir ! Je peux venir avec ma copine ? Elle, elle adore les fêtes.", "很乐意！我能带女朋友去吗？她可喜欢聚会了。"],
      ["Sophie", "Bien sûr, elle peut venir avec toi. C'est moi qui fais le dîner.", "当然，她可以跟你一起来。晚饭是我来做。"],
      ["我", "Super ! Alors c'est nous qui apportons le dessert.", "太好了！那甜点由我们带。"],
    ],
    sentences: [
      ["Ce n'est pas à moi.", "这不是我的。"],
      ["C'est moi qui fais le dîner.", "晚饭是我来做。"],
      ["Ce sont eux qui ont fini la boîte.", "是他们把一盒吃完了。"],
      ["Tu viens avec nous ?", "你跟我们一起来吗？"],
      ["Elle peut venir avec toi.", "她可以跟你一起来。"],
    ],
    cloze: [
      ["Tu viens au cinéma avec ___ ?", ["moi", "je", "me"], 0, "你跟我一起去看电影吗？", "介词 avec 后面要用重读代词 moi；je 只能做主语，me 是宾语代词，要放在动词前。"],
      ["C'est moi qui ___ le dîner ce soir.", ["fais", "fait", "font"], 0, "今晚是我做饭。", "c'est moi qui 后面的动词和 moi（= je）配合 → fais，不是第三人称 fait。"],
      ["— J'adore le café. — ___ aussi !", ["Moi", "Je", "Me"], 0, "——我超爱咖啡。——我也是！", "单独回答“我也是”用重读代词：Moi aussi。✗ Je aussi。"],
      ["Ces livres sont à Paul et Marc ? Oui, ils sont à ___.", ["eux", "ils", "leur"], 0, "这些书是保罗和马克的吗？对，是他们的。", "être à + 重读代词表示属于谁；ils 的重读形式是 eux。leur 是间接宾语代词。"],
      ["Marie ? Je vais au cinéma avec ___ ce soir.", ["elle", "lui", "la"], 0, "玛丽？我今晚和她去看电影。", "重读代词 lui 只指男性，女性用 elle。（间接宾语 lui 才是男女通用。）"],
    ],
    discover: [
      { q: "朋友说：“Je n'aime pas le fromage.” 你也不喜欢，你说？", opts: ["Moi non plus.", "Moi aussi.", "Moi pas aussi."], a: 0, why: "附和肯定句用 moi aussi，附和否定句要用 moi non plus（我也不）。" },
      { q: "C'est vous qui ___ raison.", opts: ["avez", "a", "ont"], a: 0, why: "c'est … qui 里，动词跟着前面的重读代词变：vous → avez。" },
    ],
    write: { prompt: "你们办公室要办聚会，写一段分工：谁做什么、谁和谁一起来（4 句，用上 c'est … qui、avec + 重读代词、moi / lui / eux 等）。", model: "C'est moi qui apporte les boissons. Léa, elle, fait un gâteau. Paul vient avec nous en voiture. Les stagiaires ? Ce sont eux qui choisissent la musique !" },
  },
  {
    id: "a2-15", emoji: "⏱️", title: "刚刚、正在", sub: "venir de · être en train de · être sur le point de", can: "能说明自己刚刚做了什么、正在做什么、马上要做什么", scene: null, grammar: ["g-recent"],
    words: ["venir"],
    newWords: [
      ["venir de", "və.niʁ də", "刚刚（+ 原形）", "Je viens de manger.", "我刚吃过饭。", "course"],
      ["être en train de", "ɛtʁ ɑ̃ tʁɛ̃ də", "正在（+ 原形）", "Je suis en train de cuisiner.", "我正在做饭。", "course"],
      ["être sur le point de", "ɛtʁ syʁ lə pwɛ̃ də", "马上就要（+ 原形）", "Le train est sur le point de partir.", "火车马上就要开了。", "course"],
      ["courir", "ku.ʁiʁ", "跑", "Je cours vers la gare.", "我往车站跑。", "course"],
      ["plaisanter", "plɛ.zɑ̃.te", "开玩笑", "Tu plaisantes ?", "你开玩笑吧？", "course"],
      ["le dossier", "lə do.sje", "文件；材料；（要处理的）事", "J'ai un dossier à finir.", "我有份材料要做完。", "course"],
      ["urgent · urgente", "yʁ.ʒɑ̃ · yʁ.ʒɑ̃t", "紧急的", "C'est urgent !", "这很急！", "course"],
      ["rappeler", "ʁa.ple", "回电话；再打电话", "Je te rappelle ce soir.", "我晚上给你回电话。", "course"],
      ["ça y est", "sa.j‿ɛ", "好了；成了；终于", "Ça y est, j'ai fini !", "好了，我做完了！", "course"],
    ],
    dialogue: [
      ["Léa", "Allô ? Tu es où ? Le film va commencer !", "喂？你在哪呢？电影要开始了！"],
      ["我", "Désolé, je viens de sortir du bureau. Je suis en train de courir vers le métro.", "抱歉，我刚从办公室出来。我正往地铁站跑呢。"],
      ["Léa", "Tu plaisantes ? Le film est sur le point de commencer !", "你开玩笑吧？电影马上就开始了！"],
      ["我", "Je sais, je sais. Mon chef vient de me donner un dossier urgent.", "我知道，我知道。老板刚塞给我一份急件。"],
      ["Léa", "Bon. Paul et Marie viennent d'arriver. Ils sont en train d'acheter du pop-corn.", "好吧。保罗和玛丽刚到，他们正在买爆米花。"],
      ["我", "Ah, le métro est sur le point de partir. Je te rappelle tout de suite !", "啊，地铁马上要开了。我马上给你回电话！"],
      ["Léa", "D'accord. Je t'attends devant l'entrée.", "好的。我在入口等你。"],
      ["我", "Ça y est, je suis là ! Je viens de descendre du métro.", "好了，我到了！我刚下地铁。"],
    ],
    sentences: [
      ["Je viens de sortir du bureau.", "我刚从办公室出来。"],
      ["Je suis en train de courir vers le métro.", "我正往地铁站跑。"],
      ["Le film est sur le point de commencer.", "电影马上就要开始了。"],
      ["Paul et Marie viennent d'arriver.", "保罗和玛丽刚到。"],
      ["Mon chef vient de me donner un dossier urgent.", "老板刚给了我一份急件。"],
    ],
    cloze: [
      ["Je ___ de finir mes devoirs.", ["viens", "vais", "suis"], 0, "我刚做完作业。", "“刚刚”= venir de + 原形；aller 后面不加 de，je suis de 不成立。"],
      ["Chut ! Le bébé est en train ___ dormir.", ["de", "à", "en"], 0, "嘘！宝宝正在睡觉。", "固定结构 être en train de + 原形。"],
      ["Ils viennent ___ arriver.", ["d'", "de", "à"], 0, "他们刚到。", "de 在元音开头的 arriver 前要省音成 d'。"],
      ["Dépêche-toi, le train est sur le ___ de partir !", ["point", "train", "moment"], 0, "快点，火车马上就要开了！", "“马上就要”是 être sur le point de；être en train de 是“正在”。"],
      ["— Tu veux manger avec nous ? — Non merci, je ___ manger.", ["viens de", "vais", "suis en train de"], 0, "——要和我们一起吃饭吗？——不了谢谢，我刚吃过。", "拒绝的理由是“刚吃过”→ venir de。je vais manger（我要去吃）和 je suis en train de manger（我正在吃）都说不通。"],
    ],
    discover: [
      { q: "“Il vient de Lyon.” 和 “Il vient de partir.” 里的 venir de 意思一样吗？", opts: ["不一样：前者是“来自里昂”，后者是“刚刚出发”", "一样，都是“来自”", "一样，都是“刚刚”"], a: 0, why: "venir de + 地点 = 来自；venir de + 动词原形 = 刚刚做了。看后面接的是名词还是动词。" },
      { q: "“我刚到”怎么说？", opts: ["Je viens d'arriver.", "Je suis venu arriver.", "Je viens arriver."], a: 0, why: "venir 用现在时 + de + 原形，意思却是过去：je viens d'arriver。少了 de 意思就变成“我来是为了到达”。" },
    ],
    write: { prompt: "朋友打电话问你在干什么。告诉他你刚做完什么、正在做什么、马上要做什么（3 句，三个结构各用一次）。", model: "Je viens de rentrer du travail. Je suis en train de préparer le dîner. Je suis sur le point de manger, je te rappelle après !" },
  },
  {
    id: "a2-16", emoji: "🧳", title: "旅行预订", sub: "depuis / il y a / pendant / dans / en", can: "能打电话订酒店，说清楚住多久、什么时候到、路上要多久", scene: null, grammar: ["g-duree"],
    words: ["l'hôtel (m.)", "la chambre", "la nuit"],
    newWords: [
      ["réserver", "ʁe.zɛʁ.ve", "预订", "Je voudrais réserver une chambre.", "我想订一间房。", "course"],
      ["la chambre double", "la ʃɑ̃bʁ dubl", "双人房", "Une chambre double pour deux nuits.", "一间双人房，住两晚。", "course"],
      ["à partir de", "a paʁ.tiʁ də", "从……起", "À partir du 12 août.", "从 8 月 12 日起。", "course"],
      ["le trajet", "lə tʁa.ʒɛ", "路程；行程", "Le trajet dure deux heures.", "路上要两个小时。", "course"],
      ["depuis", "də.pɥi", "自从；已经……（至今）", "J'habite ici depuis cinq ans.", "我在这里住了五年了。", "course"],
      ["pendant", "pɑ̃.dɑ̃", "在……期间；持续", "J'ai dormi pendant tout le voyage.", "我一路都在睡觉。", "course"],
      ["annuler", "a.ny.le", "取消", "Je dois annuler ma réservation.", "我得取消预订。", "course"],
      ["la confirmation", "la kɔ̃.fiʁ.ma.sjɔ̃", "确认（函）", "Vous allez recevoir une confirmation.", "您会收到一封确认函。", "course"],
      ["gratuitement", "ɡʁa.tɥit.mɑ̃", "免费地", "Vous pouvez annuler gratuitement.", "您可以免费取消。", "course"],
    ],
    dialogue: [
      ["前台", "Hôtel du Lac, bonjour !", "湖畔酒店，您好！"],
      ["我", "Bonjour, je voudrais réserver une chambre double pour trois nuits, à partir du 12 août.", "您好，我想订一间双人房，住三晚，从 8 月 12 日开始。"],
      ["前台", "Un instant… Oui, c'est possible. Vous arrivez à quelle heure ?", "请稍等……可以。您几点到？"],
      ["我", "Mon train part de Paris à neuf heures et il fait le trajet en trois heures. Donc vers midi.", "我的火车九点从巴黎出发，三个小时到。所以大概中午。"],
      ["前台", "Parfait. Vous connaissez déjà la région ?", "好的。您之前来过这一带吗？"],
      ["我", "Oui, je suis venu il y a deux ans, pendant les vacances. Depuis, je rêve de revenir !", "来过，两年前放假时来的。从那以后我就一直想再来！"],
      ["前台", "Très bien. Je vous envoie la confirmation par e-mail dans quelques minutes.", "好的。几分钟后我把确认函发到您的邮箱。"],
      ["我", "Merci. Et est-ce que je peux annuler ?", "谢谢。那我可以取消吗？"],
      ["前台", "Oui, gratuitement, jusqu'à quarante-huit heures avant votre arrivée.", "可以，入住前四十八小时都可以免费取消。"],
    ],
    sentences: [
      ["J'habite à Paris depuis cinq ans.", "我在巴黎住了五年了。"],
      ["Je suis venu il y a deux ans.", "我两年前来过。"],
      ["Le train fait le trajet en trois heures.", "火车三个小时跑完全程。"],
      ["Je vous envoie la confirmation dans quelques minutes.", "几分钟后我把确认函发给您。"],
      ["Je voudrais réserver une chambre double pour trois nuits.", "我想订一间双人房，住三晚。"],
    ],
    cloze: [
      ["J'apprends le français ___ deux ans.", ["depuis", "il y a", "pendant"], 0, "我学法语已经两年了。", "动作从过去开始、现在还在继续（apprends 是现在时）→ depuis。"],
      ["Je suis arrivé en France ___ trois mois.", ["il y a", "depuis", "dans"], 0, "我三个月前到的法国。", "已经结束的一次性动作 +“……以前”→ il y a + 复合过去时。"],
      ["Le train part ___ dix minutes, dépêche-toi !", ["dans", "en", "après"], 0, "火车十分钟后开，快点！", "从现在算起“……以后”用 dans。après dix minutes 是中式说法。"],
      ["J'ai lu ce roman ___ deux jours : il était passionnant !", ["en", "dans", "depuis"], 0, "这本小说我两天就读完了：太精彩了！", "“用了多长时间完成”用 en。"],
      ["Hier, nous avons marché ___ quatre heures.", ["pendant", "depuis", "dans"], 0, "昨天我们走了四个小时。", "过去一段已结束的持续时间 → pendant。depuis 要配现在时、表示“至今”。"],
    ],
    discover: [
      { q: "“我在上海住了五年了（现在还住在那）”怎么说？", opts: ["J'habite à Shanghai depuis cinq ans.", "J'ai habité à Shanghai depuis cinq ans.", "J'habite à Shanghai il y a cinq ans."], a: 0, why: "还在继续的事用 depuis + 现在时。中文的“了”很容易让人想用复合过去时，但法语看的是“现在还是不是这样”。" },
      { q: "“dans deux heures” 和 “en deux heures” 有什么区别？", opts: ["dans = 两小时以后；en = 用两小时完成", "没有区别", "dans = 两小时以内；en = 两小时以后"], a: 0, why: "Je pars dans deux heures（我两小时后出发）；J'ai fini en deux heures（我两小时就做完了）。" },
    ],
    write: { prompt: "给酒店写一段话：你想订什么房间、住几晚、从哪天开始、几点到、路上要多久（3–4 句，至少用 3 个本课的时间词）。", model: "Je voudrais réserver une chambre double pour deux nuits, à partir du 3 mai. Mon avion arrive à Nice à dix heures. Le trajet jusqu'à l'hôtel se fait en trente minutes. J'arriverai dans la matinée." },
  },
  {
    id: "a2-17", emoji: "⏰", title: "昨天我很早起床", sub: "代词式动词的复合过去时", can: "能讲昨天早上或昨晚发生的事：几点起床、睡着、和谁吵架", scene: null, grammar: ["g-pc-pron"],
    words: [],
    newWords: [
      ["se réveiller", "sə ʁe.ve.je", "醒来", "Je me suis réveillé à six heures.", "我六点醒的。", "course"],
      ["s'endormir", "sɑ̃.dɔʁ.miʁ", "睡着", "Elle s'est endormie devant la télé.", "她在电视机前睡着了。", "course"],
      ["se rendormir", "sə ʁɑ̃.dɔʁ.miʁ", "再睡着；睡回笼觉", "Je ne me suis pas rendormi.", "我没能再睡着。", "course"],
      ["le voisin · la voisine", "lə vwa.zɛ̃ · la vwa.zin", "邻居", "Notre voisine est très gentille.", "我们的女邻居人很好。", "course"],
      ["faire la fête", "fɛʁ la fɛt", "开派对；狂欢", "Ils ont fait la fête toute la nuit.", "他们闹了一整夜。", "course"],
      ["se disputer", "sə dis.py.te", "吵架", "Ils se sont disputés hier.", "他们昨天吵架了。", "course"],
      ["s'excuser", "sɛks.ky.ze", "道歉", "Il s'est excusé.", "他道歉了。", "course"],
      ["au contraire", "o kɔ̃.tʁɛʁ", "恰恰相反", "Je ne suis pas triste, au contraire !", "我不难过，正相反！", "course"],
      ["avoir l'air", "a.vwaʁ lɛʁ", "看起来（+ 形容词）", "Tu as l'air fatigué.", "你看起来很累。", "course"],
    ],
    dialogue: [
      ["Marc", "Tu as l'air fatigué ! Tu t'es couché tard ?", "你看起来很累！昨晚睡得晚？"],
      ["我", "Non, au contraire, je me suis couché à dix heures. Mais je me suis réveillé à quatre heures du matin.", "没有，正相反，我十点就睡了。可是凌晨四点就醒了。"],
      ["Marc", "Pourquoi ?", "为什么？"],
      ["我", "Mon voisin a fait la fête toute la nuit ! Après, je ne me suis pas rendormi.", "我邻居开了一整夜派对！之后我就再也没睡着。"],
      ["Marc", "Oh là là ! Et ta femme, elle a bien dormi ?", "天哪！那你太太睡得好吗？"],
      ["我", "Non. Elle s'est levée, elle s'est habillée et elle est allée parler au voisin.", "没有。她起来穿好衣服，去找邻居谈了。"],
      ["Marc", "Et alors, ça s'est bien passé ?", "然后呢，谈得顺利吗？"],
      ["我", "Pas vraiment : ils se sont disputés, puis ils se sont excusés… Et à six heures, tout le monde s'est enfin endormi !", "不太顺利：他们吵了一架，然后又互相道歉……到六点，大家终于都睡着了！"],
      ["Marc", "Quelle nuit ! Ce soir, il faut te coucher tôt.", "这一夜！今晚你得早点睡。"],
    ],
    sentences: [
      ["Je me suis couché à dix heures.", "我十点睡的。"],
      ["Elle s'est levée et elle s'est habillée.", "她起床穿好了衣服。"],
      ["Je ne me suis pas rendormi.", "我没能再睡着。"],
      ["Ils se sont disputés, puis ils se sont excusés.", "他们吵了一架，然后又道了歉。"],
      ["Tu t'es couché tard ?", "你昨晚睡得晚吗？"],
    ],
    cloze: [
      ["Hier, je ___ levé à six heures.", ["me suis", "m'ai", "suis"], 0, "昨天我六点起床。", "代词式动词的复合过去时一律用 être，而且自反代词 me 不能丢。"],
      ["Ma sœur s'est ___ très tard.", ["couchée", "couché", "couchés"], 0, "我姐姐睡得很晚。", "用 être 的过去分词和主语配合：ma sœur 是阴性单数 → couchée。"],
      ["Je ___ suis pas réveillé à l'heure.", ["ne me", "me ne", "ne"], 0, "我没按时醒来。", "否定时 ne 放在自反代词前面：je ne me suis pas …。"],
      ["Vous vous êtes bien ___, madame ?", ["reposée", "reposé", "reposer"], 0, "女士，您休息得好吗？", "这里的 vous 指一位女士（单数阴性）→ reposée。"],
      ["Elles se sont ___ hier soir.", ["téléphoné", "téléphonées", "téléphonés"], 0, "她们昨晚通了电话。", "téléphoner à qqn：se 是间接宾语，过去分词不配合。这是“和主语配合”这条规则的例外。"],
    ],
    discover: [
      { q: "Elle s'est levée —— 为什么 levée 比 levé 多一个 e？", opts: ["代词式动词用 être，过去分词和主语 elle 配合", "因为 lever 是阴性动词", "因为句子是疑问句"], a: 0, why: "用 être 做助动词时，过去分词要跟主语配合性数：il s'est levé / elle s'est levée / ils se sont levés。" },
      { q: "“昨天我很早起床”怎么说？", opts: ["Hier, je me suis levé tôt.", "Hier, je m'ai levé tôt.", "Hier, je suis levé tôt."], a: 0, why: "代词式动词 → être，代词不能省：je me suis levé。" },
    ],
    write: { prompt: "讲讲你昨天的早上：几点醒、几点起床、做了什么（4 句，至少 3 个代词式动词的复合过去时；女生注意配合）。", model: "Hier, je me suis réveillée à six heures. Je me suis levée tout de suite et je me suis douchée. Je me suis dépêchée, mais j'ai raté le bus. Le soir, je me suis couchée très tôt !" },
  },
  {
    id: "a2-18", emoji: "💡", title: "你应该……", sub: "条件式现在时", can: "能礼貌地请求别人帮忙、给朋友提建议、说出自己的愿望", scene: null, grammar: ["g-cond"],
    words: [],
    newWords: [
      ["progresser", "pʁɔ.ɡʁɛ.se", "进步", "Tu progresses vite !", "你进步很快！", "course"],
      ["à ta place", "a ta plas", "如果我是你", "À ta place, je dormirais.", "要是我是你，我就去睡觉。", "course"],
      ["la série", "la se.ʁi", "电视剧", "Je regarde une série française.", "我在看一部法剧。", "course"],
      ["les sous-titres (m.)", "le su.titʁ", "字幕", "Tu regardes avec les sous-titres ?", "你看的时候开字幕吗？", "course"],
      ["le · la partenaire", "lə · la paʁ.tə.nɛʁ", "伙伴；搭档", "Je cherche un partenaire de conversation.", "我在找语伴。", "course"],
      ["génial · géniale", "ʒe.njal", "太棒了；绝妙的", "C'est génial !", "太棒了！", "course"],
      ["tu devrais", "ty də.vʁɛ", "你应该（devoir 的条件式）", "Tu devrais te reposer.", "你应该休息一下。", "course"],
      ["j'aimerais", "ʒɛm.ʁɛ", "我很想（aimer 的条件式）", "J'aimerais voyager au Japon.", "我很想去日本旅行。", "course"],
      ["pourriez-vous", "pu.ʁje vu", "您能……吗（礼貌）", "Pourriez-vous m'aider ?", "您能帮帮我吗？", "course"],
    ],
    dialogue: [
      ["Léa", "Alors, tes cours de français, ça se passe bien ?", "你的法语课怎么样了？"],
      ["我", "Pas trop. J'ai l'impression de ne plus progresser. Qu'est-ce que tu ferais à ma place ?", "不太好。我感觉自己不再进步了。要是你是我，你会怎么做？"],
      ["Léa", "À ta place, je regarderais des séries françaises tous les soirs.", "要是我是你，我每天晚上都会看法剧。"],
      ["我", "J'aimerais bien, mais je ne comprends presque rien !", "我也很想，可我几乎什么都听不懂！"],
      ["Léa", "Tu devrais commencer avec les sous-titres. Et tu pourrais aussi trouver un partenaire de conversation.", "你应该先开着字幕看。你还可以找个语伴。"],
      ["我", "Bonne idée. Tu connaîtrais quelqu'un ?", "好主意。你认识合适的人吗？"],
      ["Léa", "Mon frère voudrait apprendre le chinois. Ce serait parfait pour vous deux !", "我哥哥想学中文。这对你们俩再合适不过了！"],
      ["我", "Génial ! Tu pourrais me donner son numéro ?", "太好了！你能把他的电话给我吗？"],
      ["Léa", "Bien sûr. Mais il faudrait lui écrire en français, hein !", "当然。不过你得用法语给他发消息哦！"],
    ],
    sentences: [
      ["Qu'est-ce que tu ferais à ma place ?", "要是你是我，你会怎么做？"],
      ["Tu devrais commencer avec les sous-titres.", "你应该先开着字幕看。"],
      ["J'aimerais bien voyager en France.", "我很想去法国旅行。"],
      ["Pourriez-vous parler plus lentement, s'il vous plaît ?", "您能说慢一点吗？"],
      ["Ce serait parfait pour vous deux !", "这对你们俩再合适不过了！"],
    ],
    cloze: [
      ["À ta place, je ___ un taxi.", ["prendrais", "prendrai", "prenais"], 0, "要是我是你，我会打车。", "à ta place 后面用条件式：词根 prendr- + -ais。prendrai 是将来时，prenais 是未完成过去时。"],
      ["___-vous m'aider, s'il vous plaît ?", ["Pourriez", "Pouvriez", "Pourrez"], 0, "您能帮我一下吗？", "pouvoir 的条件式词根是 pourr-（两个 r）+ -iez；pourrez 是将来时。"],
      ["Tu ___ dormir plus, tu as l'air fatigué.", ["devrais", "dois", "devras"], 0, "你应该多睡点，你看起来很累。", "给建议用条件式 tu devrais，语气委婉；tu dois 像命令，tu devras 是将来时。"],
      ["Nous ___ visiter le Japon un jour.", ["aimerions", "aimerons", "aimions"], 0, "我们很想有一天去日本看看。", "表达愿望用条件式 aimerions（-ions）；aimerons 是将来时，aimions 是未完成过去时。"],
      ["Excusez-moi, vous ___ un stylo, s'il vous plaît ?", ["auriez", "aviez", "aurez"], 0, "打扰一下，您有笔吗？", "礼貌地借东西用条件式 auriez（avoir → aur-）。aviez 是“您那时有”，aurez 是“您将会有”。"],
    ],
    discover: [
      { q: "je parlerai 和 je parlerais 有什么区别？", opts: ["前者是将来时“我将说”，后者是条件式“我会/想说”", "没有区别，只是拼写不同", "前者是条件式，后者是将来时"], a: 0, why: "将来时 -ai 读 [e]，条件式 -ais 读 [ɛ]，意思也不同。条件式 = 将来时词根 + 未完成过去时词尾。" },
      { q: "pouvoir 的条件式是 je pourrais。它的词根从哪来？", opts: ["和简单将来时的词根一样（pourr-）", "和未完成过去时的词根一样（pouv-）", "和现在时一样（peu-）"], a: 0, why: "条件式和将来时共用词根：je pourrai → je pourrais，je serai → je serais，j'irai → j'irais。" },
    ],
    write: { prompt: "朋友说：“我想学好法语，可是没时间。”给他 3 条建议，再说一个你自己的愿望（4 句，用 tu devrais / tu pourrais / à ta place / j'aimerais）。", model: "Tu devrais écouter des podcasts dans le métro. Tu pourrais aussi regarder une série le soir. À ta place, je parlerais français avec des collègues. Moi, j'aimerais bien vivre un an à Paris !" },
  },
  {
    id: "a2-19", emoji: "💼", title: "找工作", sub: "主有代词 le mien, la tienne…", can: "能和朋友聊找工作、比较简历，用主有代词避免重复", scene: null, grammar: ["g-possessif"],
    words: ["le travail"],
    newWords: [
      ["le CV", "lə se.ve", "简历", "J'ai envoyé mon CV.", "我把简历发出去了。", "course"],
      ["l'entreprise (f.)", "lɑ̃.tʁə.pʁiz", "公司；企业", "Elle travaille dans une grande entreprise.", "她在一家大公司工作。", "course"],
      ["l'entretien (m.)", "lɑ̃.tʁə.tjɛ̃", "面试", "J'ai un entretien demain.", "我明天有个面试。", "course"],
      ["la lettre de motivation", "la lɛtʁ də mɔ.ti.va.sjɔ̃", "求职信", "Ta lettre de motivation est trop longue.", "你的求职信太长了。", "course"],
      ["le poste", "lə pɔst", "职位；岗位", "Il cherche un poste d'ingénieur.", "他在找工程师的职位。", "course"],
      ["le recruteur · la recruteuse", "lə ʁə.kʁy.tœʁ · la ʁə.kʁy.tøz", "招聘人员", "Le recruteur m'a appelé.", "招聘的人给我打电话了。", "course"],
      ["la recherche d'emploi", "la ʁə.ʃɛʁʃ dɑ̃.plwa", "找工作；求职", "Ma recherche d'emploi avance.", "我找工作有进展了。", "course"],
      ["le mien · la mienne", "lə mjɛ̃ · la mjɛn", "我的（那个）", "Ce n'est pas ton stylo, c'est le mien.", "这不是你的笔，是我的。", "course"],
      ["le tien · la tienne", "lə tjɛ̃ · la tjɛn", "你的（那个）", "Ma voiture est rouge. Et la tienne ?", "我的车是红色的。你的呢？", "course"],
    ],
    dialogue: [
      ["Julie", "Alors, ta recherche d'emploi, ça avance ?", "你找工作有进展吗？"],
      ["我", "Pas vraiment. J'ai envoyé mon CV à dix entreprises, mais personne ne m'a répondu. Et la tienne ?", "不太顺。我把简历投了十家公司，可没有一家回复。你的呢？"],
      ["Julie", "La mienne avance bien : j'ai un entretien demain pour un poste de graphiste ! Tu peux regarder mon CV ?", "我的挺顺：明天有个平面设计师职位的面试！你能帮我看看简历吗？"],
      ["我", "Montre… Le tien fait trois pages ! Le mien ne fait qu'une page. Les recruteurs n'ont pas le temps de tout lire.", "给我看看……你的有三页！我的只有一页。招聘的人可没时间全看完。"],
      ["Julie", "Tu as raison. Et ta lettre de motivation, je peux la voir ? Les miennes sont toujours trop formelles.", "你说得对。那你的求职信我能看看吗？我写的总是太死板。"],
      ["我", "Bien sûr, mais la mienne n'est pas parfaite non plus !", "当然，不过我的也不完美！"],
      ["Julie", "Tu sais, mon frère et sa copine cherchent aussi un poste. Leurs CV sont très bien faits.", "你知道吗，我哥哥和他女朋友也在找工作。他们的简历做得特别好。"],
      ["我", "Ah oui ? Tu pourrais me montrer les leurs ?", "是吗？你能给我看看他们的吗？"],
      ["Julie", "Je vais leur demander. Ils seront contents de t'aider !", "我去问问他们。他们会很乐意帮你的！"],
    ],
    sentences: [
      ["J'ai envoyé mon CV à dix entreprises.", "我把简历投了十家公司。"],
      ["Le tien fait trois pages, le mien ne fait qu'une page.", "你的有三页，我的只有一页。"],
      ["J'ai un entretien demain pour un poste de graphiste.", "我明天有个平面设计师职位的面试。"],
      ["La mienne n'est pas parfaite non plus.", "我的也不完美。"],
      ["Tu pourrais me montrer les leurs ?", "你能给我看看他们的吗？"],
    ],
    cloze: [
      ["Ce n'est pas mon stylo, c'est ___.", ["le tien", "la tienne", "ton"], 0, "这不是我的笔，是你的。", "stylo 是阳性单数 → le tien。ton 是形容词，后面必须跟名词。"],
      ["Paul a pris ma voiture parce que ___ est en panne.", ["la sienne", "le sien", "sa"], 0, "保罗开走了我的车，因为他的坏了。", "性数看被拥有的东西：voiture 是阴性 → la sienne。Paul 是男的不影响。"],
      ["Nos enfants jouent souvent avec ___.", ["les leurs", "les leur", "leurs"], 0, "我们的孩子常和他们的孩子一起玩。", "代替 leurs enfants（复数）→ les leurs，要加 s，也要有冠词。"],
      ["Votre maison est plus grande que ___.", ["la nôtre", "la notre", "notre"], 0, "你们的房子比我们的大。", "主有代词 la nôtre 有 ^，读长音 [o]；notre（没有 ^）是形容词。"],
      ["Mes parents habitent à Lyon. Et ___ ?", ["les tiens", "les tiennes", "tes"], 0, "我父母住在里昂。你父母呢？", "代替 tes parents（阳性复数）→ les tiens。"],
    ],
    discover: [
      { q: "Marie a perdu son sac. → Elle a perdu ___.", opts: ["le sien", "la sienne"], a: 0, why: "主有代词的性数跟着 sac（阳性）走，和主人 Marie 是女的没关系，和 son / sa 的规则一样。" },
      { q: "notre 和 le nôtre 读音一样吗？", opts: ["不一样：notre 读短 o [ɔ]，le nôtre 读长 o [o]", "完全一样"], a: 0, why: "o 上面的 ^ 往往表示读长而闭的 [o]：notre [nɔtʁ] / le nôtre [lə notʁ]，votre / le vôtre 也一样。" },
    ],
    write: { prompt: "和朋友比较你们的工作或简历：你的公司、职位、简历和他的有什么不同（4 句，至少用 3 个主有代词）。", model: "Mon entreprise est petite, mais la tienne est très grande. Mon CV fait une page, le tien en fait deux. Mes collègues sont jeunes. Et les tiens ?" },
  },
  {
    id: "a2-20", emoji: "✉️", title: "写一封邮件", sub: "tout / toute / tous / toutes · 书信格式", can: "能写一封格式正确的正式邮件，咨询信息并礼貌地提出请求", scene: null, grammar: ["g-tout"],
    words: [],
    newWords: [
      ["l'objet (m.)", "lɔb.ʒɛ", "（邮件）主题；物品", "Objet : demande d'informations", "主题：咨询", "course"],
      ["Madame, Monsieur", "ma.dam mə.sjø", "女士、先生（正式信件的称呼）", "Madame, Monsieur, je vous écris pour…", "女士、先生：我写信是为了……", "course"],
      ["cordialement", "kɔʁ.djal.mɑ̃", "此致（正式邮件落款）", "Cordialement, Lin Wei", "此致，林伟", "course"],
      ["bien à vous", "bjɛ̃.n‿a vu", "祝好（稍亲切的落款）", "Bien à vous, Marie", "祝好，玛丽", "course"],
      ["suivre un cours", "sɥivʁ œ̃ kuʁ", "上课；修一门课", "Je suis un cours de cuisine.", "我在上烹饪课。", "course"],
      ["intensif · intensive", "ɛ̃.tɑ̃.sif · ɛ̃.tɑ̃.siv", "强化的；密集的", "C'est un cours intensif.", "这是一门强化课程。", "course"],
      ["l'horaire (m.)", "lɔ.ʁɛʁ", "时间表；时刻", "Quels sont les horaires ?", "时间安排是怎样的？", "course"],
      ["l'hébergement (m.)", "le.bɛʁ.ʒə.mɑ̃", "住宿", "L'hébergement est compris.", "包含住宿。", "course"],
      ["par avance", "paʁ a.vɑ̃s", "预先；提前", "Merci par avance.", "提前谢谢。", "course"],
    ],
    dialogue: [
      ["", "Objet : Demande d'informations – cours d'été", "主题：咨询——暑期课程"],
      ["", "Madame, Monsieur,", "女士、先生："],
      ["", "Je m'appelle Lin Wei. Je suis ingénieur et j'apprends le français depuis deux ans.", "我叫林伟，是一名工程师，学法语已经两年了。"],
      ["", "J'aimerais suivre un cours intensif dans votre école pendant tout le mois de juillet.", "我希望整个七月在贵校上强化课程。"],
      ["", "Pourriez-vous m'indiquer tous les horaires et toutes les options d'hébergement ?", "能否告知所有的课程时间和全部住宿选择？"],
      ["", "Est-ce que les cours ont lieu tous les jours, du lundi au vendredi ?", "课程是每天都有吗，从周一到周五？"],
      ["", "Une amie a suivi tous vos cours l'année dernière, et elle a tout aimé !", "我的一位朋友去年上了你们所有的课，她什么都很喜欢！"],
      ["", "Je vous remercie par avance de votre réponse.", "提前感谢您的回复。"],
      ["", "Cordialement, Lin Wei", "此致，林伟"],
    ],
    sentences: [
      ["J'aimerais suivre un cours intensif pendant tout le mois de juillet.", "我希望整个七月上强化课程。"],
      ["Pourriez-vous m'indiquer tous les horaires ?", "能否告知所有的时间安排？"],
      ["Les cours ont lieu tous les jours.", "每天都有课。"],
      ["Elle a tout aimé !", "她什么都喜欢！"],
      ["Je vous remercie par avance de votre réponse.", "提前感谢您的回复。"],
    ],
    cloze: [
      ["Hier, j'ai travaillé ___ la journée.", ["toute", "tout", "tous"], 0, "昨天我工作了一整天。", "journée 是阴性单数 → toute la journée（一整天）。"],
      ["Il va à la salle de sport ___ les jours.", ["tous", "tout", "toutes"], 0, "他每天都去健身房。", "jours 是阳性复数 → tous les jours（每天）。"],
      ["Tout le monde ___ arrivé ?", ["est", "sont", "ont"], 0, "大家都到了吗？", "tout le monde 虽然指很多人，语法上是单数，动词用 est。"],
      ["Merci, j'ai ___ compris !", ["tout", "tous", "toute"], 0, "谢谢，我全懂了！", "代词 tout = 一切，不变化，放在助动词和过去分词之间。"],
      ["Dans un e-mail formel à une personne inconnue, on termine par : « ___ »", ["Cordialement", "Bises", "Salut"], 0, "给不认识的人写正式邮件，结尾写：“此致”", "Cordialement 是最通用的正式落款；Bises、Salut 只用于朋友之间。"],
    ],
    discover: [
      { q: "“Ils sont tous venus.” 这里的 tous 怎么读？", opts: ["[tus]，s 要读出来（代词）", "[tu]，s 不读"], a: 0, why: "tous 作代词（大家都）时读 [tus]；作形容词放在名词前（tous les jours）时读 [tu]。" },
      { q: "给不认识的学校负责人写正式邮件，第一行称呼写？", opts: ["Madame, Monsieur,", "Cher ami,", "Salut,"], a: 0, why: "不知道收件人是谁时用 Madame, Monsieur,；知道名字可以写 Madame Dupont,；Cher / Chère 和 Salut 用于熟人。" },
    ],
    write: { prompt: "给一家酒店写一封正式邮件：说明你要订几晚、问所有房型的价格、问早餐是不是每天都有，并用正确的称呼和落款（5–6 句）。", model: "Objet : Réservation pour le mois de mai. Madame, Monsieur, je souhaiterais réserver une chambre pour trois nuits, à partir du 10 mai. Pourriez-vous m'indiquer les prix de toutes vos chambres ? Est-ce que le petit-déjeuner est servi tous les jours ? Je vous remercie par avance. Bien à vous, Lin Wei" },
  },
];
