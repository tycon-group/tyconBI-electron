<template>
  <div class="selectDrop">
    <a-input @blur="inputBlur" v-model="value" placeholder="请输入年份" suffix="年" style="width: 140px" :max-length="4"/>
    <a-select
        show-search
        v-model="selectTime"
        placeholder="请选择一个时间跨度~"
        option-filter-prop="children"
        style="width: 200px"
        :filter-option="filterOption"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
    >
      <a-icon slot="suffixIcon" type="smile" />
      <a-select-option v-for="item in dataResources" :key="item.name" :value="item.value">
        {{ item.name }}
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
        {
          name: '全财年',
          value: 'all',
        },
        {
          name: '上半财年',
          value: 'temp1st',
        },
        {
          name: '下半财年',
          value: 'temp2nd',
        },
        {
          name: '第一季度',
          value: '1st',
        },
        {
          name: '第二季度',
          value: '2nd',
        },
        {
          name: '第三季度',
          value: '3rd',
        },
        {
          name: '第四季度',
          value: '4th',
        },
        {
          name: '1月',
          value: '1',
        },
        {
          name: '2月',
          value: '2',
        },
        {
          name: '3月',
          value: '3',
        },
        {
          name: '4月',
          value: '4',
        },
        {
          name: '5月',
          value: '5',
        },
        {
          name: '6月',
          value: '6',
        },
        {
          name: '7月',
          value: '7',
        },
        {
          name: '8月',
          value: '8',
        },
        {
          name: '9月',
          value: '9',
        },
        {
          name: '10月',
          value: '10',
        },
        {
          name: '11月',
          value: '11',
        },
        {
          name: '12月',
          value: '12',
        },
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
      if (this.inputYear !== '' && this.selectTime !== '') {
        console.log('选择可以传值,over', this.yearTimeData);
        Bus.$emit('yearTimeData', this.yearTimeData);
      }
    },
    inputBlur() {
      // 折线图传年份值
      if (this.inputYear !== '') {
        if (this.selectTime !== '') {
          console.log('输入可以传值,over', this.yearTimeData);
          Bus.$emit('yearTimeData', this.yearTimeData);
        } else {
          this.yearTimeData[1] = 'all';
          Bus.$emit('yearTimeData', this.yearTimeData);
        }
        Bus.$emit('pieYear', this.inputYear);
      } else {
        const date1 = new Date();
        const years = date1.getFullYear();
        const months = date1.getMonth();
        this.yearTimeData[0] = years;
        this.yearTimeData[1] = months;
        this.selectTime = '';
        this.$message.success('默认显示本年度上月数据~');
        Bus.$emit('yearTimeData', this.yearTimeData);
        Bus.$emit('pieYear', years);
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
