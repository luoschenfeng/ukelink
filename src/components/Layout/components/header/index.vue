<template>
  <div class="header">
    <header-title />
    <header-breadcrumb />
    <header-setting />
  </div>
</template>

<script>
import HeaderTitle from './components/HeaderTitle'
import HeaderSetting from './components/HeaderSetting'
import HeaderBreadcrumb from './components/HeaderBreadcrumb'
export default {
  name: 'LayoutHeader',
  components: {
    HeaderTitle,
    HeaderSetting,
    HeaderBreadcrumb,
  },
}
</script>
