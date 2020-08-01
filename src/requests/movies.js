// user related requests can be defined here
// note: promise/erro rhandling is done on the component, for now
import instance from '../axios/axios-backend.js'

export default {
  getHomePage() {
    return instance.get('/home')
  },
  newMovie() {
    return instance.get('/movies/new')
  },
  createMovie(optionsObject) {
    return instance.post('/movies', { movie: optionsObject })
  },
  getMovie(id) {
    return instance.get(`/movies/${id}`)
  },
  getMovies() {
    return instance.get('/movies')
  },
  getTopMovies() {
    return instance.get('/movies/top')
  },
  rateMovie(ratingObject) {
    return instance.put(`/movies/${ratingObject.id}/rate`, ratingObject)
  },
  searchMovies(title) {
    return instance.get('/search', { params: { title: title } })
  }
}
