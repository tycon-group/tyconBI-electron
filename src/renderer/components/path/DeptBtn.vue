<template>
  <div class="eye_btn">
    <a-switch checked-children="本部门" un-checked-children="其他部门" default-checked />
  </div>

</template>

<script>
export default {
  name: 'EyeBtn',
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
