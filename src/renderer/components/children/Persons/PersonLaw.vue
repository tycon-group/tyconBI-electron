<template>
  <div class="total">
    <div class="law_table">
      <a-table
          :columns="columns"
          :data-source="datas"
          @change="onChange"
          :pagination="{ pageSize: 3 }"
          :scroll="{ y: 240 }"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonLaw',
  data() {
    return {
      datas: [
        {
          key: '1',
          name: '李四',
          time: '2019-05-10',
          info: '路上见义勇为，扶摔倒的老奶奶。',
        },
        {
          key: '2',
          name: '李四',
          time: '2020-12-10',
          info: '虚报款项，让公司损失数万元。',
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

.law_table {
  margin-top: 18px;
  width: 100%;
  height: 95%;
}

</style>
