<template>
  <div class="listNav">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="total">总览</a-menu-item>
      <a-menu-item key="work">工作能力</a-menu-item>
      <a-menu-item key="attitude">工作态度</a-menu-item>
      <a-menu-item key="potential">发展潜力</a-menu-item>
      <a-menu-item key="contribution">突出贡献</a-menu-item>
      <a-menu-item key="law">遵纪守法</a-menu-item>
    </a-menu>
  </div>
</template>

<script>

export default {
  name: 'ListNav',
  data() {
    return {
      current: ['total'],
    };
  },
};
</script>

<style scoped>
.listNav{
  width: 100%;
  height: 100%;
}

</style>
