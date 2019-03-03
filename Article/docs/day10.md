### Day 10 科學單檔模組化料理

#### 內容簡介

介紹模組化 template 以及子組件更新

#### 重點整理
- 當檔模組化需要template、script、style
- data需要改成function形式 並給予資料
- 子組件更新，利用vue內建的emit(通知畫面更新)與sync(畫面更新)

#### 單檔模組化
Vue CLI 已經使用單檔模組化了

HelloWorld 就是使用單檔模組化寫的 透過JS引進來

```javascript
<HelloWorld msg="Welcome to Your Vue.js App" />
//Hellowrd標籤
<InputComponent /> //InputComponent標籤
import HelloWorld from "./components/HelloWorld.vue";  //引入HelloWorld 模組
import InputComponent from "./components/InputComponent/index.vue";
components: {        //告訴vue這個component
    HelloWorld,
    InputComponent
}
```

data改成function形式 並給予資料
```javascript
data() {
  return {
    title: "Hello Yu_jax"
  };
}
```
資料從外部進來
```javascript
props: {
  title: {
    type: String,
    required: true
  }
}
```
Css 局部修改(scoped)
```css
<style scoped>
  h1.TitleComponent {
    color: orangered;
  }
</style>
```

子組件更新(.sync)

set(val) {
  //   console.log(val);
  this.$emit("update:text", val);
}
<InputComponent :text.sync="title" />
利用vue內建的emit(通知畫面更新)與sync(畫面更新)，就可以更新資料

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/J08Vd5842BA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>