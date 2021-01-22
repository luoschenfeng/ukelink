<template>
  <div>
    <template
      v-for="route of routes"
    >
      <div
        v-if="route.children && route.children.length"
        :key="path(route)"
      >
        <el-submenu
          v-if="submenuShow(route)"
          :index="path(route)"
        >
          <template slot="title">
            <svg-icon
              :icon-name="route.meta.icon || 'default-menu'"
            />
            <span
              slot="title"
            >
              {{ $t(`${route.meta.title}`) }}
            </span>
          </template>
          <submenu-component
            :relative-path="path(route)"
            :routes="route.children"
            class="menu__nest"
          />
        </el-submenu>
        <submenu-component
          v-else
          :relative-path="path(route)"
          :routes="route.children"
        />
      </div>
      <template v-else-if="submenuShow(route)">
        <router-link
          :key="path(route)"
          class="menu-item_link"
          :to="path(route)"
        >
          <el-menu-item
            :index="path(route)"
          >
            <svg-icon
              :icon-name="route.meta.icon || 'default-menu'"
            />
            <span slot="title">{{ $t(`${route.meta.title}`) }}</span>
          </el-menu-item>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SubmenuComponent',
  props: {
    routes: {
      default() {
        return []
      },
      type: Array,
    },
    relativePath: {
      default() {
        return ''
      },
      type: String,
    },
  },
  methods: {
    submenuShow(route) {
      return route.meta && (route.meta.sidebarShow === undefined || route.meta.sidebarShow) && route.meta.title
    },
    path(route) {
      if (route.path[0] === '/') {
        return route.path
      } else {
        if (this.relativePath.length > 1) {
          if (this.relativePath[-1] === '/') {
            return this.relativePath + route.path
          } else {
            return this.relativePath + '/' + route.path
          }
        } else {
          return '/' + route.path
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 14px;
  height: 14px;
  vertical-align: -0.25em;
}
</style>
