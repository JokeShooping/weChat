//index.js
//获取应用实例
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "names":{
      "title":"套餐专区",
      "title_1":"保洁服务",
      "title_2":"家居保养",
      "title_3":"家电清洗",
      "title_4":"保姆月嫂",
      "title_5":"居家换新",
      "title_6":"维修服务",
      "title_7":"企业服务"
      
    },
    "list0":[
      {
        "image":"http://ayipic.ayibang.com/da2311fcc66e36e24681eeec9a07df30.png",
        "name":"家电组合套餐"
      },
      {
        "image":"http://ayipic.ayibang.com/b96d09e070b7a7d68dfe496fdf9e287b.png",
        "name":"厨房保养套餐"
      },
      {
        "image":"http://ayipic.ayibang.com/d1acf31f74b11b6c38e09b8db3680594.png",
        "name":"卫生间保养套餐"
      },
      {
        "image":"http://ayipic.ayibang.com/6e736fe51d7efdab55ad60340e2a8bce.png",
        "name":"厨房小家电套餐"
      }
    ],
   "list1":[
   {
    "image":"http://ayipic.ayibang.com/e4ed91e1af69ae3628cace3a306e0924.png",
    "name":"日常保洁"
    },
    {
      "image":"http://ayipic.ayibang.com/2970d37feb9c628b87eca6927241377d.png",
      "name":"家庭长期保洁"
    },
    {
      "image":"http://ayipic.ayibang.com/1dfa82868dcd755898c0d97807394dda.png",
      "name":"擦玻璃"
    },
    {
      "image":"http://ayipic.ayibang.com/a3391dff86f3523cd2aab50054a20d11.png",
      "name":"深度保洁"
    },
    {
      "image":"http://ayipic.ayibang.com/febbe207571232527478b32021450889.png",
      "name":"新居开荒"
    },
    {
      "image":"http://ayipic.ayibang.com/d4274e1d6a15e29d049ab234019ef301.png",
      "name":"厨房保养"
    },
    {
      "image":"http://ayipic.ayibang.com/5315cd69ae62cd83099e4115bd0c2ec7.png",
      "name":"卫生间保养"
    }
    ],
    "list2":[
   {
    "image":"http://ayipic.ayibang.com/c325be29165fc8e54a61216c07d5e766.png",
    "name":"深度除螨"
    },
    {
      "image":"http://ayipic.ayibang.com/a440101d1200eb6646b870940123450e.png",
      "name":"地板打蜡"
    },
    {
      "image":"http://ayipic.ayibang.com/09b5aeff65ad1a530e9239c58154c33f.png",
      "name":"皮质沙发保养"
    },
    {
      "image":"http://ayipic.ayibang.com/faa6e113ed2252f924e942eee5dea2d0.png",
      "name":"除甲醛"
    },
    {
      "image":"http://ayipic.ayibang.com/b3f44ed027b8a090e53a866d8d6147eb.png",
      "name":"甲醛检测"
    },
    {
      "image":"http://ayipic.ayibang.com/8fa1e5977c9c8d3613c4c70e028c5579.png",
      "name":"CMA空气质量检测"
    }
    ],
     
  "list3":[
   {
    "image":"http://ayipic.ayibang.com/e00255050cb25c8f25d8753b50f8f021.png",
    "name":"油烟机清洗"
    },
    {
      "image":"http://ayipic.ayibang.com/5574635ee997ebd954feec2d3f12f29c.png",
      "name":"洗衣机清洗"
    },
    {
      "image":"http://ayipic.ayibang.com/9c9128751d6bd32682b159461f6ee3d8.png",
      "name":"冰箱清洗"
    },
    {
      "image":"http://ayipic.ayibang.com/87da53fbab2fd9cdb2f1b287331653db.png",
      "name":"空调清洗"
    },
    {
      "image":"http://ayipic.ayibang.com/48929d03c3e19df0eeee0c38585108bb.png",
      "name":"灶台清洗"
    },
    {
      "image":"http://ayipic.ayibang.com/6a7999aeb89a1025f84cdc4f6e51af50.png",
      "name":"电烤箱清洗"
    },
     {
      "image":"http://ayipic.ayibang.com/5f18b52686253092ecaf9b9892de8de4.png",
      "name":"微波炉清洗"
    },
     {
      "image":"http://ayipic.ayibang.com/c27bd8b40cd17f11ec7afa0209eba91c.png",
      "name":"消毒柜清洗"
    },
     {
      "image":"http://ayipic.ayibang.com/677727e51677268aed9c3ef233ee5155.png",
      "name":"饮水机清洗"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__0b56811fed0f616b9eff9d979fe3d1ce_1499936404.png",
      "name":"热水器清洗"
    }
    ],

    "list4":[
   {
    "image":"http://ayipic.ayibang.com/8eacec90982a5b1766f68d638fdc396b.png",
    "name":"月嫂"
    },
    {
      "image":"http://ayipic.ayibang.com/6be8cd5bb7a61681e72746518b4ed6fa.png",
      "name":"育儿嫂"
    },
    {
      "image":"http://ayipic.ayibang.com/b06993db53c98c05eccce8de9a6a81cf.png",
      "name":"保姆"
    },
    {
      "image":"http://ayipic.ayibang.com/3b9285725887ff7d49c8c9c585e4ebe3.png",
      "name":"老人陪护"
    },
    {
      "image":"http://ayipic.ayibang.com/307256ede09148ff8cb56dfec82f6667.png",
      "name":"家庭长期做饭"
    },
    {
      "image":"https://ayipic.ayibang.com/cms__fe00beb7ace971ad01063c686e31e2d8_1500522668.png",
      "name":"催乳服务"
    }
    ],

    "list5":[
   {
    "image":"http://ayipic.ayibang.com/4227331781c5956d29f99abc4e1a7c4a.png",
    "name":"换吊顶"
    },
    {
      "image":"https://ayipic.ayibang.com/cms__6c5ad04d917dd504b918c2d4ff95895f_1491461129.png",
      "name":"换壁纸"
    },
    {
      "image":"https://ayipic.ayibang.com/cms__5df8b450ac83ec39678dc3cb241eb22d_1491470971.png",
      "name":"换墙漆"
    },
    {
      "image":"https://ayipic.ayibang.com/cms__46966f63479b9820f9125d87e201a920_1491461070.png",
      "name":"换地板"
    },
    {
      "image":"https://ayipic.ayibang.com/cms__3a3dcdb81b708fdef81f9fc5f0818374_1491471008.png",
      "name":"换地砖"
    },
    {
      "image":"http://ayipic.ayibang.com/2e90b72bb31f5d73c9a665208ac86393.png",
      "name":"儿童房换新"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__5a60d6b52a7e3af3c27a069ad9e2d29a_1488773166.png",
      "name":"卫生间换新"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__de3522e2c74c984ae8d67304b1878654_1499936343.png",
      "name":"防水补漏"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__907bd4592765a8fe92845aa56d0276a0_1499936280.png",
      "name":"墙面地面维修"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__0856fbfe34002efd7b86bb903dfa022f_1499936366.png",
      "name":"家居杂修"
    }
    ],


    "list6":[
   {
    "image":"http://ayipic.ayibang.com/6e7389d674079778a1de28b8fc1d01db.png",
    "name":"管道疏通"
    },
    {
      "image":"http://ayipic.ayibang.com/bdfd844ed37c558f1283da9f05698894.png",
      "name":"空调加氟"
    },
    {
      "image":"http://ayipic.ayibang.com/13950f8188889582e637fbeade2e1fce.png",
      "name":"空调维修"
    },
    {
      "image":"http://ayipic.ayibang.com/e0a17cdeb12ecd26860bfebccc6c3c98.png",
      "name":"换纱窗"
    },
    {
      "image":"http://ayipic.ayibang.com/f3b730fee0d482ec0496d26cc957e47f.png",
      "name":"换锁"
    },
    {
      "image":"http://ayipic.ayibang.com/e07045c75f5369030d5c770554a97d27.png",
      "name":"水龙头更换"
    },
     {
      "image":"http://ayipic.ayibang.com/05e062b2709182afd102618943b79368.png",
      "name":"灯具安装"
    },
     {
      "image":"http://ayipic.ayibang.com/c0c8b76445013770d0b28ae402e860ad.png",
      "name":"马桶维修"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__e600f609f8afdf0c3fa082f1537212ad_1491967846.png",
      "name":"净水器滤芯更换"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__b4312d902b770f819467a1add8b64ab2_1499071131.png",
      "name":"手机换屏"
    },
    {
      "image":"https://ayipic.ayibang.com/cms__0a7635fc30f0a0434def4ca5379f9e17_1499071118.png",
      "name":"手机换电池"
    },
    {
      "image":"https://ayipic.ayibang.com/cms__613eab7465591661093309bebad8f620_1491967821.png",
      "name":"净水器安装"
    },
    {
      "image":"https://ayipic.ayibang.com/cms__65b52b35b4346f8e9345e8a08df81c70_1489891717.png",
      "name":"热水器维修"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__7c6b3d37eadab23a2b2b2754fe1352db_1489891768.png",
      "name":"微波炉维修"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__37baef4b43107a0670674b1bd5663a42_1489891792.png",
      "name":"冰箱维修"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__bc23ab769e0b153ea3cb9293eadda35f_1489891809.png",
      "name":"油烟机维修"
    }
    ],


    "list7":[
   {
    "image":"http://ayipic.ayibang.com/23ad58cf34db8cc386a56ccb45005683.png",
    "name":"企业长期保洁"
    },
    {
      "image":"http://ayipic.ayibang.com/5c3958fe8d778dface6e257f403b0f62.png",
      "name":"企业绿植租摆"
    },
    {
      "image":"http://ayipic.ayibang.com/87865efca9ef5e02e078883051cb60f1.png",
      "name":"企业公寓保洁"
    },
    {
      "image":"http://ayipic.ayibang.com/89d43948a95c6293ee6a3aa648eef1fe.png",
      "name":"企业开荒保洁"
    },
    {
      "image":"http://ayipic.ayibang.com/92f172fa06c769aea78ac47fb267e296.png",
      "name":"企业地毯清洗"
    },
    {
      "image":"https://ayipic.ayibang.com/cms__1ad8ff3c8589b77eb4775abb3356ec0d_1501226121.png",
      "name":"企业送水"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__82a75121b2b052264d1bcb1747ef672d_1495092696.png",
      "name":"中央空调维修"
    },
     {
      "image":"https://ayipic.ayibang.com/cms__978d06901cf0185c5a6101c24eb4584d_1495092609.png",
      "name":"店铺招牌清洗"
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://easy-mock.com/mock/5911a42cacb959185b0c4201/more/server',
      method:'GET',
      data:{},
      dataType:'',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data.title)
        this.setData({
          name:res.data
        })
      },
    });
    wx.request({
      url: 'http://easy-mock.com/mock/5911a42cacb959185b0c4201/more/item',
      method:'GET',
      data:{},
      dataType:'json',
      header:{
        'Accept': 'application/json'
      },
      success:(res)=>{
        console.log(res.data)
        this.setData({
          this0:res.data.list0,
          list1:res.data.list1,
        })
      }
    })
  },
  order:function(e){
    console.log(e.target.dataset.text)
    wx.setStorage({
      key: 'kind',
      data: e.target.dataset.text
    })
    if(e.target.dataset.text =="擦玻璃"){
      wx.navigateTo({
        url: '../clear/clear',
      })
    }
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