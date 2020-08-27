<template>
  <div class="personInfo">
    <div class="cols">
      <div class="personSex">
        <SexEcharts />
      </div>
    </div>

    <div class="cols">
      <div class="up_text">学历分布</div>
      <div class="personDegree">
      </div>
    </div>

    <div class="cols">
      <div class="up_text">年龄分布</div>
      <div class="personAge">
      </div>
    </div>

    <div class="cols">
      <div class="up_text">在职年限</div>
      <div class="personFlow">
      </div>
    </div>

  </div>
</template>

<script>

import SexEcharts from './SexEcharts';

export default {
  name: 'GroupInfo',
  components: {
    SexEcharts,
  },
};
</script>

<style>
.personInfo {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}

.cols {
  width: 25%;
  height: 100%;
  text-align: center;
  float: left;
}

.personSex {
  width: 100%;
  height: 100%;
  text-align: center;
  float: left;
}
.personDegree {
  width: 100%;
  height: 80%;
  text-align: center;
  float: left;
}

.personAge {
  width: 100%;
  height: 80%;
  text-align: center;
  float: left;
}


.personFlow {
  width: 100%;
  height: 80%;
  text-align: center;
  float: left;
}
</style>
