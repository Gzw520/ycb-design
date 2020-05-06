import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/login',
    component: _ => import('../components/Login.vue')
  },
  {
    path: '/register',
    component: _ => import('../components/Register.vue')
  },
  {
    path: '/cart',
    component: _ => import('../components/Cart.vue')
  },
  {
    path: '/usercenter',
    component: _ => import('../components/Usercenter.vue')
  },
  {
    path: '/more',
    component: _ => import('../components/Echarts.vue')
  },
  {
    path: '/tianshui',
    component: _ => import('../components/Tianshui.vue')
  },
  {
    path: '/detail',
    component: _ => import('../components/Detail.vue')
  },
  {
    path: '/order',
    component: _ => import('../components/Order.vue')
  },
  {
    path: '/pay',
    component: _ => import('../components/Pay.vue')
  },
  {
    path: '/about',
    component: _ => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
