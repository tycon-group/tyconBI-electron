<template>
  <div class="total">
    <div class="totalPie" id="potentialCount">
<!--      <PotentialEcharts />-->
      <a-empty style="margin-top: 100px;"><span slot="description">值为空</span></a-empty>
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
