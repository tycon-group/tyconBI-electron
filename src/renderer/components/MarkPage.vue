<template>
  <a-layout id="components-layout-demo-custom-trigger" class="layout">
    <Menus />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="header-total">
          <SearchInput />
          <DataBtn />
          <EyeBtn />
        </div>
      </a-layout-header>

      <div class="mid_content">
        <div class="meun_mid">
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
}

.meun_mid {
  width: 25%;
  min-height: 80%;
  float: left;
  background: #ffffff;
  margin: 24px 16px;
  padding: 24px;
}

.content {
  width: 65%;
  min-Height: 50%;
  margin: 24px 16px;
  padding: 24px;
  background: #ffffff;
  float: left;
}

</style>
