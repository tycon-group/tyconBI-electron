<template>
  <div class="groupListNav">
    <a-menu
        v-model="current"
        mode="horizontal"
        selected-keys="total">
      <a-menu-item key="total" @click="totalGRO">
        <span>总览</span>
      </a-menu-item>

      <a-menu-item key="work" @click="workGRO">
        <span>工作能力</span>
      </a-menu-item>

      <a-menu-item key="attitude" @click="attitudeGRO">
        <span>工作态度</span>
      </a-menu-item>

      <a-menu-item key="potential" @click="potentialGRO">
        <span>发展潜力</span>
      </a-menu-item>

      <a-menu-item key="contribution" @click="contributionGRO">
        <span>突出贡献</span>
      </a-menu-item>

      <a-menu-item key="law" @click="lawGRO">
        <span>遵纪守法</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>

export default {
  name: 'PersonListNav',
  data() {
    return {
      current: ['total'],
      flagTS: false,
    };
  },
  props: ['worklogsData'],
  methods: {
    totalGRO() {
      this.$router.push({
        name: 'groupTotal',
        params: {
          totalGRO: this.worklogsData, // 待修改数据源
        },
      });
    },
    workGRO() {
      this.$router.push({
        name: 'groupWork',
        params: {
          workGRO: this.worklogsData,
        },
      });
      console.log('出阿来啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊');
    },
    attitudeGRO() {
      this.$router.push({
        name: 'groupAttitude',
        params: {
          attitudeGRO: this.worklogsData, // 待修改数据源
        },
      });
    },
    potentialGRO() {
      this.$router.push({
        name: 'groupPotential',
        params: {
          potentialGRO: this.worklogsData, // 待修改数据源
        },
      });
    },
    contributionGRO() {
      this.$router.push({
        name: 'groupContribution',
        params: {
          contributionGRO: this.worklogsData, // 待修改数据源
        },
      });
    },
    lawGRO() {
      this.$router.push({
        name: 'groupLaw',
        params: {
          lawGRO: this.worklogsData, // 待修改数据源
        },
      });
    },
  },
};
</script>

<style scoped>
.groupListNav {
  width: 100%;
  height: 100%;
}

</style>
