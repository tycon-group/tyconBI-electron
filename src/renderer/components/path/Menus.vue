<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div class="title_name">
      <span>太江数据分析系统</span>
    </div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="[$route.path]">
      <a-menu-item key="/home" class="things" @click="toThing">
        <router-link to="/home" ondragstart="return false">
          <a-icon type="project" />
          <span>待办事项</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="/markpage" class="analysis" @click="toMark">
        <router-link to="/markpage" ondragstart="return false">
          <a-icon type="schedule" />
          <span class="marks">所有日志</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="/analysis" class="analysis" @click="toKPI">
        <router-link to="/analysis" ondragstart="return false">
          <a-icon type="line-chart" />
          <span>KPI分析</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <div class="title_footer">
      <div class="img_photo"><a-avatar :size="50" :src="this.avatar" alt="加载失败"/></div>
      <div class="user_name">{{ my_name }}</div>
<!--      <div class="company_name">上海太江信息科技有限公司</div>-->
    </div>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      collapsed: false,
      my_name: '',
      avatar: '',
    };
  },
  created() {
    const Store = require('electron-store');
    const store = new Store();
    console.log(store.get('user'));// 这是store传参
    const username = store.get('user');
    const url = `https://tyconcps.cn:4399/hr/employees/?username=${username}`;
    this.$http.get(url)
      .then((res) => {
        store.set('my_name', res.data.data[0].name);// 此处取到了登录人员的中文名
        store.set('avatar', res.data.data[0].avatar);// 此处取到了登录人员的头像地址
        this.avatar = store.get('avatar');
        this.my_name = store.get('my_name');
        // console.log(this.avatar); // 第一次打印头像地址
      })
      // eslint-disable-next-line no-unused-vars
      .catch((res) => {
      });
  },
  methods: {
    toThing() {
      this.$message.warning('请注意部门切换按钮~');
    },
    toMark() {
      this.$message.warning('请使用搜索框和日期选择器查看人员日志~');
    },
    toKPI() {
      this.$message.warning('请注意报告值值为上一月数据~');
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
  width: 45px;
  height: auto;
  margin-left: 1px;
  float: left;
  margin-top: -14px;
}

.user_name {
  width: 120px;
  height: auto;
  margin-top: -7px;
  float: left;
  font-size: 22px;
  text-align: center;
}

</style>
