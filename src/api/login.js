import api from './index'
import { postRequest, getRequest, getRequestWithToken } from '@/utils/requests'
import { COMMON_TYPES } from '@/utils/constant/common-types'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
// 登录操作接口
export const login = (parameter) => {
  return postRequest(api.Login, parameter)
}

// 获取登录/注册等验证码
export function getSmsCaptcha (parameter) {
  return postRequest(api.SendSms, parameter)
}

// 登录成功后获取用户信息及菜单权限等
export function getInfo (appCode = COMMON_TYPES.APPLICATION.CURR_SYSTEM) {
  return getRequest(api.UserInfo, { appCode })
}

// 登出的操作接口
export function logout () {
  return postRequest('/auth/logout', {})
}

// 校验token是否有效
export function verifyToken (token) {
  return getRequestWithToken(api.VerifyToken, token.token)
}

// 获取默认系统
export function getDefaultAppliction () {
  return getRequest(api.DefaultApplication)
}
