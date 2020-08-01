// user related requests can be defined here
// note: promise/erro rhandling is done on the component, for now
import instance from '../axios/axios-backend.js'

export default {
  createReview(optionsObject) {
    return instance.post(`/reviews`, { review: optionsObject })
  },
  updateReview(optionsObject) {
    return instance.put(`/reviews/${optionsObject.id}`, { review: optionsObject })
  },
  deleteReview(id) {
    return instance.delete(`/reviews/${id}`)
  }
}
