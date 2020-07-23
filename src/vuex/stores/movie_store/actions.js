const actions = {
  setMovie({ commit }, movie) {
    commit('setMovie', movie)
  },
  clearMovie({ commit }) {
    commit('clearMovie')
  },
  addToMovieReviews({ commit }, review) {
    commit('addToMovieReviews', review)
  },
  rateMovie({ commit }, rating) {
    commit('rateMovie', rating)
  }
}

export default actions
