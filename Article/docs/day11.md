### Day11 清燉嫩煮百頁路由(未完成)

#### 內容簡介
介紹Vue Router、巢狀式Router與路由參數

#### 重點整理
- Vue Router 載入方式有兩種(一次載入與多次載入)，依專案大小而定，越大專案越需要多次載入
- 
- 

#### 安裝與介紹
在Vue ui安裝Vue Router

<img src="https://i.imgur.com/21jg6v0.png">

安裝之後會有views資料夾、router.js等等的
也修改了原先的App.vue、main.js等等的檔案

router.js
```javascript
{
  path: "/",
  name: "home",
  component: Home
},
{
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "./views/About.vue")
}
```
範本提供兩種載入方式
* 第一種home是第一次(首頁)進入網頁時，直接載入home.vue
* 第二種about是當你點擊時，才載入about.vue

當我點擊about時，Vue給了兩個class來標記
* router-link-active 表示當前頁面
* router-link-exact-active 表示經過頁面
```html
class="router-link-exact-active router-link-active"
```
 
<img src="https://i.imgur.com/tQK6fWT.png">

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/75vOecdxxyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>