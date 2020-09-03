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
  width: 49%;
  height: 49%;
  text-align: center;
  float: left;
  border-bottom: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
}
.personDegree {
  width: 49%;
  height: 49%;
  text-align: center;
  float: left;
  border-bottom: 1px solid #dddddd;
}

.personAge {
  width: 49%;
  height: 49%;
  text-align: center;
  float: left;
  border-right: 1px solid #dddddd;
}

.personFlow {
  width: 49%;
  height: 49%;
  text-align: center;
  float: left;
}
</style>
