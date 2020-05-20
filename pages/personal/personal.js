Page({
  /**
   * 页面的初始数据
   */

  data: {

  },

  goMes:function(){
    wx.navigateTo({
      url: '/pages/mes/mes'
    })
  },

  goPoster:function(){
    wx.navigateTo({
      url: '/pages/poster/poster'
    })
  },

  goAccept: function () {
    wx.navigateTo({
      url: '/pages/accept/accept'
    })
  },

  goProduct:function(){
    wx.navigateTo({
      url: '/pages/showOrding/index',
    })
  },

  goCollectionProduct: function () {
    wx.navigateTo({
      url: '/pages/collectionproduct/collectionproduct',
    })
  },

  goCollectionShop: function () {
    wx.navigateTo({
      url: '/pages/collectShop/collectShop',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success:function(res){
        that.setData({
          "src":res.userInfo.avatarUrl,
          "name":res.userInfo.nickName
        })
      }
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