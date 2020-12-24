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
import Bus from '../../path/bus';

export default {
  name: 'PersonWork',
  data() {
    return {
      test_name: '',
      data: [
        {
          key: '1',
          name: this.test_name,
          time: '2019-05-10',
          info: '签下10W大单，创下本公司单笔订单记录。',
        },
        {
          key: '2',
          name: this.test_name,
          time: '2019-12-10',
          info: '签下50W大单，创下本公司单笔订单记录。',
        },
        {
          key: '3',
          name: this.test_name,
          time: '2020-03-10',
          info: '签下200W大单，创下本公司单笔订单记录。',
        },
        {
          key: '4',
          name: this.test_name,
          time: '2020-08-08',
          info: '将竞争对手的重要客户挖过来了。',
        },
        {
          key: '5',
          name: this.test_name,
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
  beforeCreate() {
    // 此时测试，直接调用其他地方的被查看人员姓名，后期需要写专属api，获取数据
    // 接收被查看人的信息，姓名
    Bus.$on('test_name', (data) => {
      const vm = this;
      vm.test_name = data;
      console.log(this.test_name, '被查看人员姓名'); // 这里取到了被点击的列表所对应的人员的信息链接
    });
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
