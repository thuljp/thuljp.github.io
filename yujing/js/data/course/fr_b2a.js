// 法语核心课程 B2（上）：b2-01 … b2-08
// 格式见 docs/SYLLABUS.md 第二部分
// newWords：[词, 音标, 中文, 例句, 例句中文, 'course']；dialogue：[说话人, 法文, 中文]（'' = 旁白 / 课文）

export const grammar = [
  {
    id: 'g-subj-passe', title: '虚拟式过去时：已经发生的事 + 情感 / 怀疑',
    body: `<p><b>构成</b>：avoir 或 être 的<b>虚拟式现在时</b> + 过去分词。助动词的选择、过去分词的配合，和复合过去时完全一样。</p>
<table><tr><th></th><th>avoir 型（finir）</th><th>être 型（partir）</th></tr>
<tr><td>que je / j'</td><td>aie fini</td><td>sois parti(e)</td></tr>
<tr><td>que tu</td><td>aies fini</td><td>sois parti(e)</td></tr>
<tr><td>qu'il / elle</td><td>ait fini</td><td>soit parti(e)</td></tr>
<tr><td>que nous</td><td>ayons fini</td><td>soyons parti(e)s</td></tr>
<tr><td>que vous</td><td>ayez fini</td><td>soyez parti(e)(s)</td></tr>
<tr><td>qu'ils / elles</td><td>aient fini</td><td>soient parti(e)s</td></tr></table>
<p><b>什么时候用</b>：触发虚拟式的条件不变（情感、愿望、怀疑、必要、bien que 等），区别只在<b>时间关系</b>——从句的动作<b>先于</b>主句，或在某个时间点之前<b>已经完成</b>。</p>
<table><tr><th>虚拟式现在时：同时 / 之后</th><th>虚拟式过去时：之前 / 已完成</th></tr>
<tr><td>Je suis content que tu <b>viennes</b>.<br>我很高兴你（要）来。</td><td>Je suis content que tu <b>sois venu</b>.<br>我很高兴你来了（已经来过）。</td></tr>
<tr><td>Je doute qu'il <b>comprenne</b>.<br>我怀疑他能听懂。</td><td>Je doute qu'il <b>ait compris</b>.<br>我怀疑他（刚才）听懂了。</td></tr>
<tr><td>Il faut que tu <b>finisses</b> ce soir.<br>你今晚得做完。</td><td>Il faut que tu <b>aies fini</b> avant 18 h.<br>18 点之前必须已经做完。</td></tr></table>
<p><b>时间以主句为参照，而不是以"现在"为参照</b>：Je regrettais qu'il ne <b>soit</b> pas <b>venu</b>.（当时我遗憾他没来——"没来"发生在"遗憾"之前）。主句是过去时，从句照样用虚拟式现在时或过去时，不要"往后推"成愈过去时。文学作品里的虚拟式未完成过去时（qu'il vînt）和愈过去时（qu'il fût venu）只需认得。</p>
<p><b>其他常见场合</b></p>
<ul><li>最高级、le seul、le premier、le dernier + 关系从句（主观评价）：C'est le meilleur film que j'<b>aie</b> jamais <b>vu</b>.</li>
<li>否定或疑问的观点句：Je ne pense pas qu'elle <b>ait reçu</b> mon mail.／Ça m'étonnerait qu'il <b>ait oublié</b>.</li>
<li>bien que、avant que、jusqu'à ce que 等连词：Bien qu'il <b>ait</b> beaucoup <b>travaillé</b>, il a échoué.</li>
<li><b>après que</b> 规范上接<b>直陈式</b>（après qu'il <b>est parti</b>），口语里常听到虚拟式，但考试和正式写作请用直陈式。</li></ul>
<p><b>主语相同 → 用不定式过去式</b>（avoir / être + 过去分词）：Je suis content <b>d'être venu</b>（不说 ✗ que je sois venu）；Elle regrette <b>de ne pas avoir répondu</b>（ne pas 整体放在 avoir 前面）。</p>
<p><b>中国学习者常见错误</b></p>
<ul><li>✗ Je suis content que tu <b>es venu</b>. → 情感后面要虚拟式：que tu <b>sois venu</b>。</li>
<li>✗ que tu <b>aies venu</b> → venir 用 être：que tu <b>sois venu(e)</b>。</li>
<li>拼写：que j'<b>aie</b>、qu'il <b>ait</b>（虚拟式）≠ j'<b>ai</b>、il <b>a</b>（直陈式）。前两组读音相同，写作时最容易错。</li>
<li>✗ Je regrettais qu'il ne m'<b>avait</b> pas prévenu. → 情感动词决定语式，不受"过去时配合"影响：qu'il ne m'<b>ait</b> pas prévenu。</li></ul>`,
    ex: [["Je suis ravi que tu sois venu à ma fête.", "我很高兴你来参加了我的聚会。"], ["C'est le plus beau voyage que nous ayons jamais fait.", "这是我们做过的最美好的一次旅行。"], ["Il faut que vous ayez rendu le dossier avant vendredi.", "您必须在周五之前交齐材料。"], ["Je ne crois pas qu'elle ait reçu mon message.", "我不认为她收到了我的消息。"]],
  },
  {
    id: 'g-si-all', title: 'si 条件句的三种类型及混合句',
    body: `<p>法语"如果"句的铁律：<b>表示条件的 si 后面绝不用将来时和条件式</b>。时态组合取决于"现实程度"。中文的"如果"不分时态，所以动笔前先判断：可能实现？与现在事实相反？与过去事实相反？</p>
<table><tr><th>类型</th><th>si 从句</th><th>主句</th><th>含义</th></tr>
<tr><td>① 真实条件</td><td>présent（或 passé composé）</td><td>présent / futur / 命令式</td><td>有可能发生：Si tu as le temps, <b>passe</b> me voir.</td></tr>
<tr><td>② 假设现在 / 将来</td><td>imparfait</td><td>conditionnel présent</td><td>与现在事实相反或不太可能：Si j'<b>avais</b> le temps, je <b>viendrais</b>.</td></tr>
<tr><td>③ 假设过去</td><td>plus-que-parfait</td><td>conditionnel passé</td><td>与过去事实相反（后悔、责备）：Si j'<b>avais su</b>, je <b>serais venu</b>.</td></tr></table>
<p><b>混合句</b>：条件和结果不在同一个时间层面时，②③可以交叉组合，这是 B2 的重点。</p>
<table><tr><th>组合</th><th>逻辑</th><th>例句</th></tr>
<tr><td>si + plus-que-parfait → conditionnel présent</td><td>过去的条件 → 现在的结果</td><td>Si j'<b>avais accepté</b> ce poste, je <b>vivrais</b> à Montréal aujourd'hui.</td></tr>
<tr><td>si + imparfait → conditionnel passé</td><td>一贯的状态、性格 → 过去的结果</td><td>Si tu <b>étais</b> moins têtu, tu <b>aurais</b> déjà <b>accepté</b>.</td></tr></table>
<p>写混合句时以时间状语为线索：hier、l'an dernier 指向过去的条件 / 结果；aujourd'hui、maintenant、en ce moment 指向现在的结果。</p>
<p><b>相关结构</b></p>
<ul><li><b>même si</b>（即使）时态规则和 si 相同：Même si j'avais le temps, je n'irais pas.</li>
<li><b>si jamais</b>（万一）+ présent / imparfait：Si jamais tu changes d'avis, appelle-moi.</li>
<li><b>sans + 名词</b> 相当于否定条件：<b>Sans</b> ton aide, je n'aurais pas réussi.（= si tu ne m'avais pas aidé）</li>
<li>单独一个 <b>si + imparfait ?</b> 表示建议：<b>Si on allait</b> au cinéma ?（咱们去看电影吧？）；<b>Si seulement</b> + plus-que-parfait ! 表示遗憾：Si seulement j'avais su !</li></ul>
<p><b>例外：si 表示"是否"时不受限制</b>。间接疑问句里的 si 可以接将来时、条件式：Je me demande s'il <b>viendra</b>.（我想知道他会不会来）——这不是条件句。</p>
<p><b>常见错误</b></p>
<ul><li>✗ Si j'<b>aurais</b> su… → Si j'<b>avais</b> su…（法国小孩也常犯，"Si j'aurais su, j'aurais pas venu"成了一句有名的笑话）</li>
<li>✗ Si tu <b>viendras</b> demain… → Si tu <b>viens</b> demain, on ira au marché.</li>
<li>把"假设"误写成第①类：Si j'ai un million, j'achète une île 听起来像真有可能；不太现实的事用第②类：Si j'<b>avais</b> un million, j'<b>achèterais</b>…</li></ul>`,
    ex: [["Si tu as le temps demain, passe me voir.", "如果你明天有空，来看看我吧。"], ["Si j'avais plus d'argent, je voyagerais davantage.", "如果我钱多一些，我会更常去旅行。"], ["Si nous étions partis plus tôt, nous n'aurions pas raté le train.", "要是我们早点出发，就不会错过火车了。"], ["Si j'avais accepté ce poste, je vivrais au Canada aujourd'hui.", "要是当初接受了那个职位，我现在就住在加拿大了。"]],
  },
  {
    id: 'g-ps', title: '简单过去时：读懂书面叙事',
    body: `<p>简单过去时（passé simple）是<b>书面叙事</b>的时态：小说、童话、历史、传记里讲述过去的事件。意思和复合过去时相同，但把事件和"现在"切断，带文学色彩。<b>日常说话、写邮件从来不用它</b>。B2 的目标是<b>读得懂</b>，并能写简单的第三人称叙述。</p>
<p><b>四组词尾</b>（实际最常见的是第三人称 il / elle / ils / elles）</p>
<table><tr><th>类型</th><th>词尾</th><th>例子</th></tr>
<tr><td>-a 型：所有 -er 动词（包括 aller）</td><td>-ai, -as, <b>-a</b>, -âmes, -âtes, <b>-èrent</b></td><td>il parla, elle alla, ils entrèrent</td></tr>
<tr><td>-i 型：-ir、-re 规则动词和许多不规则动词</td><td>-is, -is, <b>-it</b>, -îmes, -îtes, <b>-irent</b></td><td>il finit, il attendit, il fit (faire), il dit, il vit (voir), il prit, il mit, il écrivit, il naquit (naître)</td></tr>
<tr><td>-u 型：多为过去分词以 -u 结尾的动词</td><td>-us, -us, <b>-ut</b>, -ûmes, -ûtes, <b>-urent</b></td><td>il eut (avoir), il fut (être), il put, il voulut, il sut, il dut, il lut, il connut, il crut, il vécut (vivre), il mourut</td></tr>
<tr><td>-in 型：venir、tenir 及其派生词</td><td>-ins, -ins, <b>-int</b>, -înmes, -întes, <b>-inrent</b></td><td>il vint, ils revinrent, elle tint</td></tr></table>
<p><b>认词技巧</b>：过去分词以 -i 结尾 → 多为 -it（fini → il finit，pris → il prit）；以 -u 结尾 → 多为 -ut（lu → il lut，voulu → il voulut）。例外单独记：<b>être → il fut</b>，<b>faire → il fit</b>，<b>voir → il vit</b>，<b>naître → il naquit</b>，<b>mourir → il mourut</b>，<b>vivre → il vécut</b>，<b>mettre → il mit</b>。</p>
<p><b>和未完成过去时分工</b>（与复合过去时 / 未完成过去时的分工相同）：简单过去时推动情节，一个事件接一个事件；未完成过去时描写背景、状态和习惯。</p>
<p>Il <b>pleuvait</b> depuis le matin（背景）. Soudain, la porte <b>s'ouvrit</b> et un homme <b>entra</b>（事件）.</p>
<p><b>先过去时</b>（passé antérieur）= avoir / être 的简单过去时 + 过去分词。用在 quand、lorsque、dès que、après que 之后，表示紧接在另一个简单过去时之前完成的动作：Dès qu'il <b>eut fini</b>, il <b>sortit</b>. 认得即可。</p>
<p><b>易混淆</b></p>
<ul><li>il <b>finit</b>、il <b>dit</b>、il <b>rit</b>：简单过去时和现在时同形，要靠上下文（周围是 imparfait 还是 présent）。</li>
<li>il <b>vit</b>：可能是 voir 的简单过去时（他看见了），也可能是 vivre 的现在时（他生活）。</li>
<li>il <b>fut</b>（简单过去时）≠ qu'il <b>fût</b>（虚拟式未完成过去时，带长音符）。</li>
<li>je parlai [e]（简单过去时）和 je parlais [ɛ]（未完成过去时）只差一个字母。</li>
<li>小说里的<b>对话</b>仍然用现在时、复合过去时——引号里是人物在"说话"。</li></ul>
<p><b>转述</b>：把小说情节讲给朋友听时，要换成复合过去时或现在时：Elle ouvrit la porte → Elle a ouvert la porte。</p>`,
    ex: [["Elle ouvrit la porte et entra sans un mot.", "她打开门，一言不发地走了进去。"], ["Ils vécurent heureux et eurent beaucoup d'enfants.", "他们幸福地生活在一起，生了很多孩子。（童话结尾）"], ["Victor Hugo naquit à Besançon en 1802.", "维克多·雨果 1802 年生于贝桑松。"], ["Dès qu'il eut fini sa lettre, il la relut deux fois.", "他一写完信，就把它读了两遍。"]],
  },
  {
    id: 'g-concession', title: '高级让步与对立：quoique, alors que, néanmoins…',
    body: `<p>B1 学过 bien que、même si、malgré。B2 要掌握更多让步和对立的表达，分清三件事：<b>后面接什么</b>、<b>语域高低</b>、<b>是"让步"（尽管）还是"对比"（而）</b>。</p>
<table><tr><th>表达</th><th>后接</th><th>意义与语域</th></tr>
<tr><td>bien que / <b>quoique</b></td><td>虚拟式</td><td>尽管（quoique 更书面）：Quoiqu'il soit tard, elle travaille encore.</td></tr>
<tr><td><b>alors que</b></td><td>直陈式</td><td>①对比"而"；②让步"然而却"：Il dort alors que tout le monde travaille.</td></tr>
<tr><td><b>tandis que</b></td><td>直陈式</td><td>对比（较书面），也可以表示"在……的同时"：Mon frère adore la ville, tandis que moi, je préfère la campagne.</td></tr>
<tr><td>même si</td><td>直陈式（不用虚拟式）</td><td>即使：Même si c'est cher, j'y vais.</td></tr>
<tr><td>malgré / <b>en dépit de</b></td><td>名词</td><td>尽管（en dépit de 更正式）：En dépit des critiques, le projet continue.</td></tr>
<tr><td><b>avoir beau</b> + 原形</td><td>原形</td><td>再怎么……也没用：J'ai beau chercher, je ne trouve pas.</td></tr>
<tr><td><b>quoi que</b>（分开写）</td><td>虚拟式</td><td>无论什么：Quoi que tu dises, je partirai.</td></tr></table>
<p><b>连接两个独立句子的副词</b>：前一句说完，后一句转折。</p>
<table><tr><th>副词</th><th>语域</th><th>细微差别</th></tr>
<tr><td>mais</td><td>中性</td><td>最普通的"但是"，只能放在句首</td></tr>
<tr><td><b>pourtant</b></td><td>中性，口语常用</td><td>"可是"，带"出乎意料、说不通"的语气：Il est riche, et pourtant il n'est pas heureux.</td></tr>
<tr><td>cependant</td><td>正式</td><td>客观的"然而"</td></tr>
<tr><td><b>néanmoins</b></td><td>正式</td><td>"尽管如此（仍然）"：先承认，再坚持自己的观点</td></tr>
<tr><td><b>toutefois</b></td><td>正式</td><td>"不过"：对前面的话加以限制、保留</td></tr></table>
<p>这些副词位置灵活：句首加逗号（<b>Toutefois,</b> il reste des problèmes），或放在变位动词后（Il est <b>pourtant</b> venu.／Il reste <b>toutefois</b> des problèmes.）。</p>
<p><b>中国学习者最常见的错误</b></p>
<ul><li>✗ <b>Bien qu'</b>il pleuve, <b>mais</b> je sors. ——中文"虽然……但是……"成对出现，法语<b>不能</b>：bien que 从句后面直接接主句。</li>
<li>✗ Bien qu'il <b>est</b> malade → bien que / quoique 必须接虚拟式：bien qu'il <b>soit</b> malade。反过来，alors que、tandis que、même si 接直陈式。</li>
<li>quoique（尽管）≠ quoi que（无论什么），读音相同，意思完全不同。</li>
<li>malgré que + 虚拟式口语里常听到，但规范语法不推荐，正式写作请用 bien que。</li>
<li>pourtant 是副词，不是连词：✗ Pourtant qu'il soit riche… → Bien qu'il soit riche…</li></ul>`,
    ex: [["Bien qu'il ait beaucoup travaillé, il n'a pas obtenu de promotion.", "尽管他工作很努力，却没有得到晋升。"], ["Le télétravail améliore la qualité de vie ; il présente néanmoins certains risques.", "远程办公改善了生活质量；尽管如此，它也有一定的风险。"], ["Alors que la ville se développe, les campagnes se vident.", "城市在发展，而乡村却日渐空心化。"], ["En dépit des critiques, le gouvernement a maintenu sa réforme.", "尽管受到批评，政府还是坚持了改革。"]],
  },
  {
    id: 'g-style', title: '书面风格：名词化、被动态、避免 on 和 ça',
    body: `<p>法语书面语（报告、正式邮件、议论文）和口语差别很大。中国学习者的文章常常"语法没错，但像在说话"。三条核心技巧：</p>
<p><b>1. 名词化：用"介词 + 名词"代替从句，让句子更紧凑</b></p>
<table><tr><th>口语（从句、动词）</th><th>书面（介词 + 名词）</th></tr>
<tr><td>parce que les prix ont augmenté</td><td>en raison de la <b>hausse</b> des prix</td></tr>
<tr><td>quand il est arrivé</td><td>à / dès son <b>arrivée</b></td></tr>
<tr><td>avant de partir</td><td>avant le <b>départ</b></td></tr>
<tr><td>pour améliorer le service</td><td>en vue de l'<b>amélioration</b> du service</td></tr>
<tr><td>On a décidé de fermer l'usine.</td><td>La <b>fermeture</b> de l'usine a été décidée.</td></tr></table>
<p>常见后缀：-tion（augmenter → l'augmentation），-ment（développer → le développement），-age（nettoyer → le nettoyage），-ure（ouvrir → l'ouverture），-ité（rapide → la rapidité），-ance / -ence（exiger → l'exigence），零后缀（baisser → la baisse，hausser → la hausse，choisir → le choix）。</p>
<p>名词化之后<b>介词常常会变</b>：s'intéresser à → l'intérêt <b>pour</b>；critiquer qqch → la critique <b>de</b>；respecter qqch → le respect <b>de</b>；répondre à → la réponse <b>à</b>。</p>
<p><b>2. 用被动态、代词式被动或具体主语代替 on</b></p>
<ul><li>On a pris une décision. → Une décision <b>a été prise</b>.</li>
<li>On vend ce produit partout. → Ce produit <b>se vend</b> partout.</li>
<li>On a constaté une baisse. → Une baisse <b>a été constatée</b>.／L'enquête <b>révèle</b> une baisse.</li></ul>
<p><b>3. 换掉口语词和"万能动词"</b></p>
<table><tr><th>口语</th><th>书面</th></tr>
<tr><td>ça</td><td>cela / ce</td></tr>
<tr><td>du coup；句首反复的 donc</td><td>par conséquent, ainsi</td></tr>
<tr><td>en fait；et puis</td><td>en réalité；par ailleurs, de plus</td></tr>
<tr><td>faire un projet / une erreur</td><td>réaliser, mener un projet；commettre une erreur</td></tr>
<tr><td>dire</td><td>affirmer, souligner, indiquer, préciser</td></tr>
<tr><td>il y a un problème</td><td>un problème se pose</td></tr>
<tr><td>avoir</td><td>disposer de, posséder, présenter</td></tr>
<tr><td>poser un gros problème</td><td>peser lourdement sur, constituer un obstacle majeur</td></tr></table>
<p><b>把握分寸</b>：名词化过度，文章会变得"沉重"（un style lourd），堆满 de … de … de 的名词串（la mise en place de la réforme de la formation des enseignants）读起来很累。好文章是<b>名词和动词的平衡</b>：关键信息名词化，叙述部分保留动词。</p>
<p><b>常见错误</b>：书面里滥用 on 和 ça；把中文"进行调查、做研究"一律译成 faire（更好：mener une enquête、réaliser une étude）；名词化后忘了换介词（✗ l'intérêt à la politique → l'intérêt <b>pour</b> la politique）。</p>`,
    ex: [["La fermeture de l'usine a été décidée en mars.", "工厂的关闭是在三月决定的。（= On a décidé de fermer l'usine en mars.）"], ["En raison de la baisse des ventes, l'entreprise réduit ses coûts.", "由于销售下滑，公司正在削减成本。"], ["Cela soulève une question essentielle.", "这引出了一个关键问题。（口语：Ça pose une grosse question.）"], ["Ce modèle se vend surtout en Asie.", "这款型号主要在亚洲销售。"]],
  },
  {
    id: 'g-participe', title: '复合分词与独立分词结构：ayant fini, étant arrivé',
    body: `<p><b>复合分词</b>（participe passé composé）= <b>ayant / étant + 过去分词</b>，表示在主句动作<b>之前已经完成</b>的动作，常常还带"因为"的意味。它是书面语（报告、新闻、正式邮件）的标志。</p>
<table><tr><th>类型</th><th>构成</th><th>例子</th></tr>
<tr><td>avoir 型</td><td>ayant + 过去分词</td><td><b>Ayant fini</b> son travail, il est parti.</td></tr>
<tr><td>être 型</td><td>étant + 过去分词（与主语性数配合）</td><td><b>Étant arrivée</b> en retard, elle s'est excusée.</td></tr>
<tr><td>代词式</td><td>s'étant + 过去分词</td><td>Les enfants <b>s'étant couchés</b> tôt, la maison était calme.</td></tr>
<tr><td>否定</td><td>n'ayant pas / n'étant pas + 过去分词</td><td><b>N'ayant pas reçu</b> de réponse, je vous relance.</td></tr></table>
<p><b>étant 常常省略</b>，只留过去分词：<b>Arrivés</b> au sommet, ils ont admiré la vue（= Étant arrivés）。及物动词的过去分词单独使用时是<b>被动</b>意义：<b>Alertés</b> par un voisin, les pompiers sont arrivés（= comme ils avaient été alertés）。</p>
<p><b>同义改写</b>（口语里更常用右边的形式）</p>
<table><tr><th>书面</th><th>口语 / 中性</th></tr>
<tr><td>Ayant terminé ses études, elle est partie.</td><td>Après avoir terminé ses études… / Une fois ses études terminées…</td></tr>
<tr><td>Ayant perdu son passeport, il n'a pas pu partir.</td><td>Comme il avait perdu son passeport…</td></tr>
<tr><td>N'ayant pas de voiture, il prend le bus.（现在分词：同时）</td><td>Comme il n'a pas de voiture…</td></tr></table>
<p><b>独立分词结构</b>（proposition participiale）：分词有<b>自己的主语</b>，与主句主语不同，多表示时间或原因：<b>Le travail terminé</b>, nous sommes allés dîner.／<b>La nuit tombée</b>, …／<b>Une fois le contrat signé</b>, …（une fois + 名词 + 过去分词非常常用）。</p>
<p><b>最重要的规则：分词的逻辑主语 = 主句的主语</b></p>
<ul><li>✗ <b>Ayant fini</b> mes devoirs, <b>ma mère</b> m'a permis de sortir.（字面成了"妈妈做完了作业"）</li>
<li>✓ <b>Ayant fini</b> mes devoirs, <b>j'</b>ai pu sortir.</li>
<li>✓ <b>Mes devoirs finis</b>, ma mère m'a permis de sortir.（独立分词结构，有自己的主语）</li></ul>
<p>中文没有这个限制（"做完作业，妈妈让我出去玩了"很自然），所以这是中国学习者写作中最常见的错误之一。</p>
<p><b>其他注意</b>：现在分词 finissant 表示<b>同时</b>，复合分词 ayant fini 表示<b>之前</b>；être 型动词不要误用 ayant（✗ ayant arrivé）；ayant 后的过去分词按 avoir 的规则配合（Cette lettre, <b>l'ayant relue</b> deux fois, il l'a enfin envoyée）。</p>`,
    ex: [["Ayant terminé ses études, elle est partie travailler à l'étranger.", "完成学业后，她去了国外工作。"], ["Arrivés au sommet, les randonneurs ont admiré la vue.", "到达山顶后，徒步者们欣赏了风景。"], ["N'ayant pas reçu de réponse de votre part, je me permets de vous relancer.", "由于尚未收到您的回复，冒昧再次与您联系。"], ["Le contrat signé, les deux entreprises ont annoncé leur fusion.", "合同签署后，两家公司宣布了合并。"]],
  },
  {
    id: 'g-faire-faire', title: '使役结构：faire + 原形、se faire + 原形、laisser + 原形',
    body: `<p><b>1. faire + 原形：让 / 叫 / 请某人做某事</b>。主语不亲自做，而是促使别人去做。</p>
<ul><li>Je <b>fais réparer</b> ma voiture.（我请人修车——不是我自己修）</li>
<li>Ce film m'a <b>fait pleurer</b>.（这部电影让我哭了）</li></ul>
<p><b>执行者怎么表达？</b></p>
<table><tr><th>情况</th><th>结构</th><th>代词化</th></tr>
<tr><td>原形动词没有宾语</td><td>执行者 = 直接宾语：Je fais travailler <b>les élèves</b>.</td><td>Je <b>les</b> fais travailler.</td></tr>
<tr><td>原形动词有自己的宾语</td><td>执行者用 <b>à</b> 或 <b>par</b> 引出：Je fais lire ce texte <b>aux élèves</b>.／Je fais réparer la voiture <b>par le garagiste</b>.</td><td>Je <b>leur</b> fais lire ce texte.／Je <b>le leur</b> fais lire.</td></tr></table>
<p><b>代词位置</b>：放在 <b>faire 前面</b>，不放在原形前：Je <b>la</b> fais réparer（✗ je fais la réparer）。这和 vouloir + 原形不同（je veux la réparer）。肯定命令式：Fais-<b>le</b> entrer.</p>
<p><b>后接原形的 fait 永远不配合</b>：La voiture que j'ai <b>fait</b> réparer（✗ faite）；Je <b>les</b> ai <b>fait</b> venir。</p>
<p><b>2. se faire + 原形</b></p>
<table><tr><th>意思</th><th>例子</th></tr>
<tr><td>请别人为自己做（主动安排）</td><td>Je me suis <b>fait couper</b> les cheveux. 我去剪了头发。</td></tr>
<tr><td>遭受（多为不好的事，相当于被动）</td><td>Il s'est <b>fait voler</b> son portefeuille. 他的钱包被偷了。</td></tr>
<tr><td>让自己被……</td><td>se faire comprendre（让别人听懂自己），se faire entendre，se faire avoir（上当）</td></tr></table>
<p>这里的 fait 同样不配合：Elle s'est <b>fait</b> opérer（✗ faite）。</p>
<p><b>3. laisser + 原形：让、允许、任凭</b></p>
<ul><li><b>Laisse</b>-moi <b>parler</b> ! 让我把话说完！</li>
<li>Je laisse les enfants jouer.／Je laisse jouer les enfants.（两种语序都可以）</li>
<li><b>se laisser</b> + 原形：任由自己……：Je me suis <b>laissé convaincre</b>.</li>
<li>代词同样放在 laisser 前：Je <b>les</b> laisse partir。复合时态里，按 1990 年正字法建议 laissé <b>不配合</b>（je les ai laissé partir），传统的配合写法也算对。</li></ul>
<p><b>faire 和 laisser 的区别</b>：faire = 主动促使（叫他来）；laisser = 允许或不阻止（让他来、随他去）。</p>
<p><b>中国学习者常见错误</b></p>
<ul><li>中文"我修了车""我剪了头发"不说明谁动手；法语要精确：J'ai réparé ma voiture = 我亲手修的；在理发店剪发要说 <b>Je me suis fait couper les cheveux</b>。</li>
<li>faire + 原形 ≠ rendre + 形容词："这让我很开心"是 Ça me <b>rend</b> heureux（✗ ça me fait heureux）。</li>
<li>✗ Elle s'est <b>faite</b> voler son sac → Elle s'est <b>fait</b> voler son sac。</li>
<li>✗ Le prof <b>les</b> a fait lire ce poème → 原形已有宾语（ce poème），执行者要用间接宾语：Le prof <b>leur</b> a fait lire ce poème。</li></ul>`,
    ex: [["Je fais réparer ma voiture chez le garagiste du quartier.", "我在街区的修车铺修车。"], ["Elle s'est fait couper les cheveux très court.", "她把头发剪得很短。"], ["Le professeur nous a fait relire nos copies.", "老师让我们重读了自己的答卷。"], ["Laissez-moi finir ma phrase, s'il vous plaît.", "请让我把话说完。"]],
  },
  {
    id: 'g-mise-relief', title: '强调结构：c\'est … qui / que，ce qui …, c\'est …',
    body: `<p>中文用"是……的""……的是……"来强调，法语主要有三种手段。</p>
<p><b>1. C'est … qui / C'est … que：突出句子的某个成分</b></p>
<table><tr><th>强调对象</th><th>结构</th><th>例子</th></tr>
<tr><td>主语</td><td>c'est … <b>qui</b></td><td><b>C'est Marie qui</b> a gagné.</td></tr>
<tr><td>直接宾语</td><td>c'est … <b>que</b></td><td><b>C'est ce livre que</b> je cherchais.</td></tr>
<tr><td>地点、时间、方式等状语</td><td>c'est … <b>que</b>（不用 où / quand）</td><td><b>C'est à Paris que</b> j'ai appris le français.</td></tr>
<tr><td>带介词的成分</td><td>介词留在 c'est 后面 + que</td><td><b>C'est à toi que</b> je parle.</td></tr></table>
<ul><li>强调人称代词用重读形式，qui 后面的动词和它配合：C'est <b>moi</b> qui <b>ai</b> raison；C'est <b>nous</b> qui <b>avons</b> payé。</li>
<li>复数在书面语里用 <b>ce sont</b>：Ce sont mes élèves qui me motivent（口语常说 c'est）。</li>
<li>否定：<b>Ce n'est pas</b> lui <b>qui</b> a décidé.／Ce n'est pas en six mois <b>qu'</b>on apprend un métier.</li></ul>
<p><b>2. Ce qui / Ce que / Ce dont / Ce à quoi …, c'est …：先吊胃口，再说重点</b></p>
<table><tr><th>引导词</th><th>在从句里的作用</th><th>例子</th></tr>
<tr><td>ce qui</td><td>主语</td><td><b>Ce qui</b> me plaît, c'est la liberté.</td></tr>
<tr><td>ce que</td><td>直接宾语</td><td><b>Ce que</b> je préfère, c'est le matin.</td></tr>
<tr><td>ce dont</td><td>de + 名词（avoir besoin de, être fier de, parler de）</td><td><b>Ce dont</b> j'ai besoin, c'est de calme.</td></tr>
<tr><td>ce à quoi</td><td>à + 名词（penser à, tenir à）</td><td><b>Ce à quoi</b> je tiens, c'est à ma liberté.</td></tr></table>
<p>c'est 后面可以接名词、原形（Ce que je veux, <b>c'est partir</b>）或从句（Le problème, <b>c'est que</b> personne ne répond）。ce dont / ce à quoi 的介词在 c'est 后面通常要重复：c'est <b>de</b> calme，c'est <b>à</b> ma liberté。</p>
<p><b>3. 脱离结构（口语极常用）</b>：把话题提到句首或句尾，再用代词复指。</p>
<ul><li><b>Moi</b>, je préfère le thé.／<b>Le café</b>, je <b>l'</b>adore.／Je <b>l'</b>adore, <b>le café</b>.</li>
<li><b>La patience</b>, c'est ça la clé.</li>
<li><b>Si … c'est parce que / c'est pour</b>（之所以……是因为……）：<b>Si</b> j'ai changé de vie, <b>c'est parce que</b> j'étais malheureux.</li></ul>
<p><b>常见错误</b></p>
<ul><li>✗ C'est à Paris <b>où</b> j'habite → C'est à Paris <b>que</b> j'habite。</li>
<li>✗ C'est moi qui <b>a</b> raison → qui <b>ai</b>（动词跟 moi 配合）。</li>
<li>脱离结构忘了复指代词：✗ Le chocolat, j'en adore → Le chocolat, je <b>l'</b>adore（adorer 是直接及物动词）。</li>
<li>✗ Si j'ai changé de vie, c'est <b>car</b>… → c'est <b>parce que</b>（car 不能放在 c'est 后面）。</li>
<li>ce qui / ce que 选错：看后面的从句缺主语（ce qui me plaît）还是缺宾语（ce que j'aime）。</li></ul>`,
    ex: [["C'est en Bourgogne que j'ai appris le métier.", "我是在勃艮第学的这门手艺。"], ["C'est moi qui ai pris cette décision.", "做这个决定的是我。"], ["Ce qui me plaît dans ce travail, c'est la liberté.", "这份工作让我喜欢的，是自由。"], ["Ce dont j'ai besoin, c'est d'un peu de calme.", "我需要的，是一点安静。"]],
  },
];

