<template>
  <div
    :class="[sidebarCollapse ? 'header-title__collapse' : '', 'header-title']"
  >
    <div
      class="title-menu"
    >
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
        {{ $t('layout.header.title') }}
      </h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',

  computed: {
    sidebarCollapse: {
      get() {
        return this.$store.getters['sidebarCollapse']
      },
      set(status) {
        this.$store.dispatch('sidebar/setSidebarCollapse', status)
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
