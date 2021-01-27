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
        <el-dropdown class="message_item">
          <svg-icon icon-name="lang" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
            <el-dropdown-item>退出登录</el-dropdown-item>
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
