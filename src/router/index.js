import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/Register.vue')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/components/Index.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/components/product/ProductIndex.vue')
    },
    {
      path: '/personal',
      name: 'Personal',
      component: () => import('@/components/Personal.vue')
    }
  ],
  mode: 'history'
})
