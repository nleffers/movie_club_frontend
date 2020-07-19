import axios from 'axios'
import store from '@/vuex'
import _ from 'lodash'

const apiInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

export default apiInstance
