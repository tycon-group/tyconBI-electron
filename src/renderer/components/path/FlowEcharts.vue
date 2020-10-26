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
      groupWorkingYear: '',
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
            data: ['>=15', '10~15', '5~10', '3~5', '1~3', '<1', '未知'],
          },
          color: ['red', 'indigo', 'purple', 'orange', 'yellowgreen', 'green', 'blue'],
          series: [
            {
              name: '分布占比',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              avoidLabelOverlap: true,
              data: this.groupWorkingYear,
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
    const vm = this;
    Bus.$on('groupData', (data) => {
      vm.groupWorkingYear = data.data.workingyear;
      console.log(data.data.workingyear);
    });
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
