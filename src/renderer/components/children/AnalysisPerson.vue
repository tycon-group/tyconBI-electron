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
    // 取出当前时间
    const date1 = new Date();
    const years = date1.getFullYear();
    const months = date1.getMonth(); // 取得值为index，相当于上月值
    // 用$on事件来接收参数 , 此处是 默认显示的 工作能力 上月数据
    const vm = this;
    Bus.$on('itemEmpID', (data) => {
      vm.itemEmpID = data;
      console.log(this.itemEmpID); // 这里取到了被点击的列表所对应的人员的信息链接
      // 此处获取上月数据，故月份值-1，但.getMonth()方法返回值为0-11类似于index，所以不用-1
      console.log(years, months);
      const url = `https://tyconcps.cn:4399/kpi/worklog/reports/month/?empID=${this.itemEmpID}&year=${years}&month=${months}`; // 还需要加上当财年条件
      this.$http.get(url)
        .then((res) => {
          console.log(res.data, '取到上一个月的值');
          this.worklogsData = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
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
