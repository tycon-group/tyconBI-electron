<template>
  <div class="personListNav" v-show="flagTS">
    <a-menu
        v-model="current"
        mode="horizontal">
      <a-menu-item key="total">
        <router-link to="/analysis/analysisPerson/personTotal">
          <span>总览</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="work" @click="workPER">
        <span>工作能力</span>
      </a-menu-item>

      <a-menu-item key="attitude">
        <router-link to="/analysis/analysisPerson/personAttitude">
          <span>工作态度</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="potential">
        <router-link to="/analysis/analysisPerson/personPotential">
          <span>发展潜力</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="contribution">
        <router-link to="/analysis/analysisPerson/personContribution">
          <span>突出贡献</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="law">
        <router-link to="/analysis/analysisPerson/personLaw">
          <span>遵纪守法</span>
        </router-link>
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
  props: ['worklogsData'],
  mounted() {
    const vm = this;
    Bus.$on('flagTS', (data) => {
      vm.flagTS = data;
      console.log(this.flagTS, '测试显示');
    });
    console.log(this.worklogsData, '测试点111');
  },
  methods: {
    workPER() {
      this.$router.push({
        name: 'personWork',
        params: {
          workPER: this.worklogsData,
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
