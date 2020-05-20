// pages/orderCar/index.js
Page({
  data: {
      products:[],
      price:0,
      Allnum:0
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
  numAddJian:function(e){
    var oparation=e.currentTarget.dataset.oparation;
    var index=e.currentTarget.dataset.index;
    var price=this.data.price;
    var allnum=this.data.Allnum;
    var pro=this.data.products||[];
    price+=pro[index].price*oparation;
    allnum+=oparation;
    if( pro[index].num==1&&oparation==-1){
      pro.splice(index,1);
    }else{
      pro[index].num+=oparation;
    }
    this.setData({products:pro,price:price,Allnum:allnum});
    wx.setStorageSync('products',pro);
  }
})