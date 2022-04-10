import { Module } from 'vuex'
// 导入类型
import { ILoginState } from './type'
import { IRootState } from '../type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
// 导入工具
import LocalCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import router from '@/router'

const loginMoudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },

  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // 传菜单映射路由
      const routes = mapMenusToRoutes(userMenus)
      // 动态添加路由
      routes.forEach((route) => router.addRoute('main', route))
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      //  登录
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
      // 获取角色菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)
      console.log(userMenusResult, '我')
      router.push('/main')
    },
    // 解决网页刷新vuex清空问题
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCatch('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCache.getCatch('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCatch('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}
export default loginMoudle
