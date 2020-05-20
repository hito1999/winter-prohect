// pages/mes/id/id.js
const userId = wx.getStorageSync('userId');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:''
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
        that.setData({
          phone:res.data.result.phone
        })
      }
    })
  },

  getValue:function(e){
    console.log(e.detail.value);
    this.setData({
      phone:e.detail.value
    })
  },

  addPhone:function(e){
    let that = this;
    console.log('ok');
    console.log(this.data.phone);
    wx.request({
      url: 'https://www.hongyaoz.club/school/user/updateuserinfo',
      method: "post",
      data: {
        "userId": userId,
        "phone":that.data.phone
      },
      success(res) {
        console.log(res.data)
        if(res.data.status == 0){
          wx.showToast({
            title: '修改成功',
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