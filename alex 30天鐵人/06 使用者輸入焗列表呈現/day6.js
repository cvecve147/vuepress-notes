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
  ]
}
let vm = new Vue({
  el: '#app',
  data: data,
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
