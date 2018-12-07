import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/Users/index'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
       User
   }
})