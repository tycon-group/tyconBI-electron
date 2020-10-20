<template>
  <a-layout id="components-layout-demo-custom-trigger" class="layout">
    <Menus />
    <a-layout>
      <a-layout-header style="padding: 0; width: 100%; height: 64px; background-color: #f4f4f4; position:fixed; top:0; z-index:999;">
        <div class="header-total">
          <SearchInput />
          <ButtonGroupTime />
        </div>
      </a-layout-header>

      <div class="mid_content">
        <div class="menu_mid" style="padding: 0; background-color: #fff; position:fixed; left: 200px; z-index:999;">
          <div>
            <img class="logo_img" src="../assets/tycon.png" />
          </div>
          <br/><br/>
          <CompanyMenu />
        </div>

        <a-layout-content class="content_KPI">

          <router-view></router-view>

        </a-layout-content>


      </div>
    </a-layout>
  </a-layout>
</template>

<script>
import Menus from './path/Menus.vue';
import ContentLeft from './path/ContentLeft.vue';
import ContentsUp from './path/ContentsUp';
import ContentsDown from './path/ContentsDown';
import SearchInput from './path/SearchInput';
import ButtonGroupTime from './path/ButtonGroupTime';
import CompanyMenu from './path/CompanyMenu';

export default {
  name: 'KPIAnalysis',
  components: {
    CompanyMenu,
    ButtonGroupTime,
    ContentsDown,
    ContentsUp,
    Menus,
    ContentLeft,
    SearchInput,
  },

};
</script>

<style scoped>

.layout {
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

.logo_img {
  width: 180px;
  padding: 24px;
}

.content_KPI {
  width: 65%;
  height: 100%;
  margin-right: 25px;
  padding: 24px;
  background: #ffffff;
  float: right;
}

</style>
