### Day7 有機發酵生命週期

#### 重點整理

- beforeCreate：執行初始化物件後，資料與事件設定前
- created：資料、事件、屬性方法的計算等初始化完成
- beforeMount：DOM 渲染完成，還沒加載到畫面
- mounted：渲染完成的內容取代畫面原本指定的 el
- beforeUpdate：資料更新但是畫面尚未重新渲染
- updated：重新渲染更新畫面
- activated：物件銷毀前，最後一不可完整使用物件的階段
- deactivated：物件銷毀，同時也會取消事件綁定與銷毀子物件
- beforeDestroy：keep-alive 組件啟用
- destroyed：keep-alive 組件停用

::: danger
引用
<a href="https://floraya.gitbooks.io/vue-2-0/content/vuejs-chang-shi-yong-shu-xing.html">https://floraya.gitbooks.io/vue-2-0/content/vuejs-chang-shi-yong-shu-xing.html</a>
:::


<hr>
<center><iframe width="560" height="315" src="https://www.youtube.com/embed/_Mx_YW8Nd3A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
```
