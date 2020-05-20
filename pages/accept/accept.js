// pages/accept/accept.js
const userId = wx.getStorageSync('userId');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addBox: [{
      content: "",
      create: ""
    }],
    content: [],
    create: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.hongyaoz.club/school/errands/getuserinfo',
      method: 'get',
      data: {
        "user_id": userId
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data);
        var result = res.data.result.accept;
        var contentArr = new Array();
        var createArr = new Array();
        if(result.length == 0){
          wx.showToast({
            title: '无接贴信息',
          })
        }else{
          for (var i = 0; i < result.length; i++) {
            contentArr[i] = result[i].content;
            createArr[i] = result[i].createTime;
          }
          that.setData({
            addBox: result,
            content: contentArr,
            create: createArr
          })
        }
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