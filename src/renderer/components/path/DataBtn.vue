<template>
  <div class="databtn">
    <a-range-picker @change="onChange">
      <a-icon slot="suffixIcon" type="close-circle" />
    </a-range-picker>
  </div>

</template>

<script>
import Bus from './bus';

export default {
  name: 'DataBtn',
  data() {
    return {
      datestring: [],
    };
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
      this.datestring = dateString;
      Bus.$emit('dates', this.datestring);
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
