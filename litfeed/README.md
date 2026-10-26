# 新刊速递 · 网页

`apps.lijinpu.com/litfeed/`。纯静态页面，数据从私有仓库 `thuljp/litfeed-data` 读取，需要在「设置」里填一个令牌（Contents: Read and write）。令牌只保存在这台设备的浏览器里。

- `index.html`：页面骨架
- `css/style.css`：样式（沿用网站首页和知识图谱的配色、字体）
- `js/data.js`：读写 GitHub（书架 `shelf.json`、检索设置 `config.json` 写回仓库，冲突时自动合并）
- `js/ai.js`：「问一问」调用 AI（和 Job Desk、语境共用 Cloudflare Worker 中转）
- `js/app.js`：本周、期刊、主题 × 方法、书架、问一问、设置六个页面

检索程序、数据格式和费用见 `Github_Apps/litfeed-data/README.md`。
