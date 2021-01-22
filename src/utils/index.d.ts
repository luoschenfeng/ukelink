/**
 * 参数的Object.prototype.toString.call()返回的类型表示字符串,并且undefin返回[object Undefined]，null返回[object Null]
 *
 * @param {*} value
 * @return {string}
 */
export function getTypeTag(value: any): string;
/**
 * 防抖
 *
 * @param {Function} func 要防抖的函数
 * @param {number} wait 等待的毫秒数：func添加到事件队列要等到上次func添加到事件队列后的wait秒
 * @param {boolean} immediate 是否需要等待，true表示立即将函数
 * @return {*} wrapper
 */
export function debounce(func: Function, wait: number, immediate: boolean): Function;
interface Ifilter {
    (value?: any, key?: any, object?: object): boolean;
  }
/**
 * Object 过滤函数， 会递归的验证
 *
 * @param {object} object
 * @param {function} filter 过滤函数,返回 falsy, 会从object中删除此属性
 * @return object
 */

export function filterObject(object: object, filter: Ifilter): object;
/**
 * 深拷贝
 *
 * @param value 要深拷贝的值
 * @returns 深拷贝后的值
 */
export const deepClone: <T>(value: T) => T;
/**
 * 浅拷贝
 *
 * @param  value 要浅拷贝的值
 * @returns  浅拷贝后的值
 */
export const shallowClone: <T>(value: T) => T;
