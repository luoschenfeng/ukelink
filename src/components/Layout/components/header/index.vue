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
          {{ $t('layout.header.title') }}
        </h1>
      </router-link>
    </div>
    <div class="header-operate">
      <div class="header-message">
        <el-badge
          :value="12"
          class="message-item"
        >
          <svg-icon icon-name="prompt" />
        </el-badge>
        <el-badge
          :value="12"
          class="message-item"
        >
          <svg-icon icon-name="email" />
        </el-badge>
        <el-dropdown class="message-item">
          <div><svg-icon icon-name="lang" /></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(local,index) of langList"
              :key="index"
              @click="handlleChangeLang(local)"
            >
              {{ $t('layout.header.lang.'+ local) }}
            </el-dropdown-item>
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
            <el-dropdown-item>
              <div @click="logout">
                {{ $t('layout.header.logout') }}
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import {
  LANG_LIST, 
} from '@/const'
import {
  changeLang,
} from '@/utils/setting'
export default {
  name: 'LayoutHeader',
  data: function () {
    return {
      avatar: {
        size: 'medium',
        url: 'https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196_960_720.jpg',
      },
      langList: LANG_LIST,
    }
  },
  computed: {
    sidebarCollapse: {
      get() {
        return this.$store.getters['sidebarCollapse']
      },
      set(status) {
        this.$store.dispatch('sidebar/setSidebarCollapse', status)
      },
    },
    lang() {
      return this.$store.getters['user/lang']
    },
  },
  methods: {
    handleToggleSidebar() {
      this.sidebarCollapse = !this.sidebarCollapse
    },
    handlleChangeLang(lang) {
      changeLang(lang)
    },
    logout() {
      this.$store.dispatch('user/logout').then(() => {
        this.$router.push({
          name: 'login',
        })
      })
    },
  },
}
</script>
