// 法语核心课程 B1（下）：b1-11 … b1-20
// 间接引语、时态配合、原因结果、目的让步、时间从句、表达观点、名词化、不定代词、条件式过去时、正式语域
// 格式说明见 docs/SYLLABUS.md 第二部分

export const grammar = [
  {
    id: "g-indirect", title: "间接引语（一）：主句为现在时",
    body: `<p>转述别人的话（“他说……”“她问……”）时，法语要把直接引语改成从句。主句动词是<b>现在时</b>（il dit, elle demande, il veut savoir）时，从句的<b>时态不变</b>，只需要改连接词、人称和语序。</p>
<table>
<tr><th>直接引语</th><th>间接引语</th><th>连接词</th></tr>
<tr><td>陈述句：« Je suis malade. »</td><td>Il dit <b>qu'</b>il est malade.</td><td>que（不能省略）</td></tr>
<tr><td>一般疑问句：« Tu viens ? » / « Est-ce que tu viens ? »</td><td>Il demande <b>si</b> je viens.</td><td>si（si + il / ils → s'il, s'ils）</td></tr>
<tr><td>« Qu'est-ce que tu fais ? »</td><td>Il demande <b>ce que</b> je fais.</td><td>qu'est-ce que → ce que</td></tr>
<tr><td>« Qu'est-ce qui se passe ? »</td><td>Il demande <b>ce qui</b> se passe.</td><td>qu'est-ce qui → ce qui</td></tr>
<tr><td>« Où habitez-vous ? »</td><td>Il demande <b>où</b> j'habite.</td><td>où, quand, comment, pourquoi, combien, qui, quel 原样保留</td></tr>
<tr><td>命令句：« Appelle-moi ! »</td><td>Il me dit <b>de</b> l'appeler.</td><td>dire / demander à qn <b>de</b> + 原形</td></tr>
</table>
<p><b>要同时改的东西：</b></p>
<ul>
<li>人称和主有词跟着说话人变：« Je cherche <b>mon</b> sac. » → Elle dit qu'<b>elle</b> cherche <b>son</b> sac.</li>
<li>间接问句<b>取消倒装、取消 est-ce que、去掉问号</b>：Il demande où elle travaille.（不是 *où travaille-t-elle ?）</li>
<li>否定命令：« Ne crie pas ! » → Il me dit <b>de ne pas</b> crier（ne pas 一起放在原形前）。</li>
<li>几个从句并列时，每个都要重复连接词：Il dit <b>qu'</b>il est fatigué et <b>qu'</b>il rentre tôt.</li>
</ul>
<p><b>常用引述动词：</b>dire, expliquer, répondre, annoncer, affirmer（+ que）；demander, vouloir savoir, se demander（+ si / ce que / où…）；dire / demander / conseiller à qn de + 原形。</p>
<p>主句是现在时，原话里的将来时、过去时都照搬：« Je viendrai. » → Il dit qu'il <b>viendra</b>.　« J'ai oublié. » → Il dit qu'il <b>a oublié</b>. 主句是过去时的情况见下一课。</p>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li>✗ Il demande <i>qu'est-ce que</i> tu veux. → ✓ Il demande <b>ce que</b> tu veux.</li>
<li>✗ Il demande <i>est-ce que</i> tu viens. → ✓ Il demande <b>si</b> tu viens.</li>
<li>✗ Il dit il arrive.（中文“他说他到了”不需要连词）→ ✓ Il dit <b>qu'</b>il arrive.</li>
<li>✗ <i>si il</i> → ✓ <b>s'il</b>；但 si elle、si on 不缩写。</li>
<li>✗ Il me dit <i>que je l'appelle</i>（想表达命令）→ ✓ Il me dit <b>de</b> l'appeler.</li>
</ul>`,
    ex: [["Paul dit qu'il viendra ce soir.", "保罗说他今晚会来。"], ["Elle demande si tu as reçu son message.", "她问你有没有收到她的消息。"], ["Je me demande ce qu'il veut.", "我在想他到底想要什么。"], ["Ma mère me dit de ne pas rentrer trop tard.", "我妈妈叫我别回来太晚。"]],
  },
  {
    id: "g-concordance", title: "间接引语（二）：主句为过去时的时态配合",
    body: `<p>主句动词是<b>过去时</b>（il a dit, elle a demandé, il expliquait）时，从句的时态要“往过去退一步”，这叫<b>时态配合</b>（concordance des temps）。中文没有这种变化——“她说她很累”在中文里不变，但法语里必须变。</p>
<table>
<tr><th>原话的时态 → 转述后</th><th>直接引语</th><th>间接引语（主句过去时）</th></tr>
<tr><td>现在时 → <b>未完成过去时</b></td><td>« Je suis fatiguée. »</td><td>Elle a dit qu'elle <b>était</b> fatiguée.</td></tr>
<tr><td>复合过去时 → <b>愈过去时</b></td><td>« J'ai mal dormi. »</td><td>Elle a dit qu'elle <b>avait mal dormi</b>.</td></tr>
<tr><td>简单将来时 → <b>条件式现在时</b></td><td>« Je prendrai un congé. »</td><td>Elle a dit qu'elle <b>prendrait</b> un congé.</td></tr>
<tr><td>近将来时 → aller 的<b>未完成过去时</b> + 原形</td><td>« Je vais démissionner. »</td><td>Elle a dit qu'elle <b>allait</b> démissionner.</td></tr>
<tr><td>先将来时 → 条件式过去时</td><td>« J'aurai fini à midi. »</td><td>Elle a dit qu'elle <b>aurait fini</b> à midi.</td></tr>
<tr><td>未完成过去时、愈过去时、条件式 → <b>不变</b></td><td>« J'étais malade. »</td><td>Elle a dit qu'elle <b>était</b> malade.</td></tr>
</table>
<p><b>时间、地点词也要换</b>（说话的那一天已经过去了）：</p>
<table>
<tr><th>直接引语</th><th>间接引语</th></tr>
<tr><td>aujourd'hui</td><td>ce jour-là</td></tr>
<tr><td>hier</td><td>la veille</td></tr>
<tr><td>demain</td><td>le lendemain</td></tr>
<tr><td>la semaine prochaine / dernière</td><td>la semaine suivante / précédente</td></tr>
<tr><td>il y a deux jours</td><td>deux jours plus tôt</td></tr>
<tr><td>dans trois jours</td><td>trois jours plus tard</td></tr>
<tr><td>maintenant · ici</td><td>à ce moment-là · là</td></tr>
</table>
<p><b>命令句</b>不受时态影响：Il m'a dit <b>de</b> me reposer. <b>问句</b>照样配合：« Tu pourras me remplacer ? » → Elle m'a demandé <b>si</b> je <b>pourrais</b> la remplacer.</p>
<p><b>例外：</b>如果话里的内容现在仍然成立，口语里可以保留现在时：Il m'a dit qu'il <b>habite</b> à Lyon（他现在还住那儿）。但考试和书面语里，用时态配合最稳妥。</p>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li>✗ Elle m'a dit qu'elle <i>est</i> fatiguée et qu'elle <i>prendra</i> un congé. → ✓ … qu'elle <b>était</b> fatiguée et qu'elle <b>prendrait</b> un congé.</li>
<li>✗ Il a dit qu'il viendrait <i>demain</i>（说的是上个月的事）→ ✓ … qu'il viendrait <b>le lendemain</b>.</li>
<li>条件式 prendrait 和未完成过去时 prenait 只差一个 r：原话是将来时 → 用条件式（带 r）；原话是现在时 → 用未完成过去时（不带 r）。</li>
</ul>`,
    ex: [["Claire m'a dit qu'elle était épuisée.", "克莱尔跟我说她累坏了。"], ["Il m'a expliqué qu'il avait raté son train.", "他跟我解释说他没赶上火车。"], ["Elle a promis qu'elle rappellerait le lendemain.", "她答应第二天会回电话。"], ["Ils m'ont demandé si j'allais rester longtemps.", "他们问我是不是要待很久。"]],
  },
  {
    id: "g-cause", title: "原因与结果：parce que, puisque, comme, grâce à… / donc, si bien que…",
    body: `<p><b>一、表示原因</b></p>
<table>
<tr><th>表达</th><th>后接</th><th>用法</th><th>例句</th></tr>
<tr><td>parce que</td><td>从句</td><td>最常用；回答 pourquoi，给出对方不知道的原因</td><td>Je suis parti <b>parce que</b> le loyer était trop cher.</td></tr>
<tr><td>puisque</td><td>从句</td><td>原因双方都知道、显而易见，带“既然……”的语气</td><td><b>Puisque</b> tu travailles chez toi, tu peux habiter loin.</td></tr>
<tr><td>comme</td><td>从句</td><td><b>放在句首</b>，先交代原因再说结果</td><td><b>Comme</b> il pleuvait, nous sommes restés.</td></tr>
<tr><td>car</td><td>从句</td><td>偏书面；<b>只能放在主句后面</b>，不能放句首，不能回答 pourquoi</td><td>Il est absent, <b>car</b> il est malade.</td></tr>
<tr><td>grâce à</td><td>名词 / 代词</td><td>多亏了，<b>好的</b>原因</td><td><b>Grâce au</b> télétravail, je vis à la campagne.</td></tr>
<tr><td>à cause de</td><td>名词 / 代词</td><td>由于，<b>坏的</b>或中性的原因</td><td><b>À cause du</b> bruit, je dormais mal.</td></tr>
<tr><td>en raison de</td><td>名词</td><td>正式、书面（公告、新闻）</td><td>Le train est supprimé <b>en raison d'</b>un accident.</td></tr>
</table>
<p><b>二、表示结果</b></p>
<table>
<tr><th>表达</th><th>用法</th><th>例句</th></tr>
<tr><td>donc</td><td>所以；可放句首，也常放在变位动词后</td><td>Je travaille chez moi, je n'ai <b>donc</b> plus de trajet.</td></tr>
<tr><td>alors</td><td>那么、所以；口语最常用</td><td>Il faisait beau, <b>alors</b> on est sortis.</td></tr>
<tr><td>c'est pourquoi</td><td>正因如此；比 donc 正式</td><td>Les loyers ont augmenté, <b>c'est pourquoi</b> beaucoup de familles partent.</td></tr>
<tr><td>si bien que + 直陈式</td><td>以至于、结果是</td><td>Il y avait des travaux, <b>si bien que</b> je dormais mal.</td></tr>
<tr><td>par conséquent</td><td>因此；书面</td><td>Le magasin est fermé ; <b>par conséquent</b>, la vente est annulée.</td></tr>
</table>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li><b>“因为……所以……”不能直译成 parce que … donc …</b>，法语一句话里只用其中一个：✗ <i>Parce que</i> le loyer était cher, <i>donc</i> je suis parti. → ✓ <b>Comme</b> le loyer était cher, je suis parti. / ✓ Le loyer était cher, <b>donc</b> je suis parti.</li>
<li>句首表示原因用 <b>comme</b>，不用 car：✗ <i>Car</i> il pleuvait, … → ✓ <b>Comme</b> il pleuvait, …</li>
<li>grâce à / à cause de 后面只能接<b>名词</b>，不能接句子：✗ à cause de il pleut → ✓ à cause de la pluie / ✓ parce qu'il pleut.</li>
<li>别忘了缩合：à cause <b>du</b> bruit，grâce <b>aux</b> transports（de + le = du，à + les = aux）。</li>
<li>grâce à 只用于好结果：✗ grâce à la grève, je suis arrivé en retard → ✓ <b>à cause de</b> la grève.</li>
<li>回答 Pourquoi ? 只能用 parce que：— Pourquoi tu pars ? — <b>Parce que</b> j'en ai assez du bruit.（不说 *Car… / *Puisque…）</li>
</ul>`,
    ex: [["Comme les loyers sont trop chers, beaucoup de jeunes quittent Paris.", "由于房租太贵，很多年轻人离开巴黎。"], ["Grâce au télétravail, je n'ai plus besoin de prendre le métro.", "多亏了远程办公，我不用再坐地铁了。"], ["Puisque tu connais la ville, c'est toi qui choisis le restaurant.", "既然你熟悉这座城市，那就由你选餐馆。"], ["Il y avait des embouteillages, si bien que je suis arrivé en retard.", "当时堵车，结果我迟到了。"]],
  },
  {
    id: "g-but", title: "目的与让步：pour (que), afin de / bien que, même si, malgré",
    body: `<p><b>一、表示目的（为了……）</b></p>
<table>
<tr><th>主语情况</th><th>结构</th><th>例句</th></tr>
<tr><td>前后<b>同一个</b>主语</td><td>pour / afin de + 原形</td><td>J'étudie le soir <b>pour</b> progresser.（我学习，我进步）</td></tr>
<tr><td>前后<b>不同</b>主语</td><td>pour que / afin que + <b>虚拟式</b></td><td>Je parle lentement <b>pour que</b> tu <b>comprennes</b>.（我说，你懂）</td></tr>
<tr><td>否定的目的</td><td>pour ne pas + 原形；pour que … ne … pas + 虚拟式</td><td>Je pars tôt <b>pour ne pas</b> rater le train.</td></tr>
</table>
<p>afin de / afin que 和 pour / pour que 意思一样，更正式，常见于书面语和邮件。</p>
<p><b>二、表示让步（虽然、即使）</b></p>
<table>
<tr><th>表达</th><th>后接</th><th>例句</th></tr>
<tr><td>bien que</td><td><b>虚拟式</b></td><td><b>Bien que</b> ce <b>soit</b> difficile, je continue.</td></tr>
<tr><td>même si</td><td><b>直陈式</b>（现在时、未完成过去时等；不接将来时和条件式）</td><td><b>Même si</b> je <b>suis</b> fatigué, je fais mes exercices.</td></tr>
<tr><td>malgré</td><td><b>名词</b> / 代词</td><td><b>Malgré</b> la fatigue, je fais mes exercices.</td></tr>
<tr><td>quand même</td><td>副词，放在句中或句末</td><td>C'est difficile, mais je continue <b>quand même</b>.</td></tr>
</table>
<p>bien que 表示“虽然（事实如此）”；même si 表示“即使、就算”，既可以说事实，也可以说假设：Même s'il pleut demain, on part.（就算明天下雨，我们也出发。）</p>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li><b>“虽然……但是……”不能直译成 bien que … mais …</b>：✗ <i>Bien que</i> ce soit difficile, <i>mais</i> je continue. → ✓ Bien que ce soit difficile, je continue. / ✓ C'est difficile, <b>mais</b> je continue.</li>
<li>同一主语用 pour + 原形：✗ J'économise <i>pour que je puisse</i> partir. → ✓ J'économise <b>pour pouvoir</b> partir.</li>
<li>même si 后面<b>不用虚拟式</b>：✗ même si ce <i>soit</i> cher → ✓ même si c'<b>est</b> cher；也不用将来时：✗ même s'il <i>pleuvra</i> → ✓ même s'il <b>pleut</b>.</li>
<li>bien que 后面要用虚拟式：✗ bien qu'il <i>est</i> malade → ✓ bien qu'il <b>soit</b> malade.</li>
<li>malgré 后面接名词，不接从句（malgré que 是口语，考试里避免）：✗ malgré il pleut → ✓ <b>malgré la pluie</b> / ✓ <b>bien qu'</b>il pleuve.</li>
</ul>`,
    ex: [["Je prends des cours du soir pour trouver un meilleur travail.", "我上夜校是为了找到更好的工作。"], ["Le professeur répète pour que tout le monde comprenne.", "老师重复一遍，好让大家都听懂。"], ["Bien qu'il soit fatigué, il continue à travailler.", "虽然他很累，但他还在继续工作。"], ["Malgré la pluie, nous sommes sortis.", "尽管下雨，我们还是出门了。"]],
  },
  {
    id: "g-temps", title: "时间从句：avant de / avant que, après avoir…, pendant que, dès que, jusqu'à ce que",
    body: `<p>表示“在……之前 / 之后 / 的时候 / 一……就 / 直到”时，先看后面接什么：<b>原形</b>、<b>直陈式</b>，还是<b>虚拟式</b>。</p>
<table>
<tr><th>意思</th><th>同一主语</th><th>不同主语</th></tr>
<tr><td>在……之前</td><td><b>avant de</b> + 原形<br>Lave-toi les mains <b>avant de</b> manger.</td><td><b>avant que</b> + <b>虚拟式</b><br>Range tout <b>avant que</b> les invités <b>soient</b> là.</td></tr>
<tr><td>在……之后</td><td><b>après</b> + <b>不定式过去式</b><br><b>Après avoir mangé</b>, on fera la vaisselle.</td><td><b>après que</b> + <b>直陈式</b><br><b>Après qu'</b>ils <b>sont partis</b>, on a rangé.</td></tr>
</table>
<p><b>不定式过去式</b> = avoir / être + 过去分词。用 être 的动词要配合：après avoir mangé；après <b>être arrivée</b>（她）；après <b>être partis</b>（他们）。代词式动词：après <b>m'être levé</b>，après <b>nous être reposés</b>。</p>
<table>
<tr><th>连接词</th><th>后接</th><th>意思和例句</th></tr>
<tr><td>pendant que</td><td>直陈式</td><td>在……的时候（同时进行）：<b>Pendant que</b> je cuisine, tu mets la table.</td></tr>
<tr><td>dès que</td><td>直陈式</td><td>一……就：<b>Dès que</b> le four <b>sera</b> chaud, mets le gratin.（指将来时用将来时）</td></tr>
<tr><td>jusqu'à ce que</td><td><b>虚拟式</b></td><td>直到：Remue <b>jusqu'à ce que</b> la sauce <b>soit</b> épaisse.</td></tr>
<tr><td>en attendant que</td><td><b>虚拟式</b></td><td>在等……的时候：On prend l'apéritif <b>en attendant que</b> Paul <b>vienne</b>.</td></tr>
</table>
<p><b>记忆窍门：</b>动作“还没发生”（avant que、jusqu'à ce que、en attendant que）→ 虚拟式；动作“已经发生 / 确实在发生”（après que、pendant que、dès que）→ 直陈式。</p>
<p><b>和介词区分：</b>pendant + 名词（<b>pendant</b> le dîner），pendant que + 从句（<b>pendant que</b> nous dînons）；avant + 名词（<b>avant</b> le dîner），avant de + 原形（<b>avant de</b> dîner）。</p>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li>✗ <i>Après manger</i>, … → ✓ <b>Après avoir mangé</b>, …（“做完……之后”要用不定式过去式）</li>
<li>✗ <i>avant de que</i> / ✗ <i>avant manger</i> → ✓ <b>avant de</b> manger / ✓ <b>avant que</b> tu manges</li>
<li>✗ Attends ici jusqu'à ce que je <i>reviens</i>. → ✓ … jusqu'à ce que je <b>revienne</b>.</li>
<li>✗ après <i>avoir arrivé</i> → ✓ après <b>être arrivé(e)</b>：用 être 的动词在这里也用 être。</li>
<li>正式书面语里，avant que 后面常有一个不表示否定的 ne：avant qu'il <b>ne</b> soit trop tard。这个 ne 没有否定意义，口语里一般省略。</li>
</ul>`,
    ex: [["Préchauffe le four avant de préparer la pâte.", "做面团之前先预热烤箱。"], ["Après avoir mangé, nous avons fait une promenade.", "吃完饭后我们去散了步。"], ["Je mets la table pendant que tu finis la sauce.", "你把酱汁做完的时候，我来摆餐具。"], ["Reste ici jusqu'à ce que je revienne.", "在这儿等着，直到我回来。"]],
  },
  {
    id: "g-opinion", title: "表达观点：je pense que + 直陈式 vs je ne pense pas que + 虚拟式",
    body: `<p><b>一、肯定的观点 → 直陈式</b></p>
<p>penser, croire, trouver, être sûr / certain, il me semble, il est évident / clair / vrai que 用在<b>肯定句</b>里，表示“我认为这是真的”，后面用<b>直陈式</b>：</p>
<ul><li>Je pense que c'<b>est</b> une bonne idée.</li><li>Je trouve que la ville <b>est</b> trop bruyante.</li><li>Il me semble que tu <b>as</b> raison.</li></ul>
<p><b>二、否定或倒装疑问 → 虚拟式</b></p>
<p>同样的动词变成<b>否定</b>或<b>倒装疑问</b>时表示怀疑、不确定，后面通常用<b>虚拟式</b>：</p>
<table>
<tr><th>肯定（直陈式）</th><th>否定 / 倒装疑问（虚拟式）</th></tr>
<tr><td>Je pense que c'<b>est</b> possible.</td><td>Je ne pense pas que ce <b>soit</b> possible.</td></tr>
<tr><td>Je crois qu'il <b>a</b> raison.</td><td>Crois-tu qu'il <b>ait</b> raison ?</td></tr>
<tr><td>Je suis sûr qu'elle <b>viendra</b>.</td><td>Je ne suis pas sûr qu'elle <b>vienne</b>.</td></tr>
<tr><td>Il est évident que ça <b>fait</b> du bien.</td><td>Il n'est pas évident que ça <b>fasse</b> du bien.</td></tr>
</table>
<p>douter que 本身就表示怀疑，肯定句也用虚拟式：Je doute que les commerçants <b>soient</b> d'accord. 用 est-ce que 或语调提问时，口语中常保留直陈式：Tu crois que c'<b>est</b> possible ?</p>
<p><b>三、常用表达</b></p>
<table>
<tr><th>功能</th><th>表达</th></tr>
<tr><td>提出观点</td><td>À mon avis, … / Selon moi, … / D'après moi, … / Pour moi, …（口语）/ Je trouve que … / J'ai l'impression que …</td></tr>
<tr><td>赞成</td><td>Je suis (tout à fait) d'accord avec toi / vous. / Tu as raison. / C'est exactement ce que je pense.</td></tr>
<tr><td>反对</td><td>Je ne suis pas (du tout) d'accord. / Je ne suis pas de cet avis. / Tu as tort.</td></tr>
<tr><td>委婉、部分同意</td><td>Tu n'as pas tort, mais … / C'est vrai que …, mais … / Je comprends ton point de vue, mais …</td></tr>
<tr><td>问别人的看法</td><td>Qu'est-ce que tu en penses ? / Quel est votre avis ? / Tu es pour ou contre ?</td></tr>
</table>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li>✗ Je pense que ce <i>soit</i> une bonne idée. → ✓ Je pense que c'<b>est</b> une bonne idée.（肯定句不用虚拟式）</li>
<li>✗ Je ne pense pas que c'<i>est</i> réaliste. → ✓ Je ne pense pas que ce <b>soit</b> réaliste.（口语里常听到直陈式，但考试要用虚拟式）</li>
<li>✗ <i>Dans mon avis</i> / ✗ <i>Selon mon avis</i> → ✓ <b>À mon avis</b> / ✓ <b>Selon moi</b></li>
<li>✗ Je suis d'accord <i>à</i> toi → ✓ Je suis d'accord <b>avec</b> toi</li>
<li>“我觉得”别翻成 je sens：表达观点用 <b>je pense / je trouve</b>（je trouve 多用于根据亲身感受作出的评价）；je sens 是“感觉到（气味、身体感受）”。</li>
<li>“我想是 / 我想不是”：Je pense <b>que oui</b> / Je pense <b>que non</b>（要加 que）。</li>
</ul>`,
    ex: [["Je trouve que les pistes cyclables sont une excellente idée.", "我觉得自行车道是个很棒的主意。"], ["Je ne pense pas que ce soit réaliste.", "我不认为这现实。"], ["Crois-tu que les commerçants soient d'accord ?", "你认为商户们会同意吗？"], ["À mon avis, il faut d'abord améliorer les transports.", "依我看，首先得改善公共交通。"]],
  },
  {
    id: "g-nominal", title: "名词化：从动词到名词（新闻标题的写法）",
    body: `<p>新闻标题、公告和书面语喜欢用<b>名词</b>代替动词，句子更短、更客观：</p>
<p>Les prix de l'énergie <b>augmentent</b>. → <b>Augmentation</b> des prix de l'énergie</p>
<p><b>一、常见后缀</b></p>
<table>
<tr><th>后缀（性）</th><th>例子</th></tr>
<tr><td>-tion / -ation / -sion（阴性）</td><td>augmenter → l'augmentation，diminuer → la diminution，créer → la création，manifester → la manifestation，décider → la décision</td></tr>
<tr><td>-ment（阳性）</td><td>lancer → le lancement，licencier → le licenciement，changer → le changement，ralentir → le ralentissement</td></tr>
<tr><td>-age（阳性）</td><td>nettoyer → le nettoyage，démarrer → le démarrage，arroser → l'arrosage</td></tr>
<tr><td>-ure（阴性）</td><td>ouvrir → l'ouverture，fermer → la fermeture，signer → la signature</td></tr>
<tr><td>-ée（阴性）</td><td>arriver → l'arrivée，entrer → l'entrée，monter → la montée</td></tr>
<tr><td>去掉词尾（性要记）</td><td>hausser → la hausse，baisser → la baisse，réformer → la réforme，voler → le vol，accorder → l'accord</td></tr>
</table>
<p><b>二、不规则的，要单独记</b></p>
<table>
<tr><td>partir → le départ</td><td>vendre → la vente</td><td>choisir → le choix</td></tr>
<tr><td>découvrir → la découverte</td><td>élire → l'élection</td><td>naître → la naissance</td></tr>
<tr><td>mourir → la mort</td><td>construire → la construction</td><td>réussir → la réussite</td></tr>
</table>
<p>形容词也能名词化：rapide → la rapidité，pauvre → la pauvreté，faible → la faiblesse，chaud → la chaleur，grave → la gravité。</p>
<p><b>三、改写规则</b></p>
<ul>
<li>原句的主语变成 <b>de + 名词</b>：Les loyers baissent. → la baisse <b>des</b> loyers（de + les = des，de + le = du）。</li>
<li>副词变成形容词：Les prix augmentent <b>fortement</b>. → une <b>forte</b> augmentation des prix.</li>
<li>标题常省略冠词和动词，用冒号把主题和内容隔开：<b>Grève dans les transports : trafic très perturbé</b>.</li>
</ul>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li>性搞错：-tion、-sion、-ure、-ée 结尾一般是阴性（<b>la</b> création），-ment、-age 结尾一般是阳性（<b>le</b> changement）。注意例外：<b>la</b> plage，<b>la</b> page，<b>l'image (f.)</b>。</li>
<li>✗ l'augmentation <i>de les</i> prix → ✓ l'augmentation <b>des</b> prix（别忘了缩合）。</li>
<li>✗ la <i>diminuation</i> → ✓ la diminu<b>tion</b>：不要凭感觉加 -ation，拿不准就查词典。</li>
<li>中文标题常用动词（“油价上涨”），法语标题更常用名词：<b>Hausse du prix de l'essence</b>.</li>
</ul>`,
    ex: [["Hausse des prix de l'énergie : le gouvernement annonce des mesures.", "能源价格上涨：政府宣布采取措施。"], ["La fermeture de l'usine inquiète les habitants.", "工厂关闭令居民担忧。"], ["Ouverture d'une nouvelle ligne de tramway à Lyon.", "里昂一条新的有轨电车线路开通。"], ["La construction du pont a duré trois ans.", "这座桥的建造持续了三年。"]],
  },
  {
    id: "g-indef", title: "不定代词与不定形容词：chacun, aucun, plusieurs, certains, n'importe qui…",
    body: `<p>先分清<b>形容词</b>（后面跟名词）和<b>代词</b>（单独使用，代替名词）。</p>
<table>
<tr><th>意思</th><th>形容词 + 名词</th><th>代词</th></tr>
<tr><td>每个</td><td><b>chaque</b> invité（单数）</td><td><b>chacun / chacune</b>：Chacun apporte un plat.</td></tr>
<tr><td>一些、几个</td><td><b>quelques</b> amis</td><td><b>quelques-uns / quelques-unes</b>：J'en ai invité quelques-uns.</td></tr>
<tr><td>好几个</td><td><b>plusieurs</b> collègues</td><td><b>plusieurs</b>：Plusieurs sont déjà partis.</td></tr>
<tr><td>某些、有些</td><td><b>certains / certaines</b> enfants</td><td><b>certains / certaines</b>：Certains préfèrent rester.</td></tr>
<tr><td>没有一个</td><td><b>aucun / aucune</b> + 名词 + <b>ne</b></td><td><b>aucun / aucune … ne</b>：Aucun n'est libre.</td></tr>
<tr><td>任何、随便哪个</td><td><b>n'importe quel / quelle</b> jour</td><td><b>n'importe qui / quoi / où / quand / comment / lequel</b></td></tr>
</table>
<p><b>quelqu'un 和 quelque chose</b>（有人、某事）：</p>
<ul>
<li>接形容词要加 <b>de</b>，形容词用阳性单数：quelqu'un <b>de</b> sympa，quelque chose <b>d'</b>intéressant。</li>
<li>“别人、别的东西”：quelqu'un <b>d'autre</b>，quelque chose <b>d'autre</b>。</li>
<li>否定分别是 personne 和 rien：Tu as vu quelqu'un ? — Non, je <b>n'</b>ai vu <b>personne</b>.</li>
</ul>
<p><b>要点：</b></p>
<ul>
<li><b>aucun</b> 基本只用单数，并且必须和 <b>ne</b> 一起用：<b>Aucun</b> restaurant <b>n'</b>est ouvert.（✗ aucuns restaurants ne sont）</li>
<li><b>plusieurs</b> 没有阴阳性变化，永远是复数；做宾语时要用 en：J'<b>en</b> ai acheté plusieurs.</li>
<li><b>certains</b> 做代词时常说 certains <b>d'entre</b> nous / eux（我们 / 他们当中有些人）。</li>
<li><b>tout le monde</b>（所有人）和 chacun 一样，动词用<b>单数</b>：Tout le monde <b>est</b> là.</li>
<li><b>n'importe</b> 表示“随便哪个都行”：Tu peux venir <b>n'importe quand</b>. 也可以带贬义：Il dit <b>n'importe quoi</b> !（他胡说八道！）</li>
</ul>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li>“每个人都……”：✗ Tout le monde <i>sont</i> contents. → ✓ Tout le monde <b>est</b> content. / ✓ <b>Chacun est</b> content.</li>
<li>✗ <i>Chaque</i> apporte un dessert.（chaque 是形容词，后面必须有名词）→ ✓ <b>Chacun</b> apporte un dessert. / ✓ <b>Chaque</b> invité apporte un dessert.</li>
<li>✗ quelque chose <i>intéressant</i> → ✓ quelque chose <b>d'</b>intéressant</li>
<li>✗ Aucun ami <i>est</i> venu. → ✓ Aucun ami <b>n'</b>est venu.（ne 不能丢）</li>
<li>quelques（几个，强调“有”）≠ peu de（很少，强调“不多”）：J'ai <b>quelques</b> amis ici（我在这儿有几个朋友）vs J'ai <b>peu d'</b>amis ici（我在这儿朋友很少）。</li>
</ul>`,
    ex: [["Chacun apporte quelque chose à manger.", "每个人带点吃的。"], ["Aucun restaurant n'est libre samedi soir.", "周六晚上没有一家餐厅有空位。"], ["Certains d'entre nous viendront en train.", "我们当中有些人会坐火车来。"], ["Tu peux m'appeler n'importe quand.", "你随时可以给我打电话。"]],
  },
  {
    id: "g-cond-passe", title: "条件式过去时：本该……、本可以……、据说……",
    body: `<p><b>构成：</b>avoir / être 的<b>条件式现在时</b> + 过去分词（选哪个助动词、要不要配合，规则和复合过去时一样）。</p>
<table>
<tr><th></th><th>devoir（应该）</th><th>pouvoir（能）</th><th>partir（用 être）</th></tr>
<tr><td>je</td><td>j'aurais dû</td><td>j'aurais pu</td><td>je serais parti(e)</td></tr>
<tr><td>tu</td><td>tu aurais dû</td><td>tu aurais pu</td><td>tu serais parti(e)</td></tr>
<tr><td>il / elle</td><td>il aurait dû</td><td>il aurait pu</td><td>elle serait partie</td></tr>
<tr><td>nous</td><td>nous aurions dû</td><td>nous aurions pu</td><td>nous serions parti(e)s</td></tr>
<tr><td>vous</td><td>vous auriez dû</td><td>vous auriez pu</td><td>vous seriez parti(e)(s)</td></tr>
<tr><td>ils / elles</td><td>ils auraient dû</td><td>ils auraient pu</td><td>elles seraient parties</td></tr>
</table>
<p><b>四种用法：</b></p>
<ol>
<li><b>后悔</b>（自己过去没做到的事）：J'<b>aurais dû</b> mettre un réveil.（我本该定个闹钟。）J'<b>aurais aimé</b> te voir.（我真希望当时能见到你。）</li>
<li><b>责备</b>（别人过去没做到的事）：Tu <b>aurais pu</b> me prévenir !（你本可以提前告诉我的！）Vous <b>auriez dû</b> réserver.</li>
<li><b>没有实现的过去</b>：À ta place, j'<b>aurais appelé</b> tout de suite.（换作我是你，我当时就会马上打电话。）Sans ton aide, je n'<b>aurais</b> jamais <b>réussi</b>.</li>
<li><b>未经证实的消息</b>（新闻常用）：Selon la police, l'accident <b>aurait fait</b> trois blessés.（据警方称，事故造成三人受伤。）Le voleur <b>serait entré</b> par la fenêtre.（小偷据说是从窗户进来的。）记者用条件式表示“这是别人的说法，尚未证实”。</li>
</ol>
<p><b>和相近形式对比：</b></p>
<table>
<tr><th>形式</th><th>意思</th><th>例句</th></tr>
<tr><td>je devrais（条件式现在时）</td><td>我（现在 / 以后）应该</td><td>Je devrais dormir plus.</td></tr>
<tr><td>j'aurais dû（条件式过去时）</td><td>我（当时）本该，但没有做</td><td>J'aurais dû dormir plus hier.</td></tr>
<tr><td>j'ai dû（复合过去时）</td><td>我（当时）不得不；我一定是</td><td>J'ai dû prendre un taxi.</td></tr>
</table>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li>想说“我本该早点出门”：✗ Je <i>devrais</i> partir plus tôt.（这是“我应该早点走”，说的是现在）→ ✓ J'<b>aurais dû</b> partir plus tôt.</li>
<li>✗ J'aurais dû <i>parti</i> → ✓ J'aurais dû <b>partir</b>：dû / pu 后面接<b>原形</b>，不是过去分词。</li>
<li>宾语代词放在原形前：✓ Tu aurais dû <b>l'</b>appeler.（✗ Tu l'aurais dû appeler）</li>
<li>用 être 的动词别用错助动词，也别忘了配合：✓ Elle <b>serait partie</b>（✗ elle aurait parti）。</li>
<li>j'aurais（条件式）和 j'aurai（将来时）读音几乎一样，写的时候注意 -s。</li>
</ul>`,
    ex: [["J'aurais dû mettre deux réveils.", "我本该定两个闹钟的。"], ["Tu aurais pu me prévenir !", "你本可以提前告诉我的！"], ["À ta place, je serais allé voir le médecin.", "换作我是你，我早就去看医生了。"], ["Selon les témoins, le conducteur aurait roulé trop vite.", "据目击者称，司机当时车速过快。"]],
  },
  {
    id: "g-registre", title: "正式语域：vous 的礼貌套路、正式邮件与面试表达",
    body: `<p>法语里同一个意思可以分<b>三个语域</b>：familier（随便、口语）、courant（日常标准）、soutenu（正式、书面）。面试、给公司写邮件、和陌生人打交道时，要用 courant 或 soutenu。</p>
<table>
<tr><th>familier</th><th>courant</th><th>soutenu / 正式</th></tr>
<tr><td>Ouais.</td><td>Oui.</td><td>Oui, tout à fait. / Effectivement.</td></tr>
<tr><td>T'as fini ?</td><td>Tu as fini ? / Est-ce que vous avez fini ?</td><td>Avez-vous terminé ?</td></tr>
<tr><td>Je veux savoir…</td><td>Je voudrais savoir…</td><td>Je souhaiterais savoir… / Pourriez-vous m'indiquer… ?</td></tr>
<tr><td>le boulot</td><td>le travail</td><td>l'emploi, le poste</td></tr>
<tr><td>ça</td><td>ça / cela</td><td>cela</td></tr>
<tr><td>on a bossé</td><td>on a travaillé</td><td>nous avons travaillé</td></tr>
</table>
<p><b>一、vous 的礼貌套路</b></p>
<ul>
<li>用<b>条件式</b>让请求变委婉：Pourriez-vous… ? / Je souhaiterais… / Serait-il possible de… ? / J'aimerais savoir si…</li>
<li>用<b>倒装疑问</b>：Avez-vous des questions ? / Quand pourrais-je commencer ?</li>
<li>先致谢：Je vous remercie de m'avoir reçu. / Merci pour votre temps.</li>
<li>称呼对方用 Madame / Monsieur（可以不加姓），不要用 Salut、Coucou。</li>
</ul>
<p><b>二、正式邮件的固定格式</b></p>
<table>
<tr><th>部分</th><th>常用表达</th></tr>
<tr><td>称呼</td><td>Madame, Monsieur,（不知道收件人）/ Madame Dupuis,（知道姓名）</td></tr>
<tr><td>开头</td><td>Je me permets de vous écrire au sujet de… / Suite à notre entretien du 12 mars, …</td></tr>
<tr><td>请求</td><td>Je vous serais reconnaissant(e) de bien vouloir… / Pourriez-vous me faire savoir si… ?</td></tr>
<tr><td>结尾</td><td>Dans l'attente de votre réponse, … / Je reste à votre disposition pour tout renseignement complémentaire.</td></tr>
<tr><td>落款</td><td>Cordialement,（邮件里最常用）/ Bien à vous, / Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.（正式信件）</td></tr>
</table>
<p><b>三、面试常用表达</b></p>
<ul>
<li>介绍经历：J'ai acquis trois ans d'expérience dans… / J'ai été chargé(e) de… / Je suis titulaire d'un master en…</li>
<li>说优点：Je suis quelqu'un de rigoureux / polyvalent. / Mon point fort, c'est… / Je sais travailler en équipe.</li>
<li>说缺点（要正面包装）：Mon point faible, c'est que je suis parfois trop perfectionniste, mais j'apprends à…</li>
<li>表达兴趣：Ce poste m'intéresse vivement, car… / Je serais ravi(e) de rejoindre votre équipe.</li>
<li>提问：Quelles seraient mes missions ? / Comment se déroule la période d'essai ?</li>
</ul>
<p><b>中国学生常犯的错：</b></p>
<ul>
<li>直译中文太直接：“我想要这份工作” ✗ Je veux ce poste. → ✓ Ce poste m'intéresse beaucoup. / ✓ Je serais ravi de rejoindre votre équipe.</li>
<li>tu 和 vous 混用：一开始用 vous，就要一直用 vous，主有词也要统一用 votre / vos（✗ Merci pour <i>ton</i> temps）。</li>
<li>✗ <i>Cher Madame</i> → ✓ <b>Chère</b> Madame（阴性）；第一次联系用 Madame, Monsieur 最稳妥。</li>
<li>落款套语不要叠加：✗ <i>Cordialement, je vous prie d'agréer…</i>，二选一。</li>
<li>面试里少用 ouais、ben、genre 等口语词，多用完整的句子。</li>
</ul>`,
    ex: [["Pourriez-vous me parler un peu de votre parcours ?", "您能简单介绍一下您的经历吗？"], ["Je vous remercie de m'avoir reçu aujourd'hui.", "感谢您今天接待我。"], ["Ce poste m'intéresse vivement, car il correspond à mon expérience.", "我对这个职位非常感兴趣，因为它和我的经验相符。"], ["Je reste à votre disposition pour tout renseignement complémentaire.", "如需更多信息，请随时与我联系。"]],
  },
];

