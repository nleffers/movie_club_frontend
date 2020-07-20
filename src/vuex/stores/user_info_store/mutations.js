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
  setId (state, id) {
    state.id = id
  },
  setUsername (state, username) {
    state.username = username
  },
  setEmail (state, email) {
    state.email = email
  },
  setFirstName (state, firstName) {
    state.firstName = firstName
  },
  setLastName (state, lastName) {
    state.lastName = lastName
  },
  setEmailNotifications (state, emailNotifications) {
    state.emailNotifications = emailNotifications
  },
  setMovies (state, movies) {
    state.movies = movies
  },
  setReviews (state, reviews) {
    state.reviews = reviews
  },
  setToken (state, token) {
    state.token = token
  },
  setTokenExpiration (state, tokenExpiration) {
    state.tokenExpiration = tokenExpiration
  }
}

export default mutations
