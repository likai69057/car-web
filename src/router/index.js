import Vue from 'vue'
import VueRouter from 'vue-router'

// 用于结局路由跳转重复出现红字警告 vue-router3.0已修复该问题
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home'),
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user')
      },
      {
        path: '/safe',
        name: 'Safe',
        component: () => import('@/views/safe')
      },
      {
        path: '/password',
        name: 'Password',
        component: () => import('@/views/safe/password')
      },
      {
        path: '/capitalpassword',
        name: 'CapitalPassword',
        component: () => import('@/views/safe/capitalpassword')
      },
      {
        path: '/mobile',
        name: 'Mobile',
        component: () => import('@/views/safe/mobile')
      },
      {
        path: '/card',
        name: 'Card',
        component: () => import('@/views/safe/card')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
