<template>
  <div class="total">
    <div class="col1">
      <span class="partName">日志数 ></span>
      <br/>
      <span class="partValue">18</span>
    </div>
    <div class="col1">
      <span class="partName">日志评论数 ></span>
      <br/>
      <span class="partValue">18</span>
    </div>
    <div class="col1">
      <span class="partName">日志评分数 ></span>
      <br/>
      <span class="partName">直属：</span><span class="partValue">15</span>
      <span class="partName">人事：</span><span class="partValue">10</span>
    </div>
    <div class="col2">
      <span class="partName">日志补写数 ></span>
      <br/>
      <span class="partValue">7</span>
    </div>
    <div class="col2">
      <span class="partName">高评数 ></span>
      <br/>
      <span class="partValue">7</span>
    </div>
    <div class="col2">
      <span class="partName">低评数 ></span>
      <br/>
      <span class="partValue">1</span>
    </div>
  </div>
</template>

<script>

import Bus from '../../path/bus';

export default {
  name: 'CountWork',
  data() {
    return {
      defaultCount: [],
    };
  },
  mounted() {
    const vm = this;
    Bus.$on('defaultCount', (data) => {
      vm.defaultCount = data;
      console.log(this.defaultCount, '测试数组');
    });
  },
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
