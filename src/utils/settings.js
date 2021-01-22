import Cookies  from 'js-cookie'
const themeKey = 'theme'

const localKey = 'local'

export function setTheme(theme) {
  if (window.navigator.cookieEnabled) {
    return Cookies.set(themeKey, theme)
  } else {
    return window.localStorage.setItem(themeKey, theme)
  }
}

export function getTheme() {
  if (window.navigator.cookieEnabled) {
    return Cookies.get(themeKey)
  } else {
    return window.localStorage.getItem(themeKey)
  }
}

export function setLocal(local) {
  if (window.navigator.cookieEnabled) {
    return Cookies.set(localKey, local)
  } else {
    return window.localStorage.setItem(localKey, local)
  }
}

export function getLocal() {
  if (window.navigator.cookieEnabled) {
    return Cookies.get(localKey)
  } else {
    return window.localStorage.getItem(localKey)
  }
}
