<template>
  <div>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
    />
    <el-switch
      v-model="value1"
      active-text="按月付费"
      inactive-text="按年付费"
    />
    <el-switch
      v-model="value2"
      style="display: block;"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    />
    <el-tooltip
      :content="'Switch value: ' + value"
      placement="top"
    >
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0"
      />
    </el-tooltip>
    <el-switch
      v-model="value1"
      disabled
    />
    <el-switch
      v-model="value2"
      disabled
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      value1: true,
      value2: true,
    }
  },

}
</script>

<style>

</style>
