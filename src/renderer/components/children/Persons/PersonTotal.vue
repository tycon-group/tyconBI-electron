<template>
  <div class="total">
    <div class="radar" id="radars">
      <section class="chart-container">
        <div id="chartPie" style="width:100%; height:100%;"></div>
      </section>
    </div>
    <div class="evidence">
      <a-empty style="margin-top: 10%;"><span slot="description">值为空</span></a-empty>
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line import/no-extraneous-dependencies
import echarts from 'echarts';

export default {
  name: 'PersonTotal',
  data() {
    return {
      chartPie: null,
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
              { text: '待定待定', max: 100 },
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
                value: [60, 73, 85, 40, 16],
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
</style>
