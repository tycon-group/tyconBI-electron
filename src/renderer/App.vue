<template>
  <a-layout id="components-layout-demo-custom-trigger" class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="title_name">
        <span>太江数据分析系统</span>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>待办事项</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>所有评分</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>KPI分析</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
  background-color: red;
}

.title_name {
  font-family: "Adobe Caslon Pro Bold",serif;
  font-size: 20px;
  height: 32px;
  margin: 16px;
  color: #ffffff;
}

.layout {
  width: 100%;
  height: 100%;
}
</style>
