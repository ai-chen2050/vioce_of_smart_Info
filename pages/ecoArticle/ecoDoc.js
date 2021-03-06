// pages/ecoArticle/ecoDoc.js
const app = getApp()

Page({

  onShareAppMessage(){
    return {
      title: 'OnePage',
      path: 'pages/ecoArticle/ecoArticle'
    }
  },

  /**
   * 页面的初始数据
   */
  
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    imgUrls: [          
      '../../image/one.gif',
      '../../image/two.gif',
      '../../image/three.gif'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    Height: ""
  },

  /**
   * 
   * 设置图片的高度 
   */

  imgHeight:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh=e.detail.height;//图片高度
    var imgw=e.detail.width;//图片宽度
    var swiperH=winWid*imgh/imgw + "px"//等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
      Height:swiperH//设置高度
    })
  },

  /**
   * 
   * plus Info
   */
    modalTap() {
        wx.showModal({
        title: 'One more',
        content: '投稿请联系 ai-chen2050, 或后续社区会建立网站供上传资讯或价值信息',
        showCancel: false,
        confirmText: '确定'
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