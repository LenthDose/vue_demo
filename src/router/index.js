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
      path: '/product',
      name: 'Product',
      component: () => import('@/components/product/ProductIndex.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/components/Personal/Profile.vue')
    },
    {
      path: '/manager',
      name: 'Manager',
      component: () => import('@/components/Personal/Manager.vue')
    },
    {
      path: '/show',
      name: 'Show',
      component: () => import('@/components/Product/productShow.vue')
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import('@/components/Product/productAdd.vue')
    },
  ],
  mode: 'history'
})
