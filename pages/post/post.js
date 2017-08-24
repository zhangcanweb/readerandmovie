// pages/post/post.js
var postdatas=require("../../data/data-post.js")//只能用相对路径
Page({
  data:{
    //data数据读取是在onLoad事件之后发生的
  },
  onLoad: function (event) {
    this.setData({
      datas1:postdatas.data_post
    });
  },
  postDetail:function(event){
    var postId=event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../post-detail/post-detail?id='+postId
    })
  }
})