import Vue from 'vue'
import Vuex from 'vuex'
// import {IssueToken} from '../api/index.js'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    notal: ''
  },
  mutations: {
    saveToken (state, token) {
      state.token = token
      localStorage.setItem('token', store.state.token)
      console.log('token >>>> ', token)
    }
  },
  getters: {
    isLogined: state => {
      return typeof state.token === 'string' && state.token.length
    }
  }
})

window.onunload = function (e) {
  localStorage.setItem('token', store.state.token)
}
export default store
export {store}

