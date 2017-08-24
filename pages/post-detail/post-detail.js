var detialDatas = require("../../data/data-post.js");
var app=getApp();
Page({
  onLoad: function (options) {
    var postId = options.id;
    this.setData({
      currentPost: postId
    })
    var detialData = detialDatas.data_post[postId];
    this.setData({
      detialArr: detialData
    })
    var postsCollected = wx.getStorageSync("postsCollected");
    if (postsCollected) {
      var postCollected = postsCollected[postId];
      this.setData({
        collected: postCollected
      })
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync("postsCollected", postsCollected)
    }
    if(app.globalData.g_isPlay&&app.globalData.g_postMusicId===postId){
      this.setData({
        isPlay:true
      });
    }
    this.onMusicMintor();

  },
  onMusicMintor:function(){
    var that=this;
    wx.onBackgroundAudioPlay(function(){
      app.globalData.g_isPlay=true;
      app.globalData.g_postMusicId=that.data.currentPost
    })
    wx.onBackgroundAudioPause(function(){
      app.globalData.g_isPlay=false;
      app.globalData.g_postMusicId=null;
    })
  },
  onCollectionTap: function (event) {
    var postsCollected = wx.getStorageSync("postsCollected");
    var postCollected = postsCollected[this.data.currentPost];
    postCollected = !postCollected;
    postsCollected[this.data.currentPost] = postCollected;
    wx.setStorageSync("postsCollected", postsCollected);
    this.setData({
      collected: postCollected
    });  
      wx.showToast({
        title: postCollected?"收藏成功":"取消收藏",
        icon: 'success',
        duration: 2000
      })
  },
  onShareTap:function(){
    var itemList=[
        "分享到朋友圈",
        "分享给微信好友",
        "分享到QQ空间",
        "分享到新浪微博"
      ];
    wx.showActionSheet({
      itemList:itemList,
      itemColor:"#405f80",
      success:function(ref){
        wx.showModal({
          title: "用户"+itemList[ref.tapIndex],
          content: '对不起还没有分享功能',
        })
      }
    })
  },

  onMusicTap:function(event){
    var musicData=detialDatas.data_post[this.data.currentPost].music
    var isPlay=this.data.isPlay;
    if(isPlay){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlay:false
      });
    }else{
      wx.playBackgroundAudio({
      dataUrl: musicData.url,
      coverImgUrl:musicData.coverImg
    })
    this.setData({
      isPlay:true
    }) 
    }  
  }

})