<template>
  <div class="total">
    <div class="totalPie" id="workCount">
      <WorkEcharts />
    </div>
  </div>
</template>

<script>
import WorkEcharts from '../../path/WorkEcharts';

export default {
  name: 'Work',
  components: {
    WorkEcharts,
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

