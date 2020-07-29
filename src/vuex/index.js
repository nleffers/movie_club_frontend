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
        token: state.UserInfoStore.token,
        tokenExpiration: state.UserInfoStore.tokenExpiration
      }
    })
  }
})

const vuexMovieSearchResults = new VuexPersistence({
  storage: window.localStorage,
  key: 'movie_search_results',
  reducer: state => {
    return ({
      MovieStore: {
        movie: state.MovieStore.movie,
        searchResults: state.MovieStore.searchResults,
        topRated: state.MovieStore.topRated,
        popular: state.MovieStore.popular,
        nowPlaying: state.MovieStore.nowPlaying,
        reviews: state.MovieStore.reviews
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
    vuexUserInfoHistory.plugin,
    vuexMovieSearchResults.plugin
  ],
  getters: {
    currentRoute(state) {
      return state.route.name
    }
  }
})

export default store
