import WSRequest from './request'
import { API_BASE_URL, TIME_OUT } from './request/config'
//导入工具
import LocalCache from '../utils/cache'
let wsREquest = new WSRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      let token = LocalCache.getCatch('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
        console.log()
      }
      console.log('实例请求拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('实例响应拦截')
      return res
    },
    reponseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default wsREquest
