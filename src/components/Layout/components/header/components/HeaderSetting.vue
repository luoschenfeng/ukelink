<template>
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
      <el-dropdown
        class="message-item lang"
      >
        <div><svg-icon icon-name="lang" /></div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(lang, index) of langList"
            :key="index"
            :class="[lang === settingLang ? 'lang-drapdown__item selected': 'lang-drapdown__item']"
            @click.native="handlleChangeLang(lang)"
          >
            {{ $t('layout.header.lang.'+ lang) }}
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
</template>

<script>
import {
  LANG_LIST,
} from '@/const'
export default {
  name: 'HeaderSetting',
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
    settingLang: {
      get() {
        return this.$store.getters['lang']
      },
      set(status) {
        this.$store.dispatch('setting/setLang', status)
      },
    },
  },
  methods: {
    handleToggleSidebar() {
      this.sidebarCollapse = !this.sidebarCollapse
    },
    handlleChangeLang(lang) {
      this.settingLang = lang
    },
    logout() {
      this.$store.dispatch('setting/logout').then(() => {
        this.$router.push({
          name: 'login',
        })
      })
    },
  },
}
</script>
