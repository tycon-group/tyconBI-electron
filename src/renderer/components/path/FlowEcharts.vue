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
        this.chartPie = echarts.init(document.getElementById('personFlow'));
        this.chartPie.setOption({
          title: {
            text: '在职年限',
            subtext: '',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom',
            data: ['3年以下', '3-5年', '5年以上'],
          },
          color: ['red', 'indigo', 'purple'],
          series: [
            {
              name: '分布占比',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              avoidLabelOverlap: true,
              data: [
                { value: 65, name: '3年以下' },
                { value: 30, name: '3-5年' },
                { value: 20, name: '5年以上' },
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
