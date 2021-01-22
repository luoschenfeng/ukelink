export default {
  roles: state => state.user.roles,
  dynimicRoutes: state => state.permission.dynimicRoutes,
  routes: state => state.permission.routes,
  theme: state => state.settings.theme,
  local: state => state.settings.local,
  sidebarCollapse: state => state.settings.sidebarCollapse,
}
