<template>
  <div>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item
          v-for="item in 4"
          :key="item"
        >
          <h3 class="small">
            {{ item }}
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel
        trigger="click"
        height="150px"
      >
        <el-carousel-item
          v-for="item in 4"
          :key="item"
        >
          <h3 class="small">
            {{ item }}
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-carousel
      :interval="5000"
      arrow="always"
    >
      <el-carousel-item
        v-for="item in 4"
        :key="item"
      >
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
