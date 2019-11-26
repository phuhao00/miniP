Page({
  data: {
    step: 1,
    counterId: '',
    openid: '',
    count: 0,
    queryResult: '',
    data:null
  },
  onLoad: function (options) {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('order').get({
      success: res => {
        this.setData({
          queryResult: JSON.stringify(res.data, null, 2),
          count:res.data.length,
          data: res.data
        })
        console.log('[数据库] [查询记录] 成功: ', res.data)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
  onQuery: function () {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('order').get({
      success: res => {
        this.setData({
          queryResult: JSON.stringify(res.data, null, 2)
        })
        console.log('[数据库] [查询记录] 成功: ', res.data)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
  rob:function(){

  },
})