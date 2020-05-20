// components/Lists/Lists.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       one:{
         type:Object,
         value:''
       },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goed(e){
      var that=this;
      wx.navigateTo({
        url:"/pages/read-errand/read-errand?inf="+JSON.stringify(that.properties.one)
      })
    }
  }
})
