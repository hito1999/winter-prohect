// pages/ordering/ordering.js
//这里需要发送一次请求来获取所有店铺信息GET
Page({
  data: {
     market:[]
  },
  onShow: function () {
     wx.removeStorageSync('products');
     wx.removeStorageSync('shopid');
     var that=this;
     wx.showLoading({
      title: '加载中',
      mask:true
    })
     new Promise(function(resolve,reject){
        wx.request({
          url: 'https://www.hongyaoz.club/school/shop/getshops', 
          success (res) {
            resolve(res.data.result);
          },
          fail:function(err){
            reject(err);
          }
        })
     }).then(function(res){
        wx.hideLoading();
        let market=res;
        var f=market.map(function(v){
          let n=v.pic[0];
          v.pic=n;
          return v;
        })
        that.setData({market:f});
     })
  }
})