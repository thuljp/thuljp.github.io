// 法语核心课程 B2（下）：b2-09 … b2-16
// 推测、口语、论证、假设、习语、无人称结构、职场委婉、议论文综合

export const grammar = [
  {
    id: 'g-modal-nuance', title: 'devoir / pouvoir 的推测义与“推测条件式”',
    body: `<p>中文的“一定是”“应该”“可能”“据说”在法语里主要靠三套工具表达：<b>devoir</b>（大概率推测）、<b>pouvoir / il se peut que</b>（可能性）、<b>条件式</b>（未经证实的消息）。难点在于：devoir、pouvoir 本来表示“义务 / 能力”，同一个形式也能表示“推测”，要靠时态和上下文区分。</p>
<p><b>一、devoir 表推测：“一定是 / 想必”</b></p>
<table><tr><th>形式</th><th>推测什么</th><th>例句</th></tr>
<tr><td>devoir 现在时 + 原形</td><td>现在的状态</td><td>Il doit être malade. 他一定是病了。</td></tr>
<tr><td>devoir 复合过去时 + 原形</td><td>过去已完成的动作</td><td>Il a dû oublier. 他一定是忘了。</td></tr>
<tr><td>devoir 现在时 + 不定式过去式</td><td>同上，更书面</td><td>Il doit avoir oublié. 他想必是忘了。</td></tr>
<tr><td>devoir 未完成过去时 + 原形</td><td>过去的状态、背景</td><td>Il devait être minuit. 当时大概已经半夜了。</td></tr>
<tr><td>devoir 条件式 + 原形</td><td>照理、按计划应该</td><td>Il devrait arriver vers midi. 他照理中午前后到。</td></tr></table>
<p>注意 <b>il a dû</b> 有两个意思：“他不得不”（义务）和“他一定是”（推测）。Il a dû partir tôt 既可以是“他不得不早走”，也可以是“他一定是早走了”，只能靠上下文判断。</p>
<p><b>二、doit / devrait / aurait dû：中文都可能说成“应该”</b></p>
<ul><li><b>Il doit être arrivé.</b> 他一定已经到了（我几乎肯定）。</li>
<li><b>Il devrait être arrivé.</b> 按说他该到了（照计划如此，但我没把握，甚至有点担心）。</li>
<li><b>Il aurait dû arriver.</b> 他本该到了（事实上没到）——条件式过去时，表示责备或遗憾，<b>不是推测</b>。</li></ul>
<p><b>三、pouvoir 与 il se peut que：“可能”</b></p>
<ul><li>Il peut avoir raison. 他可能是对的。/ Il a pu se tromper. 他可能弄错了（过去）。</li>
<li><b>il se peut que + 虚拟式</b>（= il est possible que）：Il se peut qu'il soit malade. 他有可能病了。说过去用虚拟式过去时：Il se peut qu'il ait oublié.</li>
<li><b>peut-être</b> 一般放在动词后：Il a peut-être oublié。放句首时要倒装（书面）或加 que（口语）：Peut-être a-t-il oublié. / Peut-être qu'il a oublié.</li></ul>
<p><b>四、把握程度与语式</b></p>
<table><tr><th>把握</th><th>表达</th><th>从句语式</th></tr>
<tr><td>几乎肯定</td><td>sans aucun doute, il est certain que, il est évident que</td><td>直陈式</td></tr>
<tr><td>很可能</td><td>il doit…, <b>il est probable que</b>, sans doute, vraisemblablement</td><td>直陈式</td></tr>
<tr><td>有可能</td><td>il peut…, <b>il se peut que</b>, il est possible que</td><td>虚拟式</td></tr>
<tr><td>不太可能</td><td>il est peu probable que, ça m'étonnerait que</td><td>虚拟式</td></tr></table>
<p><b>五、推测条件式：媒体和传闻里的“据说”</b></p>
<p>说话人不想为消息负责时，用条件式（现在时或过去时），常和 selon, d'après, à en croire 连用：<b>Selon la presse, le ministre serait sur le départ.</b>（据报道，部长即将离任。）<b>D'après des témoins, l'incendie aurait commencé vers 3 heures.</b>（据目击者称，火灾大约在 3 点开始。）新闻里极常见，读到时要理解为“据说”，而不是“会”或“本该”。</p>
<p><b>中国学习者常犯的错</b></p>
<ul><li>错：Il se peut qu'il <i>est</i> malade → 对：qu'il <b>soit</b> malade。</li>
<li>错：Il est probable qu'il <i>vienne</i> → 对：qu'il <b>viendra</b>（probable 表示把握大，接直陈式；peu probable 才接虚拟式）。</li>
<li><b>sans doute</b> 现在的意思是“大概、多半”，不是“毫无疑问”；要说“毫无疑问”用 <b>sans aucun doute</b>。</li>
<li>“他应该是忘了吧”不要说 il devrait oublier（= 他应该把它忘掉），要说 <b>il a dû oublier</b>。</li></ul>`,
    ex: [
      ["Il ne répond pas : il a dû laisser son portable chez lui.", '他不接电话：一定是把手机落在家里了。'],
      ["Il se peut qu'il y ait une grève demain.", '明天有可能会罢工。'],
      ["Le train devrait arriver d'ici dix minutes.", '火车照理十分钟内就到。'],
      ["Selon la police, le suspect aurait quitté le pays.", '据警方称，嫌疑人可能已经出境。'],
    ],
  },
  {
    id: 'g-oral', title: '口语法语：省略、简化与俚语',
    body: `<p>法国人日常说话和课本上的法语差别很大。B2 要能<b>听懂</b>真实口语，并知道哪些说法只能在熟人之间用。下面从“人人都这么说”到“很随便”排列。</p>
<p><b>一、语法上的简化（几乎所有法国人在日常对话里都这么说）</b></p>
<table><tr><th>现象</th><th>口语</th><th>书面 / 正式</th></tr>
<tr><td>省略否定词 ne</td><td>Je sais pas. C'est pas grave.</td><td>Je ne sais pas. Ce n'est pas grave.</td></tr>
<tr><td>on 代替 nous（动词用第三人称单数）</td><td>On y va ? On est contents.</td><td>Nous y allons ? Nous sommes contents.</td></tr>
<tr><td>ça 代替 cela / ceci</td><td>Ça me plaît.</td><td>Cela me plaît.</td></tr>
<tr><td>语调疑问、疑问词放句末</td><td>Tu viens ? Tu fais quoi ? C'est où ?</td><td>Viens-tu ? Que fais-tu ? Où est-ce ?</td></tr>
<tr><td>省掉无人称 il</td><td>Faut partir. Y a du monde.</td><td>Il faut partir. Il y a du monde.</td></tr>
<tr><td>吞音、缩读</td><td>t'es (tu es), t'as vu, j'suis（读作 /ʃɥi/）</td><td>tu es, as-tu vu, je suis</td></tr>
<tr><td>主语复指（把话题提到前面或后面）</td><td>Moi, je trouve ça nul. Il est sympa, ton frère.</td><td>Je trouve cela décevant. Ton frère est sympathique.</td></tr></table>
<p>on 指“我们”时，动词用单数，但形容词和过去分词通常按实际性数配合：On est contents. On est arrivés en retard.</p>
<p><b>二、日常口语词（熟人之间普遍使用，不粗俗）</b></p>
<p>bosser = travailler，le boulot = le travail，un truc = une chose，un pote = un ami，crevé = très fatigué，galérer = avoir du mal，avoir la flemme (de) = 懒得，du coup = donc（口头禅），ouais = oui，trop / grave = très（C'est trop bien ! J'ai grave faim.）。</p>
<p><b>三、verlan：把音节倒过来</b></p>
<p>verlan 这个词本身就是 l'envers（反面）的倒读。常见的有：</p>
<table><tr><th>verlan</th><th>原词</th><th>意思</th></tr>
<tr><td>ouf</td><td>fou</td><td>疯狂的；comme un ouf = 拼命地</td></tr>
<tr><td>relou</td><td>lourd</td><td>烦人的、讨厌的</td></tr>
<tr><td>chelou</td><td>louche</td><td>奇怪的、可疑的</td></tr>
<tr><td>vénère</td><td>énervé</td><td>生气的</td></tr>
<tr><td>meuf</td><td>femme</td><td>女的；女朋友</td></tr></table>
<p><b>四、语域分级</b></p>
<ul><li><b>familier（随意）</b>：省略 ne、on、bosser、crevé、du coup——朋友、同事之间完全正常。</li>
<li><b>très familier / argot（很随便、俚语）</b>：ouf, relou, chelou, meuf, kiffer——只对熟悉的同龄人用；对老师、上司、陌生人说会显得不得体。</li>
<li><b>vulgaire（粗俗）</b>：要听得懂，但外国人最好不要主动用。</li></ul>
<p><b>中国学习者常见问题</b></p>
<ul><li>把口语带进作文和邮件：书面一律写 ne，少用 ça 和 on，不用 du coup（改用 donc / par conséquent）。</li>
<li>反过来，日常对话里句句用 nous 和倒装疑问（Où allons-nous ?）会像在念课文。</li>
<li>du coup 表示结果（= donc），不等于“然后”（ensuite）；也别每句都挂在嘴边。</li>
<li>口语里 trop 常常只是“很”：C'est trop bon ! = 太好吃了，没有“过度”的意思。</li></ul>`,
    ex: [
      ["J'sais pas, j'ai la flemme de sortir ce soir.", '不知道，今晚懒得出门。（= Je ne sais pas, je n\'ai pas envie de sortir ce soir.）'],
      ["On se fait un ciné ? — Ouais, grave !", '一起去看电影？——好啊，必须的！'],
      ["Il est relou, ton voisin : il fait du bruit toute la nuit.", '你那邻居真烦人：整晚都在吵。'],
      ["J'ai bossé comme un ouf, j'suis crevé.", '我拼命干活，累坏了。'],
    ],
  },
  {
    id: 'g-argument', title: '论证连接词：组织一篇有逻辑的议论文',
    body: `<p>法国的议论文和正式讨论非常看重逻辑衔接。阅卷人首先看的，就是你能不能用连接词把论点清楚地串起来。按功能记最有效：</p>
<table><tr><th>功能</th><th>连接词</th><th>语域与说明</th></tr>
<tr><td>开头、列举</td><td>tout d'abord, en premier lieu, premièrement → ensuite, en second lieu → enfin</td><td>列举中的 enfin = 最后</td></tr>
<tr><td>补充</td><td>de plus, en outre, par ailleurs, d'ailleurs, qui plus est</td><td>en outre、qui plus est 更书面；en plus 是口语</td></tr>
<tr><td>两个方面</td><td>d'une part … d'autre part</td><td>并列两个论据</td></tr>
<tr><td>对照</td><td>en revanche, par contre, alors que, tandis que</td><td>par contre 偏口语，书面多用 en revanche</td></tr>
<tr><td>让步</td><td>certes … mais, il est vrai que … cependant</td><td>先承认对方，再反驳</td></tr>
<tr><td>结果</td><td>par conséquent, c'est pourquoi, ainsi, dès lors, de ce fait</td><td>可以替代口语味较重的 donc、alors</td></tr>
<tr><td>举例</td><td>par exemple, notamment, à titre d'exemple</td><td>notamment = 尤其是、特别是</td></tr>
<tr><td>总结</td><td>en somme, en définitive, en conclusion, pour conclure</td><td>bref 也表示总结，但偏口语</td></tr></table>
<p><b>容易混淆的几组</b></p>
<ul>
<li><b>en revanche vs au contraire</b>：en revanche 对照两件<b>都成立</b>的事（市中心空气差，en revanche 交通方便）；au contraire 是“恰恰相反”，用来<b>否定</b>前面的说法（Ce n'est pas cher, au contraire !）。中国学生常把“相反”一律译成 au contraire，这是错的。</li>
<li><b>par ailleurs vs d'ailleurs</b>：par ailleurs = 另外（转到新的方面）；d'ailleurs = 况且、再说（补一个支持前句的证据）。</li>
<li><b>finalement ≠ en conclusion</b>：finalement 是“最后、结果（事情最终怎样）”，不用来引出文章结论。</li>
<li><b>ainsi</b> 可以表示“因此”或“例如”；书面里放句首表示“因此”时常倒装：Ainsi faut-il repenser la ville.</li>
<li><b>aussi</b> 放句首不是“也”，而是“因此”，而且要倒装：Aussi la mairie a-t-elle reculé. 不要用 Aussi, … 来列举。</li>
<li><b>d'une part</b> 必须有 <b>d'autre part</b> 呼应；但 d'autre part 可以单独用，意思是“另外”。不要和 d'un côté … de l'autre 混搭。</li>
</ul>
<p><b>标点与位置</b>：连接词放句首时后面一般加逗号（En outre, …）；也可以插在句中（Cette mesure est, par ailleurs, très coûteuse.）。不要一段里堆三四个连接词，用得准比用得多重要。</p>
<p><b>常见错误</b>：用 et puis、en plus、du coup 写作文；写了 premièrement 却没有 deuxièmement；用 finalement 开始结论段。</p>`,
    ex: [
      ["D'une part, cette mesure réduit la pollution ; d'autre part, elle améliore la qualité de vie.", '一方面，这项措施减少污染；另一方面，它提高生活质量。'],
      ["Certes, la voiture est pratique, mais elle coûte cher à la collectivité.", '诚然，汽车很方便，但它让社会付出高昂代价。'],
      ["Les loyers ont augmenté ; par conséquent, beaucoup de familles quittent le centre.", '房租上涨了；因此，许多家庭离开了市中心。'],
      ["Le métro est saturé. En revanche, le vélo progresse rapidement.", '地铁已经饱和。相比之下，骑车出行增长很快。'],
    ],
  },
  {
    id: 'g-hypothese', title: '假设与条件：au cas où, à condition que, à moins que, pourvu que…',
    body: `<p>除了 si，法语还有一整套表达“条件、假设、万一”的连词。最大的难点是<b>每个连词后面接的语式不一样</b>，必须成套记。</p>
<table><tr><th>表达</th><th>意思</th><th>后接</th><th>例句</th></tr>
<tr><td><b>au cas où</b> / dans le cas où</td><td>万一、以防</td><td><b>条件式</b></td><td>Prends un parapluie au cas où il pleuvrait.</td></tr>
<tr><td>en cas de</td><td>如遇（书面、告示）</td><td>无冠词名词</td><td>En cas d'urgence, appelez le 112.</td></tr>
<tr><td><b>si jamais</b></td><td>万一、要是</td><td>直陈式（同 si）</td><td>Si jamais tu le vois, dis-lui bonjour.</td></tr>
<tr><td><b>à condition que</b></td><td>只要、前提是</td><td>虚拟式</td><td>J'accepte, à condition que vous m'aidiez.</td></tr>
<tr><td>à condition de</td><td>同上（主语相同）</td><td>原形</td><td>Tu réussiras à condition de travailler.</td></tr>
<tr><td><b>à moins que</b> (ne)</td><td>除非</td><td>虚拟式（常带虚词 ne）</td><td>Je viendrai, à moins qu'il ne pleuve.</td></tr>
<tr><td>à moins de</td><td>除非（主语相同）</td><td>原形</td><td>À moins d'être fou, personne n'accepterait.</td></tr>
<tr><td><b>pourvu que</b></td><td>① 但愿 ② 只要</td><td>虚拟式</td><td>Pourvu qu'il fasse beau !</td></tr>
<tr><td><b>en supposant que / à supposer que</b></td><td>假定、就算</td><td>虚拟式</td><td>À supposer qu'il ait raison, que faire ?</td></tr>
<tr><td>quitte à</td><td>哪怕要（付出某代价）、大不了</td><td>原形</td><td>Je réserve, quitte à annuler.</td></tr></table>
<p><b>要点</b></p>
<ul>
<li><b>au cas où + 条件式</b>，不是虚拟式，也不是直陈式：au cas où il <b>pleuvrait</b>（不是 pleuve / pleut）。这是考试最爱考的点。口语里 au cas où 还能单独放句末：Prends ta veste, au cas où.（带上外套，以防万一。）</li>
<li><b>à moins que</b> 后面的 ne 是“虚词 ne”（ne explétif），<b>没有否定意思</b>，书面常用，口语常省：à moins qu'il (ne) pleuve = 除非下雨。</li>
<li><b>pourvu que</b> 单独成句、带感叹号时 = “但愿”：Pourvu qu'il ne soit pas en retard ! 接在主句后时 = “只要”：Tout ira bien, pourvu que tu sois prudent.</li>
<li>主语相同时用 <b>de + 原形</b>：à condition de, à moins de。</li>
<li><b>si jamais</b> 比 si 更强调“可能性不大”，口语极常用；<b>au cas où</b> 侧重“为防万一提前准备”。</li>
</ul>
<p><b>中国学习者常犯的错</b>：au cas où 后用虚拟式或直陈式；à condition que 后用直陈式；把 à moins que 的 ne 当否定，理解成“除非不……”；“只要……就”一律译成 si——更地道的往往是 pourvu que、à condition que 或 il suffit que。</p>`,
    ex: [
      ["Je te laisse mon numéro au cas où tu aurais besoin de quelque chose.", '我把电话留给你，万一你需要什么。'],
      ["Nous signerons le contrat à condition que le prix soit revu.", '只要价格重新调整，我们就签合同。'],
      ["On partira à huit heures, à moins qu'il n'y ait des bouchons.", '我们八点出发，除非堵车。'],
      ["Pourvu qu'il ne pleuve pas demain !", '但愿明天别下雨！'],
    ],
  },
  {
    id: 'g-expressions', title: '常用习语：字面意思与真实意思',
    body: `<p>习语（expressions idiomatiques）是 B2 阅读和听力的一大障碍：每个词都认识，整句却看不懂。学的时候要同时记住<b>字面意思</b>、<b>真实意思</b>和<b>语域</b>。下面是法国人最常用的一批：</p>
<table><tr><th>习语</th><th>字面</th><th>真实意思</th><th>语域</th></tr>
<tr><td>avoir le cafard</td><td>有一只蟑螂</td><td>情绪低落、郁闷</td><td>日常</td></tr>
<tr><td>poser un lapin à qqn</td><td>给某人放一只兔子</td><td>放某人鸽子</td><td>日常</td></tr>
<tr><td>coûter les yeux de la tête</td><td>值头上的两只眼睛</td><td>贵得要命</td><td>日常</td></tr>
<tr><td>avoir du pain sur la planche</td><td>案板上有面包</td><td>有一大堆活要干</td><td>日常</td></tr>
<tr><td>tomber à pic</td><td>垂直落下</td><td>来得正是时候</td><td>日常</td></tr>
<tr><td>être dans la lune</td><td>在月亮里</td><td>心不在焉、走神</td><td>日常</td></tr>
<tr><td>mettre les pieds dans le plat</td><td>把脚踩进菜盘</td><td>说话冒失、捅破不该说的事</td><td>日常</td></tr>
<tr><td>il pleut des cordes</td><td>天上下绳子</td><td>下倾盆大雨</td><td>日常</td></tr>
<tr><td>avoir un poil dans la main</td><td>手心长毛</td><td>非常懒</td><td>随意，带嘲讽</td></tr>
<tr><td>raconter des salades</td><td>讲沙拉</td><td>胡编乱造、撒谎</td><td>随意</td></tr>
<tr><td>se creuser la tête</td><td>挖自己的脑袋</td><td>绞尽脑汁</td><td>日常</td></tr>
<tr><td>tomber dans les pommes</td><td>掉进苹果堆</td><td>晕倒</td><td>日常</td></tr></table>
<p><b>使用规则</b></p>
<ul>
<li><b>形式固定</b>：冠词、单复数、介词都不能改。说 poser <b>un</b> lapin，不说 poser le lapin；说 être <b>dans</b> la lune，不说 sur la lune。</li>
<li><b>动词照常变位</b>：Il m'a posé un lapin. Ça a coûté les yeux de la tête. Il pleuvait des cordes.</li>
<li><b>人称要调整</b>：se creuser la tête 的反身代词随主语变：je me suis creusé la tête；poser un lapin <b>à</b> qqn 中的“某人”是间接宾语：Il <b>m'</b>a posé un lapin，Elle <b>lui</b> a posé un lapin。</li>
<li><b>语域</b>：大多数习语属于日常口语，正式文章里要换成普通说法（coûter très cher, être distrait, s'évanouir）。</li>
<li><b>不要逐字翻译中文俗语</b>：“放鸽子”不是 lâcher un pigeon，而是 poser un lapin；“下大雨”不是英语式的 il pleut des chats。反过来，也不要把法语习语直译成中文。</li>
</ul>
<p><b>学习方法</b>：把习语放进具体场景记（谁对谁、在什么情况下说），比单独背表格有效得多。用错一个习语比不用更显眼，拿不准时宁可用普通表达。</p>`,
    ex: [
      ["Il m'a encore posé un lapin hier soir !", '他昨晚又放我鸽子了！'],
      ["Ce sac coûte les yeux de la tête.", '这个包贵得要命。'],
      ["Tu tombes à pic, j'avais besoin d'aide.", '你来得正好，我正需要帮忙。'],
      ["Depuis qu'elle est partie, il a le cafard.", '自从她走了，他就一直很郁闷。'],
    ],
  },
  {
    id: 'g-impersonnel', title: '无人称结构：让论述显得客观',
    body: `<p>评论文章、报告和新闻分析里，作者常用不指任何人的形式主语 <b>il</b> 来引出判断，这样观点显得客观、不带个人色彩。中文的“有必要……”“问题在于……”“不得不承认……”，在法语里对应的就是这些结构。</p>
<p><b>一、il est + 形容词 + de + 原形 / que + 从句</b></p>
<table><tr><th>接虚拟式（必要、可能、评价）</th><th>接直陈式（确定、明显）</th></tr>
<tr><td>il est nécessaire / indispensable / essentiel que<br>il est important / urgent que<br>il est possible / peu probable que<br>il est normal / regrettable / étonnant que</td><td>il est clair / évident / certain que<br>il est vrai que<br>il est probable que<br>il est indéniable que</td></tr></table>
<p>泛指时用 <b>de + 原形</b>：Il est nécessaire <b>d'</b>agir vite.；有具体主语时用 <b>que + 从句</b>：Il est nécessaire <b>que</b> l'État <b>agisse</b> vite.</p>
<p><b>二、书面常用的无人称动词</b></p>
<ul>
<li><b>il s'agit de</b> + 名词 / 原形：“涉及的是、问题在于、关键是要”。主语<b>只能是 il</b>：Dans ce livre, il s'agit d'une famille…（错：Ce livre s'agit de…）。Il s'agit de trouver une solution. = 关键是要找到办法。</li>
<li><b>il convient de</b> + 原形 / <b>il convient que</b> + 虚拟式：“应当、宜”，比 il faut 更正式委婉。</li>
<li><b>il importe de / que</b>：“重要的是”，正式。</li>
<li><b>il reste à</b> + 原形：“还需……”；<b>reste à savoir si</b>：“还有待观察是否……”（il 省略）。</li>
<li><b>il en va de même pour</b>：“……也是如此”；<b>il en va de</b> + 名词：“关系到……（的存亡、利益）”。</li>
<li><b>il est question de</b>：“谈到、有……之议”（Il est question de fermer l'usine. 有人提议关闭工厂。）</li>
<li><b>il semble que</b> + 虚拟式（多数情况）vs <b>il me semble que</b> + 直陈式。</li>
</ul>
<p><b>三、固定的书面套语</b></p>
<ul>
<li><b>force est de constater que</b> + 直陈式：“不得不承认、必须看到”，常引出令人遗憾的事实。</li>
<li><b>il n'en demeure pas moins que / il n'en reste pas moins que</b> + 直陈式：“尽管如此，……仍是事实”，用在让步之后转折。</li>
<li><b>il va sans dire que</b>：“不言而喻”。</li>
</ul>
<p><b>为什么要用</b>：比起 je pense qu'il faut…，il convient de… 不暴露个人立场；比起 on doit…，il est indispensable de… 更正式。但全文都用无人称会显得僵硬，要和普通句子交替使用。</p>
<p><b>常见错误</b>：il est important que + 直陈式（应为虚拟式）；il est clair qu'il <i>soit</i>（应为直陈式 est）；给 s'agir de 配别的主语；把 il faut 和 il convient 混成 il faut de + 原形。</p>`,
    ex: [
      ["Il est indispensable que les municipalités régulent la location touristique.", '市政当局必须对旅游短租加以监管。'],
      ["Il s'agit moins d'interdire que de mieux répartir les visiteurs.", '问题不在于禁止，而在于更好地分流游客。'],
      ["Force est de constater que les habitants quittent le centre historique.", '不得不承认，居民正在离开历史城区。'],
      ["Il convient de rappeler que le tourisme fait vivre des milliers de familles.", '有必要指出，旅游业养活着成千上万的家庭。'],
    ],
  },
  {
    id: 'g-nuance', title: '职场委婉表达：缓和、建议与表达异议',
    body: `<p>法国职场讲究“说得婉转，但立场清楚”。在会议上直接说 Vous avez tort / Je ne suis pas d'accord / Il faut… 会显得生硬甚至冒犯。基本手段有四种：<b>条件式</b>、<b>先肯定再转折</b>、<b>把观点说成个人感受</b>、<b>用疑问句提建议</b>。</p>
<table><tr><th>意图</th><th>太直接</th><th>得体的说法</th></tr>
<tr><td>提出观点</td><td>C'est faux.</td><td>Il me semble que… / J'ai l'impression que… / À mon sens…</td></tr>
<tr><td>纠正对方</td><td>Vous vous trompez.</td><td>Sauf erreur de ma part, … / Si je ne m'abuse, … / Il y a peut-être un malentendu.</td></tr>
<tr><td>表示不同意</td><td>Je ne suis pas d'accord.</td><td>Je ne suis pas tout à fait d'accord. / Je comprends votre point de vue, mais… / Je vois les choses un peu différemment.</td></tr>
<tr><td>提建议</td><td>Il faut baisser le prix.</td><td>Ne serait-il pas envisageable de… ? / Nous pourrions peut-être… / Je vous propose de…</td></tr>
<tr><td>主动发言、做事</td><td>Je veux dire que…</td><td>Je me permets de… / Permettez-moi d'ajouter que…</td></tr>
<tr><td>拒绝</td><td>Non, c'est impossible.</td><td>Ce serait difficile pour nous. / Nous ne sommes malheureusement pas en mesure de…</td></tr>
<tr><td>提要求</td><td>Vous devez livrer lundi.</td><td>Il faudrait que la livraison ait lieu lundi. / Serait-il possible de livrer lundi ?</td></tr></table>
<p><b>关键表达</b></p>
<ul>
<li><b>il me semble que + 直陈式</b>（在我看来）；注意无人称的 il semble que 通常接虚拟式。</li>
<li><b>sauf erreur de ma part</b>（如果我没弄错的话）：表面谦虚，实际上常用来<b>礼貌地指出对方的错误</b>：Sauf erreur de ma part, le devis indiquait 12 %.</li>
<li><b>si je ne m'abuse</b>：意思相同，更书面、略带文雅。</li>
<li><b>je me permets de</b> + 原形（冒昧……）：邮件和会议里极常见：Je me permets de vous relancer…</li>
<li><b>条件式缓和</b>：je souhaiterais, nous aimerions, il faudrait, ce serait…——比现在时礼貌，但立场不变。</li>
<li><b>弱化词</b>：un peu, peut-être, plutôt, pas forcément, pas tout à fait——ce n'est pas tout à fait exact 比 c'est faux 柔和得多。</li>
<li><b>先肯定，再转折</b>：J'entends bien votre argument ; cela dit, … / Je comprends vos contraintes ; toutefois, …</li>
</ul>
<p><b>中国学习者常见问题</b></p>
<ul>
<li>过度道歉：中文的“不好意思”不要处处译成 désolé；谈判时频繁说 désolé 会显得没底气。</li>
<li>委婉不等于含糊：法国人期待你最后<b>明确</b>说出立场，缓和之后一定要给出具体方案、数字或期限。</li>
<li>je veux、vous devez 在职场里要换成 je souhaiterais、il faudrait。</li>
<li>pas du tout d'accord 不是委婉说法，反而是“完全不同意”；委婉的是 pas tout à fait d'accord。</li>
</ul>`,
    ex: [
      ["Sauf erreur de ma part, le délai prévu était de trois semaines.", '如果我没记错的话，原定期限是三周。'],
      ["Je me permets de vous rappeler que l'offre expire vendredi.", '冒昧提醒您，这份报价周五到期。'],
      ["Il me semble que cette solution serait plus avantageuse pour les deux parties.", '在我看来，这个方案对双方都更有利。'],
      ["Ne serait-il pas envisageable de répartir la livraison en deux fois ?", '能否考虑分两批交货？'],
    ],
  },
  {
    id: 'g-synthese', title: 'B2 议论文综合：立论、反驳与结论',
    body: `<p>DELF B2 的写作和口语都要求就一个社会话题<b>表明并论证立场</b>。本课把 B2 学过的语法放进一个完整框架。</p>
<p><b>一、结构</b></p>
<table><tr><th>部分</th><th>内容</th><th>常用表达</th></tr>
<tr><td>引言 introduction</td><td>引入话题 → 提出问题（problématique）→ 预告思路</td><td>De nos jours, … / On peut dès lors se demander si… / Nous verrons d'abord…, puis…</td></tr>
<tr><td>正论 thèse</td><td>支持一方的 2–3 个论据，每个配例子</td><td>Tout d'abord, … En outre, … C'est notamment le cas de…</td></tr>
<tr><td>让步与反驳 antithèse</td><td>承认对方的道理，再反驳或限定</td><td>Certes, …, mais… / On objectera que… / Il n'en reste pas moins que…</td></tr>
<tr><td>结论 conclusion</td><td>明确回答问题 + 开放性延伸（ouverture）</td><td>En définitive, … / Reste à savoir si…</td></tr></table>
<p><b>二、三类语法要在议论中“主动亮出来”</b></p>
<ul>
<li><b>虚拟式</b>：表达必要、担忧、怀疑、目的、让步——Il est essentiel que l'école <b>forme</b> les élèves… / Je crains que ces outils ne <b>remplacent</b> la réflexion. / Je doute que cette mesure <b>suffise</b>. / bien que, pour que, à condition que + 虚拟式。</li>
<li><b>条件式</b>：提出假设和谨慎的判断——Interdire ces outils <b>serait</b> illusoire. / Si l'on <b>formait</b> les enseignants, ils <b>pourraient</b>… / On <b>pourrait</b> objecter que…</li>
<li><b>让步与对立</b>：certes … mais, bien que, quoique, même si, alors que, en revanche, néanmoins, il n'en demeure pas moins que。</li>
</ul>
<p><b>三、反驳的常用句式（由温和到强烈）</b></p>
<ul>
<li>Cet argument mérite d'être nuancé.（这个论点需要加以限定。）</li>
<li>Contrairement à ce que l'on pourrait croire, …（与人们可能以为的相反……）</li>
<li>On ne saurait pour autant affirmer que…（但也不能因此断言……；ne saurait = ne peut，书面，不加 pas）</li>
<li>Cet argument ne tient pas.（这个论点站不住脚。）</li>
</ul>
<p><b>四、阅卷人常扣分的地方</b></p>
<ul>
<li>只有观点没有例子；例子要具体（数据、事件、亲身经历）。</li>
<li>没有让步，只讲一面之词：B2 会判为论证不充分。</li>
<li>口语混入：du coup、ça、en plus、省略 ne。</li>
<li>语式错误：bien que + 直陈式，je pense que + 虚拟式，je ne pense pas que + 直陈式。</li>
<li>结论只是把开头重复一遍；应该先明确回答问题，再“开一扇窗”。</li>
</ul>`,
    ex: [
      ["Certes, l'intelligence artificielle facilite l'accès au savoir, mais elle ne saurait remplacer l'enseignant.", '诚然，人工智能让获取知识更容易，但它无法取代教师。'],
      ["Il est essentiel que les élèves apprennent à vérifier leurs sources.", '至关重要的是，学生要学会核实信息来源。'],
      ["Interdire purement et simplement ces outils serait illusoire.", '一刀切地禁止这些工具是不现实的。'],
      ["Reste à savoir si l'école aura les moyens de former ses enseignants.", '还有待观察的是，学校是否有能力培训教师。'],
    ],
  },
];

