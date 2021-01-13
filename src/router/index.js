import Vue from 'vue'
import VueRouter from 'vue-router'

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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
