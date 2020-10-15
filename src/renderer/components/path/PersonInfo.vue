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
import Bus from './bus';

export default {
  name: 'PersonInfo',
  data() {
    return {
      itemUrl: [],
    };
  },
  mounted() {
    setTimeout(() => {
      const vm = this;
      // 用$on事件来接收参数
      Bus.$on('itemUrl', (data) => {
        vm.itemUrl = data;
        console.log(this.itemUrl); // 这里取到了被点击的列表所对应的人员的信息链接
      });
    }, 200);
  },
};
</script>

<style scoped>
.personInfo {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #dddddd;
}

.personImages {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  text-align: center;
  float: left;
}
.personImage {
  margin-top: 5%;
  width: 90%;
  height: 90%;
  border-radius: 50%;
}

.manInfo {
  width: 80%;
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
  width: 58%;
  height: 100%;
  float: left;
  margin-left: 2%;
}
.row_right {
  width: 37%;
  height: 100%;
  margin-left: 3%;
  float: left;
}
</style>
