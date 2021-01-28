import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './module/user'
import permission from './module/permission'
import sidebar from './module/sidebar'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    user,
    permission,
    sidebar,
  },
})
