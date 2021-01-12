<template>
  <div class="car-wrap">
    <button @click="onUser">汽车列表</button>
  </div>
</template>

<script>
export default {
  name: 'Car',
  data () {
    return {
      userShow: false
    }
  },
  methods: {
    onUser () {
      this.userShow = !this.userShow
      console.log(this.userShow)
      this.$emit('show-user', this.userShow)
    }
  }
}
</script>

<style scoped lang="less">
.car-wrap{
  position: fixed;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 100;
}
</style>
