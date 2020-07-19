import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import store from './vuex'
Vue.use(VueRouter)

const Home = () => import('./components/Home.vue')
const Login = () => import('./components/LoginPage.vue')

const authGuard = (to, from, next) => {
  if (isAuthenticated()) {
    next()
  } else {
    const loginPathArgs = { name: 'login_path' }
    next(loginPathArgs)
  }
}

const autoLogin = (to, from, next) => {
  if (isAuthenticated()) {
    const rootPathArgs = { name: 'root_path' }
    next(rootPathArgs)
  } else {
    next()
  }
}

const badLink = (to, from, next) => {
  const rootPathArgs = { name: 'root_path' }
  next(rootPathArgs)
}

const isAuthenticated = () => {
  return store.getters['AuthStore/isAuthenticated']
}

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'root_path',
      beforeEnter: authGuard
    },
    {
      path: '/login',
      component: Login,
      name: 'login_path',
      beforeEnter: autoLogin
    },
    {
      path: '/*',
      name: '404_path',
      beforeEnter: badLink
    }
  ]
})

export default router
