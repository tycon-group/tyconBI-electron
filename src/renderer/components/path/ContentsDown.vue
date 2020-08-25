<template>
  <a-layout-content class="mark_submit">
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
            v-model="value"
            placeholder="评分不为3分，则必须写明理由！"
            :auto-size="{ minRows: 6, maxRows: 12, }"
        />
      </div>
    </div>
    <div class="footer_btn">
      <a-button>提交</a-button>
      <a-button type="primary">
        提交,并审阅下一个
      </a-button>

    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: 'ContentsDown',
  data() {
    return {
      collapsed: false,
      mark_value: 3,
      value: '',
      desc: ['1分', '2分', '3分', '4分', '5分'],
    };
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
</style>
