/**
* Created by huangyilu on 20190220.
* 首页 卡片 item
*/
<template>
  <div class="lc-card-item" :style="{ 'width': cardWidth,'height': cardHeight }" @click="bindItemClickFn">
    <div class="lci-img">
      <!-- <img :src="item.url" alt> -->
      <image
          mode="aspectFill"
          :src="item.url"
      ></image>
    </div>
    <div class="lci-txt">{{ item.text }}</div>
  </div>
</template>

<script>
import systemInfo from 'utils/systemInfo'
import navigate from 'utils/navigate'

export default {
  name: '',
  data () {
    return {}
  },
  props: {
    item: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    cardWidth () {
      return (systemInfo.windowWidth / 2 - 40) + 'px'
    },
    cardHeight () {
      return (systemInfo.windowWidth / 2 - 60) + 'px'
    }
  },
  created () { },
  mounted () { },
  watch: {},
  methods: {
    bindItemClickFn () {
      navigate.push({ url: '/pages/editCard' })
    }
  },
  components: {}
}
</script>

<style lang="less">
.lc-card-item {
  width: 150px;
  height: 100px;
  padding: 2px;
  line-height: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 15rpx 32rpx 7rpx #e4e4e4;
  .lci-img {
    width: 100%;
    height: 75%;
    image {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .lci-txt {
    height: 25%;
    line-height: 250%;
    text-align: center;
    // background-color: rosybrown;
    font-size: 14px;
    color: #2e2e2e;
  }
}
.lc-card-item:nth-child(odd) {
  // background: #040303;
  margin-left: 20px;
  float: left;
}
.lc-card-item:nth-child(even) {
  // background: aquamarine;
  margin-right: 20px;
  float: right;
}
</style>
