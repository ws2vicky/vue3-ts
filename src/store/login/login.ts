import { Module } from 'vuex'
// 导入类型
import { ILoginState } from './type'
import { IRootState } from '../type'
import { accountLoginRequest, requestUserInfoById } from '../../service/login/login'
// 导入工具
import LocalCache from '../../utils/cache'
const loginMoudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },

  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },

  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      //  实现登录
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
      // 存token
      const { id, token } = loginResult.data
      LocalCache.setCache('token', token)

      commit('changeToken', token)
      // 获取用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)
      console.log(userInfoResult.data)
    }
  }
}
export default loginMoudle
