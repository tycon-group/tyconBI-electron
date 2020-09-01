<template>
  <div class="personInfo">
    <div class="personImages">
      <img class="personImage" src="../../assets/leo.png"  alt="头像"/>
    </div>

    <div class="manInfo">
      <div class="row">
        <div class="row_left">姓名：张三  Sirui Zhang</div>
        <div class="row_right">性别：男</div>
      </div>
      <div class="row">
        <div class="row_left">职位：上海太江信息科技有限公司/工程师</div>
        <div class="row_right">学历：本科</div>
      </div>
      <div class="row">
        <div class="row_left">出生年月：1990.09.09</div>
        <div class="row_right">入职日期：2020.01.01</div>
      </div>
      <div class="row">
        <div class="row_left">连续工龄：5年</div>
        <div class="row_right">在职工龄：1年</div>
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
}

.personImages {
  margin-top: 5%;
  width: 25%;
  height: 60%;
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
  width: 75%;
  height: 100%;
  float: left;
  padding: 20px;
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
  width: 38%;
  height: 100%;
  margin-left: 2%;
  float: left;
}
</style>
