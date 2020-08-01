import axios from 'axios'
import store from '@/vuex'
import _ from 'lodash'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

const handle401 = (err) => {
  const message = 'Your session has expired, please login again'
  return new Promise((resolve, reject) => {
    if (err.response.status === 401) {
      if (err.response.data.message === 'Login Rejected') {
        store.dispatch('UserInfoStore/badLogin')
      } else {
        store.dispatch('UserInfoStore/logout', { message, msgType: 'warning' })
      }
    }
    throw err
  })
}

instance.interceptors.request.use(config => {
  config.headers['X-AUTH-TOKEN'] = store.getters['UserInfoStore/token']
  NProgress.start()
  return config
})

instance.interceptors.response.use(undefined, handle401)
instance.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default instance
