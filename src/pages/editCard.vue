/**
* Created by huangyilu on 20190221.
* 编辑心卡
*/
<template>
  <div class="lc-edit-card">
    <!-- 卡面 -->
    <lc-card :cardInfo="cardInfo"/>

    <!-- 选择 卡面 背景 -->
    <lc-card-xscroll/>

    <!-- 选择 次数 下一个版本再做 -->
    <!-- <lc-card-times/> -->
    <!-- 选择 卡面 有效时间 下一个版本再做 -->
    <!-- <lc-card-setime/> -->
    <!-- 确认 -->
    <div class="lec-btn" @tap="bindCreateCardFn">送给朋友</div>
  </div>
</template>

<script>
import lcCard from 'components/card/lc-card'
import lcCardXscroll from 'components/card/lc-card-xscroll'
import lcCardSetime from 'components/card/lc-card-setime'
import lcCardTimes from 'components/card/lc-card-times'

import { mapState, mapActions } from 'vuex'

// import db from 'cloud/database'

export default {
  name: '',
  data () {
    return {}
  },
  props: {},
  computed: {
    ...mapState(['cardInfo'])
  },
  created () { },
  mounted () {
    // this.getCardBgUrls()
  },
  watch: {},
  methods: {
    ...mapActions(['getCardBgUrls']),
    bindCreateCardFn () {
      // console.log(' create card ', this.cardInfo)
      // let bgs = db.collectionBgs()
      // console.log(' bgs ', bgs)
    }
  },
  components: { lcCard, lcCardXscroll, lcCardSetime, lcCardTimes }
}
</script>

<style lang="less">
@import "~@/styles/fn.less";
page {
  background-color: #f9f9f9;
}

.lc-edit-card {
  .lec-btn {
    position: fixed;
    bottom: 20px;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    width: 80%;
    margin: 40px 10% 0;
    color: white;
    background-color: @color-main;
  }
}
</style>
