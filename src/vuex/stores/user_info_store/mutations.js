const mutations = {
  clearUserData (state) {
    state.id = null
    state.username = null
    state.email = null
    state.firstName = null
    state.lastName = null
    state.emailNotifications = null
    state.movies = []
    state.reviews = []
    state.token = null
    state.tokenExpiration = null
  },
  setUserInfo (state, userInfo) {
    state.id = userInfo.id
    state.username = userInfo.username
    state.email = userInfo.email
    state.firstName = userInfo.firstName
    state.lastName = userInfo.lastName
    state.emailNotifications = userInfo.emailNotifications
    state.movies = userInfo.movies
    state.reviews = userInfo.reviews
    state.token = userInfo.token
  },
  setTokenExpiration (state, tokenExpiration) {
    state.tokenExpiration = tokenExpiration
  }
}

export default mutations
