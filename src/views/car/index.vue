<template>
  <div class="car-wrap">
    <div class="car-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <car-item height="600px" />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
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
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
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
.car-swiper-wrap{
  position: relative;
  padding: 0px 50px;
  .swiper-button-next,
  .swiper-button-prev{
    top: 50%;
    margin-top: -50px;
    width: 60px;
    height: 100px;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0 0 18px 0 rgb(0, 0, 0, .2);
    transition: all .3s ease 0s;
  }
  .swiper-button-prev{
    left: 53px;
    &:after{
      content: "";
      width: 17px;
      height: 17px;
      margin-left: 5px;
      box-sizing: border-box;
      border-left: 3px #000 solid;
      border-top: 3px #000 solid;
      transform: rotate(-45deg);
    }
    &:hover{
      background-color: #34393f;
      &:after{
        border-left: 3px #00a3ff solid;
        border-top: 3px #00a3ff solid;
      }
    }
  }
  .swiper-button-next{
    right: 53px;
    &:after{
      content: "";
      width: 17px;
      height: 17px;
      margin-right: 5px;
      box-sizing: border-box;
      border-right: 3px #000 solid;
      border-top: 3px #000 solid;
      transform: rotate(45deg);
    }
    &:hover{
      background-color: #34393f;
      &:after{
        border-right: 3px #00a3ff solid;
        border-top: 3px #00a3ff solid;
      }
    }
  }
}
.swiper{
  padding: 10px 10px;
  overflow: initial; // 车辆详情展开时不受溢出隐藏的影响
}
</style>
