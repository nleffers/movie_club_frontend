import router from '@/router.js'
import Vue from 'vue/dist/vue.esm'
import users from '@/requests/users.js'

const actions = {
  async login ({ commit }, loginData) {
    const snotify = Vue.prototype.$snotify

    await users.loginUser(loginData)
    .then(res => {
      const now = new Date()
      const expirationDate = new Date(now.getTime() + (24 * 3600 * 1000))
      commit('setUserInfo', res.data)
      commit('setTokenExpiration', expirationDate)
      router.replace({ name: 'root_path' })
    })
    .catch(e => {
      snotify.error('Invalid Username or Password. Please try again.')
    })
  },
  async createAndLogin ({ commit }, userData) {
    const snotify = Vue.prototype.$snotify

    await users.createUser(userData)
    .then(res => {
      const now = new Date()
      const expirationDate = new Date(now.getTime() + (24 * 2600 * 1000))
      commit('setUserInfo', res.data)
      commit('setTokenExpiration', expirationDate)
      router.replace({ name: 'root_path' })
    })
    .catch(e => {
      snotify.error('Unable to create User. Please try again.')
    })
  },
  logout ({ commit, state, dispatch }, payload = { msgType: 'success' }) {
    const snotify = Vue.prototype.$snotify
    const message = payload.message || 'Logged Out Successfully'

    users.logoutUser(state.userId)
    .then(response => {
      if (response.status == '200') {
        commit('clearAuthData')
        $snotify[payload.msgType](message)
        router.replace({ name: 'root_path' })
      }
    })
    .catch(e => {
      snotify.error(`There was an error logging you out: ${error}`)
      router.replace({ name: 'root_path' })
    })
  },
  setUserInfo({ commit }, userInfo) {
    commit('setUserInfo', userInfo)
  },
  setTokenExpiration({ commit }, tokenExpiration) {
    commit('setTokenExpiration', tokenExpiration)
  }
}

export default actions
