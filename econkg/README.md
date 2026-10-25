# 经济学知识图谱 · 网页

`apps.lijinpu.com/econkg/`。纯静态页面，数据从私有仓库 `thuljp/econkg-data` 的 `site-data/` 和 `data/extractions/` 读取，需要在「设置」里填一个只读令牌。令牌只保存在这台设备的浏览器里。

- `index.html`：页面骨架
- `css/style.css`：样式（沿用网站首页的配色和字体）
- `js/data.js`：读数据（公开模式读旁边的 `data/`，私有模式用令牌读 GitHub）
- `js/app.js`：图谱、模式卡片、论文、演化、方法与质量、设置六个页面
- `js/vendor/cytoscape.min.js`：画网络图的库（Cytoscape.js 3.33.1，MIT 许可），放在本地，国内网络也能打开

流水线、数据和使用说明见 `Github_Apps/econkg-data/README.md`。
