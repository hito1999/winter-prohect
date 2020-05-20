// pages/chatting/index.js
//聊天界面需要用webSocket
//聊天界面是经过点击头像之类的进行了跳转
Page({
  data: {
     src:"",
     currentText:"",
     text:[],
     showLight:false,
     image:[],
    showImage:false,
    scale:0,
    show:false,
    arrImage:[],
    nickName:"",
    msg:{}
  },
  upImage:[],
    //在这里还需要添加一个判断，筛选出仅有的与nickName这个昵称相同的信息。
    //b->a,c->a,a打开与b的界面，只能展示b->a的信息。
  onShow:function(){
    var pages=getCurrentPages();
    var currentPage=pages[pages.length-1];
    // var nickName=currentPage.options.userid;
    var nickName=2;
    this.setData({nickName:nickName});
    var src=wx.getStorageSync('userInfo').avatarUrl;
    var userid=wx.getStorageSync('userId');
    var SecondUser="text"+nickName;
    var f=wx.getStorageSync(SecondUser)||[];
    var that=this;
    this.setData({src:src,text:f});
    var msg=wx.connectSocket({
      url: 'wss://www.hongyaoz.club/school/webSocketOneToOne/1',
    })
     that.setData({msg:msg});
    msg.onMessage(function(Data){
      var data=JSON.parse(Data.data);
      var text=that.data.text||[];
      var len=text.length;
      if(data.million&&parseInt(data.million)-parseInt(text[len-1].million)>120000){
           data.time="";
      }
      if(data.from==nickName){
        text.push(data);
        that.setData({text:text});
        wx.setStorageSync(SecondUser, text);
      }
    })
  },
  getInput:function(e){
    var f=e.detail.value;
    if(f!=""){
      this.setData({showLight:true});
    }else{
      this.setData({showLight:false});
    }
    this.setData({currentText:f});
  },
  send:function(){
    var nickName=this.data.nickName+"";
    var SecondUser="text"+nickName;
    var msg=this.data.msg;
    var text=this.data.text||[];
    var current=this.data.currentText;
    var arrImage=this.upImage;
    var that=this;
    var str="";
    if(current!=""||JSON.stringify(arrImage)!=JSON.stringify([])){
     var d = new Date();
     var len=text.length;
     var millionSecond=d.getTime().toString();
     if(len==0||parseInt(millionSecond)-parseInt(text[len-1].million)>120000){
       let year=d.getFullYear();
       let month=d.getMonth()+1;
       let day=d.getDate();
       let hour=d.getHours();
       hour=this.select(hour);
       var minute=d.getMinutes();
       minute=this.select(minute);
       var second=d.getSeconds();
       second=this.select(second);
       str=year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
     }else{
       str="";
     }
     if(current!=""&&JSON.stringify(arrImage)==JSON.stringify([])){
       let n={"code":0,"story":current,"str":str,"million":millionSecond,to:nickName,"imageUrl":that.data.src}
       text.push(n);
       let arr=JSON.stringify(n);
       msg.send({data:arr});
     }
     else if(JSON.stringify(arrImage)!=JSON.stringify([])&&current==""){
       arrImage.forEach(function(v,i){
         if(i==0){
           let n={"code":1,"story":v,"str":str,"million":millionSecond,to:nickName,"imageUrl":that.data.src};
           text.push(n);
           let arr=JSON.stringify(n);
            msg.send({data:arr});
         }else{
           let n={"code":1,"story":v,"str":"","million":millionSecond,to:nickName,"imageUrl":that.data.src};
           text.push(n);
           let arr=JSON.stringify(n);
            msg.send({data:arr});
         }
       })
     }
     else if(current!=""&&JSON.stringify(arrImage)!=JSON.stringify([])){
        let n={"code":0,"story":current,"str":str,"million":millionSecond,to:nickName,"imageUrl":that.data.src};
        text.push(n);
        let arr=JSON.stringify(n);
         msg.send({data:arr});
       arrImage.forEach(function(v,i){
         let n={"code":1,"story":v,"str":"","million":millionSecond,to:nickName,"imageUrl":that.data.src};
         text.push(n);
         let arr=JSON.stringify(n);
          msg.send({data:arr});
       })
     }
     this.setData({ currentText:"",text:text,showLight:false});
     wx.setStorageSync(SecondUser, text);
    }else{
     this.setData({ currentText:"",showLight:false});
    }
    this.setData({show:false,arrImage:[],image:[]});
    this.upImage=[];
  },
  sendFunction:function(){
     var that=this;
     that.updateImage(that.data.arrImage);
  },
  select:function(n){
    var s;
    if(n>=0&&n<=9){
      s="0"+n;
    }else{
      s=n+"";
    }
    return s;
  },
  chooseImage:function(){
    var that=this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        let tempFilePaths=res.tempFilePaths;
        let filePath=[...that.data.image,...tempFilePaths];
        that.setData({image:filePath});
		    if(filePath!=[]){
			         that.setData({showImage:true,show:true});
	      }
      },
    })
  },
  cancelImage:function(e){
    var arr=this.data.arrImage;
    var index=e.detail.index;
    var image=this.data.image;
    if(e.detail.show==true){
      arr.push(image[index]);
    }else{
      let f=arr.findIndex(function(v,i){
        return v==image[index];
      })
      arr.splice(f,1);
    }
    this.setData({arrImage:arr});
    if(JSON.stringify(arr)!=JSON.stringify([])){
      this.setData({showLight:true});
    }else{
      this.setData({showLight:false});
    }
  },
  preview:function(e){
    var f=e.currentTarget.dataset.img;
    var arr=[];
    arr.push(f);
    wx.previewImage({
      current:f, // 当前显示图片的http链接
      urls:arr// 需要预览的图片http链接列表
    })
  },
  onUnload:function(){
    console.log('onUnload');
    wx.closeSocket();
  },
  updateImage:function(tempFilePaths){
    var that=this;
    new Promise(function(reslove,reject){
      if(JSON.stringify(that.data.arrImage)!=JSON.stringify([])){
        wx.showLoading({
          title: '加载中',
        })
        tempFilePaths.forEach(function(v,i){
          wx.uploadFile({
            url:'https://www.hongyaoz.club/school/file/upload',
            filePath:v,
            name:'file',
            header: { 
              "Content-Type": "multipart/form-data"
            },  
            success(res){
              const data=JSON.parse(res.data).result[0];
              that.upImage.push(data);
              if(i==tempFilePaths.length-1){
                wx.hideLoading();
                reslove();
              }
            }
          })
        })
      }else{
        reslove();
      }
    }).then(function(){
      that.send();
    })
  }
})