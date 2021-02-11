<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间"
      />
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions"
      />
    </div>
    <div class="block">
      <span class="demonstration">设置默认时间</span>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00"
      />
    </div>

    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value4"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        :picker-options="pickerOptions2"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            },
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date();

              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            },
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date();

              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            },
          },
        ],
      },
      pickerOptions2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date();

              const start = new Date();

              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [
                start,
                end,
              ]);
            },
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();

              const start = new Date();

              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [
                start,
                end,
              ]);
            },
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();

              const start = new Date();

              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [
                start,
                end,
              ]);
            },
          },
        ],
      },

      value1: '',
      value2: '',
      value3: '',
      value4: [
        new Date(2000, 10, 10, 10, 10),
        new Date(2000, 10, 11, 10, 10),
      ],

    };
  },
}
</script>

<style>

</style>
