import router from  '.'
import store from '@/store'
import {
  getToken,
} from '@/utils/token'

router.beforeEach(async (to, from, next) => {
  const token = getToken()

  // 不能时fullPath
  if (to.path === '/login') {
    if (token) {
      next('/')
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

          /*
          * @see https://juejin.im/post/6844903478880370701
          */
          next({
            ...to,
            replace: true,
          })
        }
      } catch (err) {
        next(new Error(err))
      }
    } else {
      next(`/login?next=${to.fullPath}`)
    }
  }
})
