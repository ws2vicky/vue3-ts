import wsRequest from '../index'
import type { Account, LoginInfo } from './type'
enum loginApi {
  AccountLogin = '/login'
}
export function accountLoginAction(account: Account) {
  return wsRequest.post({
    url: loginApi.AccountLogin,
    data: account
  })
}
