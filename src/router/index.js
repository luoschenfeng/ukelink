import Vue from 'vue'
import VueRouter from 'vue-router'
import commonRouters from './common'

Vue.use(VueRouter)

const routes = [ ...commonRouters ]

const router = new VueRouter({

  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash && document.querySelector(to.hash)) {
        return {
          selector: to.hash,
        }
      } else {
        return {
          y: 0,
        }
      }
    }
  },
})

export default router