<template>
  <a-descriptions bordered>
    <a-descriptions-item label="撰写时间" span=3>
      <span>{{ write_time }}</span>
    </a-descriptions-item>
    <a-descriptions-item label="日计划" span=3>
      <div v-for="done in daily_plan.done" :key="done.index">
        <a-tag color="green" v-show="done !== ''">已完成</a-tag>
        <span>{{ done }}</span>
        <br/>
      </div>
      <div v-for="undone in daily_plan.undone" :key="undone.index">
        <a-tag color="red" v-show="undone !== ''">未完成</a-tag>
        <span>{{ undone }}</span>
        <br/>
      </div>
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
import Bus from './bus.js';
export default {
  name: 'ContentsUp',
  props: ['keyItemUrl'],
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
      mark_show: [],
    };
  },
  methods: {
    clickData() {
      setTimeout(() => {
        console.log(this.keyItemUrl);
        // const keyItems = this.keyItem;
        // const url = `http://tyconcps.cn:4399/wl/worklogs/${keyItems}/`;
        const url = this.keyItemUrl;
        this.$http.get(url)
          .then((res) => {
            console.log(res.data.scores);
            const datas = res.data.data;
            this.write_time = datas.write_time;
            this.work_summary = datas.work_summary;
            this.work_records = datas.work_records;
            this.comments = datas.comments;
            this.daily_plan = datas.daily_plan;
            this.mark_show = res.data.scores;
            Bus.$emit('mark_show', this.mark_show);
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
