import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import router from './router'
import store from './store'
// import './service/axios_demo'
import wsRequest from './service'

// 导入图标
import * as Elicons from '@element-plus/icons-vue'
// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// createApp(App).use(router).use(store).mount('#app')
const app = createApp(App)
Object.keys(Elicons).forEach((key) => {
  app.component(key, Elicons[key)
})


// app.component()
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.use(function () {})
app.use({
  install: function () {}
})
app.mount('#app')
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(ws)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
wsRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    interceptors: {
      requestInterceptor: (config) => {
        return config
      },
      responseInterceptor: (res) => {
        return res
      }
    },
    showLoding: true
  })
  .then((res) => {
    console.log(res)
  })
