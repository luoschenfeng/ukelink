// i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh-CN'
import en from './en'
import ElementLocale from 'element-ui/lib/locale'
Vue.use(VueI18n)

// 预设语言
const loadedLanguages = [ 'zh' ]

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

ElementLocale.i18n((key, value) => i18n.t(key, value))


export function loadLanguageAsync(lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      import(/* webpackChunkName: "lang-request" */ `@/lang/${lang}`).then(messages => {
        // is a object
        i18n.setLocaleMessage(lang, messages.default)
        loadedLanguages.push(lang)
      })
    }
    i18n.locale = lang

    /**
     * 加载element的内置i18n
     * @see https://element.eleme.io/#/zh-CN/component/i18n#an-xu-jia-zai-li-ding-zhi-i18n
    */
    ElementLocale.i18n((key, value) => i18n.t(key, value))
  }
  return Promise.resolve(lang)
}

export default i18n
