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
    title: '日志时间',
    dataIndex: 'name',
    width: 80,
  },
  {
    title: '日志完成率',
    dataIndex: 'work',
    width: 80,
    sorter: (a, b) => a.work.localeCompare(b.work),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '日志评分率',
    dataIndex: 'attitude',
    width: 80,
    sorter: (a, b) => a.attitude.localeCompare(b.attitude),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '日志评论率',
    dataIndex: 'potential',
    width: 80,
    sorter: (a, b) => a.potential.localeCompare(b.potential),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '#',
    dataIndex: 'contribution',
    width: 80,
    sorter: (a, b) => a.contribution.localeCompare(b.contribution),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '#',
    dataIndex: 'law',
    width: 80,
    sorter: (a, b) => a.law.localeCompare(b.law),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '总评价',
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
    law: 'A',
    markCount: '5',
  },
  {
    key: '2',
    name: '李四',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    law: 'A',
    markCount: '3',
  },
  {
    key: '3',
    name: '王五',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    law: 'A',
    markCount: '2',
  },
  {
    key: '4',
    name: '刘大瘸子.能的要死',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    law: 'A',
    markCount: '4',
  },
  {
    key: '5',
    name: '张继科',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    law: 'A',
    markCount: '3',
  },
  {
    key: '6',
    name: '张飞',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    contribution: 'B',
    law: 'D',
    markCount: '3',
  },
  {
    key: '7',
    name: '李逵',
    work: 'C',
    attitude: 'B',
    potential: 'C',
    contribution: 'B',
    law: 'A',
    markCount: '3',
  },
  {
    key: '8',
    name: '小鲁班',
    work: 'A',
    attitude: 'A',
    potential: 'A',
    contribution: 'A',
    law: 'A',
    markCount: '5',
  },
];


export default {
  name: 'GroupRank',
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
