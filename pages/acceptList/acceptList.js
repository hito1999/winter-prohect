// pages/acceptList/acceptList.js
let judge;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addBox: [{
      products: "",
      create: "",
      price:"",
      remark:"",
      order:""
    }],
    products: [],
    create: [],
    price:[],
    remark:[],
    order:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    judge = options.shopid;
    var that = this;
    wx.request({
      url: 'https://www.hongyaoz.club/school/shop/getorders',
      method: 'get',
      data: {
        "shopid": judge,
        "status":1
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data.result);
        var result = res.data.result;
        var productsArr = new Array();
        var priceArr = new Array();
        var remarkArr = new Array();
        var createArr = new Array();
        var orderArr = new Array();
        for (var i = 0; i < result.length; i++) {
          productsArr[i] = JSON.stringify(result[i].products);
          priceArr[i] = result[i].price;
          remarkArr[i] = result[i].remark;
          createArr[i] = result[i].createTime;
          orderArr[i] = result[i].orderId;
        }
        that.setData({
          addBox: result,
          products: productsArr,
          price:priceArr,
          remark:remarkArr,
          create: createArr,
          order:orderArr
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