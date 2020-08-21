<template>
  <div class="search_input">
    <a-input-search placeholder="请输入内容..." enter-button @search="onSearch" />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>

<style>
.search_input {
  width: 300px;
  margin: 15px;
  float: left;
}
</style>
