import router from  '.'
import store from '@/store'
import {
  getToken,
} from '@/store/cookies/token'
import NProgress from 'nprogress'
import {
  Message,
} from 'element-ui'

// import {
//   Message,
// } from 'element-ui'

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
      NProgress.done()
      next('/')

      // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
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
          } = await store.dispatch('setting/userInfo')

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

        // Message.error(err || 'navigation Guards Error')
        NProgress.done()
        next(`/login?next=${to.fullPath}`)

      }
    } else {
      NProgress.done()
      next(`/login?next=${to.fullPath}`)
    }
  }
})

router.afterEach(() => {

  // finish progress bar
  NProgress.done()
})
