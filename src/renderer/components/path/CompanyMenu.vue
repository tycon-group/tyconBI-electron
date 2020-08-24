<template>
  <div>
    <a-menu
        style="width: 100%"

        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
    >

      <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title">上海太江集团有限公司</span>
        <a-sub-menu key="sub2" title="上海太江建设工程有限公司">
          <a-menu-item key="1">
            张三
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub3" title="上海太江信息科技有限公司">
          <a-menu-item key="2">
            李四
          </a-menu-item>
          <a-menu-item key="3">
            王二麻子
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub4" title="上海太江文化发展有限公司">

          <a-menu-item key="7">
            赵高
          </a-menu-item>
          <a-menu-item key="8">
            项羽
          </a-menu-item>
          <a-menu-item key="9">
            易小川
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'CompanyMenu',
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>

<style>

</style>
