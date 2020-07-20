const getters = {
  userId: state => state.userId,
  username: state => state.username,
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
