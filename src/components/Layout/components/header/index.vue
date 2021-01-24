<template>
  <div class="header">
    <div
      :collapse="sidebarCollapse"
      :class="[sidebarCollapse ? 'header-title__collapse' : '', 'header-title']"
    >
      <router-link
        v-if="!sidebarCollapse"
        class="title-link"
        to="/"
        tag="h2"
      >
        <svg-icon icon-name="vue" />
        <span class="title-link__h2">ukelink</span>
      </router-link>
      <div class="title-menu">
        <svg-icon
          icon-name="menu"
          @click="handleToggleSidebar"
        />
      </div>
    </div>
    <div class="header-operate">
      <div class="header-message">
        <el-badge
          :value="12"
          class="message_item"
        >
          <svg-icon icon-name="prompt" />
        </el-badge>
        <el-badge
          :value="12"
          class="message_item"
        >
          <svg-icon icon-name="email" />
        </el-badge>
      </div>
      <div class="header-dropdown-menu">
        <el-dropdown>
          <div class="header_avatar">
            <el-avatar
              :size="avatar.size"
              :src="avatar.url"
            />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data: function () {
    return {
      showInput: false,
      searchValue: '',
      avatar: {
        size: 'medium',
        url: 'https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196_960_720.jpg',
      },
    }
  },
  computed: {
    sidebarCollapse: {
      get() {
        return this.$store.getters['sidebarCollapse']
      },
      set(sidebarCollapse) {
        this.$store.dispatch('settings/setSidebarCollapse', sidebarCollapse)
      },
    },
  },
  methods: {
    handleClick() {
      this.showInput = !this.showInput
    },
    handleToggleSidebar() {
      this.sidebarCollapse = !this.sidebarCollapse
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  background: $background-color-base;
  color: $text-color-primary;
  width: 100%;
  overflow: hidden;

  .header-title {
    width: $sidebar-width-max;

    &.header-title__collapse {
      width: $sidebar-width-min;
    }

    height: 100%;
    position: absolute;
    text-align: center;
    // 子元素垂直居中

    @include vertical-center;

    .title-link,
    .title-menu {
      display: inline-block;
      vertical-align: middle;
    }

    .title-link {
      @include hasEvent;

      font-size: $font-size-h2;

      .icon-vue {
        vertical-align: middle;
      }

      .title-link__h2 {
        vertical-align: middle;
        padding-left: 1rem;
      }
    }

    .title-menu {
      margin-left: 1rem;
    }
  }

  .header-operate {
    padding: 0 1rem;
    position: absolute;
    right: 0;
    height: 100%;

    @include vertical-center;

    .header-message,
    .header-dropdown-menu {
      display: inline-block;
      vertical-align: middle;
    }

    .header-message {
      .message_item {
        display: inline-block;
        vertical-align: middle;
        margin: 0 1rem;
      }
    }

    .header-dropdown-menu {
      margin: 0 1rem;

      @include hasEvent;
    }
  }
}
</style>
