// user related requests can be defined here
// note: promise/erro rhandling is done on the component, for now
import instance from '../axios/axios-backend.js'

export default {
  loginUser(loginObject) {
    return instance.post(`/users/login`, { login: loginObject })
  },
  logoutUser(id) {
    return instance.post(`/users/${id}/logout`)
  },
  createUser(userObject) {
    return instance.post(`/users`, { user: userObject })
  },
  getUser(id) {
    return instance.get(`/users/${id}`)
  },
  updateUser(userObject) {
    return instance.put(`/users/${userObject.id}`, { user: userObject })
  },
  getMovies(id) {
    return instance.get(`/users/${id}/movies`)
  }
}
