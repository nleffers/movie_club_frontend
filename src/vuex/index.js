import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import UserInfoStore from './stores/user_info_store'
import MovieStore from './stores/movie_store'

Vue.use(Vuex)

const vuexUserInfoHistory = new VuexPersistence({
  storage: window.localStorage,
  key: 'user_info',
  reducer: state => {
    return ({
      UserInfoStore: {
        id: state.UserInfoStore.id,
        username: state.UserInfoStore.username,
        email: state.UserInfoStore.email,
        firstName: state.UserInfoStore.firstName,
        lastName: state.UserInfoStore.lastName,
        emailNotifications: state.UserInfoStore.emailNotifications,
        movies: state.UserInfoStore.movies,
        reviews: state.UserInfoStore.reviews,
        token: state.UserInfoStore.token,
        tokenExpiration: state.UserInfoStore.tokenExpiration
      }
    })
  }
})

const store = new Vuex.Store({
  modules: {
    MovieStore,
    UserInfoStore
  },
  plugins: [
    vuexUserInfoHistory.plugin
  ]
})

export default store
