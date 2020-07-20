const getters = {
  id: state => state.id,
  username: state => state.username,
  email: state => state.email,
  firstName: state => state.firstName,
  lastName: state => state.lastName,
  emailNotifications: state => state.emailNotifications,
  movies: state => state.movies,
  reviews: state => state.reviews,
  token: state => state.token,
  tokenExpiration: state => state.tokenExpiration,
  isAuthenticated: state => {
    const expirationDate = new Date(state.tokenExpiration)
    const now = new Date()

    const isTokenPresent = state.token !== null
    const notExpired = now < expirationDate

    return isTokenPresent && notExpired
  }
}

export default getters
