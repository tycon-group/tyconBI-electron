<template>
  <a-layout id="components-layout-demo-custom-trigger" class="layout">
    <Menu />
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

        </a-layout-content>

        <ContentsDownforMark />

      </div>
    </a-layout>
  </a-layout>
</template>

<script>
import Menu from './path/Menu.vue';
import ContentLeft from './path/ContentLeft.vue';
import ContentsUp from './path/ContentsUp';
import ContentsDownforMark from './path/ContentsDownforMark';
import SearchInput from './path/SearchInput';
import DataBtn from './path/DataBtn';
import EyeBtn from './path/EyeBtn';


export default {
  name: 'MarkPage',
  components: {
    EyeBtn,
    DataBtn,
    SearchInput,
    ContentsDownforMark,
    ContentsUp,
    Menu,
    ContentLeft,
  },

};

</script>
<style>

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
  width: 30%;
  min-height: 90%;
  float: left;
  background: #ffffff;
  margin: 24px 16px;
  padding: 24px;
}

.content {
  width: 60%;
  margin: 24px 16px;
  padding: 24px;
  background: #ffffff;
  min-Height: 40%;
  float: left;
}


</style>
