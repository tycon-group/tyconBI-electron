<template>
  <div class="dept_btn">
    <a-switch checked-children="本部门" un-checked-children="其他部门" @click="ck_change" v-model="dept1"/>
  </div>

</template>

<script>
import Bus from './bus.js';
export default {
  name: 'DeptBtn',
  data() {
    return {
      dept1: true,
      type1: '',
    };
  },
  watch: {
    dept1(newOne, oldOne) {
      console.log(oldOne, '改变了', newOne);
      // this.$message.success('已切换');
      const Store = require('electron-store');
      const store = new Store();
      store.set('dept1', newOne);
      this.dept1 = store.get('dept1');
      console.log(this.dept1, '监听改变后，存储一次');
    },
  },
  created() {
    // const Store = require('electron-store');
    // const store = new Store();
    this.dept1 = true;
    // console.log(this.dept1, '加载前将存储值取出来');
  },
  mounted() {
    const Store = require('electron-store');
    const store = new Store();
    this.dept1 = store.get('dept1');
    console.log(this.dept1, '这是加载后的');
  },
  methods: {
    ck_change(res) {
      console.log(res, '这里是点击后的');
      if (this.dept1 === true) {
        this.type1 = 'direct';
      } else {
        this.type1 = 'cross';
      }
      Bus.$emit('vals', this.type1);
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
