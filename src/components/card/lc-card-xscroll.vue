/**
* Created by huangyilu on 20190221.
* 左右滑动选择卡面背景
*/
<template>
  <div class="lc-card-x">
    <div
      :class="['lcx-item', { 'li-active' : item.active }]"
      v-for="item in cardBgUrls"
      :key="index"
      @tap="bindCardFn(index)"
    >
      <img :src="item.bgUrl" alt>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: '',
  data () {
    return {}
  },
  props: {},
  computed: {
    ...mapState(['cardBgUrls'])
  },
  created () { },
  mounted () { },
  onReady () {
    // console.log(' onReady ', this.cardBgs)
  },
  watch: {},
  methods: {
    ...mapMutations(['setCardBgUrlIndex']),
    bindCardFn (index) {
      this.setCardBgUrlIndex(index)
    }
  },
  components: {}
}
</script>

<style lang="less">
@import "~@/styles/fn.less";

.lc-card-x {
  width: 90%;
  // height: 74px;
  margin: 20px auto;
  // background-color: antiquewhite;
  overflow-x: scroll;
  white-space: nowrap;
  .lcx-item {
    width: 97px;
    height: 70px;
    display: inline-block;
    margin-right: 10px;
    border-radius: 10px;
    overflow: hidden;
    &:last-child {
      margin-right: 0px;
    }
    &.li-active {
      border: 3px @color-main solid;
    }
  }
}
</style>
