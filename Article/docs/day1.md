### Day1 古早味事件燉畫面綁定

#### 內容簡介

將資料放在一快，並且可以利用箭頭切換顯示資料。

#### HTML 指令

```
   原本                   縮寫
- v-bind:                  :
- v-on:click=function()    @
- v-if="條件"
```

設定資料(data)

```javascript
let data ={        //資料如果很多 利用變數來儲存
      .
      .
      .
}
let vm=new Vue({
  el:"#app",  //綁定區域
  data:data  //綁定資料
})

```

設定方法(methods)

```javascript
changeIndex(change) {
  let length = this.menu.length
  this.index = (this.index + change + length) % length
}
```

#### 重點整理

- 資料綁定
- 設定方法

Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>古早味事件燉畫面綁定</title>
  </head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
    integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
    crossorigin="anonymous"
  />
  <style>
    * {
      margin: 0 0;
      padding: 0%;
      text-align: center;
    }
    body {
      background-color: lightgreen;
    }
    img {
      text-align: center;
    }
    .badge {
      font-size: 30px;
    }
    .btn {
      display: inline;
      font-size: 30px;
    }
    .menuItem {
      display: inline;
      font-size: 30px;
      top: 10px;
    }
  </style>
  <body>
    <div id="app">
      <img :src="src" alt="" class="logo" /> <br />
      <br />
      <h1 class="badge badge-warning">{{ title }}</h1>
      <br />
      <br />
      <div class="description">
        <!-- 如果不是第一天就秀出來 -->
        <!-- index!=0- -->
        <a
          class="arrow_left btn btn-primary"
          @click="changeIndex(-1) "
          v-if="index != 0"
          ><</a
        >
        <div class="menuItem">
          <span class="number badge badge-secondary">{{ index + 1 }}</span>
          <span class="Type badge badge-light"
            >{{ this.menu[this.index].type }}</span
          >
          <a
            :href="this.menu[this.index].link"
            class="title badge badge-dark"
            target="vue-iron"
            >{{ this.menu[this.index].title }}</a
          >
        </div>
        <!-- 如果不是最後一天就秀出來 -->
        <!-- index!=6 -->
        <a
          class="arrow_right btn btn-primary"
          @click="changeIndex(1)"
          v-if="index !=  this.menu.length -1"
          >></a
        >
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.js"></script>

    <script>
      let data = {
        title: '古早味事件燉畫面綁定',
        src: '/04 古早味事件燉畫面綁定/img/vue-newsletter.png',
        index: 0,
        menu: [
          {
            type: '1',
            title: '1-1',
            link: 'javascript:;'
          },
          {
            type: '1',
            title: '1-2',
            link: 'javascript:;'
          },
          {
            type: '1',
            title: '1-3',
            link: 'javascript:;'
          },
          {
            type: '1',
            title: '1-4',
            link: 'javascript:;'
          },
          {
            type: '1',
            title: '1-5',
            link: 'javascript:;'
          },

          {
            type: '1',
            title: '1-6',
            link: 'javascript:;'
          },
          {
            type: '1',
            title: '1-7',
            link: 'javascript:;'
          }
        ]
      }
      let vm = new Vue({
        el: '#app',
        data: data,
        methods: {
          changeIndex(change) {
            let length = this.menu.length
            this.index = (this.index + change + length) % length
          }
        }
      })
    </script>
  </body>
</html>
```

<img src="https://i.imgur.com/7rEORlC.png">

<hr />

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/VW4RZSKqIEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/68ItsYcqjHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
