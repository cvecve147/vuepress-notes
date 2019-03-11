### Day12 Vuex

#### 內容簡介
介紹Vuex

#### 重點整理
- Action 主要處理API同步
- Mutations 改動stats
- State 存放資料

#### 基本介紹
<img src="https://i.imgur.com/z6jlR79.png">
- Action 主要處理API同步
- Mutations 改動stats
- State 存放資料
新增vuex套件
<img src="https://i.imgur.com/veUb3ZN.png">
新增完後就有stroe.js 資料皆放在裡面

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    day: 0,
    header: {
      src: '',
      title: 'Vue test'
    },
    list: []
  },
  mutations: {
    SETDAY(state, day) {
      state.day = day
    },
    SETLIST(state, list) {
      state.list = list
    }
  },
  actions: {
    GETLIST(context, day) {
      context.commit('SETDAY', day)
      return axios.get('/list.json').then(res => {
        context.commit('SETLIST', res.data)
      })
    }
  }
})
```
並且利用axios 監聽list.json(DB)將list.json裡的資料丟進list空陣列中

資料都丟在stroe.js裡面了 所以index.vue裡面的資料會變成函示來呼叫
```javascript
computed: {
  day: {
    get() {
      return this.$store.state.day;
    },
    set(val) {
      // this.$store.state.day = val;
      this.$store.commit("SETDAY", val);
    }
  },
  header() {
    return this.$store.state.header;
  },
  list() {
    return this.$store.state.list;
  }
},
methods: {
  changeHandler(e) {
    let day = this.day;
    if (e.keyCode == 39) {
      day = day < 19 ? day + 1 : day;
    } else if (e.keyCode == 37) {
      day = day > 0 ? day - 1 : day;
    }
    // this.day = day;
    this.$router.replace({
      params: {
        day: day + 1
      }
    });
  }
},
mounted() {
  let day = parseInt(this.$route.params.day) - 1;
  //this.day = day;
  this.$store.dispatch("GETLIST", day);
  document.addEventListener("keyup", this.changeHandler);
},
watch: {
  $route() {
    let day = parseInt(this.$route.params.day) - 1;
    this.day = day;
  }
}
```
以及利用vue內建函示$router.replace來讓網址更新

<img src="https://i.imgur.com/T1p0i6z.png">

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FSTXQfKzy7s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>
