const Towxml = require('/towxml/main');     //引入towxml库

App({

    towxml:new Towxml(),         //创建towxml对象，供小程序页面使用

    // 小程序初始化完成后，会全局触发一次
    onLaunch: function () {
        if (!wx.saveImageToPhotosAlbum) {  
          wx.showModal({  
            title: '提示',  
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'  
          })  
          return;  
        }  
        wx.getSetting({
            success(res) {
              if (!res.authSetting['scope.writePhotosAlbum']) {
                console.log("onLaunch one");
                wx.authorize({
                  scope: 'scope.writePhotosAlbum',
                  success() {
                    console.log('scope.weitePhotosAlbum is success')
                    
                },
                fail(){  
                  // 用户拒绝了授权  
                  console.log("2-授权《保存图片》权限失败");  
                  // 打开设置页面  
                  wx.showModal({  
                    title: '提示',  
                    content: '请打开保存到手机相册的权限',  
                    success: function(res){
                      wx.openSetting({  
                        success: function(data) {  
                          console.log("openSetting: success");  
                        },  
                        fail: function(data) {  
                          console.log("openSetting: fail");  
                        }  
                      });  
                    }
                  })
                }  
                })
              }
            }, 
            fail: function () {
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
