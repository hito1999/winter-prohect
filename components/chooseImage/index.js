// components/chooseImage/index.js
Component({
  properties: {
     src:{
       type:String,
       value:""
     },
     index:{
        type:Number,
        value:-1
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    Scale:0,
    show:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeImage:function(e){
      var index=e.currentTarget.dataset.index;
      var show=this.data.show;
      if(!show){
        show=true;
      }else{
        show=false;
      }
      this.setData({show:show});
      this.triggerEvent('Cancel',{index,show});
    },
    imageLoad:function(e){
      var originalWidth = e.detail.width;
      var originalHeight = e.detail.height;
      var originalScale = 260/(originalHeight/originalWidth);
      this.setData({Scale:originalScale});
    }
  }
})
