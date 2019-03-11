### Day6 異國風情資料觀測與設定

#### 內容簡介

內容說明物件、數字、陣列、陣列裡面包物件，畫面更新的差異

#### 重點整理

- 一般數字直接利用 vue 裡的 watch 來做即可

- 物件裡面只有單一物件時，可以利用 watch 來查看

- 物件裡面有許多物件的話，需要利用 deep+handler 來更新 但物件裡面新值與舊值是一樣的![](https://i.imgur.com/rWAK1g6.png) 因為指標的關係，所以指到的數字都是一樣的

- 陣列包物件需要利用@click 來傳回 index 值，來做加減

- 陣列需要利用@click 來傳回 index 值，再利用\$set 來更新畫面

#### Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>異國風情資料觀測與設定</title>
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
    .badge {
      padding: 0.25em 0.5em;
      border-radius: 50%;
      margin: 50px 10px;
    }
  </style>

  <body>
    <div id="app">
      <section>
        <div class="container ">
          <div class="title row ">
            <div class="description col-12">
              <div class="badge badge-light" @click="number++">
                {{ number }}
              </div>
            </div>
            <div class="description col-12 ">
              <div class="badge badge-light " @click="obj.num++">
                {{ obj.num }}
              </div>
            </div>
            <div class="description col-12 ">
              <div
                v-for="(item,index) in objList"
                class="badge badge-light"
                @click="objListHandler(index)"
              >
                {{ item.num }}
              </div>
            </div>
            <div class="description col-12">
              <div
                v-for="(number,index) in numberList"
                class="badge badge-light"
                @click="numberListHandler(index)"
              >
                {{ number }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.js"></script>
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

    <script>
      let data = {
        obj: {
          num: 0
        },
        objList: [{ num: 0 }, { num: 0 }, { num: 0 }],
        number: 0,
        numberList: [0, 0, 0]
      }
      let vm = new Vue({
        el: '#app',
        data: data,
        methods: {
          objListHandler(index) {
            this.objList[index].num++
          },
          numberListHandler(index) {
            // this.numberList[index]++
            this.$set(this.numberList, index, this.numberList[index] + 1)
          }
        },
        watch: {
          number(val, oldval) {
            console.log('number:', val, oldval)
          },
          //   ['obj.num'](val, oldval) {
          //     console.log('obj:', val, oldval)
          //   },
          obj: {
            handler(val, oldval) {
              console.log('obj.num:', val, oldval)
            },
            deep: true
          },
          numberList(val, oldval) {
            console.log('numberList:', val, oldval)
          },
          objList: {
            handler(val, oldval) {
              console.log('objList:', val, oldval)
            },
            deep: true
          }
        }
      })
    </script>
  </body>
</html>
```

<img src="https://i.imgur.com/yxM8E2S.png">
<hr>
<center><iframe width="560" height="315" src="https://www.youtube.com/embed/dTt7Oo9eMFw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
