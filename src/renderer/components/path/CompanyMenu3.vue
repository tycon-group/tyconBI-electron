<template>
  <div>
    <a-tree-select
        v-model="value"
        style="width: 100%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="treeData"
        placeholder="请选择需要查看的组织"
        :replace-fields="{ title: 'name', key: 'id', value: 'id', children: 'child' }"
    >
    </a-tree-select>
    <a-menu v-if="empData !== undefined && empData.length > 0" class="CodeMirror-vscrollbar2" style = "display: block; bottom: 0" mode="inline" :scroll="{ x: false }">
      <a-menu-item v-for="item in empData" :key="item.index" style="text-align: center">
        <router-link to="/analysis/analysisPerson">
          <span>{{ item.name }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <a-empty v-else style="margin-top: 200px;"><span slot="description">列表为空</span></a-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: undefined,
      treeData: [],
      empData: [],
    };
  },
  watch: {
    value(value) {
      console.log(value);
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
    setTimeout(() => {
      const url = 'https://tyconcps.cn:4399/hr/listOrgAndEmp';
      this.$http.get(url)
        .then((res) => {
          this.treeData = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 200);
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