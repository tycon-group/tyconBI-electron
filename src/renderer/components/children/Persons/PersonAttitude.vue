<template>
  <div class="total">
    <div class="detailed">
      <div class="col1">
        <br/>
        <span class="partName">应出勤工时<span class="titleNumber"></span> </span>
        <br/>
        <span class="partValue">136 <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col1">
        <br/>
        <span class="partName">出勤工时<span class="titleNumber"></span> </span>
        <br/>
        <span class="partValue">135 <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col1">
        <br/>
        <span class="partName">请假 <span class="titleNumber">0</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">0 <span class="littleFont">(天)</span>| 0 <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col1">
        <br/>
        <span class="partName">外出 <span class="titleNumber">0</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">0 <span class="littleFont">(天)</span>| 0 <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col2">
        <br/>
        <span class="partName">加班  <span class="titleNumber">0</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">135 <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col2">
        <br/>
        <span class="partName">迟到  <span class="titleNumber">0</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">135 <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col2">
        <br/>
        <span class="partName">早退  <span class="titleNumber">0</span> <span class="littleFont">(次)</span></span>
        <br/>
        <span class="partValue">135 <span class="littleFont">(小时)</span></span>
      </div>
      <div class="col2">
        <br/>
        <span class="partName">异常<span class="titleNumber"></span></span>
        <br/>
        <a-popover trigger="hover">
          <template slot="content">
            <p>消迟到：1次</p>
            <p>消早退：0次</p>
            <p>消缺卡：1次</p>
          </template>
          <span class="partName">次数</span><span class="partValue">{{ testss }} <span class="littleFont">(次)</span></span>
        </a-popover>
        <a-popover trigger="hover">
          <template slot="content">
            <p>消迟到：2分钟</p>
            <p>消早退：0分钟</p>
          </template>
          <span class="partName">时长</span><span class="partValue">2 <span class="littleFont">(分钟)</span></span>
        </a-popover>
      </div>
    </div>
    <div class="trend">
      <a-empty style="margin-top: 10%;"><span slot="description">值为空</span></a-empty>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonWork',
  data() {
    return {
      testss: '0',
    };
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
  width: 25%;
  height: 50%;
  float: left;
  margin-top: -20px;
  text-align: center;
}
.col2 {
  width: 25%;
  height: 50%;
  float: left;
  margin-top: -10px;
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
