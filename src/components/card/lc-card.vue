/**
* Created by huangyilu on 20190221.
* 卡面
*/
<template>
  <div class="lc-card">
    <div class="lci-bg">
      <img :src="cardInfo.bgUrl" alt>
    </div>
    <div class="lci-txt">{{ cardInfo.text }}</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  props: {
    cardInfo: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {},
  created () { },
  mounted () { },
  watch: {},
  methods: {},
  components: {}
}
</script>

<style lang="less">
.lc-card {
  position: relative;
  .lci-bg {
    width: 90%;
    height: 200px;
    margin: 20% auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15rpx 32rpx 7rpx #e4e4e4;
  }
  .lci-txt {
    color: white;
    position: absolute;
    bottom: 20px;
    right: 40px;
  }
}
</style>
