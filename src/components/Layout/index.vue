<template>
  <div class="layout">
    <div class="layout-wrapper">
      <layout-header
        class="layout-header"
      />
      <div class="layout-content">
        <layout-sidebar
          :class="['layout-sidebar', sidebarCollapse ? 'layout-sidebar__resize' : '']"
        />
        <div :class="['main', sidebarCollapse ? 'main__resize' : '']">
          <router-view class="main-wrapper" />
        </div>
      </div>
      <layout-sittings class="layout-sittings" />
    </div>
  </div>
</template>

<script>

import LayoutHeader from './components/header'
import LayoutSidebar from './components/sidebar'
import LayoutSittings from './components/setting'
export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutSidebar,
    LayoutSittings,
  },
  computed: {
    sidebarCollapse() {
      return this.$store.getters['sidebarCollapse']
    },
  },
}
</script>
