<template>
  <div class="car-wrap">
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
    <button @click="onUser">汽车列表</button>
  </div>
</template>

<script>
export default {
  name: 'Car',
  data () {
    return {
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
.car-wrap{
  position: fixed;
  left: 0px;
  bottom: 94px;
  right: 0px;
  z-index: 11;
  .car-item{
    width: 450px;
    height: 200px;
    margin: auto;
    box-sizing: border-box;
    padding: 15px 15px 0px;
    background-color: #fff;
    border-radius: 24px;
    -webkit-box-shadow: 0 0 18px 0 rgb(0, 0, 0, .2);
    -moz-box-shadow: 0 0 18px 0 rgb(0, 0, 0, .2);
    -ms-box-shadow: 0 0 18px 0 rgb(0, 0, 0, .2);
    -o-box-shadow: 0 0 18px 0 rgb(0, 0, 0, .2);
    box-shadow: 0 0 8px 0 rgb(0, 0, 0, .2);
    header{
      display: flex;
      h4, p{
        flex: 1;
        margin: 0 0;
      }
    }
  }
}
.car-logo{
  img{
    display: inline-block;
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .name{
    font-size: 16px;
  }
}
.car-attr{
  text-align: right;
  opacity: .5;
  line-height: 30px;
  font-size: 15px;
  text-align: right;
  padding-right: 40px;
}
.car-content{
  display: flex;
  margin: 6px 0px 7px 10px;
  .car-info{
    flex: 1;
  }
  img{
    height: 120px;
    padding: 0px 40px;
  }
  .car-number{
    font-size: 17px;
    font-weight: lighter;
    margin-bottom: 0px;
  }
  .car-electric{
    display: inline-block;
    padding: 0px;
    margin: 0px;
    li{
      width: 7px;
      height: 24px;
      border-radius: 100px;
      background-color: #e1e1e1;
      margin-right: 3px;
      list-style: none;
      display: inline-block;
    }
    li.active{
      background: -webkit-linear-gradient(#17a8fa, #108dd9);
      background: -moz-linear-gradient(#17a8fa, #108dd9);
      background: -ms-linear-gradient(#17a8fa, #108dd9);
      background: -o-linear-gradient(#17a8fa, #108dd9);
      background: linear-gradient(#17a8fa, #108dd9);
    }
  }
  .distance{
    display: inline-block;
    margin-left: 5px;
    strong{
      font-size: 22px;
      margin: 0px 5px;
    }
    sub{
      position: relative;
      top: -3px;
    }
    sub:first-child{
      opacity: .7;
    }
  }
}
.footer{
  .parking{
    text-decoration: none;
  }
}
</style>
