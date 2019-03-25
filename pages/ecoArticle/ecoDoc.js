// pages/ecoArticle/ecoDoc.js
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

      // 获取帮助手册列表
      wx.request({
          url: globalUrl + '/wxapp/client_helper_list',
          success(res) {
              console.log(res.data)
              // 获取到的数据 必须是字符串格式res.data.data[0].Content
              let data = app.towxml.toJson(res.data.data[0].Content, 'markdown')
              //设置文档显示主题，背景颜色，默认'light'
              data.theme = 'dark';  
              console.log(data, 6666666666)

              self_.setData({
                  helper_obj_list: res.data.data,
                  article: data
              })
          },
          fail: function (res) {

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