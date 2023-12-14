import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'
/*
  -------------文件作用--------------
  当点击模型后，通过点击的key，加载右侧弹窗
*/

/*
       --------------------参数说明--------------------------
      'title': '10101工作面',       是组件题头
      'pageId': '111',             就是点击三维模型的key
      'pageType': 'navFaceImg',    组件类型识别
      'order': 111,                组件位置，但是目前用不到  弃用
      'pageMethod': null,          组件位置，但是目前用不到  弃用
      'position': null             组件位置，但是目前用不到  弃用
      各组件注释，例：// 10101 工作面 111    右侧弹窗的名称  key
 */
/*
       ---------------------项目进展-------------------
完成：
工作面点击进入完成，工作面渲染完成，基本信息完成，详细信息弹窗完成,动态属性的接口未连接
未完成：
1.停用启用未写
2.控制17个组件模型，完成5，未完成12
3.封装资源储量、实际/计划（进尺）
 */

// 10101工作面 111
const data1 = {
  'countNum': 3,
  'list': [
    {
      'title': '10101工作面',
      'pageId': '111',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '111',
      'pageType': 'table3',
      'order': 232,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '111',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 10110掘进面	17
const data2 = {
  'countNum': 3,
  'list': [
    {
      'title': '10110掘进面',
      'pageId': '17',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '17',
      'pageType': 'table3',
      'order': 232,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '17',
      'pageType': 'table4',
      'order': 233,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 交流电牵引采煤机	22056
const data3 = {
  'countNum': 3,
  'list': [
    {
      'title': '交流电牵引采煤机',
      'pageId': '22056',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '22056',
      'pageType': 'table3',
      'order': 232,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '22056',
      // 'pageType': 'line', // chart图表标识
      'pageType': 'table4', // 替换成了表格
      'order': 233,
      'pageMethod': null,
      'position': null
    }
  ]
}

// XXX掘进机	22057
const data4 = {
  'countNum': 3,
  'list': [
    {
      'title': 'XXX掘进机',
      'pageId': '22057',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '22057',
      'pageType': 'table3',
      'order': 232,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '22057',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 摄像头名称	19001
const data5 = {
  'countNum': 3,
  'list': [
    {
      'title': '摄像头名称',
      'pageId': '19001',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '19001',
      'pageType': 'table3',
      'order': 232,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态信息',
      'pageId': '19001-video',
      'pageType': 'video',
      'order': 233,
      'pageMethod': null,
      'position': null
    }
  ]
}
// 瓦斯传感器	8600
const data6 = {
  'countNum': 3,
  'list': [
    {
      'title': '瓦斯传感器0',
      'pageId': '8600',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态信息',
      'pageId': '8600',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 人员（李爱国）	22059
const data7 = {
  'countNum': 3,
  'list': [
    {
      'title': '李爱国',
      'pageId': '22059',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '22059',
      'pageType': 'table3',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 人员（王建国）	23060
const data8 = {
  'countNum': 3,
  'list': [
    {
      'title': '王建国',
      'pageId': '23060',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '23060',
      'pageType': 'table3',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 人员-带报警信息（王友善）	22159
const data9 = {
  'countNum': 3,
  'list': [
    {
      'title': '王友善',
      'pageId': '22159',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '22159',
      'pageType': 'table3',
      'order': 234,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '报警信息',
      'pageId': '22159AlarmInfo',
      'pageType': 'navAlarmInfo',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 刮板运输机	22060
const data10 = {
  'countNum': 3,
  'list': [
    {
      'title': '刮板运输机',
      'pageId': '22060',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '22060',
      'pageType': 'table3',
      'order': 232,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '22060',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// ⽪带运输机	22258
const data11 = {
  'countNum': 3,
  'list': [
    {
      'title': '带运输机',
      'pageId': '22258',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    // {
    //   'title': '基础信息',
    //   'pageId': '22258',
    //   'pageType': 'table3',
    //   'order': 234,
    //   'pageMethod': null,
    //   'position': null
    // },
    {
      'title': '报警信息',
      'pageId': '22258AlarmInfo',
      'pageType': 'navAlarmInfo',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// ⽪带运输机-带报警信息	22258-1
const data12 = {
  'countNum': 3,
  'list': [
    {
      'title': '⽪带运输机-带报警信息',
      'pageId': '22258-1',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    // {
    //   'title': '基础信息',
    //   'pageId': '22258-1',
    //   'pageType': 'table3',
    //   'order': 234,
    //   'pageMethod': null,
    //   'position': null
    // },
    {
      'title': '报警信息',
      'pageId': '22258AlarmInfo',
      'pageType': 'navAlarmInfo',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 转载机	8200
const data13 = {
  'countNum': 3,
  'list': [
    {
      'title': '转载机',
      'pageId': '8200',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '8200',
      'pageType': 'table3',
      'order': 232,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '8200',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 液压⽀架	8000
const data14 = {
  'countNum': 3,
  'list': [
    {
      'title': '液压⽀架',
      'pageId': '8000',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '8000',
      'pageType': 'table3',
      'order': 232,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '8000',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 破碎机	8100
const data15 = {
  'countNum': 3,
  'list': [
    {
      'title': '破碎机',
      'pageId': '8100',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '基础信息',
      'pageId': '8100',
      'pageType': 'table3',
      'order': 232,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '8100',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// ⾼压配电开关01	1111
const data16 = {
  'countNum': 3,
  'list': [
    {
      'title': '⾼压配电开关01',
      'pageId': '1111',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '1111',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// ⾼压配电开关02	1108
const data17 = {
  'countNum': 3,
  'list': [
    {
      'title': '⾼压配电开关02',
      'pageId': '1108',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '动态属性',
      'pageId': '1108',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}

// 数据漫游模式弹窗	dataRoaming
const data18 = {
  'countNum': 2,
  'list': [
    {
      'title': '第一人称漫游',
      'pageId': 'dataRoaming',
      'pageType': 'navFaceImg',
      'order': 111,
      'pageMethod': null,
      'position': null
    },
    {
      'title': '操作说明',
      'pageId': 'manual',
      'pageType': 'table4',
      'order': 234,
      'pageMethod': null,
      'position': null
    }
  ]
}
// 字段就是key值
const data = {
  '111': data1,
  '17': data2,
  '22056': data3,
  '22057': data4,
  '19001': data5,
  '8600': data6,
  '22059': data7,
  '23060': data8,
  '22159': data9,
  '22060': data10,
  '22258': data11,
  '22258-1': data12,
  '8200': data13,
  '8000': data14,
  '8100': data15,
  '1111': data16,
  '1108': data17,
  'dataRoaming': data18
}

const info = (options) => {
  const parameters = getQueryParameters(options)
  const index = parameters.id
  return builder(data[index])
}
// 根据模型key 获取右侧弹窗  在将key传给各组件

Mock.mock(/\/api\/getRightSide/, 'get', info)
