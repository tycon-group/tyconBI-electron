<template>
  <div class="button_group_time">
    <a-button-group>
      <a-button>月</a-button>
      <a-button>季度</a-button>
      <a-button>半年</a-button>
      <a-button>财年</a-button>
    </a-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroupTime',
};
</script>

<style>
.button_group_time {
  float: right;
  width: 240px;
  margin-right: 20px;
}

</style>
