<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div class="title_name">
      <span>太江数据分析系统</span>
    </div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="[$route.path]">
      <a-menu-item key="/home" class="things" @click="toThing">
        <router-link to="/home">
          <a-icon type="project" />
          <span>待办事项</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="/markpage" class="analysis">
        <router-link to="/markpage">
          <a-icon type="schedule" />
          <span class="marks">所有评分</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="/analysis" class="analysis">
        <router-link to="/analysis">
          <a-icon type="line-chart" />
          <span>KPI分析</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <div class="title_footer">
      <a-avatar :size="64" src="https://tyconstore-1302115199.cos.ap-shanghai.myqcloud.com/leo.jpg" alt="加载失败"/>
      <div class="user_name">摆鱼</div>
      <div class="company_name">上海太江信息科技有限公司</div>
    </div>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toThing() {
      this.$message.success('这是待办实现页面');
    },
  },
};
</script>

<style>
.title_name {
  font-family: "Adobe Caslon Pro Bold",serif;
  font-size: 20px;
  height: 32px;
  margin: 16px;
  color: #ffffff;
}

.title_footer {
  height: 80px;
  margin: 25px;
  font-size: 12px;
  color: #888888;
  position:fixed;
  bottom:0;
}

.user_name {
  width: 100%;
  height: 10px;
  color: azure;
  font-size: 15px;
}

.company_name {
  width: 100%;
  margin-top: 10px;
  height: 10px;
}
</style>
