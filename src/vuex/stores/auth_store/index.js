import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

const AuthStore = {
  namespaced: true,
  state: {
    userId: '',
    username: '',
    token: null,
    tokenExpiration: null
  },
  actions,
  getters,
  mutations
}

export default AuthStore
