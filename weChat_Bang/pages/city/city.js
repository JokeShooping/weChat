var app = getApp()
let pageConfig = {
  data: {
    "now":"定位城市",
    "city":"当前城市",
    "city_1":"深圳",
    "hot":"热门",
     "hotcitys":[
      {
        "name":"北京"
      },
      {
        "name":"上海"
      },
      {
        "name":"广州"
      },
      {
        "name":"深圳"
      },
      { 
        "name":"杭州"
      },
      {
       "name":"成都"
      },
      {
        "name":"浙江"
      },
      {
        "name":"福建"
      },
      {
        "name":"珠海"
      },
      {
        "name":"上饶"
      },
      {
        "name":"天津"
      },
      {
        "name":"湖北"
      }
    ],
    catagory: [
      {
        id:"A",
        city:[
          {"name":"安徽"},
          {"name":"安远"},
        ]
      },
      {
        "id":"B",
        "city":[
        {"name":"北京"},
        {"name":"保定"},
        {"name":"白城"},
        {"name":"亳州"}
        ]
      },
      {
        "id":"C",
        "city":[
        {"name":"重庆"},
        {"name":"成都"},
        {"name":"长沙"},
        {"name":"承德"},
        {"name":"长春"},
        {"name":"郴州"},
        {"name":"常州"}
        ]
      },
      {
        "id":"D",
        "city":[
        {"name":"大连"},
        {"name":"东莞"},
        {"name":"达州"}
        ]
      },
     {
      "id":"F",
      "city":[
         {"name":"佛山"},
         {"name":"福州"},
         {"name":"防城港"}
      ]
    },
     {
      "id":"G",
      "city":[
         {"name":"广州"},
         {"name":"贵阳"}
      ]
    },
    {
       "id":"H",
        "city":[
        {"name":"杭州"},
        {"name":"哈尔滨"},
        {"name":"合肥"},
        {"name":"惠州"},
        {"name":"呼和浩特"},
        {"name":"海口"},
        {"name":"湖州"}
        ]
      },
      {
       "id":"J",
        "city":[
        {"name":"金华"},
        {"name":"嘉兴"},
        {"name":"合肥"},
        {"name":"济南"},
        {"name":"吉林"}
        ]
      }
    ]
  },
  onLoad: function (options) {
    this.loadInfo();
  },
  bindViewTap: function (e) {
    // console.log(e.target.dataset.text);
    var city = e.target.dataset.text;
    // setStorage API设置本地存储
    wx.setStorage({
      key: "city",
      data: city
    });
    wx.switchTab({
      url: '../home/home'
    })
  },
  // 单用户获取
  loadInfo: function () {
    var page = this;
    wx.request({
      url: 'http://www.easy-mock.com/mock/5906811e7a878d73716e32c9/viplist/citylist',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: (res) => {
        console.log(res);
        this.setData({
          now: res.data.now,
          hot: res.data.hot,
          hotcitys: res.data.hotcitys,
          catagory: res.data.catagory
        })
      }
    });
  //  获取当前的地理位置,速度
    wx.getLocation({
      type: 'wgs84', 
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
  // 微信的getLocation API只获得经纬度
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
  }
};
Page(pageConfig);