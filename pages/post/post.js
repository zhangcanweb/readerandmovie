// pages/post/post.js
var postdatas=require("../../data/data-post.js")//只能用相对路径
Page({
  data:{
    //data数据读取是在onLoad事件之后发生的
  },
  onLoad: function () {
    this.setData({
      datas1:postdatas.data_post
    });
  }
})