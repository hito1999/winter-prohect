// pages/showOrding/index.js
Page({
  data:{
    history:[]
  },
   renderTime:function(date) {
    var dateee = new Date(date).toJSON();
    return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
    },
  onShow:function(){
    //发送请求   name得求
    var that=this;
    var userid=wx.getStorageSync('userId');
    wx.request({
      url: 'https://www.hongyaoz.club/school/shop/getmyorder?userid='+userid,
      success:function(res){
        console.log(res);
         let data=res.data.result;
         if(data.length == 0){
           wx.showToast({
             title: '不存在历史订单信息',
           })
         }else{
           if (!data) {
             return;
           }
           data.forEach(function (v, i) {
             if (v.status == 0) {
               v.status = "未接单"
             } else {
               v.status = "已接单"
             }
             v.createTime = that.renderTime(v.createTime);
           })
           that.setData({ history: data });
         }
      }
    })
  }
})