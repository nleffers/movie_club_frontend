const mutations = {
  clearUserData (state) {
    state.id = null
    state.username = null
    state.token = null
    state.tokenExpiration = null
  },
  setId (state, id) {
    state.id = id
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
