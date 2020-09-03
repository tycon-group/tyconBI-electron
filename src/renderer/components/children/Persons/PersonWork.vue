<template>
  <div class="total">
    <div class="detailed">
      <CountWork />
    </div>
    <div class="trend" id="lineEcharts">
      <LineEcharts />
    </div>
  </div>
</template>

<script>
import LineEcharts from './LineEcharts';
import CountWork from './CountWork';

export default {
  name: 'PersonWork',
  components: {
    CountWork,
    LineEcharts,
  },
};
</script>

<style scoped>
.total {
  width: 100%;
  height: 100%;
}

.detailed {
  width: 100%;
  height: 40%;
}

.trend {
  width: 100%;
  height: 60%;
}
</style>
