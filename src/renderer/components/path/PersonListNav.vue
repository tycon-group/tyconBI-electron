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
    };
  },
  props: ['worklogsData', 'worklogsPieData'],
  mounted() {
    // 这里是发展潜力的测试方法
    const vm = this;
    Bus.$on('itemEmpID', (data) => {
      // 这里是工作能力的测试方法
      vm.itemEmpID = data;
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
      } else {
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
          totalPER: this.worklogsData, // 待修改数据源
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
          attitudePER: this.worklogsData, // 待修改数据源
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
          contributionPER: this.worklogsData, // 待修改数据源
        },
      });
    },
    lawPER() {
      this.$router.push({
        name: 'personLaw',
        params: {
          lawPER: this.worklogsData, // 待修改数据源
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
