// pages/mes/sex/sex.js
const userId = wx.getStorageSync('userId');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.hongyaoz.club/school/user/getuserinfo',
      method:"get",
      data:{
        "user_id":userId
      },
      success(res){
        if(res.data.result.gender==1){
          that.setData({
            sex:'男'
          })
        }else if(res.data.result.gender == 0){
          that.setData({
            sex:'女'
          })
        }else{
          that.setData({
            sex:'未知'
          })
        }
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