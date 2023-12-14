import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import {
  VueAxios
} from './axios'
import notification from 'ant-design-vue/es/notification'
import errorModal from 'ant-design-vue/es/modal'

import {
  ACCESS_TOKEN
} from '@/store/mutation-types'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 60000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 500) {
      errorModal.error({
        title: '错误',
        content: '系统错误,请联系管理员!'
      })
    }
    if (error.response.status === 400) {
      errorModal.error({
        title: '错误',
        content: '参数错误,请检查!'
      })
    }
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      })
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
}

// request interceptor
// service.interceptors.request.use(config => {
//   const token = Vue.ls.get(ACCESS_TOKEN)
//   if (token) {
//     config.headers['Authorization'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
//   }
//   return config
// }, err)

// response interceptor
service.interceptors.response.use((response) => {
  if (response.data.status === 40301) {
    notification.error({
      message: '错误',
      description: response.data.message
    })
  } else if (response.data.status === 50001) {
    // errorModal.info({
    //   title: '警告',
    //   content: response.data.message
    // })
  } else if (response.data.status === 40101) {
    notification.error({
      message: '登录过期,5秒后重新登录',
      description: response.data.message
    })
    setTimeout(() => {
      store.dispatch('Logout').then(() => {
        window.location.reload()
      })
    }, 5000)
  } else if (!response.data.rel && response.data.status === 200 && response.data.message) {
    notification.info({
      message: '系统错误',
      description: response.data.message
    })
  } else {
    return response.data
  }
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
