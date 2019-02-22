import wx from 'wx'

// 是否为iphoneX
const isIphoneX = (() => {
  let res = wx.getSystemInfoSync()
  let model = res.model
  return model.search('iPhone X') !== -1
})()

// 屏幕宽度
const windowWidth = (() => {
  let res = wx.getSystemInfoSync()
  return res.windowWidth
})()

// 获取联网状态
const getNetworkType = (async () => {
  let res = await new Promise((resolve, reject) => {
    wx.getNetworkType({ success: resolve, fail: reject })
  })
  let networkType = res.networkType
  return networkType
})()

export default {
  isIphoneX,
  windowWidth,
  getNetworkType
}
