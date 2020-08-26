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
    dataIndex: 'dataTimes',
    width: 80,
    sorter: (a, b) => a.dataTimes.localeCompare(b.dataTimes),
    sortDirections: ['descend', 'ascend'],
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
    title: '总评价',
    dataIndex: 'markCount',
    width: 80,
    sorter: (a, b) => a.markCount - b.markCount,
    defaultSortOrder: 'descend',
    sortDirections: ['descend', 'ascend'],
  },
];

const data = [
  {
    key: '1',
    dataTimes: '2020/01/10',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    markCount: '5',
  },
  {
    key: '2',
    dataTimes: '2020/01/09',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    markCount: '3',
  },
  {
    key: '3',
    dataTimes: '2020/01/08',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    markCount: '2',
  },
  {
    key: '4',
    dataTimes: '2020/01/06',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    markCount: '4',
  },
  {
    key: '5',
    dataTimes: '2020/01/04',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    markCount: '3',
  },
  {
    key: '6',
    dataTimes: '2020/01/03',
    work: 'A',
    attitude: 'B',
    potential: 'A',
    markCount: '3',
  },
  {
    key: '7',
    dataTimes: '2020/01/02',
    work: 'C',
    attitude: 'B',
    potential: 'C',
    markCount: '3',
  },
  {
    key: '8',
    dataTimes: '2020/01/01',
    work: 'A',
    attitude: 'A',
    potential: 'A',
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
