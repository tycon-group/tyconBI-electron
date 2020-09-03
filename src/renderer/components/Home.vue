<template>
  <a-layout class="layout">
    <Menus />
    <a-layout class="layout2">
      <a-layout-header style=" padding: 0; width: 100%; height: 64px; background-color: orangered; position:fixed; top:0; z-index:999;">
      </a-layout-header>

      <div class="mid_content">
        <div class="menu_mid">
          <ContentLeft />
        </div>

        <a-layout-content class="content">
          <ContentsUp />
          <ContentsDown />
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

export default {
  name: 'menus',
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
    };
  },
  components: {
    ContentsDown,
    ContentsUp,
    Menus,
    ContentLeft,
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight);
    this.$nextTick(() => {
      // 获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector('#boxFixed').offsetTop;
    });
  },
  methods: {
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      // eslint-disable-next-line max-len
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log('scrollTop=>', scrollTop);
      // 如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop;
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
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
  float: left;
  background: #ffffff;
  margin: 24px 16px;
  padding: 24px;
}

.content {
  width: 65%;
  margin: 24px 16px;
  padding: 24px;
  background: #ffffff;
  min-Height: 40%;
  float: left;
}
</style>
