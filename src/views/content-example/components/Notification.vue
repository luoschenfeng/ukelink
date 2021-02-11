<template>
  <div>
    <el-button
      plain
      @click="open1"
    >
      可自动关闭
    </el-button>
    <el-button
      plain
      @click="open2"
    >
      不会自动关闭
    </el-button>
    <el-button
      plain
      @click="open5"
    >
      成功
    </el-button>
    <el-button
      plain
      @click="open6"
    >
      警告
    </el-button>
    <el-button
      plain
      @click="open3"
    >
      消息
    </el-button>
    <el-button
      plain
      @click="open4"
    >
      错误
    </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: '标题名称',
        message: h('i', {
          style: 'color: teal',
        }, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'),
      });
    },

    open2() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0,
      });
    },
    open5() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success',
      });
    },

    open6() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning',
      });
    },

    open3() {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息',
      });
    },

    open4() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息',
      });
    },
  },
}
</script>

