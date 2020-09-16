<template>
  <div>
    <a-menu v-if="items !== undefined && items.length > 0" class = "CodeMirror-vscrollbar" style = "display: block; bottom: 0" mode="inline" :scroll="{ x: false}">
      <a-menu-item v-for="item in items" :key="item.url" @click="showDrawer" style="text-align: center">
        <span>{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
    <a-empty v-else style="margin-top: 200px;"><span slot="description">列表为空</span></a-empty>
    <a-drawer
        title="日志详情"
        width="75%"
        placement="right"
        :closable="false"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
    >
      <ContentsUp ref="ContentsUp" :keyItemUrl="keyItem"/>
      <MarkShow />
      <DoubleMark />
    </a-drawer>
  </div>
</template>

<script>
import ContentsUp from './ContentsUp';
import MarkShow from './MarkShow';
import DoubleMark from './DoubleMark';

export default {
  name: 'ContentLeft',
  components: { MarkShow, DoubleMark, ContentsUp },
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
      console.log(key.key);
      this.$refs.ContentsUp.clickData();
    },
    onClose() {
      this.visible = false;
    },
  },

  mounted() {
    setTimeout(() => {
      // console.log(this.empIDs);
      const Store = require('electron-store');
      const store = new Store();
      const empID = store.get('empID');
      const url = `https://tyconcps.cn:4399/wl/underlingWorklogs/${empID}/?is_toBeDone=False&is_showCross=True`;
      this.$http.get(url)
        .then((res) => {
          console.log(res);
          this.items = res.data.data;
        })
      // eslint-disable-next-line no-unused-vars
        .catch((res) => {
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
