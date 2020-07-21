import _ from 'lodash'

const getters = {
  movie: state => state.movie,
  reviews: state => state.movie && state.movie.reviews,
  userHasRated: (state, getters, rootState, rootGetters) => {
    return rootGetters['UserInfoStore/movies'].some((movie) => { movie.title == getters.movie.title, movie.user_rating !== null })
  }
}

export default getters
