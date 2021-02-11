<template>
  <div>
    <el-alert
      title="成功提示的文案"
      type="success"
    />
    <el-alert
      title="消息提示的文案"
      type="info"
    />
    <el-alert
      title="警告提示的文案"
      type="warning"
    />
    <el-alert
      title="错误提示的文案"
      type="error"
    />
    <el-alert
      title="成功提示的文案"
      type="success"
      effect="dark"
    />
    <el-alert
      title="消息提示的文案"
      type="info"
      effect="dark"
    />
    <el-alert
      title="警告提示的文案"
      type="warning"
      effect="dark"
    />
    <el-alert
      title="错误提示的文案"
      type="error"
      effect="dark"
    />
    <el-alert
      title="不可关闭的 alert"
      type="success"
      :closable="false"
    />
    <el-alert
      title="自定义 close-text"
      type="info"
      close-text="知道了"
    />
    <el-alert
      title="设置了回调的 alert"
      type="warning"
      @close="hello"
    />
  </div>
</template>

<script>
export default {
  methods: {
    hello() {
      alert('Hello World!');
    },
  },
}
</script>

<style>

</style>
