<template>
  <a-descriptions bordered>
    <a-descriptions-item label="撰写时间" span=3>
      <span>2020/08/03 17:35</span>
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
      <span>无</span>
    </a-descriptions-item>
    <a-descriptions-item label="工作小结" span=3>
      <span>无</span>
    </a-descriptions-item>
    <a-descriptions-item label="评阅记录" span=3>
      <div class="cont_right_up">
        <div class="cont_right_up_left">
          <span>Dylan（许波龙）总经办（太江科技）</span>
        </div>
        <div class="cont_right_up_right">
          <span>2020-08-04 09:31</span>
        </div>
      </div>

      <div class="cont_right_down">
        <span>自主开发，需要考量个人KPI+项目OKR的结合模式，重新整理出整合方案；借助今目标，需考量今目标数据权限等问题。</span>
      </div>
    </a-descriptions-item>
  </a-descriptions>
</template>

<script>
export default {
  name: 'ContentsUp',
};
</script>

<style>
.cont_right_up {
  width: 100%;
  font-size: 12px;
}
.cont_right_up_left {
  width: 55%;
  float: left;
}
.cont_right_up_right {
  width: 40%;
  float: left;
  text-align: right;
}

.cont_right_down {
  width: 100%;
  float: left;
}
</style>
