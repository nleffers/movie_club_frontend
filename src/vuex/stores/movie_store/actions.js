const actions = {
  async setMovie({ commit }, movie) {
    commit('setMovie', movie)
  },
  async addToMovieReviews({ commit }, review) {
    commit('addToMovieReviews', review)
  }
}

export default actions
