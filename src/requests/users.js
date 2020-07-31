// user related requests can be defined here
// note: promise/erro rhandling is done on the component, for now
import apiInstance from '../axios/axios-backend.js'

export default {
  loginUser(loginObject) {
    return apiInstance.post(`/users/login`, { login: loginObject })
  },
  logoutUser(id) {
    return apiInstance.post(`/users/${id}/logout`)
  },
  createUser(userObject) {
    return apiInstance.post(`/users`, { user: userObject })
  },
  getUser(id) {
    return apiInstance.get(`/users/${id}`)
  },
  updateUser(userObject) {
    return apiInstance.put(`/users/${userObject.id}`, { user: userObject })
  },
  getMovies(id) {
    return apiInstance.get(`/users/${id}/movies`)
  }
}
