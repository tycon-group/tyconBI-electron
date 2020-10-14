<template>
  <div>
    <a-tree-select
        v-model="value"
        style="width: 100%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="treeData"
        placeholder="Please select"
        tree-default-expand-all
        :replace-fields="{ title: 'name', key: 'id', value: 'id', children: 'child' }"
    >
    </a-tree-select>
    <a-menu>
      <a-menu-item v-for="item in data1" :key="item.index" style="text-align: center">
        <span>{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
const treeData = [
  {
    name: '上海太江集团有限公司',
    id: 1,
    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/1',
    employees: [
      {
        name: '于坤',
        empID: 'A00076',
        url: 'https://tyconcps.cn:4399/hr/employees/A00076',
      },
      {
        name: '邵乃文',
        empID: 'A00001',
        url: 'https://tyconcps.cn:4399/hr/employees/A00001',
      },
      {
        name: '蒋玲玲',
        empID: 'A00134',
        url: 'https://tyconcps.cn:4399/hr/employees/A00134',
      },
    ],
    child: [
      {
        name: '上海太江信息科技有限公司',
        id: 2,
        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/2',
        employees: [],
        child: [
          {
            name: '总经办（太江科技 ）',
            id: 9,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/9',
            employees: [
              {
                name: '邵乃文',
                empID: 'A00001',
                url: 'https://tyconcps.cn:4399/hr/employees/A00001',
              },
            ],
            child: [
              {
                name: '信息科技拓展事业部',
                id: 47,
                url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/47',
                employees: [
                  {
                    name: '许波龙',
                    empID: 'D00005',
                    url: 'https://tyconcps.cn:4399/hr/employees/D00005',
                  },
                ],
                child: [
                  {
                    name: '信息化组',
                    id: 48,
                    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/48',
                    employees: [],
                    child: [],
                  },
                  {
                    name: '研发组',
                    id: 49,
                    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/49',
                    employees: [
                      {
                        name: '彭强强',
                        empID: 'D00999',
                        url: 'https://tyconcps.cn:4399/hr/employees/D00999',
                      },
                      {
                        name: '丁涯',
                        empID: 'D00121',
                        url: 'https://tyconcps.cn:4399/hr/employees/D00121',
                      },
                    ],
                    child: [],
                  },
                  {
                    name: 'IT组',
                    id: 50,
                    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/50',
                    employees: [],
                    child: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: '上海太江建设工程有限公司',
        id: 3,
        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/3',
        employees: [],
        child: [
          {
            name: '总裁办（太江建设）',
            id: 8,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/8',
            employees: [
              {
                name: '邵乃文',
                empID: 'A00001',
                url: 'https://tyconcps.cn:4399/hr/employees/A00001',
              },
            ],
            child: [
              {
                name: '总经办',
                id: 19,
                url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/19',
                employees: [],
                child: [
                  {
                    name: '成本+预算部',
                    id: 20,
                    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/20',
                    employees: [],
                    child: [],
                  },
                  {
                    name: '供应链管理部',
                    id: 21,
                    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/21',
                    employees: [],
                    child: [],
                  },
                  {
                    name: '安全部',
                    id: 22,
                    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/22',
                    employees: [],
                    child: [],
                  },
                  {
                    name: '技术部',
                    id: 23,
                    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/23',
                    employees: [],
                    child: [],
                  },
                  {
                    name: '质量部',
                    id: 24,
                    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/24',
                    employees: [],
                    child: [],
                  },
                  {
                    name: '工程部',
                    id: 25,
                    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/25',
                    employees: [],
                    child: [
                      {
                        name: '乍浦-乐歌项目部',
                        id: 26,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/26',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '津南-乐歌项目部',
                        id: 27,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/27',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '支塘-乐歌项目部',
                        id: 28,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/28',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '浏河-悦格项目部',
                        id: 29,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/29',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '拱墅-乐歌项目部',
                        id: 30,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/30',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '空港-乐歌项目部',
                        id: 31,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/31',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '无锡-乐歌项目部',
                        id: 32,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/32',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '杭州-大江东项目部',
                        id: 33,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/33',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '上海-蜂花项目部',
                        id: 34,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/34',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '金山-大新华项目部',
                        id: 35,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/35',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '常熟-飞煌项目部',
                        id: 36,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/36',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '杭州-宝龙项目部',
                        id: 37,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/37',
                        employees: [],
                        child: [],
                      },
                      {
                        name: '西安-明卓项目部',
                        id: 38,
                        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/38',
                        employees: [],
                        child: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: '上海太江文化发展有限公司',
        id: 4,
        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/4',
        employees: [],
        child: [
          {
            name: '总经办（太江文化）',
            id: 10,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/10',
            employees: [
              {
                name: '邵乃文',
                empID: 'A00001',
                url: 'https://tyconcps.cn:4399/hr/employees/A00001',
              },
            ],
            child: [],
          },
        ],
      },
      {
        name: '总裁办',
        id: 7,
        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/7',
        employees: [
          {
            name: '于坤',
            empID: 'A00076',
            url: 'https://tyconcps.cn:4399/hr/employees/A00076',
          },
          {
            name: '邵乃文',
            empID: 'A00001',
            url: 'https://tyconcps.cn:4399/hr/employees/A00001',
          },
        ],
        child: [
          {
            name: '合约部',
            id: 11,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/11',
            employees: [],
            child: [],
          },
          {
            name: '法务部',
            id: 12,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/12',
            employees: [],
            child: [],
          },
          {
            name: '投资部',
            id: 13,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/13',
            employees: [],
            child: [],
          },
          {
            name: '审计部',
            id: 14,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/14',
            employees: [],
            child: [],
          },
          {
            name: '财务部',
            id: 15,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/15',
            employees: [],
            child: [],
          },
          {
            name: '人事行政部',
            id: 16,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/16',
            employees: [
              {
                name: '蒋玲玲',
                empID: 'A00134',
                url: 'https://tyconcps.cn:4399/hr/employees/A00134',
              },
            ],
            child: [],
          },
          {
            name: '党支部',
            id: 17,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/17',
            employees: [],
            child: [],
          },
          {
            name: '商务部',
            id: 18,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/18',
            employees: [],
            child: [],
          },
        ],
      },
    ],
  },
  {
    name: '香港煌卓国际有限公司',
    id: 5,
    url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/5',
    employees: [
      {
        name: '于坤',
        empID: 'A00076',
        url: 'https://tyconcps.cn:4399/hr/employees/A00076',
      },
      {
        name: '邵乃文',
        empID: 'A00001',
        url: 'https://tyconcps.cn:4399/hr/employees/A00001',
      },
    ],
    child: [
      {
        name: '煌卓商务信息咨询（上海）有限公司',
        id: 6,
        url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/6',
        employees: [],
        child: [
          {
            name: '总裁办（煌卓商务）',
            id: 40,
            url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/40',
            employees: [],
            child: [
              {
                name: '煌卓工业',
                id: 39,
                url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/39',
                employees: [],
                child: [],
              },
              {
                name: '长三角区域',
                id: 41,
                url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/41',
                employees: [],
                child: [],
              },
              {
                name: '华南区域',
                id: 42,
                url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/42',
                employees: [],
                child: [],
              },
              {
                name: '华北、西北区域',
                id: 43,
                url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/43',
                employees: [],
                child: [],
              },
              {
                name: '开发部',
                id: 44,
                url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/44',
                employees: [],
                child: [],
              },
              {
                name: '物流招商部',
                id: 45,
                url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/45',
                employees: [],
                child: [],
              },
              {
                name: '公共关系事业部',
                id: 46,
                url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/46',
                employees: [],
                child: [],
              },
            ],
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
      data1: [],
    };
  },
  watch: {
    value(value) {
      console.log(value);
      this.data1 = this.value.aaa;
    },
  },
};
</script>