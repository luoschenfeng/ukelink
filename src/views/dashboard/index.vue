<template>
  <div>
    <echart-card :card-title="$t('dashboard.echart.barChartTitle')">
      <BarChart
        :chart-data="sexStatisticMonthly"
        class-name="chart"
      />
    </echart-card>
  </div>
</template>

<script>
import {
  getPVBySexStatistics,
} from '@/api/dashboard'

import BarChart from './components/BarChart'

import EchartCard from '@/components/EchartCard'
export default {
  name: 'Dashboard',

  components: {
    BarChart,

    EchartCard,
  },
  data() {

    return {
      requestParams: {},
      sexStatisticMonthly: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.randerSexStatisticLineChart()
    },
    randerSexStatisticLineChart() {
      this.loading = true
      const params = this.requestParams

      getPVBySexStatistics(params)
        .then(data => {
          this.sexStatisticMonthly = data
        })
        .catch(err => {
          this.loading = false
          throw new Error(err)
        })
    },
  },
}
</script>

<style>

</style>
