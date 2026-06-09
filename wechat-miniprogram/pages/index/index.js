Page({
  data: {
    cards: [
      {
        type: 'photo',
        tag: '照片库',
        title: '2026 骑行照片合集',
        desc: '按时间、路线、活动分类收藏照片。后续把百度网盘相册或文件夹链接放到这里。',
        chips: ['天镜湖', '团练', '旅行骑'],
        url: ''
      },
      {
        type: 'route',
        tag: '路书',
        title: '经典路线与路书',
        desc: '存放 GPX、两步路/行者/Strava 路线截图、补给点和注意事项。',
        chips: ['GPX', '补给点', '爬升'],
        url: ''
      },
      {
        type: 'know',
        tag: '知识分享',
        title: '骑行知识资料夹',
        desc: '训练、补给、装备、维护、FTP、Z2、长距离策略等资料统一归档。',
        chips: ['训练', '装备', '补给'],
        url: ''
      }
    ]
  },
  scrollToPhotos() {
    wx.pageScrollTo({ selector: '#photos', duration: 300 })
  },
  showEditTip() {
    wx.showModal({
      title: '替换链接',
      content: '把 pages/index/index.js 中每个卡片的 url 改成你的百度网盘分享链接。',
      showCancel: false
    })
  },
  openLink(e) {
    const url = e.currentTarget.dataset.url
    if (!url) {
      wx.showToast({ title: '请先填写链接', icon: 'none' })
      return
    }
    wx.setClipboardData({
      data: url,
      success() {
        wx.showModal({
          title: '链接已复制',
          content: '百度网盘链接已复制，请到浏览器或百度网盘 App 打开。',
          showCancel: false
        })
      }
    })
  }
})
