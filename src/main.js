// ie polyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'
import { getRequest, postRequest, deleteRequest, putRequest } from './utils/requests'
import VueLazyload from 'vue-lazyload'
// mock
import './mock'
import bootstrap from './core/bootstrap'
// 按需引入的配置，可在下面路径中进行修改
import './core/lazy_lib/components_use'

import './core/use'
import './router/permission' // permission control
import './utils/filter' // global filter
import 'swiper/swiper-bundle.min.css'
// 引入iconfont图标
import '@assets/iconfont/iconfont.css'
import animate from 'animate.css'
import { FormModel } from 'ant-design-vue'
Vue.use(FormModel)
Vue.use(animate)
Vue.use(VueLazyload, {
  preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度）
  error: require('./assets/images/iot/lazy.png'), // 图片加载失败时显示的图片
  loading: require('./assets/images/iot/lazy.png'), // 图片加载状态下显示的图片
  attempt: 1 // 加载错误后最大尝试次数
})
// 引入全局自定义样式
// import '@assets/less/visual.less'

Vue.config.productionTip = false

// 加载axios，使用 Vue.$http 或 this.$http 进行文件调用
Vue.use(VueAxios)
// 设置绝对路径，防止打包目录问题导致引用不到
Vue.prototype.$basePath = process.env.BASE_URL
// 封装请求
Vue.prototype.$getRequest = getRequest
Vue.prototype.$postRequest = postRequest
Vue.prototype.$deleteRequest = deleteRequest
Vue.prototype.$putRequest = putRequest

new Vue({
  router,
  store,
  created () {
    bootstrap()
  },
  render: h => h(App)
}).$mount('#app')
