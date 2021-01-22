import {
  getTypeTag, 
} from './index'

/**
 * 是否是个数组
 * 
 * @param {*} value 要验证的值
 * @return {boolean} 传参是个对象则返回true，否则返回false
 */
export const isArray = Array.isArray

/**
 * 是否是个对象
 * 
 * @param {*} value 要验证的值
 * @return {boolean} 传参是个对象则返回true，否则返回false
 */
export function isObject(value) {
  const type = typeof value

  if (value !== null && type === 'object') {
    return true
  } else {
    return false
  }
}

/**
 * 是否是个字符串
 *
 * @param {*} value 要验证的值
 * @returns {boolean} 传参是个字符串则返回true，否则返回false
*/
export function isString(value) {
  const type = typeof value

  return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getTypeTag(value) == '[object String]')
}


