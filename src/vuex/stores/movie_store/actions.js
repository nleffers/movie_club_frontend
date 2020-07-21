const actions = {
  async setMovie({ commit }, movie) {
    commit('setMovie', movie)
  },
  async addToMovieReviews({ commit }, review) {
    commit('addToMovieReviews', review)
  },
  async rateMovie({ commit }, rating) {
    commit('rateMovie', rating)
  }
}

export default actions
