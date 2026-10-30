// 法语核心课程 B1（上）：b1-01 … b1-10
// 虚拟式、si 假设句、愈过去时、先将来时、dont / lequel、双宾语代词、副动词、被动语态
// 格式见 docs/SYLLABUS.md 第二部分

export const grammar = [
  {
    id: 'g-subj', title: '虚拟式现在时：构成与 il faut que',
    body: `<p><b>虚拟式（le subjonctif）</b>不是一个"时间"，而是一种<b>语气</b>：说话人不是在陈述事实，而是在表达"必须、希望、喜欢、害怕、怀疑"等主观态度。它几乎总是出现在 <b>que</b> 引导的从句里。本课先学最常用的触发词 <b>il faut que</b>（必须、得）。</p>
<p><b>一、规则构成：</b>取现在时 <b>ils</b> 的形式，去掉 -ent，加词尾 <b>-e, -es, -e, -ions, -iez, -ent</b>。</p>
<table><tr><th></th><th>parler<br>(ils parlent)</th><th>finir<br>(ils finissent)</th><th>attendre<br>(ils attendent)</th><th>partir<br>(ils partent)</th></tr>
<tr><td>que je</td><td>parle</td><td>finisse</td><td>attende</td><td>parte</td></tr>
<tr><td>que tu</td><td>parles</td><td>finisses</td><td>attendes</td><td>partes</td></tr>
<tr><td>qu'il / elle</td><td>parle</td><td>finisse</td><td>attende</td><td>parte</td></tr>
<tr><td>que nous</td><td>parlions</td><td>finissions</td><td>attendions</td><td>partions</td></tr>
<tr><td>que vous</td><td>parliez</td><td>finissiez</td><td>attendiez</td><td>partiez</td></tr>
<tr><td>qu'ils / elles</td><td>parlent</td><td>finissent</td><td>attendent</td><td>partent</td></tr></table>
<p><b>二、有两个词根的动词：</b>nous / vous 的形式和<b>未完成过去时</b>完全一样，其余人称用 ils 的词根。</p>
<table><tr><th>动词</th><th>que je / tu / il / ils</th><th>que nous / vous</th></tr>
<tr><td>prendre</td><td>prenne, prennes, prenne, prennent</td><td>prenions, preniez</td></tr>
<tr><td>venir</td><td>vienne, viennes, vienne, viennent</td><td>venions, veniez</td></tr>
<tr><td>boire</td><td>boive, boives, boive, boivent</td><td>buvions, buviez</td></tr>
<tr><td>devoir</td><td>doive, doives, doive, doivent</td><td>devions, deviez</td></tr>
<tr><td>voir</td><td>voie, voies, voie, voient</td><td>voyions, voyiez</td></tr>
<tr><td>acheter</td><td>achète, achètes, achète, achètent</td><td>achetions, achetiez</td></tr></table>
<p><b>三、完全不规则的七个动词（必须背）：</b></p>
<table><tr><th></th><th>être</th><th>avoir</th><th>aller</th><th>faire</th><th>pouvoir</th><th>savoir</th><th>vouloir</th></tr>
<tr><td>que je</td><td>sois</td><td>aie</td><td>aille</td><td>fasse</td><td>puisse</td><td>sache</td><td>veuille</td></tr>
<tr><td>que tu</td><td>sois</td><td>aies</td><td>ailles</td><td>fasses</td><td>puisses</td><td>saches</td><td>veuilles</td></tr>
<tr><td>qu'il</td><td>soit</td><td>ait</td><td>aille</td><td>fasse</td><td>puisse</td><td>sache</td><td>veuille</td></tr>
<tr><td>que nous</td><td>soyons</td><td>ayons</td><td>allions</td><td>fassions</td><td>puissions</td><td>sachions</td><td>voulions</td></tr>
<tr><td>que vous</td><td>soyez</td><td>ayez</td><td>alliez</td><td>fassiez</td><td>puissiez</td><td>sachiez</td><td>vouliez</td></tr>
<tr><td>qu'ils</td><td>soient</td><td>aient</td><td>aillent</td><td>fassent</td><td>puissent</td><td>sachent</td><td>veuillent</td></tr></table>
<p>注意：aller 和 vouloir 的 nous / vous 又回到了规则形式（allions, voulions）；être 和 avoir 的 nous / vous <b>没有 i</b>（soyons, ayez）。</p>
<p><b>四、il faut que + 虚拟式 和 il faut + 原形</b></p>
<ul><li>泛指、不说是谁做：<b>Il faut</b> partir.（得走了。）</li>
<li>具体到某个人：<b>Il faut que</b> tu partes.（你得走了。）意思接近 Tu dois partir，但语气更强。</li>
<li>否定 <b>il ne faut pas que</b> = 不许、千万别（<b>不是</b>"不必"）：Il ne faut pas que tu oublies.（你可千万别忘了。）"不必"要说 tu n'es pas obligé de… 或 ce n'est pas la peine de…</li>
<li>虚拟式现在时既可以指现在，也可以指将来：Il faut que tu viennes <b>demain</b>.（法语没有"虚拟式将来时"。）</li></ul>
<p><b>中国学生常犯的错</b></p>
<ul><li>il faut que 后面用直陈式：*Il faut que tu fais ✗ → Il faut que tu <b>fasses</b>。</li>
<li>把 sois（je / tu）和 soit（il / elle）写混；il 的 ait 也不要写成 *ai。</li>
<li>-ier 动词的 nous / vous 有两个 i：que nous étud<b>ii</b>ons，que vous oubl<b>ii</b>ez。</li>
<li>-er 动词 je / tu / il / ils 的虚拟式和现在时拼写、读音都一样（que je parle），要靠 que 和前面的触发词来判断。</li></ul>`,
    ex: [
      ['Il faut que tu fasses la vaisselle ce soir.', '今晚你得洗碗。'],
      ['Il faut que nous soyons à la gare à huit heures.', '我们八点得到火车站。'],
      ["Il ne faut pas que vous oubliiez vos clés.", '你们千万别忘了钥匙。'],
      ["Il faut que j'aille à la banque avant midi.", '我中午前得去趟银行。'],
    ],
  },
  {
    id: 'g-subj2', title: '虚拟式：愿望、情感、怀疑',
    body: `<p>除了 il faut que，凡是主句表达<b>主观态度</b>（想要、喜欢、高兴、害怕、遗憾、怀疑），而不是陈述事实，que 后面的从句就用虚拟式。</p>
<table><tr><th>类别</th><th>常见表达</th><th>例句</th></tr>
<tr><td>愿望、意愿</td><td>vouloir que, souhaiter que, aimer que, j'aimerais que, préférer que, demander que</td><td>Je veux que tu <b>viennes</b>.</td></tr>
<tr><td>情感</td><td>être content / heureux / ravi / triste / désolé / déçu que, avoir peur que, regretter que, c'est dommage que</td><td>Je suis ravi que vous <b>soyez</b> là.</td></tr>
<tr><td>怀疑、不确定</td><td>douter que, ne pas être sûr que, il est possible que</td><td>Je doute qu'il <b>puisse</b> venir.</td></tr></table>
<p><b>主语相同 → 不用 que，用原形</b>。这是最重要的规则：</p>
<table><tr><th>两个主语不同：que + 虚拟式</th><th>同一个主语：(de) + 原形</th></tr>
<tr><td>Je veux que <b>tu</b> partes.</td><td>Je veux partir.（*Je veux que je parte ✗）</td></tr>
<tr><td>Je suis content que <b>tu</b> sois là.</td><td>Je suis content <b>d'</b>être là.</td></tr>
<tr><td>J'ai peur qu'<b>il</b> soit en retard.</td><td>J'ai peur <b>d'</b>être en retard.</td></tr>
<tr><td>Je regrette que <b>tu</b> ne viennes pas.</td><td>Je regrette <b>de</b> ne pas venir.</td></tr></table>
<p>情感形容词、avoir peur、regretter 接原形时要加 <b>de</b>；vouloir、aimer、préférer、souhaiter 直接接原形。</p>
<p><b>大例外：espérer que + 直陈式</b>（多用将来时）：J'espère que tu <b>viendras</b>.（*J'espère que tu viennes ✗）。<br>同理，penser que、croire que、être sûr que 的<b>肯定句</b>用直陈式，否定或疑问时才用虚拟式：Je suis sûr qu'il <b>vient</b>. / Je ne suis pas sûr qu'il <b>vienne</b>.（"我认为"一课会详细讲。）</p>
<p><b>书面语小知识：</b>avoir peur que 在正式文体里常带一个不表示否定的 ne：J'ai peur qu'il <b>ne</b> pleuve.（意思还是"怕下雨"。）</p>
<p><b>中国学生常犯的错</b></p>
<ul><li>中文"希望"有两种：期待某个事实 → espérer + 直陈式；要求、盼望别人去做 → souhaiter / vouloir / j'aimerais que + 虚拟式。</li>
<li>同主语还用 que：*Je suis content que je te vois ✗ → Je suis content <b>de te voir</b>。</li>
<li>照搬英语 I want you to come：*Je veux toi venir ✗ → Je veux <b>que tu viennes</b>。</li>
<li>manquer 的方向和中文相反：Tu me manques = 我想你（"你"对我来说缺了）。</li></ul>`,
    ex: [
      ['Je voudrais que tu viennes à ma soirée.', '我希望你来我的晚会。'],
      ['Je suis triste que tu partes si tôt.', '你这么早就走，我很难过。'],
      ["Je doute qu'il sache la vérité.", '我怀疑他知道真相。'],
      ["J'espère qu'il fera beau samedi.", '希望周六天气好。（espérer + 直陈式）'],
    ],
  },
  {
    id: 'g-si-imp', title: 'si + 未完成过去时，条件式：假设现在',
    body: `<p>表达对<b>现在或将来</b>的假设（与事实相反、不太可能，或纯属想象）：</p>
<table><tr><th>条件从句</th><th>主句</th></tr>
<tr><td><b>si</b> + 未完成过去时</td><td><b>条件式现在时</b></td></tr>
<tr><td>Si j'<b>avais</b> le temps,</td><td>je <b>voyagerais</b> plus.</td></tr></table>
<p>虽然用了"过去时"的形式，说的却是<b>现在</b>：Si j'avais le temps = 可惜我现在没时间。</p>
<p><b>复习：条件式现在时</b> = 将来时词根 + 未完成过去时词尾（-ais, -ais, -ait, -ions, -iez, -aient）。常用不规则词根：je <b>ser</b>ais, j'<b>aur</b>ais, j'<b>ir</b>ais, je <b>fer</b>ais, je <b>pourr</b>ais, je <b>voudr</b>ais, je <b>viendr</b>ais, je <b>devr</b>ais, je <b>saur</b>ais。</p>
<p><b>si 句三种类型对比</b></p>
<table><tr><th>结构</th><th>意思</th><th>例句</th></tr>
<tr><td>si + 现在时 → 将来时 / 现在时 / 命令式</td><td>真实、可能发生的条件</td><td>S'il fait beau demain, on <b>ira</b> à la plage.</td></tr>
<tr><td>si + 未完成过去时 → 条件式现在时</td><td>与现在事实相反或不太可能</td><td>S'il faisait beau, on <b>irait</b> à la plage.（可惜在下雨）</td></tr>
<tr><td>si + 愈过去时 → 条件式过去时</td><td>与过去事实相反（B2 学）</td><td>S'il avait fait beau, on serait allés à la plage.</td></tr></table>
<p><b>其他常见用法</b></p>
<ul><li>给建议：<b>Si j'étais toi</b>, … / <b>À ta place</b>, je dormirais un peu.</li>
<li><b>Et si on + 未完成过去时 ?</b> 单独成句，表示提议"要不我们……吧？"：Et si on allait au cinéma ?</li>
<li><b>Si seulement</b> + 未完成过去时：要是……就好了！Si seulement j'avais plus de temps !</li></ul>
<p><b>注意</b></p>
<ul><li><b>si 后面绝对不用条件式，也不用将来时</b>：*Si j'aurais de l'argent ✗ → Si j'<b>avais</b> de l'argent。这是最常见的错误，连很多法国孩子也会犯。</li>
<li>si 只在 il / ils 前缩写：s'il, s'ils；si elle、si on 不缩写。</li>
<li>两个分句可以调换：J'achèterais une maison <b>si je gagnais</b> au loto.</li>
<li>条件式 -erais 和将来时 -erai 在口语里几乎同音，写的时候要看清是哪种 si 句。</li>
<li>别和表示"是否"的 si 混淆：Je ne sais pas <b>s'il</b> viendra.（我不知道他是否会来——"是否"的 si 后面可以用将来时。）</li></ul>`,
    ex: [
      ["Si je gagnais au loto, je ferais le tour du monde.", '如果我中了彩票，我就去环游世界。'],
      ["Si j'étais toi, je n'hésiterais pas.", '如果我是你，我不会犹豫。'],
      ["Qu'est-ce que tu ferais si tu n'avais pas besoin de travailler ?", '如果你不需要工作，你会做什么？'],
      ['Et si on partait ce week-end ?', '要不我们这周末出去玩吧？'],
    ],
  },
  {
    id: 'g-pqp', title: '愈过去时：过去的过去',
    body: `<p><b>愈过去时（le plus-que-parfait）</b>表示在过去某个时间点或某件过去的事<b>之前已经完成</b>的动作，相当于中文"那时已经……了"、英语的 had done。</p>
<p><b>构成：</b>avoir / être 的<b>未完成过去时</b> + 过去分词。助动词的选择、过去分词的配合，和复合过去时完全一样。</p>
<table><tr><th></th><th>finir（avoir）</th><th>partir（être）</th><th>se coucher（代词式）</th></tr>
<tr><td>je</td><td>j'avais fini</td><td>j'étais parti(e)</td><td>je m'étais couché(e)</td></tr>
<tr><td>tu</td><td>tu avais fini</td><td>tu étais parti(e)</td><td>tu t'étais couché(e)</td></tr>
<tr><td>il / elle</td><td>il avait fini</td><td>il était parti / elle était partie</td><td>il s'était couché / elle s'était couchée</td></tr>
<tr><td>nous</td><td>nous avions fini</td><td>nous étions parti(e)s</td><td>nous nous étions couché(e)s</td></tr>
<tr><td>vous</td><td>vous aviez fini</td><td>vous étiez parti(e)(s)</td><td>vous vous étiez couché(e)(s)</td></tr>
<tr><td>ils / elles</td><td>ils avaient fini</td><td>ils étaient partis / elles étaient parties</td><td>ils s'étaient couchés</td></tr></table>
<p><b>时间轴</b></p>
<table><tr><th>更早</th><th>过去</th><th>现在</th></tr>
<tr><td>愈过去时<br>le train <b>était parti</b></td><td>复合过去时 / 未完成过去时<br>je <b>suis arrivé</b> / il <b>pleuvait</b></td><td>现在时</td></tr></table>
<p><b>用法</b></p>
<ul><li>比另一件过去的事更早：Quand je suis arrivé, le film <b>avait</b> déjà <b>commencé</b>.</li>
<li>补充原因或背景（倒叙）：Il était fatigué parce qu'il <b>avait</b> mal <b>dormi</b>.</li>
<li>常和 déjà, jamais, pas encore, la veille（前一天）, l'année d'avant 连用：Je n'<b>avais</b> jamais <b>vu</b> la mer avant mes vingt ans.</li>
<li>Si seulement + 愈过去时：对过去的遗憾。Si seulement j'<b>avais su</b> !（早知道就好了！）</li>
<li>间接引语里的"过去的过去"（后面会专门学）：Il m'a dit qu'il <b>avait fini</b>.</li></ul>
<p><b>对比</b>：Quand je suis arrivé, il <b>est parti</b>.（我到了，他随后走了，两人见了面）<br>Quand je suis arrivé, il <b>était parti</b>.（我到之前他已经走了，我没见到他）</p>
<p><b>中国学生常犯的错</b></p>
<ul><li>中文靠"已经、之前"表示先后，动词本身不变；法语讲故事时如果全用复合过去时，先后关系就乱了。</li>
<li>忘了 être 型动词：*il avait parti ✗ → il <b>était</b> parti；*elle avait tombé ✗ → elle <b>était tombée</b>。</li>
<li>用得过多：按时间顺序讲（先……然后……）只用复合过去时就够了；只有"往回倒"交代更早的事时才用愈过去时。</li></ul>`,
    ex: [
      ['Quand je suis arrivé à la gare, le train était déjà parti.', '我到车站时，火车已经开走了。'],
      ["La veille, je m'étais couché très tard.", '前一天晚上我睡得很晚。'],
      ["Elle a retrouvé le livre qu'elle avait perdu.", '她找到了之前丢的那本书。'],
      ["Je n'avais jamais mangé de fromage avant de venir en France.", '来法国之前我从没吃过奶酪。'],
    ],
  },
  {
    id: 'g-fut-ant', title: '先将来时：将来某时之前已经完成',
    body: `<p><b>先将来时（le futur antérieur）</b>表示在将来某个时间点、或另一个将来动作<b>之前已经完成</b>的动作——可以理解为"将来的过去"。</p>
<p><b>构成：</b>avoir / être 的<b>简单将来时</b> + 过去分词（助动词选择和配合同复合过去时）。</p>
<table><tr><th></th><th>finir（avoir）</th><th>arriver（être）</th><th>s'installer（代词式）</th></tr>
<tr><td>je</td><td>j'aurai fini</td><td>je serai arrivé(e)</td><td>je me serai installé(e)</td></tr>
<tr><td>tu</td><td>tu auras fini</td><td>tu seras arrivé(e)</td><td>tu te seras installé(e)</td></tr>
<tr><td>il / elle</td><td>il aura fini</td><td>il sera arrivé / elle sera arrivée</td><td>il se sera installé</td></tr>
<tr><td>nous</td><td>nous aurons fini</td><td>nous serons arrivé(e)s</td><td>nous nous serons installé(e)s</td></tr>
<tr><td>vous</td><td>vous aurez fini</td><td>vous serez arrivé(e)(s)</td><td>vous vous serez installé(e)(s)</td></tr>
<tr><td>ils / elles</td><td>ils auront fini</td><td>ils seront arrivés</td><td>ils se seront installés</td></tr></table>
<p><b>用法一：时间从句（最常用）</b><br>quand, lorsque, dès que（一……就）, aussitôt que, une fois que（一旦……之后）, après que + 先将来时；主句用简单将来时或命令式。</p>
<ul><li>Quand tu <b>auras fini</b>, tu m'appelleras.</li>
<li>Dès que je <b>serai arrivé</b>, je t'enverrai un message.</li>
<li>Une fois que vous <b>aurez signé</b>, nous commencerons.</li></ul>
<p><b>对比：</b>两件事同时 → 都用简单将来时：Quand tu <b>seras</b> à Paris, tu m'appelleras.（你在巴黎的时候）<br>一件先完成 → 先将来时：Quand tu <b>seras arrivé</b> à Paris, tu m'appelleras.（你到了巴黎以后）</p>
<p><b>用法二：到将来某个时间已经完成</b>：Dans deux heures, j'<b>aurai terminé</b>. / D'ici vendredi, nous <b>aurons reçu</b> la réponse.</p>
<p><b>用法三（了解）：推测过去</b>：Il n'est pas venu ? Il <b>aura oublié</b>.（他大概是忘了。）</p>
<table><tr><th>中文</th><th>英语</th><th>法语</th></tr>
<tr><td>等我做完了再给你打电话</td><td>I'll call you when I <b>have finished</b>.</td><td>Je t'appellerai quand j'<b>aurai fini</b>.</td></tr></table>
<p><b>中国学生常犯的错</b></p>
<ul><li>受英语影响在 quand / dès que 后用现在时：*Quand je finis, je t'appellerai ✗。法语里，将来的事在时间从句里也要用将来体系。</li>
<li>aurai（将来时）和 aurais（条件式）读音几乎相同，写时要区分。</li>
<li>助动词选错：*j'aurai arrivé ✗ → je <b>serai arrivé</b>。</li>
<li>si 后面不能用先将来时：*Si tu auras fini ✗ → Si tu <b>as fini</b>（si + 复合过去时）。</li></ul>`,
    ex: [
      ["Dès que j'aurai fini, je t'enverrai le document.", '我一做完就把文件发给你。'],
      ['Quand tu seras rentré, on cherchera un appartement.', '等你回来了，我们再找房子。'],
      ["À vingt heures, j'aurai terminé mon travail.", '到晚上八点，我就已经做完工作了。'],
      ['Une fois que le client aura signé, nous pourrons commencer.', '客户一签字，我们就可以开始了。'],
    ],
  },
  {
    id: 'g-dont', title: '关系代词 dont；ce qui / ce que / ce dont',
    body: `<p><b>dont</b> 代替 <b>de + 名词</b>（人或物都可以）。只要从句里的动词、形容词或名词后面要接 de，就用 dont。</p>
<table><tr><th>结构</th><th>两句话</th><th>合成一句</th></tr>
<tr><td>动词 + de</td><td>J'ai besoin <b>de ce livre</b>.</td><td>C'est le livre <b>dont</b> j'ai besoin.</td></tr>
<tr><td>动词 + de</td><td>Je t'ai parlé <b>de ce film</b>.</td><td>Voici le film <b>dont</b> je t'ai parlé.</td></tr>
<tr><td>形容词 + de</td><td>Je suis fier <b>de mon fils</b>.</td><td>C'est un fils <b>dont</b> je suis fier.</td></tr>
<tr><td>名词的补语（"……的"）</td><td>Je connais <b>le père de cette fille</b>.</td><td>C'est une fille <b>dont</b> je connais le père.</td></tr></table>
<p>常见的带 de 的表达：avoir besoin de, avoir envie de, avoir peur de, parler de, rêver de, se souvenir de, se servir de, s'occuper de, disposer de, être content / fier / sûr de。</p>
<p><b>qui / que / où / dont 怎么选？</b>看先行词在从句里充当什么：</p>
<table><tr><th>关系代词</th><th>在从句里的作用</th><th>例子</th></tr>
<tr><td>qui</td><td>主语</td><td>la femme <b>qui</b> parle</td></tr>
<tr><td>que</td><td>直接宾语</td><td>la femme <b>que</b> je vois</td></tr>
<tr><td>où</td><td>地点、时间</td><td>la ville <b>où</b> j'habite, le jour <b>où</b> je suis arrivé</td></tr>
<tr><td>dont</td><td>de + 名词</td><td>la femme <b>dont</b> je parle</td></tr></table>
<p><b>ce qui / ce que / ce dont</b>：没有具体的先行词、意思是"……的东西 / 事情"时，在前面加 <b>ce</b>：</p>
<table><tr><th>形式</th><th>作用</th><th>例子</th></tr>
<tr><td>ce qui</td><td>主语</td><td><b>Ce qui</b> m'intéresse, c'est l'histoire.</td></tr>
<tr><td>ce que</td><td>直接宾语</td><td>Je ne comprends pas <b>ce que</b> tu dis.</td></tr>
<tr><td>ce dont</td><td>de + 东西</td><td>C'est exactement <b>ce dont</b> j'ai besoin.</td></tr></table>
<p>强调句型：<b>Ce que</b> j'aime, <b>c'est</b> … / <b>Ce qui</b> me plaît, <b>c'est</b> …；"所有……"：<b>tout ce que</b> tu veux, <b>tout ce dont</b> j'ai besoin。</p>
<p><b>中国学生常犯的错</b></p>
<ul><li>不看动词要不要 de，一律用 que：*le livre que j'ai besoin ✗ → le livre <b>dont</b> j'ai besoin。</li>
<li>dont 已经包含"他的 / 它的"，后面不要再加主有形容词：*la fille dont je connais <b>son</b> père ✗ → dont je connais <b>le</b> père。</li>
<li>dont 后面是正常语序"主语 + 动词 + 宾语"：l'auteur dont j'ai lu <b>tous les livres</b>（不是 *dont tous les livres j'ai lu）。</li>
<li>à côté de、près de 这类复合介词后面不能用 dont，要用 duquel（下一课）。</li>
<li>间接问句里用 ce que，不用 qu'est-ce que：Dis-moi <b>ce que</b> tu veux.（*Dis-moi qu'est-ce que tu veux ✗）</li></ul>`,
    ex: [
      ["C'est exactement ce dont j'ai besoin.", '这正是我需要的。'],
      ["Voici le canapé dont je t'ai parlé.", '这就是我跟你说过的那张沙发。'],
      ["Ce qui m'inquiète, c'est le prix.", '我担心的是价格。'],
      ["C'est un écrivain dont j'ai lu tous les livres.", '这位作家的书我全读过。'],
    ],
  },
  {
    id: 'g-lequel', title: '复合关系代词：lequel, auquel, duquel, 介词 + qui',
    body: `<p>介词后面的关系代词：<b>指物</b>用 lequel 系列（和先行词性数一致）；<b>指人</b>一般用 <b>介词 + qui</b>。</p>
<table><tr><th></th><th>基本形式</th><th>à + …</th><th>de + …</th></tr>
<tr><td>阳性单数</td><td>lequel</td><td><b>auquel</b></td><td><b>duquel</b></td></tr>
<tr><td>阴性单数</td><td>laquelle</td><td>à laquelle</td><td>de laquelle</td></tr>
<tr><td>阳性复数</td><td>lesquels</td><td><b>auxquels</b></td><td><b>desquels</b></td></tr>
<tr><td>阴性复数</td><td>lesquelles</td><td><b>auxquelles</b></td><td><b>desquelles</b></td></tr></table>
<p><b>一、介词 + lequel</b>（sur, dans, avec, pour, sans, par, chez, sous, pendant…）</p>
<ul><li>la table <b>sur laquelle</b> j'ai posé mes clés</li>
<li>le local <b>dans lequel</b> on se réunit</li>
<li>la raison <b>pour laquelle</b> je suis venu（"……的原因"，非常常用）</li></ul>
<p><b>二、à + lequel → auquel</b>：用于 penser à, participer à, réfléchir à, tenir à, s'intéresser à, répondre à 等。<br>un projet <b>auquel</b> je participe；une question <b>à laquelle</b> je n'ai pas répondu（à la 不缩合）。</p>
<p><b>三、de + lequel → duquel</b>：用在<b>复合介词</b>后面（à côté de, près de, en face de, au milieu de, au bord de, au cours de, autour de）。<br>le parc <b>près duquel</b> j'habite；la gare <b>à côté de laquelle</b> il y a une boulangerie。<br>只有单独一个 de 时才用 dont：le parc <b>dont</b> je parle。</p>
<p><b>四、指人：介词 + qui</b>：le collègue <b>avec qui</b> je travaille, les amis <b>chez qui</b> j'ai dormi, la personne <b>à qui</b> j'ai écrit。lequel 指人也不算错，但比较书面；只有 <b>parmi</b>（在……之中）和 <b>entre</b> 后面指人必须用 lesquels / lesquelles。</p>
<p><b>五、表示地点、时间时可以用 où</b>：la ville <b>dans laquelle</b> j'habite = la ville <b>où</b> j'habite；"那一天"说 le jour <b>où</b>。</p>
<p><b>别和疑问代词混淆</b>：Lequel tu préfères ?（你喜欢哪一个？）是疑问句；本课的 lequel 是把两个句子连起来的关系代词。</p>
<p><b>中国学生常犯的错</b></p>
<ul><li>中文"我为之工作的协会"语序完全不同。方法：先确定动词搭配哪个介词（travailler <b>pour</b> une association），再把"介词 + lequel"整体放到从句开头：l'association <b>pour laquelle</b> je travaille。</li>
<li>忘了缩合：*à lequel ✗ → auquel，*de lequel ✗ → duquel。</li>
<li>介词后面用 que：*la raison pour que je suis venu ✗（pour que 是"为了"，接虚拟式）。</li>
<li>像英语那样把介词放到句尾（the company I work for）：法语的介词不能"悬空"。</li></ul>`,
    ex: [
      ['Voilà la raison pour laquelle je suis venu.', '这就是我来的原因。'],
      ["C'est un projet auquel je participe depuis un an.", '这是我参加了一年的项目。'],
      ["Le parc près duquel j'habite est très calme.", '我家附近的那个公园很安静。'],
      ['Les amis avec qui je suis parti en vacances sont belges.', '和我一起去度假的朋友是比利时人。'],
    ],
  },
  {
    id: 'g-double', title: '双宾语代词的顺序',
    body: `<p>一个句子里同时有两个宾语代词时，顺序是固定的：</p>
<table><tr><th>①</th><th>②</th><th>③</th><th>④</th><th>⑤</th></tr>
<tr><td>me<br>te<br>se<br>nous<br>vous</td><td>le<br>la<br>les</td><td>lui<br>leur</td><td>y</td><td>en</td></tr></table>
<p>两个代词一起放在变位动词前面；复合时态放在助动词前；"动词 + 原形"时放在原形前。</p>
<table><tr><th>原句</th><th>换成代词</th></tr>
<tr><td>Il me donne <b>le livre</b>.</td><td>Il <b>me le</b> donne.</td></tr>
<tr><td>Je donne <b>la clé à Paul</b>.</td><td>Je <b>la lui</b> donne.</td></tr>
<tr><td>Elle montre <b>les photos à ses parents</b>.</td><td>Elle <b>les leur</b> montre.</td></tr>
<tr><td>Je parle <b>de ce projet à Marc</b>.</td><td>Je <b>lui en</b> parle.</td></tr>
<tr><td>Il y a <b>du pain</b> ?</td><td>Il <b>y en</b> a.</td></tr>
<tr><td>Tu m'as prêté <b>ce livre</b>.</td><td>Tu <b>me l'</b>as prêté.</td></tr>
<tr><td>Je vais dire <b>la vérité à Léa</b>.</td><td>Je vais <b>la lui</b> dire.</td></tr></table>
<p><b>记忆方法：</b>me / te / nous / vous 永远在 le / la / les 前面（me le, te la, nous les）；le / la / les 永远在 lui / leur 前面（le lui, la leur）。</p>
<p><b>过去分词配合：</b>直接宾语 le / la / les 在 avoir 前面时，过去分词和它配合：La voiture ? Je <b>la</b> lui ai prêté<b>e</b>. Les photos ? Il me <b>les</b> a montré<b>es</b>.（en 不引起配合。）</p>
<p><b>命令式</b></p>
<table><tr><th>肯定命令式：动词-直接宾语-间接宾语</th><th>否定命令式：顺序同陈述句</th></tr>
<tr><td>Donne-<b>le-moi</b> !<br>Envoie-<b>la-leur</b> !<br>Donne-<b>m'en</b> !</td><td>Ne <b>me le</b> donne pas !<br>Ne <b>la leur</b> envoie pas !<br>Ne <b>m'en</b> donne pas !</td></tr></table>
<p>肯定命令式里 me / te 变成 moi / toi，但在 en 前面又变回 m' / t'：donne-<b>m'en</b>（不说 *donne-moi-en），va-<b>t'en</b>（走开）。</p>
<p><b>不能组合的情况：</b>me / te / nous / vous 不能和 lui / leur 同时出现。需要时把间接宾语改成"à + 重读代词"：Je <b>te</b> présenterai <b>à lui</b>.（我会把你介绍给他。）</p>
<p><b>中国学生常犯的错</b></p>
<ul><li>按中文"把它给他"的思路说成 *je lui le donne ✗ → je <b>le lui</b> donne。</li>
<li>否定命令式也用肯定的语序：*Ne donne-le-moi pas ✗ → Ne <b>me le</b> donne pas。</li>
<li>忘记过去分词配合：*Je la lui ai rendu ✗ → rendu<b>e</b>。</li>
<li>口语里法国人有时会省掉一个代词（Je lui donne），听得懂即可，写作时要写完整。</li></ul>`,
    ex: [
      ["Mes parents me l'ont offert pour mon anniversaire.", '这是我父母送我的生日礼物。'],
      ['Ta tente ? Je la lui ai rendue mardi.', '你的帐篷？我周二还给他了。'],
      ['Rends-le-moi avant dimanche !', '周日之前还给我！'],
      ["Ne leur en parle pas, c'est une surprise.", '别跟他们说这件事，这是个惊喜。'],
    ],
  },
  {
    id: 'g-gerondif', title: '现在分词与副动词 en + -ant',
    body: `<p><b>一、现在分词（le participe présent）的构成：</b>现在时 <b>nous</b> 的形式去掉 -ons，加 <b>-ant</b>。</p>
<table><tr><th>原形</th><th>nous 形式</th><th>现在分词</th></tr>
<tr><td>parler</td><td>nous parlons</td><td>parlant</td></tr>
<tr><td>finir</td><td>nous finissons</td><td>finissant</td></tr>
<tr><td>faire</td><td>nous faisons</td><td>faisant</td></tr>
<tr><td>prendre</td><td>nous prenons</td><td>prenant</td></tr>
<tr><td>lire</td><td>nous lisons</td><td>lisant</td></tr>
<tr><td>manger</td><td>nous mangeons</td><td>mangeant（保留 e）</td></tr>
<tr><td>commencer</td><td>nous commençons</td><td>commençant（保留 ç）</td></tr></table>
<p>只有三个不规则：être → <b>étant</b>，avoir → <b>ayant</b>，savoir → <b>sachant</b>。</p>
<p><b>二、副动词（le gérondif）= en + 现在分词</b>，永远不变形。它的主语必须和主句主语<b>相同</b>。</p>
<table><tr><th>意思</th><th>例句</th><th>中文</th></tr>
<tr><td>同时</td><td>Je chante <b>en prenant</b> ma douche.</td><td>我边洗澡边唱歌。</td></tr>
<tr><td>方式、手段</td><td>Il a appris le français <b>en regardant</b> des séries.</td><td>他通过看剧学会了法语。</td></tr>
<tr><td>条件</td><td><b>En partant</b> maintenant, tu arriveras à l'heure.</td><td>现在出发的话，你能准时到。（= si tu pars）</td></tr>
<tr><td>某动作发生的时候</td><td>Je l'ai rencontré <b>en sortant</b> du métro.</td><td>我出地铁的时候遇见了他。</td></tr></table>
<p><b>tout en + -ant</b>：强调两件事同时进行（往往不容易），或表示对立"虽然……却……"：Il travaille <b>tout en</b> étudiant. / <b>Tout en</b> étant riche, il vit très simplement.</p>
<p>代词放在 en 和分词之间：en <b>le</b> lisant, en <b>se</b> levant, en <b>y</b> pensant；否定：en <b>ne</b> disant <b>rien</b>。</p>
<p><b>三、不带 en 的现在分词</b>（多见于书面语）</p>
<ul><li>代替 qui 从句：Les étudiants <b>ayant</b> un visa peuvent travailler.（= qui ont un visa）</li>
<li>表示原因，放在句首：<b>Sachant</b> qu'il allait pleuvoir, j'ai pris un parapluie.</li></ul>
<p><b>四、别和动词形容词混淆</b>：有些 -ant 词也是形容词，要性数配合，拼写有时还不同：un travail <b>fatigant</b>（形容词，累人的）/ en <b>fatiguant</b> les élèves（分词）；une méthode <b>intéressante</b>。</p>
<p><b>中国学生常犯的错</b></p>
<ul><li>主语不一致：*En arrivant au bureau, mon chef m'a appelé——语法上意思是"老板到办公室时"。如果是"我到办公室时"，要说 <b>Quand je suis arrivé</b> au bureau, mon chef m'a appelé。</li>
<li>把"通过……"直译成 *par + -ant ✗ → <b>en</b> + -ant。</li>
<li>给副动词配合：*en parlante ✗，副动词永远不变。</li>
<li>漏掉 -ger / -cer 动词的 e / ç：*mangant ✗ → mangeant。</li></ul>`,
    ex: [
      ["J'écoute des podcasts en allant au travail.", '我上班路上听播客。'],
      ["On progresse vite en parlant tous les jours.", '每天都说，进步就快。'],
      ["En partant maintenant, tu arriveras à l'heure.", '现在出发的话，你能准时到。'],
      ["Il répète les dialogues tout en faisant la vaisselle.", '他一边洗碗一边重复对话。'],
    ],
  },
  {
    id: 'g-passif', title: '被动语态：être + 过去分词',
    body: `<p><b>被动语态</b> = <b>être</b>（变成需要的时态）+ <b>过去分词</b>（和主语性数配合）。</p>
<p>主动：<b>Les ouvriers</b> construisent <b>le pont</b>. → 被动：<b>Le pont</b> est construit <b>par les ouvriers</b>.</p>
<p><b>时态全由 être 表现：</b></p>
<table><tr><th>时态</th><th>被动形式</th></tr>
<tr><td>现在时</td><td>La maison <b>est</b> construite.</td></tr>
<tr><td>复合过去时</td><td>La maison <b>a été</b> construite.</td></tr>
<tr><td>未完成过去时</td><td>La maison <b>était</b> construite.</td></tr>
<tr><td>愈过去时</td><td>La maison <b>avait été</b> construite.</td></tr>
<tr><td>简单将来时</td><td>La maison <b>sera</b> construite.</td></tr>
<tr><td>近将来时</td><td>La maison <b>va être</b> construite.</td></tr>
<tr><td>条件式</td><td>La maison <b>serait</b> construite.</td></tr>
<tr><td>虚拟式</td><td>Il faut que la maison <b>soit</b> construite.</td></tr>
<tr><td>正在进行</td><td>La maison <b>est en train d'être</b> construite.</td></tr></table>
<p><b>施动者：par 还是 de？</b></p>
<ul><li>具体的动作一般用 <b>par</b>：Le voleur a été arrêté <b>par</b> la police.</li>
<li>情感、认知类动词（aimé, détesté, respecté, connu, apprécié）和描写状态的分词（couvert, entouré, rempli, accompagné）常用 <b>de</b>：Il est respecté <b>de</b> tous. La table est couverte <b>de</b> livres.（de + des → de：entouré <b>d'</b>arbres）</li>
<li>施动者不重要或不清楚时直接省略：Mon vélo a été volé.</li></ul>
<p><b>只有直接及物动词才能变被动</b>。téléphoner à, répondre à, obéir à 等不行：*Paul a été téléphoné ✗ → On a téléphoné à Paul。</p>
<p><b>法语常用的被动替代说法</b></p>
<ul><li><b>on</b> + 主动句（口语最常用）：On m'a volé mon portefeuille.</li>
<li>代词式被动：Ce vin <b>se boit</b> frais.（这酒要冰着喝）/ Ça <b>se dit</b> comment en français ?</li></ul>
<p><b>中国学生常犯的错</b></p>
<ul><li>中文"被"字句用得少，很多中文主动句在法语里用被动反而更自然，尤其是介绍历史和新闻："这座桥建于 1607 年" → Le pont <b>a été construit</b> en 1607。反过来，口语里"我的包被偷了"更常说 On m'a volé mon sac。</li>
<li>忘记配合：*La tour a été construit ✗ → construit<b>e</b>。été 本身永远不变：*ont étés ✗。</li>
<li>混淆动作和状态：Le pont <b>a été construit</b> en 1607（动作，发生在 1607 年）/ Le pont <b>est construit</b> en pierre（状态：是石头造的）。</li>
<li>描写状态时用 avec：*couvert avec de la neige ✗ → couvert <b>de</b> neige。</li></ul>`,
    ex: [
      ['Ce pont a été construit au XVIe siècle.', '这座桥建于 16 世纪。'],
      ['La cathédrale a été gravement endommagée par un incendie.', '大教堂在一场火灾中严重受损。'],
      ["Le nouveau musée sera inauguré l'année prochaine.", '新博物馆将于明年落成开放。'],
      ['Ce chanteur est connu de tout le monde.', '这位歌手人人都知道。'],
    ],
  },
];

