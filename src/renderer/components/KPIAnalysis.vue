<template>
  <a-layout id="components-layout-demo-custom-trigger" class="layout">
    <Menus />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="header-total">
          <SearchInput />
          <MonthPage />
          <ButtonGroupTime />
        </div>
      </a-layout-header>

      <div class="mid_content">
        <div class="meun_mid">
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
import MonthPage from './path/MonthPage';
import ButtonGroupTime from './path/ButtonGroupTime';
import CompanyMenu from './path/CompanyMenu';

export default {
  name: 'KPIAnalysis',
  components: {
    CompanyMenu,
    ButtonGroupTime,
    MonthPage,
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
}

.meun_mid {
  width: 25%;
  min-height: 90%;
  float: left;
  background: #ffffff;
  margin: 24px 16px;
  padding: 24px;
}

.logo_img {
  width: 180px;
}

.content_KPI {
  width: 65%;
  height: 100%;
  margin: 24px 16px;
  padding: 2px;
  background: #ffffff;
  min-Height: 40%;
  float: left;
}

</style>
