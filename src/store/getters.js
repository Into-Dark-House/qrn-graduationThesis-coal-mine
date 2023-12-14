// import api from '@/api/file/fileInfo'
const getters = {
  device: state => state.app.device,
  theme: state => state.app.theme,
  color: state => state.app.color,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  nickname: state => state.user.name,
  welcome: state => state.user.welcome,
  roles: state => state.user.roles,
  applications: state => state.user.applications,
  defaultApplication: state => state.user.defaultApplication,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
  multiTab: state => state.app.multiTab,
  systemId: state => state.app.systemId,
  modelToken: state => state.user.modelToken
}

export default getters
