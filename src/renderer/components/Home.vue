<template>
  <a-layout id="components-layout-demo-custom-trigger" class="layout">
    <Menus />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
      </a-layout-header>
      <div class="mid_content">
        <div class="meun_mid">
          <ContentLeft />
        </div>

        <a-layout-content class="content">
          <ContentsUp />

        </a-layout-content>

        <ContentsDown />

      </div>
    </a-layout>
  </a-layout>
</template>

<script>
import Menus from './path/Menus.vue';
import ContentLeft from './path/ContentLeft.vue';
import ContentsUp from './path/ContentsUp';
import ContentsDown from './path/ContentsDown';


export default {
  name: 'menus',
  components: {
    ContentsDown,
    ContentsUp,
    Menus,
    ContentLeft,
  },

};

</script>
<style>

.layout {
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
.mark_submit {
  width: 60%;
  min-Height: 40%;
  margin: 20px 16px;
  padding: 24px;
  background: #ffffff;
  float: left;
}

</style>
