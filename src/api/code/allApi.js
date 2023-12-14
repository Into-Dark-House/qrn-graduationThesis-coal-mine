import { deleteRequest, getRequest, postRequest } from '@/utils/requests'

// const http = 'http://119.3.173.6:9495/dev/admin/powerPort/',

const api = {
  getTitleData: '/getTitleData',
  getMiddleData: '/getMiddleData',
  initPage: '/initPage',
  getSideData: '/getSideData',
  getFillingSys: '/getFillingSys',
  // 接口联调
  getLineData: '/getLineData',
  // 连接正式接口开始
  preFix: '/dev/admin/powerPort/', // 封装前缀
  rightSide: '/getRightSide', // 点击模型后右侧的弹窗
  writeSys: 'http://127.0.0.1:9495/writeSys/', // 填报系统前缀
  Statistic: 'http://127.0.0.1:9495/Statistic/' // 监控系统前缀
}

export default api
// 填报系统接口
// --------------- user SYSTEM --------------------------------------
export const addUser = obj => {
  // 添加人员
  return postRequest(api.writeSys + 'user/add', obj)
}
export const getUserList = obj => {
  // 人员列表
  return getRequest(api.writeSys + 'user/list', obj)
}
export const getUserInfo = obj => {
  // 人员详情
  return getRequest(api.writeSys + 'user', obj)
}
export const bindMUser = obj => {
  // 绑定模型
  return getRequest(api.writeSys + 'user/bindM', obj)
}
export const editUser = obj => {
  // 人员编辑
  return postRequest(api.writeSys + 'user/update', obj)
}
export const delUser = obj => {
  // 删除人员
  return deleteRequest(api.writeSys + 'user', obj)
}
// --------------- user SYSTEM END -----------------------------------
// --------------- Tunnel LOG SYSTEM ---------------------------------
export const TunnelFootageList = obj => {
  // 掘进指标 -  进尺管理 - 列表
  return getRequest(api.writeSys + 'tunnel/footageList', obj)
}
export const TunnelAddFootageLog = obj => {
  // 进尺填报
  return postRequest(api.writeSys + 'tunnel/addFootageLog', obj)
}
export const TunnelYieldList = obj => {
  // 掘进指标 -  产量管理 - 列表
  return getRequest(api.writeSys + 'tunnel/yieldList', obj)
}
export const TunnelAddYieldLog = obj => {
  // 产量填报
  return postRequest(api.writeSys + 'tunnel/addYieldLog', obj)
}
// --------------- Tunnel LOG SYSTEM END -----------------------------
// 巷道获取工作面列表
export const getTunnelList = obj => {
  return getRequest(api.writeSys + 'tunnel/tunnelList', obj)
}
// 添加巷道
export const getAddTunnel = obj => {
  return postRequest(api.writeSys + 'tunnel/addTunnel', obj)
}
// 绑定巷道模型
export const getTunnelBind = obj => {
  return getRequest(api.writeSys + 'tunnel/bindM', obj)
}
// 巷道编辑
export const getEditTunnel = obj => {
  return postRequest(api.writeSys + 'tunnel/editTunnel', obj)
}
// 巷道详情工作面
export const getTunnelInfo = obj => {
  return getRequest(api.writeSys + 'tunnel/info', obj)
}
// 巷道删除
export const delTunnel = obj => {
  return deleteRequest(api.writeSys + 'tunnel/del', obj)
}
// 矿山获取工作面列表
export const getWorkingFaceList = obj => {
  return getRequest(api.writeSys + 'workingFace/workingFaceList', obj)
}
// 矿山获取工作面下拉框
export const getWorkingFaceSelect = () => {
  return getRequest(api.writeSys + 'workingFace/workingFaceSelect')
}
// 矿山添加工作面
export const getAddWorkingFace = obj => {
  return postRequest(api.writeSys + 'workingFace/addWorkingFace', obj)
}
// 编辑
export const getEditWorkingFace = obj => {
  return postRequest(api.writeSys + 'workingFace/editWorkingFace', obj)
}
// 矿山详情工作面
export const getInfo = obj => {
  return getRequest(api.writeSys + 'workingFace/info', obj)
}
// 矿山绑定模型
export const getbindM = obj => {
  return getRequest(api.writeSys + 'workingFace/bindM', obj)
}
// 矿山删除
export const delWorkingFace = obj => {
  return deleteRequest(api.writeSys + 'workingFace/del', obj)
}
export const addYieldLog = obj => {
  // 指标回采产量填报
  return postRequest(api.writeSys + 'workingFace/addYieldLog', obj)
}
export const getYieldList = obj => {
  // 指标回采产量列表
  return getRequest(api.writeSys + 'workingFace/yieldList', obj)
}
export const addFootageLog = obj => {
  // 指标回采进尺填报
  return postRequest(api.writeSys + 'workingFace/addFootageLog', obj)
}
export const getFootageList = obj => {
  // 指标回采进尺列表
  return getRequest(api.writeSys + 'workingFace/footageList', obj)
}
export const getEqTypeList = obj => {
  // 设备类型列表
  return getRequest(api.writeSys + 'eq/eqTypeList', obj)
}
export const addEqType = obj => {
  // 添加设备类型
  return postRequest(api.writeSys + 'eq/addEqType', obj)
}
export const delEqType = obj => {
  // 删除设备类型
  return deleteRequest(api.writeSys + 'eq/delEqType', obj)
}
export const editEqType = obj => {
  // 编辑设备类型
  return postRequest(api.writeSys + 'eq/editEqType', obj)
}
export const getEqList = obj => {
  // 设备列表
  return getRequest(api.writeSys + 'eq/eqList', obj)
}
export const addEq = obj => {
  // 添加设备
  return postRequest(api.writeSys + 'eq/addEq', obj)
}
export const editEq = obj => {
  // 编辑设备
  return postRequest(api.writeSys + 'eq/editEq', obj)
}
export const delEq = obj => {
  // 删除设备
  return deleteRequest(api.writeSys + 'eq/delEq', obj)
}
export const binM = obj => {
  // 设备绑定模型key
  return getRequest(api.writeSys + 'eq/bindM', obj)
}
export const getEqInfo = obj => {
  // 设备详情
  return getRequest(api.writeSys + 'eq/eqInfo', obj)
}
// --------------- 3DGIS START -----------------------------
// 获取BI概览数据
export const getSurvey = obj => {
  return getRequest(api.Statistic + 'v1', obj)
}
// 获取BI进尺数据(回采)
export const getWFFootage = obj => {
  return getRequest(api.Statistic + 'wfFootageList', obj)
}
// 获取BI进尺数据(掘进)
export const getTunnelFootageList = obj => {
  return getRequest(api.Statistic + 'tunnelFootageList', obj)
}
// 连接正式接口
// 获取基础详情数据
export const getBasicData = obj => {
  return getRequest('http://127.0.0.1:9495/' + api.preFix + 'getBasicData', obj)
}
// 获取采煤机数据 暂未使用
export const getCoalCutterData = obj => {
  return getRequest(api.preFix + 'getCoalCutterData', obj)
}
// 获取进尺数据
export const getPenetrationData = obj => {
  return getRequest('http://127.0.0.1:9495' + api.preFix + 'getPenetrationData', obj)
}
// 获取动态数据
export const getDynamicData = obj => {
  return getRequest('http://127.0.0.1:9495' + api.preFix + 'getDynamicData', obj)
}
// 点击模型后右侧的弹窗
export const getRightSide = obj => {
  return getRequest(api.rightSide, obj)
}

// --------------- 3DGIS START -----------------------------
// 到此所有接口结束
export const getLineDataList = obj => {
  return getRequest(api.getLineData, obj)
}
export const getSideDataList = obj => {
  return getRequest(api.getSideData, obj)
}
export const getInitPageList = obj => {
  return getRequest(api.initPage, obj)
}
export const getTitleDataList = obj => {
  return getRequest(api.getTitleData, obj)
}
export const getMiddleDataList = obj => {
  return getRequest(api.getMiddleData, obj)
}
export const getFillingSysList = obj => {
  return getRequest(api.getFillingSys, obj)
}
// export const getAssetByDeviceId = obj => {
//   return getRequest(api.restUrl + `/getAssetByDeviceId`, obj)
// }
// export const getseatByAssetId = id => {
//   return getRequest(api.seatUrl + `/getSeatByAssetId`, {assetId:id})
// }

// export const deleteAsset = id => {
//   return batchDelRequest(api.restUrl + `/logicDelByIds`,{ids:[id]})
// }

// export const addAsset = obj => {
//   return postRequest(api.restUrl+'/addAsset', obj)
// }

// export const updateAsset = obj => {
//   return putRequest(api.restUrl+'/updateAsset', obj)
// }
