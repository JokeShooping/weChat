var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '快速登入该页面',
    })
  },
  formSubmit: function (e) {
     var that = this
    console.log('form发生了submit事件，携带数据为：', e.detail.value.myname)
    if(e.detail.value.myname.lenght == 0){
      wx.showModal({
        title: '改密码不能为空',
        showCancel:false
      })
    }
    if (e.detail.value.phone == that.config.telephone && e.detail.value.yzm == that.config.yzm){
      wx.showModal({
        title: '恭喜你,登入成功了',
        showCancel:false
      })
    }
    else{
      wx.showModal({
        title: '验证码错误',
        showCancel: false
      })
    }
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  config:{
    telephone:13678594579,
    myname:'382679'
  }
})