import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/Users'
import Comment from './modules/Comments'
import Post from './modules/Posts'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {},
   getters: {}, 
   mutations: {},
   actions: {},
   modules: {
       User,
       Comment,
       Post
   }

})