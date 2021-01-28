import Cookies  from 'js-cookie'
const CookiesKey = 'token'

export function setToken(token) {
  Cookies.set(CookiesKey, token, {
    path: '/',

    // 设置任意数字都会转换为一天过期
    expires: 1,
  })
}

export function getToken() {
  return Cookies.get(CookiesKey)
}

export function removeToken() {
  Cookies.remove(CookiesKey)
}
