<template>
  <a-layout id="components-layout-demo-custom-trigger" class="layout">
    <Menus />
    <a-layout>
      <a-layout-header style="padding: 0; width: 100%; height: 64px; background-color: #f4f4f4; position:fixed; top:0; z-index:999;">
        <div class="header-total">
          <SearchInput />
          <DataBtn />
        </div>
      </a-layout-header>

      <div class="mid_content">
        <div class="menu_mid" style=" padding: 0; background-color: #fff; position:fixed; left: 200px; z-index:999;">
          <LogsAll :empIDs="empIDValue"/>
        </div>

      </div>
    </a-layout>
  </a-layout>
</template>

<script>
import Menus from './path/Menus.vue';
import ContentsUp from './path/ContentsUp';
import SearchInput from './path/SearchInput';
import DataBtn from './path/DataBtn';
import LogsAll from './path/LogsAll';


export default {
  name: 'MarkPage',
  components: {
    LogsAll,
    DataBtn,
    SearchInput,
    ContentsUp,
    Menus,
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

.header-total {
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
  float: left;
  background: #ffffff;
  padding: 24px;
  margin-top: 10px;
}

</style>
