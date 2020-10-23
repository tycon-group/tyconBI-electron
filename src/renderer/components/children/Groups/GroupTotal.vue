<template>
  <div class="total">
    <div class="totalPie" id="totalMark">
<!--      <TotalEcharts />-->
      <a-empty style="margin-top: 100px;"><span slot="description">值为空</span></a-empty>
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
