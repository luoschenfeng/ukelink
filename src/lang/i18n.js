// i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh-CN'
import en from './en'
Vue.use(VueI18n)

// 预设语言

const i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh: zh,
    en: en,
  },
  /* eslint no-console: ["warn", { allow: ["warn"] }] */
  missing: (local, key) => { console.warn(`[VueI18n] the ${local} local not find the key: ${key}`) },
})


export default i18n
