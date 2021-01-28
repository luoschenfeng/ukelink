const state = {
  sidebarCollapse: false,
}

const mutations = {
  SET_THEME: (state, theme) => {
    state.theme = theme
  },
  SET_SIDEBAR_COLLAPSE: (state, sidebarCollapse) => {
    state.sidebarCollapse = sidebarCollapse
  },
}

const actions = {
  setSidebarCollapse({
    commit,
  }, sidebarCollapse) {
    commit('SET_SIDEBAR_COLLAPSE', sidebarCollapse)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
