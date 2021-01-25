<template>
  <div class="car-wrap">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <car-item />
      </swiper-slide>
      <swiper-slide>
        <car-item />
      </swiper-slide>
      <swiper-slide>
        <car-item />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <button @click="onUser">汽车列表</button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import CarItem from '@/components/carlist/index.vue'

export default {
  name: 'Car',
  components: {
    Swiper,
    SwiperSlide,
    CarItem
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -100
      }
    }
  },
  methods: {
    onUser () {
      this.$router.push({
        name: 'User'
      })
    }
  }
}
</script>

<style scoped lang="less">
.car-wrap {
  position: fixed;
  left: 0px;
  bottom: 94px;
  right: 0px;
  z-index: 11;
}
.swiper{
  padding: 10px 0px;
}
</style>
