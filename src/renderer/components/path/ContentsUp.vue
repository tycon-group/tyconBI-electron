<template>
  <a-descriptions bordered>
    <a-descriptions-item label="撰写时间" span=3>
      <span>{{ write_time }}</span>
    </a-descriptions-item>
    <a-descriptions-item label="日计划" span=3>
      <a-tag color="green">已完成</a-tag>
      <span>《隐私条款》</span>
      <br/>
      <a-tag color="red">未完成</a-tag>
      <span>设计UI交互</span>
      <br/>
    </a-descriptions-item>
    <a-descriptions-item label="工作记录" span=3>
      <span v-for="item in work_records" :key="item.index">{{ item.data }}</span>
    </a-descriptions-item>
    <a-descriptions-item label="工作小结" span=3>
      <span>{{ work_summary }}</span>
    </a-descriptions-item>
    <a-descriptions-item label="评阅记录" span=3>
      <div class="cont_right_up" v-for="com in comments" :key="com.index">
        <div class="cont_right_up_left">
          <span>{{ com.commentator }}</span>
        </div>
        <div class="cont_right_up_right">
          <span>{{ com.comment_time}}</span>
        </div>
        <div class="cont_right_down">
          <span>{{ com.content }}</span>
        </div>
      </div>

    </a-descriptions-item>
  </a-descriptions>
</template>

<script>
export default {
  name: 'ContentsUp',
  props: ['keyItem'],
  data() {
    return {
      comments: [],
      daily_plan: {
        done: [],
        undone: [],
      },
      work_records: [],
      work_summary: '',
      write_time: '',
    };
  },
  methods: {
    clickData() {
      setTimeout(() => {
        console.log(this.keyItem);
        const keyItems = this.keyItem;
        const url = `http://tyconcps.cn:4399/wl/worklogs/${keyItems}/`;
        this.$http.get(url)
          .then((res) => {
            console.log(res.data.data);
            console.log(res.data.data.work_records);
            const datas = res.data.data;
            this.write_time = datas.write_time;
            this.work_summary = datas.work_summary;
            this.work_records = datas.work_records;
            this.comments = datas.comments;
          })
          .catch((error) => {
            console.log(error);
          });
      }, 200);
    },
  },
  mounted() {
    this.clickData();
  },
};
</script>

<style>
.cont_right_up {
  width: 100%;
  font-size: 12px;
}
.cont_right_up_left {
  width: 55%;
  height: 20px;
  background-color: #DDFFDD;
  float: left;
}
.cont_right_up_right {
  width: 40%;
  height: 20px;
  background-color: #DDFFDD;
  float: left;
  text-align: right;
}

.cont_right_down {
  width: 100%;
  float: left;
  font-weight: bold;
}
</style>
