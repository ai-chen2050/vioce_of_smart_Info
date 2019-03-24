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
  data: {
      htmlSnip,
      weChatIndex,
      scenes_value: app.globalData.scene
  },

  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
