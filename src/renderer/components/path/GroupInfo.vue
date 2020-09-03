<template>
  <div class="personInfo">
    <div class="personSex" id="personSex">
      <SexEcharts />
    </div>
    <div class="personDegree" id="personDegree">
      <DegreeEcharts />
    </div>

    <div class="personAge" id="personAge">
      <AgeEcharts />
    </div>

    <div class="personFlow" id="personFlow">
      <FlowEcharts />
    </div>

  </div>
</template>

<script>

import SexEcharts from './SexEcharts';
import AgeEcharts from './AgeEcharts';
import DegreeEcharts from './DegreeEcharts';
import FlowEcharts from './FlowEcharts';

export default {
  name: 'GroupInfo',
  components: {
    AgeEcharts,
    SexEcharts,
    DegreeEcharts,
    FlowEcharts,
  },
};
</script>

<style scoped>
.personInfo {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}


.personSex {
  width: 24%;
  height: 100%;
  text-align: center;
  float: left;
}
.personDegree {
  width: 24%;
  height: 100%;
  text-align: center;
  float: left;
}

.personAge {
  width: 24%;
  height: 100%;
  text-align: center;
  float: left;
}


.personFlow {
  width: 24%;
  height: 100%;
  text-align: center;
  float: left;
}
</style>
