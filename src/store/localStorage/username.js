const storageKey = 'username'


/**
 * 获取用户名
 * @return {string}
 */
export function getUsername() {
  return localStorage.getItem(storageKey)
}

/**
 * 设置用户名
 * @param {string} value 用户名
 */
export function setUsername(value) {
  localStorage.getItem(storageKey, value)
}

/**
 * 删除用户名
 */
export function removeUsername() {
  localStorage.removeItem(storageKey)
}