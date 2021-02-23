<template>
  <div class="head-back">
    <div class="back">
      <i class="back-arrow" @click="$router.back()"></i>
      <h4 class="title">{{ column }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Back',
  props: {
    column: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.head-back{
  position: relative;
  padding-bottom: 147px;
}
.back{
  height: 21px;
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  .title{
    font-size: 16px;
    margin-left: 20px;
    color: #fff;
    font-weight: lighter;
  }
  .back-arrow{
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    &:before{
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 12px;
      width: 14px;
      height: 14px;
      border-left: 1px solid #00a3ff;
      border-top: 1px solid #00a3ff;
      box-sizing: border-box;
      transform: rotate(-45deg);
    }
  }
}
</style>
