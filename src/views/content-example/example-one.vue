<template>
  <div class="example-two">
    <svg-icon
      icon-name="lang"
      @click="contralLangOptionVisibile"
    />
    <el-select
      ref="langSelect"
      v-model="selectedOne"
    >
      <el-option
        v-for="(option, index) of options"
        :key="index"
        :label="option.label"
        :value="option.value"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'ExampleOne',
  data() {
    return {
      selectedOne: '',
      langOptionVisibile: false,
      options: [
        {
          label: '中文',
          value: 'zh',
        },
        {
          label: 'english',
          value: 'en',
        },
      ],
    }
  },
  methods: {
    contralLangOptionVisibile() {
      this.$refs.langSelect.$el.click()
    },
  },
}
</script>

<style>
</style>
