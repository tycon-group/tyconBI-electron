<template>
  <div class="total">
    <div class="col1">
      <span class="partName">日志数 ></span>
      <br/>
      <span class="partValue">18</span>
    </div>
    <div class="col2">
      <span class="partName">日志评论数 ></span>
      <br/>
      <span class="partValue">18</span>
    </div>
    <div class="col3">
      <span class="partName">日志评分数 ></span>
      <br/>
      <span class="partValue">15</span>
    </div>
    <div class="col4">
      <span class="partName">高评数 ></span>
      <br/>
      <span class="partValue">7</span>
    </div>
    <div class="col5">
      <span class="partName">低评数 ></span>
      <br/>
      <span class="partValue">1</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountWork',
};
</script>

<style scoped>
.total {
  width: 100%;
  height: 100%;
}

.col1 {
  width: 33%;
  height: 50%;
  margin-top: 15px;
  float: left;
  text-align: center;
}
.col2 {
  width: 33%;
  height: 50%;

  margin-top: 15px;
  float: left;
  text-align: center;
}
.col3 {
  width: 33%;
  height: 50%;

  margin-top: 15px;
  float: left;
  text-align: center;
}
.col4 {
  width: 33%;
  height: 50%;
  float: left;
  text-align: center;
}
.col5 {
  width: 33%;
  height: 50%;
  float: left;
  text-align: center;
}

.partName {
  font-size: 12px;
}

.partValue {
  font-size: 30px;

}

</style>
