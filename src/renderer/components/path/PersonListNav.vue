<template>
  <div class="personListNav">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="total">
        <router-link to="">
          <span>总览</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="work"><span>工作能力</span></a-menu-item>
      <a-menu-item key="attitude"><span>工作态度</span></a-menu-item>
      <a-menu-item key="potential"><span>发展潜力</span></a-menu-item>
      <a-menu-item key="contribution"><span>突出贡献</span></a-menu-item>
      <a-menu-item key="law"><span>遵纪守法</span></a-menu-item>
    </a-menu>
  </div>
</template>

<script>

export default {
  name: 'PersonListNav',
  data() {
    return {
      current: ['total'],
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
