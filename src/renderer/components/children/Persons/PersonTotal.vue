<template>
  <div class="total">
    <div class="radar" id="radars">
      <section class="chart-container">
        <div id="chartPie" style="width:100%; height:100%;"></div>
      </section>
    </div>
    <div class="evidence">
      <div class="evContent">
        <a-card>
          <p>高分次数：{{ high_mark}} 次</p>
          <p>出勤率：{{attendance}} %</p>
          <p>突出贡献次数：{{ contribute}}次</p>
        </a-card>
      </div>
      <div class="evMark">
        <div title="晋升评价" id="myChartWater" :style="{width: '340px', height: '220px',}"></div>
      </div>
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line import/no-extraneous-dependencies
import echarts from 'echarts';
import 'echarts-liquidfill/src/liquidFill.js'; // 在这里引入

export default {
  name: 'PersonTotal',
  data() {
    return {
      chartPie: null,
      score: 0.9,
      healthyName: '优秀',
      high_mark: 3,
      attendance: 99,
      contribute: 3,
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie = echarts.init(document.getElementById('radars'));
      this.chartPie.setOption({
        title: {
          text: '综合分析',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          left: 'right',
          data: ['维度占比'],
        },
        color: 'yellowgreen',
        radar: [
          {
            indicator: [
              { text: '工作能力', max: 100 },
              { text: '工作态度', max: 100 },
              { text: '发展潜力', max: 100 },
              { text: '突出贡献', max: 100 },
              { text: '遵纪守法', max: 100 },
            ],
            center: ['50%', '60%'],
            radius: 60,
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
                value: [60, 73, 85, 90, 70],
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
    initWater() {
      const totalChart = echarts.init(document.getElementById('water'));
      const option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%',
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {},
          },
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }],
          },
        ],
      };
      setInterval(() => {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        totalChart.setOption(option, true);
      }, 2000);
    },
  },

  mounted() {
    this.drawCharts();
    this.initWater();
  },
  // updated: function () {
  //     this.drawCharts()
  // }
};
</script>

<style scoped>
.total {
  width: 100%;
  height: 100%;
}

.radar {
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #dddddd;
}

.evidence {
  width: 100%;
  height: 50%;
}

.chart-container {
  width: 100%;
  height: 100%;
  float: left;
}

.evContent{
  width: 50%;
  height: 80%;
  margin-top: 5%;
  float: left;
}

.evMark{
  width: 50%;
  height: 100%;
  float: left;
}
</style>
