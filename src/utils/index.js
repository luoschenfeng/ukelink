import {
  cloneDeep,
  clone,
} from 'lodash'
import {
  isObject,
} from './validate'

/**
 * 深拷贝
 * 
 * @param {*} value 要深拷贝的值
 * @returns {*} 深拷贝后的值
 */
export const deepClone = cloneDeep

/**
 * 浅拷贝
 * 
 * @param {*} value 要浅拷贝的值
 * @returns {*} 浅拷贝后的值
 */
export const shallowClone = clone

/**
 * 参数的Object.prototype.toString.call()返回的类型表示字符串,并且undefin返回[object Undefined]，null返回[object Null]
 * 
 * @param {*} value 
 * @return {string} 
 */
export function getTypeTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return Object.prototype.toString.call(value)
}

/**
 * 防抖
 * 
 * @param {Function} func 要防抖的函数
 * @param {number} wait 等待的毫秒数：func添加到事件队列要等到上次func添加到事件队列后的wait秒
 * @param {boolean} immediate 是否需要等待，true表示立即将函数
 * @return {*} wrapper
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, initTimestamp, currentTimestamp, result

  const later = function () {
    timeout = null

    // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
    if (!immediate) {
      result = func.apply(context, args)
      if (!timeout) { context = args = null }
    }
  }


  return function (...innerArgs) {
    args = innerArgs
    context = this
    currentTimestamp = +new Date()
    const callNow = immediate && !timeout

    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    // 如果延时不存在，重新设定延时
    if (!timeout) {
      initTimestamp = +new Date()
      timeout = setTimeout(later, wait)
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(later, wait - (currentTimestamp - initTimestamp))
    }

    return result
  }
}

/**
 * Object 过滤函数， 会递归的验证
 * 
 * @param {object} object 
 * @param {function} filter 过滤函数,返回 falsy, 会从object中删除此属性
 * @return object
 */
export function filterObject(object, filter) {
  const result = {}

  Object.keys(object).forEach((key) => {
    const value = object[key]

    if (isObject(value)) {
      result[key] = filterObject(value, filter)
    } else if (filter(value, key, object)) {
      result[key] = value
    }
  })
  return result
}