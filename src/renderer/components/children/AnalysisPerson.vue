<template>
  <div class="a-layout">
    <div class="layout-header"><PersonInfo /></div>
    <div class="layout-content">这是详细23333333333333</div>
    <div class="layout-footer">这是详细个55555555555555</div>
  </div>
</template>

<script>
import PersonInfo from '../path/PersonInfo';

export default {
  name: 'AnalysisPerson',
  components: {
    PersonInfo,
  },
};
</script>

<style>
.a-layout {
  width: 100%;
  height: 100%;
}

.layout-header {
  width: 100%;
  height: 25%;
}

.layout-content {
  background-color: green;
  width: 100%;
  height: 35%;
}

.layout-footer {
  width: 100%;
  height: 40%;
}
</style>
