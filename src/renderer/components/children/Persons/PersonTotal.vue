<template>
  <div class="total">
    <div class="radar" id="radars">
      <RadarEcharts />
    </div>
    <div class="evidence">
      <PersonRankNav v-show="false" />
    </div>
  </div>
</template>

<script>

import PersonRankNav from './PersonRankNav';
import RadarEcharts from '../../path/RadarEcharts';


export default {
  name: 'PersonTotal',
  components: {
    RadarEcharts,
    PersonRankNav,
  },
};
</script>

<style scoped>
.total {
  width: 100%;
  height: 100%;
}

.radar {
  width: 100%;
  height: 40%;
  border-bottom: 1px solid #dddddd;
}

.evidence {
  width: 100%;
  height: 60%;
}
</style>
