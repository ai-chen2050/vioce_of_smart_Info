App({
  
    // 小程序初始化完成后，会全局触发一次
    onLaunch: function () {
        var that = this;
        wx.getSetting({
            success(res) {
              if (!res.authSetting['scope.writePhotosAlbum']) {
                wx.authorize({
                  scope: 'scope.writePhotosAlbum',
                  success() {
                    console.log('scope.weitePhotosAlbum is success')
                    
                }
                })
              }
            }, 
            fail: function (res) {
                console.log('scope.weitePhotosAlbum is fail')
          }
        })
    },
    

    // 从后台到前台，小程序页面在手机当前窗口显示，会调用
    onShow: function(options) {
        let option = JSON.stringify(options);
        this.globalData.scene=options.scene;
        console.log('app.js option-----' + option)
        console.log('app.js--------------------' + options.scene);
    },

    // 从前台到后台，当按了返回键，或 home 键，小程序进入后台，会调用
    onHide: function() {

    },

    globalData: {
        userInfo: null,
        scene:""
      }

})
