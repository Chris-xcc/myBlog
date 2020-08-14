import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";


Vue.use(Vuex)

const state = {
    token: '', //初始化token
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {}
})
export default store;