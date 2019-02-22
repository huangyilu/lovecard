/**
* Created by huangyilu on 20190220.
* 首页 header swiper
*/
<template>
  <div class="lc-swiper-view">
    <swiper
      class="swiper"
      :style="{ width: windowWidth, height: windowHeight }"
      :indicator-dots="picImgs.length > 1 ? true : false"
      autoplay="true"
      circular="true"
      interval="5000"
      duration="400"
    >
      <block v-for="(item, index) in picImgs" :index="index" :key="key">
        <swiper-item>
          <img :src="item" class="slide-image" mode="aspectFill">
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
import systemInfo from 'utils/systemInfo'

export default {
  name: 'lc-swiper',
  data () {
    return {}
  },
  props: {
    picImgs: {
      type: Array,
      default: []
    }
  },
  computed: {
    windowWidth () {
      return systemInfo.windowWidth + 'px'
    },
    windowHeight () {
      return systemInfo.windowWidth - 50 + 'px'
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style leng="less">
</style>
