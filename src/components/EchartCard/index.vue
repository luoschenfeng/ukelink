<template>
  <div class="chart_card">
    <div class="card_title">
      <h4>{{ cardTitle }}</h4>
    </div>
    <div class="card_content">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EchartCard',
  props: {
    cardTitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.chart_card {
  box-shadow: $classics-box-shadow-base;
  border-radius: $border-radius-base;
  .card_title {
    line-height: 3rem;
    height: 3rem;
    padding-left: 1rem;
    font-size: $font-size-h4;
    color: $text-color-primary;
    border-bottom: $classics-border-base;
  }
  .card_content {
    padding: 1rem;
  }
}
</style>
