<template>
  <div class="total">
    <div class="totalPie" id="attitudeCount">
      <AttitudeEcharts />
    </div>
  </div>
</template>

<script>
import AttitudeEcharts from '../../path/AttitudeEcharts';

export default {
  name: 'Attitude',
  components: {
    AttitudeEcharts,
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
