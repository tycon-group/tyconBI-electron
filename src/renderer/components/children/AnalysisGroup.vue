<template>
  <div class="a-layout">
    <div class="layout-header">zhehsi zuhzi </div>
    <div class="layout-content">Content</div>
    <div class="layout-footer">Footer</div>
  </div>

</template>

<script>
import PersonInfo from '../path/PersonInfo';
export default {
  name: 'AnalysisGroup',
  components: { PersonInfo },
};
</script>

<style scoped>
.a-layout {
  width: 100%;
  height: 100%;
  background-color: aquamarine;
}

.layout-header {
  background-color: red;
  width: 100%;
  height: 25%;
}

.layout-content {
  background-color: green;
  width: 100%;
  height: 35%;
}

.layout-footer {
  background-color: red;
  width: 100%;
  height: 40%;
}
</style>
