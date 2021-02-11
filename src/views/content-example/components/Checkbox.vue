<template>
  <div>
    <!-- `checked` 为 true 或 false -->
    <el-checkbox v-model="checked">
      备选项
    </el-checkbox>
    <el-checkbox
      v-model="checked1"
      disabled
    >
      备选项1
    </el-checkbox>
    <el-checkbox
      v-model="checked2"
      disabled
    >
      备选项
    </el-checkbox>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A" />
      <el-checkbox label="复选框 B" />
      <el-checkbox label="复选框 C" />
      <el-checkbox
        label="禁用"
        disabled
      />
      <el-checkbox
        label="选中且禁用"
        disabled
      />
    </el-checkbox-group>
    <el-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <el-checkbox
        v-for="city in cities"
        :key="city"
        :label="city"
      >
        {{ city }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
const cityOptions = [
  '上海',
  '北京',
  '广州',
  '深圳',
];

export default {
  data() {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checkList: [
        '选中且禁用',
        '复选框 A',
      ],
      checkAll: false,
      checkedCities: [
        '上海',
        '北京',
      ],
      cities: cityOptions,
      isIndeterminate: true,
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;

      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>
