import { Module } from 'vuex'
// 导入类型
import { ILoginState } from './type'
import { IRootState } from '../type'
const loginMoudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},

  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行acx', payload)
    }
  }
}
export default loginMoudle
