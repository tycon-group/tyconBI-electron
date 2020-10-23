<template>
  <div class="a-layout">
    <div class="layout-header"><GroupInfo /></div>
    <div class="layout-table"><GroupListNav /></div>
    <div class="layout-content"><router-view></router-view></div>
    <div class="layout-footer" v-show="false"><GroupRank /></div>
  </div>

</template>

<script>
import GroupInfo from '../path/GroupInfo';
import GroupRank from './Groups/GroupRank';
import GroupListNav from '../path/GroupListNav';
export default {
  name: 'AnalysisGroup',
  components: { GroupListNav, GroupRank, GroupInfo },
};
</script>

<style scoped>
.a-layout {
  width: 100%;
  height: 100%;
}

.layout-header {
  width: 100%;
  height: 340px;
}

.layout-table {
  width: 100%;
  height: 5%;
}

.layout-content {
  width: 100%;
  height: 30%;
  margin-top: 2%;
}

.layout-footer {
  width: 100%;
  height: 40%;
}

</style>
