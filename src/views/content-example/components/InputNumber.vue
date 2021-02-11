<template>
  <div>
    <el-input-number
      v-model="num"
      :min="1"
      :max="10"
      label="描述文字"
      @change="handleChange"
    />
    <el-input-number
      v-model="num"
      :disabled="true"
    />
    <el-input-number
      v-model="num"
      :step="2"
    />
    <el-input-number
      v-model="num"
      :step="2"
      step-strictly
    />
    <el-input-number
      v-model="num"
      :precision="2"
      :step="0.1"
      :max="10"
    />
    <el-input-number v-model="num1" />
    <el-input-number
      v-model="num2"
      size="medium"
    />
    <el-input-number
      v-model="num3"
      size="small"
    />
    <el-input-number
      v-model="num4"
      size="mini"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
}
</script>
