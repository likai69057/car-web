<template>
  <div class="home">
    <!-- 地图 -->
    <a-map />
    <!-- 地图 -->
    <!-- 汽车列表渲染 -->
    <car />
    <!-- 汽车列表渲染 -->
    <!-- 导航组件渲染 -->
    <navbar />
    <!-- 导航组件渲染 -->
    <!-- 会员 -->
    <div class="children-view" :class="{'open': isUserShow}">
      <router-view />
    </div>
    <!-- 会员 -->
  </div>
</template>

<script>
import AMap from '@/views/amap/index.vue'
import Car from '@/views/car/index.vue'
import Navbar from '@/components/navbar/index.vue'

export default {
  name: 'home',
  components: {
    AMap,
    Car,
    Navbar
  },
  data () {
    return {
    }
  },
  computed: {
    isUserShow () {
      const router = this.$route
      return router.name === 'User'
    }
  }
}
</script>

<style scoped lang="less">
.children-view{
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: -600px;
  z-index: 101;
  background-color: #34393f;
  width: 410px;
  -webkit-transition: all .3s ease 0s;
  -moz-transition: all .3s ease 0s;
  -ms-transition: all .3s ease 0s;
  -o-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
}
.open{
  right: 0px;
}
</style>
