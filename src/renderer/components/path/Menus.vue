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
          <span class="marks">所有日志</span>
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
      <div class="img_photo"><a-avatar :size="32" src="https://tyconstore-1302115199.cos.ap-shanghai.myqcloud.com/leo.jpg" alt="加载失败"/></div>
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
  height: 55px;
  margin-left: 12px;
  margin-bottom: 1px;
  font-size: 12px;
  color: #888888;
  position:fixed;
  bottom:0;
}

.img_photo {
  width: 35px;
  height: auto;
  margin-left: 1px;
  float: left;
  margin-top: 7px;
}

.user_name {
  width: 180px;
  height: 10px;
  font-size: 12px;
  margin-left: 12px;
}

.company_name {
  width: 200px;
  font-size: 12px;
  margin-top: 10px;
}
</style>
