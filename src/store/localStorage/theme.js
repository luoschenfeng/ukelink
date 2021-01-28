const storageKey = 'theme'

/**
 * 获取用户主题
 * @return {array}
 */
export function getTheme() {
  return localStorage.getItem(storageKey)
}

/**
 * 设置用户主题
 * @param {string} value 用户主题
 */
export function setTheme(value) {
  localStorage.setItem(storageKey, value)
}