export const CAT = {
  "g-indirect": "从句与连接",
  "g-concordance": "时态与语气",
  "g-cause": "从句与连接",
  "g-but": "从句与连接",
  "g-temps": "从句与连接",
  "g-opinion": "表达与语用",
  "g-nominal": "名词与形容词",
  "g-indef": "代词",
  "g-cond-passe": "时态与语气",
  "g-registre": "表达与语用",
};

export const units = [
  {
    id: "b1-11", emoji: "📞", title: "他说他会来", sub: "间接引语（主句现在时）", can: "能转述别人正在说的话、提的问题和请求", scene: null, grammar: ["g-indirect"],
    words: [],
    newWords: [
      ["l'embouteillage (m.)", "lɑ̃.bu.tɛ.jaʒ", "堵车", "Il y a un embouteillage sur le périphérique.", "环城路上堵车了。", "course"],
      ["coincé · coincée", "kwɛ̃.se", "被困住的、卡住的", "Je suis coincé dans le métro.", "我被困在地铁里了。", "course"],
      ["se demander", "sə də.mɑ̃.de", "心里琢磨、想知道", "Je me demande s'il va pleuvoir.", "我在想会不会下雨。", "course"],
      ["vouloir savoir", "vu.lwaʁ sa.vwaʁ", "想知道", "Ma mère veut savoir quand tu rentres.", "我妈妈想知道你什么时候回来。", "course"],
      ["répondre", "ʁe.pɔ̃dʁ", "回答", "Il répond qu'il n'a pas le temps.", "他回答说他没时间。", "course"],
      ["prévenir", "pʁe.və.niʁ", "（事先）通知、告知", "Préviens-moi si tu es en retard.", "你要是迟到就提前告诉我。", "course"],
      ["rappeler", "ʁa.pə.le", "回电话；提醒", "Je te rappelle dans cinq minutes.", "我五分钟后给你回电话。", "course"],
      ["raccrocher", "ʁa.kʁɔ.ʃe", "挂电话", "Ne raccroche pas, j'ai encore une question.", "别挂，我还有个问题。", "course"],
      ["la bougie", "la bu.ʒi", "蜡烛", "On souffle les bougies ensemble ?", "我们一起吹蜡烛吧？", "course"],
    ],
    dialogue: [
      ["Sophie", "C'est Marc au téléphone ? Qu'est-ce qu'il dit ?", "是马克打来的电话吗？他说什么？"],
      ["我", "Il dit qu'il est coincé dans les embouteillages et qu'il arrivera vers neuf heures.", "他说他堵在路上了，九点左右到。"],
      ["Sophie", "Encore ! Demande-lui s'il a pensé au gâteau pour Julie.", "又来！问问他有没有想着给朱莉的蛋糕。"],
      ["我", "Il répond qu'il l'a acheté ce matin. Il veut savoir ce qu'on prépare pour le dîner.", "他回答说今天早上买了。他想知道我们晚饭做什么。"],
      ["Sophie", "Dis-lui que c'est une surprise. Et demande-lui combien de personnes viennent avec lui.", "告诉他这是个惊喜。再问问他有几个人跟他一起来。"],
      ["我", "Il dit qu'il ne sait pas encore. Il se demande si sa sœur pourra venir.", "他说他还不知道。他不确定他姐姐能不能来。"],
      ["Sophie", "Bon. Et là, qu'est-ce qu'il raconte ? Tu as l'air surpris.", "好吧。那现在他在说什么？你看起来很惊讶。"],
      ["我", "Il nous demande de ne pas l'attendre pour commencer et de lui garder une part de gâteau !", "他叫我们别等他就开始，还要给他留一块蛋糕！"],
      ["Sophie", "Pas question ! Préviens-le que sans gâteau, on ne peut pas souffler les bougies !", "没门！告诉他没有蛋糕就没法吹蜡烛！"],
      ["我", "Il dit qu'il fera vite. Bon, je raccroche.", "他说他会尽快。好了，我挂了。"],
    ],
    sentences: [
      ["Il dit qu'il arrivera vers neuf heures.", "他说他九点左右到。"],
      ["Demande-lui s'il a pensé au gâteau.", "问问他有没有想着蛋糕。"],
      ["Il veut savoir ce qu'on prépare pour le dîner.", "他想知道我们晚饭做什么。"],
      ["Il se demande si sa sœur pourra venir.", "他不确定他姐姐能不能来。"],
      ["Il nous demande de ne pas l'attendre pour commencer.", "他叫我们别等他就开始。"],
    ],
    cloze: [
      ["Elle demande ___ tu viens à la fête samedi.", ["si", "est-ce que", "que"], 0, "她问你周六来不来聚会。", "转述一般疑问句用 si；间接引语里不能保留 est-ce que"],
      ["Il veut savoir ___ tu fais ce week-end.", ["ce que", "qu'est-ce que", "que"], 0, "他想知道你这个周末做什么。", "qu'est-ce que 在间接引语里变成 ce que"],
      ["Le médecin me dit ___ me reposer.", ["de", "que", "à"], 0, "医生叫我休息。", "转述命令：dire à qn de + 原形"],
      ["Marc dit ___ il est coincé dans les embouteillages.", ["qu'", "si", "ce qu'"], 0, "马克说他堵在路上了。", "转述陈述句用 que（这里元音前省音为 qu'），不能像中文那样省略连词"],
      ["Je me demande ___ il a raison.", ["s'", "si", "qu'"], 0, "我在想他说得对不对。", "“是否”用 si；si 后面接 il / ils 时必须缩写成 s'"],
    ],
    discover: [
      { q: "« Où travaillez-vous ? » 转述成间接引语，哪一句对？", opts: ["Il me demande où je travaille.", "Il me demande où travaillez-vous.", "Il me demande où est-ce que je travaille."], a: 0, why: "间接问句用陈述语序：取消倒装、取消 est-ce que，问号也去掉；人称跟着变成 je。" },
      { q: "« Ne touche pas ! » → Elle me dit ___", opts: ["de ne pas toucher.", "de ne toucher pas.", "que je ne touche pas."], a: 0, why: "否定命令转述为 de ne pas + 原形，ne pas 两个词都放在原形前面。" },
    ],
    write: { prompt: "朋友给你发了一条很长的语音消息，室友想知道他说了什么。用法语向室友转述（至少用到 dire que、demander si、demander / vouloir savoir ce que、demander de 各一次），60–120 词。", model: "Thomas vient de m'envoyer un message vocal. Il dit qu'il a trouvé un appartement près de la gare et qu'il déménage samedi prochain. Il nous demande si nous pouvons l'aider, parce qu'il a beaucoup de cartons et pas de voiture. Il veut savoir ce que tu fais samedi matin et si ton frère peut nous prêter sa camionnette. Il dit aussi qu'il paiera les pizzas le soir ! Enfin, il nous demande de le rappeler avant jeudi et de ne pas oublier nos gants. Je me demande s'il sait combien de livres il a… Alors, qu'est-ce que je lui réponds ?" },
  },
  {
    id: "b1-12", emoji: "😮‍💨", title: "她说她很累", sub: "间接引语的时态配合", can: "能用过去时转述别人说过的话，并正确变换时态和时间词", scene: null, grammar: ["g-concordance"],
    words: [],
    newWords: [
      ["épuisé · épuisée", "e.pɥi.ze", "精疲力尽的", "Après le déménagement, j'étais épuisé.", "搬完家后我累垮了。", "course"],
      ["le congé", "lə kɔ̃.ʒe", "假期（尤指工作中的休假）", "Je prends trois jours de congé en mai.", "我五月请三天假。", "course"],
      ["remplacer", "ʁɑ̃.pla.se", "代替、替换", "Tu peux me remplacer à la réunion ?", "你能替我去开会吗？", "course"],
      ["la veille", "la vɛj", "前一天", "La veille de l'examen, je n'ai pas dormi.", "考试前一天我没睡着。", "course"],
      ["le lendemain", "lə lɑ̃d.mɛ̃", "第二天", "Il est arrivé le lendemain matin.", "他第二天早上到了。", "course"],
      ["se reposer", "sə ʁə.po.ze", "休息", "Repose-toi bien ce week-end.", "这个周末好好休息。", "course"],
      ["conseiller", "kɔ̃.se.je", "建议、劝", "Le médecin m'a conseillé de marcher tous les jours.", "医生建议我每天走路。", "course"],
      ["étonner", "e.tɔ.ne", "使惊讶", "Ça ne m'étonne pas du tout.", "这一点也不让我意外。", "course"],
      ["le dossier", "lə do.sje", "（一份）资料、文件；案子", "J'ai envoyé le dossier au client.", "我把资料发给客户了。", "course"],
    ],
    dialogue: [
      ["Antoine", "Tu as eu des nouvelles de Claire ? Elle n'est pas venue au bureau depuis lundi.", "你有克莱尔的消息吗？她从周一起就没来办公室了。"],
      ["我", "Oui, je l'ai appelée hier soir. Elle m'a dit qu'elle était complètement épuisée.", "有，我昨晚给她打了电话。她跟我说她彻底累垮了。"],
      ["Antoine", "Ça ne m'étonne pas. Elle travaillait jusqu'à minuit tous les soirs.", "我不意外。她每天晚上都工作到半夜。"],
      ["我", "Elle m'a expliqué qu'elle avait très mal dormi pendant des semaines et que son médecin lui avait conseillé de se reposer.", "她跟我解释说她好几个星期都睡得很差，医生建议她休息。"],
      ["Antoine", "Elle a dit quand elle reviendrait ?", "她说什么时候回来了吗？"],
      ["我", "Elle a dit qu'elle allait prendre deux semaines de congé et qu'elle reviendrait au début du mois prochain.", "她说她打算请两周假，下个月初回来。"],
      ["Antoine", "Et pour la réunion avec les clients jeudi ?", "那周四跟客户的会呢？"],
      ["我", "Elle m'a demandé si je pourrais la remplacer. Je lui ai répondu que je le ferais avec plaisir.", "她问我能不能替她。我回答说我很乐意。"],
      ["Antoine", "C'est gentil. Elle t'a dit si elle avait préparé le dossier ?", "你真好。她跟你说资料准备好了没有？"],
      ["我", "Oui, elle a dit qu'elle me l'avait envoyé la veille… mais je ne l'ai toujours pas trouvé !", "说了，她说前一天就发给我了……可我到现在还没找到！"],
    ],
    sentences: [
      ["Elle m'a dit qu'elle était complètement épuisée.", "她跟我说她彻底累垮了。"],
      ["Elle avait très mal dormi pendant des semaines.", "她好几个星期都睡得很差。"],
      ["Elle a dit qu'elle reviendrait au début du mois prochain.", "她说她下个月初回来。"],
      ["Elle m'a demandé si je pourrais la remplacer.", "她问我能不能替她。"],
      ["Je lui ai répondu que je le ferais avec plaisir.", "我回答她说我很乐意。"],
    ],
    cloze: [
      ["Hier, Claire m'a dit qu'elle ___ fatiguée.", ["était", "est", "sera"], 0, "昨天克莱尔跟我说她很累。", "主句是过去时，原话的现在时（je suis）要变成未完成过去时"],
      ["Il m'a annoncé qu'il ___ son travail la semaine précédente.", ["avait quitté", "a quitté", "quittait"], 0, "他告诉我他前一周辞了职。", "原话是复合过去时（j'ai quitté），转述时变成愈过去时"],
      ["Elle a promis qu'elle ___ le lendemain.", ["rappellerait", "rappellera", "rappelait"], 0, "她答应第二天回电话。", "原话是将来时（je rappellerai），主句过去时 → 条件式现在时；rappelait 是未完成过去时，少了 r"],
      ["Le mois dernier, Paul m'a dit qu'il viendrait ___.", ["le lendemain", "demain", "hier"], 0, "上个月保罗跟我说他第二天会来。", "转述过去说的话时，demain 要改为 le lendemain"],
      ["Ils m'ont demandé si j'___ partir en vacances.", ["allais", "vais", "irai"], 0, "他们问我是不是要去度假。", "近将来时 je vais partir → 转述为 j'allais partir"],
    ],
    discover: [
      { q: "« Je finirai le rapport. » → Il a dit qu'il ___ le rapport.", opts: ["finirait", "finira", "finissait"], a: 0, why: "将来时在过去时主句后变成条件式现在时。条件式 = 将来时词根 + 未完成过去时词尾，正好是“过去时间里的将来”。" },
      { q: "三周前玛丽说：« Je pars demain. » 今天转述，哪句最准确？", opts: ["Marie a dit qu'elle partait le lendemain.", "Marie a dit qu'elle part demain.", "Marie a dit qu'elle partirait demain."], a: 0, why: "现在时 → 未完成过去时（partait）；demain 指三周前的“明天”，要改成 le lendemain。" },
    ],
    write: { prompt: "上周一位朋友或同事给你打了电话。用法语讲述他（她）跟你说了什么、问了你什么、你怎么回答（主句用过去时，注意时态配合和时间词的变化），60–120 词。", model: "La semaine dernière, mon amie Inès m'a téléphoné. Elle m'a annoncé qu'elle avait enfin trouvé un travail à Bordeaux et qu'elle commencerait le mois suivant. Elle m'a expliqué qu'elle avait passé trois entretiens et que le dernier s'était très bien passé. Elle m'a dit qu'elle était un peu stressée, parce qu'elle ne connaissait personne là-bas. Ensuite, elle m'a demandé si je pourrais l'aider à déménager le samedi suivant. Je lui ai répondu que je viendrais avec plaisir et que j'apporterais des cartons. Elle m'a dit de ne pas oublier ma voiture !" },
  },
  {
    id: "b1-13", emoji: "🏡", title: "因为……所以", sub: "原因与结果", can: "能解释一个决定的原因，并说明它带来的结果", scene: null, grammar: ["g-cause"],
    words: [],
    newWords: [
      ["déménager", "de.me.na.ʒe", "搬家", "Nous avons déménagé en Bretagne l'année dernière.", "我们去年搬到了布列塔尼。", "course"],
      ["le loyer", "lə lwa.je", "房租", "Le loyer augmente chaque année.", "房租每年都涨。", "course"],
      ["le télétravail", "lə te.le.tʁa.vaj", "远程办公", "Je suis en télétravail le lundi et le vendredi.", "我周一和周五远程办公。", "course"],
      ["le trajet", "lə tʁa.ʒɛ", "路程、通勤", "Mon trajet dure une heure le matin.", "我早上通勤要一个小时。", "course"],
      ["le bruit", "lə bʁɥi", "噪音、声音", "Il y a trop de bruit dans cette rue.", "这条街太吵了。", "course"],
      ["la campagne", "la kɑ̃.paɲ", "乡下、农村", "Mes grands-parents vivent à la campagne.", "我爷爷奶奶住在乡下。", "course"],
      ["s'ennuyer", "sɑ̃.nɥi.je", "感到无聊", "Les enfants s'ennuient pendant les longs voyages.", "长途旅行时孩子们会觉得无聊。", "course"],
      ["calme", "kalm", "安静的、平静的", "Le quartier est très calme le soir.", "这个街区晚上很安静。", "course"],
    ],
    dialogue: [
      ["我", "Julien ! Ça fait longtemps ! On m'a dit que tu avais quitté Paris. C'est vrai ?", "朱利安！好久不见！听说你离开巴黎了，是真的吗？"],
      ["Julien", "Oui, j'ai déménagé en Bourgogne il y a six mois. Comme mon loyer avait encore augmenté, je ne pouvais plus payer.", "是的，我半年前搬到了勃艮第。因为房租又涨了，我付不起了。"],
      ["我", "Mais ton travail ? Tu ne fais pas le trajet tous les jours, j'espère !", "那你的工作呢？你不会每天通勤吧！"],
      ["Julien", "Non, grâce au télétravail, je ne vais au bureau qu'une fois par semaine. Je prends donc le train seulement le mardi.", "不会，多亏远程办公，我一周只去一次办公室。所以我只有周二坐火车。"],
      ["我", "Et tu ne t'ennuies pas à la campagne ?", "那你在乡下不无聊吗？"],
      ["Julien", "Pas du tout ! À Paris, je dormais mal à cause du bruit, si bien que j'étais toujours fatigué. Ici, c'est calme.", "一点也不！在巴黎我因为噪音睡不好，结果总是很累。这里很安静。"],
      ["我", "Puisque tu as une maison maintenant, tu as sûrement une chambre pour les amis !", "既然你现在有房子了，肯定有给朋友住的房间吧！"],
      ["Julien", "Bien sûr ! C'est pourquoi je t'invite à venir un week-end. Mais attention : il n'y a qu'un bus par jour, car le village est tout petit.", "当然！所以我邀请你来过个周末。不过注意：一天只有一班公交，因为村子很小。"],
      ["我", "Alors je viendrai en voiture !", "那我就开车去！"],
    ],
    sentences: [
      ["Comme mon loyer avait encore augmenté, je ne pouvais plus payer.", "因为房租又涨了，我付不起了。"],
      ["Grâce au télétravail, je ne vais au bureau qu'une fois par semaine.", "多亏远程办公，我一周只去一次办公室。"],
      ["Je dormais mal à cause du bruit.", "我因为噪音睡不好。"],
      ["Puisque tu as une maison maintenant, tu as sûrement une chambre pour les amis.", "既然你现在有房子了，肯定有给朋友住的房间。"],
      ["Il n'y a qu'un bus par jour, car le village est tout petit.", "一天只有一班公交，因为村子很小。"],
    ],
    cloze: [
      ["___ il pleuvait, nous sommes restés à la maison.", ["Comme", "Car", "Grâce à"], 0, "因为下雨，我们待在家里。", "句首表示原因用 comme；car 不能放句首；grâce à 后面要接名词"],
      ["Je suis arrivé en retard ___ la grève.", ["à cause de", "grâce à", "parce que"], 0, "因为罢工，我迟到了。", "坏的原因 + 名词 → à cause de；parce que 后面要接句子"],
      ["J'ai trouvé ce travail ___ mon professeur.", ["grâce à", "à cause de", "car"], 0, "多亏了我的老师，我找到了这份工作。", "好的原因 + 名词 / 人 → grâce à"],
      ["— Pourquoi tu déménages ? — ___ le loyer est trop cher.", ["Parce que", "Car", "Comme"], 0, "——你为什么搬家？——因为房租太贵。", "回答 pourquoi 只能用 parce que"],
      ["Il y avait beaucoup de bruit, ___ je n'ai pas pu dormir.", ["si bien que", "puisque", "grâce à"], 0, "噪音很大，结果我没能睡着。", "后半句是结果 → si bien que；puisque 引出的是原因"],
    ],
    discover: [
      { q: "想说“因为房租太贵，所以我搬家了”，哪句是地道的法语？", opts: ["Comme le loyer était trop cher, j'ai déménagé.", "Parce que le loyer était trop cher, donc j'ai déménagé.", "Car le loyer était trop cher, j'ai déménagé."], a: 0, why: "法语不像中文那样“因为……所以……”成对使用：一句话里要么用表示原因的词，要么用表示结果的词。放在句首的原因用 comme；car 不能放句首。" },
    ],
    write: { prompt: "你（或你认识的人）做过一个重要决定（换工作、搬家、出国……）。用法语说明原因和结果，至少用到 4 个本课的连接词（如 comme, parce que, puisque, grâce à, à cause de, donc, si bien que, c'est pourquoi），60–120 词。", model: "Il y a deux ans, j'ai décidé de partir étudier en France. Comme j'avais toujours aimé la langue française, je voulais vivre dans un pays francophone. À Shanghai, je travaillais beaucoup, si bien que je n'avais plus de temps pour moi. Grâce à l'aide de mes parents, j'ai pu payer mes études à Lyon. Au début, c'était difficile à cause de la langue : je ne comprenais pas bien les cours, donc je passais mes soirées à réviser. Mais je vivais avec des Français, alors mon français s'est vite amélioré. C'est pourquoi je ne regrette pas mon choix." },
  },
  {
    id: "b1-14", emoji: "🎯", title: "为了、尽管", sub: "目的与让步", can: "能说明做事的目的，并表达“虽然……还是……”", scene: null, grammar: ["g-but"],
    words: [],
    newWords: [
      ["s'inscrire", "sɛ̃s.kʁiʁ", "报名、注册", "Je me suis inscrit à un cours de cuisine.", "我报名了一个烹饪班。", "course"],
      ["la bourse", "la buʁs", "奖学金", "Elle a obtenu une bourse pour étudier à Paris.", "她获得了去巴黎学习的奖学金。", "course"],
      ["le niveau", "lə ni.vo", "水平、级别", "Quel est ton niveau en français ?", "你的法语是什么水平？", "course"],
      ["s'entraîner", "sɑ̃.tʁɛ.ne", "练习、训练", "Il s'entraîne pour le marathon.", "他在为马拉松训练。", "course"],
      ["à plein temps", "a plɛ̃ tɑ̃", "全职", "Ma sœur travaille à plein temps dans une banque.", "我姐姐在一家银行全职工作。", "course"],
      ["la fatigue", "la fa.tiɡ", "疲劳", "Malgré la fatigue, elle a fini le projet.", "尽管很累，她还是完成了项目。", "course"],
      ["abandonner", "a.bɑ̃.dɔ.ne", "放弃", "N'abandonne pas maintenant, tu y es presque !", "现在别放弃，你快成功了！", "course"],
      ["progresser", "pʁɔ.ɡʁɛ.se", "进步", "Tu as beaucoup progressé cette année.", "你今年进步很大。", "course"],
      ["motivé · motivée", "mɔ.ti.ve", "有干劲的、积极的", "Les étudiants sont très motivés.", "学生们干劲十足。", "course"],
      ["la rédaction", "la ʁe.dak.sjɔ̃", "作文；写作", "Le professeur a corrigé nos rédactions.", "老师批改了我们的作文。", "course"],
    ],
    dialogue: [
      ["Mme Laurent", "Lin, vous vous êtes inscrit au cours intensif cet été ? Pourquoi ?", "林，您报名了今年夏天的强化班？为什么呢？"],
      ["我", "Je veux passer le DELF B2 en décembre pour obtenir une bourse et faire un master en France.", "我想在十二月考 DELF B2，好拿到奖学金去法国读硕士。"],
      ["Mme Laurent", "C'est un beau projet ! Mais bien que vous ayez déjà un bon niveau, l'examen reste difficile.", "这个计划很好！不过虽然您的水平已经不错了，这个考试还是很难。"],
      ["我", "Je sais. C'est pour ça que je m'entraîne tous les jours, même si je travaille à plein temps.", "我知道。所以我每天都练习，即使我是全职工作。"],
      ["Mme Laurent", "Tous les jours ? Malgré la fatigue ?", "每天？不管多累？"],
      ["我", "Oui. Je me lève à six heures pour pouvoir étudier une heure avant le travail.", "是的。我六点起床，好在上班前学一个小时。"],
      ["Mme Laurent", "Excellent. Je vais vous donner des sujets d'oral pour que vous puissiez vous entraîner à la maison.", "太好了。我给您一些口语题目，让您可以在家练习。"],
      ["我", "Merci ! Parfois j'ai envie d'abandonner, mais je continue quand même.", "谢谢！有时候我想放弃，但还是坚持下来了。"],
      ["Mme Laurent", "C'est normal. Même si vous progressez lentement, vous progressez. Et je corrigerai vos rédactions afin que vous voyiez vos erreurs.", "这很正常。即使进步得慢，您也在进步。我还会批改您的作文，好让您看到自己的错误。"],
      ["我", "Avec vous, je suis encore plus motivé !", "有您在，我更有干劲了！"],
    ],
    sentences: [
      ["Je me lève à six heures pour pouvoir étudier avant le travail.", "我六点起床，好在上班前学习。"],
      ["Bien que vous ayez déjà un bon niveau, l'examen reste difficile.", "虽然您的水平已经不错了，考试还是很难。"],
      ["Je m'entraîne tous les jours, même si je travaille à plein temps.", "我每天都练习，即使我是全职工作。"],
      ["Je vais vous donner des sujets pour que vous puissiez vous entraîner.", "我给您一些题目，让您可以练习。"],
      ["Malgré la fatigue, je continue quand même.", "尽管很累，我还是坚持下来了。"],
    ],
    cloze: [
      ["Je parle lentement pour que tu ___.", ["comprennes", "comprends", "comprendre"], 0, "我说慢一点，好让你听懂。", "主语不同（我说、你懂）→ pour que + 虚拟式"],
      ["J'économise ___ partir au Canada l'année prochaine.", ["pour", "pour que", "malgré"], 0, "我存钱是为了明年去加拿大。", "主语相同（我存钱、我出发）→ pour + 原形"],
      ["Bien qu'il ___ malade, il est venu à la réunion.", ["soit", "est", "sera"], 0, "虽然他病了，他还是来开会了。", "bien que + 虚拟式"],
      ["Même si c'___ cher, je veux essayer ce restaurant.", ["est", "soit", "sera"], 0, "就算贵，我也想试试这家餐厅。", "même si + 直陈式现在时；不用虚拟式，也不用将来时"],
      ["Nous sommes sortis ___ la pluie.", ["malgré", "bien que", "même si"], 0, "尽管下雨，我们还是出门了。", "后面是名词 la pluie → malgré；bien que / même si 后面要接从句"],
    ],
    discover: [
      { q: "观察：Je travaille pour gagner de l'argent. / Je travaille pour que mes enfants puissent étudier. 什么时候用 pour que？", opts: ["前后主语不同时，用 pour que + 虚拟式", "目的在将来时", "句子比较长时"], a: 0, why: "第一句“我工作、我赚钱”主语相同，用 pour + 原形；第二句“我工作、孩子们上学”主语不同，才用 pour que + 虚拟式。" },
      { q: "“虽然很贵，但是我还是买了。”哪一句对？", opts: ["Bien que ce soit cher, je l'ai acheté.", "Bien que ce soit cher, mais je l'ai acheté.", "Bien que c'est cher, je l'ai acheté."], a: 0, why: "法语的 bien que 不和 mais 搭配；bien que 后面用虚拟式 soit。" },
    ],
    write: { prompt: "你为什么学法语？用法语写一段话，说明你的目的和遇到的困难，至少用到 pour / pour que、bien que、même si、malgré 中的三个，60–120 词。", model: "J'apprends le français pour plusieurs raisons. D'abord, je voudrais faire un master à Paris, et j'ai besoin du niveau B2 pour obtenir une bourse. Ensuite, j'aime le cinéma français et je veux regarder les films sans sous-titres. Bien que je travaille à plein temps, j'étudie une heure chaque soir. Malgré la fatigue, je ne rate jamais un cours. Ma femme m'aide aussi : elle met des chansons françaises dans la voiture pour que je m'habitue aux accents. Même si je fais encore beaucoup d'erreurs, je progresse, et c'est le plus important." },
  },
  {
    id: "b1-15", emoji: "🍽️", title: "在……之前 / 之后", sub: "时间从句", can: "能安排做事的先后顺序，说清“之前、之后、同时、直到”", scene: null, grammar: ["g-temps"],
    words: [],
    newWords: [
      ["l'invité · l'invitée", "lɛ̃.vi.te", "客人", "Les invités arrivent à vingt heures.", "客人们晚上八点到。", "course"],
      ["éplucher", "e.ply.ʃe", "削皮、剥皮", "Tu peux éplucher les carottes ?", "你能削一下胡萝卜吗？", "course"],
      ["la rondelle", "la ʁɔ̃.dɛl", "（切成的）圆片", "Coupe le citron en rondelles.", "把柠檬切成圆片。", "course"],
      ["préchauffer", "pʁe.ʃo.fe", "预热", "Préchauffez le four à 180 degrés.", "把烤箱预热到 180 度。", "course"],
      ["le four", "lə fuʁ", "烤箱", "Le gâteau est encore dans le four.", "蛋糕还在烤箱里。", "course"],
      ["le gratin", "lə ɡʁa.tɛ̃", "焗菜", "Le gratin dauphinois est une spécialité des Alpes.", "多菲内焗土豆是阿尔卑斯地区的特色菜。", "course"],
      ["cuire", "kɥiʁ", "煮、烤（使熟）", "Laissez cuire vingt minutes.", "煮二十分钟。", "course"],
      ["mettre la table", "mɛtʁ la tabl", "摆餐具", "Les enfants, venez mettre la table !", "孩子们，来摆餐具！", "course"],
      ["ranger", "ʁɑ̃.ʒe", "整理、收拾", "Range ta chambre avant de sortir.", "出门前把你的房间收拾好。", "course"],
      ["l'apéritif (m.)", "la.pe.ʁi.tif", "开胃酒（饭前小酌和小食）", "On prend l'apéritif sur la terrasse ?", "我们在露台上喝点开胃酒吧？", "course"],
    ],
    dialogue: [
      ["Sophie", "Les invités arrivent à huit heures. Il faut tout préparer avant qu'ils soient là !", "客人八点到。得在他们来之前把一切准备好！"],
      ["我", "D'accord. Je commence par quoi ?", "好的。我先做什么？"],
      ["Sophie", "Épluche les pommes de terre pendant que je prépare la viande. Mais lave-toi les mains avant de commencer !", "我准备肉的时候你削土豆。不过开始之前先洗手！"],
      ["我", "C'est fait. Et après avoir épluché les pommes de terre, je les coupe en rondelles ?", "洗好了。削完土豆以后，切成圆片吗？"],
      ["Sophie", "Oui, pour le gratin. Préchauffe aussi le four à 200 degrés.", "对，做焗土豆用。再把烤箱预热到 200 度。"],
      ["我", "Je mets le gratin au four tout de suite ?", "我马上把焗菜放进烤箱吗？"],
      ["Sophie", "Non, attends jusqu'à ce qu'il soit bien chaud, sinon le gratin ne sera pas bon.", "不，等到烤箱足够热再放，不然焗菜不好吃。"],
      ["我", "Bon. Et pendant que le gratin cuit, je mets la table ?", "好。那焗菜烤着的时候，我去摆餐具？"],
      ["Sophie", "Parfait. Après avoir mis la table, range un peu le salon pendant que je me change.", "好极了。摆完餐具，在我换衣服的时候把客厅收拾一下。"],
      ["我", "Pas de problème. Et on servira l'apéritif dès que les invités arriveront !", "没问题。客人一到我们就上开胃酒！"],
    ],
    sentences: [
      ["Il faut tout préparer avant qu'ils soient là.", "得在他们来之前把一切准备好。"],
      ["Épluche les pommes de terre pendant que je prépare la viande.", "我准备肉的时候你削土豆。"],
      ["Lave-toi les mains avant de commencer.", "开始之前先洗手。"],
      ["Attends jusqu'à ce que le four soit bien chaud.", "等到烤箱足够热。"],
      ["Après avoir mis la table, range un peu le salon.", "摆完餐具后，把客厅收拾一下。"],
    ],
    cloze: [
      ["Range ta chambre avant que tes grands-parents ___ là.", ["soient", "sont", "seront"], 0, "在爷爷奶奶来之前把你的房间收拾好。", "avant que + 虚拟式（动作还没发生）"],
      ["___ avoir mangé, nous sommes allés nous promener.", ["Après", "Avant de", "Pendant"], 0, "吃完饭后我们去散步了。", "avoir mangé 是不定式过去式，前面用 après"],
      ["Après ___ arrivée à la gare, elle m'a appelé.", ["être", "avoir", "s'être"], 0, "她到了火车站以后给我打了电话。", "arriver 的助动词是 être，不定式过去式是 être arrivé(e)"],
      ["Lave-toi les mains ___ manger.", ["avant de", "avant que", "avant"], 0, "吃饭前先洗手。", "同一主语 + 原形 → avant de；avant que 接从句，avant 接名词"],
      ["On reste à la maison jusqu'à ce qu'il ___ beau.", ["fasse", "fait", "fera"], 0, "我们待在家里，直到天气变好。", "jusqu'à ce que + 虚拟式：faire → qu'il fasse"],
    ],
    discover: [
      { q: "Pendant que tu dors, je travaille. / Avant que tu partes, je veux te parler. 为什么一个用直陈式（dors），一个用虚拟式（partes）？", opts: ["avant que 引出的动作还没发生，用虚拟式；pendant que 的动作确实在发生，用直陈式", "因为 partir 是不规则动词", "avant que 后面总是用将来时"], a: 0, why: "“之前”意味着动作尚未实现，所以 avant que、jusqu'à ce que、en attendant que 接虚拟式；pendant que、dès que、après que 说的是真实发生的动作，接直陈式。" },
    ],
    write: { prompt: "用法语写一道你会做的菜的做法，或者描述你和家人准备一次聚会的过程，至少用到 avant de / avant que、après avoir（être）+ 过去分词、pendant que、jusqu'à ce que 中的三个，60–120 词。", model: "Voici la recette de la soupe de tomates de ma grand-mère. Avant de commencer, lave bien les tomates et épluche deux oignons. Fais chauffer un peu d'huile dans une casserole. Pendant que l'huile chauffe, coupe les oignons en petits morceaux. Après avoir fait revenir les oignons cinq minutes, ajoute les tomates, du sel et un peu de sucre. Laisse cuire à feu doux jusqu'à ce que les tomates soient très molles. Ensuite, mixe la soupe. Goûte-la avant de la servir et ajoute du poivre si nécessaire. Sers-la bien chaude, avant que tes invités aient trop faim !" },
  },
  {
    id: "b1-16", emoji: "💬", title: "我认为……", sub: "表达观点 · 赞成与反对", can: "能就一个社会话题表达看法、赞成或委婉地反对", scene: null, grammar: ["g-opinion"],
    words: [],
    newWords: [
      ["interdire", "ɛ̃.tɛʁ.diʁ", "禁止", "Il est interdit de fumer ici.", "这里禁止吸烟。", "course"],
      ["le centre-ville", "lə sɑ̃.tʁə.vil", "市中心", "J'habite dans le centre-ville.", "我住在市中心。", "course"],
      ["la pollution", "la pɔ.ly.sjɔ̃", "污染", "La pollution est un vrai problème dans les grandes villes.", "污染是大城市的一个真问题。", "course"],
      ["le piéton · la piétonne", "lə pje.tɔ̃ · la pje.tɔn", "行人", "Cette rue est réservée aux piétons.", "这条街只供行人通行。", "course"],
      ["le commerçant · la commerçante", "lə kɔ.mɛʁ.sɑ̃ · la kɔ.mɛʁ.sɑ̃t", "商户、店主", "Les commerçants du quartier sont sympathiques.", "街区里的店主们都很友善。", "course"],
      ["réaliste", "ʁe.a.list", "现实的、切实可行的", "Ton projet n'est pas très réaliste.", "你的计划不太现实。", "course"],
      ["avoir tort", "a.vwaʁ tɔʁ", "错了、没道理", "Tu as tort de t'inquiéter.", "你不该担心。", "course"],
      ["la piste cyclable", "la pist si.klabl", "自行车道", "Il y a une piste cyclable le long du fleuve.", "沿河有一条自行车道。", "course"],
      ["convaincre", "kɔ̃.vɛ̃kʁ", "说服", "Il m'a convaincu de venir.", "他说服我来了。", "course"],
      ["la mairie", "la mɛ.ʁi", "市政府；市政厅", "La mairie a annoncé de nouveaux travaux.", "市政府宣布了新的施工计划。", "course"],
    ],
    dialogue: [
      ["Nadia", "Vous avez vu ? La mairie veut interdire les voitures dans le centre-ville. Qu'est-ce que vous en pensez ?", "你们看到了吗？市政府想在市中心禁止汽车通行。你们怎么看？"],
      ["Hugo", "Je trouve que c'est une excellente idée. Il y a trop de pollution et de bruit.", "我觉得这是个极好的主意。污染和噪音太多了。"],
      ["我", "Je suis d'accord avec toi. À mon avis, les rues seraient plus agréables pour les piétons et les vélos.", "我同意你的看法。依我看，街道对行人和自行车来说会舒服得多。"],
      ["Nadia", "Moi, je ne suis pas du tout d'accord. Je ne pense pas que ce soit réaliste : comment font les personnes âgées ?", "我完全不同意。我不认为这现实：老年人怎么办？"],
      ["Hugo", "Tu n'as pas tort, mais il y aura des bus gratuits.", "你说得不无道理，不过会有免费公交的。"],
      ["Nadia", "Je doute que les bus soient suffisants. Et je ne suis pas sûre que les commerçants soient contents : ils vont perdre des clients !", "我怀疑公交够不够用。而且我不确定商户们会满意：他们会失去顾客的！"],
      ["我", "C'est vrai que certains commerçants ont peur. Mais il me semble que dans d'autres villes, les gens viennent plus souvent à pied.", "确实有些商户很担心。不过我觉得在别的城市，人们反而更常步行过来。"],
      ["Nadia", "Peut-être. Mais crois-tu vraiment qu'on puisse tout faire à vélo, même en hiver ?", "也许吧。可你真的认为什么事都能骑自行车办吗，冬天也一样？"],
      ["Hugo", "Pas tout, mais beaucoup de choses ! Il faut juste construire plus de pistes cyclables.", "不是所有事，但很多事可以！只需要多修些自行车道。"],
      ["我", "Bref, je pense que c'est une bonne idée, mais il faut convaincre les habitants avant de la mettre en place.", "总之，我认为这是个好主意，但实施之前得先说服居民。"],
    ],
    sentences: [
      ["Je trouve que c'est une excellente idée.", "我觉得这是个极好的主意。"],
      ["Je ne pense pas que ce soit réaliste.", "我不认为这现实。"],
      ["Je doute que les bus soient suffisants.", "我怀疑公交够不够用。"],
      ["Tu n'as pas tort, mais il y aura des bus gratuits.", "你说得不无道理，不过会有免费公交的。"],
      ["Il faut convaincre les habitants avant de la mettre en place.", "实施之前得先说服居民。"],
    ],
    cloze: [
      ["Je pense que tu ___ raison.", ["as", "aies", "auras"], 0, "我认为你是对的。", "肯定的 je pense que 后面用直陈式"],
      ["Je ne pense pas que ce ___ possible.", ["soit", "est", "sera"], 0, "我不认为这可能。", "否定的 penser 表示怀疑 → 虚拟式"],
      ["Je suis tout à fait d'accord ___ vous.", ["avec", "à", "pour"], 0, "我完全同意您的看法。", "固定搭配：être d'accord avec qn"],
      ["___ mon avis, il faut construire plus de pistes cyclables.", ["À", "Dans", "Selon"], 0, "依我看，应该多修些自行车道。", "固定说法 à mon avis；selon 后面接 moi（selon moi）"],
      ["Je doute qu'il ___ venir ce soir.", ["puisse", "peut", "pourra"], 0, "我怀疑他今晚能不能来。", "douter que 本身表示怀疑，肯定句也接虚拟式"],
    ],
    discover: [
      { q: "Je crois qu'il viendra. → 改成否定：Je ne crois pas qu'il ___.", opts: ["vienne", "viendra", "vient"], a: 0, why: "肯定的 croire 表示“认为是真的”，用直陈式；否定后表示不确定，变成虚拟式 vienne。" },
      { q: "你想委婉地反对朋友的观点，哪一句最合适？", opts: ["Tu n'as pas tort, mais je vois les choses un peu autrement.", "Tu as tort, c'est n'importe quoi.", "Je ne suis pas d'accord à toi."], a: 0, why: "Tu n'as pas tort, mais … 先部分肯定再表达不同意见，最得体；第二句很冲；第三句介词错了，应为 d'accord avec toi。" },
    ],
    write: { prompt: "“城市中心应该禁止汽车吗？”用法语写一段观点表达：给出你的看法和两个理由，再承认一个反方观点并回应，至少用一次 je ne pense pas que + 虚拟式，60–120 词。", model: "À mon avis, interdire les voitures dans le centre-ville est une bonne idée. D'abord, je trouve que l'air est vraiment pollué dans les grandes villes, et les enfants respirent cette pollution tous les jours. Ensuite, il me semble que les rues sans voitures sont plus agréables : on peut se promener, faire du vélo et s'arrêter dans les cafés. Bien sûr, certains disent que les personnes âgées auront des difficultés. C'est vrai, mais je ne pense pas que ce soit un problème impossible à résoudre : la ville peut organiser des bus gratuits. Bref, je suis pour, mais il faut bien préparer le changement." },
  },
  {
    id: "b1-17", emoji: "📰", title: "新闻标题", sub: "名词化 · 新闻词汇", can: "能看懂简单的新闻标题，并把句子改写成名词化的标题", scene: null, grammar: ["g-nominal"],
    words: [],
    newWords: [
      ["la hausse", "la os", "上涨、提高", "On observe une forte hausse des prix.", "物价明显上涨。", "course"],
      ["la baisse", "la bɛs", "下降、减少", "Les ventes sont en baisse ce mois-ci.", "这个月销量在下降。", "course"],
      ["la grève", "la ɡʁɛv", "罢工", "Les enseignants sont en grève aujourd'hui.", "教师们今天罢工。", "course"],
      ["le gouvernement", "lə ɡu.vɛʁ.nə.mɑ̃", "政府", "Le gouvernement prépare une nouvelle loi.", "政府正在准备一项新法律。", "course"],
      ["la mesure", "la mə.zyʁ", "措施", "La ville a pris des mesures contre la pollution.", "这座城市采取了治理污染的措施。", "course"],
      ["perturbé · perturbée", "pɛʁ.tyʁ.be", "受干扰的、（交通）受阻的", "Le trafic est perturbé sur la ligne 4.", "4 号线交通受阻。", "course"],
      ["annoncer", "a.nɔ̃.se", "宣布、通知", "Ils ont annoncé leur mariage.", "他们宣布了婚讯。", "course"],
      ["le syndicat", "lə sɛ̃.di.ka", "工会", "Le syndicat appelle à la grève.", "工会号召罢工。", "course"],
      ["le foyer", "lə fwa.je", "家庭、住户", "Chaque foyer recevra une aide de cent euros.", "每户家庭将获得一百欧元补助。", "course"],
      ["l'ouverture (f.)", "lu.vɛʁ.tyʁ", "开放、开通、开幕", "L'ouverture du magasin est prévue en juin.", "商店预计六月开业。", "course"],
    ],
    dialogue: [
      ["", "Les titres du jour. Hausse des prix de l'énergie : le gouvernement annonce de nouvelles mesures.", "今日要闻。能源价格上涨：政府宣布新措施。"],
      ["", "Grève dans les transports : trafic très perturbé jusqu'à jeudi.", "交通行业罢工：周四前交通严重受阻。"],
      ["", "Lyon : ouverture d'une nouvelle ligne de tramway en septembre.", "里昂：一条新的有轨电车线路将于九月开通。"],
      ["", "Le gouvernement a annoncé hier une baisse des taxes sur l'électricité, après une augmentation de 15 % des prix depuis janvier.", "政府昨天宣布下调电费税，此前电价自一月以来上涨了 15%。"],
      ["", "Selon le ministre, cette mesure permettra une économie d'environ deux cents euros par an pour chaque foyer.", "据部长介绍，这一措施将使每户家庭每年节省约两百欧元。"],
      ["", "Les syndicats, eux, demandent une hausse des salaires et maintiennent la grève.", "工会方面则要求提高工资，并继续罢工。"],
      ["Hugo", "Encore une grève ! Je vais devoir prendre la voiture pour aller au travail.", "又罢工！我得开车去上班了。"],
      ["我", "Regarde plutôt la bonne nouvelle : l'ouverture de la ligne de tram va faciliter tes trajets !", "还是看看好消息吧：电车线路开通会让你通勤方便很多！"],
      ["Hugo", "Oui, en septembre… Avec les travaux, je parie qu'il y aura un an de retard !", "是啊，九月……照这个施工进度，我打赌会推迟一年！"],
    ],
    sentences: [
      ["Hausse des prix de l'énergie : le gouvernement annonce de nouvelles mesures.", "能源价格上涨：政府宣布新措施。"],
      ["Grève dans les transports : trafic très perturbé jusqu'à jeudi.", "交通行业罢工：周四前交通严重受阻。"],
      ["Le gouvernement a annoncé hier une baisse des taxes sur l'électricité.", "政府昨天宣布下调电费税。"],
      ["Les syndicats demandent une hausse des salaires.", "工会要求提高工资。"],
      ["L'ouverture de la ligne de tram va faciliter tes trajets.", "电车线路开通会让你通勤方便很多。"],
    ],
    cloze: [
      ["Le prix du pain augmente. → ___ du prix du pain", ["Augmentation", "Augmentement", "Augmentage"], 0, "面包价格上涨", "augmenter 的名词是 l'augmentation（-ation）"],
      ["Le musée ferme. → ___ du musée", ["Fermeture", "Fermement", "Fermation"], 0, "博物馆关闭", "fermer → la fermeture（-ure）；fermement 是副词“坚定地”"],
      ["Les loyers baissent. → La baisse ___ loyers", ["des", "de les", "de"], 0, "房租下降", "原句的主语变成 de + 名词；de + les 必须缩合成 des"],
      ["Le gouvernement a annoncé ___ changement important.", ["un", "une", "la"], 0, "政府宣布了一项重大变化。", "-ment 结尾的名词一般是阳性：le changement"],
      ["Le train part à huit heures. → ___ du train à huit heures", ["Départ", "Partie", "Partement"], 0, "火车八点出发", "partir 的名词是不规则的 le départ；la partie 是“部分、一局”"],
    ],
    discover: [
      { q: "观察：la création, la décision, l'ouverture, l'arrivée / le changement, le nettoyage。你发现了什么规律？", opts: ["-tion / -sion、-ure、-ée 结尾多为阴性；-ment、-age 结尾多为阳性", "名词化以后的词都是阴性", "名词的性取决于原来动词属于第几组"], a: 0, why: "名词化后缀决定了性：-tion、-sion、-ure、-ée 一般是阴性，-ment、-age 一般是阳性（例外如 la plage、la page、l'image）。记住后缀就能猜出大多数新词的性。" },
      { q: "把 Les ventes de voitures électriques augmentent fortement. 改成新闻标题：", opts: ["Forte augmentation des ventes de voitures électriques", "Fortement augmentation de les ventes de voitures électriques", "Les ventes augmentation fortement"], a: 0, why: "动词 augmenter → 名词 augmentation；副词 fortement → 形容词 forte；主语变成 de + 名词，de + les = des。" },
    ],
    write: { prompt: "选一条你最近看到的新闻（中国或法国的都行），先用名词化的方式写一个法语标题，再用 60–120 词写一段简短的新闻报道（谁、什么、什么时候、为什么、结果）。", model: "【Ouverture d'une nouvelle ligne de métro à Chengdu】 Samedi dernier, la ville de Chengdu a inauguré sa nouvelle ligne de métro, qui relie l'aéroport au centre-ville. La construction de cette ligne a duré quatre ans et a coûté environ deux milliards d'euros. Selon la mairie, l'ouverture de la ligne va permettre une forte diminution des embouteillages et une baisse de la pollution. Le trajet entre l'aéroport et le centre ne prendra plus que trente minutes. Les habitants sont contents, mais certains regrettent la hausse du prix des tickets, qui passe de deux à trois yuans." },
  },
  {
    id: "b1-18", emoji: "🧺", title: "每个人都……", sub: "不定代词与不定形容词", can: "能组织集体活动、分配任务，用 chacun、quelqu'un、aucun 等说清“谁、多少人”", scene: null, grammar: ["g-indef"],
    words: [],
    newWords: [
      ["le pique-nique", "lə pik.nik", "野餐", "On fait un pique-nique dimanche ?", "我们周日去野餐吧？", "course"],
      ["s'organiser", "sɔʁ.ɡa.ni.ze", "（自己）安排、组织", "Il faut s'organiser pour les vacances.", "得把假期安排一下。", "course"],
      ["apporter", "a.pɔʁ.te", "带来（东西）", "N'oublie pas d'apporter ton maillot de bain.", "别忘了带泳衣。", "course"],
      ["se charger de", "sə ʃaʁ.ʒe də", "负责、承担", "Je me charge des réservations.", "我负责预订。", "course"],
      ["le covoiturage", "lə ko.vwa.ty.ʁaʒ", "拼车", "Le covoiturage coûte moins cher que le train.", "拼车比坐火车便宜。", "course"],
      ["la nappe", "la nap", "桌布；野餐垫", "Mets la nappe sur l'herbe.", "把野餐垫铺在草地上。", "course"],
      ["au bord de", "o bɔʁ də", "在……边上", "Nous avons une maison au bord de la mer.", "我们在海边有栋房子。", "course"],
      ["être au courant", "ɛtʁ o ku.ʁɑ̃", "知情、了解情况", "Tu es au courant de la nouvelle ?", "你听说那个消息了吗？", "course"],
      ["s'amuser", "sa.my.ze", "玩得开心", "Les enfants se sont bien amusés à la fête.", "孩子们在聚会上玩得很开心。", "course"],
    ],
    dialogue: [
      ["Emma", "Bon, pour le pique-nique de samedi, il faut s'organiser. Est-ce que quelqu'un a une idée de lieu ?", "好，周六的野餐得安排一下。有谁想好地方了吗？"],
      ["Karim", "Pourquoi pas au bord du lac ? Il y a de la place pour tout le monde.", "去湖边怎么样？那里地方够大，大家都坐得下。"],
      ["Emma", "Parfait. Alors, chacun apporte quelque chose : un plat, une boisson ou un dessert.", "好极了。那每个人带点东西：一道菜、饮料或者甜点。"],
      ["我", "Je peux me charger des boissons. Certains ne boivent pas d'alcool, non ?", "饮料我来负责。有些人不喝酒，对吧？"],
      ["Emma", "Oui, plusieurs étudiants ne boivent que des jus de fruits. Prends aussi quelques bouteilles d'eau.", "对，好几个同学只喝果汁。也带几瓶水吧。"],
      ["Karim", "Et pour le transport ? Aucune ligne de bus ne va jusqu'au lac le week-end.", "那交通呢？周末没有一条公交线路通到湖边。"],
      ["我", "On peut faire du covoiturage. J'ai une voiture avec trois places libres : n'importe qui peut monter avec moi.", "可以拼车。我的车有三个空位：谁都可以搭我的车。"],
      ["Emma", "Super ! Il nous faut aussi quelque chose de grand pour s'asseoir. Quelqu'un a une nappe ?", "太好了！我们还需要个大点的东西坐。谁有野餐垫？"],
      ["Karim", "Moi, j'en ai deux. Et j'apporte des jeux pour que chacun s'amuse !", "我有两块。我还带些游戏，让每个人都玩得开心！"],
      ["Emma", "Génial. Je crée un groupe pour que tout le monde soit au courant. Écrivez-moi n'importe quand si vous avez une question !", "太棒了。我建个群，让大家都知道情况。有问题随时给我发消息！"],
    ],
    sentences: [
      ["Est-ce que quelqu'un a une idée de lieu ?", "有谁想好地方了吗？"],
      ["Chacun apporte quelque chose : un plat, une boisson ou un dessert.", "每个人带点东西：一道菜、饮料或者甜点。"],
      ["Plusieurs étudiants ne boivent que des jus de fruits.", "好几个同学只喝果汁。"],
      ["Aucune ligne de bus ne va jusqu'au lac le week-end.", "周末没有一条公交线路通到湖边。"],
      ["Écrivez-moi n'importe quand si vous avez une question.", "有问题随时给我发消息。"],
    ],
    cloze: [
      ["___ invité apporte un dessert.", ["Chaque", "Chacun", "Tous"], 0, "每位客人带一份甜点。", "后面有名词 invité → 形容词 chaque；chacun 是代词，要单独用"],
      ["Les enfants ont reçu un cadeau : ___ a choisi sa couleur.", ["chacun", "chaque", "aucun"], 0, "孩子们都收到了礼物：每个人都挑了自己喜欢的颜色。", "后面没有名词，用代词 chacun"],
      ["Aucun étudiant ___ venu à la réunion.", ["n'est", "est", "ne sont"], 0, "没有一个学生来开会。", "aucun 要和 ne 连用，而且是单数"],
      ["Je cherche quelque chose ___ original pour son anniversaire.", ["d'", "très", "plus"], 0, "我在给他找件别致的生日礼物。", "quelque chose + de + 形容词：quelque chose d'original"],
      ["Tout le monde ___ content du résultat.", ["est", "sont", "êtes"], 0, "大家都对结果很满意。", "tout le monde 是单数，动词用第三人称单数"],
    ],
    discover: [
      { q: "观察：Chaque étudiant a un livre. / Chacun a un livre. chaque 和 chacun 的区别是？", opts: ["chaque 后面必须接名词；chacun 单独使用，代替“每个人 / 每个东西”", "chaque 用于人，chacun 用于物", "两者完全一样，可以互换"], a: 0, why: "chaque 是形容词，像 ce、mon 一样放在名词前；chacun / chacune 是代词，可以单独做主语或宾语。两者都只用单数。" },
    ],
    write: { prompt: "你在组织一次朋友聚会或班级活动。用法语给大家写一条群消息，说明时间地点、每个人要带什么、交通怎么安排，至少用 5 个本课的不定代词 / 形容词（chacun, quelqu'un, quelque chose, plusieurs, certains, aucun, n'importe…），60–120 词。", model: "Salut tout le monde ! Pour fêter la fin des examens, je vous propose un pique-nique au bord du lac dimanche à midi. Chacun apporte quelque chose : un plat salé, un dessert ou des boissons. Plusieurs d'entre vous m'ont demandé s'il fallait venir avec de l'alcool : ce n'est pas obligatoire, certains préfèrent les jus de fruits. Aucun bus ne va jusqu'au lac le dimanche, donc on fera du covoiturage. Quelqu'un d'autre a une voiture ? Moi, je peux prendre trois personnes. Si vous avez une question, écrivez-moi n'importe quand. À dimanche !" },
  },
  {
    id: "b1-19", emoji: "⏰", title: "我本该……", sub: "条件式过去时", can: "能表达后悔和责备，并听懂新闻里“据说”的说法", scene: null, grammar: ["g-cond-passe"],
    words: [],
    newWords: [
      ["le réveil", "lə ʁe.vɛj", "闹钟", "J'ai mis mon réveil à six heures.", "我把闹钟定在六点。", "course"],
      ["sonner", "sɔ.ne", "（铃、闹钟）响", "Ton téléphone sonne !", "你的电话响了！", "course"],
      ["rater", "ʁa.te", "错过；没做成", "J'ai raté le dernier métro.", "我错过了末班地铁。", "course"],
      ["regretter", "ʁə.ɡʁɛ.te", "后悔；遗憾", "Je regrette de ne pas être venu.", "我后悔没有来。", "course"],
      ["le pire", "lə piʁ", "最糟糕的（事）", "Le pire, c'est que j'ai oublié mon passeport.", "最糟的是我忘带护照了。", "course"],
      ["la voie", "la vwa", "（铁路的）轨道；车道", "Le train part de la voie 3.", "火车从 3 号站台轨道出发。", "course"],
      ["le blessé · la blessée", "lə blɛ.se · la blɛ.se", "伤者", "L'accident a fait deux blessés.", "事故造成两人受伤。", "course"],
      ["interrompre", "ɛ̃.te.ʁɔ̃pʁ", "中断、打断", "Excusez-moi de vous interrompre.", "抱歉打断您。", "course"],
      ["le témoin", "lə te.mwɛ̃", "目击者、证人", "Selon un témoin, la voiture roulait très vite.", "据一名目击者称，那辆车开得很快。", "course"],
      ["à ta place", "a ta plas", "换作我是你", "À ta place, je dirais la vérité.", "换作我是你，我会说实话。", "course"],
    ],
    dialogue: [
      ["Léa", "Alors, cet entretien ? Ça s'est bien passé ?", "那个面试怎么样？顺利吗？"],
      ["我", "Une catastrophe. Mon réveil n'a pas sonné et j'ai raté mon train. Je suis arrivé avec une heure de retard.", "一场灾难。我的闹钟没响，我错过了火车，迟到了一个小时。"],
      ["Léa", "Oh non ! Tu aurais dû mettre deux réveils. Et tu aurais pu m'appeler, je t'aurais réveillé !", "哎呀！你本该定两个闹钟的。你也可以给我打电话，我会叫醒你的！"],
      ["我", "Je sais… J'aurais dû me coucher plus tôt aussi. Et le pire, c'est qu'il y avait un problème sur la ligne.", "我知道……我也本该早点睡。最糟的是，线路上还出了问题。"],
      ["Léa", "Ah oui, j'ai entendu ça à la radio ce matin. Écoute, ils en reparlent.", "哦对，我今天早上在广播里听到了。你听，他们又在说这件事。"],
      ["", "Selon les premières informations, un arbre serait tombé sur la voie à cause du vent. Il n'y aurait pas eu de blessés, mais le trafic aurait été interrompu pendant deux heures.", "据初步消息，一棵树因大风倒在了铁轨上。据称无人受伤，但交通中断了约两小时。"],
      ["我", "Tu vois, même avec deux réveils, je n'aurais pas pu arriver à l'heure !", "你看，就算定了两个闹钟，我也不可能准时到！"],
      ["Léa", "Peut-être. Mais à ta place, j'aurais pris un taxi et j'aurais prévenu l'entreprise.", "也许吧。不过换作我是你，我会打车，并且提前通知公司。"],
      ["我", "Tu as raison. J'aurais aimé avoir ton calme ! Heureusement, ils m'ont proposé un autre rendez-vous.", "你说得对。我当时要是有你这么冷静就好了！幸好他们给我另约了时间。"],
      ["Léa", "Tu vois ! Cette fois, mets trois réveils.", "你看！这次定三个闹钟吧。"],
    ],
    sentences: [
      ["Tu aurais dû mettre deux réveils.", "你本该定两个闹钟的。"],
      ["Tu aurais pu m'appeler, je t'aurais réveillé !", "你本可以给我打电话，我会叫醒你的！"],
      ["Un arbre serait tombé sur la voie à cause du vent.", "据说一棵树因大风倒在了铁轨上。"],
      ["À ta place, j'aurais pris un taxi.", "换作我是你，我会打车。"],
      ["J'aurais aimé avoir ton calme !", "我当时要是有你这么冷静就好了！"],
    ],
    cloze: [
      ["Je suis arrivé en retard. J'___ partir plus tôt.", ["aurais dû", "devrais", "ai dû"], 0, "我迟到了。我本该早点出发的。", "对过去的后悔用条件式过去时 aurais dû；devrais 说的是现在，ai dû 是“不得不”"],
      ["Tu ___ me prévenir que tu ne venais pas !", ["aurais pu", "pourrais", "as pu"], 0, "你本可以告诉我你不来的！", "责备对方过去没做的事：tu aurais pu + 原形"],
      ["Selon ses voisins, elle ___ partie en Italie.", ["serait", "aurait", "sera"], 0, "据她的邻居说，她去意大利了。", "partir 的助动词是 être；未经证实的消息用条件式过去时"],
      ["J'aurais dû ___ les billets hier.", ["acheter", "acheté", "achète"], 0, "我昨天本该买票的。", "aurais dû 后面接原形，不接过去分词"],
      ["À ta place, j'___ accepté cette offre.", ["aurais", "aurai", "avais"], 0, "换作我是你，我就接受这份工作邀约了。", "条件式 aurais（带 s）≠ 将来时 aurai：读音几乎一样，拼写要注意"],
    ],
    discover: [
      { q: "Je devrais faire du sport. / J'aurais dû faire du sport. 两句有什么区别？", opts: ["第一句是现在的建议（我应该运动）；第二句是对过去的后悔（我本该运动，但没有）", "第一句更礼貌", "没有区别"], a: 0, why: "条件式现在时 je devrais 说现在或将来该做的事；条件式过去时 j'aurais dû 说过去本该做却没做的事，带有后悔的语气。" },
      { q: "新闻：« Le ministre aurait démissionné hier soir. » 记者为什么用条件式？", opts: ["表示消息尚未证实，是别人的说法", "表示部长将来会辞职", "表示礼貌"], a: 0, why: "新闻里的条件式（现在时或过去时）表示“据说、据报道”，记者不为消息的真实性担保。" },
    ],
    write: { prompt: "讲一次让你后悔的经历（错过了机会、说错了话、忘了重要的事……）。用法语写你做了什么、本该怎么做、别人怎么评价，至少用到 j'aurais dû、j'aurais pu / tu aurais pu、à ma place … 中的三个，60–120 词。", model: "L'année dernière, mon meilleur ami Hao a fêté ses trente ans, et j'ai complètement oublié son anniversaire. Ce jour-là, j'avais beaucoup de travail et je n'ai pas regardé mon téléphone. Le lendemain, j'ai vu ses messages et je me suis senti très mal. J'aurais dû noter la date dans mon agenda. J'aurais pu au moins l'appeler le soir même. Quand je lui ai parlé, il m'a dit : « Tu aurais pu m'envoyer un petit message ! » Ma sœur, elle, m'a dit qu'à ma place, elle aurait acheté un gros cadeau pour s'excuser. C'est ce que j'ai fait, et heureusement, il m'a pardonné." },
  },
  {
    id: "b1-20", emoji: "💼", title: "求职面试", sub: "正式语域 · 综合复习", can: "能在面试中得体地介绍自己、回答问题，并写正式的求职邮件", scene: null, grammar: ["g-registre"],
    words: [],
    newWords: [
      ["le recruteur · la recruteuse", "lə ʁə.kʁy.tœʁ · la ʁə.kʁy.tøz", "招聘人员、面试官", "La recruteuse m'a posé beaucoup de questions.", "面试官问了我很多问题。", "course"],
      ["titulaire de", "ti.ty.lɛʁ də", "持有（学位、证书）的", "Elle est titulaire d'un master en droit.", "她持有法学硕士学位。", "course"],
      ["acquérir", "a.ke.ʁiʁ", "获得、积累（经验、知识）", "J'ai acquis beaucoup d'expérience à l'étranger.", "我在国外积累了很多经验。", "course"],
      ["le point fort", "lə pwɛ̃ fɔʁ", "优点、长处", "Son point fort, c'est l'organisation.", "他的长处是组织能力。", "course"],
      ["le point faible", "lə pwɛ̃ fɛbl", "缺点、弱项", "Mon point faible, ce sont les chiffres.", "我的弱项是数字。", "course"],
      ["rigoureux · rigoureuse", "ʁi.ɡu.ʁø · ʁi.ɡu.ʁøz", "严谨的", "C'est une collègue très rigoureuse.", "她是一位非常严谨的同事。", "course"],
      ["polyvalent · polyvalente", "pɔ.li.va.lɑ̃ · pɔ.li.va.lɑ̃t", "多面手的、能胜任多种工作的", "Nous cherchons quelqu'un de polyvalent.", "我们在找一个多面手。", "course"],
      ["les prétentions salariales (f.)", "le pʁe.tɑ̃.sjɔ̃ sa.la.ʁjal", "期望薪资", "Quelles sont vos prétentions salariales ?", "您的期望薪资是多少？", "course"],
      ["la période d'essai", "la pe.ʁjɔd de.sɛ", "试用期", "La période d'essai dure trois mois.", "试用期为三个月。", "course"],
      ["se dérouler", "sə de.ʁu.le", "进行、展开", "L'entretien s'est très bien déroulé.", "面试进行得很顺利。", "course"],
    ],
    dialogue: [
      ["Mme Dupuis", "Bonjour, monsieur. Asseyez-vous, je vous en prie. Pourriez-vous vous présenter en quelques mots ?", "您好，先生。请坐。您能简单介绍一下自己吗？"],
      ["我", "Bonjour, madame. Je vous remercie de me recevoir. Je suis titulaire d'un master en commerce international et j'ai acquis trois ans d'expérience dans une entreprise d'import-export à Shanghai.", "您好，女士。感谢您接待我。我拥有国际贸易硕士学位，在上海一家进出口公司积累了三年经验。"],
      ["Mme Dupuis", "Très bien. Pourquoi notre entreprise vous intéresse-t-elle ?", "很好。您为什么对我们公司感兴趣？"],
      ["我", "Ce poste m'intéresse vivement, car vous développez vos activités en Asie. Je parle chinois, anglais et français, et je connais bien le marché chinois.", "我对这个职位非常感兴趣，因为贵公司正在拓展亚洲业务。我会说中文、英语和法语，而且很了解中国市场。"],
      ["Mme Dupuis", "Quels sont vos points forts, selon vous ?", "您认为自己有哪些长处？"],
      ["我", "Je suis quelqu'un de rigoureux et de polyvalent. Dans mon dernier poste, j'ai été chargé de gérer les relations avec nos fournisseurs.", "我是一个严谨、能胜任多种工作的人。在上一份工作中，我负责管理与供应商的关系。"],
      ["Mme Dupuis", "Et votre point faible ?", "那您的缺点呢？"],
      ["我", "Je suis parfois un peu trop perfectionniste, mais j'apprends à mieux gérer mon temps.", "我有时候有点太追求完美，但我正在学习更好地管理时间。"],
      ["Mme Dupuis", "Quelles sont vos prétentions salariales ? Et avez-vous des questions ?", "您的期望薪资是多少？您有什么问题吗？"],
      ["我", "Je souhaiterais un salaire d'environ trente-huit mille euros brut par an. Par ailleurs, pourriez-vous me dire comment se déroule la période d'essai ?", "我希望年薪税前三万八千欧元左右。另外，您能告诉我试用期是怎样安排的吗？"],
    ],
    sentences: [
      ["Pourriez-vous vous présenter en quelques mots ?", "您能简单介绍一下自己吗？"],
      ["Je suis titulaire d'un master en commerce international.", "我拥有国际贸易硕士学位。"],
      ["Ce poste m'intéresse vivement, car vous développez vos activités en Asie.", "我对这个职位非常感兴趣，因为贵公司正在拓展亚洲业务。"],
      ["Je suis quelqu'un de rigoureux et de polyvalent.", "我是一个严谨、能胜任多种工作的人。"],
      ["Pourriez-vous me dire comment se déroule la période d'essai ?", "您能告诉我试用期是怎样安排的吗？"],
    ],
    cloze: [
      ["Excusez-moi, madame, ___ me dire où se trouve la salle de réunion ?", ["pourriez-vous", "tu peux", "tu pourrais"], 0, "打扰一下，女士，您能告诉我会议室在哪里吗？", "对陌生人、在正式场合用 vous，并用条件式 pourriez-vous 让请求更礼貌"],
      ["Je vous ___ de m'avoir reçu.", ["remercie", "remercier", "merci"], 0, "感谢您接待我。", "je vous remercie de + 不定式过去式；merci 是感叹词 / 名词，不能这样变位使用"],
      ["Je suis quelqu'un ___ rigoureux.", ["de", "très", "qui"], 0, "我是一个严谨的人。", "quelqu'un + de + 形容词"],
      ["Madame, Monsieur, je me permets de vous écrire ___ sujet de votre offre d'emploi.", ["au", "du", "sur le"], 0, "女士 / 先生：冒昧致信，是关于贵公司的招聘信息。", "固定表达 au sujet de（关于）"],
      ["Merci pour ___ temps, madame.", ["votre", "ton", "vos"], 0, "感谢您抽出时间，女士。", "对面试官用 vous，主有词也要用 votre；temps 是单数"],
    ],
    discover: [
      { q: "面试结束时，哪一句最得体？", opts: ["Je vous remercie pour cet entretien. Je reste à votre disposition.", "Merci, c'était cool ! À plus !", "Bon, je veux ce poste, vous m'appelez quand ?"], a: 0, why: "正式场合用 vous、完整的句子和固定套语；cool、à plus 是口语；“je veux”太直接，催促对方也很失礼。" },
      { q: "把 Je veux savoir le salaire. 改成面试中礼貌的说法：", opts: ["Pourriez-vous m'indiquer le salaire prévu pour ce poste ?", "Dis-moi le salaire.", "C'est combien, le salaire ?"], a: 0, why: "用条件式 pourriez-vous 和完整的名词短语，语气委婉、正式；另外两句太随便。" },
    ],
    write: { prompt: "你在网上看到一个感兴趣的职位。用法语给招聘负责人写一封正式邮件：说明你看到的职位、简单介绍你的经历和优点、请求面试机会，并使用正确的称呼和结尾套语，60–120 词。", model: "Madame, Monsieur, je me permets de vous écrire au sujet de l'offre d'emploi d'assistant commercial publiée sur votre site. Titulaire d'un master en commerce international, j'ai acquis trois ans d'expérience dans une entreprise d'import-export à Shanghai, où j'étais chargé des relations avec les clients européens. Je parle couramment chinois, anglais et français. Je suis quelqu'un de rigoureux et de polyvalent, et je sais travailler en équipe. Ce poste m'intéresse vivement, car il correspond à mon projet professionnel. Je serais ravi de vous rencontrer lors d'un entretien. Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. Lin Wei" },
  },
];
