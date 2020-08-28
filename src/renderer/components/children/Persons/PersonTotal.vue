<template>
  <div class="total">
    <div class="radar" id="radars">
      <RadarEcharts />
    </div>
    <div class="evidence">
      <div class="devs">
        <PersonRankNav />
      </div>
      <div class="lists"><router-view></router-view></div>
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

<style>
.total {
  width: 100%;
  height: 100%;
}

.radar {
  width: 100%;
  height: 40%;
}

.evidence {
  width: 100%;
  height: 60%;
}

.devs {
  width: 100%;
  height: 20%;
  float: right;
}

.lists {
  width: 100%;
  height: 80%;
}
</style>
