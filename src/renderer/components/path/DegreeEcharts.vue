<template>
  <section class="chart-container">
    <div id="chartPie" style="width:100%; height:100%;"></div>
  </section>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import echarts from 'echarts';
import Bus from './bus';

export default {
  data() {
    return {
      chartPie: null,
      groupEducation: '',
    };
  },
  methods: {
    drawPieChart() {
      setTimeout(() => {
        this.chartPie = echarts.init(document.getElementById('personDegree'));
        this.chartPie.setOption({
          title: {
            text: '学历分布',
            subtext: '',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom',
            data: ['初中及以下', '高中', '本科（专科)', '硕士及以上'],
          },
          color: ['#EDAFDA', '#A0A7E6', '#5AB1EF', '#D87A80'],
          series: [
            {
              name: '分布占比',
              type: 'pie',
              radius: '52%',
              center: ['55%', '45%'],
              avoidLabelOverlap: true,
              data: this.groupEducation,
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
      const vm = this;
      Bus.$on('groupData', (data) => {
        vm.groupEducation = data.data.education;
        console.log(data.data.education);
        this.drawPieChart();
      });
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
