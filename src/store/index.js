import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";


Vue.use(Vuex)

const state = {
  token: window.localStorage.getItem('token') ? window.localStorage.getItem('token') : '', //初始化token
  page: window.localStorage.getItem('page') ? window.localStorage.getItem('page') : 1, //初始化page
  email: window.localStorage.getItem('email') ? window.localStorage.getItem('email') : '', //初始化email
  username: window.localStorage.getItem('username') ? window.localStorage.getItem('username') : '', //初始化username
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
})
export default store;