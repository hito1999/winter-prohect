Page({

  /**
   * 页面的初始数据
   */
  data: {
      content:"",
      price:'',
      pic:[],
      img:[],
      time:"获取失败",
      click:false,
      userid:"获取失败"
  },
  getprice(e){
    var that=this;
    that.setData({
      price:e.detail.value
    })
  },
  change(e){
      var that=this;
      that.setData({
        content:e.detail.value
      })
  },
  back(){
    wx.navigateTo({
      url: '/pages/demo3/demo3',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  submit(e){
    var that=this;
    console.log(this.data.content);
    if(this.data.content==''||this.data.price=='')
    {
      wx.showToast({

      title: '内容不能为空！',
 
      icon: 'none',
 
      duration: 2000//持续的时间
 
    })
    }
    else
    {
      //此部分为将发送请求将信息存入
        if(that.data.img.length==that.data.pic.length)
        {
          this.data.content='';
          console.log(that.data.img);
          var msg={
            userId:1,
            // createTime:that.data.time,
            price:parseInt(that.data.price),
            content:that.data.content,
            images:that.data.img
          };
          console.log(msg);
          wx.request({
            url: 'https://www.hongyaoz.club/school/second/addproduct',
            method: 'post',
            data:msg,
            success: function(res) {
                console.log(res);
                wx.showToast({
          
                  title: '成功',
             
                  icon: 'success',
             
                  duration: 2000//持续的时间
             
                });
                setTimeout(function(){
                wx.navigateBack({
                        delta: 1
                      });
                },2000)
            }
          })
        }
      
    }
  },
  img(){
    var that=this;
    wx.chooseImage({
      success: ret => {
      var filePath = ret.tempFilePaths[0];
      console.log(ret.tempFilePaths);
      that.setData({
        pic:ret.tempFilePaths
      })
      var msg=this.data.pic;
        for(var i=0;i<msg.length;i++)
        {
          wx.uploadFile({
            url: 'https://www.hongyaoz.club/school/file/upload',
            filePath: msg[i],
            name: 'file',
            header: { 
              "Content-Type": "multipart/form-data"
              },  
            success: res => {
            console.log('上传成功：', res);
            console.log(JSON.parse(res.data).result[0]);
            var img=that.data.img;
            img[img.length]=JSON.parse(res.data).result[0];
              that.setData({
                img:img
              })
            }
            });
        }
      }
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var myDate = new Date();
    console.log(myDate.getHours(),myDate.getMinutes(),myDate.getSeconds());
    console.log(myDate.getMonth()+1);
    console.log(myDate.getFullYear());
    var time=null;
    time=myDate.getFullYear().toString()+"-"+(myDate.getMonth()+1).toString()+"-"+myDate.getDate().toString()+" "+myDate.getHours().toString()+":"+myDate.getMinutes().toString()+":"+myDate.getSeconds().toString();
    this.setData({
      time:time,
      userid:wx.getStorageSync('userId')
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