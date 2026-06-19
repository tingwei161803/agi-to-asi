# 從 AGI 到 ASI（From AGI to ASI）

> 把 Google DeepMind 的研究報告《From AGI to ASI》整理成一個可瀏覽、可互動、雙語的閱讀導覽。

這個網站把論文「人類等級 AGI 之後,AI 會如何繼續發展」的核心內容,拆解成多個面向逐頁呈現:四條通往超智慧的技術路徑、七大潛在瓶頸、數位心智的優勢、成長動態、遞迴自我改進的分類,以及一份開放研究議程;另附詞彙表、字卡與隨堂測驗幫助理解。純靜態、零建置,中英文一鍵切換,深淺色皆可。

---

## 🔗 線上版 / Live

| | |
|---|---|
| 🌐 網站 | <https://agi-to-asi.peteraim.com/> |

> 直接點進去就能用,無需安裝。每個主題都是獨立頁面(例如 `https://agi-to-asi.peteraim.com/pathways.html`),卡片詳情也可深連結(例如 `bottlenecks.html#data-wall`)。

---

## ✨ 功能特色

- 🌏 **雙語全頁切換** — 中文 / English 一鍵切換,整站(含導覽、卡片、詳情、靜態文案)同步重繪
- 🌗 **深色 / 淺色模式** — 手動切換,並記憶你的選擇
- 🧭 **多頁面導覽** — 11 個主題各有獨立 URL,共用同一套導覽列、語言與主題
- 🔍 **即時搜尋** — 路徑、瓶頸、詞彙表都可輸入關鍵字立即過濾
- 🏷️ **分類篩選** — 瓶頸頁可依類型(資源 / 方法 / 外部 / 物理)篩選
- 🃏 **字卡翻面** — 點擊翻面、方向鍵切換,複習核心術語
- ✅ **隨堂測驗** — 多選題即時 ✅ / ❌ 回饋與計分(僅存在於當次瀏覽)
- 🔗 **深連結** — 卡片詳情有專屬 `#<slug>`,可直接分享
- 📱 **響應式設計** — 手機、平板、桌機皆適配
- ⚡ **純靜態** — 無後端、無建置工具、載入快

---

## 📂 內容結構 / 資料來源

本站內容整理自 **《From AGI to ASI》(Google DeepMind,arXiv:2606.12683v1,2026)**,作者為 Genewein、Franklin、Lerchner、Orseau、Albanie、Bales、Wyeth、Chan、Gabriel、Leibo、Dafoe、Hutter、Graepel 與 Legg。

```
agi-to-asi/
├── index.html            # 首頁(hub:總覽 + 入口卡)
├── concepts.html         # 定義:AGI / ASI / UAI(article)
├── advantages.html       # 數位心智的優勢(bento)
├── growth.html           # 成長動態(dashboard)
├── pathways.html         # 四條路徑(gallery)
├── rsi.html              # 遞迴自我改進三型態(comparison)
├── bottlenecks.html      # 七大瓶頸(gallery)
├── agenda.html           # 研究議程(kanban)
├── glossary.html         # 詞彙表(可搜尋)
├── flashcards.html       # 字卡(翻卡)
├── quiz.html             # 隨堂測驗
├── assets/
│   ├── shell.js          # 共用 chrome:appbar / 跨頁導覽 / footer / dialog
│   ├── app.js            # 版型引擎(依 data-page 選 renderer 渲染)
│   └── styles.css        # Material Design 3 + 極簡編輯 / 科技風樣式
├── data/
│   └── data.js           # 唯一資料層(SITE_META + SITE_PAGES,雙語 {en,zh})
├── 2606.12683v1.pdf      # 原始論文 PDF
├── CNAME                 # GitHub Pages 自訂網域
└── .nojekyll
```

> ⚠️ **非官方**:本網站為個人整理之非官方閱讀資源,內容摘要、翻譯與重新編排自上述論文,可能有取捨或詮釋上的差異。一切以官方論文為準:
> [arXiv:2606.12683](https://arxiv.org/abs/2606.12683) ·
> [HTML 版](https://arxiv.org/html/2606.12683v1)

---

## 🛠 本機使用

```bash
# 1. clone 專案
git clone git@github.com:tingwei161803/agi-to-asi.git
cd agi-to-asi

# 2a. 最簡單:直接開啟首頁
open index.html

# 2b. 或啟動本機伺服器(建議,跨頁導覽 / 深連結才完全正常)
uv run python -m http.server 4173
# 然後瀏覽 http://localhost:4173
```

> 本專案為純靜態網站,不需安裝任何依賴。若要跑本機伺服器,一律使用 `uv`。

---

## 📊 流量分析

本站使用 **Google Analytics 4**(GA4 property:**From AGI to ASI - GA4**)蒐集匿名的瀏覽流量數據,用於了解使用情形。GA4 程式碼會連線至 `googletagmanager.com`。若你的受眾位於對 cookie / 隱私有規範要求的地區(如 GDPR / CCPA),請自行評估是否需要加上 cookie 同意橫幅或調整設定。

---

## 📝 聲明 / License

- 本站為非官方整理,報告內容著作權歸原作者與 **Google DeepMind** 所有(© 2026 Google)。
- 本網站的程式碼以 **MIT** 授權釋出;整理後的中英文文字內容僅供學習與非商業參考。
- 如為權利人且希望調整或移除內容,請開 issue 聯絡。
