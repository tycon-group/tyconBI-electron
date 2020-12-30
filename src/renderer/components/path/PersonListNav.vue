<template>
  <div class="personListNav" v-show="flagTS">
    <a-menu
        v-model="current"
        mode="horizontal">
      <a-menu-item key="total" @click="totalPER">
        <span>总览</span>
      </a-menu-item>

      <a-menu-item key="work" @click="workPER">
        <span>工作能力</span>
      </a-menu-item>

      <a-menu-item key="attitude" @click="attitudePER">
        <span>工作态度</span>
      </a-menu-item>

      <a-menu-item key="potential" @click="potentialPER">
        <span>发展潜力</span>
      </a-menu-item>

      <a-menu-item key="contribution" @click="contributionPER">
        <span>突出贡献</span>
      </a-menu-item>

      <a-menu-item key="law" @click="lawPER">
        <span>遵纪守法</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>

import Bus from './bus';

export default {
  name: 'PersonListNav',
  data() {
    return {
      current: ['total'],
      flagTS: false,
      potentialData: '',
      contributionData: '',
      lawData: '',
      attitudeData: '',
      totalData: '',
    };
  },
  props: ['worklogsData', 'worklogsPieData'],
  mounted() {
    // 这里是发展潜力的测试方法
    const vm = this;
    Bus.$on('itemEmpID', (data) => {
      // 这里是工作能力的测试方法
      vm.itemEmpID = data;
      // 邵乃文
      if (this.itemEmpID === 'A00001') {
        this.potentialData = [
          {
            i: 1,
            co: '#f50',
            io: '一级注册建筑师',
          },
          {
            i: 2,
            co: '#87d068',
            io: '管理精通',
          },
          {
            i: 3,
            co: '#232ee9',
            io: '风投精通',
          },
          {
            i: 4,
            co: '#2db7f5',
            io: '商务英语精通',
          },
        ];
        this.contributionData = [
          {
            key: '1',
            name: '邵乃文',
            time: '2019-05-10',
            dept: '总裁办',
            info: '签下2亿大单，创下本公司单笔订单最高记录。',
          },
          {
            key: '2',
            name: '邵乃文',
            time: '2019-12-10',
            dept: '总裁办',
            info: '签下5亿大单，创下本公司单笔订单最高记录。',
          },
          {
            key: '3',
            name: '邵乃文',
            time: '2020-03-10',
            dept: '总裁办',
            info: '签下10亿大单，创下本公司单笔订单记录。',
          },
          {
            key: '4',
            name: '邵乃文',
            time: '2020-08-08',
            dept: '总裁办',
            info: '成功中标园区地块，让太江集团有了自己的第一个园区。',
          },
          {
            key: '5',
            name: '邵乃文',
            time: '2020-12-10',
            dept: '总裁办',
            info: '成功升级为一级建筑单位。',
          },
        ];
        this.lawData = [
          {
            key: '1',
            name: '邵乃文',
            time: '2020-12-12',
            dept: '党支部',
            info: '收到浦江镇党委的嘉奖。',
          },
        ];
        this.attitudeData = {
          estimateTime: 135,
          actualTime: 155,
          leaveTimes: 0,
          leaveDay: 0,
          leaveHour: 0,
          outTimes: 0,
          outDay: 0,
          outHour: 0,
          overTimes: 4,
          overHour: 20,
          lateTimes: 0,
          lateMinute: 0,
          earlyTimes: 0,
          earlyMinute: 0,
          clearLateTimes: 0,
          clearEarlyTimes: 0,
          clearLackTimes: 0,
          clearLateMinute: 0,
          clearEarlyMinute: 0,
        };
        this.totalData = {
          radarData: [60, 60, 90, 100, 70],
          high_mark: 0,
          low_mark: 0,
          attendance: 0,
          skills: 4,
          contribute: 5,
          lawsUp: 1,
          lawsDown: 0,
          // markData: this.markData.sum(this.radarData),
        };
        // 于坤
      } else if (this.itemEmpID === 'A00076') {
        this.potentialData = [
          {
            i: 1,
            co: '#108ee9',
            io: '风控精通',
          },
          {
            i: 2,
            co: '#085564',
            io: '一级律师',
          },
          {
            i: 3,
            co: '#87d068',
            io: '管理精通',
          },
          {
            i: 4,
            co: '#2db7f5',
            io: '英语精通',
          },
        ];
        this.contributionData = [
          {
            key: '1',
            name: '于坤',
            time: '2019-06-10',
            dept: '总裁办',
            info: '精准风控，是公司成功避开易亏损项目。',
          },
          {
            key: '2',
            name: '于坤',
            time: '2019-12-12',
            dept: '总裁办',
            info: '研读新修订宪法，同步更新公司各项规章制度。',
          },
          {
            key: '3',
            name: '于坤',
            time: '2020-08-10',
            dept: '总裁办',
            info: '发现商业合同中不平等的条款，及时提出异议，让公司免于亏损。',
          },
        ];
        this.lawData = [];
        this.attitudeData = {
          estimateTime: 135,
          actualTime: 185,
          leaveTimes: 0,
          leaveDay: 0,
          leaveHour: 0,
          outTimes: 0,
          outDay: 0,
          outHour: 0,
          overTimes: 10,
          overHour: 50,
          lateTimes: 0,
          lateMinute: 0,
          earlyTimes: 0,
          earlyMinute: 0,
          clearLateTimes: 0,
          clearEarlyTimes: 0,
          clearLackTimes: 0,
          clearLateMinute: 0,
          clearEarlyMinute: 0,
        };
        this.totalData = {
          radarData: [60, 100, 90, 90, 60],
          high_mark: 0,
          low_mark: 0,
          attendance: 100,
          skills: 4,
          contribute: 3,
          lawsUp: 0,
          lawsDown: 0,
        };
        // 蒋玲玲
      } else if (this.itemEmpID === 'A00134') {
        this.potentialData = [
          {
            i: 1,
            co: '#108ee9',
            io: '英语精通',
          },
          {
            i: 2,
            co: '#87d068',
            io: '管理精通',
          },
          {
            i: 3,
            co: '#823418',
            io: '德语精通',
          },
        ];
        this.contributionData = [
          {
            key: '1',
            name: '蒋玲玲',
            time: '2019-09-10',
            dept: '总裁办',
            info: '重新制定公司内部人事行政规范，使公司运转效率更高。',
          },
          {
            key: '2',
            name: '蒋玲玲',
            time: '2020-06-25',
            dept: '总裁办',
            info: '成功举办端午活动，得到全公司上下一致好评，让公司上下更加齐心。',
          },
          {
            key: '3',
            name: '蒋玲玲',
            time: '2020-12-25',
            dept: '总裁办',
            info: '举办圣诞节活动，从你画我猜到交换礼物，得到了大家的高度赞赏。',
          },
        ];
        this.lawData = [];
        this.attitudeData = {
          estimateTime: 135,
          actualTime: 175,
          leaveTimes: 0,
          leaveDay: 0,
          leaveHour: 0,
          outTimes: 0,
          outDay: 0,
          outHour: 0,
          overTimes: 7,
          overHour: 40,
          lateTimes: 0,
          lateMinute: 0,
          earlyTimes: 0,
          earlyMinute: 0,
          clearLateTimes: 0,
          clearEarlyTimes: 0,
          clearLackTimes: 0,
          clearLateMinute: 0,
          clearEarlyMinute: 0,
        };
        this.totalData = {
          radarData: [100, 100, 80, 90, 60],
          high_mark: 7,
          low_mark: 1,
          attendance: 100,
          // 个数减1
          skills: 3,
          contribute: 3,
          lawsUp: 0,
          lawsDown: 0,
        };
      } else {
        // 其他
        this.potentialData = [
          {
            i: 1,
            co: '#108ee9',
            io: '游泳',
          },
          {
            i: 2,
            co: '#87d068',
            io: '潜水',
          },
          {
            i: 3,
            co: '#823418',
            io: '划水',
          },
        ];
        this.contributionData = [
          {
            key: '1',
            name: '某某',
            time: '2020-12-12',
            dept: '总经办',
            info: '扶老奶奶过马路，被送锦旗。',
          },
        ];
        this.lawData = [
          {
            key: '1',
            name: '某某',
            time: '2020-01-12',
            dept: '总裁办',
            info: '使用脚本程序，违规领取公司的月饼。',
          },
        ];
        this.attitudeData = {
          estimateTime: 135,
          actualTime: 139,
          leaveTimes: 1,
          leaveDay: 0,
          leaveHour: 4,
          outTimes: 1,
          outDay: 0,
          outHour: 4,
          overTimes: 2,
          overHour: 4,
          lateTimes: 1,
          lateMinute: 60,
          earlyTimes: 0,
          earlyMinute: 0,
          clearLateTimes: 1,
          clearEarlyTimes: 0,
          clearLackTimes: 1,
          clearLateMinute: 3,
          clearEarlyMinute: 0,
        };
        this.totalData = {
          radarData: [60, 80, 80, 70, 50],
          high_mark: 0,
          low_mark: 0,
          attendance: 80,
          skills: 3,
          contribute: 1,
          lawsUp: 0,
          lawsDown: 1,
        };
      }
    });

    Bus.$on('flagTS', (data) => {
      vm.flagTS = data;
      console.log(this.flagTS, '测试显示');
    });
  },
  methods: {
    totalPER() {
      this.$router.push({
        name: 'personTotal',
        params: {
          totalPER: this.totalData, // 待修改数据源
        },
      });
    },
    workPER() {
      this.$router.push({
        name: 'personWork',
        params: {
          workPER: this.worklogsData,
          workPiePER: this.worklogsPieData,
        },
      });
    },
    attitudePER() {
      this.$router.push({
        name: 'personAttitude',
        params: {
          attitudePER: this.attitudeData, // 待修改数据源
        },
      });
    },
    potentialPER() {
      this.$router.push({
        name: 'personPotential',
        params: {
          potentialPER: this.potentialData, // 待再次修改数据源
        },
      });
    },
    contributionPER() {
      this.$router.push({
        name: 'personContribution',
        params: {
          contributionPER: this.contributionData, // 待修改数据源
        },
      });
    },
    lawPER() {
      this.$router.push({
        name: 'personLaw',
        params: {
          lawPER: this.lawData, // 待修改数据源
        },
      });
    },
  },
};
</script>

<style scoped>
.personListNav{
  width: 100%;
  height: 100%;
}

</style>
