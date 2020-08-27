<template>
  <div class="personInfo">
    <div class="cols">
      <div class="up_text">性别占比</div>
      <div class="personSex">
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
export default {
  name: 'GroupInfo',
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
  background-color: #888888;
}

.up_text {
  width: 100%;
  height: 20%;
  margin: 2px;
  text-align: left;
  float: left;
}

.personSex {
  width: 100%;
  height: 80%;
  text-align: center;
  float: left;
  background-color: yellow;
}
.personDegree {
  width: 100%;
  height: 80%;
  text-align: center;
  float: left;
  background-color: red;
}

.personAge {
  width: 100%;
  height: 80%;
  text-align: center;
  float: left;
  background-color: green;
}


.personFlow {
  width: 100%;
  height: 80%;
  text-align: center;
  float: left;
  background-color: red;
}

.personImage {
  margin-top: 5%;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: white;
}


</style>
