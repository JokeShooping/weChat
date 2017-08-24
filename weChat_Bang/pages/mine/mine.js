//index.js
//获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      id:1,
      avatarUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAtFBMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8xB/hlAAAAO3RSTlNmADEQ6OJnN19DDGpj8/JNFQYDI/z4sKzUx7RtXVdQ9ZXczKB2Ke64vKaDeh1yb0jBiD+ZkjvYVCyYmsoPW0AAAAZnSURBVHjazNqLUtpAGIbhLwnm1NCcCpaSxLGKOpXCFIeh9r//++rUmgoq+u3+gea5gneS7GazGzh6hTefBdGyqaswBMKwqptlFMzmXuHoKQPzuRvV2KuO3HnuKKgC83K9AWGzLo0j9YGe28BA43oOTR8YuxsY23CN+sCiTGEpLYlhowyMgxAKYRA7BOvALEqglESZQ7AK9JboxNIkEXxehM5EXueBeZCgQ0mQdxs4q9CxatZhoJfiAFKvo8DCTXAQiVt0ERg3OJgm1geWIQ4oLJWBxQoHtioUgYrbq7nNfGBW4QiqzDawTHAUSWkX6OJoXJvAAEcUmAeucVRr08AVjmxFBKr6Lu/Hk5Orkcjo6mQyvr/sqhCdPH/fbgbyzODmWyfPIfTjd3o6kFcNTqcw4bKBJQwsxkPZazhewEDJBWYJaP7FUN40vPBBSzImMK5Auz2Xd53fglbF7wcWDWh3IyGM7kBrincDV2D510K69u0nG1gPkA8ToU0+gFW+HRiHdN9nMfCZLgzjNwMbkPyJGJn4IDVvBbpgXYuha7Dc/YFeAtK9GLsDKfH2BqYg3Z6JsbNbkNJ9gTOQ/HOxcO6DNHs9MK9AuhArFyBV+auBAUiLj2Ll48Ji5QWLETIWS2N+nLwSGIE0HYql4RSk6GVgBtapWDsFK3sRuATJH4i1gQ/S8nlgBtYPUfhhfAlh+gTiRhRuwIp2A+MErIEoDMBK4p3AAKxLUbkEK9gOLEKw7kXlF1hhsRVYgvZFVL6AVm4FpqB9FZWvoKVPgR54J6JyAp73L9AF70pUrsBz/wXW4I1EZQhe3QZ6MCA6n2DAewx0+xroPgam6OctRvo3MAf6OUiA/CGwBPo5zQDlQ+AaQB8nagDrh8ANgD6+6gBs/gTmMPJLu1gwkjtw5vijf8utB3MH7SzYtwVrOxOiXez3bcnfLvzRvoj79tHUvo5R4FG/PjtbBTw86teHe8vDHKamZ2LpbApTc/yEsbF6lub9RACWfvvtO4wFiPCkLxuYWyKkeNKXLeAtSzTY0o9N9G0Nati40x1D8GpU2NaHg5wdFULs+P9HYbtCNlB/mGiFztMfxx6L/kBbfw2P/EuA/hnU/1ShCqxA0P2WolGhhs7id3P315soEEUB/I5lpErAPwEWMV0RRQsWiy1lTc73/1672T6wG8MIDDD+nvp4A0lLZs499UXBHv9Mcl7Ef+rko1Gyfoo+FuTDZfLeaUKSynheyA8O7I3GwzKeJ2tCOj00na700K70Rg/tjZ7ooT3Rkh7aktgLPbCX8vCoDeN0CWL3NQs9zrXDZrPBX39+OGice2H26sbB5WRQaxPB8ZuIkXy6q+3BRi32YbtyP5M2c46aH2COL/GK22jB5qv4Mm5+gLloMFzieg6kOJ6bNBhy0eAQ3cizAzpxyHKDavlV/xrikpnokJldqIavmhc5xo6jc3xn1LzIWdz93rPQC+vu9+KixmWiIRpPfkSDBGY1rmNzDb3Scqo2unuhnYboXZhSlad7kYDAwgCsQBwJqHzHYx8D8ccVb1gYSzl7GIx3rnjDgmBPyjEgntKNmTAaddIwKO0kikbdhsv2Ggam7W/CZYJ43pljcPxM/9EFAcexBwW88U3AsSoi6kOJI/1jIgjZBlAkoNK8OqacWpAmfZn3Lgh6h1AmLB9gdVQ+gEI5fZtULxsYGhTSjOplA6aXF/5qlKGBr+qFl7UFpax19cILi9Q/wO9HGFUvXRkWFDMNmgnW1nZQbidYW2MjDuW4YPGPLQsoVywEA7KrA8Wcq3h9dw/F9vcWoH0o5bN7A063UGg7vTsgiywoY0V1agzebShiz+oVQaRQJK1bpZFDibx+GUkMBWImGPABftn4rMmAyyMGdlw2rBRyMagfzUuZdhjQrk2tVY7B5O2KwdYOBuGs21arzYY5o561L6eLtujdNpKp95v66Jk/lSxI3G/Qo81evmLyWqA3xbWLks5F4KAXdrDoqOZU99ADT++wKDax0DEr6bZqdx7b6JAdzzsvKx5l6Eymsz7qnj9W6MTqg9VHrInJqw1J9uuENUGsmSg2IcGMI9YMsaamqYeWvHTKmiLWwijgaIwHI9YCsXb0oLBRm10EOmuHWGvztctRA3fXc9YaMSnz5yDjdnXeLQue50wKMXlT/TmJj2GhmaYDOKapFeExTsp/EiDjN6Lz3cB/XZ3/AAAAAElFTkSuQmCC",
      nickName:"请登录"
    },
    items:[
     {
      id:1,
      desc:"我的账户余额"
     },
     {
      id:2,
      desc:"我的优惠券"
     },
     {
      id:3,
      desc:"礼品卡兑换"
     },
     {
      id:4,
      desc:"服务地址"
     },
     {
      id:5,
      desc:"阿姨/技师报名"
     },
     {
      id:6,
      desc:"用户协议"
     },
     {
      id:7,
      desc:"常见问题"
     },
     {
      id:8,
      desc:"联系客服"
     }
    ]
  },
  bindViewTap:function(e){
    wx.navigateTo({
      url: '../login/login',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    app.getUserInfo((data) => {
      this.setData({
        userInfo: data
      })
    });
    wx.request({
      // url: 'http://www.easy-mock.com/mock/5906811e7a878d73716e32c9/viplist/mylist',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: (res) => {
        console.log(res);
        this.setData({
          items: res.data.item
        })
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