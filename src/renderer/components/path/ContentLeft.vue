<template>
  <div>
    <a-menu v-if="items !== undefined && items.length > 0" class="CodeMirror-vscrollbar" style = "display: block; bottom: 0" mode="inline" :scroll="{ x: false}">
      <a-menu-item v-for="item in items" :key="item.url" @click="showDrawer" style="text-align: center">
        <span>{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
    <a-empty v-else style="margin-top: 200px;"><span slot="description">列表为空</span></a-empty>
    <a-drawer
        title="日志详情"
        width="70%"
        placement="right"
        :closable="false"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
    >
      <ContentsUp ref="ContentsUp" :keyItemUrl="keyItem"/>
      <ContentsDown :keyID="keyID" :type1="type1"/>
    </a-drawer>
  </div>
</template>

<script>
import ContentsUp from './ContentsUp';
import ContentsDown from './ContentsDown';
import Bus from './bus.js';

export default {
  name: 'ContentLeft',
  components: { ContentsDown, ContentsUp },
  data() {
    return {
      visible: false,
      items: [],
      keyItem: '',
      keyID: '',
      type1: 'direct',
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
      this.keyID = this.keyItem.substring(this.keyItem.lastIndexOf('/') + 1);
      this.$refs.ContentsUp.clickData();
    },
    onClose() {
      this.visible = false;
    },
  },

  created() {
    setTimeout(() => {
      const Store = require('electron-store');
      const store = new Store();
      const empID = store.get('empID');
      const dept2 = 'direct';
      this.type1 = dept2;
      // if (dept1 === true) {
      //   this.type1 = 'direct';
      // } else {
      //   this.type1 = 'cross';
      // }
      const url = `https://tyconcps.cn:4399/wl/myUndoneWorklogs/${empID}/?type=${this.type1}`;
      this.$http.get(url)
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 200);
  },
  mounted() {
    setTimeout(() => {
      // console.log(this.empIDs);
      // const empID = this.empIDs; // 这是props取数据
      const vm = this;
      // 用$on事件来接收参数
      Bus.$on('vals', (data) => {
        vm.type1 = data;
        const Store = require('electron-store');
        const store = new Store();
        const empID = store.get('empID');
        const url = `https://tyconcps.cn:4399/wl/myUndoneWorklogs/${empID}/?type=${this.type1}`;
        this.$http.get(url)
          .then((res) => {
            this.items = res.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
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
