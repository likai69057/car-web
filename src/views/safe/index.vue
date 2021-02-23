<template>
  <div class="safe-container">
    <Back column="安全设置" />
    <ul class="group-link">
      <router-link class="arrow" to="/password" tag="a">
        修改登录密码
      </router-link>
      <router-link class="arrow" to="/capitalpassword" tag="a">
        设置资金密码
      </router-link>
      <router-link class="arrow" to="/mobile" tag="a">
        绑定手机号
      </router-link>
      <router-link class="arrow" to="/card" tag="a">
        绑定银行号
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Safe'
}
</script>

<style lang="less" scoped>
@import "index.less";
</style>
