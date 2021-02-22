<template>
  <div class="nav-bar">
    <ul>
      <li><i class="iconfont icon-wenhao"></i></li>
      <li><i class="iconfont icon-sousuo"></i></li>
      <li>
        <a href="javascript: void(0)" class="select-car-btn">选择车辆</a>
      </li>
      <li><i class="iconfont icon-dingwei"></i></li>
      <li><i class="iconfont icon-gerenzhongxin" @click="$router.push('user')"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped lang="less">
.nav-bar{
  position: fixed;
  left: 25%;
  bottom: 150px;
  right: 0px;
  z-index: 10;
  li{
    display: inline-block;
    list-style: none;
    margin: 0px 17px;
    cursor: pointer;
  }
}
</style>
