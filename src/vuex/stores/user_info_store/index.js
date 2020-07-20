import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

const UserInfoStore = {
  namespaced: true,
  state: {
    id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    emailNotifications: null,
    movies: [],
    reviews: [],
    token: null,
    tokenExpiration: null
  },
  actions,
  getters,
  mutations
}

export default UserInfoStore
