<template>
  <div>
    <a-menu class = "CodeMirror-vscrollbar" style = "display: block; bottom: 0" mode="inline" :scroll="{ x: false}">
      <a-menu-item v-for="item in items" :key="item.url" @click="showDrawer" style="text-align: center">
        <span>{{ item.title }}</span>
      </a-menu-item>

    </a-menu>
    <a-drawer
        title="日志详情"
        width="70%"
        placement="right"
        :closable="false"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
    >
      <ContentsUp ref="ContentsUp" :keyItem="keyItem"/>
      <ContentsDown :keyItem="keyItem"/>
    </a-drawer>
  </div>
</template>

<script>
import ContentsUp from './ContentsUp';
import ContentsDown from './ContentsDown';
export default {
  name: 'ContentLeft',
  components: { ContentsDown, ContentsUp },
  data() {
    return {
      visible: false,
      items: [],
      keyItem: '',
    };
  },
  props: ['empIDs'],

  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer(key) {
      this.visible = true;
      this.keyItem = key.key;
      console.log(key);
      this.$refs.ContentsUp.clickData();
    },
    onClose() {
      this.visible = false;
    },
  },

  mounted() {
    setTimeout(() => {
      // console.log(this.empIDs);
      // const empID = this.empIDs; // 这是props取数据
      const Store = require('electron-store');
      const store = new Store();
      const empID = store.get('empID');
      const url = `http://tyconcps.cn:4399/wl/underlingWorklogs/${empID}/?is_toBeDone=True&is_showCross=True`;
      this.$http.get(url)
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 200);
  },
};
</script>

<style>

.CodeMirror-vscrollbar{
  right:0;
  top:0;
  overflow-x:hidden;
  overflow-y:scroll;
}

.CodeMirror-vscrollbar{
  position:absolute;
  z-index:6;
  display:none;
}

/*不定义定义滑块，则为隐藏*/

/**设置滚动条的样式**/
::-webkit-scrollbar{
  width:10px;
  height:20px;
}

/**滚动槽**/

::-webkit-scrollbar-track{
  box-shadow:inset 0 0 3px #dcdcdc;
  border-radius:10px;
}
</style>
