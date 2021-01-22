import dynamicRoutes from '@/router/dynamic'
import commonRoutes from '@/router/common'
const state = {
  routes: [],
  dynimicRoutes: [],
}

const mutations = {
  SET_ROUTES(state, dynimicRoutes) {
    state.routes = commonRoutes.concat(dynimicRoutes)
    state.dynimicRoutes = dynimicRoutes
  },
}

/**
 * @description Use meta.role to determine if the current user has permission
 * @param route
 * @param roles
 */
function hasPermission(route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * @description 依据权限过滤路由
 * @param {object} dynimicRoutes
 * @param {Array} roles
 */
function filterRouters(dynimicRoutes, roles) {
  let result = []

  let routes = [ ...dynimicRoutes ]

  for (let route of routes) {
    let tmp = route

    if (hasPermission(route, roles)) {
      if (tmp.children) {
        tmp.children = filterRouters(tmp.children, roles)
      }
      result.push(tmp)
    }
  }
  return result
}

const actions = {
  generateRoutes({
    commit,
  }, roles) {
    return new Promise((resolve) => {
      let accessedRoutes

      if (roles.includes('admin')) {
        accessedRoutes = dynamicRoutes || []
      } else {
        accessedRoutes = filterRouters(dynamicRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
