<template>
  <section class="chart-container">
    <div id="chartPie" style="width:100%; height:100%;"></div>
  </section>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import echarts from 'echarts';

export default {
  data() {
    return {
      chartPie: null,
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie = echarts.init(document.getElementById('radars'));
      this.chartPie.setOption({
        title: {
          text: '多雷达图',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          left: 'center',
          data: ['维度占比'],
        },
        color: 'yellowgreen',
        radar: [
          {
            indicator: [
              { text: '工作能力', max: 100 },
              { text: '发展潜力', max: 100 },
              { text: '工作态度', max: 100 },
              { text: '突出贡献', max: 100 },
              { text: '遵纪守法', max: 100 },
            ],
            center: ['35%', '50%'],
            radius: 80,
          },
        ],
        series: [
          {
            type: 'radar',
            tooltip: {
              trigger: 'item',
            },
            areaStyle: {},
            data: [
              {
                value: [60, 73, 85, 40, 16],
                name: '维度占比',
              },
            ],
          },
        ],
      });
      window.onresize = this.chartPie.resize;
    },
    drawCharts() {
      this.drawPieChart();
    },
  },

  mounted() {
    this.drawCharts();
  },
  // updated: function () {
  //     this.drawCharts()
  // }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  float: left;
}
</style>


