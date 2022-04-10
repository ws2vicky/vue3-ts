import { createStore, Store, useStore as useVuexStore } from 'vuex'
// 导入声明文件
import { IRootState, IStoreType } from './type'
// 导入vuex模块
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: '',
      age: 15,
      ccc: '11'
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

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
