// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://localhost:8090/api"
Vue.config.productionTip = false

router.beforeEach((to, from , next) => {
      if (to.meta.requireAuth) {
          if (store.state.user.username) {
            next()
          }else{
            next({
              path: '/login',
              query: {redirect: to.fullPath}
            })
          }
      }else{
        next()
      }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
