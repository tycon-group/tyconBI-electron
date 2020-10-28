<template>
  <a-layout-content class="mark_submit_2">
    <div>
      <a-collapse v-model="activeKey">
        <a-collapse-panel v-for="mark in mark_show" :key="mark.index" header="评分">
          <p>评分人：<span class="mark_reason">{{ mark.author }}</span></p>
          <p>评分时间：<span class="mark_reason">{{ mark.comment_time | timefilters }}</span></p>
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
  filters: {
    timefilters(val) {
      if (val === null || val === '') {
        return '暂无时间';
      }
      const d = new Date(val); // val 为表格内取到的后台时间
      const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      const hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
      const min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
      const sec = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
      const times = `${d.getFullYear()}-${month}-${day} ${hours}:${min}:${sec}`;
      return times;
    },
  },
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
        console.log(this.mark_show);
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
