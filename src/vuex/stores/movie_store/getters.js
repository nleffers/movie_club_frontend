import _ from 'lodash'

const getters = {
  movie: state => state.movie,
  searchResults: state => state.searchResults,
  topRated: state => state.topRated,
  popular: state => state.popular,
  nowPlaying: state => state.nowPlaying,
  upcoming: state => state.upcoming,
  userHasRated: (state, getters, rootState, rootGetters) => {
    return rootGetters['UserInfoStore/movies'].some((movie) => { movie.title == getters.movie.title, movie.user_rating !== null })
  }
}

export default getters
