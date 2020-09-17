<template>
  <a-row :gutter="16">
    <a-col :span="24" v-bind:style="antdMain" style="text-align: center;">
      <a-statistic-countdown title="距离本期打分最终期限还有：" :value="deadline" format="D 天 H 时 m 分 s 秒" @finish="onFinish" />
    </a-col>
  </a-row>
</template>
<script>
import moment from 'moment';

export default {
  data() {
    return {
      seconds: 0,
      deadline: 0,
      antdMain: {
        background: '#FFFFFF',
      },
    };
  },
  mounted() {
    // const time = moment().endOf('month').fromNow();// 此处直接取到剩余天数的文字
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    const end = moment().endOf('month').format('YYYY-MM-DD HH:mm:ss');
    const seconds = moment(end).diff(moment(now), 'seconds');
    this.seconds = seconds;
    // eslint-disable-next-line no-mixed-operators
    this.deadline = Date.now() + 1000 * seconds;
    // console.log(time);
    console.log(1000 * 60 * 60 * 24 * 14);
    console.log(1000 * seconds);// 打印剩余毫秒数
    this.changedBgColor();
  },
  methods: {
    changedBgColor() {
      if (this.seconds < 60 * 60 * 24 * 3) {
        this.antdMain.background = 'red';
      } else {
        this.antdMain.background = '#1890FF';
      }
    },
    onFinish() {
      console.log('finished!');
    },
  },
};
</script>

<style scoped>

</style>
