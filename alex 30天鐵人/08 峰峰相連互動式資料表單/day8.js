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
