<template>
  <div>
    <el-button
      type="text"
      @click="open"
    >
      点击打开 Message Box
    </el-button>
    <el-button
      type="text"
      @click="open1"
    >
      点击打开 Message Box
    </el-button>
  </div>
</template>

<script>
export default {
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
    open1() {
      this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '保存',
        cancelButtonText: '放弃修改',
      })
        .then(() => {
          this.$message({
            type: 'info',
            message: '保存修改',
          });
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message: action === 'cancel'
              ? '放弃保存并离开页面'
              : '停留在当前页面',
          })
        });
    },
  },
}
</script>
