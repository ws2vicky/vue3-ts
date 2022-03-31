import { createStore } from 'vuex'
// 导入声明文件
import { IRootState } from './type'
// 导入vuex模块
import login from './login/login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: '',
      age: 15
    }
  },
  mutations: {
    changeName(state) {
      state.name
    }
  },
  actions: {},
  getters: {},
  modules: {
    login
  }
})
export default store
