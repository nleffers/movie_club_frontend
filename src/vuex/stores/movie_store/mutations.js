import Vue from 'vue/dist/vue.esm'

const mutations = {
  setMovie(state, payload) {
    state.movie = payload
  },
  addToMovieReviews(state, payload) {
    state.movie.reviews.push(payload)
  }
}

export default mutations
