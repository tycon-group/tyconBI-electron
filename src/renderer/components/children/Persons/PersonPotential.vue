<template>
  <div class="total">
    <div class="detailed"><a-empty style="margin-top: 10%;"><span slot="description">值为空</span></a-empty></div>
    <div class="trend"><a-empty style="margin-top: 10%;"><span slot="description">值为空</span></a-empty></div>
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
  border-bottom: 1px solid #dddddd;
}

.trend {
  width: 100%;
  height: 60%;
}
</style>
