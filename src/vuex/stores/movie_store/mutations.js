import Vue from 'vue/dist/vue.esm'

const mutations = {
  setMovie(state, payload) {
    state.movie = payload
  },
  addToMovieReviews(state, payload) {
    state.movie.reviews.unshift(payload)
  },
  rateMovie(state, value) {
    if (state.movie.user_rating) {
      state.movie.rating -= state.movie.user_rating
    } else {
      state.movie.rating_count++
    }
    state.movie.user_rating = value
    state.movie.rating += value
  }
}

export default mutations
