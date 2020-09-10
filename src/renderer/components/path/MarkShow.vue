<template>
  <a-layout-content class="mark_submit_2">
    <div>
      <a-collapse v-model="activeKey">
        <a-collapse-panel key="1" header="直属领导评分">
          <p>分值为: <span class="mark_number">{{ mark_value }}</span></p>
          <p>理由: <span class="mark_reason">{{ reason }}</span></p>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: 'MarkShow',
  data() {
    return {
      mark_value: '3',
      reason: '评分为3分，一切正常！',
      activeKey: ['1'],
    };
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
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
