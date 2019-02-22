/**
* Created by huangyilu on 20190220.
* 首页 卡片list
*/
<template>
  <div class="lc-card-list">
    <lc-card-item v-for="item in list" :key="i" :item="item"/>
  </div>
</template>

<script>
import lcCardItem from 'components/index/lc-card-item'

export default {
  name: '',
  data () {
    return {
      list: [{
        url: 'https://hbimg.b0.upaiyun.com/3de5c298b22c81bd73ca4af67b85adea30224e09311f4-fWfoMB_fw658',
        text: '定制你的心意'
      }, {
        url: 'https://hbimg.b0.upaiyun.com/e94fd609ae3364742161ce15f1fc639b4ddfc44e116a5-QVqJfc_fw658',
        text: '按摩卡'
      }, {
        url: 'https://hbimg.b0.upaiyun.com/3de5c298b22c81bd73ca4af67b85adea30224e09311f4-fWfoMB_fw658',
        text: '免洗碗卡'
      }]
    }
  },
  props: {},
  computed: {},
  created () { },
  mounted () { },
  watch: {},
  methods: {},
  components: { lcCardItem }
}
</script>

<style lang="less">
</style>
