import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import store from './vuex'
Vue.use(VueRouter)

const Home = () => import('./components/Home.vue')
const Login = () => import('./components/user/LoginPage.vue')
const Join = () => import('./components/user/JoinPage.vue')
const UserAccount = () => import('./components/user/UserAccount.vue')
const UserMovies = () => import('./components/user/UserMovies.vue')
const Movie = () => import('./components/movie/Movie.vue')

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
  return store.getters['UserInfoStore/isAuthenticated']
}

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'root_path'
    },
    {
      path: '/join',
      component: Join,
      name: 'join_path'
    },
    {
      path: '/login',
      component: Login,
      name: 'login_path'
    },
    {
      path: '/my_account',
      component: UserAccount,
      name: 'my_account_path'
    },
    {
      path: '/my_movies',
      component: UserMovies,
      name: 'my_movies_path'
    },
    {
      path: '/movies/:id',
      component: Movie,
      name: 'movie_path',
      props: true
    },
    {
      path: '/*',
      name: '404_path',
      beforeEnter: badLink
    }
  ]
})

export default router
