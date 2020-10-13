<template>
  <div>
    <a-tree-select
        v-model="value"
        style="width: 100%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="treeData"
        placeholder="Please select"
        tree-default-expand-all
    >
    </a-tree-select>
    <a-menu>
      <a-menu-item v-for="item in data" :key="item.index" style="text-align: center">
        <span>{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const treeData = [
  {
    key: '1',
    value: '1',
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
    value: '2',
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
        value: '2.1',
        title: 'NavNav1',
        aaa: [],
        children: [
          {
            key: '2.1.1',
            value: '2.1.1',
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
];
export default {
  data() {
    return {
      value: undefined,
      treeData,
      data,
    };
  },
  watch: {
    value(value) {
      console.log(value);
    },
  },
};
</script>