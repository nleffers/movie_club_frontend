// import Vue from 'vue'
// import Vuex from 'vuex'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue/dist/vue.esm'
import BootstrapVue from 'bootstrap-vue'
import store from './vuex'
import router from './router.js'
import App from './App.vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(BootstrapVue)
Vue.use(Snotify, options)

const app = new Vue({
  render: h => h(App),
  store,
  router,
  el: '#app'
})
