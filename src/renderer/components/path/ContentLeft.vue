<template>
  <div>
    <a-menu class = "CodeMirror-vscrollbar" style = "display: block; bottom: 0" mode="inline" :default-selected-keys="['1'] " :scroll="{ x: false}">
      <a-menu-item key="1" @click="showDrawer">
        <span>丁涯_研发组_2020年08月03日</span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>丁涯_研发组_2020年08月02日</span>
      </a-menu-item>
      <a-menu-item key="3">
        <span>丁涯_研发组_2020年08月01日</span>
      </a-menu-item>

      <a-menu-item key="4">
        <span>丁涯_研发组_2020年08月03日（星期一）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="5">
        <span>丁涯_研发组_2020年08月02日（星期日）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="6">
        <span>丁涯_研发组_2020年08月01日（星期六）工作汇报</span>
      </a-menu-item>

      <a-menu-item key="7">
        <span>丁涯_研发组_2020年08月03日（星期一）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="8">
        <span>丁涯_研发组_2020年08月02日（星期日）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="9">
        <span>丁涯_研发组_2020年08月01日（星期六）工作汇报</span>
      </a-menu-item>

      <a-menu-item key="10">
        <span>丁涯_研发组_2020年08月03日（星期一）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="11">
        <span>丁涯_研发组_2020年08月02日（星期日）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="12">
        <span>丁涯_研发组_2020年08月01日（星期六）工作汇报</span>
      </a-menu-item>

      <a-menu-item key="13">
        <span>丁涯_研发组_2020年08月03日（星期一）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="14">
        <span>丁涯_研发组_2020年08月02日（星期日）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="15">
        <span>丁涯_研发组_2020年08月01日（星期六）工作汇报</span>
      </a-menu-item>

      <a-menu-item key="16">
        <span>丁涯_研发组_2020年08月03日（星期一）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="17">
        <span>丁涯_研发组_2020年08月02日（星期日）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="18">
        <span>丁涯_研发组_2020年08月01日（星期六）工作汇报</span>
      </a-menu-item>

      <a-menu-item key="19">
        <span>丁涯_研发组_2020年08月03日（星期一）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="20">
        <span>丁涯_研发组_2020年08月02日（星期日）工作汇报</span>
      </a-menu-item>
      <a-menu-item key="21">
        <span>丁涯_研发组_2020年08月01日（星期六）工作汇报</span>
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
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
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
