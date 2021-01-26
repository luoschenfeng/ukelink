<template>
  <div class="header">
    <div
      :class="[sidebarCollapse ? 'header-title__collapse' : '', 'header-title']"
    >
      <div class="title-menu">
        <svg-icon
          icon-name="menu"
          @click="handleToggleSidebar"
        />
      </div>
      <router-link
        class="title-link"
        to="/"
        tag="h2"
      >
        <svg-icon icon-name="vue" />
        <h1 class="title-link__h1">
          ukelink
        </h1>
      </router-link>
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
      set(status) {
        this.$store.dispatch('settings/setSidebarCollapse', status)
      },
    },
  },
  methods: {
    handleToggleSidebar() {
      this.sidebarCollapse = !this.sidebarCollapse
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  @include genThemeStyle('background', $background-color-base);
  @include genThemeStyle('color', $color-text-primary);
  @include vertical-center;

  .header-title {
    display: inline-block;
    vertical-align: middle;
    width: $sidebar-width-max;
    overflow: hidden;
    height: 100%;

    @include vertical-center;
    // height: 100%;
    // position: absolute;
    // 子元素垂直居中
    .title-menu {
      display: inline-block;
      vertical-align: middle;
      width: $sidebar-width-min;
      padding-left: 2rem;
      padding-right: 2rem;
      box-sizing: border-box;
    }

    .title-link {
      display: inline-block;
      vertical-align: middle;
      font-size: $font-size-large;
      text-align: center;

      @include hasEvent;

      .icon-vue {
        vertical-align: middle;
      }

      .title-link__h1 {
        font-size: $font-size-large;
        padding-left: 1rem;
        display: inline-block;
      }
    }
  }

  .header-operate {
    display: inline-block;
    vertical-align: middle;
    padding: 0 1rem;
    // position: absolute;
    // right: 0;
    // height: 100%;
    .header-message,
    .header-dropdown-menu {
      // display: inline-block;
      // vertical-align: middle;
    }

    .header-message {
      .message_item {
        // display: inline-block;
        // vertical-align: middle;
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
