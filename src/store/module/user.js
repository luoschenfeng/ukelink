import {
  setToken, removeToken, getToken,
} from '@/utils/token'
import {
  login as loginReq,
  logout as logoutReq,
  getUserInfo,
} from '@/api/login'
import {
  DEFAULT_AVATAR,
} from '@/constMap'
const state = {
  token: getToken(),
  roles: [],
  avatar: DEFAULT_AVATAR,
  username: '',
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  REMOVE_TOKEN(state) {
    state.token = ''
  },
  SET_ROLE(state, roles) {
    state.roles = roles
  },
  SET_AVATAR(state, avatar) {
    state.avatar = avatar
  },
  SET_USERNAME(state, username) {
    state.username = username
  },
}

const actions = {

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

          setToken(token)
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
      logoutReq()
        .then(() => {
          removeToken()
          commit('REMOVE_TOKEN')
          resolve()
        })
        .catch(reject())
    })
  },

  /**
   * @description 用户信息
   * @param {object} param0
   * @param {object} param0.commit
   */
  userInfo({
    commit,
  }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then(data => {
          const {
            roles, avatar = DEFAULT_AVATAR, username, local = 'zh-CN',
          } = data

          commit('SET_ROLE', roles)
          commit('SET_AVATAR', avatar)
          commit('SET_USERNAME', username)
          resolve({
            roles,
            avatar,
            username,
            local,
          })
        })
        .catch(err => reject(err))
    })
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
