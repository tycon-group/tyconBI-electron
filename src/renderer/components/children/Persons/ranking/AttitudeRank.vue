<template>
  <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 2000 }"
      :scroll="{ y: 200}"
  />
</template>

<script>
const columns = [
  {
    title: '工作态度占位符1',
    dataIndex: 'name',
    width: 80,
  },
  {
    title: '占位符2',
    dataIndex: 'work',
    width: 80,
    sorter: (a, b) => a.work.localeCompare(b.work),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '占位符3',
    dataIndex: 'attitude',
    width: 80,
    sorter: (a, b) => a.attitude.localeCompare(b.attitude),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '占位符4',
    dataIndex: 'potential',
    width: 80,
    sorter: (a, b) => a.potential.localeCompare(b.potential),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '占位符5',
    dataIndex: 'contribution',
    width: 80,
    sorter: (a, b) => a.contribution.localeCompare(b.contribution),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: '占位符6',
    dataIndex: 'markCount',
    width: 80,
    sorter: (a, b) => a.markCount.localeCompare(b.markCount),
    defaultSortOrder: 'ascend',
    sortDirections: ['descend', 'ascend'],
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    markCount: 'B',
  },
  {
    key: '2',
    name: '李四',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    markCount: 'B',
  },
  {
    key: '3',
    name: '王五',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    markCount: 'B',
  },
  {
    key: '4',
    name: '刘大瘸子.能的要死',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    markCount: 'B',
  },
  {
    key: '5',
    name: '张继科',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    markCount: 'C',
  },
  {
    key: '6',
    name: '张飞',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    markCount: 'B',
  },
  {
    key: '7',
    name: '李逵',
    work: 'C',
    attitude: 'B',
    potential: 'C',
    contribution: 'B',
    markCount: 'B',
  },
  {
    key: '8',
    name: '小鲁班',
    work: 'A',
    attitude: 'A',
    potential: 'A',
    contribution: 'A',
    markCount: 'A',
  },
];


export default {
  name: 'AttitudeRank',
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>

<style scoped>

</style>
