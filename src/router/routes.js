// 首页
const mainIndex = {
  path: '/pages/mainIndex',
  name: 'mainIndex',
  config: {
    navigationBarTitleText: '心卡',
    enablePullDownRefresh: true,
    usingComponents: {
      'i-button': '/static/iView/button/index',
      'i-toast': '/static/iView/toast/index'
    }
  }
}

// 编辑心卡
const editCard = {
  path: '/pages/editCard',
  name: 'editCard',
  config: {
    navigationBarTitleText: '定制你的心卡',
    enablePullDownRefresh: true,
    usingComponents: {
      'i-button': '/static/iView/button/index',
      'i-toast': '/static/iView/toast/index'
    }
  }
}

const index = {
  path: '/pages/index/index',
  name: 'index',
  config: {
    navigationBarTitleText: 'hhh',
    enablePullDownRefresh: true
  }
}

// counter
const counter = {
  path: '/pages/counter/index',
  name: 'counter',
  config: {
    navigationBarTitleText: 'hhh',
    enablePullDownRefresh: true
  }
}

// logs
const logs = {
  path: '/pages/logs/index',
  name: 'logs',
  config: {
    navigationBarTitleText: 'hhh',
    enablePullDownRefresh: true
  }
}

module.exports = [mainIndex, editCard, index, counter, logs]
