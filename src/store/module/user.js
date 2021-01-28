import {
  setToken, getToken, removeToken,
} from '@/store/cookies/token'
import {
  setRoles, getRoles, removeRoles,
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
} from '@/constMap'
import {
  login as loginReq,
  logout as logoutReq,
  getUserInfo,
} from '@/api/login'

const state = {
  token: getToken(),
  roles: getRoles(),
  lang: getLang(),
  username: getUsername(),
  avatar: getAvatar(),
  theme: getTheme(),
}

const mutations = {
  SET_TOKEN(state, token) {
    setToken(token)
  },
  REMOVE_TOKEN() {
    removeToken()
  },

  
  SET_ROLE(state, roles) {
    setRoles(roles)
  },
  REMOVE_ROLE() {
    removeRoles()
  },


  SET_LANG(state, lang) {
    setLang(lang)
  },

  SET_USERNAME(state, username) {
    setUsername(username)
  },
  REMOVE_USERNAME() {
    removeUsername()
  },


  SET_AVATAR(state, avatar) {
    setAvatar(avatar)
  },
  REMOVE_AVATAR() {
    removeAvatar()
  },

  SET_THEME(state, theme) {
    setTheme(theme)

    document.documentElement.className = theme
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

          commit('SET_ROLE', roles)
          commit('SET_USERNAME', username)
          commit('SET_AVATAR', avatar)

          if (lang) {
            commit('SET_LANG', lang)
          } else {
            state.lang || commit('SET_LANG', DEFAULT_LANG)
          }

          if (theme) {
            commit('SET_THEME', theme)
          } else {
            state.theme || commit('SET_THEME', DEFAULT_THEME)
          }
          resolve({
            roles: state.roles,
            lang: state.lang,
            username: state.username,
            avatar: state.avatar,
            theme: state.theme,
          })
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
      loginReq(params)
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
    commit, dispatch,
  }) {
    return new Promise((resolve, reject)=>{
      logoutReq()
        .then(() => {
          commit('REMOVE_TOKEN')
          dispatch('resetUserInfo')
          resolve()
        })
        .catch(err => reject(err))
    })
  },
  UserInfoCoalescing({
    state, commit,
  }) {
    state.lang || commit('SET_LANG', DEFAULT_LANG)
    state.theme || commit('SET_THEME', DEFAULT_THEME)
  },
  resetUserInfo({
    commit,
  }) {
    commit('REMOVE_TOKEN')
    commit('REMOVE_ROLE')
    commit('REMOVE_USERNAME')
    commit('REMOVE_AVATAR')
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
