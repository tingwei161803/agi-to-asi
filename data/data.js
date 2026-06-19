/* =========================================================================
   From AGI to ASI — data layer (zero build, loaded by every page)

   The whole multi-page site is config-driven from two globals:
     window.SITE_META  = { title:{en,zh}, subtitle:{en,zh} }
     window.SITE_PAGES = [ { slug, layout, icon, title:{en,zh}, ...layoutData } ]

   Source: "From AGI to ASI", Genewein, Franklin, Lerchner, Orseau, Albanie,
   Bales, Wyeth, Chan, Gabriel, Leibo, Dafoe, Hutter, Graepel & Legg
   (Google DeepMind), arXiv:2606.12683v1, June 2026.  An unofficial,
   independent reader's companion — every visible string is bilingual {en,zh}.
   ========================================================================= */

window.SITE_META = {
  title:    { en: "From AGI to ASI", zh: "從 AGI 到 ASI" },
  subtitle: { en: "A reader's field guide to the transition from human-level AGI to artificial superintelligence.",
              zh: "一份從人類等級 AGI 邁向人工超智慧的閱讀導覽。" }
};

window.SITE_PAGES = [

  /* ===================== HOME · hub ===================== */
  {
    slug: "home", layout: "hub", icon: "rocket_launch",
    eyebrow: { en: "Google DeepMind · arXiv 2606.12683", zh: "Google DeepMind · arXiv 2606.12683" },
    title:    { en: "From AGI to ASI", zh: "從 AGI 到 ASI" },
    subtitle: { en: "What happens after human-level AGI? This report maps the continuum of machine intelligence beyond AGI — four technological pathways toward superintelligence, the frictions that could slow or halt them, and the research questions they raise.",
                zh: "達到人類等級 AGI 之後會發生什麼?這份報告描繪 AGI 之後機器智慧的連續光譜 —— 通往超智慧的四條技術路徑、可能拖慢或阻擋它們的阻力,以及由此衍生的研究問題。" },
    lead: { en: "Over the last decade, building human-level AGI moved from far-fetched speculation to a concrete next-decade target. This guide looks one step further: not whether we reach AGI, but how AI itself might keep developing afterwards — toward systems more capable than large organisations of humans.",
            zh: "過去十年,打造人類等級 AGI 已從天馬行空的臆測,變成具體的下一個十年目標。這份導覽再往前看一步:重點不是我們能否抵達 AGI,而是抵達之後 AI 本身會如何繼續發展 —— 邁向比大型人類組織更有能力的系統。" },
    epigraph: {
      text: { en: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
              zh: "我們只能看見前方一小段距離,但已能看見那裡有許多待完成的事。" },
      cite: { en: "Alan Turing, Computing Machinery and Intelligence (1950)",
              zh: "圖靈,《計算機器與智慧》(1950)" }
    },
    links: [
      { href: "https://arxiv.org/abs/2606.12683", icon: "article",
        label: { en: "Read the paper on arXiv", zh: "在 arXiv 閱讀原文" } }
    ],
    stats: [
      { value: 4,  label: { en: "Pathways to ASI", zh: "通往 ASI 的路徑" } },
      { value: 7,  label: { en: "Potential bottlenecks", zh: "潛在瓶頸" } },
      { value: 6,  label: { en: "Digital-mind advantages", zh: "數位心智優勢" } },
      { value: 10, label: { en: "× effective compute / year", zh: "倍有效算力 / 年" } }
    ]
  },

  /* ===================== CONCEPTS · article ===================== */
  {
    slug: "concepts", layout: "article", icon: "psychology",
    eyebrow: { en: "Sections 3–4 · Characterizing ASI", zh: "第 3–4 章 · 定義超智慧" },
    title:    { en: "What counts as superintelligence?", zh: "什麼才算超智慧?" },
    subtitle: { en: "AGI, ASI and the theoretical endpoint of Universal AI — and why intelligence is best treated as a continuum.",
                zh: "AGI、ASI 與理論終點「通用人工智慧(Universal AI)」,以及為何最好把智慧視為一條連續光譜。" },
    sections: [
      { id: "premise", heading: { en: "Life as we don't know it", zh: "我們所不知的未來" }, blocks: [
        { type: "p", text: { en: "The report looks past the milestone of human-level AGI and asks how AI itself might keep developing in a post-AGI world. The endpoint of that continuum — Universal AI — is theoretically well understood, which lends some formal grounding to an otherwise speculative question.",
                              zh: "報告把目光投向人類等級 AGI 這個里程碑之後,探問在後 AGI 世界裡,AI 本身會如何繼續發展。這條連續光譜的終點 —— 通用人工智慧(Universal AI)—— 在理論上已被充分理解,為一個原本偏向臆測的問題提供了形式上的依據。" } },
        { type: "quote", text: { en: "Determining whether these frictions will be negligible or substantial raises a number of concrete open research questions.",
                                 zh: "判定這些阻力究竟無關緊要還是舉足輕重,衍生出一連串具體而開放的研究問題。" } }
      ] },
      { id: "agi-asi", heading: { en: "AGI, ASI, UAI", zh: "AGI、ASI、UAI" }, blocks: [
        { type: "h3", text: { en: "AGI — human-level", zh: "AGI —— 人類等級" } },
        { type: "p", text: { en: "Shorthand for human-level artificial general intelligence: a system roughly as intelligent as a single human, at median human level on most cognitive tasks. The first AGI will already be superhuman on many narrow tasks, but not yet general enough.",
                             zh: "「人類等級通用人工智慧」的簡稱:一個大致與單一人類同等聰明的系統,在多數認知任務上達到人類中位水準。第一個 AGI 在許多狹窄任務上其實已超越人類,只是還不夠通用。" } },
        { type: "h3", text: { en: "ASI — superhuman & general", zh: "ASI —— 超人類且通用" } },
        { type: "p", text: { en: "Artificial superintelligence has superhuman ability across virtually all tasks and domains. The report sets the bar high: a system that exceeds large, well-coordinated human-expert collectives. Narrowly superhuman systems like AlphaFold or AlphaGo are therefore ruled out as ASI.",
                             zh: "人工超智慧在幾乎所有任務與領域都具備超人類能力。報告刻意把門檻設高:必須超越大型、協調良好的人類專家集體。因此像 AlphaFold 或 AlphaGo 這類狹窄超人類系統,並不算 ASI。" } },
        { type: "h3", text: { en: "UAI — the theoretical limit", zh: "UAI —— 理論極限" } },
        { type: "p", text: { en: "Universal AI is the theoretical endpoint, formalised via the AIXI agent, which by definition maximises the Legg-Hutter score of intelligence. It is incomputable, and can only be approximated from below by ever more powerful ASIs.",
                             zh: "通用人工智慧是理論終點,透過 AIXI 代理形式化;依定義,它最大化智慧的 Legg-Hutter 分數。它不可計算,只能由越來越強大的 ASI 從下方逼近。" } }
      ] },
      { id: "yardstick", heading: { en: "A universal yardstick", zh: "一把通用量尺" }, blocks: [
        { type: "p", text: { en: "The Legg-Hutter score formalises intelligence as the average performance of an agent across all computable tasks, with simpler tasks (lower Kolmogorov complexity) given more weight.",
                             zh: "Legg-Hutter 分數把智慧形式化為:一個代理在所有可計算任務上的平均表現,而較簡單的任務(柯氏複雜度較低)權重較高。" } },
        { type: "p", text: { en: "Crucially, this makes intelligence a continuum. We do not need a sharp threshold separating AGI from ASI — what matters is that there is a large gap in score between them, within which the pathways and frictions of this report play out.",
                             zh: "關鍵在於,這讓智慧成為一條連續光譜。我們不需要一條明確的界線去切開 AGI 與 ASI —— 重要的是兩者之間的分數差距很大,而本報告的各條路徑與阻力,就在這段差距之內展開。" } },
        { type: "h3", text: { en: "Caveats worth keeping", zh: "值得記住的但書" } },
        { type: "ul", items: {
          en: ["AIXI is a learning algorithm — the right comparison is against an architecture and training algorithm, not a single trained model.",
               "The task set could be narrowed to tasks of 'current and future human interest' rather than all computable tasks.",
               "Real systems may be 'jagged': superhuman on some tasks while sub-human on others.",
               "These definitions are relative to a human baseline that itself moves as tools and knowledge improve."],
          zh: ["AIXI 是一種學習演算法 —— 正確的比較對象是某種架構與訓練演算法,而非單一已訓練的模型。",
               "任務集合可以縮限到「當前與未來人類關注」的任務,而非所有可計算任務。",
               "真實系統可能是「鋸齒狀」的:在某些任務上超人類,在另一些任務上卻不如人。",
               "這些定義都是相對於人類基準,而這個基準本身會隨工具與知識進步而移動。"] } }
      ] },
      { id: "limits", heading: { en: "Hard limits — even for ASI", zh: "連 ASI 也躲不掉的硬限制" }, blocks: [
        { type: "p", text: { en: "Superintelligence is not omnipotence. Even far beyond human-level AGI, some ceilings cannot be engineered away (Table 2):",
                             zh: "超智慧不等於全能。即使遠遠超越人類等級 AGI,有些天花板仍無法靠工程繞過(表 2):" } },
        { type: "ul", items: {
          en: ["Fundamental physics — e.g. the speed of light.",
               "Real-time constraints on acting in the world.",
               "Limits on physical manipulation of matter.",
               "Irreducible epistemic uncertainty.",
               "Computational complexity — e.g. P vs NP.",
               "Logical limits — e.g. Gödel's incompleteness."],
          zh: ["基本物理 —— 例如光速。",
               "在世界中行動的即時性限制。",
               "對物質進行物理操作的極限。",
               "不可化約的知識不確定性。",
               "計算複雜度 —— 例如 P 對 NP。",
               "邏輯極限 —— 例如哥德爾不完備定理。"] } },
        { type: "p", text: { en: "So an ASI will not necessarily cure ageing, reshape matter with nanobots, upload human brains, or build Dyson spheres. Predicting where progress plateaus, and at what capability level, remains genuinely hard.",
                             zh: "所以 ASI 未必能治癒老化、用奈米機器人重塑物質、上傳人腦,或建造戴森球。進展會在何處、在哪個能力水準上趨於平緩,依舊非常難以預測。" } }
      ] }
    ]
  },

  /* ===================== ADVANTAGES · bento ===================== */
  {
    slug: "advantages", layout: "bento", icon: "memory",
    eyebrow: { en: "Table 1 · Digital intelligence", zh: "表 1 · 數位智慧" },
    title:    { en: "Advantages of a digital mind", zh: "數位心智的優勢" },
    subtitle: { en: "Properties of digital intelligence that scale with compute and hardware in ways biology cannot — widening the human–AI gap as computers grow more powerful.",
                zh: "數位智慧的這些特性,能以生物智慧做不到的方式隨算力與硬體擴張 —— 電腦越強,人與 AI 的差距就越大。" },
    tiles: [
      { size: "lg", accent: true, icon: "bolt", value: { en: "Faster", zh: "更快" },
        title: { en: "Internal processing speed", zh: "內部處理速度" },
        body: { en: "Digital minds can be sped up, slowed, or paused, and run on far shorter timescales than biological neurons.",
                zh: "數位心智可被加速、減速或暫停,並以遠短於生物神經元的時間尺度運作。" } },
      { size: "tall", icon: "content_copy", value: { en: "Perfect", zh: "完美" },
        title: { en: "Lossless replication", zh: "無損複製" },
        body: { en: "Source code and full memory state copy exactly — spin up large numbers of identical instances.",
                zh: "原始碼與完整記憶狀態可精確複製 —— 一次開出大量完全相同的實例。" } },
      { size: "sm", icon: "database", value: { en: "Vast", zh: "龐大" },
        title: { en: "Working memory", zh: "工作記憶" },
        body: { en: "Far larger working memory than biological minds.", zh: "工作記憶遠大於生物心智。" } },
      { size: "sm", icon: "speed", value: { en: "High", zh: "高" },
        title: { en: "Input / output speed", zh: "輸入 / 輸出速度" },
        body: { en: "Collect and emit data far faster than human senses and motor output.", zh: "以遠快於人類感官與動作輸出的速度收發資料。" } },
      { size: "wide", icon: "hub",
        title: { en: "High-bandwidth experience sharing", zh: "高頻寬經驗共享" },
        body: { en: "Instances exchange experience at high bandwidth; many lifetimes can be simulated and replayed to fine-tune a specialist.",
                zh: "實例之間以高頻寬交換經驗;可模擬並重播多輩子的經驗,用來微調出專家實例。" } },
      { size: "md", accent: true, icon: "dns", value: { en: "Portable", zh: "可移植" },
        title: { en: "Substrate independence", zh: "基質獨立" },
        body: { en: "The same AI runs on any sufficiently powerful computer; moving to new hardware is comparatively easy.",
                zh: "同一個 AI 可在任何夠強的電腦上執行;搬到新硬體相對容易。" } }
    ]
  },

  /* ===================== GROWTH · dashboard ===================== */
  {
    slug: "growth", layout: "dashboard", icon: "trending_up",
    eyebrow: { en: "Section 5.1 · Growth dynamics", zh: "第 5.1 章 · 成長動態" },
    title:    { en: "How fast could capability grow?", zh: "能力可能成長多快?" },
    subtitle: { en: "Effective compute has grown roughly an order of magnitude per year — the product of better hardware, more investment, and more efficient algorithms. Whether that translates into genuinely new capabilities is the open question.",
                zh: "有效算力大約每年成長一個數量級 —— 是更好的硬體、更多投資與更高效演算法相乘的結果。它能否轉化為真正的新能力,才是開放問題。" },
    stats: [
      { label: { en: "Effective compute / yr", zh: "有效算力 / 年" }, value: "10", unit: { en: "×", zh: "×" } },
      { label: { en: "By end of decade", zh: "到本十年末" }, value: "10,000", unit: { en: "×", zh: "×" } },
      { label: { en: "Largest training runs / yr", zh: "最大訓練規模 / 年" }, value: "4", unit: { en: "×", zh: "×" } },
      { label: { en: "Algorithmic efficiency / yr", zh: "演算法效率 / 年" }, value: "3–6", unit: { en: "×", zh: "×" } }
    ],
    bars: { title: { en: "Compounding growth factors (× per year)", zh: "相乘的成長因子(每年倍率)" }, series: [
      { label: { en: "Moore's law", zh: "摩爾定律" }, value: 1.5 },
      { label: { en: "Investment", zh: "投資" }, value: 2.5 },
      { label: { en: "Algorithms", zh: "演算法" }, value: 3 },
      { label: { en: "Effective", zh: "有效算力" }, value: 10 }
    ] },
    line: { title: { en: "Effective compute vs today (orders of magnitude, 10ⁿ×)", zh: "相對今日的有效算力(數量級,10ⁿ×)" }, points: [
      { x: "Now",  y: 0 }, { x: "+1y", y: 1 }, { x: "+2y", y: 2 },
      { x: "+3y", y: 3 }, { x: "+4y", y: 4 }, { x: "+5y", y: 5 }
    ] },
    table: {
      columns: [
        { key: "horizon",   label: { en: "Horizon", zh: "時間" } },
        { key: "instances", label: { en: "AGI instances", zh: "AGI 實例數" } },
        { key: "note",      label: { en: "Note", zh: "說明" } }
      ],
      rows: [
        { horizon: { en: "Start", zh: "起點" },     instances: "1,000",       note: { en: "Even if AGI is expensive to run.", zh: "即使 AGI 執行成本高昂。" } },
        { horizon: { en: "+1 year", zh: "+1 年" },  instances: "10,000",      note: { en: "At ~10× effective compute / yr.", zh: "以每年約 10× 有效算力。" } },
        { horizon: { en: "+5 years", zh: "+5 年" }, instances: "100,000,000", note: { en: "…or 1M instances running ~100× faster.", zh: "…或 100 萬個實例、快約 100 倍。" } }
      ]
    }
  },

  /* ===================== PATHWAYS · gallery ===================== */
  {
    slug: "pathways", layout: "gallery", icon: "alt_route",
    eyebrow: { en: "Table 3 · Section 5", zh: "表 3 · 第 5 章" },
    title:    { en: "Four pathways from AGI to ASI", zh: "從 AGI 到 ASI 的四條路徑" },
    subtitle: { en: "Four routes by which AI might move from human-level to superintelligence. They are not mutually exclusive and may unfold in parallel. Tap a card for detail.",
                zh: "AI 從人類等級邁向超智慧的四條路徑。它們並不互斥,可能同時發生。點卡片看詳情。" },
    items: [
      { slug: "scaling", title: { en: "Scaling compute, models & data", zh: "擴張算力、模型與資料" },
        summary: { en: "Keep growing effective compute and training/serving ever-larger models.", zh: "持續擴大有效算力,訓練並部署越來越大的模型。" },
        tags: ["§5.1", "compute"],
        overview: { en: "The most direct route: ride the ~10×/year growth in effective compute to train bigger models, run more instances, and spend more on test-time 'thinking'. The key uncertainty is how raw compute translates into genuinely new capabilities — diminishing returns would mean slow progress, while proportional gains would mean continued exponential capability growth.",
                    zh: "最直接的路徑:乘著有效算力每年約 10× 的成長,訓練更大的模型、執行更多實例,並在推論時投入更多『思考』算力。關鍵的不確定性在於:原始算力如何轉化為真正的新能力 —— 若報酬遞減,進展就慢;若收益成正比,能力就會持續指數成長。" } },
      { slug: "paradigm", title: { en: "Algorithmic paradigm shifts", zh: "演算法範式轉移" },
        summary: { en: "New architectures or training paradigms beyond today's neural approach.", zh: "超越當前神經網路途徑的新架構或訓練範式。" },
        tags: ["§5.2", "algorithms"],
        overview: { en: "Progress need not come only from scale. The transformer was one such step change; future paradigm shifts — or a steady accumulation of many smaller algorithmic advances — could unlock capabilities that scaling alone would not. By their nature, these breakthroughs are hard to predict in timing or form.",
                    zh: "進展不必只來自規模。Transformer 就是這樣一次階躍;未來的範式轉移 —— 或大量較小演算法進步的穩定累積 —— 可能解鎖單靠擴張達不到的能力。這類突破的時點與形式,本質上難以預測。" } },
      { slug: "recursion", title: { en: "Recursive self-improvement", zh: "遞迴自我改進" },
        summary: { en: "AI that speeds up AI research, compounding into faster progress.", zh: "AI 加速 AI 研究,複利累積成更快的進展。" },
        tags: ["§5.3", "feedback"],
        overview: { en: "If AI systems can speed up AI research, the result is a feedback loop: better AI builds better AI. This could yield super-exponential (hyperbolic) dynamics, where the growth rate itself increases. It comes in several forms — genotypic, memetic and sociogenic. The point at which such loops kick in is unknown.",
                    zh: "如果 AI 系統能加速 AI 研究,就會形成回饋迴圈:更好的 AI 造出更好的 AI。這可能帶來超指數(雙曲線)動態,連成長率本身都在上升。它有幾種形式 —— 基因型、迷因型、社會型。這種迴圈何時啟動,目前未知。" } },
      { slug: "multiagent", title: { en: "Multi-agent group agency", zh: "多代理群體能動性" },
        summary: { en: "Superintelligence emerging from large collectives of coordinating agents.", zh: "超智慧從大量協作代理的集體中湧現。" },
        tags: ["§5.4", "emergence"],
        overview: { en: "A single ASI may in practice be a collective of millions of interacting instances. Superintelligence might emerge not from one bigger model but from the coordination and division of labour of many agents — a group agent. How and when such emergence happens in complex multi-agent systems is poorly understood.",
                    zh: "一個 ASI 在實務上可能是數百萬個彼此互動實例的集體。超智慧或許不是來自單一更大的模型,而是來自眾多代理的協作與分工 —— 一個『群體代理』。這種湧現在複雜多代理系統中如何、何時發生,目前所知甚少。" } }
    ]
  },

  /* ===================== RSI · comparison ===================== */
  {
    slug: "rsi", layout: "comparison", icon: "autorenew",
    eyebrow: { en: "Section 5.3 · A taxonomy", zh: "第 5.3 章 · 一套分類" },
    title:    { en: "Three flavours of recursive self-improvement", zh: "遞迴自我改進的三種型態" },
    subtitle: { en: "The report maps self-improvement onto three processes drawn from human evolution.", zh: "報告把自我改進對應到取自人類演化的三種歷程。" },
    plans: [
      { key: "geno",  name: { en: "Genotypic", zh: "基因型" },  price: { en: "Code & architecture", zh: "程式碼與架構" }, note: { en: "Rewrite the 'DNA'", zh: "改寫『DNA』" } },
      { key: "meme",  name: { en: "Memetic", zh: "迷因型" },    price: { en: "Data & knowledge", zh: "資料與知識" }, highlight: true, note: { en: "Already visible today", zh: "今日已可見" } },
      { key: "socio", name: { en: "Sociogenic", zh: "社會型" }, price: { en: "Cooperation & roles", zh: "協作與分工" }, note: { en: "Group-level", zh: "群體層次" } }
    ],
    features: [
      { label: { en: "Biological analogue", zh: "生物對應" }, values: {
        geno:  { en: "Genetic evolution", zh: "基因演化" },
        meme:  { en: "Cultural transmission", zh: "文化傳承" },
        socio: { en: "Social organisation", zh: "社會組織" } } },
      { label: { en: "What improves", zh: "改進的對象" }, values: {
        geno:  { en: "Source code & model architecture", zh: "原始碼與模型架構" },
        meme:  { en: "Training data & learned knowledge", zh: "訓練資料與習得知識" },
        socio: { en: "Coordination & division of labour", zh: "協作與分工" } } },
      { label: { en: "AI example", zh: "AI 範例" }, values: {
        geno:  { en: "Self-rewriting architectures", zh: "自我改寫的架構" },
        meme:  { en: "Synthetic data, distillation, 'thinking' models", zh: "合成資料、蒸餾、『思考』模型" },
        socio: { en: "Specialised agents forming a group agent", zh: "專精代理組成群體代理" } } },
      { label: { en: "Acceleration potential", zh: "加速潛力" }, values: {
        geno:  { en: "High, but poorly understood", zh: "高,但所知甚少" },
        meme:  { en: "Visible via test-time scaling", zh: "已可見(推論時擴張)" },
        socio: { en: "Emergent, hard to predict", zh: "湧現式,難以預測" } } }
    ]
  },

  /* ===================== BOTTLENECKS · gallery ===================== */
  {
    slug: "bottlenecks", layout: "gallery", icon: "block",
    eyebrow: { en: "Table 4 · Section 5.5", zh: "表 4 · 第 5.5 章" },
    title:    { en: "Seven bottlenecks on the way", zh: "路上的七大瓶頸" },
    subtitle: { en: "Frictions that could slow or halt progress along the pathways. Whether each is negligible or decisive is itself an open research question. Filter by type, or tap for detail.",
                zh: "可能拖慢或阻擋各路徑進展的阻力。每一個究竟無關緊要還是決定性,本身就是開放的研究問題。可依類型篩選,或點開看詳情。" },
    categories: [
      { key: "resource", en: "Resources", zh: "資源" },
      { key: "method",   en: "Method", zh: "方法" },
      { key: "external", en: "External", zh: "外部" },
      { key: "physical", en: "Physical", zh: "物理" }
    ],
    items: [
      { slug: "data-wall", category: "resource", title: { en: "The data wall", zh: "資料牆" },
        summary: { en: "Running out of high-quality training data.", zh: "高品質訓練資料用盡。" }, tags: ["data"],
        overview: { en: "High-quality human text is finite, and models may exhaust it. The report notes this could be overcome relatively smoothly by training on self-generated interaction data in simulation and the real world (RL, agents).",
                    zh: "高品質的人類文本是有限的,模型可能會用盡。報告指出,這或許能相對平順地被克服 —— 透過在模擬與真實世界中以自我產生的互動資料訓練(強化學習、代理)。" } },
      { slug: "resources", category: "resource", title: { en: "Economic & natural resources", zh: "經濟與自然資源" },
        summary: { en: "Energy, capital and materials for ever-larger compute.", zh: "越來越大算力所需的能源、資本與物料。" }, tags: ["energy", "capital"],
        overview: { en: "Sustaining order-of-magnitude compute growth demands gigawatt-scale AI infrastructure and enormous investment in energy production. These economic and natural-resource demands could cap how far scaling can go.",
                    zh: "維持數量級的算力成長,需要 GW 等級的 AI 基礎設施與對能源生產的龐大投資。這些經濟與自然資源需求,可能限制擴張能走多遠。" } },
      { slug: "neural-paradigm", category: "method", title: { en: "Sufficiency of the neural paradigm", zh: "神經範式是否足夠" },
        summary: { en: "Maybe today's approach hits 'natural' limits.", zh: "當前途徑或許會撞上『天然』極限。" }, tags: ["paradigm"],
        overview: { en: "It may turn out that AI progress under the current neural paradigm runs against natural limits before reaching ASI — in which case a paradigm shift (pathway 2) would be required to continue.",
                    zh: "當前神經範式下的 AI 進展,有可能在抵達 ASI 之前就撞上天然極限 —— 若是如此,就需要範式轉移(路徑 2)才能繼續前進。" } },
      { slug: "research-difficulty", category: "method", title: { en: "Increasing research difficulty", zh: "研究難度遞增" },
        summary: { en: "Each advance needs ever more effort to find.", zh: "每次進步都需要越來越多心力才找得到。" }, tags: ["research"],
        overview: { en: "Maintaining constant progress in a field traditionally requires exponentially increasing inputs — 'ideas get harder to find'. This deceleration races against the acceleration from automation; which dynamic wins matters greatly in the long run.",
                    zh: "在一個領域維持固定的進展速度,傳統上需要指數增加的投入 ——『點子越來越難找』。這種減速與自動化帶來的加速彼此競賽;長期來看哪一邊勝出,影響極大。" } },
      { slug: "abstraction-barrier", category: "method", title: { en: "The abstraction barrier", zh: "抽象障壁" },
        summary: { en: "Can machines form the abstractions needed to go further?", zh: "機器能否形成繼續前進所需的抽象?" }, tags: ["abstraction"],
        overview: { en: "With high-bandwidth I/O, digital minds may not be forced to form the coarse, deep abstractions humans use to predict and plan (a low 'embodiment factor'). Whether they can nonetheless acquire the abstractions needed for open-ended progress is unclear.",
                    zh: "由於擁有高頻寬輸入輸出,數位心智或許不必像人類那樣,為了預測與規劃而形成粗略而深刻的抽象(『體現因子』偏低)。它們是否仍能習得開放式進展所需的抽象,並不清楚。" } },
      { slug: "deliberate-slowdown", category: "external", title: { en: "Deliberate slowdown", zh: "刻意放緩" },
        summary: { en: "Regulation, safety and coordination choices.", zh: "監管、安全與協調上的選擇。" }, tags: ["governance", "safety"],
        overview: { en: "Progress could be slowed on purpose — by regulation, safety concerns, or coordinated decisions to proceed cautiously. Unlike the others, this bottleneck is a matter of choice rather than a hard constraint.",
                    zh: "進展可能被刻意放緩 —— 出於監管、安全顧慮,或審慎前進的協調決定。與其他瓶頸不同,這一個是選擇問題,而非硬性限制。" } },
      { slug: "physical-limits", category: "physical", title: { en: "Physical & fundamental limits", zh: "物理與基本極限" },
        summary: { en: "Physics, complexity and logic set hard ceilings.", zh: "物理、複雜度與邏輯設下硬天花板。" }, tags: ["physics"],
        overview: { en: "Some ceilings cannot be engineered away: the speed of light and other physics, real-time constraints, the limits of physical manipulation, irreducible epistemic uncertainty, computational complexity (P vs NP), and logical limits (Gödel). ASI is extraordinarily capable, not omnipotent.",
                    zh: "有些天花板無法用工程繞過:光速與其他物理定律、即時性限制、物理操作的極限、不可化約的知識不確定性、計算複雜度(P 對 NP),以及邏輯極限(哥德爾)。ASI 極為強大,但並非全能。" } }
    ]
  },

  /* ===================== AGENDA · kanban ===================== */
  {
    slug: "agenda", layout: "kanban", icon: "science",
    eyebrow: { en: "Section 7.1 · Research agenda", zh: "第 7.1 章 · 研究議程" },
    title:    { en: "Plenty that needs to be done", zh: "還有許多待完成的事" },
    subtitle: { en: "Open research questions the report leaves for the field, grouped by theme.", zh: "報告留給整個領域的開放研究問題,依主題分組。" },
    columns: [
      { key: "scaling",  label: { en: "Scaling & capabilities", zh: "擴張與能力" } },
      { key: "paradigm", label: { en: "Paradigms & algorithms", zh: "範式與演算法" } },
      { key: "recursion",label: { en: "Recursive improvement", zh: "遞迴改進" } },
      { key: "forecast", label: { en: "Multi-agent & forecasting", zh: "多代理與預測" } }
    ],
    cards: [
      { column: "scaling", title: { en: "How does compute become capability?", zh: "算力如何變成能力?" },
        body: { en: "Quantify how effective-compute growth translates into genuinely new capabilities.", zh: "量化有效算力成長如何轉化為真正的新能力。" }, tags: ["scaling laws"] },
      { column: "scaling", title: { en: "Better benchmark extrapolation", zh: "更好的基準外推" },
        body: { en: "Use benchmark stitching to forecast capabilities across heterogeneous models.", zh: "用基準拼接,跨異質模型外推能力。" }, tags: ["benchmarks"] },
      { column: "paradigm", title: { en: "Is the neural paradigm enough?", zh: "神經範式夠用嗎?" },
        body: { en: "Map where today's approach might hit natural limits, and what could replace it.", zh: "釐清當前途徑可能撞上天然極限之處,以及可能的替代。" }, tags: ["paradigm"] },
      { column: "paradigm", title: { en: "Predicting paradigm shifts", zh: "預測範式轉移" },
        body: { en: "Find early indicators of breakthroughs that scaling alone won't produce.", zh: "找出單靠擴張無法產生之突破的早期指標。" }, tags: ["breakthroughs"] },
      { column: "recursion", title: { en: "When do feedback loops kick in?", zh: "回饋迴圈何時啟動?" },
        body: { en: "Track quantitative indicators of AI research automation and recursive improvement.", zh: "追蹤 AI 研究自動化與遞迴改進的量化指標。" }, tags: ["RSI"] },
      { column: "recursion", title: { en: "Exponential or hyperbolic?", zh: "指數還是雙曲線?" },
        body: { en: "Distinguish S-shaped from singular growth as frictions and feedback compete.", zh: "在阻力與回饋競賽下,區分 S 形與奇異點式成長。" }, tags: ["dynamics"] },
      { column: "forecast", title: { en: "Emergence in agent collectives", zh: "代理集體中的湧現" },
        body: { en: "Understand how group agency emerges in complex multi-agent systems.", zh: "理解群體能動性如何在複雜多代理系統中湧現。" }, tags: ["multi-agent"] },
      { column: "forecast", title: { en: "Forecasting AI progress", zh: "預測 AI 進展" },
        body: { en: "Build models that produce uncertainty estimates and ensemble forecasts.", zh: "建立能產生不確定性估計與集成預測的模型。" }, tags: ["forecasting"] },
      { column: "forecast", title: { en: "Avoid solipsistic superintelligence", zh: "避免唯我式超智慧" },
        body: { en: "Design training and evaluation so cooperative, non-solipsistic intelligence is favoured.", zh: "設計訓練與評估,使協作而非唯我的智慧獲得青睞。" }, tags: ["alignment"] }
    ]
  },

  /* ===================== GLOSSARY · custom ===================== */
  {
    slug: "glossary", layout: "glossary", icon: "menu_book",
    eyebrow: { en: "Appendix B · Glossary", zh: "附錄 B · 詞彙表" },
    title:    { en: "Glossary", zh: "詞彙表" },
    subtitle: { en: "Key terms used in the report. Type to filter.", zh: "報告中用到的關鍵術語。可輸入關鍵字篩選。" },
    terms: [
      { term: { en: "AGI", zh: "AGI(通用人工智慧)" },
        def: { en: "Human-level artificial general intelligence: roughly as capable as a single median human across most cognitive tasks.",
               zh: "人類等級的通用人工智慧:在多數認知任務上,大致與一位中位水準的人類同等能幹。" } },
      { term: { en: "ASI", zh: "ASI(人工超智慧)" },
        def: { en: "Superhuman general ability across virtually all domains, exceeding large human-expert collectives.",
               zh: "在幾乎所有領域具備超人類的通用能力,超越大型人類專家集體。" } },
      { term: { en: "UAI (Universal AI)", zh: "UAI(通用人工智慧 / 理論)" },
        def: { en: "The theoretical endpoint of the intelligence continuum, formalised by the AIXI agent.",
               zh: "智慧連續光譜的理論終點,由 AIXI 代理形式化。" } },
      { term: { en: "AIXI", zh: "AIXI" },
        def: { en: "A formal, incomputable agent that maximises the Legg-Hutter score — the upper bound on intelligence.",
               zh: "一個形式化、不可計算的代理,最大化 Legg-Hutter 分數 —— 智慧的上界。" } },
      { term: { en: "Legg-Hutter score", zh: "Legg-Hutter 分數" },
        def: { en: "Average performance across all computable tasks, weighting simpler (lower-complexity) tasks more.",
               zh: "在所有可計算任務上的平均表現,較簡單(複雜度較低)的任務權重較高。" } },
      { term: { en: "Effective compute", zh: "有效算力" },
        def: { en: "Compute scaled by algorithmic efficiency; has grown roughly 10× per year.",
               zh: "經演算法效率加權後的算力;每年約成長 10×。" } },
      { term: { en: "Recursive self-improvement (RSI)", zh: "遞迴自我改進(RSI)" },
        def: { en: "AI improving AI in a compounding feedback loop.", zh: "AI 改進 AI,形成複利式回饋迴圈。" } },
      { term: { en: "Genotypic RSI", zh: "基因型 RSI" },
        def: { en: "Self-modification of code and model architecture.", zh: "自我修改程式碼與模型架構。" } },
      { term: { en: "Memetic RSI", zh: "迷因型 RSI" },
        def: { en: "Improvement via better data — synthetic data, distillation, 'thinking' models.", zh: "透過更好的資料來改進 —— 合成資料、蒸餾、『思考』模型。" } },
      { term: { en: "Sociogenic RSI", zh: "社會型 RSI" },
        def: { en: "Improvement via cooperation, specialisation and division of labour.", zh: "透過協作、專精與分工來改進。" } },
      { term: { en: "Scaling laws", zh: "擴張定律" },
        def: { en: "Empirical relationships predicting capability from compute, data and model size.", zh: "由算力、資料與模型規模預測能力的經驗關係。" } },
      { term: { en: "Benchmark stitching", zh: "基準拼接" },
        def: { en: "Combining heterogeneous benchmarks to extrapolate capabilities more soundly.", zh: "結合異質基準,以更穩健地外推能力。" } },
      { term: { en: "Exponential growth", zh: "指數成長" },
        def: { en: "Growth by a constant multiplicative factor each period.", zh: "每期以固定倍率成長。" } },
      { term: { en: "Hyperbolic growth", zh: "雙曲線成長" },
        def: { en: "Growth whose rate increases with size, reaching infinity in finite time.", zh: "成長率隨規模上升,在有限時間內趨於無限。" } },
      { term: { en: "Singularity", zh: "奇異點" },
        def: { en: "The point of runaway, possibly infinite, AI-driven growth.", zh: "AI 驅動之失控(可能無限)成長的臨界點。" } },
      { term: { en: "Embodiment factor", zh: "體現因子" },
        def: { en: "Ratio of internal processing to I/O bandwidth; high in humans, low in machines.", zh: "內部處理量與輸入輸出頻寬之比;人類高、機器低。" } },
      { term: { en: "Kolmogorov complexity", zh: "柯氏複雜度" },
        def: { en: "The length of the shortest program that produces a given object.", zh: "能產生某給定物件之最短程式的長度。" } },
      { term: { en: "Group agency", zh: "群體能動性" },
        def: { en: "Agent-like behaviour emerging from a coordinated collective of agents.", zh: "從協調的代理集體中湧現的類代理行為。" } },
      { term: { en: "Test-time / inference scaling", zh: "推論時擴張" },
        def: { en: "Spending more compute at inference ('thinking') to improve results.", zh: "在推論時投入更多算力(『思考』)以提升結果。" } }
    ]
  },

  /* ===================== FLASHCARDS · custom ===================== */
  {
    slug: "flashcards", layout: "flashcards", icon: "style",
    eyebrow: { en: "Study · Flashcards", zh: "複習 · 字卡" },
    title:    { en: "Flashcards", zh: "字卡" },
    subtitle: { en: "Tap a card to flip. Step through the core ideas of the report.", zh: "點卡片翻面。逐張複習報告的核心概念。" },
    cards: [
      { front: { en: "AGI", zh: "AGI" },
        back: { en: "Human-level AI — as capable as a single median human across most cognitive tasks.", zh: "人類等級 AI —— 在多數認知任務上與一位中位水準人類同等能幹。" } },
      { front: { en: "ASI", zh: "ASI" },
        back: { en: "Superhuman general ability across virtually all domains; beats large expert collectives.", zh: "在幾乎所有領域具超人類通用能力;勝過大型專家集體。" } },
      { front: { en: "Legg-Hutter score", zh: "Legg-Hutter 分數" },
        back: { en: "Average performance over all computable tasks — makes intelligence a continuum.", zh: "在所有可計算任務上的平均表現 —— 讓智慧成為連續光譜。" } },
      { front: { en: "AIXI", zh: "AIXI" },
        back: { en: "The incomputable ideal agent that maximises that score — the upper bound of intelligence.", zh: "最大化該分數的不可計算理想代理 —— 智慧的上界。" } },
      { front: { en: "Effective compute", zh: "有效算力" },
        back: { en: "Compute × algorithmic efficiency; grows ~10× per year.", zh: "算力 × 演算法效率;每年約成長 10×。" } },
      { front: { en: "The four pathways", zh: "四條路徑" },
        back: { en: "Scaling · Paradigm shifts · Recursive improvement · Multi-agent group agency.", zh: "擴張 · 範式轉移 · 遞迴改進 · 多代理群體能動性。" } },
      { front: { en: "Recursive self-improvement", zh: "遞迴自我改進" },
        back: { en: "AI speeding up AI research — a compounding feedback loop.", zh: "AI 加速 AI 研究 —— 複利式回饋迴圈。" } },
      { front: { en: "Genotypic · Memetic · Sociogenic", zh: "基因型 · 迷因型 · 社會型" },
        back: { en: "Self-improvement of code · of data · of cooperation.", zh: "對程式碼 · 對資料 · 對協作的自我改進。" } },
      { front: { en: "The data wall", zh: "資料牆" },
        back: { en: "Running out of high-quality training data — maybe solved by self-generated data.", zh: "高品質訓練資料用盡 —— 或可用自我產生的資料解決。" } },
      { front: { en: "Hyperbolic growth", zh: "雙曲線成長" },
        back: { en: "Growth rate rises with size → a singularity in finite time.", zh: "成長率隨規模上升 → 有限時間內出現奇異點。" } },
      { front: { en: "The abstraction barrier", zh: "抽象障壁" },
        back: { en: "Can low-embodiment digital minds form the abstractions needed to go further?", zh: "低體現因子的數位心智,能否形成繼續前進所需的抽象?" } },
      { front: { en: "Hard limits of ASI", zh: "ASI 的硬限制" },
        back: { en: "Physics, P vs NP, Gödel — superintelligence is not omnipotence.", zh: "物理、P 對 NP、哥德爾 —— 超智慧不等於全能。" } }
    ]
  },

  /* ===================== QUIZ · custom ===================== */
  {
    slug: "quiz", layout: "quiz", icon: "quiz",
    eyebrow: { en: "Check · Quiz", zh: "測驗 · 隨堂" },
    title:    { en: "Quick comprehension check", zh: "快速理解測驗" },
    subtitle: { en: "Seven questions on the report's core ideas. Instant feedback; your score lives only in this session.", zh: "七道關於報告核心概念的題目。即時回饋;分數只存在於本次瀏覽。" },
    questions: [
      { q: { en: "How does the report define ASI?", zh: "報告如何定義 ASI?" },
        options: [ { en: "A single model bigger than today's largest", zh: "比今日最大模型更大的單一模型" },
                   { en: "Superhuman general ability exceeding large human-expert collectives", zh: "超越大型人類專家集體的超人類通用能力" },
                   { en: "Any system that is superhuman at one task", zh: "在某一項任務上超人類的任何系統" },
                   { en: "A robot with a human-like body", zh: "擁有類人身體的機器人" } ],
        answer: 1,
        explain: { en: "ASI is general superhuman ability across virtually all domains, set above large expert collectives — narrow systems like AlphaFold don't count.",
                   zh: "ASI 是橫跨幾乎所有領域的通用超人類能力,門檻設在大型專家集體之上 —— 像 AlphaFold 這類狹窄系統不算。" } },
      { q: { en: "Roughly how fast has effective compute been growing?", zh: "有效算力大約以多快的速度成長?" },
        options: [ { en: "About 2× per year", zh: "每年約 2×" },
                   { en: "About 10× per year (an order of magnitude)", zh: "每年約 10×(一個數量級)" },
                   { en: "About 100× per year", zh: "每年約 100×" },
                   { en: "It has stopped growing", zh: "已停止成長" } ],
        answer: 1,
        explain: { en: "~10×/year ≈ Moore's law 1.5× × investment 2.5× × algorithmic efficiency ~3×.",
                   zh: "每年約 10× ≈ 摩爾定律 1.5× × 投資 2.5× × 演算法效率約 3×。" } },
      { q: { en: "Which is NOT one of the four pathways to ASI?", zh: "下列何者不是通往 ASI 的四條路徑之一?" },
        options: [ { en: "Scaling compute, models & data", zh: "擴張算力、模型與資料" },
                   { en: "Recursive self-improvement", zh: "遞迴自我改進" },
                   { en: "Quantum teleportation of minds", zh: "心智的量子傳送" },
                   { en: "Multi-agent group agency", zh: "多代理群體能動性" } ],
        answer: 2,
        explain: { en: "The four pathways are scaling, algorithmic paradigm shifts, recursive self-improvement, and multi-agent group agency.",
                   zh: "四條路徑是:擴張、演算法範式轉移、遞迴自我改進,以及多代理群體能動性。" } },
      { q: { en: "The three flavours of recursive self-improvement are…", zh: "遞迴自我改進的三種型態是…" },
        options: [ { en: "Genotypic, memetic, sociogenic", zh: "基因型、迷因型、社會型" },
                   { en: "Hardware, software, firmware", zh: "硬體、軟體、韌體" },
                   { en: "Fast, medium, slow", zh: "快、中、慢" },
                   { en: "Local, global, hybrid", zh: "區域、全域、混合" } ],
        answer: 0,
        explain: { en: "They map to genetic, cultural and social evolution: improving code/architecture, data/knowledge, and cooperation.",
                   zh: "它們對應基因、文化與社會演化:分別改進程式碼/架構、資料/知識,以及協作。" } },
      { q: { en: "What is the Legg-Hutter score?", zh: "Legg-Hutter 分數是什麼?" },
        options: [ { en: "A public benchmark leaderboard rank", zh: "公開基準排行榜上的名次" },
                   { en: "Average performance across all computable tasks", zh: "在所有可計算任務上的平均表現" },
                   { en: "GPU FLOPs per dollar", zh: "每美元的 GPU 浮點運算量" },
                   { en: "A model safety rating", zh: "模型的安全評級" } ],
        answer: 1,
        explain: { en: "It formalises intelligence as a continuum, so no sharp AGI/ASI threshold is needed.",
                   zh: "它把智慧形式化為連續光譜,因此不需要明確的 AGI/ASI 界線。" } },
      { q: { en: "Which bottleneck is a choice rather than a hard constraint?", zh: "哪一個瓶頸是選擇,而非硬性限制?" },
        options: [ { en: "The data wall", zh: "資料牆" },
                   { en: "Physical & fundamental limits", zh: "物理與基本極限" },
                   { en: "Deliberate slowdown", zh: "刻意放緩" },
                   { en: "The abstraction barrier", zh: "抽象障壁" } ],
        answer: 2,
        explain: { en: "Regulation- or safety-driven slowdown is deliberate; the others are constraints rather than decisions.",
                   zh: "由監管或安全驅動的放緩是刻意的;其他則是限制,而非決定。" } },
      { q: { en: "According to the report, an ASI would…", zh: "根據報告,ASI 會…" },
        options: [ { en: "Be omnipotent", zh: "全能" },
                   { en: "Be certain to cure ageing", zh: "必定能治癒老化" },
                   { en: "Still face hard limits like physics and Gödel", zh: "仍受物理與哥德爾等硬限制約束" },
                   { en: "Violate P ≠ NP", zh: "違反 P ≠ NP" } ],
        answer: 2,
        explain: { en: "Superintelligence is extraordinarily capable but still bounded by physics, computational complexity and logic.",
                   zh: "超智慧極為強大,但仍受物理、計算複雜度與邏輯的約束。" } }
    ]
  }
];
