### Day3 使用者輸入焗列表呈現

#### 內容簡介

將資料輸入之後，利用上方輸入列與選單，進行篩選並顯示。

#### HTML 指令

```
   原本                   縮寫
- v-for="變數 in 資料"
```

#### 重點整理

- 新增 computed 來處理搜尋結果
- toLowerCase() 將文字轉乘小寫
- indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
- 如果有在文字中 就會顯示文字位子 若沒有 顯示-1

Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>期間限定篩選佐資料轉換</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
      integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
      crossorigin="anonymous"
    />
  </head>
  <style>
    * {
      margin: 0 0;
      padding: 0%;
      text-align: center;
    }
    body {
      background-color: mediumseagreen;
    }
    .align-items-center {
      height: 100vh;
    }
    .container {
      margin: auto;
    }
    .text {
      display: inline;
    }
  </style>
  <body>
    <div id="app">
      <section class="row align-items-center">
        <div class="container">
          <!-- <select v-model="input.type">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input
            type="text"
            v-model.trim="input.title"
            @keyup.enter="inputHandler"
          /> -->
          <div>
            <select v-model="input2.type">
              <option value="全部">全部</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input type="text" v-model.trim="input2.title" @keyup.enter="" />
          </div>
          <div class="menu alert alert-success row">
            <div class="menuItem col-6" v-for="(item,index) in titleMenu">
              <span class="number btn btn-secondary">{{ index + 1 }}</span>
              <span class="type btn btn-warning">{{ item.type }}</span>
              <a href="javascript:;" class="title" target="vue-iron"
                >{{ item.title }}</a
              >
            </div>
          </div>
        </div>
      </section>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
      integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.js"></script>
    <script src="day7.js"></script>
  </body>
</html>
```

```javascript
let data = {
  input: {
    type: '1',
    title: ''
  },
  menu: [
    { type: '1', title: '1-1', link: 'javascript:;' },
    { type: '1', title: '1-2', link: 'javascript:;' },
    { type: '1', title: '1-3', link: 'javascript:;' },
    { type: '1', title: '1-4', link: 'javascript:;' },
    { type: '1', title: '1-5', link: 'javascript:;' },
    { type: '2', title: '2-1', link: 'javascript:;' },
    { type: '2', title: '2-2', link: 'javascript:;' },
    { type: '2', title: '2-3', link: 'javascript:;' },
    { type: '2', title: '2-4', link: 'javascript:;' },
    { type: '2', title: '2-5', link: 'javascript:;' },
    { type: '3', title: '3-1', link: 'javascript:;' },
    { type: '3', title: '3-2', link: 'javascript:;' },
    { type: '3', title: '3-3', link: 'javascript:;' },
    { type: '3', title: '3-4', link: 'javascript:;' },
    { type: '3', title: '3-5', link: 'javascript:;' },
    { type: '4', title: '4-1', link: 'javascript:;' },
    { type: '4', title: '4-2', link: 'javascript:;' },
    { type: '4', title: '4-3', link: 'javascript:;' },
    { type: '4', title: '4-4', link: 'javascript:;' },
    { type: '4', title: '4-5', link: 'javascript:;' }
  ],
  input2: {
    type: '全部',
    title: ''
  }
}
let vm = new Vue({
  el: '#app',
  data: data,
  computed: {
    typeMenu() {
      if (this.input2.type != '全部') {
        return this.menu.filter(item => {
          //item為變數 存放篩選後資料
          return item.type == this.input2.type
        })
      } else {
        return this.menu
      }
    },
    titleMenu() {
      if (this.input2.title) {
        return this.typeMenu.filter(item => {
          //item為變數 存放篩選後資料
          let content = item.title.toLowerCase()
          let keyword = this.input2.title.toLowerCase()
          return content.indexOf(keyword) != -1
        })
      } else {
        return this.typeMenu
      }
    }
  },
  methods: {
    inputHandler() {
      if (this.input.title) {
        this.menu.push({
          type: this.input.type,
          title: this.input.title,
          link: 'javascript:;'
        })
        this.input.title = ''
      }
    }
  }
})
```

<img src="https://i.imgur.com/8GTO5TF.png">
<img src="https://i.imgur.com/evPyd0t.png">
<img src="https://i.imgur.com/PEzddTS.png">

<hr>
<center><iframe width="560" height="315" src="https://www.youtube.com/embed/_Mx_YW8Nd3A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Day303Ez-bA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
