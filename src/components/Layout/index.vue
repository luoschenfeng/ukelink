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
<style lang="scss">
.layout-wrapper {
  height: 100%;

  .layout {
    height: 100%;

    .layout-header {
      position: fixed;
      top: 0;
      z-index: 1;
      overflow: hidden;
      height: $layout-header-height;
      width: 100%;
    }

    .layout-content {
      height: calc(100% - #{$layout-header-height});
      margin-top: $layout-header-height;

      .main-sidebar {
        position: fixed;
        top: $layout-header-height;
        width: $sidebar-width-max;

        &.main-sidebar__resize {
          width: $sidebar-width-min;
        }
      }

      // .main {
      //   padding: 1rem;
      //   // background-color: $classics-app-bg;
      //   position: relative;
      //   margin-left: $sidebar-width-max;
      //   transition: margin 0.24s;

      //   &.main__resize {
      //     margin-left: $sidebar-width-min;
      //   }

      //   .main__view {
      //     padding: 1rem;
      //     // background-color: $classics-router-view-bc;
      //     // box-shadow: $classics-box-shadow-base;
      //     // border-radius: $border-radius-base;
      //   }
      // }
    }
  }
}
</style>
