<template>
  <div class="total">
    <div class="detailed">
      <div class="col1">
        <br/>
        <span class="partName">应出勤工时<span class="titleNumber"></span> </span>
        <br/>
        <span class="partValue">{{ estimateTime }}<span class="littleFont">(小时)</span></span>
      </div>
      <div class="col1">
        <br/>
        <span class="partName">出勤工时<span class="titleNumber"></span> </span>
        <br/>
        <span class="partValue">{{ actualTime }}<span class="littleFont">(小时)</span></span>
      </div>
      <div class="col1">
        <br/>
        <span class="partName">请假 <span class="titleNumber">{{ leaveTimes }}</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">{{ leaveDay }} <span class="littleFont">(天)</span>| {{ leaveHour }} <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col1">
        <br/>
        <span class="partName">外出 <span class="titleNumber">{{ outTimes }}</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">{{ datas.outDay }}<span class="littleFont">(天)</span>| {{outHour }} <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col2">
        <br/>
        <span class="partName">加班  <span class="titleNumber">{{ overTimes  }}</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">{{ overHour }} <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col2">
        <br/>
        <span class="partName">迟到  <span class="titleNumber">{{ lateTimes }}</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">{{ lateMinute }} <span class="littleFont">(分钟)</span></span>
      </div>
      <div class="col2">
        <br/>
        <span class="partName">早退  <span class="titleNumber">{{ earlyTimes }}</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">{{ earlyMinute }} <span class="littleFont">(分钟)</span></span>
      </div>
      <div class="col2">
        <br/>
        <span class="partName">异常<span class="titleNumber"></span></span>
        <br/>
        <a-popover trigger="hover">
          <template slot="content">
            <p>消迟到：{{ clearLateTimes }}次</p>
            <p>消早退：{{ clearEarlyTimes }}次</p>
            <p>消缺卡：{{ clearLackTimes }}次</p>
          </template>
          <span class="partName">次数</span><span class="partValue">{{ clearLateTimes + clearEarlyTimes + clearLackTimes }} <span class="littleFont">(次)</span></span>
        </a-popover>
        <a-popover trigger="hover">
          <template slot="content">
            <p>消迟到：{{ clearLateMinute }}分钟</p>
            <p>消早退：{{ clearEarlyMinute }}分钟</p>
          </template>
          <span class="partName">时长</span><span class="partValue">{{ clearLateMinute + clearEarlyMinute }} <span class="littleFont">(分钟)</span></span>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonWork',
  data() {
    return {
      datas: '',
      estimateTime: '',
      actualTime: '',
      leaveTimes: '',
      leaveDay: '',
      leaveHour: '',
      outTimes: '',
      outDay: '',
      outHour: '',
      overTimes: '',
      overHour: '',
      lateTimes: '',
      lateMinute: '',
      earlyTimes: '',
      earlyMinute: '',
      clearLateTimes: '',
      clearEarlyTimes: '',
      clearLackTimes: '',
      clearLateMinute: '',
      clearEarlyMinute: '',
    };
  },
  created() {
    setTimeout(() => {
      this.datas = this.$route.params.attitudePER; // 此处调用路由函数
      this.estimateTime = this.datas.estimateTime;
      this.actualTime = this.datas.actualTime;
      this.leaveTimes = this.datas.leaveTimes;
      this.leaveDay = this.datas.leaveDay;
      this.leaveHour = this.datas.leaveHour;
      this.outTimes = this.datas.outTimes;
      this.outDay = this.datas.outDay;
      this.outHour = this.datas.outHour;
      this.overTimes = this.datas.overTimes;
      this.overHour = this.datas.overHour;
      this.lateTimes = this.datas.lateTimes;
      this.lateMinute = this.datas.lateMinute;
      this.earlyTimes = this.datas.earlyTimes;
      this.earlyMinute = this.datas.earlyMinute;
      this.clearLateTimes = this.datas.clearLateTimes;
      this.clearEarlyTimes = this.datas.clearEarlyTimes;
      this.clearLackTimes = this.datas.clearLackTimes;
      this.clearLateMinute = this.datas.clearLateMinute;
      this.clearEarlyMinute = this.datas.clearEarlyMinute;
      console.log(this.datas, '工作态度');
    }, 200);
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
  height: 95%;
}

.col1 {
  margin-top: 2%;
  padding-top: 5%;
  width: 25%;
  height: 45%;
  float: left;
  text-align: center;
}
.col2 {
  width: 25%;
  height: 45%;
  padding-top: 5%;
  float: left;
  text-align: center;
}

.partName {
  font-size: 14px;
}

.partValue {
  font-size: 24px;
}

.littleFont{
  color: #DDDDDD;
  font-size: 12px;
}
.titleNumber{
  font-size: 24px;
}
</style>
