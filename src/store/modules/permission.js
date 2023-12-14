import { constantRouterMap, asyncRouterMap } from '@/config/router.config'
import lazyLoading from '@/core/lazyLoading.js'
import { COMMON_TYPES } from '@/utils/constant/common-types'

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
// function hasPermission (permission, route) {
//   if (route.meta && route.meta.permission) {
//     let flag = false
//     for (let i = 0, len = permission.length; i < len; i++) {
//       flag = route.meta.permission.includes(permission[i])
//       if (flag) {
//         return true
//       }
//     }
//     return false
//   }
//   return true
// }

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(roles, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id)
  } else {
    return true
  }
}

// function filterAsyncRouter (routerMap, roles) {
//   const accessedRouters = routerMap.filter(route => {
//     // if (hasPermission(roles.permissionList, route)) {
//     //   if (route.children && route.children.length) {
//     //     route.children = filterAsyncRouter(route.children, roles)
//     //   }
//     //   return true
//     // }
//     return true
//   })
//   return accessedRouters
// }
// 生成路由
function initRouterNode (routers, menus) {
  if (menus) {
    for (const item of menus) {
      const menu = Object.assign({}, item)
      if (menu.parentId === -1) {
        // 根路由传入默认参数
        menu.component = lazyLoading(COMMON_TYPES.ROUTER.BASIC_LAYOUT)
        menu.path = COMMON_TYPES.ROUTER.BASIC_PATH
      } else if (menu.component === COMMON_TYPES.ROUTER.PAGE_VIEW || menu.component === COMMON_TYPES.ROUTER.BLANK_LAYOUT) {
        menu.component = lazyLoading(menu.component)
      } else {
        menu.component = lazyLoading(COMMON_TYPES.ROUTER.ROUTER_PREFIX + menu.component + COMMON_TYPES.ROUTER.ROUTER_SUFFIX)
      }

      if (item.children && item.children.length > 0) {
        menu.children = []
        initRouterNode(menu.children, item.children)
      }
      const meta = {}
      // 给页面添加按钮权限和标题
      // meta.buttonTypes = menu.buttonTypes ? menu.buttonTypes : null;
      // meta.title = menu.title ? menu.title + " - 智慧矿山" : null;
      meta.keepAlive = false// 路由缓存默认false
      meta.title = menu.title
      menu.meta = meta
      // menu.meta = Object.assign(meta, JSON.parse(menu.meta))

      routers.push(menu)
    }
  }
}

const permission = {
  state: {
    routers: constantRouterMap,
    asyncRouterMap: asyncRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit, state }, data) {
      return new Promise(resolve => {
        const { menus } = data
        const asyncRouterMap = state.asyncRouterMap
        initRouterNode(asyncRouterMap, menus)
        commit('SET_ROUTERS', asyncRouterMap)
        resolve()
      })
    }
  }
}

export default permission
