<template>
  <div>
    at laster - router - two
    <router-link :to="{name: 'Dashboard'}">
      Dashboard
    </router-link>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="address"
        label="地址"
      />
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="1000"
      style="text-align: center"
    />

    <el-button
      :plain="true"
      @click="open2"
    >
      成功
    </el-button>
    <el-button
      :plain="true"
      @click="open3"
    >
      警告
    </el-button>
    <el-button
      :plain="true"
      @click="open1"
    >
      消息
    </el-button>
    <el-button
      :plain="true"
      @click="open4"
    >
      错误
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  methods: {
    open1() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示',
      });
    },

    open2() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success',
      });
    },

    open3() {
      this.$message({
        showClose: true,
        duration: 0,
        message: '警告哦，这是一条警告消息',
        type: 'warning',
      });
    },

    open4() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error',
      });
    },
  },
}
</script>

<style>

</style>
