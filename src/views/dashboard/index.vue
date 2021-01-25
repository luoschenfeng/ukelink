<template>
  <div>
    $--color-text-placeholder
    <el-input
      v-model="input1"
      placeholder="请输入内容"
    />
  </div>
</template>

<script>

export default {
  name: 'Dashboard',

  components: {},
  data() {
    return {
      input1: '',
    }
  },
}
</script>

<style>

</style>
