import Vue from 'vue'
import router from '@/router'
import store from '@/store'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import notification from 'ant-design-vue/es/notification'
import {
  setDocumentTitle,
  domTitle
} from '@/utils/domUtil'
import {
  ACCESS_TOKEN
} from '@/store/mutation-types'
import config from '@/config/defaultSettings'
NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = ['login', 'register', 'registerResult', '3DGis', '3DPreview'] // no redirect whitelist,
const defaultAppUrl = Vue.ls.get('DEFAULT_APPURL') // 设置默认系统的URL

router.beforeEach((to, from, next) => {
    console.log(screen.width)
    if (to.name === 'xadmin') {
    next()
    return
  }
    if (to.name === 'corp') {
      console.log(screen.width, 777)
      next()
      return
    }
    if (to.name === 'iframeTest') {
      next()
      return
    }
    if (to.name === 'machineInfo') {
      // 获取token
      store.dispatch('getModelToken').then(() => {
        next()
      })
      return
    }
    next({
      path: '/ci/corp'
    })

  // NProgress.start() // start progress bar
  // to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))
  // const redirect = window.location.origin
  // if (defaultAppUrl) {
  //   if (Vue.ls.get(ACCESS_TOKEN) && (!to.query.token || to.query.token === '')) {
  //     /* has token */
  //     if (store.getters.roles.length === 0) {
  //       store
  //         .dispatch('GetInfo')
  //         .then(res => {
  //           const menus = res.result.menus
  //           store.dispatch('GenerateRoutes', { menus }).then(() => {
  //             // 根据roles权限生成可访问的路由表
  //             // 动态添加可访问路由表
  //             router.addRoutes(store.getters.addRouters)
  //             const redirect = decodeURIComponent(from.query.redirect || to.path)

  //             if (to.path === redirect) {
  //               if (to.path === redirect && to.path === '/') {
  //                 next({ path: config.projectIndex }) // 跳主页
  //               } else {
  //                 // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
  //                 next({ ...to, replace: true })
  //               }
  //             } else {
  //               // 跳转到目的路由
  //               next({ path: redirect })
  //             }
  //           })
  //         })
  //         .catch(() => {
  //           notification.error({
  //             message: '错误',
  //             description: '请求用户信息失败，请重试'
  //           })
  //           window.location.replace(defaultAppUrl + '/user/login?redirect=' + redirect)
  //         })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     // 检查传入传入ToKen的有效性
  //     if (to.query.token && to.query.token !== '') {
  //       const token = to.query.token
  //       store.dispatch('VerifyToken', { token }).then((response) => {
  //         if (response && response.rel) {
  //           if (to.query.hasOwnProperty('token')) {
  //             delete to.query.token
  //           }
  //           next({ path: to.path, query: to.query })
  //         } else {
  //           notification.error({
  //             message: '错误',
  //             description: 'token无效,请重新登录'
  //           })
  //           window.location.replace(defaultAppUrl + '/user/login?redirect=' + redirect)
  //         }
  //       })
  //     } else {
  //       if (whiteList.includes(to.name)) {
  //         // 在免登录白名单，直接进入
  //         next()
  //       } else {
  //         // 当没有登录时统一跳转指定登录处
  //         window.location.replace(defaultAppUrl + '/user/login?redirect=' + redirect)
  //       }
  //     }
  //   }
  // } else {
  //   store.dispatch('GetDefaultApplication').then((res) => {
  //     if (res && res.rel) {
  //       window.location.reload()
  //     }
  //   })
  // }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
