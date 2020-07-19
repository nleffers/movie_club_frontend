// user related requests can be defined here
// note: promise/erro rhandling is done on the component, for now
import apiInstance from '../axios/axios-backend.js'

export default {
  createReview(optionsObject) {
    return apiInstance.create(`/reviews`, { review: optionsObject })
  },
  updateReview(optionsObject) {
    return apiInstance.put(`/reviews/${optionsObject.id}`, { review: optionsObject })
  },
  deleteReview(id) {
    return apiInstance.delete(`/reviews/${id}`)
  }
}
