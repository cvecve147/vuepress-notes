### Day4 峰峰相連互動式資料表單

#### 內容簡介

將資料輸入後，利用上方選單選擇後顯示相對的資料。

#### 重點整理

- input 為選擇的上方選單資料
- typeList 利用 forEach 來篩選資料，若為此類型則丟進 obj 裡面
- titleList 若不為空值呼叫 typeList
- content 若不為空值 呼叫 titleList

Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>峰峰相連互動式資料表單</title>
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
      padding: 0;
      text-align: center;
    }

    body {
      background-color: mediumseagreen;
    }
    .container {
      height: 500px;
    }

    .row {
      height: 300px;
    }
    .right {
      width: 200px;
    }
    .left {
      width: 300px;
    }
  </style>
  <body>
    <div class="container" id="app">
      <section>
        <div class="row align-items-center justify-content-center">
          <select class="col-4" v-model="input.type">
            <option :value="null">請選擇</option>
            <option v-for="item in typeList.sort">{{ item }}</option>
          </select>
          <select class="col-4" v-model="input.title">
            <option :value="null">請選擇</option>
            <option v-for="item in titleList.sort">{{ item }}</option>
          </select>
          <div class="w-100"></div>
          <div class="description">
            <div
              class="menutItem"
              style="transform:scale3d(1.5,1.5,1)"
              v-if="content"
            >
              <span class="number alert-primary"> {{ content.index + 1 }} </span
              ><a :href="content.link" class="title alert-warning">
                {{ content.link }}
              </a>
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
    <script src="day8.js"></script>
  </body>
</html>
```

```javascript
let data = {
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
  input: {
    type: null,
    title: null
  }
}
new Vue({
  el: '#app',
  data: data,
  computed: {
    typeList() {
      let obj = {
        sort: [],
        map: {}
      }
      this.menu.forEach(({ type, title, link }, index) => {
        if (!obj.map[type]) {
          obj.sort.push(type)
          obj.map[type] = {
            sort: [],
            map: {}
          }
        }
        obj.map[type].sort.push(title)
        obj.map[type].map[title] = { index, link }
      })
      return obj
    },
    titleList() {
      this.input.title = null
      if (this.input.type) {
        return this.typeList.map[this.input.type]
      } else {
        return []
      }
    },
    content() {
      if (this.input.title) {
        return this.titleList.map[this.input.title]
      } else {
        return null
      }
    }
  }
})
```

<img src="https://i.imgur.com/b9lFYC9.png">
<img src="https://i.imgur.com/au34c6g.png">
<img src="https://i.imgur.com/EYYV0uN.png">

<hr>
<center><iframe width="560" height="315" src="https://www.youtube.com/embed/35sj7FLUVqA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
