<template>
  <div class="safe-container">
    <Back column="绑定银行卡" />
    <div class="car-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="开户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="请选择银行"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="预留手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button-code" type="button">获取验证码</el-button>
          <el-input class="input-code" v-model="form.name" placeholder="手机验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button-black" type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="less" scoped>
@import "index.less";
</style>
