import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import store from './vuex'
Vue.use(VueRouter)

const HelloWorld = () => import('./components/HelloWorld.vue')

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld,
      name: 'root_path'
    }
  ]
})

export default router
