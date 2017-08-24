//index.js
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverkind:'擦玻璃',
    serveraddr: '八一广场',
    data:'2017/7/28',
    time:'21:30:59',
    area:'50',
    sum:'580',
    id:'1',
    display_1:'',
    display_2:''
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
    // 动态设置页面的标题
    wx.setNavigationBarTitle({
      title: '我的订单页',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    wx.setStorage({
      key: 'id',
      success:function(res){
       that.setData({
         id:res.data
       });
       console.log(that.data.id);
        if(that.data.id === res.data){
         that.setData({
           diaplay_1:'none',
           display_2:'block'
         });
        }
        else{
          that.setData({
            display_1:'block',
            display_2:'none'
          });
        }
      },
      fail:function(res){
        that.setData({
          id:0
        });
        console.log(that.data.id)
        if(that.data.id===0){
          that.setData({
            display_1:'none',
            display_2:'block'
          });
        }
        else{
          that.setData({
            display_1:'block',
            display_2:'none'
          });
        }
      }
    })
    // 调用getStorageAPI同步数据
    wx.getStorage({
      key: 'kind',
      success: function(res) {
        console.log(res.data);
        that.setData({
          serverkind: res.data
        })
      },
    });
    wx.getStorage({
      key: 'order',
      success: function(res) {
        console.log(res.data);
        that.setData({
          serverkind:res.data
        })
      },
    });
    wx.getStorage({
      key: 'order',
      success: function(res) {
        console.log(res.daata);
        that.setData({
          serveraddr:res.data.addr,
          data:res.data.data,
          time:res.data.time,
          area:res.data.area,
          sum:parseInt(res.data.area)*14+130
        })
      },
    });
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