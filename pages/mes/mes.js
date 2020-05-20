Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },
  goPhoto:function(e){
    wx.navigateTo({
      url: '/pages/mes/photo/photo',
    })
  },
  goName:function(){
    wx.navigateTo({
      url: '/pages/mes/name/name',
    })
  },
  goTel:function(){
    wx.navigateTo({
      url: '/pages/mes/Tel/id',
    })
  },
  goSex:function(){
    wx.navigateTo({
      url: '/pages/mes/sex/sex',
    })
  },
  goAddress:function(){
    wx.navigateTo({
      url: '/pages/mes/address/address',
    })
  },
  goEmail:function(){
    wx.navigateTo({
      url: '/pages/mes/email/profess',
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