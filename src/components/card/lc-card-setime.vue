/**
* Created by huangyilu on 20190221.
* 卡面 有效时间
*/
<template>
  <div class="lc-card-setime">
    <div class="lcs-title">选择有效时间</div>
    <div class="lcs-content">
      <div>2019-01-01</div>
      <div>2020-01-01</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  props: {},
  computed: {},
  created () { },
  mounted () { },
  watch: {},
  methods: {},
  components: {}
}
</script>

<style lang="less">
.lc-card-setime {
  width: 90%;
  background-color: antiquewhite;
  margin: 0 auto 20px;
  .lcs-title {
    color: royalblue;
    font-size: 16px;
  }
  .lcs-content {
    background-color: aliceblue;
    margin-top: 20px;
  }
}
</style>
