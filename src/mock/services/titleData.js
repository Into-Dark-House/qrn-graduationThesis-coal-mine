import Mock from 'mockjs2'
import { builder } from '../util'

const info = (options) => {
  const data = {
    'status': 200,
    'message': null,
    'rel': true,
    'result': {
        'title': '天津海洋工程装备制造基地EMS能耗在线监测系统',
        'imagePath': 'http://119.3.173.6:8000/file/be809e942bc04059a7bf8b551837ffa2.png',
        'messCenter': '0',
        'appCenter': '1',
        'dataMode': '1',
        'roamingMode': '1',
        'encircleMode': '1',
        'showShadow': '1',
        'sceneChoice': '1'
    }
}
  return builder(data)
}

Mock.mock(/\/api\/getTitleData/, 'get', info)
