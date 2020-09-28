<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height:100%">
    <a-layout-sider theme="light" v-model="collapsed" :trigger="null" collapsible>
      <div >
        <a-menu
            :inlineIndent="inlineIndent"
            :defaultSelectedKeys="[$route.path]"
            :openKeys="openKeys"
            mode="inline"
            :inline-collapsed="collapsed"
            @openChange="onOpenChange"
            @click="menuClick">
          <!-- 菜单遍历的开始 -->
          <template v-for="item in list">
            <!-- 如果当前遍历项没有children，视为子菜单项，注意所有的key都是path用于路由跳转，以及当前选中记录 -->
            <a-menu-item v-if="!item.child" :key="item.index">
              <span slot="title" v-if="!item.employees" :key="item.index"><router-link to="/analysis/analysisPerson" tag="span">{{ item.name }}</router-link></span>
              <span slot="title" v-else :key="item.employees.index"><router-link to="/analysis/analysisPerson" tag="span">{{ item.employees.name }}</router-link></span>
            </a-menu-item>
            <!-- 否则视为子菜单，传入菜单信息并且运用下面定义的函数式组件 -->
            <sub-menu v-else :key="item.index" :menu-info="item">
              <span slot="title"><router-link to="/analysis/analysisGroup" tag="span">{{ item.name }}</router-link></span>
            </sub-menu>
          </template>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Menu } from 'ant-design-vue';
// 定义函数式组件
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.index" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <span>{{ menuInfo.name }}</span>
        </span>
        <template v-for="item in menuInfo.child">
          <a-menu-item v-if="!item.child" :key="item.index">
            <span>{{ item.name }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.index" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true 此项必须被定义
  isSubMenu: true,
  props: {
    // 解构a-sub-menu的属性，也就是文章开头提到的为什么使用函数式组件
    ...Menu.SubMenu.props,
    // 接收父级传递过来的菜单信息
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
export default {
  data() {
    return {
      // 菜单缩进
      inlineIndent: 12,
      // 默认不折叠
      collapsed: false,
      // 全部顶级父节点,用来控制所有父级菜单只展开其中的一项，可用遍历菜单信息进行赋值
      rootSubmenuKeys: ['/infomationManage', '/safeInfoManage', '/qualityInfoManage'],
      // 展开的父菜单项
      openKeys: [],
      // 选中的子菜单项
      defaultSelectedKeys: [this.$route.path],
      // 菜单信息，可从后台获取
      list: [
        {
          name: '香港煌卓国际有限公司',
          id: 5,
          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/5',
          employees: [
            {
              name: '于坤',
              empID: 'A00076',
              url: 'https://tyconcps.cn:4399/hr/employees/A00076',
            },
            {
              name: '邵乃文',
              empID: 'A00001',
              url: 'https://tyconcps.cn:4399/hr/employees/A00001',
            },
          ],
          child: [
            {
              name: '煌卓商务信息咨询（上海）有限公司',
              id: 6,
              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/6',
              employees: [
              ],
              child: [
                {
                  name: '总裁办（煌卓商务）',
                  id: 40,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/40',
                  employees: [
                  ],
                  child: [
                    {
                      name: '煌卓工业',
                      id: 39,
                      url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/39',
                      employees: [
                      ],
                      child: [
                      ],
                    },
                    {
                      name: '长三角区域',
                      id: 41,
                      url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/41',
                      employees: [
                        {
                          name: '张三',
                          empID: 'S00001',
                          url: 'https://tyconcps.cn:4399/hr/employees/S00001',
                        },
                      ],
                      child: [
                      ],
                    },
                    {
                      name: '华南区域',
                      id: 42,
                      url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/42',
                      employees: [
                      ],
                      child: [
                      ],
                    },
                    {
                      name: '华北、西北区域',
                      id: 43,
                      url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/43',
                      employees: [
                      ],
                      child: [
                      ],
                    },
                    {
                      name: '开发部',
                      id: 44,
                      url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/44',
                      employees: [
                      ],
                      child: [
                      ],
                    },
                    {
                      name: '物流招商部',
                      id: 45,
                      url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/45',
                      employees: [
                      ],
                      child: [
                      ],
                    },
                    {
                      name: '公共关系事业部',
                      id: 46,
                      url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/46',
                      employees: [
                      ],
                      child: [
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  created() {
    // 将从缓存中取出openKeys
    const openKeys = window.sessionStorage.getItem('openKeys');
    if (openKeys) {
      // 存在即赋值
      this.openKeys = JSON.parse(openKeys);
    }
  },
  methods: {
    // 点击菜单，路由跳转,注意的是当点击MenuItem才会触发此函数
    menuClick(key) {
      // 获取到当前的key,并且跳转
      this.$router.push({
        path: key,
      });
    },
    onOpenChange(openKeys) {
      // 将当前打开的父级菜单存入缓存中
      window.sessionStorage.setItem('openKeys', JSON.stringify(openKeys));
      //  控制只打开一个
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
  // 注册局部组件
  components: {
    'sub-menu': SubMenu,
  },
};
</script>
<style>
</style>
