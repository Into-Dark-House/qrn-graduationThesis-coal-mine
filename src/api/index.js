const api = {
  // 登录
  Login: '/auth/jwt/tokenV2',
  // 退出
  Logout: '/auth/jwt/logout',
  // 获取用户信息
  UserInfo: '/admin/user/info',
  // 校验TOKEN有效性
  VerifyToken: '/auth/jwt/verifyV2',
  // 获取默认系统
  DefaultApplication: '/admin/noAuth/getDefaultApp',
  // 文件类型
  FileTypeUrl: '/admin/fileType',
  // 文件
  FileInfoUrl: '/admin/fileInfo'
}
export default api
