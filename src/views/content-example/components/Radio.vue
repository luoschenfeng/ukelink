
<template>
  <div>
    <el-radio
      v-model="radio"
      label="1"
    >
      备选项
    </el-radio>
    <el-radio
      v-model="radio"
      label="2"
    >
      备选项
    </el-radio>
    <el-radio
      v-model="radio"
      disabled
      label="禁用"
    >
      备选项
    </el-radio>
    <el-radio
      v-model="radio"
      disabled
      label="选中且禁用"
    >
      备选项
    </el-radio>
    <el-radio-group v-model="radio">
      <el-radio :label="3">
        备选项
      </el-radio>
      <el-radio :label="6">
        备选项
      </el-radio>
      <el-radio :label="9">
        备选项
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
    };
  },
}
</script>
