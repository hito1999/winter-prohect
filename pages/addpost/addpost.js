Page({

  /**
   * 页面的初始数据
   */
  data: {
      content:"",
      price:'',
      time:"获取失败",
      userid:"获取失败",
      click:false
  },
  getprice(e){
    var that=this;
    that.setData({
      price:e.detail.value
    })
  },
  change(e){
      var that=this;
      that.setData({
        content:e.detail.value
      })
  },
  back(){
    wx.navigateTo({
      url: '/pages/demo3/demo3',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  submit(e){
    var that=this;
    if(this.data.content==''||this.data.price=='')
    {
      wx.showToast({
      title: '内容不能为空！',
      icon: 'none',
      duration: 2000//持续的时间
    })
    }
    else
    {
      that.setData({
        click:true
      })
      // var myDate = new Date();
      // console.log(myDate.getHours(),myDate.getMinutes(),myDate.getSeconds());
      // console.log(myDate.getMonth()+1);
      // console.log(myDate.getFullYear());
      // var time=null;
      // time=myDate.getFullYear().toString()+"-"+(myDate.getMonth()+1).toString()+"-"+myDate.getDate().toString()+" "+myDate.getHours().toString()+":"+myDate.getMinutes().toString()+":"+myDate.getSeconds().toString();
      // console.log(time);
      var msg={
        p:that.userid,//当前用户id
        price:parseInt(that.data.price),
        time:that.data.time,
        content:that.data.content
      }
      console.log(msg);
      wx.request({
      url: 'https://www.hongyaoz.club/school/errands/add',
      method: 'post',
      data: msg,
      success: function (res) {
        console.log(res);
        that.data.content='';
        wx.showToast({
  
          title: '成功',
     
          icon: 'success',
     
          duration: 2000//持续的时间
     
        });
        setTimeout(function(){
        wx.navigateBack({
                delta: 1
              });
        },2000)
      }
    })   
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var myDate = new Date();
    console.log(myDate.getHours(),myDate.getMinutes(),myDate.getSeconds());
    console.log(myDate.getMonth()+1);
    console.log(myDate.getFullYear());
    var time=null;
    time=myDate.getFullYear().toString()+"-"+(myDate.getMonth()+1).toString()+"-"+myDate.getDate().toString()+" "+myDate.getHours().toString()+":"+myDate.getMinutes().toString()+":"+myDate.getSeconds().toString();
    this.setData({
      time:time,
      userid:wx.getStorageSync('userId')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})