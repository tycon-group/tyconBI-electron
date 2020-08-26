<template>
  <div class="total">
    <div class="detailed">这是明细模块3</div>
    <div class="trend">这是局趋势图3</div>
  </div>
</template>

<script>
export default {
  name: 'PersonWork',
};
</script>

<style>
.total {
  width: 100%;
  height: 100%;
}

.detailed {
  width: 100%;
  height: 40%;
  background-color: green;
}

.trend {
  width: 100%;
  height: 60%;
  background-color: red;
}
</style>
