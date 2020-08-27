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
      this.chartPie = echarts.init(document.getElementById('personAge'));
      this.chartPie.setOption({
        title: {
          text: '年龄分布',
          subtext: '',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom',
          data: ['30岁以下', '31-50', '50岁以上'],
        },
        color: ['yellowgreen', 'green', 'purple'],
        series: [
          {
            name: '分布占比',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            avoidLabelOverlap: true,
            data: [
              { value: 33, name: '30岁以下' },
              { value: 31, name: '31-50' },
              { value: 3, name: '50岁以上' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
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
