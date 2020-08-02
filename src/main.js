import Vue from 'vue/dist/vue.esm'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import { sync } from 'vuex-router-sync'
import store from './vuex'
import router from './router.js'
import App from './App.vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './styles/snotify-styles.css'

const unsync = sync(store, router)

const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(VueYouTubeEmbed)
Vue.use(Snotify, options)

const app = new Vue({
  render: h => h(App),
  store,
  router,
  el: '#app'
})
