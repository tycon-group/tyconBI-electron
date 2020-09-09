<template>
  <a-layout-content class="mark_submit_2">
    <div>
      <a-collapse v-model="activeKey">
        <a-collapse-panel key="1" header="直属领导评分">
          <p>分值为: {{ mark_value }}</p>
          <p>理由: {{ reason }}</p>
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

<style>
.cont {
  width: 100%;
  height: auto;
}

.cont_left {
  width: 25%;
  float: left;

}

.cont_right {
  width: 75%;
  float: left;

}

.mark_submit_2 {
  width: 100%;
  min-Height: 40%;
  margin-top: 20px;
  padding: 24px;
  background: #f4f4f4;
  float: left;
}
</style>
