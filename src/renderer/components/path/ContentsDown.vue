<template>
  <a-layout-content class="mark_submit_home">
    <div class="cont">
      <div class="cont_left">
        <span>评分:</span>
      </div>
      <div class="cont_right">
              <span>
                <a-rate v-model="mark_value" :tooltips="desc" />
                <span class="ant-rate-text">{{ desc[mark_value - 1] }}</span>
              </span>
      </div>
    </div>

    <div class="cont">
      <div class="cont_left">
        <span>备注：</span>
      </div>
      <div class="cont_right">
        <a-textarea
            v-model="textarea_value"
            placeholder="评分不为3分，则必须写明理由！"
            :auto-size="{ minRows: 6, maxRows: 12, }"
        />
      </div>
    </div>
    <div class="footer_btn">
      <a-button :disabled="mark_value !== 3 && textarea_value === ''" @click="submitOneTime">提交</a-button>
      <a-button :disabled="mark_value !== 3 && textarea_value === ''" @click="submitOneByOne" type="primary">
        提交,并审阅下一个
      </a-button>

    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: 'ContentsDown',
  props: ['keyID', 'type1'],
  data() {
    return {
      visible: false,
      collapsed: false,
      username: '',
      mark_value: 3,
      type1s: '',
      textarea_value: '',
      desc: ['1分', '2分', '3分', '4分', '5分'],
    };
  },
  created() {
    const Store = require('electron-store');
    const store = new Store();
    const empID = store.get('empID');
    this.username = store.get('user');
    console.log(empID);
  },
  methods: {
    // 提交函数
    submitOneTime() {
      console.log('提交数据~', this.type1);
      if (this.type1 === 'direct') {
        this.type1s = '直属评分';
      } else {
        this.type1s = '跨级评分';
      }
      console.log(this.type1s);
      console.log(this.keyID, '这是本日志ID'); // 通过props传的值
      // 此处开始post评分
      const Store = require('electron-store');
      const store = new Store();
      console.log(store.get('my_token'), '这是token'); // 查看一下token
      const param = new URLSearchParams();
      param.append('worklog', this.keyID);
      param.append('type', this.type1s);
      param.append('score', this.mark_value);
      param.append('remarks', this.textarea_value);
      param.append('author', this.username);
      const tokens = `JWT ${store.get('my_token')}`;
      const instance = this.$http.create({ headers: { 'content-type': 'application/x-www-form-urlencoded', Authorization: tokens } });
      instance.post('https://tyconcps.cn:4399/wl/scores/', param).then((response) => {
        console.log(response);
        this.$message.success('提交成功');
        const param2 = new URLSearchParams();
        param2.append('is_scored', true);
        instance.patch(`https://tyconcps.cn:4399/wl/worklogs/${this.keyID}`, param2).then((res) => {
          console.log(res);
          this.visible = false; // 关闭抽屉
        }).catch((err) => {
          console.log(err);
          this.$message.error('修改失败，请重试！');
        });
      }).catch((error) => {
        console.log(error);
        this.$message.error('提交失败，请重试！');
      });
    },
    // 打开下一条函数
    nextOne() {
      console.log('此处打开下一条');
    },
    // 提交并打开下一条
    submitOneByOne() {
      this.submitOneTime();
      this.nextOne();
    },
  },
};
</script>

<style>
.cont {
  width: 100%;
  height: auto;
}

.cont_left {
  width: 20%;
  float: left;

}

.cont_right {
  width: 80%;
  float: left;

}

.footer_btn {
  width: 100%;
  float: left;
  margin-top: 10px;
  margin-right: 10px;
  text-align: right;
}

.mark_submit_home {
  width: 100%;
  min-Height: 40%;
  margin-top: 20px;
  padding: 24px;
  background: #f4f4f4;
  float: left;
}
</style>
