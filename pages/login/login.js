// pages/firstLogin/index.js
Page({
  data:{
    userInfo:{},
    show1: false,
    tel:"",
    code:""
  },
  Count:0,
  onShow:function(){
    // wx.clearStorage();
    var f1=wx.getStorageSync('userInfo');
    console.log(f1);
    if(f1){
      this.setData({show1:true});
      wx.switchTab({
        url: '/pages/errands/errands',
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  },
  getUserInfo:function(e){
      var info=e.detail.userInfo;
      var that=this;
      if(e.detail.errMsg!=="getUserInfo:fail auth deny"){
        var encryptedData=e.detail.encryptedData;
        var iv=e.detail.iv;
        wx.setStorageSync('userInfo',info);
        that.setData({userInfo:info,show1:true});
        // if(this.Count==0){
          wx.login({
            success(res){
              if(res.code){
                 var code=res.code;
                  new Promise(function(resolve,reject){
                  wx.request({
                    url: 'https://www.hongyaoz.club/school/user/login',
                    data: {"code":code,"encryptedData":encryptedData,"iv":iv},
                    method: 'POST', 
                    success (res) {
                      console.log(res.data);
                      resolve(res.data);
                    },
                    fail:function(){
                        reject();
                      }
                    })
                    }).then(function(data){
                      wx.setStorageSync('userId',"1");
                      //wx.setStorageSync('userId',data.result.userid);
                      that.Count=1;
                      wx.switchTab({
                        url: '/pages/errands/errands',
                        success: (result)=>{
                          
                        },
                        fail: ()=>{},
                        complete: ()=>{}
                      });
                    })
              }
            }
          })
        // }
      }
  }
})