<template>
  <div class="total">
    <div class="detailed">
      <div class="col1" style="background-color: #888888">
        <span class="partName">应出勤工时 ></span>
        <br/>
        <span class="partValue">136 <span style="color: #DDDDDD">(小时)</span></span>
      </div>
      <div class="col1">
        <span class="partName">日志评论数 ></span>
        <br/>
        <span class="partValue">{{  }}</span>
      </div>
      <div class="col1">
        <span class="partName">日志评论数2 ></span>
        <br/>
        <span class="partValue">{{  }}</span>
      </div>
      <div class="col1">
        <span class="partName">日志评分数 ></span>
        <br/>
        <span class="partName">直属：</span><span class="partValue">{{  }}</span>
        <span class="partName">人事：</span><span class="partValue">{{  }}</span>
      </div>
      <div class="col2">
        <span class="partName">日志补写数 ></span>
        <br/>
        <span class="partValue">{{  }}</span>
      </div>
      <div class="col2">
        <span class="partName">高评数 ></span>
        <br/>
        <span class="partValue">{{  }}</span>
      </div>
      <div class="col2">
        <span class="partName">低评数 ></span>
        <br/>
        <span class="partValue">{{  }}</span>
      </div>
      <div class="col2">
        <span class="partName">低评数2 ></span>
        <br/>
        <span class="partValue">{{  }}</span>
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
  text-align: center;
}
.col2 {
  width: 25%;
  height: 50%;
  float: left;
  text-align: center;
}
</style>