export const CAT = {
  'g-subj-passe': '时态与语气',
  'g-si-all': '从句与连接',
  'g-ps': '时态与语气',
  'g-concession': '从句与连接',
  'g-style': '表达与语用',
  'g-participe': '从句与连接',
  'g-faire-faire': '句型',
  'g-mise-relief': '句型',
};

export const units = [
  {
    id: 'b2-01', emoji: '🥂', title: '我很高兴你来过', sub: '虚拟式过去时', can: '能对已经发生的事表达高兴、遗憾、惊讶和怀疑', scene: null, grammar: ['g-subj-passe'],
    words: [],
    newWords: [
      ["ravi · ravie", "ʁa.vi", "非常高兴的", "Je suis ravie que vous ayez accepté notre invitation.", "我很高兴您接受了我们的邀请。", "course"],
      ["regretter que", "ʁə.ɡʁɛ.te kə", "遗憾……（+ 虚拟式）", "Je regrette qu'il soit parti si tôt.", "我很遗憾他这么早就走了。", "course"],
      ["déçu · déçue", "de.sy", "失望的", "Elle a été déçue que personne ne l'ait appelée.", "没有人给她打电话，她很失望。", "course"],
      ["s'étonner que", "se.tɔ.ne kə", "对……感到惊讶（+ 虚拟式）", "Je m'étonne qu'il n'ait pas encore répondu.", "我很奇怪他还没有回复。", "course"],
      ["le malentendu", "lə ma.lɑ̃.tɑ̃.dy", "误会", "Il y a eu un malentendu sur la date de la réunion.", "关于会议日期出了个误会。", "course"],
      ["rancunier · rancunière", "ʁɑ̃.ky.nje · ʁɑ̃.ky.njɛʁ", "记仇的", "Ne t'inquiète pas, elle n'est pas rancunière.", "别担心，她不记仇。", "course"],
      ["tenir à ce que", "tə.niʁ a sə kə", "坚持要、很在意（+ 虚拟式）", "Je tiens à ce que tout soit prêt avant midi.", "我坚持中午之前一切都要准备好。", "course"],
      ["à l'improviste", "a lɛ̃.pʁɔ.vist", "不打招呼地、突然地", "Des amis sont passés à l'improviste hier soir.", "昨晚几个朋友没打招呼就来了。", "course"],
      ["le pot de départ", "lə po də de.paʁ", "（离职）欢送酒会", "On organise un pot de départ pour Marc vendredi.", "周五我们给马克办欢送会。", "course"],
      ["émouvant · émouvante", "e.mu.vɑ̃ · e.mu.vɑ̃t", "感人的", "Son discours d'adieu était très émouvant.", "他的告别致辞非常感人。", "course"],
    ],
    dialogue: [
      ["Claire", "Alors, ce pot de départ ? Je suis désolée de ne pas avoir pu venir.", "怎么样，那个欢送会？很抱歉我没能去。"],
      ["我", "Dommage ! Marc était un peu déçu que tu ne sois pas venue, mais il a compris.", "真可惜！你没来，马克有点失望，不过他理解。"],
      ["Claire", "J'espère qu'il ne m'en veut pas. Il y a eu un malentendu : je croyais que c'était vendredi !", "希望他别怪我。是个误会：我以为是周五！"],
      ["我", "Ne t'inquiète pas, il n'est pas rancunier. Par contre, il s'étonne que tu n'aies pas répondu à son message.", "别担心，他不记仇。不过他挺奇怪你没回他的消息。"],
      ["Claire", "Quel message ? Je n'ai rien reçu ! Ça m'étonnerait qu'il l'ait envoyé au bon numéro.", "什么消息？我什么都没收到！我很怀疑他发对了号码。"],
      ["我", "En tout cas, c'était très émouvant. Il a dit que c'étaient les plus belles années qu'il ait passées dans une entreprise.", "总之，场面很感人。他说那是他在公司里度过的最美好的几年。"],
      ["Claire", "Ça me touche. Je tiens à ce qu'il sache que je pensais à lui.", "真让人感动。我一定要让他知道我心里惦记着他。"],
      ["我", "Alors passe le voir à l'improviste avant son départ, il sera ravi.", "那你在他走之前突然去看看他吧，他会很高兴的。"],
      ["Claire", "Bonne idée. Il faut que j'aie fini mon rapport avant jeudi, mais vendredi, je suis libre.", "好主意。我得在周四之前把报告写完，不过周五我有空。"],
      ["我", "Moi, je suis vraiment content d'être allé à cette fête : j'ai rencontré plein de gens.", "我真的很高兴去了那个聚会：认识了好多人。"],
      ["Claire", "Tant mieux ! Vous avez fait des photos, au moins ?", "那太好了！你们至少拍照了吧？"],
      ["我", "Non, et c'est bien dommage. Je regrette qu'on n'y ait pas pensé.", "没有，真遗憾。可惜我们都没想到。"],
    ],
    sentences: [
      ["Marc était déçu que tu ne sois pas venue.", "你没来，马克很失望。"],
      ["Ça m'étonnerait qu'il l'ait envoyé au bon numéro.", "我很怀疑他发对了号码。"],
      ["Ce sont les plus belles années qu'il ait passées ici.", "这是他在这里度过的最美好的几年。"],
      ["Il faut que j'aie fini mon rapport avant jeudi.", "我得在周四之前把报告写完。"],
      ["Je suis vraiment content d'être allé à cette fête.", "我真的很高兴去了那个聚会。"],
    ],
    cloze: [
      ["Je suis ravie que vous ___ venus.", ["soyez", "ayez", "êtes"], 0, "我很高兴你们来了。", "venir 用 être 作助动词，情感后面要虚拟式：que vous soyez venus；êtes 是直陈式"],
      ["Je doute qu'il ___ compris la question.", ["ait", "a", "aie"], 0, "我怀疑他听懂了这个问题。", "怀疑 → 虚拟式；第三人称是 qu'il ait，aie 是 que j'aie"],
      ["C'est le meilleur roman que j'___ jamais lu.", ["aie", "ai", "avais"], 0, "这是我读过的最好的小说。", "最高级 + 关系从句常用虚拟式：que j'aie lu（aie 与 ai 读音相同，拼写不同）"],
      ["Elle regrette ___ partie si tôt.", ["d'être", "qu'elle soit", "qu'elle est"], 0, "她后悔这么早就走了。", "主句和从句主语相同时，用 de + 不定式过去式，不用 que 从句"],
      ["Il faut que tu ___ ce dossier avant midi.", ["aies terminé", "as terminé", "avais terminé"], 0, "你必须在中午之前把这份材料做完。", "il faut que → 虚拟式；avant midi 表示在某时间点前已完成 → 虚拟式过去时"],
      ["Je regrettais qu'ils ne m'___ pas prévenu.", ["aient", "avaient", "ont"], 0, "当时我很遗憾他们没有通知我。", "主句是过去时也不影响：regretter que 永远接虚拟式，不要按时态配合写成愈过去时"],
    ],
    discover: [
      { q: "« Je suis content que tu viennes. » 和 « Je suis content que tu sois venu. » 有什么区别？", opts: ["后者表示“来”已经发生，先于“高兴”", "两句完全一样", "后者更礼貌"], a: 0, why: "虚拟式现在时表示同时或之后（你要来 / 你来了正在这里），虚拟式过去时表示已经完成（你来过了）。" },
      { q: "“我很高兴来了”（主语都是“我”），法语怎么说？", opts: ["Je suis content d'être venu.", "Je suis content que je sois venu."], a: 0, why: "主语相同时不用 que 从句，而用 de + 不定式过去式（être / avoir + 过去分词）。" },
    ],
    write: {
      prompt: "一位共事多年的同事刚刚离职，你没能参加他 / 她的欢送会。写一封 120–200 词的法语邮件：表达遗憾、回顾合作、送上祝福。至少使用 3 次虚拟式过去时，并用一次 de + 不定式过去式。",
      model: "Cher Marc,\nJe tenais à t'écrire avant ton départ. Je regrette sincèrement de ne pas avoir pu assister à ton pot vendredi, et je suis désolée que mon message ne te soit jamais parvenu : il y a visiblement eu un malentendu sur la date.\nJe voulais surtout te dire à quel point j'ai apprécié ces quatre années de travail ensemble. Je ne crois pas que nous ayons connu un seul conflit sérieux, ce qui est rare ! Le projet de Lyon reste sans doute le plus beau défi que nous ayons relevé en équipe, et je suis fière que nous l'ayons mené à bien malgré des délais très serrés.\nJe suis ravie que tu aies trouvé un poste qui correspond à tes envies, même si ton absence va se faire sentir dans le service. J'espère sincèrement que nous resterons en contact.\nJe te souhaite le meilleur pour la suite.\nBien amicalement,\nClaire",
    },
  },
  {
    id: 'b2-02', emoji: '🔀', title: '要是当初……', sub: 'si 条件句三类 · 混合句', can: '能谈论人生选择，表达假设、后悔，并用混合句连接过去和现在', scene: null, grammar: ['g-si-all'],
    words: [],
    newWords: [
      ["la reconversion", "la ʁə.kɔ̃.vɛʁ.sjɔ̃", "转行", "Après quinze ans dans la finance, il a entamé une reconversion.", "在金融业干了十五年后，他开始转行。", "course"],
      ["démissionner", "de.mi.sjɔ.ne", "辞职", "Si j'avais su, j'aurais démissionné plus tôt.", "早知道的话，我会更早辞职。", "course"],
      ["se lancer", "sə lɑ̃.se", "投身于、放手去做", "Elle s'est lancée dans la création d'entreprise à quarante ans.", "她四十岁时投身创业。", "course"],
      ["têtu · têtue", "te.ty", "固执的", "Si tu n'étais pas si têtu, on aurait trouvé une solution.", "要不是你这么固执，我们早就找到办法了。", "course"],
      ["le regret", "lə ʁə.ɡʁɛ", "后悔、遗憾", "Je n'ai aucun regret.", "我一点也不后悔。", "course"],
      ["prendre un risque", "pʁɑ̃dʁ œ̃ ʁisk", "冒险", "Si tu ne prends jamais de risque, tu ne sauras jamais.", "如果你从不冒险，就永远不会知道结果。", "course"],
      ["la sécurité de l'emploi", "la se.ky.ʁi.te də lɑ̃.plwa", "工作稳定（铁饭碗）", "Les fonctionnaires bénéficient de la sécurité de l'emploi.", "公务员享有工作上的稳定保障。", "course"],
      ["avec le recul", "a.vɛk lə ʁə.kyl", "事后回头看", "Avec le recul, je pense que j'ai fait le bon choix.", "现在回头看，我觉得自己做了正确的选择。", "course"],
      ["si jamais", "si ʒa.mɛ", "万一、要是", "Si jamais tu passes par Lyon, préviens-moi.", "万一你路过里昂，告诉我一声。", "course"],
      ["le coup de tête", "lə ku də tɛt", "冲动之举", "Il a quitté son poste sur un coup de tête.", "他一时冲动辞了职。", "course"],
      ["épanoui · épanouie", "e.pa.nwi", "身心舒展的、过得充实的", "Depuis qu'elle a changé de métier, elle a l'air épanouie.", "自从换了职业，她看起来活得很舒展。", "course"],
      ["s'en sortir", "sɑ̃ sɔʁ.tiʁ", "应付过来、渡过难关", "Ne t'inquiète pas, tu vas t'en sortir.", "别担心，你能挺过去的。", "course"],
    ],
    dialogue: [
      ["我", "Thomas ! Je n'en reviens pas : tu as vraiment quitté la banque pour ouvrir une boulangerie ?", "托马！真不敢相信：你真的辞了银行的工作去开面包店了？"],
      ["Thomas", "Eh oui ! Ça fait deux ans. Si on m'avait dit ça il y a cinq ans, je ne l'aurais jamais cru.", "是啊！已经两年了。要是五年前有人这么跟我说，我绝对不会信。"],
      ["我", "Ce n'était pas un coup de tête ?", "不是一时冲动吧？"],
      ["Thomas", "Pas du tout. J'ai mis des mois à me décider. Si je n'avais pas eu le soutien de ma femme, je ne me serais jamais lancé.", "完全不是。我考虑了好几个月才下决心。要不是我太太支持，我是绝不会迈出这一步的。"],
      ["我", "Et avec le recul, tu as des regrets ?", "那现在回头看，你后悔吗？"],
      ["Thomas", "Aucun. Si j'étais resté à la banque, je gagnerais mieux ma vie, c'est sûr, mais je ne serais pas aussi épanoui.", "一点也不。要是当初留在银行，我现在肯定挣得更多，但不会活得这么舒心。"],
      ["我", "Moi, je pense parfois à une reconversion. Mais je tiens trop à la sécurité de l'emploi.", "我有时候也想转行。可我太看重工作稳定了。"],
      ["Thomas", "Tu sais, si tu n'étais pas aussi prudent, tu aurais démissionné depuis longtemps !", "你知道吗，要不是你这么谨慎，早就辞职了！"],
      ["我", "C'est vrai… Mais si jamais ça ne marchait pas ?", "确实……可万一不成功呢？"],
      ["Thomas", "Si ça ne marche pas, tu retrouveras un poste. Avec tes compétences, tu t'en sortiras toujours.", "不成功的话，你再找份工作就是了。凭你的能力，总能应付过来。"],
      ["我", "Si j'avais ton courage, je prendrais le risque demain !", "要是我有你的勇气，明天就冒这个险！"],
      ["Thomas", "Si tu passes à la boutique samedi, je t'offre un croissant et on en reparle.", "你周六来店里的话，我请你吃个可颂，咱们再聊。"],
    ],
    sentences: [
      ["Si on m'avait dit ça, je ne l'aurais jamais cru.", "要是有人跟我这么说，我绝对不会信。"],
      ["Si j'étais resté à la banque, je gagnerais mieux ma vie.", "要是当初留在银行，我现在会挣得更多。"],
      ["Si tu n'étais pas aussi prudent, tu aurais démissionné depuis longtemps.", "要不是你这么谨慎，早就辞职了。"],
      ["Si ça ne marche pas, tu retrouveras un poste.", "不成功的话，你会再找到工作的。"],
      ["Si jamais tu changes d'avis, appelle-moi.", "万一你改主意了，给我打电话。"],
    ],
    cloze: [
      ["Si j'___ su, je serais venu plus tôt.", ["avais", "aurais", "ai"], 0, "早知道的话，我会早点来。", "si 后面绝不用条件式：si + 愈过去时 → 条件式过去时"],
      ["Si tu pars maintenant, tu ___ le dernier train.", ["attraperas", "attraperais", "aurais attrapé"], 0, "你现在出发的话，能赶上末班车。", "si + 现在时 = 真实条件，主句用将来时"],
      ["Si nous avions réservé, nous ___ une table.", ["aurions eu", "aurons", "avions eu"], 0, "要是我们订了位，就会有桌子了。", "si + 愈过去时 → 主句条件式过去时（与过去事实相反）"],
      ["Si elle n'avait pas raté son avion hier, elle ___ à Tokyo en ce moment.", ["serait", "aurait été", "sera"], 0, "要是她昨天没误机，现在就在东京了。", "混合句：过去的条件（hier）→ 现在的结果（en ce moment）用条件式现在时"],
      ["Si j'___ toi, je n'aurais pas accepté cette offre.", ["étais", "serais", "aurais été"], 0, "我要是你，就不会接受这个报价。", "si j'étais toi 是固定说法（假设一个不变的状态），si 后面不能用条件式"],
      ["___ ton aide, je n'aurais jamais fini à temps.", ["Sans", "Si", "Avec"], 0, "没有你的帮助，我绝对不能按时完成。", "sans + 名词 = 否定条件（= si tu ne m'avais pas aidé）"],
    ],
    discover: [
      { q: "« Si j'avais pris ce poste, je vivrais à Montréal. » 为什么主句用条件式现在时，而不是条件式过去时？", opts: ["条件在过去，结果在现在", "这是错误的句子", "口语里可以随便混用"], a: 0, why: "这是混合句：“接受职位”发生在过去，“住在蒙特利尔”是现在的状态，所以 si + 愈过去时，主句用条件式现在时。" },
      { q: "« Si on allait au cinéma ce soir ? » 单独一个 si + 未完成过去时是什么意思？", opts: ["提建议：今晚我们去看电影吧？", "后悔没去看电影", "假设过去去看了电影"], a: 0, why: "没有主句的 si + 未完成过去时 + 问号，是一种很常见的委婉建议。" },
    ],
    write: {
      prompt: "回顾你人生中的一个重要选择（专业、工作、城市……）：如果当初做了另一个选择，现在会怎样？写一篇 120–200 词的短文，三类 si 条件句都要用到，并至少写一个混合句。",
      model: "Il y a dix ans, j'ai dû choisir entre une école d'ingénieurs à Shanghai et une licence de lettres en France. J'ai choisi la sécurité : l'école d'ingénieurs. Avec le recul, je ne le regrette pas vraiment, mais j'y pense souvent.\nSi j'étais parti en France à dix-huit ans, je parlerais sans doute français couramment aujourd'hui, et je n'aurais pas besoin de prendre des cours le soir ! J'aurais peut-être rencontré d'autres gens et choisi un autre métier. Mais si j'avais fait des études littéraires, je n'aurais probablement pas trouvé un emploi aussi stable.\nD'un autre côté, si j'étais moins prudent de nature, j'aurais pris ce risque sans hésiter. Au fond, c'est mon caractère qui a décidé.\nAujourd'hui, je me dis que rien n'est perdu. Si j'obtiens mon diplôme de français l'année prochaine, je demanderai une mutation à Paris. Et si jamais ça ne marche pas, je trouverai une autre solution : on s'en sort toujours.",
    },
  },
  {
    id: 'b2-03', emoji: '📖', title: '读小说', sub: '简单过去时（书面叙事）', can: '能读懂用简单过去时写成的小说片段，并能写简单的第三人称叙事', scene: null, grammar: ['g-ps'],
    words: [],
    newWords: [
      ["la lueur", "la lɥœʁ", "微光", "Une faible lueur apparut au bout du couloir.", "走廊尽头出现了一丝微光。", "course"],
      ["frissonner", "fʁi.sɔ.ne", "发抖、打寒战", "Elle frissonna en entendant ce nom.", "听到这个名字，她打了个寒战。", "course"],
      ["murmurer", "myʁ.my.ʁe", "低声说", "« Merci », murmura-t-il.", "“谢谢。”他低声说。", "course"],
      ["s'emparer de", "sɑ̃.pa.ʁe də", "抓住、夺取；（情绪）攫住", "La peur s'empara de lui.", "恐惧攫住了他。", "course"],
      ["l'aube (f.)", "lob", "黎明", "Ils partirent à l'aube.", "他们黎明时出发了。", "course"],
      ["la brume", "la bʁym", "薄雾", "Le village disparaissait dans la brume.", "村庄隐没在薄雾中。", "course"],
      ["s'éloigner", "se.lwa.ɲe", "走远、远离", "La voiture s'éloigna lentement.", "汽车慢慢地开远了。", "course"],
      ["contempler", "kɔ̃.tɑ̃.ple", "凝视、端详", "Il contempla longtemps le paysage.", "他久久地凝视着风景。", "course"],
      ["le quai", "lə ke", "码头；站台", "Le train entra en gare et elle descendit sur le quai.", "火车进站，她走下站台。", "course"],
      ["aussitôt", "o.si.to", "立刻", "Il comprit aussitôt qu'il s'était trompé.", "他立刻明白自己弄错了。", "course"],
      ["rompre le silence", "ʁɔ̃pʁ lə si.lɑ̃s", "打破沉默", "Ce fut elle qui rompit le silence.", "是她打破了沉默。", "course"],
    ],
    dialogue: [
      ["", "Ce matin-là, une brume épaisse couvrait le port. Anne arriva sur le quai bien avant l'aube, comme chaque jour depuis trois mois.", "那天早上，浓雾笼罩着港口。安娜天还没亮就来到了码头，三个月来天天如此。"],
      ["", "Elle s'assit sur un banc et contempla longtemps la mer grise. Aucun bateau n'apparaissait à l'horizon.", "她在长椅上坐下，久久凝望着灰色的大海。地平线上不见一艘船。"],
      ["", "Soudain, une lueur perça la brume. Anne se leva d'un bond : un navire approchait lentement.", "突然，一道微光穿透了雾气。安娜一下子站了起来：一艘船正缓缓驶来。"],
      ["", "Dès que le navire eut accosté, les passagers descendirent un à un. Anne les observa, le cœur battant, mais ne reconnut personne.", "船一靠岸，乘客们便一个接一个地走下来。安娜心怦怦直跳地看着他们，却一个也不认识。"],
      ["", "Un vieux marin s'approcha d'elle. Il hésita un instant, puis il rompit le silence.", "一位老水手向她走来。他犹豫了片刻，然后打破了沉默。"],
      ["le marin", "Vous êtes bien Anne Morel ? J'ai une lettre pour vous.", "您是安娜·莫雷尔吧？我这儿有您的一封信。"],
      ["", "Anne s'empara de l'enveloppe et frissonna : elle reconnut aussitôt l'écriture de son frère.", "安娜一把抓过信封，浑身一颤：她立刻认出了哥哥的笔迹。"],
      ["", "« Il est vivant… », murmura-t-elle, incapable de retenir ses larmes.", "“他还活着……”她低声说，泪水止不住地流下来。"],
      ["Anne", "Où l'avez-vous vu ? Comment va-t-il ?", "您在哪儿见到他的？他好吗？"],
      ["", "Le marin ne répondit pas tout de suite. Il lui fit signe de le suivre, et ils s'éloignèrent ensemble dans la brume.", "水手没有马上回答。他示意她跟上，两人一起消失在雾中。"],
      ["", "Ce soir-là, pour la première fois depuis des mois, Anne ne revint pas sur le quai.", "那天晚上，几个月来第一次，安娜没有再回到码头。"],
    ],
    sentences: [
      ["Anne arriva sur le quai bien avant l'aube.", "安娜天还没亮就来到了码头。"],
      ["Soudain, une lueur perça la brume.", "突然，一道微光穿透了雾气。"],
      ["Elle reconnut aussitôt l'écriture de son frère.", "她立刻认出了哥哥的笔迹。"],
      ["Le marin ne répondit pas tout de suite.", "水手没有马上回答。"],
      ["Ils s'éloignèrent ensemble dans la brume.", "他们一起消失在雾中。"],
    ],
    cloze: [
      ["Hier soir, j'___ un film génial. Tu devrais le voir !", ["ai vu", "vis", "voyais"], 0, "昨晚我看了一部超棒的电影。你应该去看看！", "这是日常对话，要用复合过去时；简单过去时只用于书面叙事"],
      ["Le roi ___ en 1715, après soixante-douze ans de règne.", ["mourut", "mourit", "mourra"], 0, "国王在位七十二年后，于 1715 年去世。", "mourir 的简单过去时是 il mourut（-u 型），不是 *mourit"],
      ["Elle ouvrit la lettre et ___ à pleurer.", ["se mit", "se mettait", "se mettit"], 0, "她打开信，哭了起来。", "一连串事件用简单过去时；mettre → il mit（不是 *mettit）"],
      ["Ils ___ de longues années à Lyon.", ["vécurent", "vivèrent", "vivirent"], 0, "他们在里昂生活了很多年。", "vivre 的简单过去时不规则：ils vécurent"],
      ["Il faisait nuit quand nous ___ au village.", ["arrivâmes", "arrivèrent", "arrivâtes"], 0, "我们到达村子时，天已经黑了。", "-er 动词 nous 的词尾是 -âmes；-èrent 是 ils，-âtes 是 vous"],
      ["Dès qu'il ___ sa lettre, il sortit la poster.", ["eut terminé", "a terminé", "avait terminé"], 0, "他一写完信，就出门去寄了。", "dès que + 先过去时（eut terminé），表示紧接在另一个简单过去时（sortit）之前完成"],
    ],
    discover: [
      { q: "il fut、il eut、il fit、il vit 分别是哪几个动词的简单过去时？", opts: ["être, avoir, faire, voir", "faire, avoir, finir, vivre", "être, aller, faire, venir"], a: 0, why: "这四个最常见也最不规则，读小说时到处都是，一定要一眼认出。注意 il vit 也可能是 vivre 的现在时。" },
      { q: "小说里写 « Elle ouvrit la porte et entra. »，作者为什么不用 a ouvert / est entrée？", opts: ["简单过去时是书面叙事时态，把事件和“现在”切断", "简单过去时表示动作更久远", "这是方言用法"], a: 0, why: "意思相同，区别在语体：复合过去时和说话的“现在”相连，简单过去时属于故事世界本身。" },
    ],
    write: {
      prompt: "用简单过去时写一个 120–200 词的小故事（第三人称）。背景、描写用未完成过去时，事件用简单过去时，至少用 8 个不同动词的简单过去时；人物对话可以用现在时。",
      model: "Il pleuvait depuis le matin quand Paul descendit du train à la petite gare de Saint-Malo. Personne ne l'attendait. Il prit sa valise, releva le col de son manteau et se dirigea vers la vieille ville.\nLa maison de sa grand-mère se trouvait au bout d'une ruelle étroite. Il hésita longtemps devant la porte, puis il frappa trois coups. Une femme qu'il ne connaissait pas vint lui ouvrir.\n« Madame Le Goff n'habite plus ici, dit-elle d'une voix douce. Elle est partie l'hiver dernier. »\nPaul ne sut que répondre. Il resta immobile sous la pluie, sa valise à la main. Émue, la femme le fit entrer et lui offrit un café. Ils parlèrent pendant des heures de la vieille dame, de ses histoires et de son jardin.\nQuand il repartit, le soir tombait. Il comprit alors qu'il ne reviendrait jamais dans cette maison, mais qu'il n'oublierait pas cette inconnue.",
    },
  },
  {
    id: 'b2-04', emoji: '⚖️', title: '然而、尽管', sub: '高级让步与对立', can: '能在辩论中承认对方观点再提出反驳，掌握不同语域的转折表达', scene: null, grammar: ['g-concession'],
    words: [],
    newWords: [
      ["le télétravail", "lə te.le.tʁa.vaj", "远程办公", "Je fais du télétravail deux jours par semaine.", "我每周远程办公两天。", "course"],
      ["l'isolement (m.)", "li.zɔl.mɑ̃", "孤立、隔绝", "L'isolement est le principal risque du travail à distance.", "孤立感是远程工作的主要风险。", "course"],
      ["la productivité", "la pʁɔ.dyk.ti.vi.te", "生产率、效率", "Bien que les équipes soient plus petites, la productivité a augmenté.", "尽管团队人数减少了，生产率却提高了。", "course"],
      ["le salarié · la salariée", "lə sa.la.ʁje · la sa.la.ʁje", "雇员、工薪人员", "L'entreprise compte deux cents salariés.", "公司有两百名员工。", "course"],
      ["nuancer", "nɥɑ̃.se", "使（说法）更有分寸、补充不同角度", "Permettez-moi de nuancer vos propos.", "请允许我对您的说法做些补充。", "course"],
      ["la frontière", "la fʁɔ̃.tjɛʁ", "界限；边境", "La frontière entre vie privée et vie professionnelle devient floue.", "私人生活和职业生活的界限变得模糊。", "course"],
      ["avoir beau + inf.", "a.vwaʁ bo", "再怎么……也没用", "J'ai beau lui expliquer, il ne comprend pas.", "我再怎么跟他解释，他也不明白。", "course"],
      ["le lien social", "lə ljɛ̃ sɔ.sjal", "社会联系、人际纽带", "Les associations renforcent le lien social dans les quartiers.", "社团加强了街区里的人际联系。", "course"],
      ["indéniable", "ɛ̃.de.njabl", "不可否认的", "Ses qualités sont indéniables ; pourtant, il n'a pas été retenu.", "他的优点不可否认；可他还是没被录用。", "course"],
      ["l'atout (m.)", "la.tu", "优势、王牌", "Parler chinois est un atout sur le marché du travail.", "会说中文是就业市场上的一大优势。", "course"],
      ["la contrepartie", "la kɔ̃.tʁə.paʁ.ti", "代价、交换条件", "En contrepartie, les salariés doivent rester joignables le matin.", "作为交换，员工上午必须保持能联系上。", "course"],
    ],
    dialogue: [
      ["主持人", "Bonsoir à tous. Ce soir, nous parlons du télétravail. Madame Leroy, vous êtes DRH : est-ce vraiment un atout pour les entreprises ?", "大家晚上好。今晚我们谈远程办公。勒鲁瓦女士，您是人力资源总监：它真的是企业的一大优势吗？"],
      ["Mme Leroy", "Sans aucun doute. Bien que beaucoup de dirigeants aient été méfiants au début, la productivité a plutôt augmenté.", "毫无疑问。尽管一开始很多管理者心存疑虑，生产率反而提高了。"],
      ["M. Benali", "Permettez-moi de nuancer. Le gain de temps sur les trajets est indéniable ; toutefois, l'isolement de certains salariés m'inquiète.", "请允许我补充一点。节省通勤时间这一点不可否认；不过，部分员工的孤立状态让我担心。"],
      ["Mme Leroy", "C'est vrai, mais en dépit de ces difficultés, la grande majorité des salariés souhaitent garder deux ou trois jours à la maison.", "确实，但尽管有这些困难，绝大多数员工仍希望保留每周两三天在家办公。"],
      ["M. Benali", "Justement. Les cadres en profitent, alors que les ouvriers, eux, n'ont pas le choix.", "问题就在这里。管理层从中受益，而工人们却根本没得选。"],
      ["主持人", "Monsieur Benali, vous êtes pourtant favorable au télétravail, non ?", "贝纳利先生，可您本人是支持远程办公的，不是吗？"],
      ["M. Benali", "Oui, quoique je reste prudent. Le problème, c'est la frontière entre vie privée et vie professionnelle : on a beau éteindre son ordinateur, les mails continuent d'arriver sur le téléphone.", "是的，尽管我仍持谨慎态度。问题在于私人生活和工作的界限：电脑关了也没用，邮件照样往手机上发。"],
      ["Mme Leroy", "Nous avons justement mis en place un droit à la déconnexion. Néanmoins, je reconnais que le lien social s'affaiblit.", "我们正好设立了“离线权”。尽管如此，我承认人与人之间的联系在减弱。"],
      ["主持人", "Le télétravail aurait donc une contrepartie ?", "这么说，远程办公是有代价的？"],
      ["M. Benali", "Exactement. Tandis que l'entreprise réduit ses frais de bureaux, c'est le salarié qui paie le chauffage et l'équipement.", "正是如此。企业削减了办公开支，而暖气费和设备费却由员工来付。"],
      ["Mme Leroy", "Même si le système n'est pas parfait, je ne crois pas qu'on revienne un jour au tout-présentiel.", "即使这个模式并不完美，我也不认为我们有一天会回到全员坐班。"],
    ],
    sentences: [
      ["Bien que beaucoup de dirigeants aient été méfiants, la productivité a augmenté.", "尽管很多管理者心存疑虑，生产率还是提高了。"],
      ["Le gain de temps est indéniable ; toutefois, l'isolement m'inquiète.", "节省时间不可否认；不过，孤立感让我担心。"],
      ["En dépit de ces difficultés, les salariés veulent continuer.", "尽管有这些困难，员工们还是想继续。"],
      ["On a beau éteindre son ordinateur, les mails continuent d'arriver.", "电脑关了也没用，邮件照样不断地来。"],
      ["Les cadres en profitent, alors que les ouvriers n'ont pas le choix.", "管理层从中受益，而工人们没得选。"],
    ],
    cloze: [
      ["Bien qu'il ___ malade, il est venu à la réunion.", ["soit", "est", "était"], 0, "尽管生病了，他还是来开会了。", "bien que 必须接虚拟式"],
      ["___ la pluie, le match a eu lieu.", ["Malgré", "Bien que", "Pourtant"], 0, "尽管下雨，比赛照常进行。", "后面是名词 → malgré / en dépit de；bien que 接从句，pourtant 是副词"],
      ["Bien qu'elle ait tout préparé, ___ présentation a été un échec.", ["sa", "mais sa", "pourtant sa"], 0, "尽管她做了充分准备，演讲还是失败了。", "法语不说“虽然……但是……”：bien que 从句后直接接主句，不加 mais"],
      ["J'ai ___ lui expliquer, il ne comprend rien.", ["beau", "bien", "malgré"], 0, "我再怎么跟他解释，他也什么都不懂。", "avoir beau + 原形 = 再怎么……也没用"],
      ["___ tu en penses, je prendrai ma décision seul.", ["Quoi que", "Quoique", "Bien que"], 0, "不管你怎么想，我都会自己做决定。", "quoi que（分开写）= 无论什么；quoique（连写）= 尽管"],
      ["Même si le projet ___ risqué, nous allons le lancer.", ["est", "soit", "serait"], 0, "即使这个项目有风险，我们也要启动它。", "même si 接直陈式，不接虚拟式，也不接条件式"],
    ],
    discover: [
      { q: "中文说“虽然下雨，但是我出门”。法语 « Bien qu'il pleuve, ___ je sors. » 空里要不要加 mais？", opts: ["不加：Bien qu'il pleuve, je sors.", "要加：…, mais je sors."], a: 0, why: "bien que 已经表达了让步关系，再加 mais 是中式法语的典型错误。" },
      { q: "正式报告里哪个最合适？« Le projet est rentable. ___, il comporte des risques. »", opts: ["Néanmoins", "Mais bon", "Quand même"], a: 0, why: "néanmoins / toutefois / cependant 属于正式书面语；mais bon、quand même 是口语。" },
    ],
    write: {
      prompt: "写一篇 150–200 词的议论短文：《远程办公利大于弊吗？》先承认对方观点再反驳，至少用 5 种不同的让步 / 对立表达（如 bien que, alors que, en dépit de, avoir beau, néanmoins, toutefois）。",
      model: "Depuis la crise sanitaire, le télétravail s'est imposé dans de nombreuses entreprises. Est-il pour autant une solution idéale ?\nSes avantages sont indéniables. Les salariés gagnent du temps sur les trajets et organisent plus librement leur journée. Bien que certains dirigeants soient restés méfiants, la productivité ne semble pas avoir baissé, bien au contraire.\nNéanmoins, ce mode de travail présente aussi des risques. L'isolement touche surtout les jeunes salariés, qui ont besoin d'apprendre au contact de leurs collègues. De plus, la frontière entre vie privée et vie professionnelle devient floue : on a beau fermer son ordinateur, il est difficile de « décrocher » complètement.\nPar ailleurs, le télétravail creuse les inégalités. Alors que les cadres en profitent largement, de nombreux métiers ne peuvent pas être exercés à distance.\nEn dépit de ces limites, je pense que le télétravail représente un progrès, s'il reste choisi et limité à deux ou trois jours par semaine. Toutefois, les entreprises devront veiller à préserver le lien social.",
    },
  },
  {
    id: 'b2-05', emoji: '🖋️', title: '书面风格', sub: '名词化 · 被动 · 避免 on 和 ça', can: '能把口语化的句子改写成正式报告的书面风格', scene: null, grammar: ['g-style'],
    words: [],
    newWords: [
      ["la hausse", "la os", "上涨、提高", "La hausse des prix de l'énergie inquiète les ménages.", "能源价格上涨让家庭忧心。", "course"],
      ["la baisse", "la bɛs", "下降、减少", "Les ventes sont en baisse depuis trois mois.", "销量三个月来持续下降。", "course"],
      ["en raison de", "ɑ̃ ʁɛ.zɔ̃ də", "由于（书面）", "Le vol a été annulé en raison de la grève.", "由于罢工，航班被取消了。", "course"],
      ["souligner", "su.li.ɲe", "强调；指出", "Le rapport souligne la nécessité d'agir rapidement.", "报告强调必须迅速采取行动。", "course"],
      ["mettre en œuvre", "mɛ.tʁɑ̃.nœvʁ", "实施、落实", "Ces mesures seront mises en œuvre dès l'an prochain.", "这些措施将从明年起实施。", "course"],
      ["la mise en place", "la mi.zɑ̃ plas", "建立、部署", "La mise en place du nouveau logiciel a pris six mois.", "新软件的部署花了六个月。", "course"],
      ["constater", "kɔ̃s.ta.te", "观察到、确认（事实）", "Plusieurs erreurs ont été constatées dans le dossier.", "材料中发现了几处错误。", "course"],
      ["le chiffre d'affaires", "lə ʃifʁ da.fɛʁ", "营业额", "Le chiffre d'affaires a progressé de 12 %.", "营业额增长了 12%。", "course"],
      ["la rédaction", "la ʁe.dak.sjɔ̃", "撰写；行文", "La rédaction du rapport m'a pris toute la semaine.", "写这份报告花了我整整一周。", "course"],
      ["lourd · lourde", "luʁ · luʁd", "沉重的；（文风）冗赘的", "Ce paragraphe est un peu lourd : il y a trop de noms.", "这一段有点冗赘：名词太多了。", "course"],
      ["peser sur", "pə.ze syʁ", "压在……上、对……造成负担", "La crise pèse lourdement sur les petites entreprises.", "危机给小企业造成了沉重负担。", "course"],
    ],
    dialogue: [
      ["Mme Dubois", "J'ai lu votre rapport. Sur le fond, c'est très bien, mais la rédaction est encore un peu trop orale.", "我看了您的报告。内容上很好，但行文还是有点太口语化。"],
      ["我", "Ah bon ? Qu'est-ce qui ne va pas, exactement ?", "是吗？具体哪里不对呢？"],
      ["Mme Dubois", "Prenons la première phrase : « On a vu que les ventes ont beaucoup baissé parce que les prix ont augmenté. » Il y a trop de verbes, et ce « on » est vague.", "就拿第一句来说：“我们看到销量下降了很多，因为价格涨了。”动词太多，而且这个 on 指代不明。"],
      ["我", "Alors je pourrais écrire : « Une forte baisse des ventes a été constatée en raison de la hausse des prix » ?", "那我可以写成：“由于价格上涨，销量出现大幅下滑”？"],
      ["Mme Dubois", "Parfait. Vous voyez, la nominalisation rend la phrase plus dense, et le passif évite le « on ».", "非常好。您看，名词化让句子更紧凑，被动态又避免了 on。"],
      ["我", "Et ici : « Ça pose un gros problème pour le chiffre d'affaires » ?", "那这句呢：“这给营业额带来了大问题”？"],
      ["Mme Dubois", "À l'écrit, remplacez « ça » par « cela », et « poser un gros problème » par un verbe plus précis : « Cela pèse lourdement sur le chiffre d'affaires. »", "书面上把 ça 换成 cela，把“带来大问题”换成更精确的动词：“这对营业额造成了沉重压力。”"],
      ["我", "D'accord. Et pour « On va faire les nouvelles mesures en janvier » ?", "好的。那“我们一月份要做新措施”呢？"],
      ["Mme Dubois", "« Faire » est trop vague. Écrivez plutôt : « Les nouvelles mesures seront mises en œuvre dès janvier. »", "“做”太笼统了。不如写：“新措施将于一月起实施。”"],
      ["我", "Je comprends. Mais si je transforme tout en noms, le texte ne devient pas un peu lourd ?", "明白了。不过如果我把什么都变成名词，文章会不会有点冗赘？"],
      ["Mme Dubois", "Excellente remarque. Il faut trouver un équilibre : nominalisez les idées clés, mais gardez des verbes pour que le texte reste vivant.", "问得好。要找到平衡：关键信息名词化，但保留一些动词，让文章读起来有生气。"],
      ["我", "Très bien. Je reprends le texte et je précise aussi le calendrier de mise en place.", "好的。我重新改一遍，顺便把实施的时间表也写清楚。"],
    ],
    sentences: [
      ["Une forte baisse des ventes a été constatée.", "销量出现了大幅下滑。"],
      ["Cela pèse lourdement sur le chiffre d'affaires.", "这对营业额造成了沉重压力。"],
      ["Les nouvelles mesures seront mises en œuvre dès janvier.", "新措施将于一月起实施。"],
      ["La mise en place du système est prévue pour mars.", "系统计划于三月部署。"],
      ["En raison de la hausse des prix, la demande a diminué.", "由于价格上涨，需求下降了。"],
    ],
    cloze: [
      ["___ des prix, la demande a diminué.", ["En raison de la hausse", "Parce que la hausse", "À cause que la hausse"], 0, "由于价格上涨，需求下降了。", "名词前用介词短语 en raison de；parce que 后面要接完整从句"],
      ["La décision ___ par le conseil d'administration hier.", ["a été prise", "a pris", "est prise"], 0, "决定昨天由董事会做出。", "主语是 la décision（被做出）→ 被动态；hier 要求复合过去时 a été prise"],
      ["Ce produit ___ très bien en Asie.", ["se vend", "vend", "est vendant"], 0, "这款产品在亚洲卖得很好。", "代词式被动 se vendre 代替 on vend；法语没有 *est vendant 这种进行式"],
      ["Le directeur a ___ l'importance de la formation.", ["souligné", "dit", "fait"], 0, "主任强调了培训的重要性。", "书面里用精确的动词：souligner l'importance de；dit / fait 太笼统，也不搭配"],
      ["L'intérêt des jeunes ___ la politique diminue.", ["pour", "à", "de"], 0, "年轻人对政治的兴趣在下降。", "动词是 s'intéresser à，名词化后变成 l'intérêt pour"],
      ["Dès ___ à Paris, il a contacté la direction.", ["son arrivée", "il arrive", "arriver"], 0, "一到巴黎，他就联系了管理层。", "介词 dès 后接名词：dès son arrivée（= dès qu'il est arrivé）"],
    ],
    discover: [
      { q: "« Quand il est parti, … » 最简洁的书面名词化写法是？", opts: ["Lors de son départ, …", "Quand son départ, …", "Pendant partir, …"], a: 0, why: "从句 quand il est parti → 介词 lors de / à + 名词 son départ。" },
      { q: "为什么正式报告里少用 on？", opts: ["on 指代模糊，用被动态或具体主语更客观、准确", "on 是语法错误", "on 只能用于过去时"], a: 0, why: "on 本身没错，但在报告里“谁做的”不清楚、口语味重；被动态或具体主语（l'enquête, la direction）更专业。" },
    ],
    write: {
      prompt: "下面是一位同事的口头汇报：« On a vu que les clients sont pas contents parce que les livraisons arrivent en retard. Du coup, on va faire un nouveau système en mars. Ça coûte cher, mais on n'a pas le choix. » 请改写并扩充成一段 120–180 词的正式书面报告：使用名词化和被动态，避免 on、ça 和 faire。",
      model: "Objet : retards de livraison et mesures correctives\nAu cours du dernier trimestre, une nette dégradation de la satisfaction client a été constatée. Selon l'enquête menée en septembre, près de 40 % des clients se déclarent mécontents, principalement en raison des retards de livraison.\nCes retards s'expliquent par deux facteurs : la hausse des commandes en ligne et le manque de coordination entre l'entrepôt et les transporteurs. Cette situation pèse directement sur le chiffre d'affaires, qui enregistre une baisse de 8 % par rapport à l'an dernier.\nAfin de remédier à ce problème, la mise en place d'un nouveau système de suivi des commandes est prévue pour le mois de mars. Malgré son coût élevé, cet investissement apparaît indispensable. Par ailleurs, un renforcement des équipes logistiques sera mis en œuvre dès janvier.\nEnfin, l'efficacité de ces mesures sera évaluée à la fin du premier semestre.",
    },
  },
  {
    id: 'b2-06', emoji: '🏔️', title: '完成之后', sub: '复合分词 · 独立分词结构', can: '能读懂新闻报道中的分词结构，并用它写出简洁的书面叙述', scene: null, grammar: ['g-participe'],
    words: [],
    newWords: [
      ["le randonneur · la randonneuse", "lə ʁɑ̃.dɔ.nœʁ · la ʁɑ̃.dɔ.nøz", "徒步者", "Partis à l'aube, les randonneurs ont atteint le refuge à midi.", "徒步者们黎明出发，中午到达了山屋。", "course"],
      ["les secours (m. pl.)", "le sə.kuʁ", "救援人员、救援队", "Les secours sont arrivés en moins de dix minutes.", "救援人员不到十分钟就赶到了。", "course"],
      ["alerter", "a.lɛʁ.te", "报警、通知（危险）", "Alertés par les voisins, les pompiers sont intervenus rapidement.", "接到邻居报警后，消防员迅速出动。", "course"],
      ["se dissiper", "sə di.si.pe", "（雾、疑虑）消散", "Le brouillard s'est dissipé en fin de matinée.", "雾在临近中午时散去了。", "course"],
      ["s'égarer", "se.ɡa.ʁe", "迷路（书面）", "Nous nous sommes égarés dans la forêt.", "我们在森林里迷了路。", "course"],
      ["le sommet", "lə sɔ.mɛ", "山顶；峰会", "Arrivés au sommet, ils ont pris quelques photos.", "到达山顶后，他们拍了几张照片。", "course"],
      ["épuisé · épuisée", "e.pɥi.ze", "精疲力竭的", "Épuisée, elle s'est endormie tout de suite.", "她累坏了，马上就睡着了。", "course"],
      ["sain et sauf · saine et sauve", "sɛ̃ e sof · sɛn e sov", "安然无恙", "Les enfants ont été retrouvés sains et saufs.", "孩子们被找到时安然无恙。", "course"],
      ["imprudent · imprudente", "ɛ̃.pʁy.dɑ̃ · ɛ̃.pʁy.dɑ̃t", "不谨慎的、冒失的", "Partir sans carte, c'était imprudent.", "不带地图就出发，太冒失了。", "course"],
      ["le sauveteur", "lə sov.tœʁ", "救援者", "Les sauveteurs ont travaillé toute la nuit.", "救援者们工作了一整夜。", "course"],
      ["le brouillard", "lə bʁu.jaʁ", "雾", "Un épais brouillard couvrait la vallée.", "浓雾笼罩着山谷。", "course"],
    ],
    dialogue: [
      ["", "Deux randonneurs, partis samedi matin de Chamonix, ont été retrouvés sains et saufs dimanche à l'aube.", "两名周六上午从霞慕尼出发的徒步者，于周日黎明被找到，安然无恙。"],
      ["", "Ayant sous-estimé la durée de l'itinéraire, les deux jeunes hommes se sont égarés en redescendant du sommet.", "由于低估了路线所需时间，两名年轻人在下山途中迷了路。"],
      ["", "Surpris par un épais brouillard, ils n'ont pas pu retrouver le sentier.", "突遇浓雾，他们没能找回山路。"],
      ["", "Ne les voyant pas rentrer, le propriétaire de leur gîte a alerté les secours vers vingt-deux heures.", "见他们迟迟未归，民宿老板在晚上十点左右报了警。"],
      ["", "La nuit tombée, aucune recherche n'était possible. L'hélicoptère n'a décollé qu'au lever du jour, une fois le brouillard dissipé.", "夜幕降临后，搜索无法进行。直升机直到天亮、雾散之后才起飞。"],
      ["", "Épuisés mais en bonne santé, les deux randonneurs ont été transportés à l'hôpital par précaution.", "两名徒步者精疲力竭，但身体无恙，出于谨慎被送往医院。"],
      ["记者", "Capitaine Morel, vous avez dirigé l'opération. Comment les avez-vous retrouvés ?", "莫雷尔上尉，您指挥了这次行动。你们是怎么找到他们的？"],
      ["救援队长", "Ayant gardé leur téléphone allumé, ils ont pu nous envoyer leur position dès que le réseau est revenu. Cela nous a fait gagner un temps précieux.", "他们一直没关手机，信号一恢复就把位置发给了我们。这为我们赢得了宝贵的时间。"],
      ["记者", "Ont-ils été imprudents ?", "他们是不是太冒失了？"],
      ["救援队长", "Un peu. Partis sans lampe ni vêtements chauds, ils ont pris un vrai risque. Mais une fois l'alerte donnée, ils ont eu les bons réflexes : ils sont restés ensemble et à l'abri.", "有一点。他们没带手电也没带保暖衣物就出发了，确实很冒险。不过报警之后，他们的反应是对的：两人待在一起，找了地方避风。"],
      ["", "Les sauveteurs rappellent qu'il faut toujours consulter la météo avant une randonnée et prévenir un proche de son itinéraire.", "救援人员提醒：徒步前一定要查看天气，并把路线告诉亲友。"],
    ],
    sentences: [
      ["Ayant sous-estimé la durée de l'itinéraire, ils se sont égarés.", "由于低估了路线所需时间，他们迷路了。"],
      ["Surpris par un épais brouillard, ils n'ont pas pu retrouver le sentier.", "突遇浓雾，他们没能找回山路。"],
      ["La nuit tombée, aucune recherche n'était possible.", "夜幕降临后，搜索无法进行。"],
      ["Épuisés mais en bonne santé, ils ont été transportés à l'hôpital.", "他们精疲力竭但身体无恙，被送往医院。"],
      ["Une fois l'alerte donnée, ils sont restés ensemble.", "报警之后，他们一直待在一起。"],
    ],
    cloze: [
      ["___ en retard, elle a manqué le début de la réunion.", ["Étant arrivée", "Ayant arrivée", "Ayant arrivé"], 0, "她到得晚，错过了会议的开头。", "arriver 用 être：étant arrivée，并与阴性主语 elle 配合"],
      ["___ ses devoirs, Paul est sorti jouer.", ["Ayant fini", "Finissant", "Étant fini"], 0, "做完作业后，保罗出去玩了。", "先做完再出去 → 复合分词 ayant fini；finissant 表示同时"],
      ["___ de réponse, je vous relance.", ["N'ayant pas reçu", "Ne pas ayant reçu", "N'étant pas reçu"], 0, "由于未收到回复，我再次与您联系。", "否定：ne 和 pas 夹住 ayant；recevoir 用 avoir"],
      ["Le contrat ___, les deux parties se sont serré la main.", ["signé", "signant", "ayant signé"], 0, "合同签好后，双方握了手。", "独立分词结构：合同是“被签”的 → 过去分词 signé；ayant signé 会变成“合同签了字”"],
      ["Les enfants s'étant ___ tôt, la maison était calme.", ["couchés", "couché", "coucher"], 0, "孩子们早早睡了，家里很安静。", "代词式动词用 être，过去分词与主语 les enfants 配合"],
      ["Ayant terminé mon rapport, ___.", ["je suis parti plus tôt", "mon chef m'a laissé partir", "le bureau était vide"], 0, "写完报告后，我提前走了。", "分词的逻辑主语必须是主句主语：是“我”写完了报告"],
    ],
    discover: [
      { q: "« Ayant perdu mes clés, mon voisin m'a aidé. » 这句话有什么问题？", opts: ["分词的逻辑主语必须是主句主语：句子变成了“邻居丢了钥匙”", "应该用 étant perdu", "没有问题"], a: 0, why: "改成 Comme j'avais perdu mes clés, mon voisin m'a aidé，或 Ayant perdu mes clés, j'ai demandé de l'aide à mon voisin。" },
      { q: "« Arrivés à l'hôtel, ils ont dîné. » 句首省略了什么？", opts: ["étant：Étant arrivés…", "ayant：Ayant arrivés…", "什么都没省略，这是被动"], a: 0, why: "être 型动词的复合分词常常省略 étant，只留与主语配合的过去分词。" },
    ],
    write: {
      prompt: "写一篇 120–180 词的社会新闻短讯（事故、救援、好人好事……），至少用 4 个分词结构：ayant / étant + 过去分词、单独的过去分词、独立分词结构各至少一次。注意分词的逻辑主语。",
      model: "Un incendie maîtrisé grâce à la vigilance d'une voisine\nUn incendie s'est déclaré mardi soir dans un immeuble du centre-ville de Lyon. Alertée par une forte odeur de fumée, une habitante du troisième étage a immédiatement appelé les pompiers.\nArrivés sur place en moins de dix minutes, ceux-ci ont évacué une quarantaine de résidents avant de s'attaquer aux flammes. Ayant pris naissance dans une cuisine, le feu s'est rapidement propagé à l'appartement voisin, heureusement inoccupé.\nL'incendie maîtrisé, la plupart des habitants ont pu regagner leur logement vers minuit, à l'exception de deux familles, relogées provisoirement par la mairie. N'ayant subi que des blessures légères, un homme a été soigné sur place.\nSelon les premiers éléments de l'enquête, l'incendie serait dû à une casserole oubliée sur le feu. Les pompiers rappellent qu'il ne faut jamais laisser une cuisson sans surveillance.",
    },
  },
  {
    id: 'b2-07', emoji: '🔧', title: '我让人修了车', sub: 'faire / se faire / laisser + 原形', can: '能说清楚哪些事是自己做的、哪些是请别人做的，以及自己遭遇了什么', scene: null, grammar: ['g-faire-faire'],
    words: [],
    newWords: [
      ["le garagiste", "lə ɡa.ʁa.ʒist", "汽修工、修车铺老板", "J'ai fait réviser ma voiture chez le garagiste.", "我在修车铺给车做了保养。", "course"],
      ["le devis", "lə də.vi", "报价单、估价", "Demandez toujours plusieurs devis avant de commencer les travaux.", "开工前一定要多要几份报价。", "course"],
      ["l'artisan (m.)", "laʁ.ti.zɑ̃", "手艺人、个体工匠", "Nous avons fait appel à un artisan du quartier.", "我们请了街区的一位工匠。", "course"],
      ["repeindre", "ʁə.pɛ̃dʁ", "重新粉刷", "Nous allons faire repeindre la cuisine.", "我们打算请人重新粉刷厨房。", "course"],
      ["les travaux (m. pl.)", "le tʁa.vo", "（装修、施工）工程", "Les travaux dureront trois semaines.", "工程将持续三周。", "course"],
      ["se faire avoir", "sə fɛʁ a.vwaʁ", "上当、被坑", "Huit cents euros ? Tu t'es fait avoir !", "八百欧？你被坑了！", "course"],
      ["le plombier", "lə plɔ̃.bje", "水管工", "J'ai fait venir le plombier ce matin.", "今天早上我叫了水管工来。", "course"],
      ["la fuite", "la fɥit", "泄漏、漏水", "Il y a une fuite d'eau sous l'évier.", "水槽下面漏水了。", "course"],
      ["bricoler", "bʁi.kɔ.le", "自己动手修修弄弄", "Il adore bricoler le week-end.", "他周末很喜欢自己动手修东西。", "course"],
      ["l'arnaque (f.)", "laʁ.nak", "骗局、宰人（口语）", "Ce prix, c'est une vraie arnaque !", "这个价格，简直是宰人！", "course"],
      ["convaincre", "kɔ̃.vɛ̃kʁ", "说服", "Je me suis laissé convaincre par ses arguments.", "我被他的理由说服了。", "course"],
    ],
    dialogue: [
      ["Julien", "Tiens, ta voiture n'est plus en panne ?", "咦，你的车不坏了？"],
      ["我", "Non, je l'ai fait réparer la semaine dernière. Pour une fois, le garagiste m'a fait un devis raisonnable.", "不坏了，上周我送去修好了。难得一次，修车师傅给我的报价挺合理。"],
      ["Julien", "Tu as de la chance. Moi, l'an dernier, je me suis fait avoir : on m'a fait payer huit cents euros pour un simple changement de pneus. Quelle arnaque !", "你运气真好。我去年被坑了：换个轮胎而已，收了我八百欧。简直是宰人！"],
      ["我", "Huit cents euros ? Tu aurais dû faire faire plusieurs devis !", "八百欧？你应该多找几家报价的！"],
      ["Julien", "Je sais… Bon, et ton appartement, les travaux avancent ?", "我知道……好了，你的公寓呢，装修进展如何？"],
      ["我", "Doucement. J'ai fait venir un plombier pour la fuite dans la salle de bains, et je vais faire repeindre le salon par un artisan.", "慢慢来。我叫了水管工来修浴室漏水，客厅打算请个师傅重新刷。"],
      ["Julien", "Tu ne veux pas le repeindre toi-même ? Je peux t'aider, j'adore bricoler.", "你不想自己刷吗？我可以帮你，我最喜欢动手了。"],
      ["我", "C'est gentil, mais je me suis laissé convaincre par ma femme : elle veut un travail de pro !", "你真好，不过我被我太太说服了：她要专业水准！"],
      ["Julien", "Je comprends. Au fait, tu t'es fait couper les cheveux ? Ça te va bien.", "可以理解。对了，你剪头发了？挺适合你的。"],
      ["我", "Merci ! Oui, je me les suis fait couper hier. Et toi, laisse-moi deviner : tu les laisses pousser ?", "谢谢！对，昨天剪的。你呢，让我猜猜：你在留长发？"],
      ["Julien", "Exactement. Ma fille me fait rire : elle dit que je ressemble à un rockeur des années 70 !", "没错。我女儿逗死我了：她说我像七十年代的摇滚歌手！"],
    ],
    sentences: [
      ["Je l'ai fait réparer la semaine dernière.", "上周我把它送去修好了。"],
      ["On m'a fait payer huit cents euros.", "他们收了我八百欧。"],
      ["Je vais faire repeindre le salon par un artisan.", "我要请一位师傅重新粉刷客厅。"],
      ["Tu t'es fait couper les cheveux ?", "你剪头发了？"],
      ["Je me suis laissé convaincre par ma femme.", "我被我太太说服了。"],
    ],
    cloze: [
      ["Ma voiture ? Je ___ réparer demain.", ["la fais", "fais la", "la faire"], 0, "我的车？我明天送去修。", "宾语代词放在 faire 前面：je la fais réparer"],
      ["Elle s'est ___ voler son sac dans le métro.", ["fait", "faite", "faits"], 0, "她在地铁里被偷了包。", "后接原形的 fait 永远不配合，se faire + 原形也一样"],
      ["Les documents que j'ai ___ traduire sont prêts.", ["fait", "faits", "faire"], 0, "我请人翻译的文件已经好了。", "fait + 原形不配合，即使前面有阳性复数宾语 que（= les documents）"],
      ["Le professeur ___ a fait lire ce poème.", ["leur", "les", "lui les"], 0, "老师让他们读了这首诗。", "原形 lire 已有宾语 ce poème，执行者要用间接宾语 leur"],
      ["Cette nouvelle m'a ___ très heureux.", ["rendu", "fait", "laissé"], 0, "这个消息让我非常高兴。", "“让……变得 + 形容词”用 rendre；faire 后面接原形动词"],
      ["Hier, je suis allé chez le coiffeur : je ___ les cheveux.", ["me suis fait couper", "ai coupé", "me suis coupé"], 0, "昨天我去了理发店：剪了头发。", "别人给自己剪 → se faire couper；j'ai coupé 表示自己动手"],
    ],
    discover: [
      { q: "中文“我昨天剪了头发”（在理发店），法语怎么说？", opts: ["Je me suis fait couper les cheveux hier.", "J'ai coupé mes cheveux hier."], a: 0, why: "J'ai coupé mes cheveux 是自己拿剪刀剪的。中文不区分，法语必须说清楚谁动手。" },
      { q: "« J'ai fait venir le plombier. » 和 « J'ai laissé venir le plombier. » 有什么区别？", opts: ["faire = 我叫他来；laisser = 我允许他来 / 没拦着", "没有区别", "faire 用于过去，laisser 用于现在"], a: 0, why: "faire 是主动促使，laisser 是允许或听任。" },
    ],
    write: {
      prompt: "给朋友写一封 120–180 词的信，讲讲你搬家或装修的经历：哪些事是自己做的，哪些是请人做的，有没有被坑。faire + 原形、se faire + 原形、laisser + 原形至少各用一次。",
      model: "Chère Léa,\nÇa y est, nous avons enfin emménagé ! Mais quelle aventure…\nComme l'appartement était ancien, nous avons dû faire refaire toute l'installation électrique. J'ai demandé trois devis, et heureusement : le premier électricien voulait nous faire payer presque le double des autres ! J'ai failli me faire avoir.\nPour la cuisine, nous avons fait venir un artisan recommandé par des amis. Il a fait un travail magnifique, et en plus, il nous a laissé choisir chaque détail. Les murs, en revanche, nous les avons repeints nous-mêmes : Marc adore bricoler, et je me suis laissé convaincre de l'aider. Résultat : trois week-ends de peinture et des courbatures partout !\nLe seul vrai problème, c'est une fuite dans la salle de bains. Le plombier doit passer jeudi. En attendant, je me fais réveiller tous les matins par le bruit de l'eau qui goutte…\nViens nous voir dès que tu peux, je te ferai visiter !\nBises,\nLin",
    },
  },
  {
    id: 'b2-08', emoji: '🎯', title: '正是这一点', sub: '强调结构', can: '能在采访和讨论中突出重点，说出“正是……”“我最……的是……”', scene: null, grammar: ['g-mise-relief'],
    words: [],
    newWords: [
      ["le potier · la potière", "lə pɔ.tje · la pɔ.tjɛʁ", "陶艺师", "C'est un vieux potier qui m'a appris le métier.", "是一位老陶艺师教会了我这门手艺。", "course"],
      ["l'atelier (m.)", "la.tə.lje", "工作室、作坊", "Ce qui me plaît dans cet atelier, c'est la lumière.", "这间工作室让我喜欢的，是它的光线。", "course"],
      ["le savoir-faire", "lə sa.vwaʁ.fɛʁ", "技艺、专业本领", "Ce savoir-faire se transmet depuis des générations.", "这门技艺已传承了好几代。", "course"],
      ["façonner", "fa.sɔ.ne", "塑造、加工成形", "Elle façonne chaque bol à la main.", "她手工制作每一只碗。", "course"],
      ["l'argile (f.)", "laʁ.ʒil", "黏土", "L'argile doit sécher plusieurs jours avant la cuisson.", "黏土在烧制前要晾干好几天。", "course"],
      ["le déclic", "lə de.klik", "（突然的）领悟、契机", "C'est ce voyage qui a été le déclic.", "正是这次旅行让我豁然开朗。", "course"],
      ["le tournant", "lə tuʁ.nɑ̃", "转折点", "Cette rencontre a marqué un tournant dans sa vie.", "这次相遇成了他人生的转折点。", "course"],
      ["fier · fière", "fjɛʁ", "自豪的", "Ce dont je suis la plus fière, c'est de mes élèves.", "我最自豪的，是我的学生们。", "course"],
      ["la cuisson", "la kɥi.sɔ̃", "烧制；烹调", "La cuisson dure environ dix heures.", "烧制大约要十个小时。", "course"],
      ["imprévisible", "ɛ̃.pʁe.vi.zibl", "无法预料的", "Le résultat est toujours un peu imprévisible.", "结果总是有点无法预料。", "course"],
      ["transmettre", "tʁɑ̃s.mɛtʁ", "传授、传递", "Ce que je veux, c'est transmettre ma passion.", "我想要的，是把我的热爱传下去。", "course"],
      ["la patience", "la pa.sjɑ̃s", "耐心", "La patience, c'est la qualité la plus importante dans ce métier.", "耐心，是这一行最重要的品质。", "course"],
    ],
    dialogue: [
      ["记者", "Hélène Garnier, vous étiez avocate à Paris. Qu'est-ce qui vous a poussée à devenir potière ?", "埃莱娜·加尼耶，您以前在巴黎当律师。是什么促使您成为陶艺师的？"],
      ["Hélène", "C'est un stage d'été qui a tout changé. J'avais trente-cinq ans et je cherchais simplement une activité pour me détendre.", "是一次暑期体验课改变了一切。那年我三十五岁，只是想找个放松的活动。"],
      ["记者", "Et c'est là que vous avez eu le déclic ?", "您就是在那时候豁然开朗的？"],
      ["Hélène", "Exactement. Ce qui m'a frappée, c'est le contact avec l'argile : on façonne la matière avec ses mains et on ne pense plus à rien.", "没错。打动我的，是和黏土的接触：用双手塑造材料，脑子里什么都不想了。"],
      ["记者", "Quitter un métier aussi prestigieux, ce n'était pas un peu risqué ?", "离开这么体面的职业，不觉得有点冒险吗？"],
      ["Hélène", "Si j'ai changé de vie, c'est parce que je ne me reconnaissais plus dans mon travail. Le vrai tournant, c'est le jour où j'ai ouvert mon atelier, ici, en Bourgogne.", "我之所以换一种活法，是因为我在工作中已经找不到自己了。真正的转折点，是我在勃艮第这里开工作室的那一天。"],
      ["记者", "Qu'est-ce que vous préférez dans ce métier ?", "这一行里您最喜欢什么？"],
      ["Hélène", "Ce que j'aime par-dessus tout, c'est la cuisson. Le four, il est imprévisible : on ne sait jamais exactement ce qu'on va obtenir.", "我最爱的是烧制。窑这东西没法预料：你永远不知道最后会烧出什么来。"],
      ["记者", "Et de quoi êtes-vous la plus fière ?", "那您最自豪的是什么？"],
      ["Hélène", "Ce dont je suis la plus fière, c'est de transmettre ce savoir-faire. Ce sont mes élèves qui me donnent envie de continuer.", "我最自豪的，是能把这门手艺传下去。正是我的学生们让我想一直做下去。"],
      ["记者", "Un conseil pour ceux qui rêvent de se reconvertir ?", "对那些梦想转行的人，您有什么建议？"],
      ["Hélène", "La patience, c'est ça la clé. Ce n'est pas en six mois qu'on apprend un métier manuel.", "耐心，这才是关键。手艺活可不是半年就能学会的。"],
    ],
    sentences: [
      ["C'est un stage d'été qui a tout changé.", "是一次暑期体验课改变了一切。"],
      ["Ce qui m'a frappée, c'est le contact avec l'argile.", "打动我的，是和黏土的接触。"],
      ["Ce que j'aime par-dessus tout, c'est la cuisson.", "我最爱的是烧制。"],
      ["Ce dont je suis la plus fière, c'est de transmettre ce savoir-faire.", "我最自豪的，是能把这门手艺传下去。"],
      ["Ce n'est pas en six mois qu'on apprend un métier manuel.", "手艺活可不是半年就能学会的。"],
    ],
    cloze: [
      ["C'est moi qui ___ organisé la réunion.", ["ai", "a", "est"], 0, "会议是我组织的。", "qui 后面的动词与被强调的 moi 配合：moi qui ai"],
      ["C'est à Lyon ___ j'ai fait mes études.", ["que", "où", "qui"], 0, "我是在里昂上的大学。", "强调地点也用 c'est … que，不用 où"],
      ["___ me dérange, c'est le bruit.", ["Ce qui", "Ce que", "Qu'est-ce qui"], 0, "让我烦的，是噪音。", "从句缺主语（___ me dérange）→ ce qui"],
      ["___ j'ai besoin, c'est d'un peu de temps.", ["Ce dont", "Ce que", "Ce qui"], 0, "我需要的，是一点时间。", "avoir besoin de → ce dont"],
      ["Le chocolat, je ___ adore.", ["l'", "y", "en"], 0, "巧克力，我超爱。", "脱离结构要用代词复指；adorer 是直接及物动词 → l'"],
      ["S'il est parti, c'est ___ il était fatigué.", ["parce qu'", "pourquoi", "car"], 0, "他之所以走了，是因为他累了。", "si …, c'est parce que …；car 不能放在 c'est 后面，c'est pourquoi 表示结果"],
    ],
    discover: [
      { q: "中文“我是在巴黎学的法语”（强调地点），法语怎么说？", opts: ["C'est à Paris que j'ai appris le français.", "C'est à Paris où j'ai appris le français.", "C'est Paris que j'ai appris le français."], a: 0, why: "c'est + 介词短语 + que。中文的“是……的”正好对应 c'est … que，但注意不能用 où，介词 à 也不能丢。" },
      { q: "« Ce que je préfère, c'est … » 里为什么用 ce que 而不是 ce qui？", opts: ["préférer 需要宾语：je préfère quelque chose → 宾语用 que", "因为后面是 c'est", "两个都可以"], a: 0, why: "看从句缺什么：缺宾语用 ce que（ce que je préfère），缺主语用 ce qui（ce qui me plaît）。" },
    ],
    write: {
      prompt: "写一篇 120–200 词的短文，介绍一个改变了你的经历或决定（例如你为什么学法语）。至少使用 5 种强调结构：c'est … qui / que、ce qui / ce que / ce dont …, c'est …、脱离结构、si …, c'est parce que …。",
      model: "On me demande souvent pourquoi j'apprends le français. Si je me suis lancé dans cette aventure, c'est à cause d'un vieux film en noir et blanc que j'ai vu par hasard à l'université.\nCe qui m'a frappé d'abord, c'est la musique de la langue. Je ne comprenais pas un mot, mais j'avais l'impression d'écouter une chanson. C'est ce soir-là que j'ai décidé de m'inscrire à un cours.\nLes débuts ont été difficiles. Les verbes irréguliers, je les ai détestés pendant des mois ! Ce dont j'avais besoin, c'était de motivation, et ce sont mes amis français qui me l'ont donnée : grâce à eux, j'ai découvert une culture, pas seulement une grammaire.\nAujourd'hui, ce que je préfère, c'est lire des romans dans le texte. Et ce dont je suis le plus fier, c'est d'avoir pu discuter pendant deux heures avec un libraire parisien sans passer une seule fois à l'anglais.\nLe vrai tournant, c'est le jour où j'ai compris qu'on ne finit jamais d'apprendre une langue. Et c'est justement cela qui me plaît.",
    },
  },
];
