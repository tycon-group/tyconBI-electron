<template>
  <Home />
</template>
<script>
import Home from './components/Home.vue';

export default {
  name: 'home',
  components: {
    Home,
  },
  data() {
    return {
      collapsed: false,
      mark_value: 3,
      value: '',
      desc: ['1分', '2分', '3分', '4分', '5分'],
    };
  },
};
</script>
<style>

</style>
