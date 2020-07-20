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
      commit('setId', res.data.id)
      commit('setUsername', res.data.username)
      commit('setEmail', res.data.email)
      commit('setFirstName', res.data.first_name)
      commit('setLastName', res.data.last_name)
      commit('setEmailNotifications', res.data.email_notifications)
      commit('setMovies', res.data.movies)
      commit('setReviews', res.data.reviews)
      commit('setToken', res.data.token)
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
      commit('setId', res.data.id)
      commit('setUsername', res.data.username)
      commit('setEmail', res.data.email)
      commit('setFirstName', res.data.first_name)
      commit('setLastName', res.data.last_name)
      commit('setEmailNotifications', res.data.email_notifications)
      commit('setMovies', res.data.movies)
      commit('setReviews', res.data.reviews)
      commit('setToken', res.data.token)
      commit('setTokenExpiration', expirationDate)
      router.replace({ name: 'root_path' })
    })
    .catch(e => {
      snotify.error('Unable to create User. Please try again.')
    })
  },
  async updateUser({ commit }, userData) {
    const snotify = Vue.prototype.$snotify

    await users.updateUser(userData)
    .then(res => {
      commit('setUsername', res.data.username)
      commit('setEmail', res.data.email)
      commit('setFirstName', res.data.first_name)
      commit('setLastName', res.data.last_name)
      commit('setEmailNotifications', res.data.email_notifications)
      router.replace({ name: 'root_path' })
    })
    .catch(e => {
      snotify.error('Unable to create User. Please try again.')
    })
  },
  setId({ commit }, id) {
    commit('setId', id)
  },
  setUsername({ commit }, username) {
    commit('setUsername', username)
  },
  setEmail({ commit }, email) {
    commit('setEmail', email)
  },
  setFirstName({ commit }, firstName) {
    commit('setFirstName', firstName)
  },
  setLastName({ commit }, lastName) {
    commit('setLastName', lastName)
  },
  setEmailNotifications({ commit }, emailNotifications) {
    commit('setEmailNotifications', emailNotifications)
  },
  setMovies({ commit }, movies) {
    commit('setMovies', movies)
  },
  setReviews({ commit }, reviews) {
    commit('setReviews', reviews)
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  setTokenExpiration({ commit }, tokenExpiration) {
    commit('setTokenExpiration', tokenExpiration)
  },
  logout ({ commit, state, dispatch }, payload = { msgType: 'success' }) {
    const snotify = Vue.prototype.$snotify
    const message = payload.message || 'Logged Out Successfully'

    users.logoutUser(state.id)
    .then(response => {
      commit('clearUserData')
      snotify[payload.msgType](message)
      router.replace({ name: 'root_path' })
    })
    .catch(e => {
      snotify.error(`There was an error logging you out: ${e}`)
    })
  }
}

export default actions
