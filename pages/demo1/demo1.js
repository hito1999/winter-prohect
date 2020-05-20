Page({
  data: {
  list: [{
    id: '1',
    name: '排序方式',
    open: false,
    pages: ['时间升序', '时间降序', '费用升序', '费用降序']
  }]
},

/**
 * 收缩核心代码
 */
kindToggle(e) {
  const id = e.currentTarget.id
  const list = this.data.list
  for (let i = 0, len = list.length; i < len; ++i) {
    if (list[i].id === id) {
      list[i].open = !list[i].open
    } else {
      list[i].open = false
    }
  }

  /**
   * key和value名称一样时，可以省略
   * 
   * list:list=>list
   */
  this.setData({
    list
  })
}
})