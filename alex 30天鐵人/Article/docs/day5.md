### Day5 天然 CSS 過場佐 jQuery 動畫

#### 內容簡介

利用之前做的古早味事件燉畫面綁定的 HTML 與 vue 加以延伸製作動畫

#### 重點整理

- Vue 動畫分為 v-enter->v-enter-active->v-enter-to->v-leave->v-leave-active->v-leave-to
  <img src="https://i.imgur.com/zQeVfjD.png">

- 將資料部分套上 transition

Code

```html
<transition name="fade" mode="out-in" appear>
  <!--name為動畫名子(CSS中命名) mode out in 指的是先做出去的動畫後在近來 appear是第一個出現時也要動畫  -->
  <div
    class="menuItem col-sm"
    v-for="(item,i) in menu"
    v-if="index===i"
    :key="item.title"
  >
    <!-- :key 要讓他每個資料分辨出來 才可使動畫繼續-->
    <span class="number badge badge-secondary">{{ i + 1 }}</span>
    <span class="Type badge badge-light">{{ item.type }}</span>
    <a :href="item.link" class="title badge badge-dark " target="vue-iron"
      >{{ item.title }}</a
    >
  </div>
</transition>
```

```css
/* fade為動畫名稱 一開始與離開的opacity(透明度) 皆為0 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* 進入與離開時的opacity(透明度) 皆為1 並且動畫時間為1s */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
```

<img src="https://i.imgur.com/TuYGjrd.png">
<img src="https://i.imgur.com/oNJC6m8.png">
<img src="https://i.imgur.com/gq78t27.png">
<hr>
<center><iframe width="560" height="315" src="https://www.youtube.com/embed/hqfRJsQ2vxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
