<template>
  <div class="sidebar-menu">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="sidebarCollapse"
        :collapse-transition="false"
        :unique-opened="false"
      >
        <submenu-component :routes="routes" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SubmenuComponent from './components/SubmenuComponent'
export default {
  name: 'LayoutSidebar',
  components: {
    SubmenuComponent,
  },
  data() {
    return {
      menu: {
        cuttentActive: 'dashboard',
      },
    }
  },
  computed: {
    routes() {
      return this.$store.getters['routes']
    },
    sidebarCollapse() {
      return this.$store.getters['sidebarCollapse']
    },
    activeMenu() {

      const route = this.$route

      const {
        meta, path,
      } = route


      // if set path, the sidebar will highlight the path you set
      if (meta.sidebarActive) {
        return meta.sidebarActive
      }
      return path
    },

    // variables() {
    //   return variables
    // },
  },
}
</script>

