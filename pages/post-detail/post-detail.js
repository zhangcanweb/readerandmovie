var detialDatas = require("../../data/data-post.js");
Page({
  onLoad: function (options) {
    var postId = options.id;
    var detialData = detialDatas.data_post[postId];
    console.log(detialData)
    this.setData({
      detialArr: detialData
    })
    var postsCollected=wx.getStorageSync("postsCollected");
    if(postsCollected){
      var postCollected=postsCollected[postId];
      this.setData({
        collected:postCollected
      })
    }
  },
  onCollectionTap:function(){
    
  }
  
})