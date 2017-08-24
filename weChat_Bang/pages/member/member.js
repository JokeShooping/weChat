//index.js
//获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:'http://img4.18183.com/uploads/allimg/170125/21-1F125160928.jpg',
    items:[
      {
        id:1,
        image:"http://ayipic.ayibang.com/2f0b167ece331e74e88fcec9ec4278df.png",
        title:"充值200元",
        subtitle:"赠送价值20元的优惠劵",
        chongzi:"立即充值"
      },
      {
        id:2,
        image:"http://ayipic.ayibang.com/55d690cd49eae0d1a83a477c110caf5d.png",
        title:"充值500元",
        subtitle:"赠送价值40元的优惠劵",
        chongzi:"立即充值"
      },
       {
        id:3,
        image:"http://ayipic.ayibang.com/2f0b167ece331e74e88fcec9ec4278df.png",
        title:"充值900元",
        subtitle:"赠送价值80元的优惠劵",
        chongzi:"立即充值"
      },
      {
        id:4,
        image:"http://ayipic.ayibang.com/55d690cd49eae0d1a83a477c110caf5d.png",
        title:"充值1000元",
        subtitle:"赠送价值100元的优惠劵",
        chongzi:"立即充值"
      },
      {
        id:5,
        image:"http://ayipic.ayibang.com/2f0b167ece331e74e88fcec9ec4278df.png",
        title:"充值1500元",
        subtitle:"赠送价值150元的优惠劵",
        chongzi:"立即充值"
      },
      {
        id:6,
        image:"http://ayipic.ayibang.com/55d690cd49eae0d1a83a477c110caf5d.png",
        title:"充值2000元",
        subtitle:"赠送价值200元的优惠劵",
        chongzi:"立即充值"
      },
      {
        id:7,
        image:"http://ayipic.ayibang.com/2f0b167ece331e74e88fcec9ec4278df.png",
        title:"充值300元",
        subtitle:"赠送价值280元的优惠劵",
        chongzi:"立即充值"
      },
      {
        id:8,
        image:"http://ayipic.ayibang.com/55d690cd49eae0d1a83a477c110caf5d.png",
        title:"充值3000元",
        subtitle:"赠送价值500元的优惠劵",
        chongzi:"立即充值"
      },
      {
        id:9,
        image:"http://ayipic.ayibang.com/2f0b167ece331e74e88fcec9ec4278df.png",
        title:"充值5000元",
        subtitle:"赠送价值880元的优惠劵",
        chongzi:"立即充值"
      },
       {
        id:10,
        image:"http://ayipic.ayibang.com/55d690cd49eae0d1a83a477c110caf5d.png",
        title:"充值8000元",
        subtitle:"赠送价值1200元的优惠劵",
        chongzi:"立即充值"
      },
      {
        id:11,
        image:"http://ayipic.ayibang.com/2f0b167ece331e74e88fcec9ec4278df.png",
        title:"充值10000元",
        subtitle:"赠送价值2000元的优惠劵",
        chongzi:"立即充值"
      },
      {
        id:12,
        image:"http://ayipic.ayibang.com/55d690cd49eae0d1a83a477c110caf5d.png",
        title:"充值15000元",
        subtitle:"赠送价值3000元的优惠劵",
        chongzi:"立即充值"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://www.easy-mock.com/mock/5906811e7a878d73716e32c9/viplist/itemlist',
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:function(res){
        var that = this
        console.log(res)
        that.setData({
          images:res.data.image,
          item:res.data.item
        });
      }
    })
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