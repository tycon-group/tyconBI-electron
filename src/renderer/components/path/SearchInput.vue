<template>
  <div class="search_input">
    <a-input-search placeholder="请输入内容..." enter-button @search="onSearch" />
  </div>
</template>

<script>
import Bus from './bus';

export default {
  name: 'SearchInput',
  methods: {
    onSearch(value) {
      console.log(value);
      Bus.$emit('input_data', value);
    },
  },
};
</script>

<style>
.search_input {
  width: 300px;
  margin: 15px;
  float: left;
}
</style>
