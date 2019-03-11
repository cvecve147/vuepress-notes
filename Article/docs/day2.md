### Day2 清爽表單處理佐雙向資料

#### 內容簡介

將利用變數來綁定輸入資料，並且與 Html 綁定讓使用者輸入時，可以同時變更資料。

#### HTML 指令

```
   原本                   縮寫
- v-model="變數"
```

#### 重點整理

- 資料綁定
- 設定初始資料

#### Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>清爽表單處理佐雙向資料</title>
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
      background-color: lightgreen;
    }
    #app {
      font-size: 20px;
    }
    .align-items-center {
      height: 100vh;
    }
    .alert {
      width: 500px;
      text-align: center;
    }
    .content {
      margin: auto;
    }
  </style>
  <body>
    <div class="container">
      <div class="row align-items-center">
        <div class="col"></div>
        <div class="col" id="app">
          <section>
            <div class="container">
              <div class="title ">
                <div class="input alert alert-primary">
                  {{ name }}，{{ sex }}性，年齡{{ age }}，{{ favor.length ?
                  '喜歡' : '' }} {{ favor.join('、') }}，{{ member ? '已' : '未'
                  }}成為會員
                </div>
                <div class="menu alert alert-secondary">
                  <table class="content ">
                    <tr>
                      <td class="title">姓名：</td>
                      <td><input type="text" v-model="name" /></td>
                    </tr>
                    <tr>
                      <td>性別：</td>
                      <td>
                        <input
                          type="radio"
                          value="男"
                          checked
                          v-model="sex"
                        />男
                      </td>
                      <td><input type="radio" value="女" v-model="sex" />女</td>
                    </tr>
                    <tr>
                      <td class="title">年齡：</td>
                      <td>
                        <select v-model="age">
                          <option>20 下</option>
                          <option>20~30之間</option>
                          <option>30~40之間</option>
                          <option>40以上</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td class="title">興趣：</td>
                      <td>
                        <input
                          type="checkbox"
                          v-model="favor"
                          value="code"
                          checked
                        />code
                        <input
                          type="checkbox"
                          v-model="favor"
                          value="Games"
                        />Games
                        <input type="checkbox" v-model="favor" value="JP" />JP
                      </td>
                    </tr>
                    <tr>
                      <td class="title">會員：</td>
                      <td><input type="checkbox" v-model="member" />加入</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.js"></script>
    <script src="day5.js"></script>
  </body>
</html>
```

JS

```javascript
let data = {
  name: 'Yu_jax',
  sex: '男',
  age: '20',
  favor: ['code', 'Games', 'JP'],
  member: true
}

let vm = new Vue({
  el: '#app',
  data: data
})
```

<img src="https://i.imgur.com/AtaX2yv.png">
<hr>
<center><iframe width="560" height="315" src="https://www.youtube.com/embed/OAaZ1rw2OCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
