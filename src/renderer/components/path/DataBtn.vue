<template>
  <div class="databtn">
    <a-range-picker @change="onChange">
      <a-icon slot="suffixIcon" type="close-circle" />
    </a-range-picker>
  </div>

</template>

<script>
export default {
  name: 'DataBtn',
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>

<style>
.databtn {
  float: left;
  width: 300px;
  margin-left: 10px;
}
</style>
