<template>
  <div
    :class="className"
    :style="{height: height, width: width}"
  >
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/mixins/echarts/resize'
export default {
  name: 'BarChart',
  mixins: [ resize ],
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '300px',
    },
    chartData: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data() {
    return {
      chart: null,
    };
  },

  watch: {
    chartData: {
      handler: function (chartData) { this.initEchart(chartData) },
      deep: true,
    },
  },
  mounted() {
    if (this.chartData.length !== 0) {
      this.initEchart(this.chartData)
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initEchart(chartData) {
      this.chart = echarts.init(this.$el, 'dark')

      this.chart.setOption({
        legend: {},
        tooltip: {},
        grid: {
          top: 50,
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {},
        dataset: {
          source: chartData,
          dimensions: [
            'date',
            'male',
            'female',
          ],
        },

        series: [
          {
            type: 'bar',
            encode: {
              x: 'date',
              y: 'male',
              seriesName: 'male',
            },
            animationDuration: 6000,
          },
          {
            type: 'bar',
            encode: {
              x: 'date',
              y: 'female',
              seriesName: 'female',
            },
            animationDuration: 6000,
          },
        ],
      })
    },
  },
}
</script>

<style>

</style>
