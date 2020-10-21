<template>
  <div class="selectDrop">
    <a-input @blur="inputBlur" v-model="value" placeholder="请输入年份" suffix="年" style="width: 140px" :max-length="4"/>
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
import Bus from './bus';

export default {
  name: 'ButtonGroupTime',
  data() {
    return {
      dataResources: [
        '全财年', '上半财年', '下半财年', '第一季度', '第二季度', '第三季度', '第四季度', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',
      ],
      inputYear: '',
      selectTime: '',
      value: undefined,
      yearTimeData: [],
    };
  },
  watch: {
    value(value) {
      this.inputYear = value; // 将财年值取出
      this.yearTimeData[0] = this.inputYear;
    },
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
      this.selectTime = value;
      this.yearTimeData[1] = this.selectTime;
    },
    handleBlur() {
      console.log('blur select');
      if (this.inputYear !== '' && this.selectTime !== '') {
        console.log('可以传值2,over', this.yearTimeData);
        Bus.$emit('yearTimeData', this.yearTimeData);
      }
    },
    inputBlur() {
      console.log('blur input');
      if (this.inputYear !== '' && this.selectTime !== '') {
        console.log('可以传值1,over', this.yearTimeData);
        Bus.$emit('yearTimeData', this.yearTimeData);
      }
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
.selectDrop {
  float: right;
  width: 440px;
  margin-right: 220px;
}
</style>
