import axios from 'axios'
axios.defaults.baseURL = 'http://httpbin.org'

axios.interceptors.request.use(
  (config) => {
    console.log('请求拦截', config)

    return config
  },
  (err) => {
    console.log('失败拦截')

    return err
  }
)
axios.interceptors.response.use(
  (res) => {
    console.log('相应成功', res)

    return res.data
  },
  (err) => {
    console.log(err)
    return err
  }
)
// new Promise<string>((resolve, reject) => {
//   resolve()
// })
axios.get('/get', { params: { nsme: 18 } }).then((res) => {
  console.log(res)
})
