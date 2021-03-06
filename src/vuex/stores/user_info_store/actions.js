import router from '@/router.js'
import Vue from 'vue/dist/vue.esm'
import users from '@/requests/users.js'

const actions = {
  async login ({ commit, rootGetters }, loginData) {
    const snotify = Vue.prototype.$snotify

    await users.loginUser(loginData)
    .then(res => {
      const now = new Date()
      const expirationDate = new Date(now.getTime() + (24 * 3600 * 1000))
      commit('setId', res.data.id)
      commit('setUsername', res.data.username)
      commit('setToken', res.data.token)
      commit('setTokenExpiration', expirationDate)
      router.replace({ name: 'my_movies_path' })
    })
    .catch(e => {
      NProgress.done()
    })
  },
  badLogin ({ commit }, payload = { msgType: 'error' }) {
    const snotify = Vue.prototype.$snotify
    snotify['error']('Username or password invalid, please try again')
    NProgress.done()
  },
  async createAndLogin ({ commit }, userData) {
    const snotify = Vue.prototype.$snotify

    await users.createUser(userData)
    .then(res => {
      const now = new Date()
      const expirationDate = new Date(now.getTime() + (24 * 2600 * 1000))
      commit('setId', res.data.id)
      commit('setUsername', res.data.username)
      commit('setToken', res.data.token)
      commit('setTokenExpiration', expirationDate)
      router.replace({ name: 'my_movies_path' })
    })
    .catch(e => {
      console.log(e)
      if (e.response.status === 422) {
        snotify.warning('Username/email already taken. Please try again.')
      } else {
        snotify.error('Unable to create User. Please try again.')
      }
      NProgress.done()
    })
  },
  async updateUser({ commit }, userData) {
    const snotify = Vue.prototype.$snotify

    await users.updateUser(userData)
    .then(res => {
      commit('setUsername', res.data.username)
    })
    .catch(e => {
      snotify.error('Unable to create User. Please try again.')
    })
  },
  rateMovie({ commit }, rateObject) {
    commit('rateMovie', rateObject)
  },
  setId({ commit }, id) {
    commit('setId', id)
  },
  setUsername({ commit }, username) {
    commit('setUsername', username)
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  setTokenExpiration({ commit }, tokenExpiration) {
    commit('setTokenExpiration', tokenExpiration)
  },
  logout ({ commit, state, dispatch, rootGetters }, payload = { msgType: 'success' }) {
    const snotify = Vue.prototype.$snotify
    const message = payload.message || 'Logged Out Successfully'

    users.logoutUser(state.id)
    .then(response => {
      commit('clearUserData')
      snotify[payload.msgType](message)
      if (rootGetters['currentRoute'] !== 'root_path') {
        router.replace({ name: 'root_path' })
      }
    })
    .catch(e => {
      snotify.error(`There was an error logging you out: ${e}`)
      NProgress.done()
    })
  }
}

export default actions
