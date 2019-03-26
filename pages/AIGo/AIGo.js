// pages/AIGo/AIGo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
        {
          id: 'algorithm',
          name: '基础算法',
          open: false,
          pages: { "常见基础算法": 'basicAIGo', "链表" : 'list', '二叉树':'tree','字符串': 'string'}
         }, {
          id: 'machine',
          name: '机器学习-深度学习',
          open: false,
          pages: { '基于 TensorFlow 的逻辑回归详解': 'tensor-1','前向神经网络和 BP 算法详解之DNN':'tensor-2','卷积神经网络(CNN)及其实践':'tensor-3','使用 VGG16 实现图像识别分类，使用 VGG 19 实现艺术风格转移':'tensor-3','基于循环神经网络(LSTM)的情感评论文本分类': 'tensor-4'}
        }, {
          id: 'blockchain',
          name: '区块链',
          open: false,
          pages: { '比特币的相关原理、密码学、交易验证': 'block-1','第二代区块链公链（Ethereum）':'block-2'}
        }, {
          id: 'financial',
          name: '财商-金融',
          open: false,
          pages: {'市场介绍': 'finan-1','量化交易': 'finan-2'}
        }, {
          id: 'health',
          name: '医疗-健康',
          open: false,
          pages: {'医疗健康': 'heal-1'}
        }, {
          id: 'feeling',
          name: '心得-影书评',
          open: false,
          pages: {'绿皮书': 'feel-1'}
        }, {
          id: 'other',
          name: '其他-待补',
          open: false,
          pages: {'其他': 'other' }
        }
      ],
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
    wx.reportAnalytics('enter_home_programmatically', {})
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
    return {
        title: 'World',
        path: 'pages/AIGo/AIGo'
      }
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }

})