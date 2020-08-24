<template>
  <div class="monthpage">
    <a-button class="uptime" type="link"><a-icon type="left" /></a-button>
      <span>2020年7月</span>
    <a-button class="downtime" type="link"><a-icon type="right" /></a-button>
  </div>
</template>

<script>
export default {
  name: 'MonthPage',
};
</script>

<style>
  .monthpage {
    float: left;
    width: 180px;
    margin-left: 10px;
  }
</style>
