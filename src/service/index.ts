import WSRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
let wsREquest = new WSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      let token = ''
      if (token) {
        // (config.headers as any).Authorization = ''
        // config.headers = {
        // }
        // if (config.headers) {
        //   config.headers.Authorization = ``
        // }
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
