import { TASK } from '@/mock/services/data'
import { COMMON_TYPES } from '@/utils/constant/common-types'
import Mock from 'mockjs2'
import { builder } from '@/mock/util'

const taskList = () => {
  const tasks = TASK.filter(item => item.level === 1022 && item.type === COMMON_TYPES.INTEREST_TYPE.PLAN_HCGZM) // 开拓工作面
  return builder({
    'data': tasks,
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
  })
}

Mock.mock(/\/api\/shovelTaskList/, 'get', taskList)
