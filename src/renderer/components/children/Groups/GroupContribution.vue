<template>
  <div class="total">
    <div class="totalPie" id="contributionCount">
      <ContributionEcharts />
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
