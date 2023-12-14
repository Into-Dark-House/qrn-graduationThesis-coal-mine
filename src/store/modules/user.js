import Vue from 'vue'
import { login, getInfo, logout, verifyToken, getDefaultAppliction } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'
import { getUseCode } from '@/api/model/machineInfo/index'
// import { COMMON_TYPES } from '@/utils/constant/common-types'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {},
    defaultApplication: {},
    modelToken: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_DEFAULT_APP: (state, defaultApplication) => {
      state.defaultApplication = defaultApplication
    },
    SET_MODEL_TOKEN: (state, token) => {
      state.modelToken = token
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const result = response
          console.log(response)
          Vue.ls.set(ACCESS_TOKEN, result.result, 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN', result.result)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          console.log(response, 'response.result')
          const result = response.result
          commit('SET_DEFAULT_APP', result.defaultApplication)
          if (result.menus && result.elements) {
            // 处理权限
            const role = ['role']
            role.permissions = result.elements
            role.permissions.map(per => {
              if (per.elements && per.elements.length > 0) {
                const action = per.elements.map(action => { return action.elementCode }) || []
                per.actionList = action
              }
            })
            role.permissionList = role.permissions.map(permission => { return permission.name })
            commit('SET_ROLES', role)
            commit('SET_INFO', result)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }

          commit('SET_NAME', { name: result.name, welcome: welcome() })
          // commit('SET_AVATAR', result.avatar)

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取默认系统
    GetDefaultApplication ({ commit, state }) {
      return new Promise((resolve) => {
        getDefaultAppliction().then(response => {
          if (response && response.rel) {
            Vue.ls.set('DEFAULT_APPURL', response.result.appUrl, 7 * 24 * 60 * 60 * 1000)
            resolve(response)
          }
        })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Vue.ls.remove(ACCESS_TOKEN)

        logout(state.token).then(() => {
          resolve()
        }).catch(() => {
          resolve()
        })
      })
    },

    // 校验Token有效性
    VerifyToken ({ commit }, token) {
      return new Promise((resolve, reject) => {
        verifyToken(token).then(response => {
          if (response && response.rel) {
            Vue.ls.set(ACCESS_TOKEN, token.token, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', token.token)
          }
          resolve(response)
        }).catch(error => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          Vue.ls.remove(ACCESS_TOKEN)
          resolve(error.response.data)
        })
      })
    },
    // 获取model的token
    getModelToken ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUseCode({ userCode: 'wanglu' }).then(res => {
          commit('SET_MODEL_TOKEN', res.value.token)
          resolve()
        }).catch(() => {
          console.log('获取token失败')
          resolve()
        })
    })
  }
  }
}

export default user
