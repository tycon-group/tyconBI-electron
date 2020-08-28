<template>
  <div class="tableRankContent">
    <div class="layout-content">这是详细23333333333333</div>
    <div class="layout-footer"><WorkRank /> </div>
  </div>
</template>

<script>
import WorkRank from '../Persons/ranking/WorkRank';

export default {
  name: 'TableRankContent',
  components: {
    WorkRank,
  },
};
</script>

<style scoped>
.tableRankContent{
  width: 100%;
  height: 100%;
}
.layout-content {
  width: 100%;
  height: 35%;
}

.layout-footer {
  width: 100%;
  height: 40%;
}
</style>
