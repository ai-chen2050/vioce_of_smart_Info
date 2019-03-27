const app = getApp()

const htmlSnip =
`<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`
const weChatIndex = 
`<><a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg4NjExNjM4OQ==&scene=124#wechat_redirect" target="_blank">https://mp.weixin.blakeFire</a>
`

Page({

  onShareAppMessage(){
    return {
      title: 'Contact Me',
      path: 'pages/AIGo/AIGo'
    }
  },

  data: {
      htmlSnip,
      weChatIndex,
      scenes_value: app.globalData.scene,
      page : {
        zh: '设    置',
        url: 'setting/setting'
      }
  },

  onLoad: function () {
    console.log('hello come blakeFire')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
