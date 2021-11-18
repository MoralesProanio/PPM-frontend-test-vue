import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    welcome : true
  },
  mutations: {
    disappear:state => {
      state.welcome = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
