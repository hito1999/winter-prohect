// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * 存放要从父组件接受的数据
   */
  properties: {
      aaa:{
        //类型
        type:Array,
        value:''//默认值
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      tabs:[
        {
          id:0,
          name:"首页",
          isActive:true
        },
        {
          id:1,
          name:"原创",
          isActive:false
        },
        {
          id: 2,
          name: "分类",
          isActive: false
        },
        {
          id: 3,
          name: "关于",
          isActive: false
        }
      ]
  },
  // 1, 页面.js文件中存放事件的回调函数的时候 存放在data同层级下
  // 2，组件.js文件中....存放在methods中
  /**
   * 组件的方法列表
   */
  methods: {
      handleItemtap(e){
        console.log(e);
      }
  }
})
