<script>
import wx from 'wx'

export default {
  onLaunch () {
    // 调用云开发
    wx.cloud.init({
      env: 'atest-cdea75'
    })
    console.log('app.vue -- wx.cloud')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
