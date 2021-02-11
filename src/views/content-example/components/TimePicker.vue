<template>
  <div>
    <el-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间"
    />
    <el-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点"
    />
    <el-time-picker
      v-model="value2"
      arrow-control
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点"
    />
    <el-time-select
      v-model="startTime"
      placeholder="起始时间"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
    />
    <el-time-select
      v-model="endTime"
      placeholder="结束时间"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime
      }"
    />
    <el-time-picker
      v-model="value3"
      is-range
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    />
    <el-time-picker
      v-model="value4"
      is-range
      arrow-control
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      startTime: '',
      endTime: '',
      value3: [
        new Date(2016, 9, 10, 8, 40),
        new Date(2016, 9, 10, 9, 40),
      ],
      value4: [
        new Date(2016, 9, 10, 8, 40),
        new Date(2016, 9, 10, 9, 40),
      ],
    };
  },
}
</script>

<style>

</style>
