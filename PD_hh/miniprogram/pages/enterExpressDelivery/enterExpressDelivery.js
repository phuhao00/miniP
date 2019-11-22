Page({

  data:{
    typeCat: [
      { id: 0, name: "发布需求" },
      { id: 1, name: "抢单" },
      { id: 2, name: "追踪进度" },
    ],
    headTitle:""
  },
  onLoad: function (options){
    this.setData({
      headTitle: options.help,
    })
  },
  //发布需求
  publishNeed:function(){
    wx.redirectTo({
      url: '../enterExpressDelivery/publishNeed/publishNeed',
    })
  },
    //抢单
  robNeed: function () {
    wx.redirectTo({
      url: '../enterExpressDelivery/robNeed/robNeed',
    })
  },
    //追踪进度
  followTracks: function () {
    wx.redirectTo({
      url: '../enterExpressDelivery/followTracks/followTracks',
    })
  },

  // ------------分类展示切换---------
  typeSwitch: function (e) {
    // console.log(e.currentTarget.id)
    getCurrentPages()["0"].setData({
      activeTypeId: parseInt(e.currentTarget.id)
    })
    switch (e.currentTarget.id) {
      // 发布需求
      case '0':
        wx.redirectTo({
          url: '../enterExpressDelivery/publishNeed/publishNeed',
        })
        break;
      // 抢单
      case '1':
        wx.redirectTo({
          url: '../enterExpressDelivery/robNeed/robNeed',
        })
        break;
      //追踪进度
      case '2':
        wx.redirectTo({
          url: '../enterExpressDelivery/followTracks/followTracks',
        })
        break;
    }
  },
})