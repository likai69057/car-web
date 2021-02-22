<template>
  <div>
    <section class="car-item">
      <header>
        <h4 class="car-logo">
          <img src="@/assets/102.png" alt="">
          <span class="name">Mustang 2019款</span>
        </h4>
        <p class="car-attr">新能源汽车 5座</p>
      </header>
      <div class="car-content">
        <div class="car-info">
          <h4 class="car-number">粤B B745N8</h4>
          <div>
            <ul class="car-electric">
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p class="distance">
              <sub>约</sub>
              <strong>600</strong>
              <sub>KM</sub>
            </p>
          </div>
        </div>
        <img src="@/assets/h7.png" alt="">
      </div>
      <footer>
        <a href="javascript: void(0);" class="parking">某某停车场</a>
      </footer>
    </section>
    <section class="car-item car-detailed" :style="'height:' + height">
      <div class="scroll">
        <h4 class="colum">
          某某停车场
          <i class="close"></i>
        </h4>
        <header>
          <h4 class="car-logo">
            <img src="@/assets/102.png" alt="">
            <span class="name">Mustang 2019款</span>
          </h4>
          <p class="car-attr">新能源汽车 5座</p>
        </header>
        <img class="big-img" src="@/assets/h7.png" alt="">
        <div class="clearfix">
          <div class="fz-24 pull-left">粤B745N8</div>
          <p class="distance pull-right" style="margin: 0 0 0 0">
            <sub>约</sub>
            <strong>600</strong>
            <sub>KM</sub>
          </p>
        </div>
        <div class="car-electric-box">
          <div class="p-r">
            <span class="e-high"></span>
            <span class="e-bg"></span>
          </div>
        </div>
        <p class="info color-main text-center">取车约支付12.0元停车费，实际补贴12.0元</p>
        <ul class="car-style-list">
          <li class="current">
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">月租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">月租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
          <h4 class="name">日租车</h4>
          <span class="price">￥300/1天</span>
          </li>
        </ul>
        <div class="clause-dec clearfix">
          <span class="pull-left">参保《全面保障服务》用车更放心</span>
          <i class="current"></i>
        </div>
      </div>
      <a href="javascript: void(0)" class="select-car-btn">预约用车</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CarItem',
  props: {
    height: {
      type: String,
      default: '200px'
    }
  }
}
</script>

<style scoped lang="less">
@import "index.less";
</style>
