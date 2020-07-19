// import Vue from 'vue'
// import Vuex from 'vuex'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue/dist/vue.esm'
import store from './vuex'
import router from './router.js'
import App from './App.vue'

const app = new Vue({
  render: h => h(App),
  store,
  router,
  el: '#app'
})
