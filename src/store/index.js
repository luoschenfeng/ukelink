import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import setting from './module/setting'
import permission from './module/permission'
import sidebar from './module/sidebar'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    setting,
    permission,
    sidebar,
  },
})
