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
      groupAge: '',
    };
  },
  methods: {
    drawPieChart() {
      setTimeout(() => {
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
            data: ['大于55岁', '45~55岁', '35~45岁', '25~35岁', '小于25岁'],
          },
          color: ['#8D98B3', '#FFB980', '#B6A2DE', '#2EC7C9', '#97B552'],
          series: [
            {
              name: '分布占比',
              type: 'pie',
              radius: '52%',
              center: ['55%', '47%'],
              avoidLabelOverlap: true,
              data: this.groupAge,
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
      vm.groupAge = data.data.age;
      console.log(data.data.age);
      this.drawCharts();
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
