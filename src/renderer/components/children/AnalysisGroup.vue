<template>
  <div class="a-layout">
    <div class="layout-header"><GroupInfo /></div>
    <div class="layout-table"><ListNav/></div>
    <div class="layout-content"><router-view></router-view></div>
    <div class="layout-footer"><GroupRank /></div>
  </div>

</template>

<script>
import GroupInfo from '../path/GroupInfo';
import GroupRank from '../path/GroupRank';
import ListNav from '../path/ListNav';
export default {
  name: 'AnalysisGroup',
  components: { ListNav, GroupRank, GroupInfo },
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
  background-color: blue;
  width: 100%;
  height: 5%;
}

.layout-content {
  background-color: green;
  margin-top: 2%;
  width: 100%;
  height: 28%;
}

.layout-footer {
  width: 100%;
  height: 40%;
}
</style>
