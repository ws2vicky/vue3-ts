// import { ElLoading } from 'element-plus'
import axios, { AxiosInstance } from 'axios'
import { WSRequestInterceptors, WSRequestConfig } from './type'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

class WSRequest {
  instance: AxiosInstance
  interceptors?: WSRequestInterceptors
  Loading?: LoadingInstance
  showLoading?: boolean
  constructor(config: WSRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoding ?? true
    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.Loading = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        console.log('类请求拦截')
        return config
      },
      (err) => {
        return err
      }
    ),
      // 类拦截器
      this.instance.interceptors.response.use(
        (res) => {
          console.log('类响应拦截')
          if (res.data.returnCode === '-1001') {
            console.log('请求失败')
          } else {
            this.Loading!.close()
            const data = res.data
            return data
          }
        },
        (err) => {
          if (err.response.status === 404) {
            console.log('404错误')
          }
          return err
        }
      )
  }
  request<T>(config: WSRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoding === false) {
        this.showLoading = false
      }

      if (config.interceptors?.requestInterceptor) {
        // 接口请求拦截
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 接口响应拦截
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)

            console.log('111111111111', res)
          }
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          return err
        })
    })
  }
  get<T>(config: WSRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: WSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: WSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: WSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}
export default WSRequest
