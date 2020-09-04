<template>
  <a-layout id="components-layout-demo-custom-trigger" class="layout">
    <Menus />
    <a-layout>
      <a-layout-header style="padding: 0; width: 100%; height: 64px; background-color: #f4f4f4; position:fixed; top:0; z-index:999;">
        <div class="header-total">
          <SearchInput />
          <DataBtn />
          <EyeBtn />
        </div>
      </a-layout-header>

      <div class="mid_content">
        <div class="menu_mid" style=" padding: 0; background-color: #fff; position:fixed; left: 200px; z-index:999;">
          <ContentLeft />
        </div>

        <a-layout-content class="content">
          <ContentsUp />
          <ContentsDownforMark />
          <HRContentsDown />
        </a-layout-content>




      </div>
    </a-layout>
  </a-layout>
</template>

<script>
import Menus from './path/Menus.vue';
import ContentLeft from './path/ContentLeft.vue';
import ContentsUp from './path/ContentsUp';
import ContentsDownforMark from './path/ContentsDownforMark';
import SearchInput from './path/SearchInput';
import DataBtn from './path/DataBtn';
import EyeBtn from './path/EyeBtn';
import HRContentsDown from './path/HRContentsDown';


export default {
  name: 'MarkPage',
  components: {
    HRContentsDown,
    EyeBtn,
    DataBtn,
    SearchInput,
    ContentsDownforMark,
    ContentsUp,
    Menus,
    ContentLeft,
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

.content {
  width: 65%;
  margin-right: 25px;
  padding: 24px;
  background: #ffffff;
  min-Height: 50%;
  float: right;
}

</style>
