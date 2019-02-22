// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index'

// import wx from 'wx'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  state: {
    // 心卡 - 背景图 列表
    cardBgUrls: [
      {
        bgId: '1',
        active: true,
        bgUrl: 'https://hbimg.b0.upaiyun.com/e94fd609ae3364742161ce15f1fc639b4ddfc44e116a5-QVqJfc_fw658'
      },
      {
        bgId: '2',
        active: false,
        bgUrl: 'https://hbimg.b0.upaiyun.com/3de5c298b22c81bd73ca4af67b85adea30224e09311f4-fWfoMB_fw658'
      },
      {
        active: false,
        bgId: '3',
        bgUrl: 'https://hbimg.b0.upaiyun.com/3de5c298b22c81bd73ca4af67b85adea30224e09311f4-fWfoMB_fw658'
      },
      {
        active: false,
        bgId: '4',
        bgUrl: 'https://hbimg.b0.upaiyun.com/3de5c298b22c81bd73ca4af67b85adea30224e09311f4-fWfoMB_fw658'
      },
      {
        active: false,
        bgId: '5',
        bgUrl: 'https://hbimg.b0.upaiyun.com/3de5c298b22c81bd73ca4af67b85adea30224e09311f4-fWfoMB_fw658'
      }
    ],
    // 心卡 - 背景图 index
    cardBgUrlIndex: 0,
    // 心卡 - 选中的卡片信息
    cardInfo: {
      cardId: '001',
      bgId: 0,
      bgUrl: 'https://hbimg.b0.upaiyun.com/3de5c298b22c81bd73ca4af67b85adea30224e09311f4-fWfoMB_fw658',
      text: '手工按摩一次'
    }
  },
  getters: {
    // 心卡 - 选中的 背景图
    currentCardBgUrl: state => state.cardBgs[state.cardBgUrlIndex]
  },
  mutations: {
    // 设置心卡背景图 index
    setCardBgUrlIndex (state, index) {
      state.cardBgUrlIndex = index
      state.cardBgUrls.forEach(item => {
        item.active = false
      })
      state.cardBgUrls[index].active = true
      state.cardInfo.bgUrl = state.cardBgUrls[index].bgUrl
      state.cardInfo.bgId = state.cardBgUrls[index].bgId
    },
    // 设置 心卡 背景图集
    setCardBgUrls (state, data) {
      state.cardBgUrls = data
    }
  },
  actions: {
    async getCardBgUrls ({ commit }) {
      let res = await api.getCardBgUrls()
      console.log(' getCardBgUrls = ', res.data)
      commit('setCardBgUrls', res.data)
      return res.data
    }
  }
})

export default store
