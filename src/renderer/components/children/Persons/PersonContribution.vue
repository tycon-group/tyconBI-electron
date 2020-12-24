<template>
  <div class="total">
    <div class="contributionDetailed">
      <a-table
        :columns="columns"
        :data-source="data"
        @change="onChange"
        :pagination="{ pageSize: 3 }"
        :scroll="{ y: 240 }"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonWork',
  data() {
    return {
      data: [
        {
          key: '1',
          name: '小龙',
          time: '2019-05-10',
          info: '签下10W大单，创下本公司单笔订单记录。',
        },
        {
          key: '2',
          name: '小龙',
          time: '2019-12-10',
          info: '签下50W大单，创下本公司单笔订单记录。',
        },
        {
          key: '3',
          name: '小龙',
          time: '2020-03-10',
          info: '签下200W大单，创下本公司单笔订单记录。',
        },
        {
          key: '4',
          name: '小龙',
          time: '2020-08-08',
          info: '将竞争对手的重要客户挖过来了。',
        },
        {
          key: '5',
          name: '小龙',
          time: '2020-12-10',
          info: '成功与菊厂达成战略合作伙伴关系。',
        },
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '时间',
          dataIndex: 'time',
          defaultSortOrder: 'descend',
          // eslint-disable-next-line no-undef
          sorter: (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
        },
        {
          title: '事件简介',
          dataIndex: 'info',
          sorter: (a, b) => a.info.length - b.info.length,
          sortDirections: ['descend', 'ascend'],
        },
      ],
    };
  },
  methods: {
    onChange(pagination, sorter) {
      console.log('params', pagination, sorter);
    },
  },
};

</script>

<style>
.total {
  width: 100%;
  height: 100%;
}

.contributionDetailed {
  margin-top: 18px;
  width: 100%;
  height: 95%;
}

</style>
