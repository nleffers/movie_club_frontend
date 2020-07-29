// user related requests can be defined here
// note: promise/erro rhandling is done on the component, for now
import apiInstance from '../axios/axios-backend.js'

export default {
  getHomePage() {
    return apiInstance.get('/home')
  },
  newMovie() {
    return apiInstance.get('/movies/new')
  },
  createMovie(optionsObject) {
    return apiInstance.post('/movies', { movie: optionsObject })
  },
  getMovie(id) {
    return apiInstance.get(`/movies/${id}`)
  },
  getMovies() {
    return apiInstance.get('/movies')
  },
  getTopMovies() {
    return apiInstance.get('/movies/top')
  },
  deleteMovie(id) {
    return apiInstance.delete(`/movies/${id}`)
  },
  rateMovie(ratingObject) {
    return apiInstance.put(`/movies/${ratingObject.id}/rate`, ratingObject)
  },
  searchMovies(title) {
    return apiInstance.get('/search', { params: { title: title } })
  }
}
