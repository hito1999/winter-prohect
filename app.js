//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }

  // //1,应用第一次启动就会触发的事件
  // onLaunch(){
  //   //第一次启动的时候就可以获取用户的个人信息
  //   console.log("onLaunch");
  // },

  // //2，应用被用户看到的时候触发
  // // 对引用的数据或者页面效果重置
  // onShow(){
  //   console.log("show");
  // },
  // //被隐藏时  来暂定或者清除定时器
  // onHide(){
  //   console.log("hide")
  // },
  // //应用的代码发生报错的时候，就会触发
  // onError(){
  //   //收集用户的错误信息，通过异步请求，将错误的信息发送至后台
  //   console.log("error");
  //   console.log(err);
  // },
  // //应用第一次启动的时候，如果找不到第一个入口，就会触发 用于页面不存在了可以跳转到另一个页面
  // onPageNotFound(){
  //   console.log("not");
  // }
})