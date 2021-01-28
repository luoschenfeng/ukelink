const storageKey = 'roles'


/**
 * 获取用户角色
 * @return {array | string}
 */
export function getRoles() {
  return localStorage.getItem(storageKey)
}

/**
 * 设置用户角色
 * @param {string} value 用户角色
 */
export function setRoles(value) {
  localStorage.getItem(storageKey, value)
}

/**
 * 删除用户角色
 */
export function removeRoles() {
  localStorage.removeItem(storageKey)
}