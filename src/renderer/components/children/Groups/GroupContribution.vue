<template>
  <div class="total">
    <div class="totalPie" id="contributionCount">
<!--      <ContributionEcharts />-->
      <a-empty style="margin-top: 100px;"><span slot="description">值为空</span></a-empty>
    </div>
  </div>
</template>

<script>
import ContributionEcharts from '../../path/ContributionEcharts';

export default {
  name: 'Contribution',
  components: {
    ContributionEcharts,
  },
};
</script>

<style scoped>
.total {
  width: 100%;
  height: 100%;
}

.totalPie {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
