<template>
  <div class="home">
    <el-amap
      class="amapContainer"
      vid="amapDemo"
      :events="events"
    />
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'

export default {
  name: 'AMap',
  data () {
    return {
      map: null,
      events: {}
    }
  },
  mounted () {
    // 初始化地图层级
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map('amapContainer', {
        center: [116.427867, 39.902528], // 中心坐标
        zoom: 11 // 缩放比例 默认[3-18]
      })
    })
  }
}
</script>

<style scoped lang="less">
.home{
  height: 100vh;
}
</style>
