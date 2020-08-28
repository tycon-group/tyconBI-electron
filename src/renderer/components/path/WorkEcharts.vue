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
      this.chartPie = echarts.init(document.getElementById('workCount'));
      this.chartPie.setOption({
        title: {
          text: '考评情况',
          subtext: '',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          right: 'right',
          data: ['日志完成数', '日志评论数', '日志评分数'],
        },
        color: ['yellowgreen', 'green', 'purple', 'pink', 'orange'],
        series: [
          {
            name: '分布占比',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            avoidLabelOverlap: true,
            data: [
              { value: 13, name: '日志完成数' },
              { value: 131, name: '日志评论数' },
              { value: 3, name: '日志评分数' },
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
