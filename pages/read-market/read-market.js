Page({

  /**
   * 页面的初始数据
   */
  data: {
        id:"",
        inf:{},
        userid:" ",
        collect:"收藏",
        comments:[ 
          {
          createTime:"2020 12-29",
          headimage:"https://ww1.yunjiexi.club/2020/02/22/2UNab.jpg",
          user:"测试",
          content:"这个小程序很好用"
          },
          {
            createTime:"2020 12-29",
            headimage:"https://ww1.yunjiexi.club/2020/02/22/2UNab.jpg",
            user:"测试",
            content:"这个小程序很好用"
          }
      ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(options.id);
    console.log(wx.getStorageSync('userId'));
      this.setData({
        id:options.id
      })
      that.setData({
        userid:wx.getStorageSync('userId')
      })
      wx.request({
        url: 'https://www.hongyaoz.club/school/second/msg?id='+that.data.id,
        // url: 'https://www.hongyaoz.club/school/second/msg?id=1',
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res){
          console.log(res.data.result);
          that.setData({
            inf:res.data.result,
            // comments:res.data.result.comments
          })
            console.log(res.result);    
            wx.request({
            url: 'https://www.hongyaoz.club/school/second/collect?productid='+that.data.id+"&userid="+that.data.userid,
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: function(res){
                console.log(res.msg);
                if(res.data.msg!="收藏成功")
                {
                  that.setData({
                    collect:"取消收藏"
                  })
                }
                wx.request({
                  url: 'https://www.hongyaoz.club/school/second/collect?productid='+that.data.id+"&userid="+that.data.userid,
                  method: 'GET',
                  dataType: 'json',
                  responseType: 'text',
                })
            }
          })
    
        }
      })

  },
  collect(){
    var that=this;
    wx.request({
      url: 'https://www.hongyaoz.club/school/second/collect?productid='+that.data.id+"&userid="+that.data.userid,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success:function(res){
        console.log(res);
        if(res.data.msg=="收藏成功")
        {
          that.setData({
            collect:"取消收藏"
          })
        }
        else
        {
          that.setData({
            collect:"收藏"
          })
        }
      }
    })
  },
  gochat(){
    var that=this;
    wx.navigateTo({
      url: '/pages/chatting/index?userid='+that.data.inf.userId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  show(e){
    console.log(e.currentTarget.dataset.url);
    wx.previewImage({
      current: e.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: [e.currentTarget.dataset.url] // 需要预览的图片http链接列表
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