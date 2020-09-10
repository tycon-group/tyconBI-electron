<template>
  <div>
    <a-menu
        style="width: 100%"
        :default-selected-keys="[]"
        mode="inline"
        @click="handleClick"
    >

      <a-sub-menu key="sub1" type="cluster" @titleClick="titleClick">
        <span slot="title"><router-link to="/analysis/analysisGroup" tag="span">上海太江集团有限公司</router-link></span>
        <a-sub-menu key="sub2">
          <span slot="title"><router-link to="/analysis/analysisGroup" tag="span">上海太江建设工程有限公司</router-link></span>
          <a-sub-menu key="sub2_1">
            <span slot="title"><router-link to="/analysis/analysisGroup" tag="span">项目部</router-link></span>
            <a-menu-item key="1">
              <router-link to="/analysis/analysisPerson">
                <span>张三</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>

        <a-sub-menu key="sub3">
          <span slot="title"><router-link to="/analysis/analysisGroup" tag="span">上海太江信息科技有限公司</router-link></span>
          <a-sub-menu key="sub2_1">
            <span slot="title"><router-link to="/analysis/analysisGroup" tag="span">研发部</router-link></span>
              <a-menu-item key="2">
              <router-link to="/analysis/analysisPerson">
                <span>李四</span>
              </router-link>
            </a-menu-item>

            <a-menu-item key="3">
              <router-link to="/analysis/analysisPerson">
                <span>王二麻子</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <span slot="title"><router-link to="/analysis/analysisGroup" tag="span">上海太江文化发展有限公司</router-link></span>
          <a-menu-item key="7">
            <router-link to="/analysis/analysisPerson">
              <span>赵高</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <router-link to="/analysis/analysisPerson">
              <span>项羽</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="9">
            <router-link to="/analysis/analysisPerson">
              <span>易小川</span>
            </router-link>
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
      current: ['title'],
    };
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
