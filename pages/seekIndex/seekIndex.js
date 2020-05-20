// pages/seekIndex/seekIndex.js
var value;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:[]
  },

  getInputValue:function(e){
    value = e.detail.value;
  },

  goSeek:function(e){
    var that = this;
    var userId = wx.getStorageSync('userId');
    console.log(userId);
    wx.request({
      url: 'https://www.hongyaoz.club/school/shop/getshopinfo',
      data:{
        "userId":userId
      },
      method:"get",
      success(res){
        console.log(res.data);
        var count = 0;
        if(res.data.result.length == 0){
          wx.showToast({
            title: '没有您的店铺哦~',
          })
        }else{
          for (var i = 0; i < res.data.result.length; i++) {
            if (value == res.data.result[i].shopId) {
              wx.navigateTo({
                url: '/pages/seek/seek?shopId=' + value,
              })
              break;
            } else {
              count++;
            }
          }
          if (count == res.data.result.length) {
            wx.showToast({
              title: '无此店铺信息',
            })
          }
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(wx.getStorageSync('userId'));
    var userid = wx.getStorageSync('userId');
    console.log(userid);
      wx.request({
        url: 'https://www.hongyaoz.club/school/shop/getshopinfo',
        data: {
          "userId": userId
        },
        method: "get",
        success(res) {
          var idArr = new Array();
          for(let i = 0; i < res.data.result.length; i++){
            idArr[i] = res.data.result[i].shopId
          }
          that.setData({
            index: res.data.result.length,
            num:idArr
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