// pages/marketDetail/index.js
//这里需要接受前一个页面传来的id参数，来具体进行页面的变更，需要GET
//变更内容有：三张图片，订餐窗口名称以及各类饭菜和饭菜的价格
Page({
  data: {
      text:false,
      checked:true,
      id:0,
      num:0,
      products:[],
      show:false,
      image:[
        "http://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d1160924ab18972bf9578435e4cd7b899f510adb.jpg",
        "http://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/962bd40735fae6cdabec8c310eb30f2442a70f01.jpg",
        "http://pic.rmb.bdstatic.com/57a8cc821138fb6dc0ff42ab7af73efa.jpeg"
      ],
      marketTel:"",
      name:"",
      store:[]
  },
  onShow:function(){
    var pages=getCurrentPages();
    var currentPage=pages[pages.length-1];
    var marketId=currentPage.options.marketId;
    var that=this;
     wx.showLoading({
      title: '加载中',
      mask:true
    })
     new Promise(function(resolve,reject){
        wx.request({
          url: 'https://www.hongyaoz.club/school/shop/getshopmsg?shopid='+marketId,
          success (res) {
            resolve(res.data.result);
          },
          fail:function(){
            reject();
          }
        })
     }).then(function(data){
        wx.hideLoading();
        if(data.pic&&JSON.stringify(data.pic)!=JSON.stringify([])){
          that.setData({image:data.pic});
        }
        that.setData({name:data.shopname,marketTel:data.tel,store:data.meals});
            var f=wx.getStorageSync('products')||[];
            let arr=wx.getStorageSync('collect')||[];
            let n=arr.findIndex(function(v,i){
              return marketId==v.marketId;
            })
            if(n!=-1){
              that.setData({checked:false});
            }
            var num=0;
            for(var i=0;i<f.length;++i){
              num+=f[i].num;
            }
            that.setData({products:f,num:num,id:marketId});
            wx.setStorageSync('shopid', marketId);
     })
  },
  numAddJian:function(e){
    var oparation=e.currentTarget.dataset.oparation;
    var index=e.currentTarget.dataset.index;
    var pro=this.data.products||[];
    var num=this.data.num;
    var flag=-1;
    var Id=this.data.store[index].productId;
    if(num==0&&oparation==-1){
      return;
    }
    num+=oparation;
    for(var i=0;i<pro.length;++i){
      if(pro[i].productId==Id){
         flag=i;
         break;
      }
    }
    if(flag==-1){
       let f=this.data.store[index];
       f.num=1;
       pro.push(f);
    }else{
      pro[flag].num+=1;
    }
    this.setData({num:num,products:pro});
    wx.setStorageSync('products',pro);
  },
  ImageChange:function(){
    var check=this.data.checked;
    var index;
    var that=this;
    var arr=wx.getStorageSync('collect')||[];
    if(check){
      check=false;
      arr.push({marketId:this.data.id});
    }
    else{
      check=true;
      for(var i=0;i<arr.length;++i){
          if(arr[i].marketId==this.data.id){
               index=i;
               break;
          }
      }
      arr.splice(index,1);
    }
    new Promise(function(reslove,reject){
      wx.request({
         url: 'https://www.hongyaoz.club/school/shop/collectshop',
         data:{shopid:that.data.id,userid:1},
         success: () => {
           reslove();
         },
     })
  }).then(function(){
    if(check==false){
      wx.showToast({
        title:'收藏成功',
        mask:true
      })
    }else{
      wx.showToast({
        title:'取消成功',
        mask:true
      })
    }
    wx.setStorageSync('collect',arr);
    that.setData({checked:check});
  })
  }
})