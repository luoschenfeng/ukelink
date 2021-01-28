const storageKey = 'avatar'


/**
 * 获取用户头像url路径
 * @return {string}
 */
export function getAvatar() {
  return localStorage.getItem(storageKey)
}

/**
 * 设置用户头像url路径
 * @param {string} value 头像url
 */
export function setAvatar(value) {
  localStorage.setItem(storageKey, value)
}

/**
 * 删除用户头像url路径
 */
export function removeAvatar() {
  localStorage.removeItem(storageKey)
}