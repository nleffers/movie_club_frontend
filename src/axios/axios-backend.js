import axios from 'axios'
import store from '@/vuex'
import _ from 'lodash'

const apiInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

const handle401 = (err) => {
  const message = 'Your session has expired, please login again'
  return new Promise((resolve, reject) => {
    if (err.response.status === 401) {
      store.dispatch('UserInfoStore/logout', { message, msgType: 'warning' })
    }
    throw err
  })
}

apiInstance.interceptors.request.use(config => {
  config.headers['X-AUTH-TOKEN'] = store.getters['UserInfoStore/token']
  return config
})

apiInstance.interceptors.response.use(undefined, handle401)

export default apiInstance
