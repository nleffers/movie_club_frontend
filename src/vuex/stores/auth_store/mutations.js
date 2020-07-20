const mutations = {
  clearAuthData (state) {
    state.token = null
    state.tokenExpiration = null
    state.userId = null
    state.username = null
  },
  setUserId (state, userId) {
    state.userId = userId
  },
  setUsername (state, username) {
    state.username = username
  },
  setToken (state, token) {
    state.token = token
  },
  setTokenExpiration (state, tokenExpiration) {
    state.tokenExpiration = tokenExpiration
  }
}

export default mutations
