### Day8 家鄉通訊錄佐手作

#### 內容簡介

架 json server 來實作通訊錄，內容包含 Postman、json server、axios，Json server 開啟 server ，利用 axios 來做到前端與 json 的溝通，Postman 輔助了解 post、get、put 等等的指令

#### Postman

- Get 取的資料
- Post 新增資料
- Put 將原本資料覆蓋
- Patch 將原本資料增加進去
- Delete 刪除資料

#### 重點整理

- liveServer 取消.json 變動更新
- npm init 初始化專案
- npm i json-server 安裝 json server
- 製作資料 下面程式碼 db.json
- 設定 package.json
- npm run json 啟動 json server
- 在 mounted()載入資料配和 axios 去抓取資料
- 將 Vue 綁定畫面
- 製作取消按鈕 將 input.name 與 input.email 清空
- 送出(submitHandler)利用丟 input 裡的資料給 axios.post(網域+input 的資料)
- 刪除(deleteHandler)抓取要刪除的 index 後，給 axios.delete(網域+目標 id)
- 修改(editHandler)抓取要修改的 index 後，在利用之前所建立的送出按鈕判斷，若是修改則 axios.put(網域+id,input 的資料)

Code

liveServer.setting

```json
"liveServer.settings.port": 8080,
  "liveServer.settings.ignoreFiles": [
    ".vscode/**",
    "**/*.scss",
    "**/*.sass",
    "**/*.ts",
    "**/*.json"
  ]
```

db.json

```json
{
  "contact": [
    {
      "name": "Yu_jax",
      "email": "Yu_jax@gmail.com",
      "id": 1
    }
  ]
}
```

設定 package.json

```json
{
  "name": "12",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "json": "json-server --watch db.json --port 8886" //設定script
  },
  "author": "Yu_jax",
  "license": "MIT",
  "dependencies": {
    "json-server": "^0.14.2"
  }
}
```

Html

```Html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>家鄉通訊錄佐手作 API #1</title>
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
      font-size: 40px;
    }

    body {
      background-color: mediumseagreen;
    }
    .align-items-center {
      height: 100vh;
    }
    .col-md-auto {
      padding: 0 0;
    }
    .justify-content-center {
      top: -200px;
      width: 900px;
      margin: auto;
    }
  </style>
  <body>
    <div id="app">
      <section v-if="loading">
        Loading....
      </section>
      <section v-else>
        <div class="container  ">
          <div class="row align-items-center">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="name"
                v-model.trim="input.name"
              />
              <input
                type="text"
                class="form-control"
                placeholder="email"
                v-model.trim="input.email"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-warning"
                  type="button"
                  @click="submitHandler"
                >
                  送出
                </button>
                <button
                  class="btn btn-warning"
                  type="button"
                  @click="cancelHandler"
                >
                  取消
                </button>
              </div>
            </div>
            <div class="justify-content-center">
              <li class="list-group-item" v-for="(item,index) in contacts">
                <span class="badge badge-pill badge-primary number col-sm-1"
                  >{{ item.id }}
                </span>
                <span class="badge badge-warning name col-sm-2"
                  >{{ item.name }}
                </span>
                <a href="'mailto:'+item.email" class="col-sm-4"
                  >{{ item.email }}
                </a>
                <span
                  class="badge badge-danger"
                  class="col-sm-1"
                  @click="editHandler(index)"
                  >修改</span
                >
                <span
                  class="badge badge-dark"
                  class="col-sm-1"
                  @click="deleteHandler(index)"
                  >刪除</span
                >
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>

    <script>
      ;(function(Vue) {
        new Vue({
          el: '#app',
          data: {
            loading: false,
            contacts: [],
            editIndex: null,
            input: {
              name: '',
              email: ''
            }
          },
          methods: {
            submitHandler() {
              let { name, email } = this.input
              if (!name || !email) return
              this.loading = true
              if (this.editIndex == null) {
                axios
                  .post('http://localhost:8886/contact', this.input)
                  .then(res => {
                    this.contacts.push(res.data)
                    this.loading = false
                    this.cancelHandler()
                  })
                  .catch(err => {
                    console.log(err)
                  })
              } else {
                let id = this.contacts[this.editIndex].id
                axios
                  .put('http://localhost:8886/contact/' + id, this.input)
                  .then(res => {
                    this.contacts[this.editIndex] = res.data
                    this.loading = false
                    this.cancelHandler()
                  })
                  .catch(err => {
                    console.log(err)
                  })
              }
            },
            cancelHandler() {
              this.input.name = ''
              this.input.email = ''
              this.editIndex = null
            },
            deleteHandler(index) {
              let target = this.contacts[index]
              if (confirm(`是否刪除 ${target.name}?`)) {
                this.loading = true
                axios
                  .delete('http://localhost:8886/contact/' + target.id)
                  .then(res => {
                    this.contacts.splice(index, 1)
                    this.cancelHandler()
                    this.loading = false
                  })
                  .catch(err => {
                    console.log(err)
                  })
              }
            },
            editHandler(index) {
              let { name, email } = this.contacts[index]
              // this.input.name = name
              // this.input.email = email
              this.editIndex = index
              this.input = {
                name,
                email
              }
            }
          },
          mounted() {
            this.loading = true
            axios
              .get('http://localhost:8886/contact')
              .then(res => {
                this.contacts = res.data
                this.loading = false
              })
              .catch(err => {
                console.log(err)
              })
          }
        })
      })(Vue)
    </script>
  </body>
</html>

```

<img src="https://i.imgur.com/2tkKrT9.png">
<hr>
<center><iframe width="560" height="315" src="https://www.youtube.com/embed/qKyR6zNh0hQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/UFARnc4GSW4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>
