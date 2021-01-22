import request from '@/utils/request'

/**
 * @description 登录
 * @param {object} params
 * @param {string} params.username
 * @param {object} params.password
 */
export function login(params) {
  return request({
    url: 'api/login',
    method: 'post',
    params,
  })
}

/**
 * @description 登出
 */
export function logout() {
  return request({
    url: 'api/logout',
  })
}

/**
 * @description 获取用户信息，不用传参，用token
 */
export function getUserInfo() {
  return request({
    url: 'api/userInfo',
  })
}
