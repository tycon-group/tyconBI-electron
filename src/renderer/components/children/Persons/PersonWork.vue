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
      <LineEcharts />
    </div>
  </div>
</template>

<script>
import LineEcharts from './LineEcharts';

export default {
  name: 'PersonWork',
  components: {
    LineEcharts,
  },
  data() {
    return {
      defaultCount: [],
      count_of_worklogs: '',
      count_of_commented: '',
      count_of_high_score: '',
      count_of_low_score: '',
      count_of_rewrote: '',
      count_of_scored: '',
      count_of_scored2: '',
    };
  },
  mounted() {
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
