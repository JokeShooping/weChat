var app = getApp()
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200, 
    topimg: [
      {
        id:1,
        image:"http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/04/11/c65edc972c678a547dd103df609ba611.jpg"
      },
       {
        id:2,
        image:"http://www.fzlol.com/upimg/allimg/110223/2111Z5Y51.jpg"
      },
       {
        id:3,
        image:"http://uploadfile.bizhitupian.com/2015/1018/20151018033938870.jpg"
      },
      {
        id:4,
        image:"http://t2.27270.com/uploads/tu/201212/00572/1.jpg"
      },
      {
        id:5,
        image:"http://pic1.win4000.com/wallpaper/a/587c3c4b46c8a.jpg"
      },
      {
        id:6,
        image:"http://pic.4gbizhi.com/2015/0113/05/1440.900.jpg"
      }
    ],
    city: '北京',
    // topimg: '"http://tu.southcn.com/data/pics/preview_img/148/RgvEhQfsphempmhgtzsaduwb.jpg"',
    serverlist: [
      {
        id:1,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6JrjhActdrhHDg2mE6CaLcx_uHTnIr_z-8LiVPhzfVDeLgcN-g",
        description:"保洁服务"
      },
       {
        id:2,
        imageUrl:"https://en.pimg.jp/013/148/477/1/13148477.jpg",
        description:"家电清洗"
      },
       {
        id:3,
        imageUrl:"http://www.plcastle.com/default/files/styles/620_388/public/2_6.jpg",
        description:"家居保养"
      },
       {
        id:4,
        imageUrl:"http://images.gofreedownload.net/abstract-green-leaf-background-vector-239262.jpg",
        description:"维修服务"
      },
      {
        id:5,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYVuptOT34stUFKnp3uihGy2g6JqnK-2rEIqITAg4XE0WdABh",
        description:"企业服务"
      },
      {
        id:6,
        imageUrl:"http://www.cspengbo.com/pic.asp?url=http://www.3158.cn/data/attachment/album/2013/04/13/20130413170659627471.jpg",
        description:"保姆月嫂"
      },
      {
        id:7,
        imageUrl:"http://img1.16pic.com/00/25/10/16pic_2510757_s.jpg",
        description:"搬家服务"
      },
      {
        id:8,
        imageUrl:"http://www.chhome.cn/userfiles/2(494).jpg",
        description:"居家换新"
      },
      {
        id:9,
        imageUrl:"https://st.depositphotos.com/1005573/2728/i/950/depositphotos_27282075-stock-photo-rose-toiletries-with-lavender.jpg",
        description:"洗护服务"
      },
      {
        id:10,
        imageUrl:"http://img.daimg.com/uploads/allimg/170306/1-1F306141944.jpg",
        description:"更多服务"
      }
    ],
    title: '日常保洁',
    desc: '2小时后服务,会员享优惠',
    clean: [
      {
        id:1,
        title:"擦玻璃",
        desc:"洁净明亮如初",
        img:"http://img95.699pic.com/photo/50004/0636.jpg_wh300.jpg"
      },
      {
        id:2,
        title:"深度保洁",
        desc:"家里焕然一新",
        img:"http://www.mtjbj.com/wp-content/uploads/2012/07/5963351_112044046536_21.jpg"
      }
    ],
    image: 'https://gw.alicdn.com/bao/uploaded/i2/TB18x5hJFXXXXbjXXXXXXXXXXXX_!!0-item_pic.jpg_460x460xz.jpg',
    hot: '热门推荐',
    recomlist: [
      {
        id:1,
        img:"http://img.fuwo.com/tuce/1610/23/4cec4fae98e811e69c8600163e00254c.jpg@640x426",
        desc:" 宋韵菊香、春和景明，笔端春秋、画内山河和翰墨书香、溢彩流金，共计三个小展区"
      },
      {
        id:2,
        img:"http://www.funfate.com/wp-content/uploads/2016/12/27/18999.jpg",
        desc:"太子湾原为湖湾，由山峦风雨冲刷，泥沙淤积为沼泽洼地"
      },
     {
        id:3,
        img:"http://4493bz.1985t.com/uploads/allimg/160513/3-160513104635.jpg",
        desc:"太子湾公园位于西湖西南隅，南屏山荔枝峰下。据载南宋皇室庄文，景献两太子葬此而得名"
      },
      {
        id:4,
        img:"http://img.fuwo.com/tuce/1607/10/377f19ca461911e6bd6c00163e00254c.jpg@300x200",
        desc:"中式东南亚--厨房间高清效果图复式东南亚客厅装修效果图设计欣赏"
      }, 
       {
        id:5,
        img:"http://4493bz.1985t.com/uploads/allimg/160224/3-160224161K1.jpg",
        desc:"西湖风景名胜区位于浙江省杭州市中心，分为湖滨区、湖心区、北山区、南山区和钱塘区"
      },
      {
        id:6,
        img:"http://img95.699pic.com/photo/2016/12/19/6277c885-1c01-4d21-ab85-25b214db1eef.jpg_wh300.jpg",
        desc:" 通过最具代表性的实物展品及3D全息技术，全景展示开封悠久的历史及未来开封宋都文化商务区复原后的魅力"
      },
      {
        id:7,
        img:"http://img4.a0bi.com/upload/articleResource/20170508/1494230930129.jpg",
        desc:"宇宙深处一颗美丽神奇的行星，拥有强大的环保科技，融合在'奥拉之辉'中"
      },
      {
        id:8,
        img:"http://st2-fashiony.ru/pic/interior/pic/97788/33.jpg",
        desc:" 乔治·阿玛尼现在已是在美国销量最大的欧洲设计师品牌，他以使用新型面料及优良制作"
      },
      {
        id:9,
        img:"http://bpic.588ku.com/back_pic/03/70/69/5857b6ba06c517b.jpg",
        desc:" 婚紗還是得選一款適合自己的，揚長避短才重要!各種婚紗款式適合人群有所不同"
      },
      {
        id:10,
        img:"http://c3.haibao.cn/img/600_0_100_0/1473817326.0903/d542bd585bb97cc19678a3970456a00b.jpg",
        desc:"COACH发布2017春夏女装系列，唐嫣首次共同现身纽约大秀"
      },
      {
        id:11,
        img:"http://bpic.ooopic.com/10/17/71/67b1OOOPICf9.jpg",
        desc:"经典欧式豪华客厅设计效. ... 欧式室内装修设计风格客厅室内装修设计"
      },
      {
        id:12,
        img:"http://img3.redocn.com/20130726/Redocn_2013072610211248.jpg",
        desc:"齐家装修网欧式豪华客厅效果图效果图专区,国内更新最快的欧式豪华客厅"
      },
       {
        id:13,
        img:"http://file03.16sucai.com/2017/1100/16sucai_p20161113104_53f.JPG",
        desc:"简约白色客厅装修效果图专区，是国内海量全面的高质量现代简约白色客厅装修"
      },
       {
        id:14,
        img:"http://img-download.pchome.net/download/1k1/k1/2l/op92zy-c55.jpg",
        desc:"吳越踐王于行吉之日城外百戶，不張懸錦緞，皆用彩紙剪人馬以代"
      }
    ]
  },
  bindViewTap: function (e) {
    wx.navigateTo({
      url: '../city/city'
    })
  },
  gotoserver: function (e) {
    wx.navigateTo({
      url: '../server/server'
    })
  },
  // onShow函数页面显示的时候调用，将数据接口放到此处可以实现页面的刷新
  onShow: function () {
    let that = this;
    // 调用getStorageAPI同步数据
    wx.getStorage({
      key: 'city',
      success: function (res) {
        console.log(res.data);
        that.setData({
          city: res.data
        })
      }
    })
  },
  onLoad: function () {
    var page = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        // success
        var longitude = res.longitude;
        var latitude = res.latitude;
        page.loadCity(longitude, latitude);
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  loadCity: function (longitude, latitude) {
    var page = this;
    wx.request({
      url: 'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&callback=renderReverse&location=' + latitude + ',' + longitude + '&output=json&pois=1',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success
        console.log(res);
        var str1 = res.data;
        var str2 = str1.replace("renderReverse&&renderReverse(", "");
        var str3 = str2.substring(0, str2.length - 1);
        var cityresult = JSON.parse(str3);
        console.log(typeof (cityresult));
        var city1 = cityresult.result.addressComponent.city;
        var city = city1.replace("市", "");
        page.setData({
          city: city
        });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    wx.request({
      url: 'http://www.easy-mock.com/mock/5906811e7a878d73716e32c9/viplist/home',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: (res) => {
        console.log(res);
        this.setData({
          topimg: res.data.topimg,
          serverlist: res.data.serverlist,
          title: res.data.title,
          desc: res.data.desc,
          image: res.data.image,
          clean: res.data.clean,
          hot: res.data.hot,
          recomlist: res.data.recomlist
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