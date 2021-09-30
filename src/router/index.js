import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/UserLogin.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/components/product/Index.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/components/Personal/Profile.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/manager',
      name: 'Manager',
      component: () => import('@/components/Personal/Manager.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/details',
      name: 'Details',
      component: () => import('@/components/Product/Details.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import('@/components/Product/Add.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/components/Index.vue')
    },
    {
      path: '/delete',
      name: 'Delete',
      component: () => import('@/components/product/Delete.vue'),
      meta: {
        requireAuth: true
      }
    },
  
  ],
  mode: 'history'
})
