// pages/add/add.js
const userId = wx.getStorageSync('userId');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pics:[],
    photos:[],
    src:'http://img1.imgtn.bdimg.com/it/u=1380203701,3156356890&fm=26&gp=0.jpg',
    Store_Name:'',
    Owner_Tel:'',
    Store_Intro:'',
    location:""
  },
  onmoreAdd:function(){
    var that = this;
    var pics = this.data.pics;
    var photos = this.data.photos;
    wx.chooseImage({
      count:3-pics.length,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success: function(res) {
        var imgsrc = res.tempFilePaths;
        pics = pics.concat(imgsrc);
        that.setData({
          pics:pics
        }),
        wx.uploadFile({
          url: 'https://www.hongyaoz.club/school/file/upload',
          filePath: res.tempFilePaths[0],
          name: 'file',
           success(res){
             var result = JSON.parse(res.data).result;
             photos = photos.concat(result);
             that.setData({
               photos:photos
             })
             console.log(photos);
            if(res.code == 200){
              wx.showToast({
                title: '图片上传成功',
              })
            }
          },
          fail:function(err){
            console.log(err);
          }
        })
      }
    })
  },
  Store_NameInput:function(e){
    if(e.detail.value == '请输入店铺名称'){
      this.setData({
        Store_Name:''
      })
    }else{
      this.setData({
        Store_Name: e.detail.value
      })
    }
  },
  Owner_TelInput: function (e) {
    if(e.detail.value == '请输入店主联系电话'){
      this.setData({
        Owner_Tel:''
      })
    }else{
      this.setData({
        Owner_Tel: e.detail.value
      })
    }
  },
  Owner_LocationInput: function (e) {
    if (e.detail.value == '请输入店铺地址') {
      this.setData({
        location: ''
      })
    } else {
      this.setData({
        location: e.detail.value
      })
    }
  },
  Store_IntroInput: function (e) {
    if (e.detail.value == '请输入店铺简介') {
      this.setData({
        Store_Intro: ''
      })
    } else {
      this.setData({
        Store_Intro: e.detail.value
      })
    }
  },

  formSubmit:function(e){
    console.log('ok');
    let that = this;
    let Store_Name = this.data.Store_Name;
    let Owner_Tel = this.data.Owner_Tel;
    let Store_Intro = this.data.Store_Intro;
    let location = this.data.location;
    let photos = this.data.photos;
    console.log(photos.length);
    // console.log(photos);
    if (Store_Name | location | Store_Intro ==''){
      console.log('false');
      console.log(Store_Name);
      console.log(location);
      console.log(Store_Intro);
      if(photos.length < 3){
        wx.showToast({
          title: '输入信息有误',
        })
      }
    }else{
      wx.request({
        url: 'https://www.hongyaoz.club/school/shop/addshop',
        method: 'post',
        data: {
          "shopname": Store_Name,
          "userid": userId,
          "location": location,
          "intro": Store_Intro,
          "imgstore": photos
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res);
          if (res.code == 200) {
            wx.showToast({
              title: '成功添加',
            })
          }
          that.setData({
            pics: [],
            Store_Name: '',
            Owner_Name: '',
            Owner_Tel: '',
            Store_Intro: '',
            location: ''
          })
        },
        fail: function () {
          wx.showToast({
            title: '连接错误',
          })
        }
      })
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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