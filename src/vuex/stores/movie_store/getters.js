import _ from 'lodash'

const getters = {
  movie: state => state.movie,
  topRated: state => state.topRated,
  popular: state => state.popular,
  nowPlaying: state => state.nowPlaying,
  upcoming: state => state.upcoming,
  reviews: state => state.movie && state.movie.reviews && state.movie.reviews.reverse(),
  userHasRated: (state, getters, rootState, rootGetters) => {
    return rootGetters['UserInfoStore/movies'].some((movie) => { movie.title == getters.movie.title, movie.user_rating !== null })
  }
}

export default getters
