<template>
  <div class="groupListNav">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="total">
        <router-link to="/analysis/analysisGroup/groupTotal">
          <span>总览</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="work">
        <router-link to="/analysis/analysisGroup/groupWork">
          <span>工作能力</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="attitude">
        <router-link to="/analysis/analysisGroup/groupAttitude">
          <span>工作态度</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="potential">
        <router-link to="/analysis/analysisGroup/groupPotential">
          <span>发展潜力</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="contribution">
        <router-link to="/analysis/analysisGroup/groupContribution">
          <span>突出贡献</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="law">
        <router-link to="/analysis/analysisGroup/groupLaw">
          <span>遵纪守法</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>

export default {
  name: 'GroupListNav',
  data() {
    return {
      current: ['total'],
    };
  },
};
</script>

<style scoped>
.groupListNav{
  width: 100%;
  height: 100%;
}

</style>
