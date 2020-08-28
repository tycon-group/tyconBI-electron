<template>
  <div class="total">
    <div class="totalPie" id="potentialCount">
      <PotentialEcharts />
    </div>
  </div>
</template>

<script>
import PotentialEcharts from '../../path/PotentialEcharts';

export default {
  name: 'Potential',
  components: {
    PotentialEcharts,
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
