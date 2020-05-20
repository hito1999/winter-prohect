// pages/list/list.js
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
      reamrk:"",
      order:""
    }],
    create: [],
    products:[],
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
        "status":0
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        var result = res.data.result;
        var productsArr = new Array();
        var priceArr = new Array();
        var remarkArr = new Array();
        var createArr = new Array();
        var orderArr = new Array();
        if(result.length == 0){
          wx.showToast({
            title: '您还没有店铺哦~',
          })
        }else{
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
            price: priceArr,
            remark: remarkArr,
            create: createArr,
            order: orderArr
          })
        }
      },
      fail: function () {
        console.log('err')
      }
    })
  },

  confirm:function(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var order = this.data.order[index];
    wx.request({
      url: 'https://www.hongyaoz.club/school/shop/changeorderstatus',
      data:{
        "shopid":judge,
        "orderid":order
      },
      success(res){
        console.log(res.data.msg);
        if(res.data.msg == 'ok'){
          wx.showToast({
            title: '已确认',
          })
          that.onLoad();
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
   * 
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