import movies from '@/requests/movies.js'

const actions = {
  setMovie({ commit }, movie) {
    commit('setMovie', movie)
  },
  async setMovies({ commit }) {
    await movies.getMovies()
    .then(response => {
      commit('setMovies', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  searchMovies({ commit }, movies) {
    commit('searchMovies', movies)
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
