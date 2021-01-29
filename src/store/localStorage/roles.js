const storageKey = 'roles'


/**
 * 获取用户角色
 * @return {array}
 */
export function getRoles() {
  let roles =  localStorage.getItem(storageKey)

  if (roles) {
    return roles.split(',')
  } else { return [] }
}

/**
 * 设置用户角色
 * @param {string} value 用户角色
 */
export function setRoles(value) {
  localStorage.setItem(storageKey, value)
}

/**
 * 删除用户角色
 */
export function removeRoles() {
  localStorage.removeItem(storageKey)
}