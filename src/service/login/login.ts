import wsRequest from '../index'
import type { IAccount, IDataType, ILoginResult, IUserInfo } from './type'
enum loginApi {
  AccountLogin = '/login',
  LoginUserInfo = 'users/'
}
export function accountLoginRequest(account: IAccount) {
  return wsRequest.post<IDataType<ILoginResult>>({
    url: loginApi.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return wsRequest.get<IDataType>({
    url: loginApi.LoginUserInfo + id
  })
}
