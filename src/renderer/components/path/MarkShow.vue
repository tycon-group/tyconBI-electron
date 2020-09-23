<template>
  <a-layout-content class="mark_submit_2">
    <div>
      <a-collapse v-model="activeKey">
        <a-collapse-panel v-for="mark in mark_show" :key="mark.index" header="评分">
          <p>评分人：<span class="mark_reason">{{ mark.author }}</span></p>
          <p>评分时间：<span class="mark_reason">{{ mark.comment_time }}</span></p>
          <p>{{ mark.type }}为: <span class="mark_number">{{ mark.score }}</span></p>
          <p>理由: <span class="mark_reason">{{ mark.remarks }}</span></p>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </a-layout-content>
</template>

<script>
import Bus from './bus.js';
export default {
  name: 'MarkShow',
  data() {
    return {
      mark_show: [],
      activeKey: ['0'],
    };
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
  mounted() {
    setTimeout(() => {
      const vm = this;
      // 用$on事件来接收参数
      Bus.$on('mark_show', (data) => {
        vm.mark_show = data;
        console.log(this.mark_show, '哈哈哈哈哈哈哈哈');
      });
    }, 200);
  },
};
</script>

<style scoped>
.mark_submit_2 {
  width: 100%;
  min-Height: 40%;
  margin-top: 20px;
  padding: 24px;
  background: #f4f4f4;
  float: left;
}
.mark_number {
  margin-left: 10px;
  color: red;
  font-size: 22px;
  font-weight: bold
}
.mark_reason {
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold
}
</style>
