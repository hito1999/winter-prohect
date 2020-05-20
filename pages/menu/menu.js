// pages/menu/menu.js
var judge;
const userId = wx.getStorageSync('userId');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  productNameValue: function (e) {
    if (e.detail.value == '请输入食物名称') {
      this.setData({
        productName: ''
      })
    } else {
      this.setData({
        productName: e.detail.value
      })
    }
  },

  priceValue: function (e) {
    if (e.detail.value == '请输入食物价格') {
      this.setData({
        price: ''
      })
    } else {
      this.setData({
        price: e.detail.value
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    judge = e.shopid;
  },

  submit:function(e){
    console.log(judge);
    var result;
    var that = this;
    var price = this.data.price;
    var productName = this.data.productName;
    if(price == '' || productName == ''){
      wx.showToast({
        title: '请输入正确的信息',
      })
    }else{
      wx.request({
        url: 'https://www.hongyaoz.club/school/shop/addproduct',
        method: 'post',
        data: {
          "price": price,
          "productName": productName,
          "shopid": judge
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res.data.status);
          if (res.data.status == 0) {
            wx.showToast({
              title: '成功添加',
            })
            that.setData({
              "price": '',
              "productName": ''
            })
          }
        },
        fail: function () {
          console.log('err')
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
    wx.reLaunch({
      url: 'pages/index/index',
    })
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