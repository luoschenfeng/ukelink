import Cookies  from 'js-cookie'
const tokenKey = 'token'

export function setToken(token) {
  if (window.navigator.cookieEnabled) {
    return Cookies.set(tokenKey, token)
  } else {
    return window.localStorage.setItem(tokenKey, token)
  }
}

export function getToken() {
  if (window.navigator.cookieEnabled) {
    return Cookies.get(tokenKey)
  } else {
    return window.localStorage.getItem(tokenKey)
  }
}

export function removeToken() {
  if (window.navigator.cookieEnabled) {
    return Cookies.remove(tokenKey)
  } else {
    return window.localStorage.removeItem(tokenKey)
  }
}
