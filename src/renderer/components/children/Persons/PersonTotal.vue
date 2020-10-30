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
          <p>高分次数：</p>
          <p>出勤率：</p>
          <p>突出贡献：</p>
        </a-card>
      </div>
      <div class="evMark">
        <div id="myChartWater" :style="{width: '340px', height: '220px',}"></div>
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
      score: 0.8,
      healthyName: '良好',
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
    initWater() {
      const value = this.score;
      const myChart = echarts.init(document.getElementById('myChartWater'));
      const colorScore = this.score * 100;
      const colorList = [];
      if (colorScore >= 90) {
        const color1 = 'rgb(45,224,1135)';
        const color2 = 'rgb(74,227,141)';
        colorList.push(color1);
        colorList.push(color2);
      } else if (colorScore >= 80 && colorScore < 90) {
        const color1 = 'rgb(41,145,235)';
        const color2 = 'rgb(0,137,255)';
        colorList.push(color1);
        colorList.push(color2);
      } else if (colorScore >= 60 && colorScore < 80) {
        const color1 = 'rgb(219,185,246)';
        const color2 = 'rgb(253,208,0)';
        colorList.push(color1);
        colorList.push(color2);
      } else if (colorScore < 60) {
        const color1 = 'rgb(207,74,84)';
        const color2 = 'rgb(243,17,34)';
        colorList.push(color1);
        colorList.push(color2);
      }
      const data = [];
      data.push(value);
      data.push(value);
      myChart.setOption({
        backgroundColor: 'white', // 容器背景颜色
        title: {
          text: '',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)',
          },
        },
        series: [
          {
            type: 'liquidFill',
            radius: '80%', // 水球的半径
            data,
            backgroundStyle: {
              color: 'white',
            },
            label: {
              normal: {
                formatter:
                    `{a|${
                      (value * 100).toFixed(0)
                    }}` +
                    ' ' +
                    '\n' +
                    '\n' +
                    `{b|${
                      this.healthyName
                    }}`,
                textStyle: {
                  fontSize: 55, // 字体大小
                },
                position: ['50%', '50%'],
                rich: {
                  // 富文本 对字体进一步设置样式。a对应的value,b对应的healthyName
                  a: {
                    fontSize: 60,
                    lineHeight: 10,
                    fontWeight: 'bold',
                    padding: [0, 0, 0, 20],
                  },
                  b: {
                    fontSize: 30,
                    lineHeight: 10,
                    fontWeight: 'bold',
                  },
                },
              },
            },
            outline: {
              show: true, // 是否显示轮廓 布尔值
              borderDistance: 0, // 外部轮廓与图表的距离 数字
              itemStyle: {
                borderColor: '#edf2f6', // 边框的颜色
                borderWidth: 1, // 边框的宽度
              },
            },
            color: [...colorList],
          },
        ],
      });
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
