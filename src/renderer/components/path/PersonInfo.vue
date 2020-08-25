<template>
  <div class="personInfo">
    <div class="personImages">
      <img class="personImage" src="../../assets/leo.png"  alt="头像"/>
    </div>

    <div class="manInfo">
      <div class="row">
        <div class="row_left">姓名：张三  Sirui Zhang</div>
        <div class="row_right">党员： 是</div>
      </div>
      <div class="row">
        <div class="row_left">职位：上海太江信息科技有限公司/工程师</div>
        <div class="row_right">学历：本科</div>
      </div>
      <div class="row">
        <div class="row_left">生日：1990.9.9</div>
        <div class="row_right">入职日期：2020.1.1</div>
      </div>
      <div class="row">
        <div class="row_left">性别：男</div>
        <div class="row_right">工龄：1年</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PersonInfo',
};
</script>

<style>
.personInfo {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}

.personImages {

  width: 30%;
  height: 100%;
  text-align: center;
  float: left;
}
.personImage {
  margin-top: 5%;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: white;
}

.manInfo {
  width: 70%;
  height: 100%;
  background-color: white;
  float: left;
}
.row {
  width: 100%;
  height: 25%;
  float: left;
}
.row_left {
  width: 60%;
  height: 100%;
  float: left;
}
.row_right {
  width: 40%;
  height: 100%;
  float: left;
}
</style>
