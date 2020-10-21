<template>
  <div>
    <a-select
        show-search
        placeholder="请选择一个时间跨度~"
        option-filter-prop="children"
        style="width: 200px"
        :filter-option="filterOption"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
    >
      <a-icon slot="suffixIcon" type="smile" />
      <a-select-option v-for="item in dataResources" :key="item.index" :value="item">
        {{ item }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroupTime',
  data() {
    return {
      dataResources: [
        '全财年', '上半年', '下半年', '第一季度', '第二季度', '第三季度', '第四季度', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>

<style>


</style>
