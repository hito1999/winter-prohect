// pages/orderSubmit/index.js
//这里需要POST订餐信息
Page({
  data: {
      products:[],
      price:0,
      Allnum:0,
      text:""
  },
  onShow:function(){
    var pro=wx.getStorageSync('products');
    var price=0;
    var allnum=0;
    for(var i=0;i<pro.length;++i){
       price+=pro[i].num*pro[i].price;
       allnum+=pro[i].num;
    }
    this.setData({products:pro,price:price,Allnum:allnum});
  },
  cancel:function(){
    wx.navigateBack({
       delta:1
    })
    wx.removeStorageSync('products');
  },
  textFunction:function(e){
    var text=e.detail.value;
    this.setData({text:text});
  },
  handleOrdering:function(){
    var that=this;
    var pro=this.data.products;
    var userId=wx.getStorageSync('userId');
    var tel=wx.getStorageSync('userTel');
    var text=that.data.text;
    if(pro!=[]){
     wx.showLoading({
      title: '加载中',
      mask:true
    })
     new Promise(function(resolve,reject){
        var f=[];
        for(let i=0;i<pro.length;++i){
          f.push({"id":pro[i].productId,"num":pro[i].num});
        } 
        var shop=Number(wx.getStorageSync('shopid'));
        wx.request({
          url: 'https://www.hongyaoz.club/school/shop/addorder', 
          method:'POST',
          data:{"list":f,"userid":userId,"shopid":shop,"remark":text},
          success () {
            wx.hideLoading();
            resolve();
          },
          fail:function(){
            reject();
          }
        })
     }).then(function(res){
        wx.showToast({
          title:'成功',
          mask:true
        })
    })
    }else{
       wx.showToast({
         title: '购物车为空',
         icon:'none'
       })
    }
    wx.removeStorageSync('products');
  }
})