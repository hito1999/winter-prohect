// pages/store/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'name':'',
    'src':'',
    'owner':'',
    'tel':''
  },

  goIncrease: function () {
    wx.navigateTo({
      url: '/pages/add/add',
    })
  },
  
  goMenu: function () {
    wx.navigateTo({
      url: '/pages/menuIndex/menuIndex?com=0',
    })
  },

  goMenuCom: function () {
    wx.navigateTo({
      url: '/pages/menuIndex/menuIndex?com=1',
    })
  },

  goList: function () {
    wx.navigateTo({
      url: '/pages/listIndex/listIndex?com=0',
    })
  },

  goListCom: function () {
    wx.navigateTo({
      url: '/pages/listIndex/listIndex?com=1',
    })
  },

  goSeek:function(){
    wx.navigateTo({
      url: '/pages/seekIndex/seekIndex',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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