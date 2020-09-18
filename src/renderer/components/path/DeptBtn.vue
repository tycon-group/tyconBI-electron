<template>
  <div class="eye_btn">
    <a-switch checked-children="本部门" un-checked-children="其他部门" @click="ck_change" default-checked v-model="test"/>
  </div>

</template>

<script>
export default {
  name: 'EyeBtn',
  data() {
    return {
      test: true,
    };
  },
  mounted() {
    console.log(this.test);
  },
  methods: {
    ck_change() {
      console.log(this.test);
    },
  },
};
</script>

<style>
.eye_btn {
  float: right;
  margin-right: 210px;
  width: 120px;
  text-align: center;
}
</style>
