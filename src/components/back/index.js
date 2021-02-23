// 把返回头部组件注册成全局组件 再在main.js加载全局组件
import Vue from 'vue'
import Back from './back'
Vue.component('Back', Back)
