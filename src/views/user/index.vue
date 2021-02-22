<template>
  <div class="user-container">
    <div class="user-wrap">
      <img src="@/assets/touxiang.jpg" alt="">
      <div class="meta">
        <h4 class="name">1774574746@qq.com</h4>
        <span>
        文明驾驶分
        <span>0</span>
      </span>
      </div>
    </div>
    <ul class="group-link">
      <router-link to="aa" tag="a">
        <i class="iconfont icon-wodezhanghu1"></i>
        我的账户
      </router-link>
      <router-link to="aa" tag="a">
        <i class="iconfont icon-fangxiangpan"></i>
        租车订单
      </router-link>
      <router-link to="aa" tag="a">
        <i class="iconfont icon-shimingrenzheng"></i>
        实名认证
      </router-link>
      <router-link to="aa" tag="a">
        <i class="iconfont icon-anquanshezhi"></i>
        安全设置
      </router-link>
      <router-link to="aa" tag="a">
        <i class="iconfont icon-bangzhuzhongxin"></i>
        帮助中心
      </router-link>
    </ul>
    <button class="logout">登出</button>
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style lang="less" scoped>
@import "index.less";
</style>
