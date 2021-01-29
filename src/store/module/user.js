import {
  setToken, getToken, removeToken,
} from '@/store/cookies/token'
import {
  setRoles, removeRoles,
} from '@/store/localStorage/roles'
import {
  setLang, getLang,
} from '@/store/localStorage/lang'
import {
  setUsername, getUsername, removeUsername,
} from '@/store/localStorage/username'
import {
  setAvatar, getAvatar, removeAvatar,
} from '@/store/localStorage/avatar'
import {
  setTheme, getTheme,
} from '@/store/localStorage/theme'
import {
  DEFAULT_LANG, DEFAULT_AVATAR,  DEFAULT_THEME,
} from '@/const'
import {
  changeTheme, changeLang,
} from '@/utils/setting'
import {
  login,
  logout,
  getUserInfo,
} from '@/api/login'
const state = {
  token: getToken(),

  // 为空使得强刷重新请求
  roles: [],
  lang: getLang(),
  username: getUsername(),
  avatar: getAvatar(),
  theme: getTheme(),
}

const mutations = {
  SET_TOKEN(state, token) {
    setToken(token)
    state.token = token
  },
  REMOVE_TOKEN() {
    removeToken()
    state.token = ''
  },

  
  SET_ROLES(state, roles) {
    setRoles(roles)
    state.roles = roles
  },
  REMOVE_ROLES() {
    removeRoles()
    state.roles = []
  },


  SET_LANG(state, lang) {
    changeLang(lang)
    setLang(lang)
    state.lang = lang
  },

  SET_USERNAME(state, username) {
    setUsername(username)
    state.username = username
  },
  REMOVE_USERNAME() {
    removeUsername()
    state.username = ''
  },


  SET_AVATAR(state, avatar) {
    setAvatar(avatar)
    state.state = state
  },
  REMOVE_AVATAR() {
    removeAvatar()
    state.avatar = ''
  },

  SET_THEME(state, theme) {
    changeTheme(theme)
    setTheme(theme)
    state.theme = theme
  },
}

const actions = {

  /**
   * @description 用户信息
   * @param {object} param0
   * @param {object} param0.commit
   */
  userInfo({
    state, commit,
  }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then(data => {
          const {
            roles, lang, username, avatar = DEFAULT_AVATAR, theme,
          } = data

          commit('SET_ROLES', roles)
          commit('SET_USERNAME', username)
          commit('SET_AVATAR', avatar)

          if (lang) {
            commit('SET_LANG', lang)
          } else if (state.lang) { commit('SET_LANG', state.lang) } else {
            commit('SET_LANG', DEFAULT_LANG)
          }

          if (theme) {
            commit('SET_THEME', theme)
          } else if (state.theme) {
            changeTheme(state.theme)
          } else {
            commit('SET_THEME', DEFAULT_THEME)
          }
          resolve(data)
        })
        .catch(err => reject(err))
    })
  },

  /**
   * @description 登录对store的操作
   * @param {object} param0
   * @param {object} param0.commit
   * @param {object} params
   * @param {string} params.username
   * @param {string} params.password
   */
  login({
    commit,
  }, params) {
    return new Promise((resolve, reject) => {
      login(params)
        .then(data => {
          const {
            token,
          } = data

          commit('SET_TOKEN', token)
          resolve()
        })
        .catch(err => reject(err))
    })
  },

  /**
   * @description 登出
   * @param {object} param0
   * @param {object} param0.commit
   */
  logout({
    commit,
  }) {
    return new Promise((resolve, reject)=>{
      logout()
        .then(() => {
          commit('REMOVE_TOKEN')
          commit('REMOVE_ROLES')
          commit('REMOVE_USERNAME')
          commit('REMOVE_AVATAR')
          resolve()
        })
        .catch(err => reject(err))
    })
  },

  defaultCoalescing({
    state, commit,
  }) {
    if (state.lang) {
      changeLang(state.lang)
    } else {
      commit('SET_LANG', DEFAULT_LANG)
    }
    if (state.theme) {
      changeTheme(state.theme)
    } else {
      commit('SET_THEME', DEFAULT_THEME)
    }
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
