/**
* Created by huangyilu on 20190221.
* 卡面 选择次数
*/
<template>
  <div class="lc-card-times">
    <div class="lct-title">有效次数：{{ times }}</div>
    <slider @change="bindSliderChange" step="1"/>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      times: 0
    }
  },
  props: {},
  computed: {},
  created () { },
  mounted () { },
  watch: {},
  methods: {
    bindSliderChange (res) {
      console.log(' change value ', res.mp.detail.value)
      this.times = res.mp.detail.value
    }
  },
  components: {}
}
</script>

<style lang="less">
.lc-card-times {
  width: 85%;
  margin: 10px auto;
  slider {
    width: 100%;
    margin: 10px 10px 0 0;
  }
}
</style>
