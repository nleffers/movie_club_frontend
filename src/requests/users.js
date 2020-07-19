// user related requests can be defined here
// note: promise/erro rhandling is done on the component, for now
import apiInstance from '../axios/axios-backend.js'

export default {
  createUser(optionsObject) {
    return apiInstance.post(`/users`, { user: optionsObject })
  },
  getUser(optionsObject) {
    return apiInstance.get(`/users/${optionsObject}`)
  },
  getIndex() {
    return apiInstance.get('/users')
  },
  updateUser(optionsObject) {
    return apiInstance.put(`/users/${optionsObject.id}`, { user: optionsObject })
  },
  deleteUser(id) {
    return apiInstance.delete(`/users/${id}`)
  }
}
