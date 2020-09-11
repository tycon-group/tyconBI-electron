<template>
  <div>
    <a-menu class = "CodeMirror-vscrollbar" style = "display: block; bottom: 0" mode="inline" :default-selected-keys="['1'] " :scroll="{ x: false}">
      <a-menu-item key="1" @click="showDrawer">
        <span>丁涯_研发组_2020年08月03日</span>
      </a-menu-item>
    </a-menu>
    <a-drawer
        title="Basic Drawer"
        width="700px"
        placement="right"
        :closable="false"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
    >
      <ContentsUp />
      <ContentsDown />
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
    };
  },
  props: ['empIDs'],
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    // 侧边抽屉
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
  mounted() {
    console.log(this.$props.empIDs);
    const empID = this.$props.empIDs;
    const url = `http://tyconcps.cn:4399/wl/underlingWorklogs/${empID}/?is_toBeDone=true&is_showCross=true`;
    this.$http.get(url)
      .then((res) => {
        console.log(res);
      })
    // eslint-disable-next-line no-unused-vars
      .catch((res) => {
      });
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
