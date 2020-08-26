<template>
  <div class="a-layout">
    <div class="layout-header"><GroupInfo /></div>
    <div class="layout-content">Content</div>
    <div class="layout-footer"><GroupRank /></div>
  </div>

</template>

<script>
import PersonInfo from '../path/PersonInfo';
import GroupInfo from '../path/GroupInfo';
import GroupRank from '../path/GroupRank';
export default {
  name: 'AnalysisGroup',
  components: { GroupRank, GroupInfo, PersonInfo },
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

.layout-content {
  background-color: green;
  width: 100%;
  height: 35%;
}

.layout-footer {
  width: 100%;
  height: 40%;
}
</style>
