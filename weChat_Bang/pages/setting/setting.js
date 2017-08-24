var app = getApp;
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'广东省深圳市宝安区',
    pickersValue:0,
    timeValue:util.formaTime(new data),
    dataValue:util.formaTime(new data)
  },
  // 表单提交
  formSubmit:function(e){
    var that = this;
    var addr = e.detail.value.addr;
    var area = e.detail.value.area;
    var data = e.detail.value.data;
    var time = e.detail.value;
    console.log(e.detail.value);
    // 将数据存储在本地缓存中指定的 key
    wx.setStorage({
      key: 'order',
      data: {
        addr,
        area,
        data,
        time
      }
    });
    // 保存当前的页面，跳转到指定的页面
    wx.navigateTo({
      url: '../pay/pay'
    })
  },
  getAddr:function(){
    var that = this;
    // 打开地图选择位置
    wx.chooseLocation({
      success: function(res) {
        var point = {
          latitude:res.latitude,
          logintude:res.longitude
        };
        that.setData({
          address:res.name || res.address
        })
      },
      fail:function(){

      }
    })
  },
  // 时间选择器绑定更改
  timePickerBindchange: function (e) {
    this.setData({
      timeValue: e.detail.value
    })
  },
  // 日期选择绑定更改
  datePickerBindchange:function(e){
    this.setData({
      dateValue:e.detail.value
    })
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
    
  }
})