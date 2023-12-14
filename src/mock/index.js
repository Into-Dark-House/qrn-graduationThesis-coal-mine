import Mock from 'mockjs2'

// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
// if (process.env.NODE_ENV !==     'production' || process.env.VUE_APP_PREVIEW === 'true') {
// 使用同步加载依赖
// 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
console.log('mock mounting', process.env.NODE_ENV)
// require('./services/baseData') // 兴趣点及模型数据
// require('./services/devTask') // 开拓任务列表及详细
// require('./services/drivingTask') // 掘进任务列表及详细
// require('./services/deepHoleTask') // 中深孔任务列表及详细
// require('./services/blastTask') // 爆破任务列表及详细
// require('./services/shovelTask') // 铲运任务列表及详细
// require('./services/chuteList') // 溜井列表及详细
// require('./services/fanList') // 风机列表及详细
// require('./services/fenceTaskList') // 围栏工作面列表

// 新的迁移20211213
require('./services/sideData')
require('./services/titleData')
require('./services/rightSide')
require('./services/initPage')
require('./services/manage')
require('./services/fillingSys')
Mock.setup({
  timeout: 800 // setter delay time
})
console.log('mock mounted')
// }
