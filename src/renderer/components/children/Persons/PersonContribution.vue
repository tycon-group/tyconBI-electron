<template>
  <div class="total">
    <div class="contributionDetailed">
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
// import Bus from '../../path/bus';

export default {
  name: 'PersonWork',
  data() {
    return {
      itemUrl: [],
      datas: [
        {
          key: '1',
          name: '张三',
          time: '2019-05-10',
          info: '签下10W大单，创下本公司单笔订单记录。',
        },
        {
          key: '2',
          name: '张三',
          time: '2019-12-10',
          info: '签下50W大单，创下本公司单笔订单记录。',
        },
        {
          key: '3',
          name: '张三',
          time: '2020-03-10',
          info: '签下200W大单，创下本公司单笔订单记录。',
        },
        {
          key: '4',
          name: '张三',
          time: '2020-08-08',
          info: '将竞争对手的重要客户挖过来了。',
        },
        {
          key: '5',
          name: '张三',
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
  // created() {
  //   const vm = this;
  //   // 用$on事件来接收参数
  //   Bus.$on('itemUrl', (data) => {
  //     vm.itemUrl = data;
  //     console.log(this.itemUrl, '测试'); // 这里取到了被点击的列表所对应的人员的信息链接
  //     const url = this.itemUrl;
  //     this.$http.get(url)
  //       .then((res) => {
  //         // eslint-disable-next-line no-plusplus
  //         for (let i = 0; i <= this.datas.length; i++) {
  //           console.log(this.datas[i], '第一次');
  //           this.datas[i].name = res.data.name;
  //           console.log(res.data, 'dsadasdasdas第二次dasdasdada ', this.datas[i]);
  //         }
  //       }).catch((error) => {
  //         console.log(error);
  //       });
  //   });
  // },
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
