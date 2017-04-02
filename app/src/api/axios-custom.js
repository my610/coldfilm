import axios from 'axios'
import feathers from '../feathers'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000

axios.interceptors.request.use((config) => {
  config.headers.common['Authorization'] = 'Bearer ' + feathers.get('token')
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default axios
