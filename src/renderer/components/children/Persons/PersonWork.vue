<template>
  <div class="total">
    <div class="detailed">
      <div class="col1" style="background-color: #888888">
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
      defaultCount: [],
      worklogsData: [],
      count_of_worklogs: '',
      count_of_commented: '',
      count_of_high_score: '',
      count_of_low_score: '',
      count_of_rewrote: '',
      count_of_scored: '',
      count_of_scored2: '',
      chartPie: null,
      pieYear: '',
      defaultPieData: [],
      pieData: [],
    };
  },
  // 点击后初始值
  created() {
    setTimeout(() => {
      this.defaultCount = this.$route.params.workPER;
      console.log(this.defaultCount);
      this.count_of_worklogs = this.defaultCount.count_of_worklogs;
      this.count_of_commented = this.defaultCount.count_of_commented;
      this.count_of_high_score = this.defaultCount.count_of_high_score;
      this.count_of_low_score = this.defaultCount.count_of_low_score;
      this.count_of_rewrote = this.defaultCount.count_of_rewrote;
      this.count_of_scored = this.defaultCount.count_of_scored;
      this.count_of_scored2 = this.defaultCount.count_of_scored2;
      // 折线图
      const date1 = new Date();
      const tempYear = date1.getFullYear();
      const tempMonth = date1.getMonth();
      console.log(tempYear);
      if (tempMonth < 4) {
        this.pieYear = tempYear - 1;
      } else {
        this.pieYear = tempYear;
      }
      this.defaultPieData = this.$route.params.workPiePER;
      this.pieData = this.defaultPieData;
      console.log(this.pieData, this.defaultPieData);
      this.drawCharts();
    }, 200);
  },
  // 日期选择时调用
  mounted() {
    const vm = this;
    // 用$on事件来接收参数   统计
    Bus.$on('worklogsData', (data) => {
      vm.worklogsData = data;
      this.count_of_worklogs = this.worklogsData.count_of_worklogs;
      this.count_of_commented = this.worklogsData.count_of_commented;
      this.count_of_high_score = this.worklogsData.count_of_high_score;
      this.count_of_low_score = this.worklogsData.count_of_low_score;
      this.count_of_rewrote = this.worklogsData.count_of_rewrote;
      this.count_of_scored = this.worklogsData.count_of_scored;
      this.count_of_scored2 = this.worklogsData.count_of_scored2;
    });
    // 折线图
    Bus.$on('pieData', (data) => {
      vm.pieData = data;
      vm.pieYear = data.fiscal_year;
      console.log(this.pieData);
      this.drawCharts();
    });
  },
  methods: {
    drawPieChart() {
      setTimeout(() => {
        this.chartPie = echarts.init(document.getElementById('lineEcharts'));
        this.chartPie.setOption({
          title: {
            text: `${this.pieYear}财年趋势图`,
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            bottom: 'bottom',
            data: ['日志总数', '评论数', '直属评分数', '人事评分数', '补写数量', '高分数量', '低分数量'],
          },
          color: ['#2EC7C9', '#B6A2DE', '#E5CF0D', '#FFB980', '#97B552', '#8D98B3', '#A0A7E6'],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
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
          series: this.pieData.data,
        });
        window.onresize = this.chartPie.resize;
      }, 200);
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
