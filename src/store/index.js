import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user: {
            username: window.sessionStorage
              .getItem('user' || '[]') == null ? ''
              : JSON.parse(window.sessionStorage.getItem('user' || '[]')).username,
            id: window.sessionStorage
              .getItem('user' || '[]') == null ? ''
              : JSON.parse(window.sessionStorage.getItem('user' || '[]')).id
          }
        
    },

    mutations:{
        login(state,user){
            state.user = user
            

            sessionStorage.setItem('user',JSON.stringify(user))
            

        }
    }
})