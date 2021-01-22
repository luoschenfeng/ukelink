import {
  setTheme, getTheme, setLocal, getLocal,
} from '@/utils/settings'
const state = {
  theme: getTheme(),
  local: getLocal(),
  sidebarCollapse: false,
}

const mutations = {
  SET_THEME: (state, theme) => {
    state.theme = theme
  },
  SET_LOCAL: (state, local) => {
    state.local = local
  },
  SET_Sidebar_Collapse: (state, sidebarCollapse) => {
    state.sidebarCollapse = sidebarCollapse
  },
}

const actions = {
  setTheme({
    commit,
  }, theme) {
    commit('SET_THEME', theme)
    setTheme(theme)
  },
  setLocal({
    commit,
  }, local) {
    commit('SET_LOCAL', local)
    setLocal()
  },
  setSidebarCollapse({
    commit,
  }, sidebarCollapse) {
    commit('SET_Sidebar_Collapse', sidebarCollapse)
  },
}

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
}
