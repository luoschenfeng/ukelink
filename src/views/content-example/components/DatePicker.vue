<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
      />
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions"
      />
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker
          v-model="value1"
          type="week"
          format="yyyy 第 WW 周"
          placeholder="选择周"
        />
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="选择月"
        />
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <el-date-picker
          v-model="value3"
          type="year"
          placeholder="选择年"
        />
      </div>
      <div class="block">
        <span class="demonstration">多个日期</span>
        <el-date-picker
          v-model="value4"
          type="dates"
          placeholder="选择一个或多个日期"
        />
      </div>
    </div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions2"
      />
    </div>

    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      />
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="monthrange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        :picker-options="pickerOptions3"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
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
      pickerOptions3: {
        shortcuts: [
          {
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [
                new Date(),
                new Date(),
              ]);
            },
          },
          {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();

              const start = new Date(new Date().getFullYear(), 0);

              picker.$emit('pick', [
                start,
                end,
              ]);
            },
          },
          {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();

              const start = new Date();

              start.setMonth(start.getMonth() - 6);
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
      value4: '',
    };
  },
};
</script>
