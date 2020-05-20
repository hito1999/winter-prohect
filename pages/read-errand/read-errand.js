// pages/read-errand/read-errand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        inf:{},
        userid:0
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        inf:JSON.parse(options.inf),
        userid:wx.getStorageSync('userId')
      })
      console.log(this.data.inf);
  },
  gochat(){
    var that=this;
    wx.navigateTo({
      url: '/pages/chatting/index?userid='+that.data.inf.userId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  accept(){
    var that=this;
    wx.showModal({
      title: '提示',
      content: '确定要接下此订单吗',
      success: function(res) {
      if (res.confirm) {
      console.log('用户点击确定');
      wx.request({
        url: 'https://www.hongyaoz.club/school/errands/accept?id='+that.data.inf.id+'&user_id='+that.data.userid,
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
            console.log(res);
            wx.navigateBack({
              delta: 1
            })
        }
      })
      } else if (res.cancel) {
      console.log('用户点击取消')
      }
      }
      })
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