(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{184:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("介紹模組化 template 以及子組件更新")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Vue CLI 已經使用單檔模組化了")]),t._v(" "),a("p",[t._v("HelloWorld 就是使用單檔模組化寫的 透過JS引進來")]),t._v(" "),t._m(5),a("p",[t._v("data改成function形式 並給予資料")]),t._v(" "),t._m(6),a("p",[t._v("資料從外部進來")]),t._v(" "),t._m(7),a("p",[t._v("Css 局部修改(scoped)")]),t._v(" "),t._m(8),a("p",[t._v("子組件更新(.sync)")]),t._v(" "),a("p",[t._v('set(val) {\n//   console.log(val);\nthis.$emit("update:text", val);\n}\n'),a("InputComponent",{attrs:{text:t.title},on:{"update:text":function(s){t.title=s}}}),t._v("\n利用vue內建的emit(通知畫面更新)與sync(畫面更新)，就可以更新資料")],1),t._v(" "),a("center",[a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/J08Vd5842BA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"day-10-科學單檔模組化料理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#day-10-科學單檔模組化料理","aria-hidden":"true"}},[this._v("#")]),this._v(" Day 10 科學單檔模組化料理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"內容簡介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#內容簡介","aria-hidden":"true"}},[this._v("#")]),this._v(" 內容簡介")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"重點整理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重點整理","aria-hidden":"true"}},[this._v("#")]),this._v(" 重點整理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("當檔模組化需要template、script、style")]),this._v(" "),s("li",[this._v("data需要改成function形式 並給予資料")]),this._v(" "),s("li",[this._v("子組件更新，利用vue內建的emit(通知畫面更新)與sync(畫面更新)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"單檔模組化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#單檔模組化","aria-hidden":"true"}},[this._v("#")]),this._v(" 單檔模組化")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HelloWorld msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Welcome to Your Vue.js App"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Hellowrd標籤")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("InputComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//InputComponent標籤")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HelloWorld "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./components/HelloWorld.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入HelloWorld 模組")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" InputComponent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./components/InputComponent/index.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncomponents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//告訴vue這個component")]),t._v("\n    HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    InputComponent\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Yu_jax"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("<style scoped>\n  h1.TitleComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orangered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n</style>\n")])])])}],!1,null,null,null);s.default=n.exports}}]);