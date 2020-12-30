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
          <p>高分次数：{{ high_mark }} 次 | 低分次数：{{ low_mark }} 次</p>
          <p>出勤率：{{ attendance }}</p>
          <p>技能数量：{{ skills }} 个</p>
          <p>突出贡献：{{ contribute }} 次</p>
          <p>法纪记录：褒：{{ lawsUp }} 次 | 贬：{{ lawsDown }} 次</p>
        </a-card>
      </div>
      <div class="evMark">
        <div title="晋升评价" id="myChartWater" :style="{width: '100%', height: '100%',}"></div>
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
      radarData: [],
      markData: '',
      high_mark: '',
      low_mark: '',
      attendance: '',
      skills: '',
      contribute: '',
      lawsUp: '',
      lawsDown: '',
    };
  },
  methods: {
    drawPieChart() {
      const chartPie = echarts.init(document.getElementById('radars'));
      this.chartP = chartPie;
      const option = {
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
                value: this.radarData,
                name: '维度占比',
              },
            ],
          },
        ],
      };
      chartPie.setOption(option, true);
      // window.onresize = chartPie.resize;
      window.addEventListener('resize', () => {
        chartPie.resize();
      });
    },
    drawCharts() {
      this.drawPieChart();
      this.initWater();
    },
    initWater() {
      const totalChart = echarts.init(document.getElementById('myChartWater'));
      this.chartT = totalChart;
      let data = 100;
      let rate = '♥♥♥♥♥';
      const option = {
        // backgroundColor: 'transparent',
        // backgroundColor: '#cdcdcd',
        // 标题：【0】指数显示，【1】数值显示
        title: [{
          text: `晋升评分\n${rate}`,
          x: 'center',
          top: '54%',
          textStyle: {
            color: '#be8c3c',
            fontSize: 18,
            fontWeight: '100',
          },
        }, {
          text: data,
          x: 'center',
          top: '41%',
          textStyle: {
            fontSize: '28',
            color: '#be8c3c',
            fontFamily: 'SimHei',
            fontStyle: 'oblique',
            foontWeight: '500',
          },
        }],
        // 极坐标系
        polar: {
          radius: ['24%', '30%'],
          center: ['50%', '50%'],
        },
        // 极坐标系：角度轴
        angleAxis: {
          // eslint-disable-next-line no-mixed-operators
          max: 100 * 360 / 270,
          show: false,
          type: 'value',
          startAngle: 225,
        },
        // 极坐标系：径向轴
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,

          },
          axisTick: {
            show: false,
          },
        },
        series: [
          // 第二层：数据以进度条的形式展示
          {
            type: 'bar',
            data: [{
              value: data,
            }],
            itemStyle: {
              color() {
                const obj = {
                  type: 'linear',
                  x: 0, // 右
                  y: 0.5, // 下
                  x2: 1, // 左
                  y2: 0, // 上
                  colorStops: [{
                    offset: 0,
                    color: '#8ac4d4',
                  }, {
                    offset: 1,
                    color: '#ec5e26',
                  }],
                };

                if (data >= 0 && data < 20) {
                  obj.colorStops[1].color = '#8ac4d4';
                } else if (data >= 20 && data < 40) {
                  obj.y = 0.3;
                  obj.x2 = 2;
                } else if (data >= 40 && data < 60) {
                  obj.y = 0.3;
                  obj.x2 = 1.5;
                } else if (data >= 60 && data < 80) {
                  obj.y = 0.4;
                  obj.x2 = 1.1;
                }
                return obj;
              },
            },
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            cursor: 'auto',
            z: 2,
          },
          // 第二层：进度条背景
          {
            type: 'bar',
            data: [{
              value: 100,
            }],
            itemStyle: {
              color: '#013f72',
            },
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            cursor: 'auto',
            emphasis: {
              itemStyle: {
                color: '#013f72',
              },
            },
            z: 1,
          },
          // 第一层：中心文字展示区
          {
            type: 'pie',
            radius: ['0%', '22%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
              normal: {
                labelLine: {
                  show: false,
                },
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [{
                    offset: 0,
                    color: '#174869',
                  }, {
                    offset: 1,
                    color: '#08385c',
                  }],
                },
              },
            },
            data: [{
              value: 100,
            }],
            z: 2,
          },
          // 第三层；仪表盘：只显示刻度
          {
            type: 'gauge',
            radius: '35%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: 10,
            center: ['50%', '50%'],
            min: 0,
            max: 100,
            pointer: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [{
              value: 100,
              name: '',
            }],
            axisLine: {
              lineStyle: {
                width: 20,
                color: [
                  [0, '#5fa7ca'],
                  [1, '#5fa7ca'],
                ],
                opacity: 0,
              },
            },
            axisTick: {
              length: 14,
              lineStyle: {
                color: 'auto',
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              distance: 18, // 距离刻度的距离
              lineHeight: -50,
              formatter(value) {
                return value % 100 === 0 ? value : '';
              },
            },
          },
          // 第四层；背景圆：带阴影
          {
            type: 'pie',
            radius: ['0%', '40%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                  offset: 0,
                  color: '#002e50',
                }, {
                  offset: 0.9,
                  color: '#002e50',
                }, {
                  offset: 1,
                  color: '#134568',
                }],
              },
            },
            data: [{
              value: 100,
            }],
            labelLine: {
              show: false,
            },
            z: -1,
          },
          // 第五层：视觉上类似于边框，带阴影
          {
            type: 'pie',
            radius: ['0', '40.4%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
              color: '#146a90',
              shadowBlur: 50,
              shadowColor: '#146a90',
            },
            data: [{
              value: 100,
            }],
            labelLine: {
              show: false,
            },
            emphasis: {
              itemStyle: {
                color: '#146a90',
              },
            },
            z: -2,
          },
          // 第六层：看着类似一个边框，不细看，看不出来，此项目的在于突出立体感
          {
            type: 'pie',
            radius: ['46.7%', '47%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
              color: '#07223b',
            },
            data: [{
              value: 100,
            }],
            labelLine: {
              show: false,
            },
            emphasis: {
              itemStyle: {
                color: '#07223b',
              },
            },
            z: -2,
          },
          // 第七层：
          {
            type: 'pie',
            radius: ['47%', '54%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
              color: '#00182d',
            },
            data: [{
              value: 100,
            }],
            labelLine: {
              show: false,
            },
            emphasis: {
              itemStyle: {
                color: '#00182d',
              },
            },
            z: -2,
          },
          // 第八层：
          {
            type: 'pie',
            radius: ['54%', '60%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            cursor: 'auto',
            itemStyle: {
              color: '#011422',
            },
            data: [{
              value: 100,
            }],
            labelLine: {
              show: false,
            },
            emphasis: {
              itemStyle: {
                color: '#011422',
              },
            },
            z: -2,
          },
        ],
      };

      // 爱心分类显示
      function numb(mark) {
        // 带参的分数
        data = mark;
        if (data >= 0 && data < 40) {
          rate = '♥♡♡♡♡';
        } else if (data >= 40 && data < 60) {
          rate = '♥♥♡♡♡';
        } else if (data >= 60 && data < 75) {
          rate = '♥♥♥♡♡';
        } else if (data >= 75 && data < 90) {
          rate = '♥♥♥♥♡';
        } else if (data >= 90 && data <= 100) {
          rate = '♥♥♥♥♥';
        } else {
          rate = '♡♡♡♡♡';
        }
        option.title[0].text = `晋升评分\n${rate}`;
        option.title[1].text = data;
        option.series[0].data[0].value = data;
        totalChart.setOption(option, true);
      }
      // 此处录入分数
      numb(this.markData);
      // window.onresize = totalChart.resize;
      window.addEventListener('resize', () => {
        totalChart.resize();
      });
    },
  },

  mounted() {
    setTimeout(() => {
      const tempData = this.$route.params.totalPER;
      this.radarData = tempData.radarData;
      // 计算出晋升分值，目前使平均1:1
      function sum(arr, n) {
        return (n < 1) ? 0 : sum(arr, n - 1) + arr[n - 1];
      }
      const lenRadarData = this.radarData.length;
      // 平均值
      this.markData = sum(this.radarData, lenRadarData) / lenRadarData;
      // 卡片内容
      this.high_mark = tempData.high_mark;
      this.low_mark = tempData.low_mark;
      if (tempData.attendance === 0) {
        this.attendance = '不参加考勤评价~';
      } else {
        this.attendance = `${tempData.attendance} %`;
      }
      this.skills = tempData.skills;
      this.contribute = tempData.contribute;
      this.lawsUp = tempData.lawsUp;
      this.lawsDown = tempData.lawsDown;
      console.log(this.markData, '总览 ');
      this.drawCharts();
    }, 200);
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
  margin-top: 3%;
  float: left;
}

.evMark{
  width: 50%;
  height: 100%;
  float: left;
}
</style>
