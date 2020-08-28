<template>
  <div class="total">
    <div class="totalPie" id="totalMark">
      <TotalEcharts />
    </div>
  </div>
</template>

<script>

import TotalEcharts from '../../path/TotalEcharts';

export default {
  name: 'Total',
  components: {
    TotalEcharts,
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
