<template>
  <div>
    <a-tree-select
        v-model="value"
        showSearch
        style="width: 90%; margin-left: 5%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="treeData"
        placeholder="请选择需要查看的组织"
        :replace-fields="{ title: 'name', key: 'id', value: 'id', children: 'child' }"
        @change="tsChange"
        @select="tsSelect"
        treeNodeFilterProp="title"
    >
    </a-tree-select>
    <a-menu v-if="empData !== undefined && empData.length > 0" class="CodeMirror-vscrollbar2" style = "display: block; bottom: 0;" mode="inline" :scroll="{ x: false }">
      <a-menu-item @click="ckItem(item.url, item.empID)" v-for="item in empData" :key="item.index" style="width: 98%; text-align: center; border-bottom: 1px solid #F4F4F4">
        <router-link to="/analysis/analysisPerson" ondragstart="return false">
          <span>{{ item.name }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <a-empty v-else style="margin-top: 200px;"><span slot="description">列表为空</span></a-empty>
  </div>
</template>

<script>
import Bus from './bus';

export default {
  data() {
    return {
      value: undefined,
      treeData: [],
      empData: [],
      empIDCom: '',
    };
  },
  watch: {
    value(value) {
      const url = `https://tyconcps.cn:4399/hr/employees/?organization=${value}`;
      this.$http.get(url)
        .then((res) => {
          this.empData = res.data.data;
          console.log(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    const Store = require('electron-store');
    const store = new Store();
    this.empIDCom = store.get('empID');
    setTimeout(() => {
      const url = `https://tyconcps.cn:4399/hr/listOrgAndEmp?empID=${this.empIDCom}`;
      this.$http.get(url)
        .then((res) => {
          this.treeData = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 200);
  },
  methods: {
    tsChange() {
      console.log('tree值变化');
      Bus.$emit('flagTS', false);
      this.tsSelect();
    },
    tsSelect() {
      setTimeout(() => {
        console.log(this.value, '此处取到组织号，将数据处理后传到组织页面');
        const url = `https://tyconcps.cn:4399/hr/orgAndEmpDetail/${this.value}`;
        this.$http.get(url)
          .then((res) => {
            Bus.$emit('groupData', res);
          })
          .catch((error) => {
            console.log(error);
          });
        // 此处setTimeout一下，就可以取到最新数据
        this.$router.push({
          name: 'analysisGroup', // 此处会报错，两次进入同一个路由，对项目没有影响
        });
      }, 200);
    },
    ckItem(e, f) {
      console.log(e, '这是url获取位置');
      console.log(f, '这是被查看人员empID获取位置');
      // 将数据传到electron-store保存
      // const Store = require('electron-store');
      // const store = new Store();
      // store.set('itemUrl', e);
      // console.log(store.get('itemUrl'));
      Bus.$emit('itemUrl', e);
      Bus.$emit('itemEmpID', f);
      Bus.$emit('flagTS', true);
    },
  },
};

</script>

<style>
.CodeMirror-vscrollbar2{
  right:0;
  top:180px;
  overflow-x:hidden;
  overflow-y:scroll;
}

.CodeMirror-vscrollbar2{
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