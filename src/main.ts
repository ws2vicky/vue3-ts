import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// wsRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     interceptors: {
//       requestInterceptor: (config) => {
//         return config
//       },
//       responseInterceptor: (res) => {
//         return res
//       }
//     },
//     showLoding: true
//   })
//   .then((res) => {
//     console.log(res)
//   })
