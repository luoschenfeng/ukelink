<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1" />
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2" />
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider
        v-model="value3"
        :show-tooltip="false"
      />
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider
        v-model="value4"
        :format-tooltip="formatTooltip"
      />
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider
        v-model="value5"
        disabled
      />
    </div>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <el-slider
        v-model="value1"
        :step="10"
      />
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <el-slider
        v-model="value2"
        :step="10"
        show-stops
      />
    </div>
    <div class="block">
      <el-slider
        v-model="value"
        show-input
      />
    </div>
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10"
    />
    <el-slider
      v-model="value"
      range
      :marks="marks"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 36,
      value4: 48,
      value5: 42,
      value: [
        4,
        8,
      ],
      marks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {
            color: '#1989FA',
          },
          label: this.$createElement('strong', '50%'),
        },
      },
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
}
</script>

<style>

</style>
