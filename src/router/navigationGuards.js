import router from  '.'
import store from '@/store'
import {
  getToken,
} from '@/store/cookies/token'
import NProgress from 'nprogress'
import {
  Message,
} from 'element-ui'

NProgress.configure({
  showSpinner: false, 
}) 
router.beforeEach(async (to, from, next) => {

  // start progress bar
  NProgress.start()
  const token = getToken()

  // 不能是fullPath
  if (to.path === '/login') {
    if (token) {
      next('/')

      // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (token) {
      try {
        const  hasRoles = store.getters.roles && store.getters.roles.length > 0

        if (hasRoles) {
          next()
        } else {
          const {
            roles,
          } = await store.dispatch('user/userInfo')

          let routes = await store.dispatch('permission/generateRoutes', roles)

          router.addRoutes(routes)

          // router.options.push(routes)

          /*
          * @see https://juejin.im/post/6844903478880370701
          */
          next({
            ...to,
            replace: true,
          })
        }
      } catch (err) {
        Message.error(err || 'navigation Guards Error')
        next(`/login?next=${to.fullPath}`)
        NProgress.done()
      }
    } else {
      next(`/login?next=${to.fullPath}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {

  // finish progress bar
  NProgress.done()
})