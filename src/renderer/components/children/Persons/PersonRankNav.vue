<template>
  <div class="personListNav">
    <a-menu v-model="current" mode="horizontal">

      <a-menu-item key="work">
        <router-link to="/analysis/analysisPerson/personTotal/workRank">
          <span>工作能力</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="attitude">
        <router-link to="/analysis/analysisPerson/personTotal/attitudeRank">
          <span>工作态度</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="potential">
        <router-link to="/analysis/analysisPerson/personTotal/potentialRank">
          <span>发展潜力</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="contribution">
        <router-link to="/analysis/analysisPerson/personTotal/contributionRank">
          <span>突出贡献</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="law">
        <router-link to="/analysis/analysisPerson/personTotal/lawRank">
          <span>遵纪守法</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>

export default {
  name: 'PersonListNav',
  data() {
    return {
      current: ['work'],
    };
  },
};
</script>

<style scoped>
.personListNav{
  width: 100%;
  height: 100%;
}

</style>
