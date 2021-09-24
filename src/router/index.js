import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Personal from '@/components/Personal.vue'
import Register from '@/components/Register.vue'
import Home from '@/components/Home.vue'
import Index from '@/components/home/Index.vue'
import ProductIndex from '@/components/product/ProductIndex.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/product',
          name: 'Product',
          component: ProductIndex,
          meta:{
            requireAuth: true
          }
        }
      ]
    }
  ],
  mode: "history"
})