export const CAT = {
  'g-modal-nuance': '时态与语气',
  'g-oral': '表达与语用',
  'g-argument': '从句与连接',
  'g-hypothese': '从句与连接',
  'g-expressions': '表达与语用',
  'g-impersonnel': '句型',
  'g-nuance': '表达与语用',
  'g-synthese': '表达与语用',
};

export const units = [
  {
    id: 'b2-09', emoji: '🤔', title: '他一定是忘了', sub: 'devoir / pouvoir 的推测义 · 推测条件式', can: '能对缺席、延误等情况做出不同把握程度的推测，并转述未经证实的消息', scene: null, grammar: ['g-modal-nuance'],
    words: [],
    newWords: [
      ['injoignable', 'ɛ̃.ʒwa.ɲabl', '联系不上的', "Depuis ce matin, il est injoignable.", '从今早起就联系不上他。', 'course'],
      ['la messagerie (vocale)', 'la me.sa.ʒʁi vɔ.kal', '语音信箱', "Je tombe directement sur sa messagerie.", '我一打就直接转到他的语音信箱。', 'course'],
      ['coincé · coincée', 'kwɛ̃.se', '被困住的、卡住的', "Je suis coincé dans le métro depuis vingt minutes.", '我被困在地铁里二十分钟了。', 'course'],
      ["l'embouteillage (m.)", 'lɑ̃.bu.tɛ.jaʒ', '交通堵塞', "Il y a des embouteillages sur le périphérique.", '环城大道上堵车了。', 'course'],
      ['la grève', 'la ɡʁɛv', '罢工', "Les contrôleurs sont en grève jusqu'à jeudi.", '检票员罢工到周四。', 'course'],
      ['prévenir', 'pʁe.və.niʁ', '事先通知；预防', "Préviens-moi si tu es en retard.", '你要迟到的话提前告诉我。', 'course'],
      ['ne pas être du genre à', 'nə pa ɛtʁ dy ʒɑ̃ʁ a', '不是那种会……的人', "Elle n'est pas du genre à se plaindre.", '她不是那种爱抱怨的人。', 'course'],
      ['se tromper de', 'sə tʁɔ̃.pe də', '弄错（某物）', "Je me suis trompé de salle.", '我走错会议室了。', 'course'],
      ['être en déplacement', 'ɛtʁ ɑ̃ de.plas.mɑ̃', '出差在外', "La directrice est en déplacement à Lyon.", '经理在里昂出差。', 'course'],
      ['déchargé · déchargée', 'de.ʃaʁ.ʒe', '（电池）没电的', "Mon portable est déchargé.", '我手机没电了。', 'course'],
      ["ça m'étonnerait", 'sa me.tɔn.ʁɛ', '我才不信；不太可能', "Il a fini le rapport ? Ça m'étonnerait !", '他把报告写完了？我可不信！', 'course'],
      ['vraisemblablement', 'vʁɛ.sɑ̃.bla.blə.mɑ̃', '很可能、大概', "La réunion sera vraisemblablement reportée.", '会议很可能会推迟。', 'course'],
    ],
    dialogue: [
      ['Claire', "Il est déjà dix heures et quart. Thomas n'est toujours pas là ?", '已经十点一刻了。托马还没来？'],
      ['我', "Non, et il est injoignable. Il a dû oublier la réunion.", '没来，而且联系不上他。他一定是把会忘了。'],
      ['Marc', "Ça m'étonnerait, il n'est pas du genre à oublier. Il doit être coincé dans les embouteillages.", '不太可能，他不是会忘事的人。他肯定是堵在路上了。'],
      ['Claire', "Il se peut aussi qu'il y ait une grève du RER : j'ai reçu une alerte ce matin.", '也有可能是 RER 罢工了：我今早收到了提醒。'],
      ['我', "C'est possible. Mais dans ce cas, il aurait dû nous prévenir.", '有可能。但那样的话，他本该通知我们一声。'],
      ['Marc', "Il a peut-être essayé. Je tombe directement sur sa messagerie : son portable doit être déchargé.", '他也许试过了。我一打就转到语音信箱：他手机肯定没电了。'],
      ['Claire', "Attendez… D'après son assistante, il serait en déplacement à Lille cette semaine.", '等等……据他的助理说，他这周好像在里尔出差。'],
      ['我', "Ah bon ? Alors il a pu se tromper de date… ou bien c'est nous qui nous sommes trompés !", '是吗？那他可能是记错日期了……要不就是我们弄错了！'],
      ['Marc', "En tout cas, il devrait rappeler d'ici une demi-heure : il le fait toujours.", '不管怎样，他照理半小时内会回电话：他一向如此。'],
      ['Claire', "Bon, commençons sans lui. Il se peut qu'on doive tout lui réexpliquer, tant pis.", '好吧，我们先开始。可能得从头再给他讲一遍，没办法。'],
    ],
    sentences: [
      ["Il a dû oublier la réunion.", '他一定是把会忘了。'],
      ["Il doit être coincé dans les embouteillages.", '他肯定是堵在路上了。'],
      ["Il se peut qu'il y ait une grève du RER.", '有可能是 RER 罢工了。'],
      ["D'après son assistante, il serait en déplacement à Lille.", '据他的助理说，他好像在里尔出差。'],
      ["Il devrait rappeler d'ici une demi-heure.", '他照理半小时内会回电话。'],
    ],
    cloze: [
      ["Il ne répond pas, il ___ oublier son téléphone au bureau.", ['doit', 'a dû', 'devrait'], 1, '他不接电话，一定是把手机忘在办公室了。', "推测过去已经发生的事用 devoir 的复合过去时：il a dû oublier。il doit oublier 是“他必须忘掉”，il devrait oublier 是“他应该忘掉”"],
      ["Il se peut qu'elle ___ malade.", ['est', 'soit', 'sera'], 1, '她有可能病了。', "il se peut que = il est possible que，后接虚拟式 soit"],
      ["Il est probable qu'il ___ demain.", ['vienne', 'viendra', 'venir'], 1, '他很可能明天来。', "probable 表示把握大，接直陈式；peu probable 才接虚拟式（vienne）"],
      ["Selon plusieurs témoins, le conducteur ___ brûlé un feu rouge.", ['aurait', 'avait', 'a dû'], 0, '据几位目击者称，司机闯了红灯。', "转述未经证实的消息用推测条件式 aurait + 过去分词；a dû 是说话人自己的推测，和 selon 搭配不自然"],
      ["D'après l'horaire, le train ___ arriver dans cinq minutes.", ['a dû', 'aurait dû', 'devrait'], 2, '按时刻表，火车照理五分钟后到。', "按计划、照理会发生的事用条件式 devrait；aurait dû 是“本该（却没有）”，a dû 是对过去的推测"],
      ["Il n'est pas venu : il est ___ malade, mais je n'en suis pas sûr.", ['sans doute', 'sans aucun doute', 'certainement pas'], 0, '他没来：大概是病了，但我不确定。', "sans doute 现在表示“大概”；sans aucun doute 才是“毫无疑问”，和后半句“我不确定”矛盾"],
    ],
    discover: [
      { q: '“Il a dû partir tôt.” 可以是什么意思？', opts: ['既可以是“他不得不早走”，也可以是“他一定是早走了”', '只能是“他不得不早走”', '只能是“他本该早走”'], a: 0, why: 'devoir 的复合过去时既有义务义也有推测义，靠上下文区分。“本该早走（却没有）”要说 il aurait dû partir tôt。' },
      { q: '“按说他应该已经到家了”（照计划如此，但我没把握），最贴切的是？', opts: ["Il devrait être rentré.", "Il doit rentrer.", "Il aurait dû rentrer."], a: 0, why: 'devrait 表示“照理、按预期”；il doit rentrer 是“他必须回家”；il aurait dû rentrer 是“他本该回家（事实上没有）”。' },
    ],
    write: {
      prompt: '同事 Sophie 已经两天没来上班，也没有请假。给部门经理写一封 120–200 字的邮件：说明情况，提出几种可能的原因（用 il a dû / il a pu、il se peut que、devrait、条件式转述等不同把握程度的表达），并建议下一步怎么做。',
      model: "Madame,\n\nJe me permets de vous écrire au sujet de Sophie Martin, qui n'est venue au bureau ni hier ni aujourd'hui. Elle n'a prévenu personne et elle est injoignable : je tombe directement sur sa messagerie.\n\nPlusieurs explications sont possibles. Elle a pu tomber malade et ne pas être en état de nous appeler. Il se peut aussi qu'elle ait eu un problème familial urgent. Selon un collègue, elle aurait parlé la semaine dernière d'un déplacement chez un client à Nantes ; elle a donc peut-être confondu les dates. Cela dit, elle n'est pas du genre à disparaître sans un mot, ce qui m'inquiète un peu.\n\nJe vous propose de contacter le service des ressources humaines, qui devrait disposer d'un numéro à joindre en cas d'urgence. De mon côté, je lui ai envoyé un SMS, et je vous tiendrai informé dès que j'aurai des nouvelles.\n\nBien cordialement,\nLin",
    },
  },
  {
    id: 'b2-10', emoji: '🗣️', title: '日常口语', sub: '口语特征 · 俚语与 verlan', can: '能听懂年轻人的随意口语，并分清口语和书面语各自的场合', scene: null, grammar: ['g-oral'],
    words: [],
    newWords: [
      ['relou', 'ʁə.lu', '（俚语）烦人的（lourd 的 verlan）', "Il est relou avec ses questions.", '他问个没完，真烦人。', 'course'],
      ['ouf', 'uf', '（俚语）疯狂的、夸张的（fou 的 verlan）', "Ce concert était ouf !", '那场演唱会太疯狂了！', 'course'],
      ['galérer', 'ɡa.le.ʁe', '（口语）费劲、遭罪', "J'ai galéré pour trouver un appart.", '我找房子找得好辛苦。', 'course'],
      ['la flemme', 'la flɛm', '（口语）懒劲儿；avoir la flemme de 懒得', "J'ai la flemme de faire la vaisselle.", '我懒得洗碗。', 'course'],
      ['du coup', 'dy ku', '（口语）所以、于是', "Il pleuvait, du coup on est restés à la maison.", '下雨了，所以我们待在家里。', 'course'],
      ['bosser', 'bɔ.se', '（口语）干活、上班', "Je bosse dans une start-up.", '我在一家初创公司上班。', 'course'],
      ['crevé · crevée', 'kʁə.ve', '（口语）累坏了的', "Après le match, j'étais crevé.", '比赛完我累坏了。', 'course'],
      ['grave', 'ɡʁav', '（俚语，作副词）非常；（单用）完全同意', "J'ai grave faim !", '我饿死了！', 'course'],
      ['kiffer', 'ki.fe', '（俚语）超喜欢', "Je kiffe cette chanson.", '我超爱这首歌。', 'course'],
      ['le pote', 'lə pɔt', '（口语）哥们、朋友', "Je pars en vacances avec des potes.", '我和几个朋友去度假。', 'course'],
      ["c'est pas donné", 'sɛ pa dɔ.ne', '（口语）可不便宜', "Ce resto est sympa, mais c'est pas donné.", '这家馆子不错，但可不便宜。', 'course'],
      ["t'inquiète", 'tɛ̃.kjɛt', '（口语）别担心（= ne t\'inquiète pas）', "T'inquiète, je m'en occupe.", '别担心，我来搞定。', 'course'],
    ],
    dialogue: [
      ['Karim', "Salut ! T'es où, là ? On t'attend depuis vingt minutes !", '嗨！你在哪儿呢？我们等你二十分钟了！'],
      ['我', "Désolé, j'ai galéré avec le métro. Y avait un problème sur la ligne 13.", '抱歉，地铁把我折腾惨了。13 号线出了故障。'],
      ['Karim', "Ah ouais, la 13 à cette heure-ci, c'est trop relou.", '哦对，这个点的 13 号线，真是烦死人。'],
      ['Léa', "Bon, du coup, on fait quoi ce soir ? Moi, j'ai la flemme d'aller en boîte.", '好了，那今晚干嘛？我可懒得去夜店。'],
      ['Karim', "Pareil, j'suis crevé. J'ai bossé comme un ouf toute la semaine.", '我也是，累死了。这一周我拼了命地干活。'],
      ['我', "On se fait un resto, alors ? Y a un petit vietnamien super sympa à côté.", '那我们去吃顿饭？旁边有家越南小馆子超赞。'],
      ['Léa', "Grave ! Je kiffe trop la cuisine vietnamienne. C'est loin ?", '必须的！我超爱越南菜。远吗？'],
      ['我', "Non, c'est à cinq minutes à pied. Par contre, c'est pas donné, hein.", '不远，走路五分钟。不过可不便宜哦。'],
      ['Karim', "T'inquiète, j'ai touché ma paie hier. C'est moi qui invite !", '别担心，我昨天刚发工资。我请客！'],
      ['Léa', "Trop bien ! T'es un vrai pote, toi. Allez, on y va !", '太棒了！你真够哥们。走吧！'],
    ],
    sentences: [
      ["J'sais pas, j'ai la flemme de sortir.", '不知道，我懒得出门。'],
      ["On fait quoi ce soir ?", '今晚我们干嘛？'],
      ["J'ai bossé comme un ouf toute la semaine.", '这一周我拼了命地干活。'],
      ["C'est pas donné, ce resto.", '这家馆子可不便宜。'],
      ["Y avait un problème sur la ligne 13.", '13 号线出了故障。'],
    ],
    cloze: [
      ["À l'oral, « Je ne sais pas » devient souvent « Je sais ___ ».", ['pas', 'ne pas', 'rien'], 0, '口语里“我不知道”常说成 Je sais pas。', "口语省掉的是 ne，pas 必须保留；ne pas 放在变位动词后语序不对，rien 意思变成“什么都不知道”"],
      ["Ce soir, on ___ au cinéma avec Léa.", ['allons', 'va', 'vont'], 1, '今晚我们和莱娅去看电影。', "on 表示“我们”时，动词仍用第三人称单数：on va，不说 on allons"],
      ["Il est ___, ce type : il pose toujours les mêmes questions.", ['ouf', 'crevé', 'relou'], 2, '这家伙真烦，老问一样的问题。', "relou = lourd（烦人）；ouf = fou（疯狂）；crevé = 累坏了"],
      ["À l'écrit : « Que fais-tu ? » → À l'oral : « Tu fais ___ ? »", ['quoi', 'que', "qu'est-ce"], 0, '你在干嘛？', "疑问词放到句末时，que 要换成重读形式 quoi：tu fais quoi ? 不能说 tu fais que ?"],
      ["Il pleuvait, ___ on est restés à la maison.", ['pourtant', 'du coup', 'par contre'], 1, '下雨了，所以我们待在家里。', "du coup 在口语里表示结果（= donc）；pourtant 表转折，par contre 表对照"],
      ["（给教授的邮件）Je vous écris car je ___ terminer mon mémoire à temps.", ['pourrai pas', 'vais pas pouvoir', 'ne pourrai pas'], 2, '我写信给您，因为我无法按时完成论文。', "书面和正式场合必须保留 ne；省略 ne 只属于口语"],
    ],
    discover: [
      { q: '俚语 meuf 是哪个词的 verlan（音节倒读）？', opts: ['femme', 'mère', 'fête'], a: 0, why: 'femme 读作 fa-meu，倒过来是 meu-f → meuf。同理 fou → ouf，lourd → relou，louche → chelou。这些都属于很随便的俚语。' },
      { q: "下面哪种场合可以说 “J'suis crevé, j'ai trop bossé” ？", opts: ['和朋友、熟悉的同事聊天', '面试时回答考官的问题', '给客户写邮件'], a: 0, why: '省略 ne、吞音 j\'suis、口语词 crevé 和 bosser 都属于 familier 语域，只适合熟人之间。正式场合说 Je suis épuisé, j\'ai beaucoup travaillé。' },
    ],
    write: {
      prompt: "下面是朋友发给你的一条口语留言：« Salut ! T'es où ? J'suis crevé, j'ai bossé comme un ouf. Du coup, on se fait un ciné ce soir ? Y a un film trop bien. T'inquiète, c'est pas cher. » 先把它改写成规范的书面法语，再用 120–200 字分析其中至少 5 处口语特征（省略 ne、on、俚语、疑问方式等），并说明这种语域适用的场合。",
      model: "Version écrite : « Bonjour ! Où es-tu ? Je suis épuisé, car j'ai énormément travaillé. Nous pourrions donc aller au cinéma ce soir, qu'en penses-tu ? Il y a un très bon film. Ne t'inquiète pas, ce n'est pas cher. »\n\nAnalyse : ce message présente tous les traits du français oral familier. D'abord, la particule ne disparaît systématiquement : « c'est pas cher » au lieu de « ce n'est pas cher », « t'inquiète » au lieu de « ne t'inquiète pas ». Ensuite, la question « T'es où ? » repose uniquement sur l'intonation et place le mot interrogatif à la fin, alors que l'écrit soutenu préfère l'inversion. Par ailleurs, on remplace nous, et le il impersonnel est supprimé dans « y a ». Le lexique est lui aussi très familier : « crevé », « bosser », « un ciné », et surtout « comme un ouf », qui vient du verlan (fou). Enfin, « du coup » est un tic de langage que l'on remplacerait à l'écrit par « donc ». Ce registre est parfaitement naturel entre amis, mais il serait déplacé dans un courriel professionnel ou une copie d'examen.",
    },
  },
  {
    id: 'b2-11', emoji: '📝', title: '论证文', sub: '论证连接词', can: '能用连接词组织一篇结构清楚、正反兼顾的议论文', scene: null, grammar: ['g-argument'],
    words: [],
    newWords: [
      ['la piste cyclable', 'la pist si.klabl', '自行车道', "La mairie a créé cinquante kilomètres de pistes cyclables.", '市政府修了五十公里的自行车道。', 'course'],
      ['le riverain · la riveraine', 'lə ʁi.vʁɛ̃ · la ʁi.vʁɛn', '沿街居民、附近居民', "Les riverains se plaignent du bruit.", '附近居民抱怨噪音。', 'course'],
      ['le commerçant · la commerçante', 'lə kɔ.mɛʁ.sɑ̃ · la kɔ.mɛʁ.sɑ̃t', '商户、店主', "Les commerçants du quartier sont inquiets.", '街区的商户们很担心。', 'course'],
      ['piétonnier · piétonnière', 'pje.tɔ.nje · pje.tɔ.njɛʁ', '步行的、行人专用的', "Cette rue est devenue piétonnière.", '这条街变成了步行街。', 'course'],
      ['nuisible', 'nɥi.zibl', '有害的', "Le bruit est nuisible à la santé.", '噪音有害健康。', 'course'],
      ['inciter qqn à', 'ɛ̃.si.te a', '促使、鼓励某人做', "Ces aides incitent les habitants à acheter un vélo.", '这些补贴促使居民购买自行车。', 'course'],
      ['freiner', 'fʁɛ.ne', '刹车；阻碍、抑制', "La crise a freiné les investissements.", '危机抑制了投资。', 'course'],
      ["le chiffre d'affaires", 'lə ʃifʁ da.fɛʁ', '营业额', "Son chiffre d'affaires a baissé de 10 %.", '他的营业额下降了 10%。', 'course'],
      ["s'avérer", 'sa.ve.ʁe', '证明是、结果是', "Cette décision s'est avérée judicieuse.", '这个决定后来证明是明智的。', 'course'],
      ['à long terme', 'a lɔ̃ tɛʁm', '从长远看', "À long terme, cette politique sera rentable.", '从长远看，这项政策会带来收益。', 'course'],
      ["faire l'unanimité", 'fɛʁ ly.na.ni.mi.te', '获得一致赞同', "Ce projet est loin de faire l'unanimité.", '这个项目远未获得一致赞同。', 'course'],
    ],
    dialogue: [
      ['', "Faut-il interdire la voiture dans les centres-villes ? De plus en plus de municipalités ont fait ce choix, qui divise profondément les habitants.", '要不要在市中心禁止汽车通行？越来越多的市政府做出了这一选择，而它让居民意见严重分歧。'],
      ['', "Tout d'abord, les zones piétonnières améliorent nettement la qualité de l'air : selon plusieurs études, la pollution y baisse de façon significative.", '首先，步行区明显改善了空气质量：多项研究表明，那里的污染显著下降。'],
      ['', "De plus, elles rendent la ville plus agréable : les riverains profitent du calme, et les familles se réapproprient l'espace public.", '此外，它们让城市更宜居：附近居民享受到安静，家庭重新拥有了公共空间。'],
      ['', "En outre, la création de pistes cyclables incite les habitants à changer leurs habitudes à long terme.", '另外，修建自行车道会促使居民从长远上改变出行习惯。'],
      ['', "Certes, ces mesures ne font pas l'unanimité. D'une part, de nombreux commerçants craignent une baisse de leur chiffre d'affaires ; d'autre part, les personnes âgées ou handicapées peuvent avoir du mal à accéder au centre.", '诚然，这些措施并未获得一致赞同。一方面，许多商户担心营业额下降；另一方面，老人和残障人士进入市中心可能会有困难。'],
      ['', "Par ailleurs, interdire la voiture sans développer les transports en commun serait nuisible à ceux qui habitent en banlieue.", '另外，如果禁车却不发展公共交通，对住在郊区的人是有害的。'],
      ['', "En revanche, l'expérience montre que les craintes des commerçants s'avèrent souvent exagérées : à Pontevedra, en Espagne, les commerces du centre se portent mieux qu'avant.", '相比之下，经验表明商户的担忧往往被夸大了：在西班牙的蓬特韦德拉，市中心的商店经营得比以前更好。'],
      ['', "La vraie question n'est donc pas de choisir entre l'écologie et l'économie, mais de trouver un équilibre.", '因此，真正的问题不是在生态和经济之间二选一，而是找到平衡。'],
      ['', "C'est pourquoi la fermeture doit être progressive et accompagnée : parkings relais, navettes gratuites, accès réservé aux livraisons.", '正因如此，封闭必须循序渐进并配套措施：换乘停车场、免费接驳车、仅限送货车辆进入。'],
      ['', "En somme, la ville sans voitures n'est pas une utopie. Par conséquent, plutôt que de freiner ces projets, il faudrait les généraliser intelligemment.", '总之，无车城市并非乌托邦。因此，与其阻碍这些项目，不如明智地加以推广。'],
    ],
    sentences: [
      ["Tout d'abord, les zones piétonnières améliorent la qualité de l'air.", '首先，步行区改善了空气质量。'],
      ["D'une part, les commerçants sont inquiets ; d'autre part, l'accès au centre devient difficile.", '一方面，商户很担心；另一方面，进入市中心变得困难。'],
      ["En revanche, ces craintes s'avèrent souvent exagérées.", '相比之下，这些担忧往往被夸大了。'],
      ["C'est pourquoi la fermeture doit être progressive.", '正因如此，封闭必须循序渐进。'],
      ["En somme, la ville sans voitures n'est pas une utopie.", '总之，无车城市并非乌托邦。'],
    ],
    cloze: [
      ["Le centre est calme. ___, il est difficile d'y accéder en voiture.", ['Au contraire', 'En revanche', 'En outre'], 1, '市中心很安静。相比之下，开车进去很难。', "en revanche 对照两件都成立的事；au contraire 是“恰恰相反”，用来否定前句；en outre 是补充，不表对照"],
      ["___, la mesure coûte cher ; d'autre part, elle est impopulaire.", ["D'une part", "D'un côté", 'Premièrement'], 0, '一方面，这项措施花费大；另一方面，它不受欢迎。', "d'autre part 要和 d'une part 呼应；d'un côté 配 de l'autre，premièrement 配 deuxièmement，不能混搭"],
      ["Ce n'est pas une mesure contre les commerçants, ___ : elle peut les aider.", ['en revanche', 'par ailleurs', 'au contraire'], 2, '这不是针对商户的措施，恰恰相反：它能帮助他们。', "前句是否定，后句提出相反的事实，用 au contraire"],
      ["Les loyers ont beaucoup augmenté ; ___, de nombreuses familles quittent le centre.", ['par conséquent', 'en revanche', 'certes'], 0, '房租大幅上涨；因此，许多家庭离开了市中心。', "表示结果用 par conséquent；en revanche 表对照，certes 表让步"],
      ["___, cette solution a des inconvénients, mais ses avantages l'emportent.", ['Finalement', 'Par conséquent', 'Certes'], 2, '诚然，这个办法有缺点，但利大于弊。', "certes … mais 先让步、再反驳，是议论文最常用的结构"],
      ["Pour conclure une dissertation : « ___, la ville sans voitures est possible. »", ['En définitive', 'Finalement', 'Du coup'], 0, '总而言之，无车城市是可能的。', "finalement 是“结果、最后（事情的结局）”，不用来引出结论；du coup 是口语；结论用 en définitive / en somme / en conclusion"],
    ],
    discover: [
      { q: '“市中心空气差，相比之下，郊区空气好得多。”这里的“相比之下”应该用？', opts: ['en revanche', 'au contraire'], a: 0, why: '两件事都成立，只是形成对照，用 en revanche。au contraire 用来否定前一句：Il n\'est pas paresseux, au contraire, il travaille beaucoup.' },
      { q: '哪一组连接词最适合写进正式议论文？', opts: ['en outre, par conséquent, en somme', 'en plus, du coup, bref', 'et puis, alors, voilà'], a: 0, why: 'en plus、du coup、bref、et puis、alors、voilà 都偏口语。书面用 de plus / en outre，par conséquent / c\'est pourquoi，en somme / en définitive。' },
    ],
    write: {
      prompt: '以 “Faut-il rendre les transports en commun gratuits ?”（公共交通应该免费吗？）为题，写一篇 150–200 字的议论文。至少使用 6 个不同功能的论证连接词（列举、补充、对照、让步、结果、总结各一个）。',
      model: "Faut-il rendre les transports en commun gratuits ? Plusieurs villes françaises, comme Dunkerque, ont déjà franchi le pas, et l'idée séduit de plus en plus.\n\nTout d'abord, la gratuité inciterait les automobilistes à laisser leur voiture au garage, ce qui réduirait les embouteillages et la pollution. De plus, elle profiterait aux ménages les plus modestes, pour qui le transport représente une dépense importante. En outre, elle supprimerait les coûts liés à la vente et au contrôle des billets.\n\nCertes, cette mesure a un prix : les recettes de la billetterie disparaissent et doivent être compensées par l'impôt. Par ailleurs, certains craignent que les réseaux, déjà saturés aux heures de pointe, ne le deviennent encore davantage. En revanche, l'exemple de Dunkerque montre que la fréquentation a fortement augmenté sans que la qualité du service se dégrade.\n\nPar conséquent, la gratuité me semble une piste intéressante, à condition d'investir parallèlement dans le réseau. En somme, ce n'est pas une solution miracle, mais c'est un levier efficace pour une ville plus durable.",
    },
  },
  {
    id: 'b2-12', emoji: '⛰️', title: '万一……', sub: 'au cas où · à condition que · à moins que · pourvu que', can: '能说明计划中的前提条件、例外情况和以防万一的安排', scene: null, grammar: ['g-hypothese'],
    words: [],
    newWords: [
      ['le refuge', 'lə ʁə.fyʒ', '（山间）避难小屋', "Nous avons dormi dans un refuge à 2 000 mètres.", '我们在海拔两千米的避难小屋里过了夜。', 'course'],
      ["l'orage (m.)", 'lɔ.ʁaʒ', '雷雨', "Un orage a éclaté en fin de journée.", '傍晚下起了雷雨。', 'course'],
      ['se couvrir', 'sə ku.vʁiʁ', '（天空）转阴；穿暖和', "Le ciel se couvre, il va pleuvoir.", '天阴下来了，要下雨了。', 'course'],
      ['la doudoune', 'la du.dun', '羽绒服', "N'oublie pas ta doudoune, il fait moins dix.", '别忘了羽绒服，零下十度呢。', 'course'],
      ['emporter', 'ɑ̃.pɔʁ.te', '随身带走', "Emporte une bouteille d'eau.", '带一瓶水走。', 'course'],
      ['faire demi-tour', 'fɛʁ də.mi.tuʁ', '掉头、折返', "On a dû faire demi-tour à cause de la neige.", '因为下雪，我们只好折返。', 'course'],
      ['la descente', 'la de.sɑ̃t', '下坡；下山', "La descente est plus fatigante que la montée.", '下山比上山还累。', 'course'],
      ['glissant · glissante', 'ɡli.sɑ̃ · ɡli.sɑ̃t', '滑的', "Attention, le sentier est glissant.", '小心，小路很滑。', 'course'],
      ['la veille', 'la vɛj', '前一天', "On peut annuler gratuitement jusqu'à la veille.", '提前一天以前都可以免费取消。', 'course'],
      ['là-haut', 'la.o', '在上面、在山上', "Là-haut, la vue est magnifique.", '上面的风景美极了。', 'course'],
      ['prendre des risques', 'pʁɑ̃dʁ de ʁisk', '冒险', "Il n'aime pas prendre des risques.", '他不喜欢冒险。', 'course'],
      ['de quoi + 原形', 'də kwa', '足够……的东西', "Prends de quoi lire pour le voyage.", '带点路上看的东西。', 'course'],
    ],
    dialogue: [
      ['Julien', "Alors, on monte au refuge demain ? Je propose qu'on parte à six heures, à condition que la météo soit bonne.", '那么，明天上山去避难小屋？我建议六点出发，前提是天气好。'],
      ['我', "D'accord. Mais au cas où il y aurait de l'orage l'après-midi, on fait quoi ?", '好的。但万一下午有雷雨，怎么办？'],
      ['Julien', "Si jamais le ciel se couvre, on fait demi-tour. En montagne, on ne prend pas de risques.", '要是天阴下来，我们就掉头。在山里可不能冒险。'],
      ['我', "Je prendrai quand même ma doudoune, au cas où il ferait froid là-haut.", '我还是带上羽绒服，以防山上冷。'],
      ['Julien', "Bonne idée. Et emporte de quoi manger pour deux jours, en cas de problème.", '好主意。再带上两天的吃的，以防出状况。'],
      ['我', "Deux jours ? Je croyais qu'on redescendait demain soir.", '两天？我还以为明晚就下山了。'],
      ['Julien', "Normalement, oui, à moins que la descente ne soit trop glissante. Dans ce cas, on dormirait au refuge.", '一般是的，除非下山的路太滑。那样的话我们就在小屋过夜。'],
      ['我', "En supposant qu'on doive dormir là-haut, il faudrait réserver, non ?", '假如真要在山上过夜，那得预订吧？'],
      ['Julien', "C'est déjà fait, quitte à annuler au dernier moment : c'est gratuit jusqu'à la veille.", '已经订好了，大不了最后关头取消：提前一天以前取消都免费。'],
      ['我', "Parfait. Pourvu qu'il fasse beau, alors !", '太好了。那就但愿天气好吧！'],
      ['Julien', "Et surtout, pourvu que tu te réveilles à l'heure !", '更重要的是，但愿你能按时起床！'],
    ],
    sentences: [
      ["Je propose qu'on parte à six heures, à condition que la météo soit bonne.", '我建议六点出发，前提是天气好。'],
      ["Prends ta doudoune au cas où il ferait froid là-haut.", '带上羽绒服，以防山上冷。'],
      ["Si jamais le ciel se couvre, on fait demi-tour.", '要是天阴下来，我们就掉头。'],
      ["On redescendra demain, à moins que la descente ne soit trop glissante.", '我们明天下山，除非下山的路太滑。'],
      ["Pourvu qu'il fasse beau demain !", '但愿明天天气好！'],
    ],
    cloze: [
      ["Prends un parapluie au cas où il ___.", ['pleuve', 'pleuvrait', 'pleut'], 1, '带把伞，万一下雨呢。', "au cas où 后面接条件式 pleuvrait，不接虚拟式（pleuve），也不接直陈式（pleut）"],
      ["Je te prête ma voiture, à condition que tu ___ prudent.", ['es', 'seras', 'sois'], 2, '我把车借给你，前提是你要小心。', "à condition que + 虚拟式：sois"],
      ["Nous partirons demain, à moins que le train ne ___ supprimé.", ['soit', 'est', 'serait'], 0, '我们明天出发，除非火车停运。', "à moins que + 虚拟式；这里的 ne 是虚词，没有否定意思"],
      ["___ tu changes d'avis, appelle-moi.", ['Au cas où', 'Si jamais', 'Pourvu que'], 1, '万一你改主意了，给我打电话。', "si jamais 和 si 一样接直陈式现在时；au cas où 要接条件式（changerais）；pourvu que 意思是“但愿 / 只要”，这里不通"],
      ["J'accepte de vous aider, à condition ___ être payé.", ['que', 'de', 'à'], 1, '我愿意帮您，前提是要付我报酬。', "主语相同（都是“我”）时用 à condition de + 原形"],
      ["___ d'incendie, n'utilisez pas l'ascenseur.", ['En cas', 'Au cas', 'Si jamais'], 0, '如遇火灾，请勿使用电梯。', "en cas de + 无冠词名词，常见于告示；au cas où、si jamais 后面要接从句"],
    ],
    discover: [
      { q: "“Je viendrai, à moins qu'il ne pleuve.” 是什么意思？", opts: ['我会来，除非下雨', '我会来，除非不下雨', '只要下雨我就来'], a: 0, why: 'à moins que 后面的 ne 是虚词 ne（ne explétif），没有否定意义。口语里常省略：à moins qu\'il pleuve。' },
      { q: "“Pourvu qu'il ne soit pas en retard !” 这里的 pourvu que 是？", opts: ['但愿', '只要', '因为'], a: 0, why: 'pourvu que 单独成句、带感叹号时表示愿望“但愿”；接在主句后面时表示条件“只要”：Tout ira bien, pourvu que tu sois là.' },
    ],
    write: {
      prompt: '你负责组织部门约 30 人的户外团建（sortie d’équipe）。给全体同事写一封 120–200 字的通知邮件：说明安排，并交代各种“万一”的情况（天气、迟到、不想走路、身体不适等）。至少用到 au cas où、à condition que、à moins que、si jamais、en cas de 中的四个。',
      model: "Objet : Sortie d'équipe du vendredi 14 juin\n\nBonjour à tous,\n\nComme prévu, notre sortie d'équipe aura lieu vendredi prochain dans le massif de la Chartreuse. Le car partira du bureau à 8 h précises ; si jamais vous avez un empêchement de dernière minute, prévenez-moi avant 7 h 30 pour que nous ne vous attendions pas.\n\nAu programme : une randonnée facile le matin, puis un déjeuner dans un refuge. La randonnée sera maintenue à condition que la météo le permette. En cas d'orage, nous la remplacerons par la visite du musée de la Grande Chartreuse. Pensez à emporter de bonnes chaussures, de l'eau et un imperméable, au cas où il pleuvrait.\n\nCeux qui ne souhaitent pas marcher pourront rejoindre directement le refuge en voiture, à moins qu'ils ne préfèrent rester au musée. Enfin, si vous suivez un traitement médical ou si vous avez une allergie alimentaire, merci de me le signaler d'ici mercredi.\n\nBonne fin de semaine,\nLin",
    },
  },
  {
    id: 'b2-13', emoji: '🐰', title: '地道表达', sub: '常用习语', can: '能听懂并恰当使用法国人日常最常用的习语', scene: null, grammar: ['g-expressions'],
    words: [],
    newWords: [
      ['avoir le cafard', 'a.vwaʁ lə ka.faʁ', '心情低落（字面：有只蟑螂）', "Le dimanche soir, j'ai souvent le cafard.", '周日晚上我常常心情低落。', 'course'],
      ['poser un lapin à qqn', 'po.ze œ̃ la.pɛ̃ a', '放某人鸽子（字面：放只兔子）', "Il m'a posé un lapin samedi.", '他周六放了我鸽子。', 'course'],
      ['coûter les yeux de la tête', 'ku.te le zjø də la tɛt', '贵得要命（字面：值头上的眼睛）', "Cet appartement coûte les yeux de la tête.", '这套公寓贵得离谱。', 'course'],
      ['avoir du pain sur la planche', 'a.vwaʁ dy pɛ̃ syʁ la plɑ̃ʃ', '有一大堆活要干（字面：案板上有面包）', "Avec ce nouveau projet, on a du pain sur la planche.", '有了这个新项目，我们有得忙了。', 'course'],
      ['tomber à pic', 'tɔ̃.be a pik', '来得正是时候', "Ta prime tombe à pic !", '你这笔奖金来得太及时了！', 'course'],
      ['être dans la lune', 'ɛtʁ dɑ̃ la lyn', '心不在焉（字面：在月亮里）', "Pendant le cours, il était complètement dans la lune.", '上课时他完全在走神。', 'course'],
      ['mettre les pieds dans le plat', 'mɛtʁ le pje dɑ̃ lə pla', '说话冒失、捅破不该说的事（字面：把脚踩进菜盘）', "Il a mis les pieds dans le plat en parlant de son ex.", '他冒冒失失地提起了她的前任。', 'course'],
      ['il pleut des cordes', 'il plø de kɔʁd', '下倾盆大雨（字面：天上下绳子）', "Prends un parapluie, il pleut des cordes.", '带把伞，外面下大雨。', 'course'],
      ['avoir un poil dans la main', 'a.vwaʁ œ̃ pwal dɑ̃ la mɛ̃', '非常懒（字面：手心长毛）', "Mon colocataire a un poil dans la main.", '我的室友懒得出奇。', 'course'],
      ['raconter des salades', 'ʁa.kɔ̃.te de sa.lad', '胡编乱造（字面：讲沙拉）', "Arrête de me raconter des salades !", '别跟我胡扯了！', 'course'],
      ['se creuser la tête', 'sə kʁø.ze la tɛt', '绞尽脑汁（字面：挖脑袋）', "Je me suis creusé la tête pour trouver un cadeau.", '我绞尽脑汁想送什么礼物。', 'course'],
      ['tomber dans les pommes', 'tɔ̃.be dɑ̃ le pɔm', '晕倒（字面：掉进苹果堆）', "Il faisait si chaud qu'elle est tombée dans les pommes.", '天太热了，她晕倒了。', 'course'],
    ],
    dialogue: [
      ['Sophie', "Ça n'a pas l'air d'aller… Tu as le cafard ?", '你看起来不太好……心情不好吗？'],
      ['我', "Un peu. Hier soir, Julien m'a posé un lapin : je l'ai attendu une heure devant le cinéma, et il pleuvait des cordes !", '有点。昨晚朱利安放了我鸽子：我在电影院门口等了他一个小时，还下着倾盆大雨！'],
      ['Sophie', "Sans blague ? Et qu'est-ce qu'il t'a raconté comme excuse ?", '不是吧？他给你找了什么借口？'],
      ['我', "Qu'il s'était endormi devant la télé. À mon avis, il me raconte des salades.", '说他在电视机前睡着了。我看他是在胡扯。'],
      ['Sophie', "Bof, tu sais, Julien est toujours dans la lune. Il a dû oublier, tout simplement.", '唉，你知道的，朱利安总是心不在焉。他八成就是忘了。'],
      ['我', "Peut-être. En plus, j'avais réservé dans un restaurant qui coûte les yeux de la tête.", '也许吧。而且我还订了一家贵得要命的餐厅。'],
      ['Sophie', "Aïe. Bon, tu tombes à pic : je vais au cinéma ce soir, tu viens avec moi ?", '哎哟。好吧，你来得正好：我今晚去看电影，跟我一起去？'],
      ['我', "J'aimerais bien, mais j'ai du pain sur la planche. Je dois finir un rapport pour demain.", '我很想去，但手头一大堆活。明天之前得写完一份报告。'],
      ['Sophie', "Allez, viens, ça te changera les idées ! Tu te creuseras la tête sur ton rapport demain matin.", '走吧，来嘛，换换心情！报告明早再绞尽脑汁也不迟。'],
      ['我', "Bon, d'accord. Mais si tu croises Julien, ne mets pas les pieds dans le plat, hein !", '好吧。不过要是碰到朱利安，你可别乱说话啊！'],
    ],
    sentences: [
      ["Julien m'a posé un lapin hier soir.", '朱利安昨晚放了我鸽子。'],
      ["Ce restaurant coûte les yeux de la tête.", '这家餐厅贵得要命。'],
      ["Tu tombes à pic, j'avais besoin d'aide.", '你来得正好，我正需要帮忙。'],
      ["J'ai du pain sur la planche cette semaine.", '这周我有一大堆活要干。'],
      ["Ne mets pas les pieds dans le plat !", '别乱说话！'],
    ],
    cloze: [
      ["Il m'a ___ un lapin : je l'ai attendu deux heures !", ['donné', 'posé', 'lâché'], 1, '他放了我鸽子：我等了他两个小时！', "固定搭配 poser un lapin à qqn，动词不能换"],
      ["Ce sac coûte les yeux de ___.", ['la tête', 'la main', 'la bouche'], 0, '这个包贵得要命。', "固定说法 coûter les yeux de la tête"],
      ["Depuis qu'il a déménagé, il a le ___ : il ne connaît personne.", ['lapin', 'cafard', 'poil'], 1, '搬家以后他心情低落：谁都不认识。', "avoir le cafard = 郁闷、情绪低落"],
      ["Mon frère ne fait jamais rien à la maison, il a un ___ dans la main.", ['cheveu', 'pied', 'poil'], 2, '我哥在家什么都不干，懒得出奇。', "avoir un poil dans la main = 很懒；avoir un cheveu sur la langue 是“大舌头”，另一个习语"],
      ["Prends un parapluie, il pleut des ___ !", ['chats', 'cordes', 'seaux'], 1, '带把伞，外面下大雨！', "法语说 il pleut des cordes（也说 il pleut à verse / à seaux）；des chats 是照搬英语 raining cats and dogs"],
      ["Tu es ___, tu n'as rien écouté de ce que j'ai dit !", ['dans la lune', 'sur la lune', 'à la lune'], 0, '你在走神吧，我说的你一句都没听！', "固定说法 être dans la lune，介词不能换"],
    ],
    discover: [
      { q: '中文“放鸽子”，法语怎么说？', opts: ['poser un lapin', 'lâcher un pigeon', 'faire le pigeon'], a: 0, why: '法语用“兔子”：poser un lapin à qqn。faire le pigeon 不是固定说法；être le pigeon 反而是“当冤大头”。俗语不能逐字翻译。' },
      { q: "在正式报告里，“Le projet coûte les yeux de la tête.” 最好改成？", opts: ['Le projet représente un coût très élevé.', 'Le projet coûte un œil de la tête.', 'Le projet coûte les yeux de sa tête.'], a: 0, why: '习语属于日常口语，正式文体换成普通表达；另外习语形式固定，不能改成 un œil 或 sa tête。' },
    ],
    write: {
      prompt: '写一段 120–200 字的小故事，讲讲某个“倒霉的一天”（真实或虚构都可以），自然地用上至少 5 个本课习语，注意动词变位和代词位置。',
      model: "Vendredi dernier, tout a mal commencé. Je me suis réveillé en retard et, évidemment, il pleuvait des cordes. Au bureau, ma cheffe m'a rappelé que nous avions du pain sur la planche : le rapport annuel devait être prêt le soir même. J'ai passé la journée à me creuser la tête sur des chiffres incompréhensibles. Mon collègue Hugo, qui a un poil dans la main, n'a bien sûr rien fait pour m'aider. Pire encore, pendant la réunion, il a mis les pieds dans le plat en annonçant devant tout le monde que notre budget allait être réduit. À dix-neuf heures, j'avais rendez-vous avec une amie dans un restaurant qui coûte les yeux de la tête. Je l'ai attendue quarante minutes : elle m'a posé un lapin. En rentrant chez moi, j'avais franchement le cafard. Heureusement, mon colocataire avait préparé des crêpes. Il est vraiment tombé à pic !",
    },
  },
  {
    id: 'b2-14', emoji: '📰', title: '读评论文章', sub: '无人称结构与客观表达', can: '能读懂报刊评论，并用无人称结构客观地提出判断', scene: null, grammar: ['g-impersonnel'],
    words: [],
    newWords: [
      ['le surtourisme', 'lə syʁ.tu.ʁism', '过度旅游', "Venise est le symbole du surtourisme.", '威尼斯是过度旅游的象征。', 'course'],
      ['la fréquentation', 'la fʁe.kɑ̃.ta.sjɔ̃', '客流量、访问量', "La fréquentation du musée a doublé en dix ans.", '博物馆的客流量十年间翻了一番。', 'course'],
      ['saturé · saturée', 'sa.ty.ʁe', '饱和的、挤爆的', "En août, les plages sont saturées.", '八月份海滩人满为患。', 'course'],
      ['la flambée', 'la flɑ̃.be', '（价格）飞涨', "La flambée des loyers chasse les familles.", '房租飞涨把家庭赶走了。', 'course'],
      ['les retombées (f. pl.)', 'le ʁə.tɔ̃.be', '（带来的）效益、影响', "Le festival a des retombées économiques importantes.", '这个节日带来了可观的经济效益。', 'course'],
      ['réguler', 'ʁe.ɡy.le', '调节、监管', "Il faut réguler la location de courte durée.", '需要监管短租。', 'course'],
      ['le patrimoine', 'lə pa.tʁi.mwan', '（文化）遗产', "Ce château fait partie du patrimoine mondial.", '这座城堡是世界遗产的一部分。', 'course'],
      ['le quota', 'lə kɔ.ta', '配额、限额', "Le site impose un quota de visiteurs par jour.", '景区实行每日游客限额。', 'course'],
      ['concilier', 'kɔ̃.si.lje', '兼顾、调和', "Il est difficile de concilier travail et vie de famille.", '工作和家庭生活很难兼顾。', 'course'],
      ['plafonner', 'pla.fɔ.ne', '设上限；封顶', "La ville a plafonné le nombre de nuitées.", '该市对过夜数设了上限。', 'course'],
      ['hors saison', 'ɔʁ sɛ.zɔ̃', '淡季', "Les prix sont plus bas hors saison.", '淡季价格更低。', 'course'],
      ['diaboliser', 'dja.bɔ.li.ze', '妖魔化', "Il ne faut pas diaboliser les touristes.", '不应该妖魔化游客。', 'course'],
    ],
    dialogue: [
      ['', "Venise, Barcelone, Dubrovnik : chaque été, les mêmes images de ruelles saturées font la une des journaux.", '威尼斯、巴塞罗那、杜布罗夫尼克：每年夏天，同样挤爆的小巷画面都会登上报纸头条。'],
      ['', "Force est de constater que le surtourisme n'est plus un phénomène marginal. Dans certains quartiers, les habitants ont tout simplement disparu, chassés par la flambée des loyers.", '不得不承认，过度旅游已不再是边缘现象。在某些街区，居民干脆消失了，被飞涨的房租赶走。'],
      ['', "Il ne s'agit pas pour autant de diaboliser le tourisme. Il convient de rappeler que ce secteur fait vivre des milliers de familles.", '但这并不是要妖魔化旅游业。有必要指出，这个行业养活着成千上万的家庭。'],
      ['', "La question est plutôt de savoir comment concilier ces retombées économiques avec la vie quotidienne des habitants.", '问题更在于：如何兼顾这些经济效益和居民的日常生活。'],
      ['', "Certaines villes ont choisi d'agir. Venise fait désormais payer un droit d'entrée aux visiteurs d'un jour ; Amsterdam a plafonné les locations touristiques à trente nuits par an.", '一些城市已经采取行动。威尼斯如今向一日游游客收取入城费；阿姆斯特丹把旅游短租限制在每年三十晚。'],
      ['', "Il est évident que ces mesures ne suffiront pas à elles seules. Il est en revanche indispensable que les pouvoirs publics régulent la fréquentation des sites les plus fragiles.", '显然，单靠这些措施是不够的。但公共部门必须对最脆弱景点的客流量加以调控。'],
      ['', "Il importe également de mieux répartir les flux : encourager les séjours hors saison, faire découvrir des régions moins connues.", '同样重要的是更好地分散客流：鼓励淡季出游，推介知名度较低的地区。'],
      ['', "Il n'en demeure pas moins que les quotas soulèvent une question délicate : le patrimoine doit-il devenir un privilège réservé à ceux qui peuvent payer ?", '尽管如此，限额仍带来一个棘手的问题：文化遗产难道要变成只属于付得起钱的人的特权吗？'],
      ['', "Il est donc nécessaire que chaque mesure soit pensée avec les habitants, et non contre eux.", '因此，每项措施都必须和居民一起制定，而不是与他们作对。'],
      ['', "Reste à savoir si les touristes eux-mêmes accepteront de changer leurs habitudes. Il en va pourtant de la survie des lieux qu'ils prétendent aimer.", '还有待观察的是游客自己是否愿意改变习惯。而这关系到他们口口声声热爱的那些地方的存亡。'],
    ],
    sentences: [
      ["Force est de constater que le surtourisme n'est plus un phénomène marginal.", '不得不承认，过度旅游已不再是边缘现象。'],
      ["Il ne s'agit pas de diaboliser le tourisme.", '这并不是要妖魔化旅游业。'],
      ["Il convient de rappeler que ce secteur fait vivre des milliers de familles.", '有必要指出，这个行业养活着成千上万的家庭。'],
      ["Il est indispensable que les pouvoirs publics régulent la fréquentation.", '公共部门必须对客流量加以调控。'],
      ["Reste à savoir si les touristes accepteront de changer leurs habitudes.", '还有待观察游客是否愿意改变习惯。'],
    ],
    cloze: [
      ["Il est indispensable que la ville ___ des mesures rapidement.", ['prend', 'prenne', 'prendra'], 1, '市政府必须尽快采取措施。', "il est indispensable que 表示必要，接虚拟式 prenne"],
      ["Il est évident que cette mesure ne ___ pas.", ['suffise', 'suffire', 'suffira'], 2, '显然这项措施是不够的。', "il est évident que 表示确定，接直陈式；不要一看到 il est … que 就用虚拟式"],
      ["Cet article ___ du tourisme de masse.", ["s'agit", 'traite', 'agit'], 1, '这篇文章讨论大众旅游。', "s'agir de 只能用无人称 il（Dans cet article, il s'agit de…）；以文章为主语要用 traiter de / parler de"],
      ["Il ___ de rappeler que le tourisme crée des emplois.", ['faut', 'convient', 'agit'], 1, '有必要指出，旅游业创造了就业。', "il convient de + 原形 = 宜、应当；il faut 后面直接接原形，不加 de；s'agir 少了 se"],
      ["___ est de constater que les habitants quittent le centre.", ['Force', 'Il', 'Ce'], 0, '不得不承认，居民正在离开市中心。', "固定套语 force est de constater que，没有主语 il"],
      ["Il me semble que cette mesure ___ efficace.", ['soit', 'est', 'être'], 1, '在我看来，这项措施是有效的。', "il me semble que 表达个人看法，接直陈式；无人称的 il semble que 才通常接虚拟式"],
    ],
    discover: [
      { q: '“Il est important que …” 和 “Il est clair que …” 后面分别用什么语式？', opts: ['虚拟式；直陈式', '都用虚拟式', '直陈式；虚拟式'], a: 0, why: '表示必要、评价、可能的形容词（important, nécessaire, possible…）接虚拟式；表示确定的（clair, évident, certain, vrai, probable）接直陈式。' },
      { q: '哪一句是正确的？', opts: ["Dans ce roman, il s'agit d'une famille ruinée.", "Ce roman s'agit d'une famille ruinée.", "Ce roman il s'agit d'une famille ruinée."], a: 0, why: 's\'agir de 是无人称动词，主语只能是 il。想以小说为主语，就说 Ce roman raconte l\'histoire d\'une famille ruinée.' },
    ],
    write: {
      prompt: '为一份法语地方报纸写一篇 150–200 字的评论短文：“Faut-il limiter le nombre de touristes dans les lieux célèbres ?”（可以以故宫、黄山、圣米歇尔山等为例）。至少使用 5 个无人称结构（il est nécessaire que、il s’agit de、il convient de、force est de constater que、il n’en demeure pas moins que 等）。',
      model: "Chaque année, pendant les congés de la fête nationale, des centaines de milliers de visiteurs se pressent sur les sentiers du mont Huang. Force est de constater que, certains jours, la promenade ressemble davantage à une file d'attente qu'à une découverte de la nature. Faut-il pour autant limiter l'accès aux sites célèbres ?\n\nIl convient d'abord de reconnaître que le tourisme fait vivre des régions entières. Il ne s'agit donc pas de fermer les portes, mais de mieux organiser les visites. La Cité interdite l'a bien compris : la réservation y est obligatoire et le nombre d'entrées quotidiennes est plafonné. Il est indéniable que l'expérience des visiteurs s'en trouve améliorée.\n\nIl n'en demeure pas moins que les quotas risquent de pénaliser ceux qui ne peuvent pas réserver longtemps à l'avance, comme les personnes âgées peu familières des applications. Il est donc nécessaire que les autorités maintiennent une partie des billets en vente sur place. En somme, limiter, oui, mais sans exclure.",
    },
  },
  {
    id: 'b2-15', emoji: '🤝', title: '会议与谈判', sub: '职场委婉表达', can: '能在会议和谈判中委婉地提出异议、建议和条件，同时守住立场', scene: null, grammar: ['g-nuance'],
    words: [],
    newWords: [
      ['le devis', 'lə də.vi', '报价单', "Pourriez-vous nous envoyer un devis détaillé ?", '能给我们发一份详细的报价单吗？', 'course'],
      ['le cahier des charges', 'lə ka.je de ʃaʁʒ', '（项目）需求说明书、技术规格书', "Le produit doit respecter le cahier des charges.", '产品必须符合需求说明书。', 'course'],
      ['la remise', 'la ʁə.miz', '折扣', "Nous vous accordons une remise de 5 %.", '我们给您 5% 的折扣。', 'course'],
      ['le délai', 'lə de.lɛ', '期限；所需时间', "Quel est le délai de livraison ?", '交货期是多久？', 'course'],
      ['le geste commercial', 'lə ʒɛst kɔ.mɛʁ.sjal', '（商业上的）让利、优惠', "Pour s'excuser du retard, ils ont fait un geste commercial.", '为了对延误表示歉意，他们给了些优惠。', 'course'],
      ['envisageable', 'ɑ̃.vi.za.ʒabl', '可以考虑的', "Une hausse des prix n'est pas envisageable cette année.", '今年涨价是不可考虑的。', 'course'],
      ["s'engager à", 'sɑ̃.ɡa.ʒe a', '承诺、保证（做某事）', "Nous nous engageons à livrer sous quinze jours.", '我们承诺十五天内交货。', 'course'],
      ['en contrepartie', 'ɑ̃ kɔ̃.tʁə.paʁ.ti', '作为交换、作为回报', "Nous baissons le prix ; en contrepartie, vous commandez davantage.", '我们降价；作为交换，您多订货。', 'course'],
      ['revoir à la hausse / à la baisse', 'ʁə.vwaʁ a la os · a la bɛs', '上调 / 下调', "Nos prévisions ont été revues à la baisse.", '我们的预测被下调了。', 'course'],
      ['le concurrent · la concurrente', 'lə kɔ̃.ky.ʁɑ̃ · la kɔ̃.ky.ʁɑ̃t', '竞争对手', "Notre concurrent a baissé ses prix.", '我们的竞争对手降价了。', 'course'],
      ["la période d'essai", 'la pe.ʁjɔd de.sɛ', '试用期', "Le contrat prévoit une période d'essai de trois mois.", '合同规定了三个月的试用期。', 'course'],
      ['préoccuper', 'pʁe.ɔ.ky.pe', '让……担忧', "Ce retard nous préoccupe beaucoup.", '这次延误让我们很担忧。', 'course'],
    ],
    dialogue: [
      ['Mme Lefèvre', "Merci d'être venu. Nous avons bien reçu votre devis, mais je me permets d'être franche : le prix nous paraît un peu élevé.", '感谢您前来。您的报价单我们收到了，不过请允许我直说：我们觉得价格有点高。'],
      ['我', "Je comprends tout à fait. Il me semble néanmoins que nos tarifs reflètent la qualité des matériaux prévus dans le cahier des charges.", '完全理解。不过在我看来，我们的价格体现了需求说明书里规定的材料质量。'],
      ['Mme Lefèvre', "Certes, mais sauf erreur de ma part, votre concurrent propose une remise de 10 % pour le même volume.", '话是没错，但如果我没弄错的话，贵司的竞争对手同样的量给 10% 的折扣。'],
      ['我', "Si je ne m'abuse, son offre n'inclut pas la maintenance. Cela dit, nous pourrions envisager un geste commercial.", '如果我没记错，他们的报价不含维护服务。话虽如此，我们可以考虑给些优惠。'],
      ['M. Garnier', "Ce qui nous préoccupe surtout, ce sont les délais. Six semaines, ce serait difficile pour nous.", '我们最担心的其实是期限。六周的话，对我们来说恐怕有困难。'],
      ['我', "Je vois. Ne serait-il pas envisageable de répartir la livraison en deux fois ? Une première moitié dans trois semaines, le reste un mois plus tard.", '明白。能不能考虑分两批交货？三周后先交一半，剩下的一个月后再交。'],
      ['M. Garnier', "Ce n'est pas tout à fait ce que nous avions en tête, mais pourquoi pas, à condition que la première livraison soit garantie.", '这和我们的设想不完全一样，不过也可以，前提是第一批能保证按时交付。'],
      ['我', "Nous pouvons nous y engager. En contrepartie, nous souhaiterions un engagement sur un volume annuel.", '这一点我们可以承诺。作为交换，我们希望贵司能承诺一个年度订货量。'],
      ['Mme Lefèvre', "Je vois les choses un peu différemment : nous préférerions d'abord une période d'essai de six mois.", '我的看法稍有不同：我们更希望先有六个月的试用期。'],
      ['我', "J'entends bien. Je vous propose alors une remise de 5 % pendant la période d'essai, revue à la hausse si vous vous engagez ensuite sur l'année.", '我明白。那我建议试用期内给 5% 的折扣，如果之后贵司签下全年订单，折扣再上调。'],
      ['Mme Lefèvre', "Cela me semble être une bonne base de discussion. Pourriez-vous nous envoyer un devis révisé d'ici vendredi ?", '我觉得这是个不错的讨论基础。您能在周五前给我们发一份修改后的报价单吗？'],
      ['我', "Bien sûr. Je me permets même de vous l'adresser dès demain.", '当然。我明天就给您发过去。'],
    ],
    sentences: [
      ["Sauf erreur de ma part, votre concurrent propose une remise de 10 %.", '如果我没弄错的话，贵司的竞争对手给 10% 的折扣。'],
      ["Il me semble que nos tarifs reflètent la qualité des matériaux.", '在我看来，我们的价格体现了材料的质量。'],
      ["Ne serait-il pas envisageable de répartir la livraison en deux fois ?", '能不能考虑分两批交货？'],
      ["Je vois les choses un peu différemment.", '我的看法稍有不同。'],
      ["Je me permets de vous adresser le devis dès demain.", '我明天就把报价单发给您。'],
    ],
    cloze: [
      ["___ erreur de ma part, le contrat prévoit une pénalité de retard.", ['Sans', 'Sauf', 'Malgré'], 1, '如果我没弄错的话，合同规定了延误罚金。', "固定说法 sauf erreur de ma part（如果我没弄错）；sans erreur 是“无误地”，malgré 是“尽管”"],
      ["Je me ___ de vous relancer concernant notre proposition.", ['permets', 'autorise', 'laisse'], 0, '冒昧再次就我们的提案联系您。', "固定表达 je me permets de + 原形；s'autoriser 后接 à，se laisser 意思不对"],
      ["En réunion, plutôt que « Vous avez tort », on dira : « Je ne suis pas ___ d'accord. »", ['du tout', 'tout à fait', 'vraiment pas'], 1, '会上与其说“您错了”，不如说“我不完全同意”。', "pas tout à fait d'accord（不完全同意）是缓和说法；pas du tout d'accord 和 vraiment pas d'accord 反而更强烈"],
      ["Nous ___ une remise de 5 % si vous vous engagiez sur un an.", ['pourrons envisager', 'pouvons envisager', 'pourrions envisager'], 2, '如果您能签一年，我们可以考虑给 5% 的折扣。', "si + 未完成过去时 → 主句用条件式；条件式本身也让提议显得更委婉"],
      ["Nous baissons le prix ; ___, nous souhaiterions une commande plus importante.", ['en contrepartie', 'en revanche', 'au contraire'], 0, '我们降价；作为交换，我们希望订单量更大。', "en contrepartie = 作为交换（谈判中提条件）；en revanche 是“相比之下”，au contraire 是“恰恰相反”"],
      ["Six semaines, ce ___ difficile pour nous.", ['sera', 'serait', 'soit'], 1, '六周的话，对我们来说恐怕有困难。', "用条件式 serait 缓和拒绝；sera 太肯定、生硬；soit 是虚拟式，不能单独做主句谓语"],
    ],
    discover: [
      { q: "谈判中说 “Sauf erreur de ma part, le prix convenu était de 12 euros.” 实际意图通常是？", opts: ['礼貌地指出对方弄错了', '承认自己犯了错', '请求对方原谅'], a: 0, why: '表面上是“如果我没弄错的话”，实际上是给对方留面子地纠正对方，同时坚持自己的说法。' },
      { q: '哪种说法最适合在会议上提出建议？', opts: ['Ne serait-il pas envisageable de reporter la date ?', 'Il faut reporter la date.', 'Vous devez reporter la date.'], a: 0, why: '否定疑问句 + 条件式 + envisageable，是法国职场最典型的委婉建议；il faut、vous devez 太像命令。' },
    ],
    write: {
      prompt: '供应商来信说：原定下周交付的货物要推迟三周，而且价格要上涨 8%。以采购负责人的身份写一封 150–200 字的回信：表达不满但保持礼貌，指出对方与合同不符之处，提出替代方案，并要求对方在期限内答复。至少使用 4 个本课的委婉表达。',
      model: "Objet : Votre courriel du 3 mars – livraison et tarifs\n\nMadame,\n\nJe vous remercie de nous avoir informés de la situation. Je me permets toutefois de vous faire part de notre surprise. Sauf erreur de ma part, le contrat signé en janvier prévoit une livraison au plus tard le 15 mars, à un prix ferme pour l'année. Un retard de trois semaines, accompagné d'une hausse de 8 %, nous placerait dans une situation très délicate vis-à-vis de nos propres clients.\n\nJe comprends que l'augmentation du coût des matières premières pèse sur vos marges. Il me semble néanmoins difficile d'accepter une modification unilatérale des conditions. Ne serait-il pas envisageable de nous livrer dès la semaine prochaine une partie de la commande, disons 40 %, le reste suivant dans les délais que vous indiquez ? Nous pourrions par ailleurs rediscuter des tarifs lors du renouvellement du contrat.\n\nJe vous serais reconnaissant de bien vouloir me faire part de votre position d'ici vendredi.\n\nVeuillez agréer, Madame, l'expression de mes salutations distinguées.\n\nLin Wei\nResponsable des achats",
    },
  },
  {
    id: 'b2-16', emoji: '🤖', title: '议论：科技与社会', sub: 'B2 议论文综合', can: '能就科技与社会话题进行有结构的辩论，并写出完整的 B2 议论文', scene: null, grammar: ['g-synthese'],
    words: [],
    newWords: [
      ["l'intelligence artificielle (f.)", 'lɛ̃.tɛ.li.ʒɑ̃s aʁ.ti.fi.sjɛl', '人工智能', "L'intelligence artificielle transforme de nombreux métiers.", '人工智能正在改变许多职业。', 'course'],
      ['se substituer à', 'sə syp.sti.tɥe a', '取代', "Les machines ne peuvent pas se substituer aux médecins.", '机器无法取代医生。', 'course'],
      ['la triche', 'la tʁiʃ', '（口语）作弊', "La triche aux examens est sévèrement punie.", '考试作弊会受到严惩。', 'course'],
      ['illusoire', 'i.ly.zwaʁ', '不切实际的、虚幻的', "Il est illusoire de tout contrôler.", '想控制一切是不现实的。', 'course'],
      ["l'esprit critique (m.)", 'lɛs.pʁi kʁi.tik', '批判性思维', "L'école doit développer l'esprit critique des élèves.", '学校应该培养学生的批判性思维。', 'course'],
      ["l'enjeu (m.)", 'lɑ̃.ʒø', '关键问题、利害所在', "L'éducation est un enjeu majeur pour l'avenir.", '教育是关乎未来的重大问题。', 'course'],
      ['la fracture numérique', 'la fʁak.tyʁ ny.me.ʁik', '数字鸿沟', "La fracture numérique touche surtout les personnes âgées.", '数字鸿沟主要影响老年人。', 'course'],
      ['encadrer', 'ɑ̃.ka.dʁe', '规范、监管；指导', "L'usage des écrans doit être encadré.", '屏幕的使用应该加以规范。', 'course'],
      ['le garde-fou', 'lə ɡaʁd.fu', '护栏；（比喻）防范措施', "La loi doit prévoir des garde-fous.", '法律应该设置防范机制。', 'course'],
      ['inéluctable', 'i.ne.lyk.tabl', '不可避免的', "Le changement semble inéluctable.", '变化似乎不可避免。', 'course'],
      ["s'emparer de", 'sɑ̃.pa.ʁe də', '抓住、着手处理（话题、问题）', "Les députés se sont emparés de la question.", '议员们着手处理这个问题。', 'course'],
      ['rejoindre qqn sur', 'ʁə.ʒwɛ̃dʁ … syʁ', '在……上同意某人', "Je vous rejoins sur ce point.", '在这一点上我同意您。', 'course'],
    ],
    dialogue: [
      ['主持人', "Bonsoir à tous. Ce soir, une question qui divise : faut-il autoriser l'intelligence artificielle à l'école ? Madame Roux, vous êtes professeure de lettres.", '大家晚上好。今晚讨论一个很有争议的问题：学校应该允许使用人工智能吗？鲁女士，您是文学老师。'],
      ['Mme Roux', "Je ne suis pas opposée à la technologie, bien au contraire. Mais je crains que ces outils ne finissent par se substituer à la réflexion des élèves. Quand un devoir est rédigé en trente secondes, où est l'apprentissage ?", '我并不反对技术，恰恰相反。但我担心这些工具最终会取代学生的思考。一份作业三十秒就写完，学习体现在哪里？'],
      ['M. Bensaïd', "Je comprends cette inquiétude. Certes, la triche existe, mais elle existait bien avant l'IA. Interdire ces outils serait illusoire : les élèves les utilisent déjà chez eux.", '我理解这种担忧。诚然，作弊是存在的，但早在人工智能出现之前就有了。禁止这些工具是不现实的：学生在家里已经在用了。'],
      ['Mme Roux', "Justement ! Bien qu'ils s'en servent tous les jours, la plupart ne savent pas vérifier ce que la machine leur répond.", '正是如此！虽然他们天天在用，大多数人却不会核实机器给出的答案。'],
      ['M. Bensaïd', "C'est bien pourquoi il est essentiel que l'école s'en empare. Si l'on apprenait aux élèves à interroger l'IA, on développerait leur esprit critique au lieu de l'affaiblir.", '正因如此，学校必须主动接手这件事。如果教学生怎样向人工智能提问，就能培养而不是削弱他们的批判性思维。'],
      ['主持人', "Et la question de l'égalité ? Tous les élèves n'ont pas accès aux mêmes outils.", '那公平问题呢？并不是所有学生都能用上同样的工具。'],
      ['Mme Roux', "C'est un enjeu majeur. Si l'on n'y prend pas garde, la fracture numérique risque de s'aggraver encore.", '这是个重大问题。如果不加注意，数字鸿沟可能会进一步加深。'],
      ['M. Bensaïd', "Raison de plus pour que l'école fournisse ces outils à tous, à condition qu'ils soient encadrés : protection des données, transparence, garde-fous clairs.", '那就更有理由让学校为所有人提供这些工具，前提是加以规范：保护数据、保持透明、设置明确的防范机制。'],
      ['主持人', "Lin, vous êtes étudiant. Qu'en pensez-vous ?", '林，您是大学生。您怎么看？'],
      ['我', "Il me semble que les deux positions ne sont pas incompatibles. On ne saurait interdire un outil devenu inéluctable ; il n'en reste pas moins que les élèves doivent d'abord apprendre à penser par eux-mêmes.", '在我看来，两种立场并不矛盾。一个已经不可避免的工具是禁不住的；但学生首先必须学会独立思考，这一点依然成立。'],
      ['Mme Roux', "Je vous rejoins sur ce point : l'IA ne devrait intervenir qu'une fois les bases acquises.", '在这一点上我同意您：人工智能只应在打好基础之后再介入。'],
      ['主持人', "En somme, ni interdiction ni naïveté. Reste à savoir si l'école aura les moyens de former ses enseignants. Merci à tous.", '总之，既不一禁了之，也不盲目乐观。还有待观察的是，学校是否有能力培训教师。谢谢各位。'],
    ],
    sentences: [
      ["Je crains que ces outils ne se substituent à la réflexion des élèves.", '我担心这些工具会取代学生的思考。'],
      ["Certes, la triche existe, mais elle existait bien avant l'IA.", '诚然，作弊是存在的，但早在人工智能出现之前就有了。'],
      ["Interdire ces outils serait illusoire.", '禁止这些工具是不现实的。'],
      ["Il est essentiel que l'école s'empare de ces outils.", '学校必须主动接手这些工具。'],
      ["On ne saurait interdire un outil devenu inéluctable.", '一个已经不可避免的工具是禁不住的。'],
    ],
    cloze: [
      ["Bien que l'IA ___ des progrès, elle se trompe encore souvent.", ['fait', 'fasse', 'fera'], 1, '尽管人工智能在进步，它仍然经常出错。', "bien que + 虚拟式：fasse"],
      ["Je ne pense pas que cette interdiction ___ efficace.", ['soit', 'est', 'sera'], 0, '我不认为这项禁令会有效。', "否定的观点 je ne pense pas que 接虚拟式；肯定的 je pense que 才接直陈式"],
      ["Si l'on interdisait l'IA, les élèves l'___ quand même chez eux.", ['utiliseront', 'utilisaient', 'utiliseraient'], 2, '如果禁止人工智能，学生在家照样会用。', "si + 未完成过去时 → 主句用条件式现在时"],
      ["Aucun outil ne ___ remplacer un bon enseignant.", ['sait', 'saurait', 'saura'], 1, '任何工具都无法取代一位好老师。', "ne saurait + 原形 = ne peut pas，书面语，不加 pas；ne sait 意思是“不会（某技能）”"],
      ["___, ces outils posent des problèmes ; il n'en reste pas moins qu'ils sont utiles.", ['Ainsi', 'Certes', 'Par conséquent'], 1, '诚然，这些工具带来一些问题；但它们有用这一点依然成立。', "先让步再转折：certes …, il n'en reste pas moins que …；ainsi、par conséquent 表示结果"],
      ["Il est essentiel que l'école ___ les élèves à l'esprit critique.", ['formera', 'formerait', 'forme'], 2, '学校必须培养学生的批判性思维。', "il est essentiel que + 虚拟式：forme（这里是虚拟式，形式和直陈式相同）"],
    ],
    discover: [
      { q: '议论文的“让步与反驳”部分，下面哪种写法最好？', opts: ["Certes, l'IA facilite le travail des élèves ; il n'en reste pas moins qu'elle peut freiner l'apprentissage.", "L'IA est mauvaise, c'est tout.", "Du coup, l'IA, c'est pas top pour les élèves."], a: 0, why: '先承认对方的道理（certes），再用 il n\'en reste pas moins que 转回自己的立场；第二句没有论证，第三句是口语。' },
      { q: '“On ne saurait nier ce progrès.” 是什么意思？', opts: ['不能否认这一进步', '我们不知道怎样否认这一进步', '我们以后不会知道这一进步'], a: 0, why: 'ne saurait + 原形 是书面语，等于 ne peut pas，常用于议论文中的谨慎论断，不加 pas。' },
    ],
    write: {
      prompt: '以 “Les réseaux sociaux font-ils plus de mal que de bien aux adolescents ?” 为题，写一篇 160–200 字的 DELF B2 议论文：包括引言（提出问题）、正论、让步与反驳、结论。至少用到 2 个虚拟式、2 个条件式和 2 个让步表达。',
      model: "Aujourd'hui, la quasi-totalité des adolescents possède un compte sur au moins un réseau social. Faut-il s'en inquiéter, ou y voir une chance ?\n\nTout d'abord, il est indéniable que ces plateformes présentent des risques. Le cyberharcèlement, la comparaison permanente et la dépendance aux écrans fragilisent de nombreux jeunes.\n\nCertes, les réseaux sociaux permettent aussi de rester en contact avec ses amis, de découvrir des passions ou de s'engager pour une cause. Il serait donc injuste de les réduire à leurs dangers. Il n'en demeure pas moins que les adolescents n'ont pas toujours le recul nécessaire pour s'en protéger.\n\nC'est pourquoi il est essentiel que les parents et l'école les accompagnent, et que les plateformes soient davantage encadrées par la loi. Si l'on éduquait les jeunes au numérique dès le collège, ils en feraient sans doute un usage plus responsable.\n\nEn définitive, bien que les réseaux sociaux ne soient pas néfastes en eux-mêmes, ils font plus de mal que de bien lorsqu'ils sont utilisés sans repères. Reste à savoir si les géants du numérique accepteront de jouer le jeu.",
    },
  },
];
