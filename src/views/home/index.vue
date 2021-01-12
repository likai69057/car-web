<template>
  <div class="home">
    <!-- 地图 -->
    <a-map />
    <!-- 地图 -->
    <!-- DOM渲染 -->
    <car
      @show-user="isUserShow=$event"
    />
    <!-- DOM渲染 -->
    <!-- 会员 -->
    <user />
    <!-- 会员 -->
  </div>
</template>

<script>
import AMap from '@/views/amap/index.vue'
import Car from '@/views/car/index.vue'
import User from '@/views/user/index.vue'

export default {
  name: 'home',
  components: {
    AMap,
    Car,
    User
  },
  data () {
    return {
      isUserShow: false
    }
  }
}
</script>

<style scoped lang="less">
</style>
