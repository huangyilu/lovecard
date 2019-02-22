/**
* Created by huangyilu on 20190220.
* 首页
*/
<template>
  <div>
    <lc-swiper v-bind:picImgs="picImgs"/>

    <!-- <i-button @click="handleClick" type="success" shape="circle" size="large">大尺寸</i-button> -->
    <div class="lc-text">即刻表达心意</div>

    <lc-card-list/>

    <i-toast id="toast"/>
  </div>
</template>

<script>
import lcSwiper from 'components/index/lc-swiper'
import lcCardList from 'components/index/lc-card-list'

import { Toast } from 'static/iView/base/index'

export default {
  name: '',
  data () {
    return {
      picImgs: ['https://hbimg.b0.upaiyun.com/6cd6db71c5a5bd1d1b4036cbf4f8c2ebba45d0a016a5d-BTKrKZ_fw658', 'https://hbimg.b0.upaiyun.com/615c2682c293a316a137c410ecd87f321d4bbd2e2c733-SDrBC1_fw658']
    }
  },
  props: {},
  computed: {},
  created () { },
  mounted () {

  },
  watch: {},
  methods: {
    handleClick () {
      Toast({
        content: '这是文本提示'
      })
    }
  },
  components: { lcSwiper, lcCardList }
}
</script>

<style lang="less">
.lc-swiper-view {
  img {
    width: 100%;
    height: 100%;
  }
}
.lc-text {
  padding: 20px;
  font-size: 15px;
}
</style>
