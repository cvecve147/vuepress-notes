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
          return item.type == this.input2.type
        })
      } else {
        return this.menu
      }
    },
    titleMenu() {
      if (this.input2.title) {
        return this.typeMenu.filter(item => {
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
