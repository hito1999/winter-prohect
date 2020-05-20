// pages/menuComplete/menuComplete.js
let judge;
const userId = wx.getStorageSync('userId');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addBox: [{
      productName: "",
      price: ""
    }],
    productName: [],
    price: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this;
    judge = options.shopid;
    console.log(judge);
    wx.request({
      url: 'https://www.hongyaoz.club/school/shop/getshopmsg',
      method: 'get',
      data: {
        "shopid": judge
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data);
        var result = res.data.result.meals;
        var productNameArr = new Array();
        var priceArr = new Array();
        for (var i = 0; i < result.length; i++) {
          productNameArr[i] = result[i].productName;
          priceArr[i] = result[i].price;
        }
        that.setData({
          addBox: result,
          productName: productNameArr,
          price: priceArr
        })
      },
      fail: function () {
        console.log('err')
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