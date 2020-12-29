<template>
  <div class="total">
    <div class="contributionDetailed">
      <a-table
        :columns="columns"
        :data-source="datas"
        @change="onChange"
        :pagination="{ pageSize: 3 }"
        :scroll="{ y: 280 }"/>
    </div>
  </div>
</template>

<script>
// import Bus from '../../path/bus';

export default {
  name: 'PersonWork',
  data() {
    return {
      datas: [],
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
          title: '颁发单位',
          dataIndex: 'dept',
          sorter: (a, b) => a.dept.length - b.dept.length,
          sortDirections: ['descend', 'ascend'],
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
  mounted() {
    setTimeout(() => {
      this.datas = this.$route.params.contributionPER;
      console.log(this.datas, 'tuchugongxian ');
    }, 200);
  },
};

</script>

<style scoped>
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
