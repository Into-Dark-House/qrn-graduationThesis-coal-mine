import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'
// 初始化左侧弹窗
const data1 = {
  'leftSide': {
      'countNum': 5,
      'list': [
          {
              'title': '概览',
              'pageId': '4db438da17194ce089d525df1d07359e',
              'pageType': 'moudle',
              'order': 111,
              'pageMethod': null,
              'position': null
          },
          {
              'title': '视频监控',
              'pageId': 'e6313413a02349b6b57c7043e64af91e',
              'pageType': 'table2',
              'order': 121,
              'pageMethod': null,
              'position': null
          },
          {
              'title': '安全监测',
              'pageId': '459d85922eea4f5a90a77e6f79cbb73b',
              'pageType': 'table2',
              'order': 131,
              'pageMethod': null,
              'position': null
          }
      ]
  },
  'middleNumber': 5
}
const data2 = {
  'leftSide': {
    'countNum': 3,
    'list': [
      {
        'title': '资源储量(万吨)',
        'pageId': 'triplex',
        'pageType': 'triple',
        'order': 111,
        'pageMethod': null,
        'position': null
      },
      {
        'title': '进尺(实际/计划)',
        'pageId': 'progress1',
        'pageType': 'progress',
        'order': 121,
        'pageMethod': null,
        'position': null
      },
      {
        'title': '产量(实际/计划)',
        'pageId': 'progress2',
        'pageType': 'progress',
        'order': 131,
        'pageMethod': null,
        'position': null
      }
    ]
  }
}
const data3 = {
  'leftSide': {
      'countNum': 2,
      'list': [
          {
              'title': '摄像头列表',
              'pageId': '11909',
              'pageType': 'select',
              'order': 111,
              'pageMethod': null,
              'position': null
          },
          {
              'title': '视频监测',
              'pageId': '112',
              'pageType': 'table2',
              'order': 121,
              'pageMethod': null,
              'position': null
          }
      ]
  },
  'middleNumber': 5
}
const data4 = {
  'leftSide': {
      'countNum': 3,
      'list': [
          {
              'title': '温度传感器监测',
              'pageId': '117',
              'pageType': 'table',
              'order': 111,
              'pageMethod': null,
              'position': null
          },
          {
              'title': '风速传感器监测',
              'pageId': '118',
              'pageType': 'table',
              'order': 121,
              'pageMethod': null,
              'position': null
          },
          {
              'title': '瓦斯传感器监测',
              'pageId': '119',
              'pageType': 'table',
              'order': 131,
              'pageMethod': null,
              'position': null
          }
      ]
  },
  'middleNumber': 5
}
const data5 = {
  'leftSide': {
  'countNum': 3,
  'list': [
      {
          'title': '水仓高度监测',
          'pageId': '124',
          'pageType': 'table2',
          'order': 111,
          'pageMethod': null,
          'position': null
      },
      {
          'title': '水泵监测',
          'pageId': '125',
          'pageType': 'table2',
          'order': 121,
          'pageMethod': null,
          'position': null
      },
      {
          'title': '防水门监测',
          'pageId': '126',
          'pageType': 'table2',
          'order': 131,
          'pageMethod': null,
          'position': null
      }
  ]
},
'middleNumber': 0
}
const data6 = {
  'leftSide': {
  'countNum': 3,
  'list': [
      {
          'title': '风速监测',
          'pageId': '127',
          'pageType': 'table2',
          'order': 111,
          'pageMethod': null,
          'position': null
      },
      {
          'title': '风速传感器状态监测',
          'pageId': '128',
          'pageType': 'table2',
          'order': 121,
          'pageMethod': null,
          'position': null
      },
      {
          'title': '风机状态监测',
          'pageId': '129',
          'pageType': 'table2',
          'order': 131,
          'pageMethod': null,
          'position': null
      }
  ]
},
'middleNumber': 0
}
const data7 = {
  'leftSide': {
    'countNum': 3,
    'list': [
        {
            'title': '供电数据统计',
            'pageId': '135',
            'pageType': 'moudle',
            'order': 111,
            'pageMethod': null,
            'position': null
        },
        {
            'title': '变电所',
            'pageId': '136',
            'pageType': 'select',
            'order': 121,
            'pageMethod': null,
            'position': null
        },
        {
            'title': '设备监测',
            'pageId': '137',
            'pageType': 'table2',
            'order': 131,
            'pageMethod': null,
            'position': null
        }
    ]
  },
  'middleNumber': 0
  }
const data = {
  1: data1,
  2: data2,
  3: data3,
  4: data4,
  5: data5,
  6: data6,
  7: data7
}
const info = (options) => {
const parameters = getQueryParameters(options)
const index = parameters.tabKey
  return builder(data[index])
}

Mock.mock(/\/api\/initPage/, 'get', info)
