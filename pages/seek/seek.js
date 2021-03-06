// pages/seek/seek.js
const userId = wx.getStorageSync('userId');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.shopId);
    var that = this;
    wx.request({
      url: 'https://www.hongyaoz.club/school/shop/getshopinfo',
      data:{
        "userId":userId
      },
      method:"get",
      success(res){
        console.log(res.data.result)
        for(var i = 0; i < res.data.result.length; i++){
          if(res.data.result[i].shopId == options.shopId){
            var count = i;
            console.log(count);
            that.setData({
              'shopname': res.data.result[count].shopname,
              'address': res.data.result[count].location,
              'tel': res.data.result[count].tel,
              'intro': res.data.result[count].intro
            });
            break;
          }
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