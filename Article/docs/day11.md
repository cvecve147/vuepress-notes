### Day11 Vue Router

#### 內容簡介
介紹Vue Router、巢狀式Router與路由參數

#### 重點整理
- Vue Router 載入方式有兩種(一次載入與多次載入)，依專案大小而定，越大專案越需要多次載入
- 設定子路由在父路由底下加上children
- router-link :to 綁定router的name來做使用 可以減少路徑的長度以及可以即時變更
- vue給了query以及params來更新頁面 <img src="https://i.imgur.com/XVH343B.png">
- route並不會重新整理頁面，所以需要利用watch來做更新


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

#### 進階巢狀式路由
子路由：在path 下面 + children
```javascript
{
  path: "/Jax",
  name: "Jax",
  component: () =>
    import(/* webpackChunkName: "Jax" */ "./views/Yu_jax.vue"),
  children: [
    {
      path: "info",
      name: "Jax-info",
      component: () =>
        import(/* webpackChunkName: "Jax" */ "./views/Info.vue")
    },
    {
      path: "youtube",
      name: "Jax-youtube",
      component: () =>
        import(/* webpackChunkName: "Jax" */ "./views/Youtube.vue")
    }
  ]
}
```
再利用router-view讓它顯示並加上連結
```html
<template>
  <div>
    <h1>Hello Jax</h1>
    <div>
      <router-link :to="{name:'Jax-info'}">Info</router-link>|
      <router-link :to="{name:'Jax-youtube'}">Youtube</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>
```
<img src="https://i.imgur.com/dpye33V.png">

#### 設定路由參數
利用vue給的$route.params來處理頁面切換
```javascript
mounted() {
  let day = parseInt(this.$route.params.day) - 1;
  this.day = day;
  document.addEventListener("keyup", this.changeHandler);
},
watch: {
  $route() {
    let day = parseInt(this.$route.params.day) - 1;
    this.day = day;
  }
}
```
但是因為route的關係他並不會切換畫面，所以利用watch來做更新

route.js設定
```javascript
{
  path: "/Iron",
  redirect: "/Iron/1"
},
{
  path: "/Iron/:day",
  component: () =>
    import(/* webpackChunkName: "Jax" */ "./views/Iron/index.vue")
}
```
當不給參數時，直接轉到/Iron/1

<center>
<img src="https://i.imgur.com/qeY1thx.png">
<img src="https://i.imgur.com/9pK5JpL.png">
</center>





<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/75vOecdxxyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/MiSQe68PNEs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/CbRRn9Zqm40" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>