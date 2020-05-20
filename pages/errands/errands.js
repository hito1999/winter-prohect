// pages/demo3/demo3.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
        inf:[
          // {
          //   id:1,
          //   person:"小明",
          //   content:"代取中通快递，下午六点前送达",
          //   time:"2020年2月1日",
          //   price:15 
          // },
          // {
          //   id: 2,
          //   person: "小h",
          //   content: "邮政快递下午六点前送达",
          //   time: "2020年2月1日",
          //   price:13 
          // },
          // {
          //   id:3,
          //   person:"小明",
          //   content:"代取中通快递，下午六点前送达",
          //   time:"2020年2月1日", 
          //   price:150 
          // },
          // {
          //   id:4,
          //   person:"小明",
          //   content:"代取中通快递，下午六点前送达",
          //   time:"2020年2月1日",
          //   price:60  
          // },
          // {
          //   id:5,
          //   person:"小明",
          //   content:"代取中通快递，下午六点前送达",
          //   time:"2020年2月1日",
          //   price:140 
          // },
          // {
          //   id:6,
          //   person:"小明",
          //   content:"代取中通快递，下午六点前送达",
          //   time:"2020年2月1日",
          //   price:155 
          // },
          // {
          //   id:7,
          //   person:"小明",
          //   content:"代取中通快递，下午六点前送达",
          //   time:"2020年2月1日",
          //   price:999  
          // }
        ],
        one:[],
        list: [{
          id: '1',
          name: '排序方式',
          open: false,
          pages: ['时间升序', '时间降序', '费用升序', '费用降序']
        }],
  },
  addpost(){
    wx.navigateTo({
      url: '/pages/addpost/addpost',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getindex(e){
    console.log(e);
  },
  changeinf(){
        var x=0;
        var that=this;
        var one=that.data.one;
      if(one.length!=that.data.inf.length)
      {
        
        one+5>that.data.inf.length?x=that.data.inf.length:x=one+5;
        for(var i=one.length;i++;i<x)
        {
          one[i]=that.data.inf[i];
        }
        that.setData({
          inf:that.data.inf,
          one:one,
          list:that.data.list
        })
      }
  },
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://www.hongyaoz.club/school/errands/inf',
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log("ok");
        console.log(res.data);
        that.setData({
          inf:res.data.result
        })
        var x=0;
        var one=that.data.one;
      if(one.length!=that.data.inf.length)
      {
        one.length+5>that.data.inf.length?x=that.data.inf.length:x=one.length+5;
        console.log("长度"+x);
        for(var i=one.length;i<x;i++)
        {
          one[i]=that.data.inf[i];
        }
        that.setData({
          inf:that.data.inf,
          one:one,
          list:that.data.list
        })
      }
      },
      fail: function(res) {
        console.log('fail')
      },
      complete: function(res) {
   
      },
    })
  },
  sort(e){
    let id=e.currentTarget.id;
    let that=this;
    let inf=that.data.inf;
    var compare1 = function (prop) {
      return function (obj1, obj2) {
      var val1 = obj1[prop];
      var val2 = obj2[prop];if (val1 < val2) {
       return -1;
      } else if (val1 > val2) {
       return 1;
      } else {
       return 0;
      }  
      } 
     };
    var compare2 = function (prop) {
      return function (obj1, obj2) {
      var val1 = obj1[prop];
      var val2 = obj2[prop];if (val1 < val2) {
       return 1;
      } else if (val1 > val2) {
       return -1;
      } else {
       return 0;
      }  
      } 
     }
    switch(id)
    {
      case "0":
      inf.sort(compare1("id"));
      break;
      case "1":
      inf.sort(compare2("id"));
      break;
      case "2":
      inf.sort(compare1("price"));
      break;
      case "3":
      inf.sort(compare2("price"));
      break;
      default:break;
    };
    that.setData({
      inf:inf,
      one:[],
      list:that.data.list
    });
    console.log(that.data.inf);
    var x=0;
    var one=that.data.one;
  if(one.length!=that.data.inf.length)
  {
    one.length+5>that.data.inf.length?x=that.data.inf.length:x=one.length+5;
    console.log("长度"+x);
    for(var i=one.length;i<x;i++)
    {
      one[i]=that.data.inf[i];
    }
    that.setData({
      inf:that.data.inf,
      one:one,
      list:that.data.list
    })
  }
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    wx.request({
      url: 'https://www.hongyaoz.club/school/errands/inf',
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log("ok");
        console.log(res.data);
        that.setData({
          inf:res.data.result
        })
        var x=0;
        var one=that.data.one;
      if(one.length!=that.data.inf.length)
      {
        one.length+5>that.data.inf.length?x=that.data.inf.length:x=one.length+5;
        console.log("长度"+x);
        for(var i=one.length;i<x;i++)
        {
          one[i]=that.data.inf[i];
        }
        that.setData({
          inf:that.data.inf,
          one:one,
          list:that.data.list
        })
      }
      },
      fail: function(res) {
        console.log('fail')
      },
      complete: function(res) {
   
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onReachBottom:function(){
    var x=0;
    var that=this;
    var one=that.data.one;
  if(one.length!=that.data.inf.length)
  {
    console.log("ok");
    one.length+5>that.data.inf.length?x=that.data.inf.length:x=one.length+5;
    console.log("长度"+x);
    for(var i=one.length;i<x;i++)
    {
      one[i]=that.data.inf[i];
    }
    that.setData({
      inf:that.data.inf,
      one:one,
      list:that.data.list
    })
  }
  }
})