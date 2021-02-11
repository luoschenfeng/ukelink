<template>
  <div>
    <el-steps
      :space="200"
      :active="1"
      finish-status="success"
    >
      <el-step title="已完成" />
      <el-step title="进行中" />
      <el-step title="步骤 3" />
    </el-steps>
    <el-steps :active="1">
      <el-step
        title="步骤 1"
        icon="el-icon-edit"
      />
      <el-step
        title="步骤 2"
        icon="el-icon-upload"
      />
      <el-step
        title="步骤 3"
        icon="el-icon-picture"
      />
    </el-steps>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
