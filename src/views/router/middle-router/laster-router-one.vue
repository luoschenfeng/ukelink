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
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
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

</style>
