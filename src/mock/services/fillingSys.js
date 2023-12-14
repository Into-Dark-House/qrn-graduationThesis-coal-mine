import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'
// 填报系统数据
const data1 = {
  'list': [
    {
      'id': '1',
      'one': '一采区',
      'two': '2',
      'three': '2022-10-01 10:10:10',
      'four': '此采区为工程开始期由张总划分',
      'five': '报警',
      'level': 2
    },
    {
      'id': '2',
      'one': '二采区',
      'two': '3',
      'three': '2022-10-01 10:10:10',
      'four': '赵总监划分东北1区',
      'five': '报警',
      'level': 2
    }
  ]
}
const data2 = {
  'list': [
    {
      'id': '1',
      'one': '10101工作面',
      'two': '工作面',
      'three': '2022-10-01 10:10:10',
      'four': '10101工作面位于西南330°',
      'five': '30',
      'level': 2
    },
    {
      'id': '2',
      'one': '10110巷道',
      'two': '巷道',
      'three': '2022-10-01 10:10:10',
      'four': '无',
      'five': '5',
      'level': 2
    }
  ]
}
const data3 = {
  'list': [
    {
      'id': '1',
      'one': '工作面',
      'two': '1',
      'three': '2022-10-20 10:10:33',
      'four': '所有具有回采工作域集合，且为施工场景',
      'five': '报警',
      'level': 2
    },
    {
      'id': '2',
      'one': '巷道',
      'two': '1',
      'three': '2022-10-20 10:18:40',
      'four': '西南巷具有掘进工作域的集合',
      'five': '报警',
      'level': 2
    }
  ]
}
const data4 = {
  'list': [
    {
      'id': '1',
      'one': '王强',
      'two': '男',
      'three': '33',
      'four': '巡逻员',
      'five': '报警',
      'level': 2
    },
    {
      'id': '2',
      'one': '李爱国',
      'two': '男',
      'three': '35',
      'four': '检测员',
      'five': '报警',
      'level': 2
    },
    {
      'id': '3',
      'one': '王建国',
      'two': '男',
      'three': '43',
      'four': '检测员',
      'five': '报警',
      'level': 2
    },
    {
      'id': '4',
      'one': '张玖酒',
      'two': '男',
      'three': '23',
      'four': '检测员',
      'five': '报警',
      'level': 2
    },
    {
      'id': '5',
      'one': '张爽',
      'two': '男',
      'three': '50',
      'four': '检测员',
      'five': '报警',
      'level': 2
    }
  ]
}
const data5 = {
  'list': [
    {
      'id': '1',
      'one': '王友善',
      'two': '男',
      'three': '30',
      'four': '驾驶员',
      'five': '报警',
      'level': 2
    }
  ]
}
const data6 = {
  'list': [
    {
      'id': '1',
      'one': '双臂采煤机04',
      'two': '#CMJ04',
      'three': 'CMJ04',
      'four': '使用中',
      'five': '报警',
      'level': 2
    },
    {
      'id': '2',
      'one': '液压支架',
      'two': '#YYZJ001',
      'three': 'YYZJ',
      'four': '使用中',
      'five': '报警',
      'level': 2
    },
    {
      'id': '3',
      'one': '刮板运输机',
      'two': '#GBYSJ',
      'three': 'GBYSJ',
      'four': '使用中',
      'five': '报警',
      'level': 2
    }
  ]
}
const data7 = {
  'list': [
    {
      'id': '1',
      'one': '掘进机1',
      'two': '#JJJ',
      'three': 'JJJ',
      'four': '使用中',
      'five': '报警',
      'level': 2
    },
    {
      'id': '2',
      'one': '运输机',
      'two': '#YSJ001',
      'three': 'YSJ',
      'four': '使用中',
      'five': '报警',
      'level': 2
    },
    {
      'id': '3',
      'one': '摄像头',
      'two': '#SXT001',
      'three': 'SXT',
      'four': '使用中',
      'five': '报警',
      'level': 2
    }
  ]
}
const data8 = {
  'list': [
    {
      'id': '1',
      'one': '#WDJCQ001',
      'two': '10101工作面',
      'three': '回风槽',
      'four': '30',
      'five': '50',
      'six': '正常',
      'seven': '预警',
      'eight': '2022-10-10 10:10:10',
      'level': 2
    },
    {
      'id': '2',
      'one': '#WDJCQ002',
      'two': '10110掘进面',
      'three': '运输顺槽',
      'four': '28',
      'five': '47',
      'six': '正常',
      'seven': '正常',
      'eight': '2022-10-10 10:10:10',
      'level': 2
    },
    {
      'id': '3',
      'one': '#WDJCQ003',
      'two': '10101工作面',
      'three': '回风槽',
      'four': '35',
      'five': '50',
      'six': '正常',
      'seven': '报警',
      'eight': '2022-10-10 10:10:10',
      'level': 2
    }
  ]
}
const data9 = {
  'list': [
    {
      'id': '1',
      'one': '001主机风扇',
      'two': '10101工作面',
      'three': '回风槽',
      'four': '50',
      'five': '20',
      'six': '正常',
      'seven': '正常',
      'eight': '2022-10-10 10:10:10',
      'level': 2
    },
    {
      'id': '2',
      'one': '002小型风扇',
      'two': '10110掘进面',
      'three': '运输顺槽',
      'four': '30',
      'five': '20',
      'six': '正常',
      'seven': '正常',
      'eight': '2022-10-10 10:10:10',
      'level': 2
    },
    {
      'id': '3',
      'one': '003中型风扇',
      'two': '10101工作面',
      'three': '回风槽',
      'four': '38',
      'five': '20',
      'six': '正常',
      'seven': '正常',
      'eight': '2022-10-10 10:10:10',
      'level': 2
    }
  ]
}
const data10 = {
  'list': [
    {
      'id': '1',
      'one': '#WSCGQ001',
      'two': '10101工作面',
      'three': '回风槽',
      'four': '5',
      'five': '50',
      'six': '700',
      'seven': '-50%',
      'eight': '2022-10-22 12:42:55',
      'level': 2
    },
    {
      'id': '2',
      'one': '#WSCGQ002',
      'two': '10101工作面',
      'three': '回风槽',
      'four': '9',
      'five': '50',
      'six': '700',
      'seven': '-37%',
      'eight': '2022-10-22 12:45:39',
      'level': 2
    },
    {
      'id': '3',
      'one': '#WSCGQ003',
      'two': '10110掘进面',
      'three': '运输顺槽',
      'four': '5',
      'five': '50',
      'six': '700',
      'seven': '-45%',
      'eight': '2022-10-22 14:10:10',
      'level': 2
    }
  ]
}
const data11 = {
  'list': [
    {
      'id': '1',
      'one': '#001水仓',
      'two': '中央水舱',
      'three': '西南杠',
      'four': '15',
      'five': '30',
      'six': '25',
      'seven': '正常',
      'eight': '2022-10-10 10:10:10',
      'nine': '130',
      'ten': '150',
      'level': 2
    },
    {
      'id': '2',
      'one': '#002水仓',
      'two': '中央水舱',
      'three': '1号仓',
      'four': '15',
      'five': '30',
      'six': '25',
      'seven': '正常',
      'eight': '2022-10-10 10:10:10',
      'nine': '133.3',
      'ten': '156.2',
      'level': 2
    },
    {
      'id': '3',
      'one': '#003水仓',
      'two': '中央水舱',
      'three': '2号仓',
      'four': '9',
      'five': '30',
      'six': '25',
      'seven': '正常',
      'eight': '2022-10-10 10:10:10',
      'nine': '132.2',
      'ten': '159.9',
      'level': 2
    }
  ]
}
const data12 = {
  'list': [
    {
      'id': '1',
      'one': '王友善',
      'two': '10101工作面',
      'three': '正常',
      'four': '正常',
      'level': 2
    },
    {
      'id': '2',
      'one': '李爱国',
      'two': '主运大巷',
      'three': '未带安全帽',
      'four': '预警',
      'level': 2
    },
    {
      'id': '3',
      'one': '李爱国',
      'two': '主运大巷',
      'three': '设备故障',
      'four': '报警',
      'level': 2
    }
  ]
}
const data13 = {
  'list': [
    {
      'id': '1',
      'one': '#WSCGQ001',
      'two': '10110工作面',
      'three': '回风槽',
      'four': '25',
      'five': '20',
      'six': '报警',
      'seven': '瓦斯传感器',
      'eight': '2022-10-22 12:42:55',
      'level': 2
    },
    {
      'id': '2',
      'one': '#WSCGQ002',
      'two': '10110掘进巷道',
      'three': '运输顺槽',
      'four': '30',
      'five': '20',
      'six': '报警',
      'seven': '瓦斯传感器',
      'eight': '2022-10-22 12:45:39',
      'level': 2
    },
    {
      'id': '3',
      'one': '#WDJCQ003',
      'two': '10110工作面',
      'three': '回风槽',
      'four': '35',
      'five': '50',
      'six': '预警',
      'seven': '温度传感器',
      'eight': '2022-10-22 13:13:10',
      'level': 2
    }
  ]
}
const data14 = {
  'list': [
    {
      'id': '1',
      'one': '10101工作面',
      'two': '50',
      'three': '1000',
      'four': '10',
      'five': '10',
      'six': '1000',
      'seven': '10000',
      'eight': '2022-10-15 10:17:13',
      'level': 2
    },
    {
      'id': '2',
      'one': '10110掘进巷道',
      'two': '20',
      'three': '100',
      'four': '10',
      'five': '10',
      'six': '95',
      'seven': '4000',
      'eight': '2022-10-15 10:18:54',
      'level': 2
    }
  ]
}
const data = {
  'getMiningAreaList': data1,
  'getMiningAreaListDetails': data2,
  'getSceneTypeList': data3,
  'getWorkUserNumInfoList': data4,
  'getRoadUserNumInfoList': data5,
  'getWorkDevNumInfoList': data6,
  'getRoadDevNumInfoList': data7,
  'getTempList': data8,
  'getAirList': data9,
  'getGasList': data10,
  'getWaterList': data11,
  'getVideoList': data12,
  'getWarningList': data13,
  'getTargetMonitorList': data14,

}
const info = (options) => {
  const parameters = getQueryParameters(options)
  const index = parameters.key
  return builder(data[index])
}

Mock.mock(/\/api\/getFillingSys/, 'get', info)
