import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

const UserInfoStore = {
  namespaced: true,
  state: {
    id: '',
    username: '',
    token: null,
    tokenExpiration: null
  },
  actions,
  getters,
  mutations
}

export default UserInfoStore
