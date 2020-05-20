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
    read(e){
      console.log(e.currentTarget.dataset.x);
      var index=e.currentTarget.dataset.x;
      var that=this;
      wx.navigateTo({
        url:"/pages/read-market/read-market?id="+that.properties.one[index].productId
      })
    }
  }
})
