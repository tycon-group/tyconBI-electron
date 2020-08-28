<template>
  <div class="a-layout">
    <div class="layout-header"><GroupInfo /></div>
    <div class="layout-table"><GroupListNav /></div>
    <div class="layout-content">
      <div class="totalTitle">
        <span>考评人员共152人，其中3人未参加考评</span>
      </div>
      <router-view></router-view>
    </div>
    <div class="layout-footer"><GroupRank /></div>
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
  height: 25%;
}

.layout-table {
  width: 100%;
  height: 5%;
}

.layout-content {
  margin-top: 2%;
  width: 100%;
  height: 28%;
}

.layout-footer {
  width: 100%;
  height: 40%;
}

.totalTitle {
  width: 100%;
  height: 10%;
  background-color: #f4f4f4;
  text-align: left;
}
</style>
