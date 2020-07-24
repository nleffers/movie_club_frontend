import Vue from 'vue/dist/vue.esm'

const mutations = {
  setMovie(state, payload) {
    state.movie = payload
  },
  setMovies(state, payload) {
    state.nowPlaying = payload.now_playing
    state.popular = payload.popular
    state.topRated = payload.top_rated
    state.upcoming = payload.upcoming
  },
  clearMovie(state) {
    state.movie = {}
  },
  clearMovies(state) {
    state.nowPlaying = []
    state.popular = []
    state.topRated = []
    state.upcoming = []
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
