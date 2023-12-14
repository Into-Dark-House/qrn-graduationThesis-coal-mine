import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'
const data1 = {
  'type': 'moudle',
  'title': '概览',
  'list': null,
  'data': [
    {
      'total': '11',
      'unit': '个',
      'name': '采区'
    },
    {
      'total': '9',
      'unit': '个',
      'name': '工作面'
    },
    {
      'total': '105',
      'unit': '台',
      'name': '设备'
    },
    {
      'total': '80',
      'unit': '个',
      'name': '人员'
    }
  ]
}
const data2 = {
  'type': 'table2',
  'title': '视频监控',
  'list': [
    {
      'id': '22159',
      'one': '王友善',
      'two': '10101工作面',
      'three': '3m/s',
      'four': '安全',
      'five': '正常',
      'level': 0
    },
    {
      'id': '22059',
      'one': '李爱国',
      'two': '主运大巷',
      'three': '5m/s',
      'four': '报警',
      'five': '未带安全帽',
      'level': 1
    },
    {
      'id': '22059',
      'one': '李爱国',
      'two': '主运大巷',
      'three': '10m/s',
      'four': '预警',
      'five': '设备故障',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '报警对象',
    '位置',
    '', // '数值',
    '', // '状态',
    '报警原因'
  ]
}
const data3 = {
  'type': 'table2',
  'title': '安全监控',
  'list': [
    {
      'id': '22159',
      'one': '王友善',
      'two': '',
      'three': '',
      'four': '10101工作面',
      'five': '未戴安全帽',
      'level': 2
    },
    {
      'id': '22258',
      'one': '皮带运输机',
      'two': '',
      'three': '',
      'four': '主运大巷',
      'five': '设备故障',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '报警对象',
    '',
    '',
    '位置',
    '报警原因'
  ]
}
const data5 = {
  'type': 'table2',
  'title': '排水监测',
  'list': [
    {
      'id': '9501',
      'one': '#001水泵',
      'two': '',
      'three': '',
      'four': '一采区水泵房',
      'five': '设备故障',
      'level': 2
    },
    {
      'id': '9502',
      'one': '#002水泵',
      'two': '',
      'three': '',
      'four': '中央水泵房',
      'five': '设备故障',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '报警对象',
    '',
    '',
    '位置',
    '报警原因'
  ]
}
const data6 = {
  'type': 'table2',
  'title': '通风监测',
  'list': [
    {
      'id': '8700',
      'one': '#001风速传感器',
      'two': '',
      'three': '',
      'four': '10102运输顺槽',
      'five': '设备故障',
      'level': 2
    },
    {
      'id': '9201',
      'one': '#002风机',
      'two': '',
      'three': '',
      'four': '回风斜井',
      'five': '设备故障',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '报警对象',
    '',
    '',
    '位置',
    '报警原因'
  ]
}
const data7 = {
  'type': 'table2',
  'title': '综掘工作面',
  'list': [
    {
      'id': '126',
      'one': '10110巷道',
      'two': '1650',
      'three': '',
      'four': '183',
      'five': '进行中',
      'level': 0
    }
  ],
  'data': null,
  'titleName': [
    '工作面名称',
    '设计长度（m）',
    '',
    '已掘长度（m）',
    '任务状态'
  ]
}
const data8 = {
  'type': 'table2',
  'title': '综采工作面',
  'list': [
    {
      'id': '111',
      'one': '10101工作面',
      'two': '1452',
      'three': '',
      'four': '625',
      'five': '进行中',
      'level': 0
    },
    {
      'id': '112',
      'one': '10102工作面',
      'two': '1638',
      'three': '',
      'four': '362',
      'five': '进行中',
      'level': 0
    },
    {
      'id': '113',
      'one': '10103工作面',
      'two': '1104',
      'three': '',
      'four': '0',
      'five': '未开始',
      'level': 0
    }
  ],
  'data': null,
  'titleName': [
    '工作面名称',
    '设计长度（m）',
    '',
    '采掘长度（m）',
    '任务状态'
  ]
}
const data9 = {
  'type': 'Histogram',
  'title': '开采量统计',
  'yearAll': '开拓累计(万吨)：0.6',
  'yearCurrent': '回采累计(万吨)：32.1',
  'unit': '万吨',
  'list': [
    {
      'month': '1月',
      'name': '开拓',
      'value': '0.25'
    },
    {
      'month': '1月',
      'name': '回采',
      'value': '2.05'
    },
    {
      'month': '2月',
      'name': '开拓',
      'value': '0.18'
    },
    {
      'month': '2月',
      'name': '回采',
      'value': '2.83'
    },
    {
      'month': '3月',
      'name': '开拓',
      'value': '0.11'
    },
    {
      'month': '3月',
      'name': '回采',
      'value': '2.75'
    },
    {
      'month': '4月',
      'name': '开拓',
      'value': '0.15'
    },
    {
      'month': '4月',
      'name': '回采',
      'value': '2.02'
    },
    {
      'month': '5月',
      'name': '开拓',
      'value': '0.28'
    },
    {
      'month': '5月',
      'name': '回采',
      'value': '2.05'
    },
    {
      'month': '6月',
      'name': '开拓',
      'value': '0.28'
    },
    {
      'month': '6月',
      'name': '回采',
      'value': '2.23'
    },
    {
      'month': '7月',
      'name': '开拓',
      'value': '0.22'
    },
    {
      'month': '7月',
      'name': '回采',
      'value': '2.47'
    },
    {
      'month': '8月',
      'name': '开拓',
      'value': '0.17'
    },
    {
      'month': '8月',
      'name': '回采',
      'value': '2.04'
    },
    {
      'month': '9月',
      'name': '开拓',
      'value': '0.19'
    },
    {
      'month': '9月',
      'name': '回采',
      'value': '2.87'
    },
    {
      'month': '10月',
      'name': '开拓',
      'value': '0.23'
    },
    {
      'month': '10月',
      'name': '回采',
      'value': '1.70'
    },
    {
      'month': '11月',
      'name': '开拓',
      'value': '0.19'
    },
    {
      'month': '11月',
      'name': '回采',
      'value': '2.10'
    },
    {
      'month': '12月',
      'name': '开拓',
      'value': '0.18'
    },
    {
      'month': '12月',
      'name': '回采',
      'value': '2.42'
    }
  ]
}
const data10 = {
  'type': 'table2',
  'title': '综掘人员',
  'list': [
    {
      'id': '23060',
      'one': '王建国',
      'two': '10101掘进巷道',
      'three': '综掘任务',
      'four': '施工中',
      'five': '3',
      'level': 0
    }
  ],
  'data': null,
  'titleName': [
    '报警对象',
    '位置',
    '入井目的',
    '状态',
    '井下时间(h)'
  ]
}
const data11 = {
  'type': 'table2',
  'title': '综采人员',
  'list': [
    {
      'id': '22159',
      'one': '王友善',
      'two': '10101工作面',
      'three': '回采任务',
      'four': '空闲',
      'five': '4',
      'level': 0
    },
    {
      'id': '22059',
      'one': '李爱国',
      'two': '主运大巷',
      'three': '回采任务',
      'four': '施工中',
      'five': '2',
      'level': 0
    }
  ],
  'data': null,
  'titleName': [
    '报警对象',
    '位置',
    '入井目的',
    '状态',
    '井下时间(h)'
  ]
}
const data12 = {
  'type': 'table2',
  'title': '视频监控',
  'list': [
    {
      'id': '22159',
      'one': '王友善',
      'two': '10101工作面',
      'three': '回采任务',
      'four': '空闲',
      'five': '未带安全帽',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '报警对象',
    '位置',
    '入井目的',
    '状态',
    '井下时间(h)'
  ]
}
const data13 = {
  'type': 'table2',
  'title': '视频监测',
  'list': [
    {
      'id': '22159',
      'one': '王友善',
      'two': '10101工作面',
      'three': '',
      'four': '',
      'five': '未戴安全帽',
      'level': 2
    },
    {
      'id': '22258',
      'one': '皮带运输机',
      'two': '主运大巷',
      'three': '',
      'four': '',
      'five': '设备故障',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '报警对象',
    '位置',
    '',
    '',
    '报警原因'
  ]
}
const data14 = {
  'type': 'table',
  'title': '温度传感器监测',
  'list': null,
  'data': [
    {
      'id': '8800',
      'one': '#0001',
      'two': '10101运输顺槽',
      'three': '',
      'four': '41°C',
      'five': '预警',
      'level': 2
    },
    {
      'id': '8801',
      'one': '#0001',
      'two': '10102运输顺槽',
      'three': '',
      'four': '45°C',
      'five': '报警',
      'level': 1
    }
  ],
  'onLine': '203',
  'outLine': '4',
  'badLine': '2',
  'titleName': [
    '传感器编号',
    '位置',
    '',
    '数值',
    '状态'
  ]
}
const data15 = {
  'type': 'table',
  'title': '风速传感器监测',
  'list': null,
  'data': [
    {
      'id': '8700',
      'one': '#0002',
      'two': '10102运输顺槽',
      'three': '',
      'four': '3m/s',
      'five': '报警',
      'level': 1
    },
    {
      'id': '8701',
      'one': '#0002',
      'two': '10102运输顺槽',
      'three': '',
      'four': '5m/s',
      'five': '预警',
      'level': 2
    }
  ],
  'onLine': '203',
  'outLine': '4',
  'badLine': '2',
  'titleName': [
    '传感器编号',
    '位置',
    '',
    '数值',
    '状态'
  ]
}
const data16 = {
  'type': 'table',
  'title': '瓦斯传感器监测',
  'list': null,
  'data': [
    {
      'id': '8600',
      'one': '#0002',
      'two': '10102运输顺槽',
      'three': '',
      'four': '4%',
      'five': '预警',
      'level': 2
    },
    {
      'id': '8601',
      'one': '#0002',
      'two': '10102运输顺槽',
      'three': '',
      'four': '6%',
      'five': '超标',
      'level': 1
    }
  ],
  'onLine': '203',
  'outLine': '4',
  'badLine': '2',
  'titleName': [
    '传感器编号',
    '位置',
    '',
    '数值',
    '状态'
  ]
}
const data17 = {
  'type': 'table2',
  'title': '人员监测',
  'list': [
    {
      'id': '22059',
      'one': '李爱国',
      'two': '液压支架工',
      'three': '',
      'four': '10101工作面',
      'five': '未戴安全帽',
      'level': 2
    },
    {
      'id': '22159',
      'one': '王友善',
      'two': '液压支架工',
      'three': '',
      'four': '10101工作面',
      'five': '未戴安全帽',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '姓名',
    '岗位',
    '',
    '位置',
    '报警原因'
  ]
}
const data18 = {
  'type': 'table2',
  'title': '接入位号监测',
  'list': [
    {
      'id': '22056',
      'one': '交流电牵引采煤机',
      'two': '右侧牵引电机电流',
      'three': '',
      'four': '10:12:02 2021.10.30',
      'five': '严重',
      'level': 1
    },
    {
      'id': '22060',
      'one': '刮板运输机',
      'two': '电压',
      'three': '',
      'four': '10:12:02 2021.10.30',
      'five': '中等',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '设备名称',
    '位号名称',
    '',
    '报警时间',
    '报警等级'
  ]
}
const data19 = {
  'type': 'table2',
  'title': '顶板离层在线监测',
  'list': [
    {
      'id': '8000',
      'one': '#001',
      'two': '10101工作面',
      'three': '',
      'four': '36MPa',
      'five': '预警',
      'level': 2
    },
    {
      'id': '8001',
      'one': '#002',
      'two': '10101工作面',
      'three': '',
      'four': '18MPa',
      'five': '报警',
      'level': 1
    }
  ],
  'data': null,
  'titleName': [
    '液压支架编号',
    '位置',
    '',
    '压力值',
    '状态'
  ]
}
const data20 = {
  'type': 'table2',
  'title': '水仓高度监测',
  'list': [
    {
      'id': '122',
      'one': '#0001',
      'two': '一采区水仓',
      'three': '',
      'four': '12m',
      'five': '报警',
      'level': 2
    },
    {
      'id': '124',
      'one': '#0002',
      'two': '中央水仓',
      'three': '',
      'four': '10m',
      'five': '预警',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '水仓编号',
    '位置',
    '',
    '高度',
    '状态'
  ]
}
const data21 = {
  'type': 'table2',
  'title': '水泵监测',
  'list': [
    {
      'id': '1084',
      'one': '#0001',
      'two': '一采区水泵房',
      'three': '',
      'four': '',
      'five': '报警',
      'level': 2
    },
    {
      'id': '1083',
      'one': '#0002',
      'two': '一采区水泵房',
      'three': '',
      'four': '',
      'five': '预警',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '水泵编号',
    '位置',
    '',
    '',
    '状态'
  ]
}
const data22 = {
  'type': 'table2',
  'title': '防水门监测',
  'list': [
    {
      'id': '1081',
      'one': '#0001',
      'two': '一采区水泵房',
      'three': '',
      'four': '',
      'five': '报警',
      'level': 2
    },
    {
      'id': '1082',
      'one': '#0002',
      'two': '一采区水泵房',
      'three': '',
      'four': '',
      'five': '报警',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '防水门编号',
    '位置',
    '',
    '',
    '状态'
  ]
}
const data23 = {
  'type': 'table2',
  'title': '风速监测',
  'list': [
    {
      'id': '8700',
      'one': '#0002',
      'two': '10102运输顺槽',
      'three': '',
      'four': '3m/s',
      'five': '报警',
      'level': 1
    },
    {
      'id': '8701',
      'one': '#0002',
      'two': '10102运输顺槽',
      'three': '',
      'four': '5m/s',
      'five': '预警',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '传感器编号',
    '位置',
    '',
    '数值',
    '状态'
  ]
}
const data24 = {
  'type': 'table2',
  'title': '风速传感器状态监测',
  'list': [
    {
      'id': '8700',
      'one': '#0002',
      'two': '10102运输顺槽',
      'three': '',
      'four': '3m/s',
      'five': '报警',
      'level': 1
    },
    {
      'id': '8701',
      'one': '#0002',
      'two': '10102运输顺槽',
      'three': '',
      'four': '5m/s',
      'five': '预警',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '传感器编号',
    '位置',
    '',
    '数值',
    '状态'
  ]
}
const data25 = {
  'type': 'table2',
  'title': '风机状态监测',
  'list': [
    {
      'id': '9200',
      'one': '#0002',
      'two': '局扇风机',
      'three': '',
      'four': '10102掘进面',
      'five': '报警',
      'level': 1
    },
    {
      'id': '9201',
      'one': '#0002',
      'two': '主扇风机',
      'three': '',
      'four': '回风斜井',
      'five': '预警',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '风机编号',
    '风机类型',
    '',
    '位置',
    '状态'
  ]
}
const data26 = {
  'type': 'moudle',
  'title': '供电数据统计',
  'list': null,
  'data': [
    {
      'total': '10',
      'unit': '',
      'name': '设备总数'
    },
    {
      'total': '8',
      'unit': '',
      'name': '已上电设备'
    },
    {
      'total': '1',
      'unit': 'KA',
      'name': '总电流'
    },
    {
      'total': '35',
      'unit': 'KV',
      'name': '总电压'
    }
  ]
}
const data27 = {
  'type': 'select',
  'title': '变电所',
  'list': [],
  'data': null,
  'tree': [
    {
      name: '一采区',
      value: '一采区',
      key: 101,
      parentKey: '',
      scopedSlots: { title: 'title' },
      children: [
        {
          name: '中央变电所',
          value: '中央变电所',
          key: 1011,
          parentKey: 101,
          scopedSlots: { title: 'title' },
          children: [
            {
              name: '高压真空配电开关#H001',
              value: '高压真空配电开关#H001',
              key: 1111,
              parentKey: 1011,
              scopedSlots: { title: 'title' },
              children: []
            },
            {
              name: '高压真空配电开关#H002',
              value: '高压真空配电开关#H002',
              key: 1108,
              parentKey: 1011,
              scopedSlots: { title: 'title' },
              children: []
            }
          ]
        },
        {
          name: '中央水泵房',
          value: '中央水泵房',
          key: 1012,
          parentKey: 101,
          scopedSlots: { title: 'title' },
          children: [
            {
              name: '水泵#W001',
              value: '水泵#W001',
              key: 10121,
              parentKey: 1012,
              scopedSlots: { title: 'title' },
              children: []
            },
            {
              name: '水泵#W002',
              value: '水泵#W002',
              key: 10122,
              parentKey: 1012,
              scopedSlots: { title: 'title' },
              children: []
            }
          ]
        },
        {
          name: '采区变电所',
          value: '采区变电所',
          key: 1013,
          parentKey: 101,
          scopedSlots: { title: 'title' },
          children: [
            {
              name: '矿用隔爆型干式变压器#T001',
              value: '矿用隔爆型干式变压器#T001',
              key: 1102,
              parentKey: 1013,
              scopedSlots: { title: 'title' },
              children: []
            }
          ]
        },
        {
          name: '采区水泵房',
          value: '采区水泵房',
          key: 1014,
          parentKey: 101,
          scopedSlots: { title: 'title' },
          children: [
            {
              name: '水泵#W101',
              value: '水泵#W101',
              key: 10141,
              parentKey: 1014,
              scopedSlots: { title: 'title' },
              children: []
            }
          ]
        }
      ]
    }]
}
const data28 = {
  'type': 'table2',
  'title': '设备监测',
  'list': [
    {
      'id': 'test0',
      'one': '#0001',
      'two': '10101运输顺槽',
      'three': '',
      'four': '',
      'five': '报警',
      'level': 2
    },
    {
      'id': 'test0',
      'one': '#0002',
      'two': '10102运输顺槽',
      'three': '',
      'four': '',
      'five': '报警',
      'level': 2
    }
  ],
  'data': null,
  'titleName': [
    '设备编号',
    '位置',
    '',
    '',
    '报警原因'
  ]
}
const data29 = {
  'type': 'select', // 组件的标识：写死
  'title': '摄像头列表', // 组件标头：摄像头列表、变电所
  'list': [], // 暂时这么返给我
  'data': null, // 写死
  'tree': [
    {
      name: '一采区', // 所属采区
      value: '一采区', // 所属采区值 (前端用)
      key: 102, // 采区KEY值
      parentKey: '', // 根节点KEY值为空
      scopedSlots: { title: 'title' }, // 节点插槽
      children: [
        {
          name: '10101工作面', // 所属工作面
          value: '10101工作面', // 所属工作面值(前端用)
          key: 111, // 工作面的KEY值
          parentKey: 102, // 父节点的KEY值(即所属采区KEY值)
          scopedSlots: { title: 'title' },
          children: [
            {
              name: '摄像头1(#SXT001)', // 摄像头名称
              value: '摄像头1(#SXT001)', // 摄像头名称值(前端用)
              key: 19001, // 摄像头的KEY值
              parentKey: 111, // 父节点的KEY值(即工作面KEY值)
              scopedSlots: { title: 'title' },
              children: []
            },
            {
              name: '摄像头2(#SXT002)',
              value: '摄像头2(#SXT002)',
              key: 19002,
              parentKey: 111,
              scopedSlots: { title: 'title' },
              children: []
            },
            {
              name: '摄像头3(#SXT003)',
              value: '摄像头3(#SXT003)',
              key: 19003,
              parentKey: 111,
              scopedSlots: { title: 'title' },
              children: []
            },
            {
              name: '摄像头4(#SXT004)',
              value: '摄像头4(#SXT004)',
              key: 19004,
              parentKey: 111,
              scopedSlots: { title: 'title' },
              children: []
            },
            {
              name: '摄像头5(#SXT005)',
              value: '摄像头5(#SXT005)',
              key: 19005,
              parentKey: 111,
              scopedSlots: { title: 'title' },
              children: []
            },
            {
              name: '摄像头6(#SXT006)',
              value: '摄像头6(#SXT006)',
              key: 19006,
              parentKey: 111,
              scopedSlots: { title: 'title' },
              children: []
            }
          ]
        },
      {
          name: '10110掘进面', // 所属工作面
          value: '10101掘进面', // 所属工作面值(前端用)
          key: 111, // 工作面的KEY值
          parentKey: 102, // 父节点的KEY值(即所属采区KEY值)
          scopedSlots: { title: 'title' },
          children: [
            {
              name: '摄像头7(#SXT007)', // 摄像头名称
              value: '摄像头7(#SXT007)', // 摄像头名称值(前端用)
              key: 19001, // 摄像头的KEY值
              parentKey: 111, // 父节点的KEY值(即工作面KEY值)
              scopedSlots: { title: 'title' },
              children: []
            },
            {
              name: '摄像头8(#SXT008)',
              value: '摄像头8(#SXT008)',
              key: 19002,
              parentKey: 111,
              scopedSlots: { title: 'title' },
              children: []
            }
          ]
        }
      ]
    }]
}
const data30 = {
  title: '动态属性',
  dataTye: 'table',
  data: [
    {
      title: '产量',
      value: 'XXXXXX'
    }
  ]
}
const data31 = {
  title: '动态属性',
  dataTye: 'line',
  chartId: [
    '1', // 采煤机
    '2', // 右侧牵引
    '3', // 右侧截割
    '4' // 右摇臂
  ]
}
const line1 = {
  title: '动态属性',
  dataType: 'line',
  data: [
    {
      value: 23,
      title: '运行速度',
      time: '14:02'
    },
    {
      value: 3,
      title: '运行速度',
      time: '14:12'
    },
    {
      value: 13,
      title: '运行速度',
      time: '14:32'
    },
    {
      value: 28,
      title: '运行速度',
      time: '14:42'
    },
    {
      value: 3,
      title: '行走速度',
      time: '14:02'
    },
    {
      value: 33,
      title: '行走速度',
      time: '14:12'
    },
    {
      value: 13,
      title: '行走速度',
      time: '14:32'
    },
    {
      value: 18,
      title: '行走速度',
      time: '14:42'
    }
  ]
}
const line2 = {
  title: '动态属性',
  dataType: 'line',
  data: [
    {
      value: 3,
      title: '电机电流',
      time: '14:02'
    },
    {
      value: 23,
      title: '电机电流',
      time: '14:12'
    },
    {
      value: 3,
      title: '电机电流',
      time: '14:32'
    },
    {
      value: 8,
      title: '电机电流',
      time: '14:42'
    },
    {
      value: 33,
      title: 'A相电流',
      time: '14:02'
    },
    {
      value: 13,
      title: 'A相电流',
      time: '14:12'
    },
    {
      value: 23,
      title: 'A相电流',
      time: '14:32'
    },
    {
      value: 12,
      title: 'A相电流',
      time: '14:42'
    },
    {
      value: 3,
      title: 'B相电流',
      time: '14:02'
    },
    {
      value: 33,
      title: 'B相电流',
      time: '14:12'
    },
    {
      value: 13,
      title: 'B相电流',
      time: '14:32'
    },
    {
      value: 18,
      title: 'B相电流',
      time: '14:42'
    }
  ]
}
const line3 = {
  title: '动态属性',
  dataType: 'line',
  data: [
    {
      value: 13,
      title: '电机电流',
      time: '14:02'
    },
    {
      value: 3,
      title: '电机电流',
      time: '14:12'
    },
    {
      value: 15,
      title: '电机电流',
      time: '14:32'
    },
    {
      value: 18,
      title: '电机电流',
      time: '14:42'
    },
    {
      value: 23,
      title: 'A相电流',
      time: '14:02'
    },
    {
      value: 10,
      title: 'A相电流',
      time: '14:12'
    },
    {
      value: 11,
      title: 'A相电流',
      time: '14:32'
    },
    {
      value: 2,
      title: 'A相电流',
      time: '14:42'
    },
    {
      value: 8,
      title: 'B相电流',
      time: '14:02'
    },
    {
      value: 23,
      title: 'B相电流',
      time: '14:12'
    },
    {
      value: 10,
      title: 'B相电流',
      time: '14:32'
    },
    {
      value: 18,
      title: 'B相电流',
      time: '14:42'
    },
    {
      value: 18,
      title: 'C相电流',
      time: '14:02'
    },
    {
      value: 3,
      title: 'C相电流',
      time: '14:12'
    },
    {
      value: 12,
      title: 'C相电流',
      time: '14:32'
    },
    {
      value: 9,
      title: 'C相电流',
      time: '14:42'
    }
  ]
}
const line4 = {
  title: '动态属性',
  dataType: 'line',
  data: [
    {
      value: 23,
      title: '采高',
      time: '14:02'
    },
    {
      value: 3,
      title: '采高',
      time: '14:12'
    },
    {
      value: 13,
      title: '采高',
      time: '14:32'
    },
    {
      value: 28,
      title: '采高',
      time: '14:42'
    },
    {
      value: 3,
      title: '摇臂高度',
      time: '14:02'
    },
    {
      value: 33,
      title: '摇臂高度',
      time: '14:12'
    },
    {
      value: 13,
      title: '摇臂高度',
      time: '14:32'
    },
    {
      value: 18,
      title: '摇臂高度',
      time: '14:42'
    }
  ]
}
const video = {
  title: '动态属性',
  dataTye: 'video',
  data: 'https://vd2.bdstatic.com/mda-kjbxpi261e0satfw/sc/mda-kjbxpi261e0satfw.mp4?v_from_s=hkapp-haokan-hnb&auth_key=1647667930-0-0-9e9a1f59bdec9f27b67df243cf2a0078&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=0130219823&vid=8848022277020313276&abtest=100815_2-17451_1&klogid=0130219823'
}
const triplex = {
  title: '资源储量(万吨)',
  data: [
    {
      title: '开拓煤量',
      value: 1390
    },
    {
      title: '准备煤量',
      value: 262
    },
    {
      title: '回采煤量',
      value: 457
    }
  ]
}
const progress1 = {
  title: '进尺(实际/计划)',
  table: {
    year: 2021, // 当前年
    month: 6, // 当前月
    totalY: 1282, // 年累计量
    totalM: 289 // 月累计量
  },
  type: 'feet', // 进尺标识符
  data: [
    {
      label: '10110巷道', // 掘进面名称
      pageId: 17, // 10110掘进面的key
      percent: 28 // 累计进尺/走向长=进度条百分比
    },
    {
      label: '10101工作面',
      pageId: 111,
      percent: 78
    }
  ]
}
const progress2 = {
  title: '产量(实际/计划)',
  table: {
    year: 2022,
    month: 10,
    totalY: 9150,
    totalM: 817
  },
  type: 'yield',
  data: [
    {
      label: '10101工作面',
      pageId: 111,
      percent: 9.15
    }
  ]
}
// 10101工作面	111
const navFace111 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '10101工作面', // 标签头
  'data': {
    // 'thumbnailUrl': '../../../assets/images/iot/moudelImg/workingFace.png', // 缩略图链接
    'thumbnailUrl': 'workingFace', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 10110掘进面	17
const navFace17 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '10110掘进面', // 标签头
  'data': {
    'thumbnailUrl': 'workingFace', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 交流电牵引采煤机	22056
const navFace22056 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '交流电牵引采煤机', // 标签头
  'data': {
    'thumbnailUrl': 'shearer', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// XXX掘进机	22057
const navFace22057 = {
  'type': 'navFaceImg', // 工作面标识
  'title': 'XXX掘进机', // 标签头
  'data': {
    'thumbnailUrl': 'roadheader', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 摄像头名称	19001
const navFace19001 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '摄像头名称', // 标签头
  'data': {
    'thumbnailUrl': 'camera', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 瓦斯传感器	8600
const navFace8600 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '瓦斯传感器', // 标签头
  'data': {
    'thumbnailUrl': 'gasSensor', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 人员（李爱国）	22059
const navFace22059 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '李爱国', // 标签头
  'data': {
    'thumbnailUrl': 'miner', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 人员（王建国）	23060
const navFace23060 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '王建国', // 标签头
  'data': {
    'thumbnailUrl': 'miner', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 人员-带报警信息（王友善）	22159
const navFace22159 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '王友善', // 标签头
  'data': {
    'thumbnailUrl': 'miner', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 刮板运输机	22060
const navFace22060 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '刮板运输机', // 标签头
  'data': {
    'thumbnailUrl': 'scraperConveyor', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// ⽪带运输机	22258
const navFace22258 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '⽪带运输机', // 标签头
  'data': {
    'thumbnailUrl': 'beltConveyor', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// ⽪带运输机-带报警信息	22258-1
const navFace22258Belt = {
  'type': 'navFaceImg', // 工作面标识
  'title': '⽪带运输机', // 标签头
  'data': {
    'thumbnailUrl': 'beltConveyor', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 转载机	8200
const navFace8200 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '转载机', // 标签头
  'data': {
    'thumbnailUrl': 'reproducer', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 液压⽀架	8000
const navFace8000 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '液压⽀架', // 标签头
  'data': {
    'thumbnailUrl': 'hydraulicSupport', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 破碎机	8100
const navFace8100 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '破碎机', // 标签头
  'data': {
    'thumbnailUrl': 'crusher', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// ⾼压配电开关01	1111
const navFace1111 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '⾼压配电开关', // 标签头
  'data': {
    'thumbnailUrl': 'electricSwitch', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// ⾼压配电开关02	1108
const navFace1108 = {
  'type': 'navFaceImg', // 工作面标识
  'title': '⾼压配电开关', // 标签头
  'data': {
    'thumbnailUrl': 'electricSwitch', // 缩略图链接
    'state': '1', // 停用状态设备运行时为1
    'key': '1' // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
  }
}

// 人员的报警信息 22159AlarmInfo
const AlarmInfo22159 = {
  'type': 'AlarmInfo22159', // 工作面标识
  'title': '报警信息', // 标签头
  'info': {
    'img': '人员',
    'list': [
      {
        'title': '所在位置',
        'value': '10101工作面'
      },
      {
        'title': '报警原因',
        'value': '未带安全帽'
      },
      {
        'title': '抓拍时间',
        'value': '2020/3/24  15:32:30'
      }
    ]
  }
}
// 皮带运输机的报警信息 22258AlarmInfo
const AlarmInfo22258 = {
  'type': 'AlarmInfo22258', // 工作面标识
  'title': '报警信息', // 标签头
  'info': {
    'img': '皮带运输机',
    'list': [
      {
        'title': '所在位置',
        'value': '10101工作面'
      },
      {
        'title': '报警原因',
        'value': '未带安全帽'
      },
      {
        'title': '抓拍时间',
        'value': '2020/3/24  15:32:30'
      }
    ]
  }
}
// 第一人称漫游 dataRoaming
const dataRoaming = {
  'type': 'dataRoaming', // 工作面标识
  'title': '第一人称漫游', // 标签头
  'data': {
    'state': '0', // 漫游停用时为0
    'key': 'dataRoaming', // 判断此工作面是否有停用按钮 值为空没有按钮  非空就有
    'list': [
      {
        'title': '移动速度',
        'value': '0.8'
      },
      {
        'title': '穿过障碍物',
        'value': '关'
      },
      {
        'title': '重力感应',
        'value': '开'
      }
    ]
  }
}
// 操作说明 manual
const manual = {
  'type': 'manual', // 工作面标识
  'title': '操作说明', // 标签头
  'data': [
    {
      'header': '鼠标',
      'list': [
        {
          'title': '按住左键左右移动',
          'value': '左、右匀速旋转'
        },
        {
          'title': '按住左键上下移动',
          'value': '上、下调节视角'
        }
      ]
    },
    {
      'header': '按键',
      'list': [
        {
          'title': 'W、S',
          'value': '前、后匀速移动'
        },
        {
          'title': 'A、D',
          'value': '左、右匀速旋转'
        },
        {
          'title': '↑、↓',
          'value': '上、下调节视角'
        }
      ]
    }
  ]
}
// 通过传来的key值，所对应的某些需要前端处理的数据  字段就是传来的key值
const data = {
  '111': navFace111,
  '17': navFace17,
  '22056': navFace22056,
  '22057': navFace22057,
  '19001': navFace19001,
  '8600': navFace8600,
  '22059': navFace22059,
  '23060': navFace23060,
  '22159': navFace22159,
  '22159AlarmInfo': AlarmInfo22159,
  '22060': navFace22060,
  '22258': navFace22258,
  '22258-1': navFace22258Belt,
  '22258AlarmInfo': AlarmInfo22258,
  '8200': navFace8200,
  '8000': navFace8000,
  '8100': navFace8100,
  '1111': navFace1111,
  '1108': navFace1108,
  '4db438da17194ce089d525df1d07359e': data1,
  'e6313413a02349b6b57c7043e64af91e': data2,
  '459d85922eea4f5a90a77e6f79cbb73b': data3,
  'f85cd1ee56b04d07b5b023eba210b244': data5,
  'cf9d0f9f1f4744ec9f9ca77a97af4501': data6,
  '123': data7,
  '130': data8,
  '131': data9,
  '132': data10,
  '133': data11,
  '134': data12,
  '112': data13,
  '117': data14,
  '118': data15,
  '119': data16,
  '120': data17,
  '121': data18,
  '122': data19,
  '124': data20,
  '125': data21,
  '126': data22,
  '127': data23,
  '128': data24,
  '129': data25,
  '135': data26,
  '136': data27,
  '137': data28,
  '11909': data29,
  'line': data31,
  'table133': data30,
  '1': line1,
  '2': line2,
  '3': line3,
  '4': line4,
  '19001-video': video,
  'progress1': progress1,
  'progress2': progress2,
  'triplex': triplex,
  'dataRoaming': dataRoaming,
  'manual': manual
}
// 根据模型key 获取表中数据
const info = (options) => {
  const parameters = getQueryParameters(options)
  const index = parameters.id
  return builder(data[index])
}

Mock.mock(/\/api\/getSideData/, 'get', info)
Mock.mock(/\/api\/getLineData/, 'get', info)
