import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import AuthStore from './stores/auth_store'

Vue.use(Vuex)

const vuexStoreHistory = new VuexPersistence({
  storage: window.localStorage,
  key: 'base_store',
  reducer: state => {
    return ({
      appVersion: state.appVersion
    })
  }
})

const store = new Vuex.Store({
  modules: {
    AuthStore
  },
  state: {
    appVersion: null
  },
  getters: {
    appVersion: (state) => {
      return state.appVersion
    }
  },
  actions: {
    checkVersion({ dispatch }) {
      let oldVersion
      const newVersion = JSON.parse(unescape(process.env.PACKAGE_JSON || '%7Bversion%3A0%6D')).version
      const rawBaseStore = window.localStorage.base_store

      if (rawBaseStore) {
        const parsedBaseStore = JSON.parse(rawBaseStore)
        oldVersion = parsedBaseStore.appVersion
      }

      if (oldVersion != newVersion) {
        dispatch('handleVersionUpdate', newVersion)
      }
    },
    async handleVersionUpdate({ dispatch }, newVersion) {
      try {
        await dispatch('setAppVersion', newVersion)
      }
      catch {
        console.log('error')
      }
    }
  },
  mutations: {
    setAppVersion(state, version) {
      state.appVersion = version
    }
  },
  plugins: [
    vuexStoreHistory.plugin
  ]
})

export default store
