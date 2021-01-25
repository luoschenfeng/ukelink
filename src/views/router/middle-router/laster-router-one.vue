<template>
  <div>
    at laster -router - one
    <router-link :to="{name: 'Dashboard'}">
      Dashboard
    </router-link>
    <router-link :to="{name: 'LasterRouterTwo'}">
      laster -router - two
    </router-link>
    <el-checkbox v-model="checked">
      备选项
    </el-checkbox>
    <el-button
      type="text"
      @click="open"
    >
      点击打开 Message Box
    </el-button>
    <el-input
      v-model="input1"
      placeholder="请输入内容"
      disabled
    />
    <el-checkbox
      v-model="checked1"
      disabled
    >
      备选项1
    </el-checkbox>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">
        主要按钮
      </el-button>
      <el-button type="success">
        成功按钮
      </el-button>
      <el-button type="info">
        信息按钮
      </el-button>
      <el-button type="warning">
        警告按钮
      </el-button>
      <el-button type="danger">
        危险按钮
      </el-button>
    </el-row>

    <el-row>
      <el-button plain>
        朴素按钮
      </el-button>
      <el-button
        type="primary"
        plain
      >
        主要按钮
      </el-button>
      <el-button
        type="success"
        plain
      >
        成功按钮
      </el-button>
      <el-button
        type="info"
        plain
      >
        信息按钮
      </el-button>
      <el-button
        type="warning"
        plain
      >
        警告按钮
      </el-button>
      <el-button
        type="danger"
        plain
      >
        危险按钮
      </el-button>
    </el-row>

    <el-row>
      <el-button round>
        圆角按钮
      </el-button>
      <el-button
        type="primary"
        round
      >
        主要按钮
      </el-button>
      <el-button
        type="success"
        round
      >
        成功按钮
      </el-button>
      <el-button
        type="info"
        round
      >
        信息按钮
      </el-button>
      <el-button
        type="warning"
        round
      >
        警告按钮
      </el-button>
      <el-button
        type="danger"
        round
      >
        危险按钮
      </el-button>
    </el-row>

    <el-row>
      <el-button
        icon="el-icon-search"
        circle
      />
      <el-button
        type="primary"
        icon="el-icon-edit"
        circle
      />
      <el-button
        type="success"
        icon="el-icon-check"
        circle
      />
      <el-button
        type="info"
        icon="el-icon-message"
        circle
      />
      <el-button
        type="warning"
        icon="el-icon-star-off"
        circle
      />
      <el-button
        type="danger"
        icon="el-icon-delete"
        circle
      />
    </el-row>



    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
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
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
      />
    </div>
    <el-avatar icon="el-icon-user-solid" />

    信息弹窗， button字体颜色
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      input1: '这是一段内容',
      checked1: '',
      options: [],
      value1: [
        new Date(2000, 10, 10, 10, 10),
        new Date(2000, 10, 11, 10, 10), 
      ],
      value2: '',
      pickerOptions: {
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
    }
  },
  methods: {
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`,
          });
        },
      });
    },
  },
}
</script>

<style>
..el-date-editor .el-range-input::placeholder {
  background-color: rgba(255,255,255,0);
}
</style>
