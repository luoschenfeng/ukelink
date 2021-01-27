<template>
  <div class="layout-wrapper">
    <div class="layout">
      <layout-header
        class="layout-header"
      />
      <div class="layout-content">
        <layout-sidebar
          :class="['layout-sidebar', sidebarCollapse ? 'layout-sidebar__resize' : '']"
        />
        <div :class="['main-wrapper', sidebarCollapse ? 'main-wrapper__resize' : '']">
          <router-view class="main" />
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
