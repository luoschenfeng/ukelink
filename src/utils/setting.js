import {
  THEME_LIST,
} from '@/const'
import i18n from '@/lang'

/**
 * 通过在html中加类的方法改变主题
 * @param {'blue'} theme 
 */
export function changeTheme(theme) {
  let {
    classList, 
  } = document.documentElement
  
  for (let item of THEME_LIST) {
    classList.remove(item)
  }
  classList.add(theme)
}

/**
 * 通过在html中加类的方法改变主题
 * @param {zh | en} lang 
 */
export function changeLang(lang) {
  i18n.local = lang
}

