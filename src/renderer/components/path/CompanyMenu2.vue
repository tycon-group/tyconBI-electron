<template>
  <div style="width: 256px; margin: 5px">
    <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['2']"
        :accordion="true"
        mode="inline"
        :inline-collapsed="collapsed"
    >
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.key" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import { Menu } from 'ant-design-vue';
const SubMenu = {
  template: `
    <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
    <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
        </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-for="items in menuInfo.aaa" v-if="items.length !== 0" :key="items.index">
        <a-icon type="pie-chart" />
        <span>{{ items.title }}</span>
      </a-menu-item>
      <sub-menu v-if="item.length !== 0" :key="item.key" :menu-info="item" />
    </template>
    </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
export default {
  components: {
    'sub-menu': SubMenu,
  },
  data() {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          title: 'Nav1',
          aaa: [
            {
              title: 'option1',
            },
            {
              title: 'option2',
            },
          ],
          children: [],
        },
        {
          key: '2',
          title: 'Nav2',
          aaa: [
            {
              title: 'option3',
            },
            {
              title: 'option4',
            },
          ],
          children: [
            {
              key: '2.1',
              title: 'NavNav1',
              aaa: [],
              children: [
                {
                  key: '2.1.1',
                  title: 'NavNavNav1',
                  aaa: [
                    {
                      title: 'option5',
                    },
                    {
                      title: 'option6',
                    },
                    {
                      title: 'option7',
                    },
                    {
                      title: 'option8',
                    },
                  ],
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>