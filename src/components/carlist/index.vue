<template>
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
</template>

<script>
export default {
  name: 'CarItem'
}
</script>

<style scoped lang="less">
@import "index.less";
</style>
