<template>
  <div class="total">
    <div class="detailed">
      <div class="col1">
        <span class="partName">日志数 ></span>
        <br/>
        <span class="partValue">{{ count_of_worklogs }}</span>
      </div>
      <div class="col1">
        <span class="partName">日志评论数 ></span>
        <br/>
        <span class="partValue">{{ count_of_commented }}</span>
      </div>
      <div class="col1">
        <span class="partName">日志评分数 ></span>
        <br/>
        <span class="partName">直属：</span><span class="partValue">{{ count_of_scored }}</span>
        <span class="partName">人事：</span><span class="partValue">{{ count_of_scored2 }}</span>
      </div>
      <div class="col2">
        <span class="partName">日志补写数 ></span>
        <br/>
        <span class="partValue">{{ count_of_rewrote }}</span>
      </div>
      <div class="col2">
        <span class="partName">高评数 ></span>
        <br/>
        <span class="partValue">{{ count_of_high_score }}</span>
      </div>
      <div class="col2">
        <span class="partName">低评数 ></span>
        <br/>
        <span class="partValue">{{ count_of_low_score }}</span>
      </div>
    </div>
    <div class="trend" id="lineEcharts">
      <section class="chart-container">
        <div id="chartPie" style="width:100%; height:100%;"></div>
      </section>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import echarts from 'echarts';
import Bus from '../../path/bus';

export default {
  name: 'PersonWork',
  data() {
    return {
      chartPie: null,
      defaultCount: [],
      worklogsData: [],
      count_of_worklogs: '',
      count_of_commented: '',
      count_of_high_score: '',
      count_of_low_score: '',
      count_of_rewrote: '',
      count_of_scored: '',
      count_of_scored2: '',
    };
  },
  created() {
    setTimeout(() => {
      this.defaultCount = this.$route.params.workPER;
      this.count_of_worklogs = this.defaultCount.count_of_worklogs;
      this.count_of_commented = this.defaultCount.count_of_commented;
      this.count_of_high_score = this.defaultCount.count_of_high_score;
      this.count_of_low_score = this.defaultCount.count_of_low_score;
      this.count_of_rewrote = this.defaultCount.count_of_rewrote;
      this.count_of_scored = this.defaultCount.count_of_scored;
      this.count_of_scored2 = this.defaultCount.count_of_scored2;
    }, 200);
  },
  mounted() {
    this.drawCharts(); // 折线图
    const vm = this;
    // 用$on事件来接收参数
    Bus.$on('worklogsData', (data) => {
      vm.worklogsData = data;
      console.log(this.worklogsData, '测试000');
      this.count_of_worklogs = this.worklogsData.count_of_worklogs;
      this.count_of_commented = this.worklogsData.count_of_commented;
      this.count_of_high_score = this.worklogsData.count_of_high_score;
      this.count_of_low_score = this.worklogsData.count_of_low_score;
      this.count_of_rewrote = this.worklogsData.count_of_rewrote;
      this.count_of_scored = this.worklogsData.count_of_scored;
      this.count_of_scored2 = this.worklogsData.count_of_scored2;
    });
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
};
</script>

<style scoped>
.total {
  width: 100%;
  height: 100%;
}

.detailed {
  width: 100%;
  height: 40%;
  border-bottom: 1px solid #dddddd;
}

.trend {
  width: 100%;
  height: 60%;
}

.col1 {
  width: 33%;
  height: 50%;
  margin-top: 15px;
  float: left;
  text-align: center;
}
.col2 {
  width: 33%;
  height: 50%;
  float: left;
  text-align: center;
}
.partName {
  font-size: 12px;
}

.partValue {
  font-size: 30px;

}
</style>
