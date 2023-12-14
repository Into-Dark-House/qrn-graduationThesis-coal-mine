// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'

export const asyncRouterMap = [

  // {
  //   path: '/',
  //   name: 'index',
  //   component: BasicLayout,
  //   meta: { title: '首页' },
  //   redirect: '/home',
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'home',
  //       component: () => import('@/views/home/index'), // RouteView,
  //       meta: { title: '首页', keepAlive: false },
  //       icon: 'home'
  //     }
  //   ]
  // },
  // 可以去掉
  {
    path: '/',
    name: 'bi',
    redirect: '/bi/corps',
    component: BlankLayout,
    meta: { title: '数据中心' },
    children: [
      {
        path: '/bi/corps',
        name: 'corps',
        meta: { title: '数据中心' },
        component: () => import('@/views/bi/corps')
      }
    ]
  },
  {
    path: '/ci',
    name: 'ci',
    redirect: '/ci/corp',
    component: BlankLayout,
    meta: { title: '数据中心' },
    children: [
      {
        path: '/ci/corp',
        name: 'corp',
        meta: { title: '数据中心' },
        component: () => import('@/views/ci/corp')
      },
      {
        path: '/ci/iframeTest',
        name: 'iframeTest',
        meta: { title: '设备信息' },
        component: () => import('@/views/ci/iframeTest')
      }
    ]
  },
  // 去掉加载动画的
  {
    path: '/',
    name: 'ci',
    redirect: '/ci/iframeTest',
    component: BlankLayout,
    meta: { title: '数据中心' },
    children: [
      {
        path: '/ci/machineInfo',
        name: 'machineInfo',
        meta: { title: '设备采煤机' },
        component: () => import('@/views/ci/model/machineInfo/index')
      }
    ]
  },
  {
    path: '/xadmin',
    name: 'xadmin',
    redirect: '/xadmin/panelType',
    component: () => import('@/views/xadmin/layouts/menu'),
    children: [
      {
        path: 'production',
        name: 'xadmin',
        meta: { title: '生产填报' },
        component: () => import('@/views/xadmin/content/productionMonitor/production/index')
      },
      {
        path: 'reserves',
        name: 'xadmin',
        meta: { title: '资源储量' },
        component: () => import('@/views/xadmin/content/productionMonitor/reserves/index')
      },
      {
        path: 'target',
        name: 'xadmin',
        meta: { title: '指标管控' },
        component: () => import('@/views/xadmin/content/productionMonitor/target/index')
      },
      {
        path: 'video',
        name: 'xadmin',
        meta: { title: '视频监控' },
        component: () => import('@/views/xadmin/content/videoMonitor/index')
      },
      {
        path: 'escapeWarning',
        name: 'xadmin',
        meta: { title: '逃生预警' },
        component: () => import('@/views/xadmin/content/videoMonitor/escapeWarning')
      },
      {
        path: 'gasMonitor',
        name: 'xadmin',
        meta: { title: '瓦斯监测' },
        component: () => import('@/views/xadmin/content/envMonitor/gasMonitor')
      },
      {
        path: 'waterMonitor',
        name: 'xadmin',
        meta: { title: '排水监测' },
        component: () => import('@/views/xadmin/content/envMonitor/waterMonitor')
      },
      {
        path: 'airMonitor',
        name: 'xadmin',
        meta: { title: '通风监测' },
        component: () => import('@/views/xadmin/content/envMonitor/airMonitor')
      },
      {
        path: 'tempMonitor',
        name: 'xadmin',
        meta: { title: '温度监测' },
        component: () => import('@/views/xadmin/content/envMonitor/tempMonitor')
      },
      {
        path: 'panelType',
        name: 'xadmin',
        meta: { title: '采区划分' },
        component: () => import('@/views/xadmin/content/WorkFace/panelType/index')
      },
      {
        path: 'sceneType',
        name: 'xadmin',
        meta: { title: '场景分类' },
        component: () => import('@/views/xadmin/content/WorkFace/sceneType/index')
      },
      {
        path: 'aiEducation',
        name: 'xadmin',
        meta: { title: 'AI教育' },
        component: () => import('@/views/xadmin/content/WorkFace/sceneType/aiEducation')
      },
      {
        path: 'facility',
        name: 'xadmin',
        meta: { title: '设备管理' },
        component: () => import('@/views/xadmin/content/facility/index')
      },
      {
        path: 'workface',
        name: 'xadmin',
        meta: { title: '工作面管理' },
        component: () => import('@/views/xadmin/content/WorkFace')
      },
      {
        path: 'addWorkface',
        name: 'xadmin',
        meta: { title: '工作面管理' },
        component: () => import('@/views/xadmin/content/WorkFace/modules/AddWorkFace')
      },
      {
        path: 'editWorkface',
        name: 'xadmin',
        meta: { title: '工作面管理' },
        component: () => import('@/views/xadmin/content/WorkFace/modules/EditWorkFace')
      },
      {
        path: 'workfaceDetail',
        name: 'xadmin',
        meta: { title: '工作面管理' },
        component: () => import('@/views/xadmin/content/WorkFace/modules/WorkfaceDetail')
      },
      {
        path: 'roadway',
        name: 'xadmin',
        meta: { title: '巷道管理' },
        component: () => import('@/views/xadmin/content/Roadway')
      },
      {
        path: 'addRoadway',
        name: 'xadmin',
        meta: { title: '巷道管理' },
        component: () => import('@/views/xadmin/content/Roadway/modules/AddRoadway')
      },
      {
        path: 'editRoadway',
        name: 'xadmin',
        meta: { title: '巷道管理' },
        component: () => import('@/views/xadmin/content/Roadway/modules/EditRoadway')
      },
      {
        path: 'roadwayDeatil',
        name: 'xadmin',
        meta: { title: '巷道管理' },
        component: () => import('../views/xadmin/content/Roadway/modules/RoadwayDetail')
      },
      {
        path: 'footageManage',
        name: 'xadmin',
        meta: { title: '进尺管理' },
        component: () => import('../views/xadmin/content/FootageManage')
      },
      {
        path: 'yieldManage',
        name: 'xadmin',
        meta: { title: '产量管理' },
        component: () => import('../views/xadmin/content/YieldManage')
      },
      {
        path: 'user',
        name: 'xadmin',
        meta: { title: '人员管理' },
        component: () => import('../views/xadmin/content/user/index')
      },
      {
        path: 'tunnelFootage',
        name: 'xadmin',
        meta: { title: '进尺管理' },
        component: () => import('../views/xadmin/content/tunnelFootage/index')
      },
      {
        path: 'tunnelYield',
        name: 'xadmin',
        meta: { title: '产量管理' },
        component: () => import('../views/xadmin/content/tunnelYield/index')
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
