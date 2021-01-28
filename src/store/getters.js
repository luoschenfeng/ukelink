export default {
  dynimicRoutes: state => state.permission.dynimicRoutes,
  routes: state => state.permission.routes,
  sidebarCollapse: state => state.settings.sidebarCollapse,
  roles: state => state.user.roles,
  lang: state => state.user.lang,
  username: state => state.user.username,
  avatar: state => state.user.avatar,
  theme: state => state.user.theme,
}
