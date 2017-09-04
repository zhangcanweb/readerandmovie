Page({
  onTap:function(){
    // wx.navigateTo({
    //   url: '../post/post'
    // })用于父级页面向子级页面跳转，子页面有返回按钮，同时触发onHide事件。
    // wx.redirectTo({
    //   url: '../post/post'//关掉自身页面，跳到一个新的页面 同时触发onUnload事件。
      // success:function(){
      //   console.log("a");
      // }
    // })
    wx.switchTab({
      url: '../post/post'
    })
    //跳转带有tab组件的页面必须用wx.switchTab
  }
})