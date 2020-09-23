<template>
  <a-layout class="layout">
    <Menus />
    <a-layout class="layout2">
      <a-layout-header style="margin-left: 8px; padding: 0; background-color: #f4f4f4; width: 89%; height: 61px; position:fixed; top:0; z-index:999;">
        <DeptBtn style="float: left;"/>
        <DeadLine style="float: left; width: 85%;"/>
      </a-layout-header>

      <div class="mid_content">
        <div class="menu_mid" style=" padding: 0; background-color: #fff; position:fixed; left: 200px; z-index:999;">
          <ContentLeft :empIDs="empIDValue" />
        </div>

      </div>
    </a-layout>
  </a-layout>
</template>

<script>
import Menus from './path/Menus.vue';
import ContentLeft from './path/ContentLeft.vue';
import ContentsUp from './path/ContentsUp';
import ContentsDown from './path/ContentsDown';
import DeadLine from './path/DeadLine';
import DeptBtn from './path/DeptBtn';

export default {
  name: 'menus',
  components: {
    ContentsDown,
    ContentsUp,
    Menus,
    ContentLeft,
    DeadLine,
    DeptBtn,
  },
  data() {
    return {
      empIDValue: '',
    };
  },
  mounted() {
    // console.log(this.$route.query.user);// 这是页面传参
    const Store = require('electron-store');
    const store = new Store();
    console.log(store.get('user'));// 这是store传参
    const username = store.get('user');
    const url = `https://tyconcps.cn:4399/hr/employees/?username=${username}`;
    this.$http.get(url)
      .then((res) => {
        // store.set('my_name', res.data.data[0].name);// 此处取到了登录人员的中文名
        // store.set('avatar', res.data.data[0].avatar);// 此处取到了登录人员的头像地址
        // console.log(res.data.data[0].avatar); // 第一次打印头像地址
        console.log(res.data.data[0].empID); // 此处取到了登录人员的ID
        this.empIDValue = res.data.data[0].empID;
        store.set('empID', this.empIDValue);// 此处存了登录人员的ID
      })
      // eslint-disable-next-line no-unused-vars
      .catch((res) => {
      });
  },
};

</script>
<style scoped>

.layout {
  width: 100%;
  height: 100%;
}
.layout2 {
  width: 100%;
  height: 100%;
}

.mid_content {
  width: 100%;
  height: 100%;
  margin-top: 55px;
}

.menu_mid {
  width: 25%;
  height: 90%;
  margin-top: 10px;
  float: left;
  background: #ffffff;
  padding: 24px;
}

</style>
