import request from '@/utils/request'

/**
 * @description 登录
 * @param {object} data
 * @param {string} data.username
 * @param {object} data.password
 */
export function login(data) {
  return request({
    url: 'api/login',
    data,
    method: 'post',
  })
}

/**
 * @description 登出
 */
export function logout() {
  return request({
    url: 'api/logout',
    method: 'post',
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
