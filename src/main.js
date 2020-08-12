import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import axios from 'axios'

import '@/assets/css/reset/normalize.css';

Vue.config.productionTip = false

Vue.prototype.$axios = axios

axios.defaults.baseURL = '/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
