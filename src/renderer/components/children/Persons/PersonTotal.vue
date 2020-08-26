<template>
  <div class="total">
    <div class="radar">
      个人雷达图
    </div>
    <div class="evidence">
      <div class="devs">导航栏</div>
      <div class="lists">这是列表</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonTotal',
};
</script>

<style>
.total {
  width: 100%;
  height: 100%;
}

.radar {
  width: 100%;
  height: 40%;
  background-color: green;
}

.evidence {
  width: 100%;
  height: 60%;
}

.devs {
  width: 100%;
  height: 10%;
}

.lists {
  width: 100%;
  height: 88%;
  margin-top: 2%;
}
</style>
