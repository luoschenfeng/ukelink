<template>
  <div>
    <div class="block">
      <span class="demonstration">有默认值</span>
      <el-color-picker v-model="color1" />
    </div>
    <div class="block">
      <span class="demonstration">无默认值</span>
      <el-color-picker v-model="color2" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: '#409EFF',
      color2: null,
    }
  },
};
</script>

<style>

</style>
