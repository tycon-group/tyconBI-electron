<template>
  <div class="a-layout">
    <div class="layout-header"><PersonInfo /></div>
    <div class="layout-table"><PersonListNav /></div>
    <div class="layout-content"><router-view></router-view></div>
  </div>
</template>

<script>
import PersonInfo from '../path/PersonInfo';
import PersonListNav from '../path/PersonListNav';

export default {
  name: 'AnalysisPerson',
  components: {
    PersonListNav,
    PersonInfo,
  },
};
</script>

<style>
.a-layout {
  width: 100%;
  height: 100%;
}

.layout-header {
  width: 100%;
  height: 25%;
}

.layout-table {
  width: 100%;
  height: 5%;
}

.layout-content {
  width: 100%;
  height: 68%;
  margin-top: 2%;
}
</style>
