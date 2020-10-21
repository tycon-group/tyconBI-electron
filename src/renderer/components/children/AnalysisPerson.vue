<template>
  <div class="a-layout">
    <div class="layout-header"><PersonInfo /></div>
    <div class="layout-table"><PersonListNav :worklogsData="worklogsData"/></div>
    <div class="layout-content"><router-view></router-view></div>
  </div>
</template>

<script>
import PersonInfo from '../path/PersonInfo';
import PersonListNav from '../path/PersonListNav';
import Bus from '../path/bus';

export default {
  name: 'AnalysisPerson',
  components: {
    PersonListNav,
    PersonInfo,
  },
  data() {
    return {
      itemEmpID: '',
      worklogsData: [],
      yearss: '',
      monthss: '',
    };
  },
  mounted() {
    const vm = this;
    // 用$on事件来接收参数 , 此处是 默认显示的 工作能力 上月数据
    Bus.$on('itemEmpID', (data) => {
      vm.itemEmpID = data;
      console.log(this.itemEmpID); // 这里取到了被点击的列表所对应的人员的信息链接
      // 此处判断月份是否是4月初之前，来确认搜索的年份是否-1
      const date1 = new Date();
      const years = date1.getFullYear();
      const months = date1.getMonth();
      if (months < 4) {
        this.yearss = years - 1;
        this.monthss = months - 1;
      } else {
        this.yearss = years;
        this.monthss = months - 1;
      }
      console.log(this.yearss, this.monthss);
      const url = `https://tyconcps.cn:4399/kpi/worklog/trend/?empID=${this.itemEmpID}&fiscal_year=${this.yearss}`; // 还需要加上当财年条件
      this.$http.get(url)
        .then((res) => {
          console.log(res.data, '取到所有日志信息数组，现在取上一个月的');
          this.worklogsData = res.data[this.monthss];
          console.log(this.worklogsData, '取到上一个月日志信息数组');
          // Bus.$emit('defaultCount', this.worklogsData); // 将上月数据数组通过Bus传递
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  methods: {
    chper() {
      console.log(this.worklogsData, '值变化');
      // Bus.$emit('defaultCount', this.worklogsData); // 将上月数据数组通过Bus传递
    },
  },
};
</script>

<style scoped>
.a-layout {
  width: 100%;
  height: 100%;
}

.layout-header {
  width: 100%;
  height: 170px;
}

.layout-table {
  width: 100%;
  height: 5%;
}

.layout-content {
  width: 100%;
  height: 68%;
  margin-top: 2%;
}
</style>
