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
        this.chartPie = echarts.init(document.getElementById('lineEcharts'));
        this.chartPie.setOption({
          title: {
            text: '折线图堆叠',
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            bottom: 'bottom',
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 290, 330, 320],
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

<style>
  .chart-container {
    width: 100%;
    height: 100%;
    float: left;
  }
</style>

