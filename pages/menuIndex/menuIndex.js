// pages/menuIndex/menuIndex.js
var value;
let judge;
const userId = wx.getStorageSync('userId');
Page({

  /**
   * 页面的初始数据
   */
  getInputValue: function (e) {
    value = e.detail.value;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    judge = options.com;
  },

  goMenu: function (e) {
    var that = this;
    if(judge == 0){
      wx.request({
        url: 'https://www.hongyaoz.club/school/shop/getshopinfo',
        data: {
          "userId": userId
        },
        method: "get",
        success(res) {
          var count = 0;
          if(res.data.result.length == 0){
            wx.showToast({
              title: '您还没有店铺哦~',
            })
          }else{
            for (var i = 0; i < res.data.result.length; i++) {
              if (value == res.data.result[i].shopId) {
                console.log(value);
                wx.navigateTo({
                  url: '/pages/menu/menu?shopid=' + value,
                })
              } else {
                count++;
              }
            }
            if (count == res.data.result.length) {
              wx.showToast({
                title: '无此店铺信息'
              })
            }
          }
        }
      })
    }else{
      wx.request({
        url: 'https://www.hongyaoz.club/school/shop/getshopinfo',
        data: {
          "userId": userId
        },
        method: "get",
        success(res) {
          var count = 0;
          if(res.data.result.length == 0){
            wx.showToast({
              title: '您还没有店铺哦~',
            })
          }else{
            for (var i = 0; i < res.data.result.length; i++) {
              if (value == res.data.result[i].shopId) {
                console.log(value);
                wx.navigateTo({
                  url: '/pages/menuComplete/menuComplete?shopid=' + value,
                })
              } else {
                count++;
              }
            }
            if (count == res.data.result.length) {
              wx.showToast({
                title: '无此店铺信息'
              })
            }
          }
        }
      })
    }
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