export const CAT = {
  'g-subj': '时态与语气', 'g-subj2': '时态与语气', 'g-pqp': '时态与语气', 'g-fut-ant': '时态与语气',
  'g-si-imp': '从句与连接',
  'g-dont': '代词', 'g-lequel': '代词', 'g-double': '代词',
  'g-gerondif': '动词变位',
  'g-passif': '句型',
};

export const units = [
  {
    id: 'b1-01', emoji: '🧹', title: '必须做的事', sub: '虚拟式现在时 · il faut que', can: '能用 il faut que 说明规矩、分配家务、提出要求', scene: null, grammar: ['g-subj'],
    words: [],
    newWords: [
      ['la colocation', 'la kɔ.lɔ.ka.sjɔ̃', '合租', 'Je vis en colocation avec deux étudiants.', '我和两个学生合租。', 'course'],
      ['le · la colocataire', 'lə · la kɔ.lɔ.ka.tɛʁ', '合租室友', 'Mes colocataires sont très sympas.', '我的室友们人都很好。', 'course'],
      ['faire la vaisselle', 'fɛʁ la vɛ.sɛl', '洗碗', 'Il faut que tu fasses la vaisselle ce soir.', '今晚你得洗碗。', 'course'],
      ['faire le ménage', 'fɛʁ lə me.naʒ', '打扫卫生', 'On fait le ménage le samedi matin.', '我们每周六上午打扫卫生。', 'course'],
      ['sortir les poubelles', 'sɔʁ.tiʁ le pu.bɛl', '倒垃圾', 'Il faut que Marc sorte les poubelles mardi soir.', '周二晚上马克得去倒垃圾。', 'course'],
      ['le loyer', 'lə lwa.je', '房租', 'Le loyer est de six cents euros par mois.', '房租是每月六百欧元。', 'course'],
      ['ranger', 'ʁɑ̃.ʒe', '整理；收拾', 'Il faut que vous rangiez vos affaires.', '你们得把自己的东西收拾好。', 'course'],
      ['propre', 'pʁɔpʁ', '干净的', 'La cuisine doit toujours rester propre.', '厨房要一直保持干净。', 'course'],
      ['le bruit', 'lə bʁɥi', '噪音；声响', "Il ne faut pas qu'on fasse de bruit après 22 heures.", '晚上十点以后我们不能弄出声响。', 'course'],
      ['partager', 'paʁ.ta.ʒe', '分享；分摊', 'On partage le loyer et les factures.', '我们分摊房租和账单。', 'course'],
    ],
    dialogue: [
      ['Inès', "Bienvenue ! Avant de te laisser t'installer, je vais t'expliquer les règles de la maison, d'accord ?", '欢迎！在你安顿下来之前，我先给你讲讲家里的规矩，好吗？'],
      ['我', 'Bien sûr. Il y a beaucoup de règles ?', '当然。规矩很多吗？'],
      ['Inès', "Non, pas trop. D'abord, il faut que chacun fasse sa vaisselle juste après le repas.", '不多。首先，每个人吃完饭都得马上把自己的碗洗了。'],
      ['我', "D'accord. Et pour le ménage, comment on s'organise ?", '好的。那打扫卫生怎么安排？'],
      ['Inès', 'On le fait ensemble le samedi matin. Il faut que tout le monde soit là, sauf si on travaille.', '我们周六上午一起打扫。所有人都得在，除非要上班。'],
      ['我', 'Pas de problème. Et les poubelles ?', '没问题。那垃圾呢？'],
      ['Inès', "Cette semaine, il faut que tu les sortes le mardi et le vendredi soir. Ah, et il ne faut pas qu'on fasse de bruit après 22 heures : la voisine du dessous est très sensible !", '这周你得在周二和周五晚上倒垃圾。啊，还有，晚上十点以后我们不能弄出声响：楼下的邻居很敏感！'],
      ['我', 'Compris. Et le loyer, il faut que je le paie à qui ?', '明白了。那房租我该交给谁？'],
      ['Inès', 'À la propriétaire, avant le 5 du mois. Il faut aussi que nous partagions les factures d\'électricité et d\'internet.', '交给房东，每月 5 号之前。电费和网费我们也要分摊。'],
      ['我', "Ça me paraît juste. Je vais essayer d'être un bon colocataire !", '我觉得很合理。我会努力做个好室友的！'],
    ],
    sentences: [
      ['Il faut que chacun fasse sa vaisselle après le repas.', '每个人吃完饭都得洗自己的碗。'],
      ['Il faut que tout le monde soit là samedi matin.', '周六上午所有人都得在。'],
      ["Il ne faut pas qu'on fasse de bruit après 22 heures.", '晚上十点以后我们不能弄出声响。'],
      ['Il faut que nous partagions les factures.', '我们得分摊账单。'],
      ['Il faut que tu sortes les poubelles mardi soir.', '周二晚上你得去倒垃圾。'],
    ],
    cloze: [
      ['Il faut que tu ___ la vaisselle ce soir.', ['fasses', 'fais', 'feras'], 0, '今晚你得洗碗。', 'il faut que 后面必须用虚拟式：faire → que tu fasses。fais 是直陈式现在时，feras 是将来时'],
      ["Il faut que nous ___ à l'heure.", ['soyons', 'sommes', 'soyions'], 0, '我们得准时。', 'être 的虚拟式：que nous soyons，没有 i。soyions 是常见拼写错误'],
      ['Il faut que vous ___ vos affaires avant samedi.', ['rangiez', 'rangez', 'rangeiez'], 0, '周六之前你们得把东西收拾好。', 'nous / vous 的虚拟式 = 未完成过去时的形式：vous rangiez（i 前面不需要加 e）'],
      ["Il faut que j'___ à la banque demain.", ['aille', 'vais', 'alle'], 0, '我明天得去趟银行。', 'aller 的虚拟式不规则：que j\'aille。虚拟式现在时也可以指将来'],
      ['Le samedi, il faut ___ le ménage.', ['faire', 'que faire', 'fasse'], 0, '每周六都得打扫卫生。', '没有具体主语、泛指"大家都得……"时，il faut 直接接原形；说到具体的人才用 il faut que + 虚拟式'],
    ],
    discover: [
      { q: 'finir → ils finissent → que je finisse；partir → ils partent → que je parte。虚拟式的词根从哪里来？', opts: ['现在时 ils 的形式去掉 -ent', '动词原形去掉 -er / -ir', '简单将来时的词根'], a: 0, why: '大多数动词：ils 的现在时去掉 -ent，再加 -e, -es, -e, -ions, -iez, -ent。所以 -er 动词的 que je parle 和现在时长得一样。' },
      { q: '"你可千万别忘了！"法语怎么说？', opts: ["Il ne faut pas que tu oublies !", "Il faut que tu n'oublies !", "Il ne faut pas que tu oublier !"], a: 0, why: 'il ne faut pas que + 虚拟式 = 不许、千万别。注意它不是"不必"的意思。' },
    ],
    write: { prompt: '你要和新室友合租。用 il faut que / il ne faut pas que 写一段"合租规矩"，说明家务怎么分工、有哪些规定（60–120 词）。', model: "Bienvenue dans notre appartement ! Voici quelques règles simples. D'abord, il faut que chacun fasse sa vaisselle juste après le repas. Le samedi matin, on fait le ménage ensemble : il faut que tout le monde soit là. Cette semaine, il faut que Paul sorte les poubelles, et la semaine prochaine, ce sera ton tour. Il ne faut pas qu'on fasse de bruit après 22 heures, parce que les voisins dorment. Enfin, il faut que nous payions le loyer avant le 5 du mois. Si tu as une question, n'hésite pas à me demander !" },
  },
  {
    id: 'b1-02', emoji: '💌', title: '我希望你来', sub: '虚拟式：愿望、情感、怀疑', can: '能表达希望别人做某事、对某事的高兴或遗憾，以及自己的怀疑', scene: null, grammar: ['g-subj2'],
    words: [],
    newWords: [
      ['souhaiter', 'swe.te', '希望；祝愿', 'Je souhaite que tout le monde soit là.', '我希望大家都到场。', 'course'],
      ['douter', 'du.te', '怀疑', "Je doute qu'il puisse venir.", '我怀疑他来不了。', 'course'],
      ['regretter', 'ʁə.ɡʁɛ.te', '遗憾；后悔', 'Je regrette que tu ne sois pas là.', '你不在，我很遗憾。', 'course'],
      ['avoir peur que', 'a.vwaʁ pœʁ kə', '担心……；害怕……', "J'ai peur qu'il pleuve samedi.", '我担心周六会下雨。', 'course'],
      ['ravi · ravie', 'ʁa.vi', '非常高兴的', 'Je suis ravi que tu viennes !', '你能来我太高兴了！', 'course'],
      ['déçu · déçue', 'de.sy', '失望的', 'Elle est déçue que tu partes si tôt.', '你这么早就走，她很失望。', 'course'],
      ["la soirée d'adieu", 'la swa.ʁe da.djø', '告别晚会', "J'organise une soirée d'adieu samedi.", '我周六办一个告别晚会。', 'course'],
      ['manquer à', 'mɑ̃.ke a', '使……想念（A manque à B = B 想念 A）', 'Tu vas me manquer !', '我会想你的！', 'course'],
      ['prévenir', 'pʁev.niʁ', '通知；事先告诉', 'Préviens-moi si tu ne peux pas venir.', '如果你来不了，提前告诉我。', 'course'],
    ],
    dialogue: [
      ['我', "Allô, Hugo ? C'est Lin. Tu sais que je rentre en Chine le mois prochain ?", '喂，雨果？我是林。你知道我下个月回中国吗？'],
      ['Hugo', "Oui, Camille m'a prévenu… Je suis vraiment triste que tu partes !", '知道，卡米耶跟我说了……你要走了，我真的很难过！'],
      ['我', "Moi aussi. Alors j'organise une soirée d'adieu samedi, et je voudrais que tu viennes.", '我也是。所以我周六办个告别晚会，我想请你来。'],
      ['Hugo', 'Samedi ? Je ne suis pas sûr de pouvoir… Je dois aider mes parents à déménager.', '周六？我不确定能不能去……我得帮我爸妈搬家。'],
      ['我', 'Oh, je regrette que ce soit le même jour ! Tu ne peux pas passer juste une heure ?', '哎呀，真遗憾是同一天！你不能就来一个小时吗？'],
      ['Hugo', 'Je vais essayer. Mais je doute que nous finissions avant 21 heures.', '我尽量。不过我怀疑我们晚上九点前搬不完。'],
      ['我', "Ce n'est pas grave, la soirée finira tard. J'aimerais vraiment que tout le monde soit là.", '没关系，晚会会很晚才结束。我真希望大家都在。'],
      ['Hugo', "Alors je viendrai, promis ! J'espère que Camille pourra venir aussi.", '那我一定来，保证！希望卡米耶也能来。'],
      ['我', "Elle a dit oui. Par contre, j'ai peur qu'il pleuve : on voulait faire un pique-nique au parc.", '她答应了。不过我担心会下雨：我们本来想在公园野餐。'],
      ['Hugo', 'Prévois un plan B, alors ! Et tu sais, tu vas beaucoup me manquer.', '那就准备个备用方案吧！还有，你知道吗，我会很想你的。'],
    ],
    sentences: [
      ['Je suis vraiment triste que tu partes.', '你要走了，我真的很难过。'],
      ['Je voudrais que tu viennes samedi.', '我希望你周六来。'],
      ['Je doute que nous finissions avant 21 heures.', '我怀疑我们晚上九点前完不成。'],
      ["J'espère que Camille pourra venir aussi.", '希望卡米耶也能来。'],
      ["J'ai peur qu'il pleuve samedi.", '我担心周六会下雨。'],
    ],
    cloze: [
      ['Je veux que tu ___ à ma soirée.', ['viennes', 'viens', 'venir'], 0, '我想让你来我的晚会。', 'vouloir que + 虚拟式；venir 有两个词根：que tu viennes / que nous venions'],
      ['Je suis content ___ te voir.', ['de', 'que', 'à'], 0, '见到你我很高兴。', '主语相同（我高兴、我见到你）时不用 que + 虚拟式，用 de + 原形'],
      ["J'espère qu'il ___ beau demain.", ['fera', 'fasse', 'faire'], 0, '希望明天天气好。', 'espérer 是例外：espérer que 后面接直陈式（常用将来时），不接虚拟式'],
      ["Je doute qu'elle ___ la réponse.", ['sache', 'sait', 'saches'], 0, '我怀疑她知道答案。', 'douter que + 虚拟式；savoir 的虚拟式是 que elle sache（第三人称没有 s）'],
      ['Je voudrais ___ plus tôt ce soir.', ['partir', 'que je parte', 'que je pars'], 0, '我今晚想早点走。', '同一个主语直接用原形：je voudrais partir。*je voudrais que je parte 是常见错误'],
    ],
    discover: [
      { q: "Je suis heureux que tu sois là. / Je suis heureux d'être là. 这两句的区别是？", opts: ['第一句主语不同（我 / 你），第二句主语相同（都是我）', '第一句更正式', '没有区别，可以互换'], a: 0, why: '"我高兴你在" → que + 虚拟式；"我高兴我在" → de + 原形。法语不允许 *je suis heureux que je sois là。' },
      { q: '下面哪个动词后面接直陈式，而不是虚拟式？', opts: ['espérer', 'souhaiter', 'vouloir'], a: 0, why: "espérer que + 直陈式：J'espère que tu viendras. 而 souhaiter / vouloir que + 虚拟式：Je souhaite que tu viennes。" },
    ],
    write: { prompt: '给一位朋友写一封短邮件，邀请 TA 参加你的告别晚会：说明你希望 TA 来，表达你的情感（高兴、难过、遗憾、担心……），至少用 3 个虚拟式，再用一次 espérer（60–120 词）。', model: "Chère Camille,\nComme tu le sais, je rentre en Chine le 15 juin. Avant de partir, j'organise une petite soirée chez moi samedi soir, et je voudrais vraiment que tu viennes. Je suis triste de quitter Lyon, mais je suis heureux que nous puissions fêter ça ensemble. J'ai invité Hugo aussi, mais je doute qu'il soit libre, parce qu'il aide ses parents à déménager. J'ai un peu peur qu'il fasse mauvais, alors on restera peut-être à l'intérieur. J'espère que tu pourras venir ! Réponds-moi avant jeudi, s'il te plaît.\nJe t'embrasse,\nLin" },
  },
  {
    id: 'b1-03', emoji: '🎰', title: '如果我中了彩票', sub: 'si + 未完成过去时 → 条件式', can: '能谈论假设的情况和梦想，给出"如果我是你"式的建议', scene: null, grammar: ['g-si-imp'],
    words: [],
    newWords: [
      ['gagner au loto', 'ɡa.ɲe o lo.to', '中彩票', "Si je gagnais au loto, j'arrêterais de travailler.", '如果我中了彩票，我就不工作了。', 'course'],
      ['démissionner', 'de.mi.sjɔ.ne', '辞职', 'Si mon chef continuait comme ça, je démissionnerais.', '要是老板一直这样，我就辞职。', 'course'],
      ['faire le tour du monde', 'fɛʁ lə tuʁ dy mɔ̃d', '环游世界', "J'aimerais faire le tour du monde.", '我想环游世界。', 'course'],
      ['la somme', 'la sɔm', '金额；一笔钱', "Qu'est-ce que tu ferais avec une somme pareille ?", '有这么一大笔钱你会做什么？', 'course'],
      ['le rêve', 'lə ʁɛv', '梦想；梦', "Mon rêve, ce serait d'ouvrir un café.", '我的梦想是开一家咖啡馆。', 'course'],
      ['au bord de la mer', 'o bɔʁ də la mɛʁ', '在海边', "J'achèterais une maison au bord de la mer.", '我会在海边买一栋房子。', 'course'],
      ['économiser', 'e.kɔ.nɔ.mi.ze', '存钱；节省', "Si j'économisais un peu chaque mois, je pourrais partir en vacances.", '如果我每个月存一点钱，就能去度假了。', 'course'],
      ['à ta place', 'a ta plas', '如果我是你；换作我', "À ta place, j'accepterais ce travail.", '换作是我，我会接受这份工作。', 'course'],
      ['hésiter', 'e.zi.te', '犹豫', "Si j'étais toi, je n'hésiterais pas une seconde.", '如果我是你，我一秒钟都不会犹豫。', 'course'],
      ["s'ennuyer", 'sɑ̃.nɥi.je', '感到无聊', "Si je ne travaillais pas, je m'ennuierais.", '如果我不工作，我会觉得无聊。', 'course'],
    ],
    dialogue: [
      ['Karim', "Vous avez vu ? Ce vendredi, il y a 130 millions d'euros à gagner au loto !", '你们看到了吗？这周五的乐透奖金有 1.3 亿欧元！'],
      ['Sophie', 'Waouh ! Si je gagnais une somme pareille, je démissionnerais le lendemain.', '哇！要是我中了这么一大笔钱，第二天就辞职。'],
      ['Karim', "Moi aussi ! Et j'achèterais une grande maison au bord de la mer, en Bretagne.", '我也是！我还会在布列塔尼的海边买一栋大房子。'],
      ['Sophie', "Et toi, Lin ? Qu'est-ce que tu ferais si tu avais tout cet argent ?", '你呢，林？如果你有这么多钱，你会做什么？'],
      ['我', "D'abord, je ferais le tour du monde avec ma famille. Ensuite, j'offrirais un nouvel appartement à mes parents.", '首先，我会和家人一起环游世界。然后，我会送我爸妈一套新房子。'],
      ['Karim', 'Tu ne garderais rien pour toi ?', '你什么都不留给自己吗？'],
      ['我', "Si, bien sûr ! Mon rêve, ce serait d'ouvrir une petite librairie-café. Mais je ne démissionnerais pas tout de suite.", '当然留！我的梦想是开一家小小的书店咖啡馆。不过我不会马上辞职。'],
      ['Sophie', "Ah bon ? À ta place, je n'hésiterais pas une seconde !", '是吗？换作是我，我一秒钟都不会犹豫！'],
      ['我', "Si j'arrêtais de travailler, je crois que je m'ennuierais vite. Et puis, on ne gagne jamais au loto !", '要是我不工作了，我想我很快就会无聊的。再说，彩票从来都中不了！'],
      ['Karim', "C'est vrai… Et si on jouait quand même tous les trois ensemble ?", '说得也是……要不我们三个还是一起买一注吧？'],
    ],
    sentences: [
      ['Si je gagnais au loto, je démissionnerais.', '如果我中了彩票，我就辞职。'],
      ["Qu'est-ce que tu ferais si tu avais tout cet argent ?", '如果你有这么多钱，你会做什么？'],
      ["Mon rêve, ce serait d'ouvrir une librairie.", '我的梦想是开一家书店。'],
      ["À ta place, je n'hésiterais pas une seconde.", '换作是我，我一秒钟都不会犹豫。'],
      ['Et si on jouait tous les trois ensemble ?', '要不我们三个一起买一注吧？'],
    ],
    cloze: [
      ["Si j'___ plus de temps, j'apprendrais le piano.", ['avais', 'aurais', 'ai'], 0, '如果我有更多时间，我就学钢琴。', "si 从句里绝对不用条件式：si j'avais，不是 *si j'aurais"],
      ['Si tu travaillais moins, tu ___ moins fatigué.', ['serais', 'étais', 'seras'], 0, '如果你少工作一点，你就不会这么累。', '主句用条件式现在时：être → tu serais。seras 是将来时，用于 si + 现在时的真实条件'],
      ['___ il faisait beau, on irait à la plage.', ["S'", 'Si', 'Se'], 0, '如果天气好，我们就去海滩。', "si 只在 il / ils 前面缩写成 s'；si elle、si on 不缩写"],
      ["Si j'étais toi, j'___ ce poste.", ['accepterais', 'accepterai', 'acceptais'], 0, '如果我是你，我会接受这个职位。', '主句用条件式 -erais；-erai 是将来时，读音几乎一样，拼写要注意'],
      ["S'il pleut demain, nous ___ à la maison.", ['resterons', 'resterions', 'restions'], 0, '如果明天下雨，我们就待在家里。', '对比：si + 现在时（真实可能的条件）→ 主句用将来时；si + 未完成过去时才配条件式'],
    ],
    discover: [
      { q: "\"Si j'avais de l'argent, j'achèterais une voiture.\" 说话人现在有钱吗？", opts: ['没有，这是和现在事实相反的假设', '有，他马上要去买车', '不知道，这句是在讲过去'], a: 0, why: '虽然 avais 是未完成过去时，但 si + 未完成过去时说的是"现在 / 将来"的假设：现实是他没钱。' },
      { q: "\"Et si on allait au cinéma ?\" 是什么意思？", opts: ['要不我们去看电影吧？（提议）', '如果我们去了电影院……（话没说完）', '我们以前常去电影院'], a: 0, why: 'Et si + on / nous + 未完成过去时，单独成句，是很常用的口语提议方式。' },
    ],
    write: { prompt: '如果你中了一千万欧元，你的生活会有什么变化？写一段话（60–120 词），用 si + 未完成过去时和条件式，至少写 4 件你会做或不会做的事。', model: "Si je gagnais dix millions d'euros, ma vie changerait beaucoup, mais pas complètement. D'abord, j'achèterais un grand appartement à Shanghai pour mes parents, parce qu'ils ont beaucoup travaillé pour moi. Ensuite, je ferais le tour du monde pendant un an avec ma femme. Nous visiterions l'Amérique du Sud et l'Afrique, que nous ne connaissons pas encore. Je donnerais aussi une partie de l'argent à l'école de mon village. En revanche, je ne démissionnerais pas tout de suite : si je restais à la maison tous les jours, je m'ennuierais. Mon rêve, ce serait d'ouvrir une petite librairie !" },
  },
  {
    id: 'b1-04', emoji: '🚉', title: '那时他已经走了', sub: '愈过去时 plus-que-parfait', can: '能在讲过去的故事时，交代哪件事发生得更早', scene: null, grammar: ['g-pqp'],
    words: [],
    newWords: [
      ['le réveil', 'lə ʁe.vɛj', '闹钟', "Mon réveil n'avait pas sonné.", '我的闹钟没响。', 'course'],
      ['sonner', 'sɔ.ne', '（铃、电话）响', 'Le téléphone a sonné pendant la réunion.', '开会的时候电话响了。', 'course'],
      ['rater', 'ʁa.te', '错过（车、机会）；没做成', "J'ai raté mon train de huit heures.", '我错过了八点的火车。', 'course'],
      ["s'apercevoir que", 'sa.pɛʁ.sə.vwaʁ kə', '发觉；意识到', "Je me suis aperçu que j'avais oublié mes clés.", '我发现我忘带钥匙了。', 'course'],
      ['le portefeuille', 'lə pɔʁ.tə.fœj', '钱包', "J'avais laissé mon portefeuille sur la table.", '我把钱包落在桌上了。', 'course'],
      ['la veille', 'la vɛj', '前一天', "La veille, je m'étais couché très tard.", '前一天晚上我睡得很晚。', 'course'],
      ['la réunion', 'la ʁe.y.njɔ̃', '会议', 'Quand je suis arrivé, la réunion avait déjà commencé.', '我到的时候，会议已经开始了。', 'course'],
      ['à peine', 'a pɛn', '几乎不；勉强；刚刚', "J'avais à peine dormi quatre heures.", '我只睡了不到四个小时。', 'course'],
      ['trempé · trempée', 'tʁɑ̃.pe', '湿透的', 'Je suis arrivé au bureau complètement trempé.', '我到办公室时浑身湿透了。', 'course'],
      ['le parapluie', 'lə pa.ʁa.plɥi', '雨伞', "J'avais oublié mon parapluie à la maison.", '我把伞忘在家里了。', 'course'],
    ],
    dialogue: [
      ['Léa', "Tu as l'air fatigué ! Qu'est-ce qui s'est passé hier ?", '你看起来很累！昨天怎么了？'],
      ['我', "Quelle journée ! La veille, je m'étais couché à deux heures du matin pour finir un rapport.", '别提了！前一天晚上为了写完一份报告，我凌晨两点才睡。'],
      ['Léa', "Oh là là… Et tu n'as pas entendu ton réveil ?", '天哪……那你没听见闹钟？'],
      ['我', "Non, il n'avait pas sonné : j'avais oublié de le mettre ! Quand je me suis réveillé, il était déjà huit heures, et j'avais à peine dormi six heures.", '没有，它根本没响：我忘了定闹钟！我醒来的时候已经八点了，我只睡了不到六个小时。'],
      ['Léa', 'Tu as raté ton train, alors ?', '那你错过火车了？'],
      ['我', "Oui. Quand je suis arrivé à la gare, il était parti depuis cinq minutes. Et là, je me suis aperçu que j'avais laissé mon portefeuille à la maison !", '是啊。我到车站时，火车已经开走五分钟了。这时我又发现钱包落在家里了！'],
      ['Léa', 'Non ! Et comment tu as fait pour acheter un autre billet ?', '不会吧！那你是怎么买到另一张票的？'],
      ['我', "Heureusement, j'avais mon téléphone. Mais il pleuvait et je n'avais pas pris de parapluie, donc je suis arrivé au bureau trempé.", '幸好我带着手机。可是外面在下雨，我又没带伞，所以到办公室时浑身湿透了。'],
      ['Léa', 'Et la réunion de dix heures ?', '那十点的会呢？'],
      ['我', "Elle avait déjà commencé, bien sûr. Le directeur m'a regardé… et il a souri : lui aussi, il était arrivé en retard !", '当然已经开始了。经理看了我一眼……然后笑了：原来他也迟到了！'],
    ],
    sentences: [
      ["La veille, je m'étais couché très tard.", '前一天晚上我睡得很晚。'],
      ["Mon réveil n'avait pas sonné.", '我的闹钟没响。'],
      ['Quand je suis arrivé à la gare, le train était déjà parti.', '我到车站时，火车已经开走了。'],
      ["Je me suis aperçu que j'avais laissé mon portefeuille à la maison.", '我发现我把钱包落在家里了。'],
      ['La réunion avait déjà commencé.', '会议已经开始了。'],
    ],
    cloze: [
      ['Quand nous sommes arrivés, le film ___ déjà commencé.', ['avait', 'a', 'était'], 0, '我们到的时候，电影已经开始了。', '比"我们到"更早 → 愈过去时；commencer 用 avoir：avait commencé'],
      ["Elle n'est pas venue parce qu'elle ___ malade la veille.", ['était tombée', 'avait tombé', 'est tombée'], 0, '她没来，因为前一天病倒了。', 'tomber 是 être 型动词：愈过去时 = était + 过去分词，并和主语配合（tombée）'],
      ["Je n'avais jamais ___ la mer avant mes vingt ans.", ['vu', 'voir', 'vue'], 0, '二十岁之前我从没见过大海。', '复合时态用过去分词 vu；直接宾语 la mer 在动词后面，不配合'],
      ["Il m'a rendu le livre que je lui ___ prêté.", ['avais', 'ai', 'aurais'], 0, '他把我借给他的书还给我了。', "\"借\"比\"还\"更早 → 愈过去时 j'avais prêté"],
      ['Ils ___ déjà partis quand je les ai appelés.', ['étaient', 'avaient', 'sont'], 0, '我给他们打电话时，他们已经走了。', 'partir 用 être：ils étaient partis（过去分词复数配合）'],
    ],
    discover: [
      { q: 'Quand je suis arrivé, il est parti. / Quand je suis arrivé, il était parti. 哪一句表示"我到之前他已经走了"？', opts: ['第二句（愈过去时）', '第一句（复合过去时）', '两句意思一样'], a: 0, why: '第一句：我到了，他随后才走（两人见了面）。第二句：他早在我到之前就走了，我没见到他。' },
    ],
    write: { prompt: '讲一个你"倒霉的一天"或"晚到了一步"的故事（60–120 词）。用复合过去时讲事件、未完成过去时描写背景，至少 3 处用愈过去时交代更早发生的事。', model: "L'année dernière, je devais prendre l'avion pour Rome avec ma sœur. La veille, nous avions tout préparé : nous avions imprimé les billets et fait nos valises. Le matin, nous avons pris un taxi, mais il y avait beaucoup de circulation. Quand nous sommes arrivés à l'aéroport, l'enregistrement était déjà fermé ! Ma sœur était furieuse, parce que c'était moi qui avais choisi l'heure du taxi. Finalement, nous avons acheté deux billets pour le vol suivant. Ils coûtaient très cher, mais le soir, nous étions à Rome. Je n'avais jamais vu une ville aussi belle !" },
  },
  {
    id: 'b1-05', emoji: '⏳', title: '等你回来的时候', sub: '先将来时 futur antérieur', can: '能安排将来事情的先后，说"等……做完以后再……"', scene: null, grammar: ['g-fut-ant'],
    words: [],
    newWords: [
      ['dès que', 'dɛ kə', '一……就……', "Dès que j'aurai fini, je t'appellerai.", '我一做完就给你打电话。', 'course'],
      ['une fois que', 'yn fwa kə', '一旦……之后', 'Une fois que le client aura signé, on pourra commencer.', '客户一签字，我们就可以开始了。', 'course'],
      ['lorsque', 'lɔʁs.kə', '当……时（较正式）', 'Lorsque vous aurez lu le document, envoyez-moi vos remarques.', '您读完文件后，请把意见发给我。', 'course'],
      ['le dossier', 'lə do.sje', '项目；案卷；文件夹', 'Tu peux préparer le dossier pour lundi ?', '你能在周一前把材料准备好吗？', 'course'],
      ['la date limite', 'la dat li.mit', '截止日期', "La date limite, c'est le 15 décembre.", '截止日期是 12 月 15 日。', 'course'],
      ['transmettre', 'tʁɑ̃s.mɛtʁ', '转交；转达', 'Je transmettrai votre message au directeur.', '我会把您的留言转达给经理。', 'course'],
      ['le congé', 'lə kɔ̃.ʒe', '休假；假期', 'Je serai en congé à partir du 20.', '我从 20 号开始休假。', 'course'],
      ['relire', 'ʁə.liʁ', '重读；校对', 'Quand tu auras relu le texte, envoie-le au client.', '你校对完文本后，把它发给客户。', 'course'],
      ["d'ici", 'di.si', '从现在到……为止；在……之前', "J'aurai terminé d'ici vendredi.", '周五之前我会做完。', 'course'],
      ['faire le point', 'fɛʁ lə pwɛ̃', '梳理情况；盘点进度', 'On fait le point sur le projet ?', '我们来梳理一下项目进度？', 'course'],
    ],
    dialogue: [
      ['Margot', "Lin, tu as deux minutes ? J'aimerais qu'on fasse le point avant les vacances.", '林，你有两分钟吗？我想在放假前我们一起梳理一下进度。'],
      ['我', 'Bien sûr. Pour le dossier Lambert, il me reste juste la présentation à faire.', '当然。朗贝尔那个项目，我只剩演示文稿还没做。'],
      ['Margot', "Parfait. La date limite, c'est vendredi. Tu penses que tu auras fini d'ici là ?", '很好。截止日期是周五。你觉得到时候能做完吗？'],
      ['我', "Oui, j'aurai terminé jeudi soir. Dès que j'aurai fini, je t'enverrai le document.", '能，周四晚上我就会做完。我一做完就把文件发给你。'],
      ['Margot', "Super. Quand je l'aurai relu, je le transmettrai au client.", '太好了。我校对完就转给客户。'],
      ['我', "Et s'il demande des modifications pendant que je suis en congé ?", '那如果我休假期间他要求修改呢？'],
      ['Margot', "Ne t'inquiète pas, je m'en occuperai. Tu pars quand, exactement ?", '别担心，我来处理。你具体哪天走？'],
      ['我', "Samedi matin. Mais je n'aurai pas encore reçu le contrat signé, je crois.", '周六早上。不过我想到那时我还收不到签好的合同。'],
      ['Margot', "Pas grave. Une fois que tu seras rentré, en janvier, tu t'en occuperas. D'ici là, repose-toi bien !", '没关系。等你一月份回来以后再处理。在那之前，好好休息吧！'],
      ['我', "Merci ! Si tu as besoin de moi, écris-moi : je te répondrai dès que j'aurai lu ton message.", '谢谢！如果你需要我，就给我写信：我一看到消息就回复你。'],
    ],
    sentences: [
      ["J'aurai terminé jeudi soir.", '周四晚上我就会做完。'],
      ["Dès que j'aurai fini, je t'enverrai le document.", '我一做完就把文件发给你。'],
      ["Quand je l'aurai relu, je le transmettrai au client.", '我校对完就转给客户。'],
      ["Une fois que tu seras rentré, tu t'occuperas du contrat.", '等你回来以后，再处理合同。'],
      ["Tu penses que tu auras fini d'ici vendredi ?", '你觉得周五之前能做完吗？'],
    ],
    cloze: [
      ['Dès que tu ___ ce mail, tu me répondras.', ['auras lu', 'lis', 'avais lu'], 0, '你一读完这封邮件就回复我。', '将来的两件事，先完成的那件用先将来时。受英语影响用现在时（*dès que tu lis）是常见错误'],
      ['Quand elle ___ arrivée, nous passerons à table.', ['sera', 'aura', 'est'], 0, '等她到了，我们就开饭。', 'arriver 用 être：elle sera arrivée（过去分词和主语配合）'],
      ["À vingt heures, j'___ fini mon travail.", ['aurai', 'aurais', 'avais'], 0, '到晚上八点，我就已经做完工作了。', '到将来某个时间点已经完成 → 先将来时。aurai（将来时）≠ aurais（条件式）'],
      ['Une fois que vous ___ le contrat, nous commencerons.', ['aurez signé', 'signez', 'signiez'], 0, '一旦您签了合同，我们就开始。', 'une fois que 强调"完成之后"，接先将来时；signiez 是虚拟式，这里用不上'],
      ["Je t'appellerai dès que je ___ à Paris.", ['serai arrivé', 'aurai arrivé', 'suis arrivé'], 0, '我一到巴黎就给你打电话。', "arriver 是 être 型动词：je serai arrivé；*j'aurai arrivé 是助动词选错了"],
    ],
    discover: [
      { q: '中文"等我回来再说吧"。On en parlera quand je ___ rentré. 填什么？', opts: ['serai', 'suis', 'étais'], a: 0, why: '主句是将来时，"回来"也发生在将来、而且先完成 → 先将来时 je serai rentré。中文动词不变，英语用现在时，法语必须用将来体系。' },
      { q: "\"J'aurai fini à midi.\" 是什么意思？", opts: ['到中午我就已经做完了', '我中午开始做', '我中午本来可以做完的'], a: 0, why: '先将来时表示"到将来某个时间已经完成"。"本来可以做完"是条件式过去时 j\'aurais pu finir。' },
    ],
    write: { prompt: '你要去国外读一年书。写一段话（60–120 词）讲讲你的计划：到了以后先做什么、再做什么，学成回国后打算做什么。用 quand / dès que / une fois que + 先将来时。', model: "En septembre, je partirai étudier un an à Montréal. Dès que je serai arrivé, je chercherai une chambre près de l'université. Une fois que je me serai installé, j'ouvrirai un compte en banque et j'achèterai une carte de transport. Quand j'aurai choisi mes cours, je m'inscrirai aussi dans un club de badminton pour rencontrer des gens. Je pense qu'au bout de trois mois, j'aurai fait beaucoup de progrès en français. Quand j'aurai obtenu mon diplôme, je rentrerai en Chine et je chercherai un travail dans une entreprise française. D'ici là, il faut que je travaille beaucoup !" },
  },
  {
    id: 'b1-06', emoji: '🛋️', title: '我需要的东西', sub: '关系代词 dont · ce qui / ce que / ce dont', can: '能用 dont 和 ce qui / ce que / ce dont 连接句子，说清自己需要什么、想要什么', scene: null, grammar: ['g-dont'],
    words: [],
    newWords: [
      ['dont', 'dɔ̃', '（关系代词，代替 de + 名词）', "C'est le canapé dont je t'ai parlé.", '这就是我跟你说过的那张沙发。', 'course'],
      ['le canapé', 'lə ka.na.pe', '沙发', 'Ce canapé est très confortable.', '这张沙发很舒服。', 'course'],
      ["l'étagère (f.)", 'le.ta.ʒɛʁ', '搁架；书架', "J'ai besoin d'une étagère pour mes livres.", '我需要一个放书的架子。', 'course'],
      ['le meuble', 'lə mœbl', '（一件）家具', "Tous ces meubles sont d'occasion.", '这些家具都是二手的。', 'course'],
      ["d'occasion", 'dɔ.ka.zjɔ̃', '二手的', "J'ai acheté un vélo d'occasion.", '我买了一辆二手自行车。', 'course'],
      ['disposer de', 'dis.po.ze də', '拥有；可以支配', "C'est la seule somme dont je dispose.", '这是我能拿出的全部的钱。', 'course'],
      ['se souvenir de', 'sə su.vniʁ də', '记得', "Raconte-moi ce dont tu te souviens.", '跟我讲讲你记得的事。', 'course'],
      ['se servir de', 'sə sɛʁ.viʁ də', '使用', "C'est une machine dont je ne me sers jamais.", '这是一台我从来不用的机器。', 'course'],
      ['négocier', 'ne.ɡɔ.sje', '讨价还价；谈判', 'On peut négocier le prix ?', '价格可以商量吗？', 'course'],
      ['minuscule', 'mi.nys.kyl', '极小的', 'Mon salon est minuscule.', '我的客厅特别小。', 'course'],
    ],
    dialogue: [
      ['Chloé', 'Alors, de quoi tu as besoin pour ton nouvel appart ?', '那么，你的新公寓还需要什么？'],
      ['我', "Surtout d'un canapé et d'une étagère. Ce que je veux, c'est quelque chose de simple et pas trop cher.", '主要是一张沙发和一个架子。我想要的是简单又不太贵的东西。'],
      ['Chloé', "Regarde ce canapé vert : c'est le genre de meuble dont tout le monde rêve !", '看这张绿沙发：这正是人人都梦寐以求的那种家具！'],
      ['我', "Il est joli, mais ce qui m'inquiète, c'est la taille. Mon salon est minuscule.", '挺好看的，不过我担心的是尺寸。我的客厅特别小。'],
      ['Chloé', "Et cette étagère en bois ? Elle est exactement de la couleur dont tu m'avais parlé.", '那这个木架子呢？正好是你之前跟我说的那种颜色。'],
      ['我', "Oui, c'est tout à fait ce dont j'ai besoin ! Monsieur, elle coûte combien, l'étagère ?", '对，这正是我需要的！先生，这个架子多少钱？'],
      ['Vendeur', "Quarante euros. C'est du chêne massif, vous savez.", '四十欧。这可是实心橡木的。'],
      ['我', "On peut négocier un peu ? Trente euros, c'est la somme dont je dispose.", '能稍微讲讲价吗？三十欧，这是我能拿出来的钱。'],
      ['Vendeur', 'Allez, trente-cinq, et je vous donne aussi cette lampe dont personne ne veut.', '好吧，三十五，我再送您这盏没人要的灯。'],
      ['我', "Marché conclu ! Tu vois, Chloé, on trouve toujours ce qu'on cherche dans les vide-greniers.", '成交！你看，克洛埃，在旧货市集上总能找到想要的东西。'],
    ],
    sentences: [
      ["C'est exactement ce dont j'ai besoin.", '这正是我需要的。'],
      ["Ce qui m'inquiète, c'est la taille.", '我担心的是尺寸。'],
      ["Ce que je veux, c'est quelque chose de simple.", '我想要的是简单的东西。'],
      ["C'est le canapé dont je t'ai parlé.", '这就是我跟你说过的那张沙发。'],
      ["On trouve toujours ce qu'on cherche ici.", '在这里总能找到想要的东西。'],
    ],
    cloze: [
      ["Voici le livre ___ j'ai besoin.", ['dont', 'que', 'où'], 0, '这就是我需要的那本书。', "avoir besoin de quelque chose → 用 dont。*le livre que j'ai besoin 是中国学生最常见的错误"],
      ['Dis-moi ___ te ferait plaisir.', ['ce qui', 'ce que', 'ce dont'], 0, '告诉我什么能让你高兴。', '在从句里作主语（___ te ferait plaisir）→ ce qui'],
      ['Je ne comprends pas ___ tu dis.', ['ce que', 'ce qui', "qu'est-ce que"], 0, '我不明白你说的话。', "dire quelque chose，作直接宾语 → ce que；间接问句里不用 qu'est-ce que"],
      ["C'est une amie ___ je connais bien le frère.", ['dont', 'que', 'qui'], 0, '这位朋友的哥哥我很熟。', 'le frère de cette amie → dont（名词的补语）。注意语序：dont + 主语 + 动词 + 宾语'],
      ['Raconte-moi ___ tu te souviens.', ['ce dont', 'ce que', 'dont'], 0, '跟我讲讲你记得的事。', 'se souvenir de → dont；没有具体先行词时，dont 前面要加 ce'],
    ],
    discover: [
      { q: 'Le film ___ je parle. 为什么这里用 dont，不用 que？', opts: ['因为是 parler de quelque chose，"de + 名词"由 dont 代替', '因为 film 是阳性', '因为后面有主语 je'], a: 0, why: '选关系代词要看从句的动词怎么搭配：parler de → dont；voir qch → que；habiter à / dans → où。' },
      { q: "C'est l'homme dont je connais la femme. 能不能说 …dont je connais sa femme ?", opts: ['不能，dont 已经表示"他的"，不能再加 sa', '能，这样意思更清楚', '只有口语里可以'], a: 0, why: 'dont 本身就代替了 de cet homme（这个男人的），再加 sa 就重复了。' },
    ],
    write: { prompt: '你刚搬进新家。写一段话（60–120 词），介绍你已经有的和还需要的东西，dont、ce qui、ce que、ce dont 至少各用一次。', model: "Je viens d'emménager dans un petit studio près de la gare. Ce que j'aime le plus, c'est la lumière : il y a deux grandes fenêtres. J'ai déjà un lit et un bureau d'occasion que mes amis m'ont donnés. Ce qui me manque encore, c'est un canapé, parce que je ne sais pas où faire asseoir mes amis quand ils viennent. J'ai aussi besoin d'une étagère pour mes livres, mais je n'ai pas encore trouvé le modèle dont je rêve. Le week-end prochain, j'irai au vide-grenier du quartier : j'espère que j'y trouverai tout ce dont j'ai besoin !" },
  },
  {
    id: 'b1-07', emoji: '🤝', title: '我说的那个原因', sub: '复合关系代词 lequel / auquel / duquel', can: '能用"介词 + lequel / qui"说清楚和谁合作、为了什么、在哪里做事', scene: null, grammar: ['g-lequel'],
    words: [],
    newWords: [
      ["l'association (f.)", 'la.sɔ.sja.sjɔ̃', '协会；社团', "L'association pour laquelle je travaille aide les étudiants étrangers.", '我为之工作的协会帮助外国学生。', 'course'],
      ['le · la bénévole', 'lə · la be.ne.vɔl', '志愿者', 'Nous cherchons des bénévoles pour samedi.', '我们在找周六的志愿者。', 'course'],
      ['la raison', 'la ʁɛ.zɔ̃', '原因；理由', 'Voilà la raison pour laquelle je suis venu.', '这就是我来的原因。', 'course'],
      ['participer à', 'paʁ.ti.si.pe a', '参加', "C'est un projet auquel je participe depuis un an.", '这是我参加了一年的项目。', 'course'],
      ['réfléchir à', 'ʁe.fle.ʃiʁ a', '思考；考虑', "C'est une question à laquelle je n'ai jamais réfléchi.", '这是个我从没想过的问题。', 'course'],
      ['tenir à', 'tə.niʁ a', '珍视；很看重', "C'est une amitié à laquelle je tiens beaucoup.", '这是一份我非常珍视的友谊。', 'course'],
      ['le local', 'lə lɔ.kal', '场所；活动室', 'Le local dans lequel on se réunit est assez petit.', '我们聚会的活动室挺小的。', 'course'],
      ["l'atelier (m.)", 'la.tə.lje', '工作坊；作坊', 'Je donne un atelier de cuisine le mardi soir.', '我每周二晚上开一个烹饪工作坊。', 'course'],
      ['animer', 'a.ni.me', '主持；带领（活动）', "Qui va animer l'atelier de samedi ?", '谁来主持周六的工作坊？', 'course'],
      ['indispensable', 'ɛ̃.dis.pɑ̃.sabl', '必不可少的', 'Le français est indispensable pour trouver du travail ici.', '在这里找工作，法语必不可少。', 'course'],
    ],
    dialogue: [
      ['Nadia', "Bienvenue à « Mots du monde » ! C'est l'association dont je t'ai parlé au téléphone.", '欢迎来到"世界之语"！这就是我电话里跟你说的那个协会。'],
      ['我', "Merci ! C'est ici, le local dans lequel vous donnez les cours ?", '谢谢！这就是你们上课的活动室吗？'],
      ['Nadia', 'Oui. Et la grande salle, à côté de laquelle se trouve la cuisine, sert aux ateliers de conversation.', '对。那间大厅——旁边就是厨房——是用来办会话工作坊的。'],
      ['我', "Super. Et les apprenants avec qui je vais travailler, ils viennent d'où ?", '太好了。那和我一起学习的学员都是从哪儿来的？'],
      ['Nadia', 'De partout : Syrie, Afghanistan, Érythrée… Ce sont des gens pour qui le français est indispensable pour trouver du travail.', '各地都有：叙利亚、阿富汗、厄立特里亚……对他们来说，法语是找工作必不可少的。'],
      ['我', "Je comprends. C'est d'ailleurs la raison pour laquelle je voulais devenir bénévole : moi aussi, je sais ce que c'est d'arriver dans un pays inconnu.", '我理解。这也正是我想当志愿者的原因：我也知道来到一个陌生国家是什么滋味。'],
      ['Nadia', "Exactement. Tu as déjà réfléchi au type d'atelier que tu voudrais animer ?", '没错。你想过你想主持哪种工作坊吗？'],
      ['我', "Oui, c'est une question à laquelle j'ai beaucoup pensé. Pourquoi pas un atelier de cuisine ? On parle beaucoup quand on cuisine ensemble !", '想过，这个问题我考虑了很久。为什么不办个烹饪工作坊呢？大家一起做饭的时候会聊很多！'],
      ['Nadia', 'Excellente idée ! On a justement un projet auquel tu pourrais participer : un grand repas partagé à la fin du mois.', '好主意！我们正好有个你可以参加的项目：月底的一场大型百家宴。'],
      ['我', "Avec plaisir ! C'est exactement le genre d'activité à laquelle je tiens.", '乐意之至！这正是我很看重的那种活动。'],
    ],
    sentences: [
      ['C\'est la raison pour laquelle je voulais devenir bénévole.', '这就是我想当志愿者的原因。'],
      ["C'est une question à laquelle j'ai beaucoup pensé.", '这个问题我考虑了很久。'],
      ['On a un projet auquel tu pourrais participer.', '我们有个你可以参加的项目。'],
      ["C'est le local dans lequel nous donnons les cours.", '这就是我们上课的活动室。'],
      ['Ce sont des gens pour qui le français est indispensable.', '对这些人来说，法语必不可少。'],
    ],
    cloze: [
      ["C'est un problème ___ je n'avais pas pensé.", ['auquel', 'à lequel', 'duquel'], 0, '这是个我没想到的问题。', 'penser à + lequel → 必须缩合成 auquel'],
      ["La table sur ___ j'ai posé mes clés a disparu.", ['laquelle', 'lequel', 'quelle'], 0, '我放钥匙的那张桌子不见了。', 'table 是阴性 → laquelle；quelle 是疑问形容词，不能当关系代词'],
      ['Le collègue avec ___ je travaille est très sympa.', ['qui', 'que', 'dont'], 0, '和我一起工作的同事人很好。', '介词后面指人一般用 qui（avec qui）；que 不能放在介词后面，dont 只代替 de'],
      ['Le parc près ___ nous habitons est magnifique.', ['duquel', 'dont', 'de lequel'], 0, '我们家附近的那个公园很美。', '复合介词 près de / à côté de / au milieu de 后面不能用 dont，要用 duquel（de + lequel 必须缩合）'],
      ['Ce sont des valeurs ___ je tiens beaucoup.', ['auxquelles', 'auxquels', 'à lesquelles'], 0, '这些是我非常珍视的价值观。', 'tenir à；valeurs 是阴性复数 → auxquelles'],
    ],
    discover: [
      { q: "\"我家附近的公园\"说 le parc près duquel j'habite，为什么不说 le parc dont j'habite près ?", opts: ['dont 不能用在 près de 这类复合介词后面', 'dont 只能指人', '两种说法都对'], a: 0, why: 'dont 只能代替单独的 de（parler de, avoir besoin de）。près de、à côté de、en face de 是一个整体，要用 près duquel / à côté de laquelle。' },
      { q: '"我来的原因" la raison ___ je suis venu', opts: ['pour laquelle', 'pour lequel', 'pour que'], a: 0, why: 'raison 是阴性 → pour laquelle。pour que 是"为了……"，后接虚拟式，不是关系代词。' },
    ],
    write: { prompt: '介绍一个你参加过的社团、协会或团队（60–120 词）：它做什么、你和谁一起、你为什么参加。至少用 3 个"介词 + lequel / laquelle / qui"或 auquel / duquel。', model: "Depuis deux ans, je fais partie d'un club de randonnée auquel je tiens beaucoup. Les membres avec qui je marche viennent de milieux très différents : il y a des étudiants, des retraités, des médecins… Chaque dimanche, nous partons d'une petite gare à côté de laquelle il y a une boulangerie, et nous marchons environ vingt kilomètres. La raison pour laquelle j'aime ce club, c'est l'ambiance : personne ne se compare aux autres. L'été dernier, nous avons fait un voyage dans les Alpes pendant lequel j'ai vu des paysages incroyables. C'est une expérience à laquelle je repense souvent." },
  },
  {
    id: 'b1-08', emoji: '🎁', title: '我把它给了他', sub: '双宾语代词的顺序', can: '能用两个代词说"借给你""还给他了"，避免重复名词', scene: null, grammar: ['g-double'],
    words: [],
    newWords: [
      ['prêter', 'pʁɛ.te', '借给（别人）', 'Tu peux me prêter ton vélo ?', '你能把自行车借我吗？', 'course'],
      ['emprunter', 'ɑ̃.pʁœ̃.te', '借（别人的东西）', "J'ai emprunté ce livre à la bibliothèque.", '我从图书馆借了这本书。', 'course'],
      ['le chargeur', 'lə ʃaʁ.ʒœʁ', '充电器', 'Je ne trouve plus mon chargeur.', '我找不到我的充电器了。', 'course'],
      ["l'appareil photo (m.)", 'la.pa.ʁɛj fo.to', '相机', "Mon appareil photo ? Je te le prête, mais fais attention !", '我的相机？借你可以，但要小心！', 'course'],
      ['offrir', 'ɔ.fʁiʁ', '送（礼物）', "Mes parents me l'ont offert pour mon anniversaire.", '这是我父母送我的生日礼物。', 'course'],
      ['rapporter', 'ʁa.pɔʁ.te', '带回来；还回来', 'Je te le rapporte dimanche soir.', '我周日晚上就还给你。', 'course'],
      ['abîmer', 'a.bi.me', '弄坏；损坏', "Tu ne l'as pas abîmé, j'espère ?", '你没把它弄坏吧？', 'course'],
      ['la tente', 'la tɑ̃t', '帐篷', "On a besoin d'une tente pour le camping.", '露营我们需要一顶帐篷。', 'course'],
      ['promettre', 'pʁɔ.mɛtʁ', '答应；保证', 'Je te le promets.', '我向你保证。', 'course'],
      ['prendre soin de', 'pʁɑ̃dʁ swɛ̃ də', '爱护；照顾', 'Prends soin de toi !', '照顾好自己！', 'course'],
    ],
    dialogue: [
      ['Théo', 'Lin, je pars camper ce week-end. Tu pourrais me prêter ton appareil photo ?', '林，我这周末去露营。你能把相机借我吗？'],
      ['我', "Mon appareil photo ? Euh… Mes parents me l'ont offert l'année dernière, j'y tiens beaucoup.", '我的相机？呃……这是我爸妈去年送我的，我很宝贝它。'],
      ['Théo', "Je te promets d'en prendre soin ! Et je te le rapporte dimanche soir.", '我保证好好爱护它！周日晚上就还给你。'],
      ['我', "Bon, d'accord, je te le prête. Mais ne l'abîme pas, et ne le laisse pas sous la pluie !", '好吧，借你。不过别把它弄坏了，也别放在雨里！'],
      ['Théo', 'Merci ! Et ton chargeur de téléphone, tu me le prêtes aussi ? Le mien est cassé.', '谢谢！还有你的手机充电器，也能借我吗？我的坏了。'],
      ['我', "Désolé, je ne peux pas te le prêter, j'en ai besoin. Mais demande à Julie, elle en a deux.", '抱歉，这个不能借你，我自己要用。不过你问问朱莉，她有两个。'],
      ['Théo', "Ah oui, je vais lui en demander un. Au fait, tu as rendu sa tente à Marc ?", '哦对，我去跟她要一个。对了，你把帐篷还给马克了吗？'],
      ['我', 'Oui, je la lui ai rendue mardi. Pourquoi ?', '还了，我周二还给他了。怎么了？'],
      ['Théo', 'Parce que je voulais la lui emprunter ! Bon, tant pis, je vais lui écrire.', '因为我本来想跟他借啊！算了，我给他发个消息。'],
      ['我', "Tiens, voilà l'appareil. Ah non, rends-le-moi deux secondes : il faut que je vide la carte mémoire !", '给，相机。啊不，先还我两秒钟：我得把存储卡清空！'],
    ],
    sentences: [
      ["Mes parents me l'ont offert l'année dernière.", '这是我爸妈去年送我的。'],
      ['Je te le rapporte dimanche soir.', '我周日晚上就还给你。'],
      ['Je la lui ai rendue mardi.', '我周二把它还给他了。'],
      ['Je vais lui en demander un.', '我去跟她要一个。'],
      ['Rends-le-moi deux secondes.', '先还我两秒钟。'],
    ],
    cloze: [
      ['Ton vélo ? Je ___ ai prêté hier.', ['le lui', 'lui le', "lui l'"], 0, '你的自行车？我昨天借给他了。', '第三人称 le / la / les 放在 lui / leur 前面：le lui'],
      ['Ces photos ? Il ___ a montrées.', ['me les', 'les me', 'me leur'], 0, '这些照片？他给我看过了。', 'me / te / nous / vous 放在 le / la / les 前面：me les；过去分词和前面的 les 配合 → montrées'],
      ['Ce livre est à moi : rends-___ !', ['le-moi', 'moi-le', 'me-le'], 0, '这本书是我的：还给我！', '肯定命令式：动词-直接宾语-间接宾语，me 变成 moi'],
      ['Des bonbons ? Ne ___ donne pas trop !', ['leur en', 'en leur', 'les en'], 0, '糖果？别给他们太多！', '否定命令式按陈述句的顺序：leur 在 en 前面'],
      ['La clé ? Je ___ ai donnée ce matin.', ['la leur', 'leur la', 'les leur'], 0, '钥匙？我今天早上给他们了。', 'la 在 leur 前面；donnée 和前面的 la 配合'],
    ],
    discover: [
      { q: 'Je donne le livre à Paul. → Je le lui donne. 那么 Paul me donne le livre. → ?', opts: ['Il me le donne.', 'Il le me donne.', 'Il le lui donne.'], a: 0, why: '和 me / te / nous / vous 搭配时它们在前（me le）；和 lui / leur 搭配时 le / la / les 在前（le lui）。' },
      { q: '肯定命令式"把它给我！"怎么说？', opts: ['Donne-le-moi !', 'Donne-moi-le !', 'Me le donne !'], a: 0, why: '肯定命令式：动词-直接宾语-间接宾语，用连字符连接，me 变成 moi。否定时才回到普通顺序：Ne me le donne pas !' },
    ],
    write: { prompt: '写一段话（60–120 词）：你借给别人或向别人借过什么东西？讲讲后来怎么样了（有没有还、有没有弄坏）。至少用 3 处双宾语代词（如 je le lui ai prêté, il me l\'a rendu）。', model: "L'été dernier, mon cousin Hao m'a demandé ma voiture pour partir en vacances avec sa copine. Au début, je ne voulais pas la lui prêter, parce que je venais de l'acheter. Mais il a insisté et il m'a promis d'en prendre soin, alors finalement, je la lui ai prêtée. Deux semaines plus tard, il me l'a rapportée… avec une grosse rayure sur la portière ! Il était très gêné. Il m'a proposé de payer la réparation et j'ai accepté. Depuis, quand il me demande quelque chose, je réfléchis toujours avant de le lui donner !" },
  },
  {
    id: 'b1-09', emoji: '🎧', title: '边走边听', sub: '现在分词与副动词 en + -ant', can: '能用 en + -ant 说"一边……一边……"、做事的方式和条件', scene: null, grammar: ['g-gerondif'],
    words: [],
    newWords: [
      ['le trajet', 'lə tʁa.ʒɛ', '路程；通勤路上', "J'écoute des podcasts pendant le trajet.", '我在路上听播客。', 'course'],
      ['progresser', 'pʁɔ.ɡʁɛ.se', '进步', 'On progresse vite en parlant tous les jours.', '每天都说，进步就快。', 'course'],
      ['retenir', 'ʁə.tə.niʁ', '记住', 'Je retiens mieux les mots en les écrivant.', '我把单词写下来就记得更牢。', 'course'],
      ['les sous-titres (m.)', 'le su.titʁ', '字幕', 'Je regarde des séries avec des sous-titres en français.', '我看带法语字幕的剧。', 'course'],
      ['à voix haute', 'a vwa ot', '大声地；出声地', 'Lis ce texte à voix haute, s\'il te plaît.', '请把这段课文大声读出来。', 'course'],
      ['efficace', 'e.fi.kas', '有效的', "C'est une méthode très efficace.", '这是个很有效的方法。', 'course'],
      ["l'accent (m.)", 'lak.sɑ̃', '口音', 'Il parle français avec un léger accent.', '他说法语带一点口音。', 'course'],
      ['améliorer', 'a.me.ljɔ.ʁe', '改善；提高', 'Elle a amélioré son français en vivant à Lyon.', '她在里昂生活，法语提高了。', 'course'],
      ['se tromper', 'sə tʁɔ̃.pe', '弄错；犯错', "C'est en se trompant qu'on apprend.", '人是在犯错中学习的。', 'course'],
      ['tout en', 'tu.tɑ̃', '一边……（同时）；虽然……却', 'Il travaille tout en suivant des cours du soir.', '他一边工作一边上夜校。', 'course'],
    ],
    dialogue: [
      ['主持人', "Aujourd'hui, nous recevons Lin, qui a appris le français en seulement trois ans. Lin, quel est votre secret ?", '今天我们请来了林，他只用了三年就学会了法语。林，您的秘诀是什么？'],
      ['我', "Il n'y a pas vraiment de secret. Pour moi, la méthode la plus efficace, c'était d'écouter. J'ai surtout progressé en écoutant un peu tous les jours.", '其实没什么秘诀。对我来说，最有效的方法就是听。我主要是靠每天听一点进步的。'],
      ['主持人', 'Vous écoutiez quoi, au début ?', '刚开始您听什么？'],
      ['我', "Des podcasts pour apprenants. Je les écoutais en allant au travail : j'avais quarante minutes de trajet en métro.", '给学习者的播客。我在上班路上听：坐地铁要四十分钟。'],
      ['主持人', "Et pour le vocabulaire ? Beaucoup d'auditeurs disent qu'ils oublient les mots très vite.", '那词汇呢？很多听众说单词忘得特别快。'],
      ['我', "Moi aussi, au début ! Mais j'ai remarqué que je retenais mieux les mots en les écrivant dans des phrases. Et en les relisant le soir, on les retient encore mieux.", '我刚开始也是！不过我发现，把单词写进句子里就记得更牢。晚上再复习一遍，记得就更牢了。'],
      ['主持人', 'Votre accent est excellent. Comment est-ce que vous l\'avez amélioré ?', '您的口音非常好。您是怎么练出来的？'],
      ['我', "En imitant les acteurs des séries ! Je regardais un épisode avec les sous-titres en français, puis je répétais les dialogues à voix haute, tout en faisant la vaisselle.", '靠模仿剧里的演员！我先看一集带法语字幕的，然后一边洗碗一边大声重复台词。'],
      ['主持人', 'Un dernier conseil pour nos auditeurs ?', '最后给听众一条建议吧？'],
      ['我', "N'ayez pas peur de vous tromper. C'est en faisant des erreurs qu'on apprend. Et en parlant avec des gens, on prend vite confiance.", '不要害怕犯错。人是在犯错中学习的。多和人交流，很快就会有信心。'],
    ],
    sentences: [
      ["J'écoutais des podcasts en allant au travail.", '我在上班路上听播客。'],
      ['Je retiens mieux les mots en les écrivant.', '我把单词写下来就记得更牢。'],
      ["J'ai amélioré mon accent en imitant les acteurs.", '我通过模仿演员改善了口音。'],
      ['Je répétais les dialogues tout en faisant la vaisselle.', '我一边洗碗一边重复台词。'],
      ["C'est en faisant des erreurs qu'on apprend.", '人是在犯错中学习的。'],
    ],
    cloze: [
      ['Il chante en ___ sa douche.', ['prenant', 'prendant', 'prend'], 0, '他边洗澡边唱歌。', '现在分词 = nous 形式的词根 + -ant：nous prenons → prenant'],
      ["Elle s'est cassé la jambe en ___ du ski.", ['faisant', 'faire', 'fait'], 0, '她滑雪时摔断了腿。', 'en 后面只能接 -ant 形式：nous faisons → faisant'],
      ["En ___ plus tôt, tu arriverais à l'heure.", ['partant', 'partir', 'parti'], 0, '要是早点出发，你就能准时到。', '副动词也可以表示条件，相当于 si tu partais plus tôt'],
      ["___ qu'il allait pleuvoir, j'ai pris mon parapluie.", ['Sachant', 'Savant', 'Savoir'], 0, '我知道要下雨，就带了伞。', 'savoir 的现在分词不规则：sachant。savant 是形容词 / 名词（博学的；学者）'],
      ['On apprend une langue ___ la pratiquant.', ['en', 'par', 'pour'], 0, '要通过练习来学一门语言。', '"通过……方式"用 en + -ant；*par pratiquant 是受中文"通过"影响的错误'],
    ],
    discover: [
      { q: "Je l'ai vu en sortant du cinéma. 是谁从电影院出来？", opts: ['我（副动词的主语 = 主句的主语）', '他', '说不清'], a: 0, why: '副动词的主语一定是主句的主语。如果是"他"从电影院出来，要说 Je l\'ai vu qui sortait du cinéma。' },
      { q: 'un travail fatigant / en fatiguant les élèves：两个词为什么拼法不同？', opts: ['fatigant 是形容词（累人的），fatiguant 是现在分词', '一个是阳性，一个是阴性', '只是两种写法，都可以'], a: 0, why: '有些动词的形容词形式拼写特殊：fatigant / fatiguant，convaincant / convainquant。形容词要配合（une journée fatigante），副动词不变。' },
    ],
    write: { prompt: '你是怎么学外语的（法语或别的语言）？写一段话（60–120 词）分享你的方法和建议，至少用 4 个 en + -ant（同时、方式、条件），并用一次 tout en。', model: "J'ai commencé le français il y a deux ans, en suivant des cours du soir. Mais c'est surtout en dehors des cours que j'ai progressé. Chaque matin, j'écoute la radio française en prenant mon petit-déjeuner. Pour le vocabulaire, je fais des fiches et je les relis en attendant le bus. En lisant des bandes dessinées, j'ai découvert beaucoup d'expressions qu'on n'apprend pas en classe. Le week-end, je regarde des films tout en notant les phrases utiles dans un carnet. Mon conseil : en pratiquant un peu chaque jour, vous progresserez plus vite qu'en étudiant six heures le dimanche !" },
  },
  {
    id: 'b1-10', emoji: '🌉', title: '这座桥建于……', sub: '被动语态', can: '能用被动语态介绍建筑和历史，知道什么时候用 par、什么时候用 de', scene: null, grammar: ['g-passif'],
    words: [],
    newWords: [
      ['le pont', 'lə pɔ̃', '桥', 'Ce pont a été construit au XVIe siècle.', '这座桥建于 16 世纪。', 'course'],
      ['construire', 'kɔ̃s.tʁɥiʁ', '建造', "La tour Eiffel a été construite pour l'Exposition universelle de 1889.", '埃菲尔铁塔是为 1889 年的世博会建造的。', 'course'],
      ['le siècle', 'lə sjɛkl', '世纪', 'Cette église date du XIIe siècle.', '这座教堂可以追溯到 12 世纪。', 'course'],
      ["l'incendie (m.)", 'lɛ̃.sɑ̃.di', '火灾', 'La cathédrale a été gravement endommagée par un incendie.', '大教堂在一场火灾中严重受损。', 'course'],
      ['détruire', 'de.tʁɥiʁ', '摧毁；破坏', 'Le quartier a été détruit pendant la guerre.', '这个街区在战争中被摧毁了。', 'course'],
      ['restaurer', 'ʁɛs.tɔ.ʁe', '修复', "Le château est en train d'être restauré.", '城堡正在修复中。', 'course'],
      ['inaugurer', 'i.no.ɡy.ʁe', '落成揭幕；启用', "Le nouveau musée sera inauguré l'année prochaine.", '新博物馆将于明年落成开放。', 'course'],
      ["l'architecte (m. · f.)", 'laʁ.ʃi.tɛkt', '建筑师', 'Ce bâtiment a été dessiné par un architecte japonais.', '这栋建筑是一位日本建筑师设计的。', 'course'],
      ['le roi', 'lə ʁwa', '国王', 'Le pont a été inauguré par le roi Henri IV.', '这座桥由国王亨利四世启用。', 'course'],
      ['achever', 'aʃ.ve', '完成；竣工', 'Les travaux seront achevés dans deux ans.', '工程将在两年后竣工。', 'course'],
    ],
    dialogue: [
      ['导游', "Mesdames et messieurs, nous voici sur le Pont-Neuf. Son nom veut dire « pont neuf », mais c'est en réalité le plus vieux pont de Paris !", '女士们先生们，我们现在在新桥上。它的名字意思是"新的桥"，但其实它是巴黎最古老的桥！'],
      ['我', 'Ah bon ? Il a été construit quand ?', '是吗？它是什么时候建的？'],
      ['导游', 'La première pierre a été posée en 1578, sous Henri III, et le pont a été achevé et inauguré en 1607, sous Henri IV.', '1578 年亨利三世时期奠基，1607 年亨利四世时期竣工启用。'],
      ['游客', "Et la statue à cheval, là-bas, c'est qui ?", '那边那座骑马的雕像是谁？'],
      ['导游', "C'est justement le roi Henri IV. La statue d'origine a été détruite pendant la Révolution, puis une nouvelle statue a été installée en 1818.", '正是国王亨利四世。原来的雕像在大革命期间被毁，1818 年又立了一座新的。'],
      ['我', "Et d'ici, on voit Notre-Dame, non ? Elle a été restaurée après l'incendie ?", '从这里能看见圣母院吧？火灾之后它修复好了吗？'],
      ['导游', 'Oui. En 2019, la cathédrale a été gravement endommagée par un incendie. Elle a été rouverte au public en décembre 2024, après cinq ans de travaux.', '修好了。2019 年，大教堂在一场火灾中严重受损。经过五年修复，2024 年 12 月重新对公众开放。'],
      ['游客', "Et la flèche ? Elle a été reconstruite à l'identique ?", '那尖塔呢？是按原样重建的吗？'],
      ['导游', "Oui, exactement comme celle qui avait été dessinée par l'architecte Viollet-le-Duc au XIXe siècle.", '是的，完全按照 19 世纪建筑师维奥莱-勒-杜克设计的那座重建。'],
      ['我', "C'est impressionnant. Ces monuments sont connus du monde entier, mais on oublie souvent qu'ils ont été détruits et reconstruits !", '真了不起。这些古迹全世界都知道，可大家常常忘了它们曾被毁坏又重建过！'],
    ],
    sentences: [
      ['Le pont a été achevé en 1607.', '这座桥于 1607 年竣工。'],
      ["La statue d'origine a été détruite pendant la Révolution.", '原来的雕像在大革命期间被毁了。'],
      ['La cathédrale a été gravement endommagée par un incendie.', '大教堂在一场火灾中严重受损。'],
      ['Elle a été rouverte au public en décembre 2024.', '它于 2024 年 12 月重新对公众开放。'],
      ['Ces monuments sont connus du monde entier.', '这些古迹全世界都知道。'],
    ],
    cloze: [
      ['Cette église a été ___ au XIIe siècle.', ['construite', 'construit', 'construire'], 0, '这座教堂建于 12 世纪。', '被动语态里过去分词和主语配合：église 是阴性 → construite'],
      ["Le nouveau musée ___ inauguré l'année prochaine.", ['sera', 'a été', 'est'], 0, '新博物馆将于明年落成开放。', '时态由 être 体现：将来 → sera inauguré'],
      ['En hiver, la montagne est couverte ___ neige.', ['de', 'avec', 'en'], 0, '冬天，山上覆盖着雪。', '描写状态的分词（couvert, entouré, rempli）后面用 de；*couverte avec 是受中文"用……覆盖"影响的错误'],
      ['Les voleurs ont été arrêtés ___ la police.', ['par', 'de', 'avec'], 0, '小偷被警察抓住了。', '具体动作的施动者用 par'],
      ["On a volé mon vélo hier. = Mon vélo ___ hier.", ['a été volé', 'est volé', 'a volé'], 0, '我的自行车昨天被偷了。', '复合过去时的被动 = a été + 过去分词。est volé 只表示状态，a volé 是主动"偷了"'],
    ],
    discover: [
      { q: '为什么不能说 *Paul a été téléphoné ?', opts: ['téléphoner à 是间接及物动词，只有直接及物动词能变被动', 'Paul 是人名，不能当被动句主语', '被动语态不能用复合过去时'], a: 0, why: '被动句的主语必须是主动句里的直接宾语。téléphoner à quelqu\'un 没有直接宾语，只能说 On a téléphoné à Paul。' },
      { q: '"我的钱包被偷了"，法国人口语里最常怎么说？', opts: ["On m'a volé mon portefeuille.", "Mon portefeuille a été volé par quelqu'un.", "J'ai été volé mon portefeuille."], a: 0, why: '口语里常用 on + 主动句代替被动；第二句语法对但很生硬，第三句是错误的。被动语态多用于新闻、历史介绍和正式文体。' },
    ],
    write: { prompt: '介绍你家乡或你去过的城市里的一座建筑或景点（60–120 词）：什么时候建的、由谁建造或设计、经历过什么（破坏、重建、修复）、现在怎样。至少用 4 处被动语态，包括不同的时态。', model: "Je voudrais vous présenter la pagode des Six Harmonies, à Hangzhou. Elle a été construite en 970, au bord de la rivière Qiantang. À l'époque, la région était souvent touchée par de fortes marées, et on croyait que la pagode protégeait la ville. Malheureusement, elle a été détruite pendant une guerre au XIIe siècle, puis elle a été reconstruite quelques dizaines d'années plus tard. Aujourd'hui, la pagode est entourée d'un joli parc et elle est visitée par des milliers de touristes chaque année. Depuis 1961, elle est protégée par l'État. Si vous allez à Hangzhou, montez jusqu'en haut : la vue est magnifique !" },
  },
];
