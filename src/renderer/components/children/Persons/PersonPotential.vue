<template>
  <div class="total">
    <div class="potential">
      <h4 style="margin: 16px 0">
        技能库：
      </h4>
      <div>
        <a-tag class="tags" v-for="(item, i) in datas" :key="i" :color=item.co>
          {{ item.io }}
        </a-tag>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PersonPotential',
  data() {
    return {
      datas: [],
    };
  },
  // 特意为模拟数据所写
  mounted() {
    setTimeout(() => {
      this.datas = this.$route.params.potentialPER;
      console.log(this.datas, 'chulai ');
    }, 200);
  },
};
</script>

<style>
.total {
  width: 100%;
  height: 100%;
}

.potential {
  margin-top: 18px;
  width: 100%;
  height: 95%;
}

.tags {
  padding-top: 13px;
  text-align: center;
  font-size: medium;
  width: 150px;
  height: 50px;
}
</style>
