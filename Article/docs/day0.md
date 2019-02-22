### 起步工具

安裝環境

- nodejs
- vscode
- chrome vue.js devtools

編輯器：Vscode

擴充：

```
cdnjs 抓取JS libraries
Vetur 開發vue 主要工具
VueHelper 針對Vue的snippet
Live Server 直接開啟local端server
Path intellisense 路徑自動補齊顯示
```

Setting:

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "emmet.triggerExpansionOnTab": true,
  "workbench.colorTheme": "One Dark Pro",
  "liveServer.settings.donotShowInfoMsg": true,
  "html.format.wrapLineLength": 120,
  "vetur.format.styleInitialIndent": true,
  "vetur.format.scriptInitialIndent": true,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.eslintIntegration": true,
  "editor.fontFamily": "Fira Code",
  "editor.fontWeight": "500",
  "editor.fontLigatures": true
}
```

設定中的"editor.fontFamily": "Fira Code" 需要安裝 <a href="https://github.com/tonsky/FiraCode">字體 </a>

<img src="https://i.imgur.com/jLKn16W.png">

#### HTML 彙整

```
   原本                   縮寫
- v-bind:                  :
- v-on:click=function()    @
- v-if="條件"
- v-model="變數"
- v-for="變數 in 資料"
```
