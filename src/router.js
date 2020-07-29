import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import store from './vuex'
Vue.use(VueRouter)

const Home = () => import('./components/Home.vue')
const Login = () => import('./components/user/LoginPage.vue')
const Join = () => import('./components/user/JoinPage.vue')
const MyAccount = () => import('./components/user/UserAccount.vue')
const MyMovies = () => import('./components/user/UserMovies.vue')
const User = () => import('./components/user/User.vue')
const Movie = () => import('./components/movie/Movie.vue')
const Movies = () => import('./components/movie/Movies.vue')
const MovieSearch = () => import('./components/movie/MovieSearch.vue')

const badLink = (to, from, next) => {
  const rootPathArgs = { name: 'root_path' }
  next(rootPathArgs)
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
      component: MyAccount,
      name: 'my_account_path'
    },
    {
      path: '/my_movies',
      component: MyMovies,
      name: 'my_movies_path'
    },
    {
      path: '/movies',
      component: Movies,
      name: 'movies_path'
    },
    {
      path: '/movies/:id',
      component: Movie,
      name: 'movie_path',
      props: true
    },
    {
      path: '/?',
      component: MovieSearch,
      name: 'movie_search_path',
      props: (route) => ({
        ...route.params
      })
    },
    {
      path: '/user/:id',
      component: User,
      name: 'user_path',
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
