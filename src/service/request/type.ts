import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WSRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  reponseInterceptorCatch?: (error: any) => any
}
export interface WSRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WSRequestInterceptors<T>
  showLoding?: boolean
}
