<template>
  <div
    class="header-breadcrumb"
  >
    <el-breadcrumb separator="/">
      <transition-group
        tag="ul"
        name="list-x"
      >
        <el-breadcrumb-item
          v-for="(title, index) of breadcrumbList"
          :key="index"
        >
          {{ $t(title) }}
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'HeaderBreadcrumb',
  computed: {
    breadcrumbList() {
      let breadcrumbList = []

      for (let route of this.$route.matched) {
        if (route.meta && route.meta.title) {
          breadcrumbList.push(route.meta.title)
        }
      }
      return breadcrumbList
    },
  },
  watch: {},

}
</script>
