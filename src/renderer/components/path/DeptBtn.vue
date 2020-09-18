<template>
  <div class="dept_btn">
    <a-switch checked-children="本部门" un-checked-children="其他部门" @click="ck_change" default-checked v-model="dept1"/>
  </div>

</template>

<script>
export default {
  name: 'DeptBtn',
  data() {
    return {
      dept1: true,
    };
  },
  mounted() {
    console.log(this.dept1);
  },
  methods: {
    ck_change() {
      const Store = require('electron-store');
      const store = new Store();
      const dept1 = store.set('dept1');
      console.log(dept1);
    },
  },
};
</script>

<style>
.dept_btn {
  width: 100px;
  text-align: center;
  background-color: #F4F4F4;
}
</style>
