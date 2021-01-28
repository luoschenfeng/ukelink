const storageKey = 'lang'

/**
 * 获取用户语言
 * @return {string}
 */
export function getLang() {
  return localStorage.getItem(storageKey)
}

/**
 * 设置用户语言
 * @param {string} value 用户语言
 */
export function setLang(value) {
  localStorage.setItem(storageKey, value)
}
