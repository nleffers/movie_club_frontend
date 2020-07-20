import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import AuthStore from './stores/auth_store'

Vue.use(Vuex)

const vuexUserHistory = new VuexPersistence({
  storage: window.localStorage,
  key: 'user',
  reducer: state => {
    return ({
      AuthStore: {
        userId: state.AuthStore.userId,
        username: state.AuthStore.username,
        token: state.AuthStore.token,
        tokenExpiration: state.AuthStore.tokenExpiration
      }
    })
  }
})

const store = new Vuex.Store({
  modules: {
    AuthStore
  },
  plugins: [
    vuexUserHistory.plugin
  ]
})

export default store
