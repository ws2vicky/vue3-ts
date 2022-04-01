import { Module } from 'vuex'
// 导入类型
import { ILoginState } from './type'
import { IRootState } from '../type'
import { accountLoginAction } from '../../service/login/login'
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
    async accountLoginAction({ commit }, payload: any) {
      //  实现登录
      const loginResult = await accountLoginAction(payload)
    }
  }
}
export default loginMoudle
