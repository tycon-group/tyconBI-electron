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
      setTimeout(() => {
        this.chartPie = echarts.init(document.getElementById('personSex'));
        this.chartPie.setOption({
          title: {
            text: '性别分布',
            subtext: '',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom',
            data: ['男性', '女性'],
          },
          color: ['red', 'indigo', 'blue', 'orange', 'yellow', 'green', 'purple'],
          series: [
            {
              name: '分布占比',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              avoidLabelOverlap: true,
              data: [
                { value: 335, name: '男性' },
                { value: 310, name: '女性' },
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
        window.addEventListener('resize', this.chartPie.resize);
      }, 200);
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
