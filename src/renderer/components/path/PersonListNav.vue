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
        <span style="color: red">待定待定</span>
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
    };
  },
  props: ['worklogsData', 'worklogsPieData'],
  mounted() {
    const vm = this;
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
          potentialPER: this.worklogsData, // 待修改数据源
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
