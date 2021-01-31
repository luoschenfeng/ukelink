export default {
  dynimicRoutes: state => state.permission.dynimicRoutes,
  routes: state => state.permission.routes,
  sidebarCollapse: state => state.sidebar.sidebarCollapse,
  roles: state => state.setting.roles,
  lang: state => state.setting.lang,
  username: state => state.setting.username,
  avatar: state => state.setting.avatar,
  theme: state => state.setting.theme,
}
