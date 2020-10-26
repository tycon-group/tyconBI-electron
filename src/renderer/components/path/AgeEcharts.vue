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
            data: ['>=5', '45~55', '35~45', '25~35', '<25', '未知'],
          },
          color: ['yellowgreen', 'green', 'purple', 'orange', 'indigo', 'blue'],
          series: [
            {
              name: '分布占比',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
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
