<template>
  <div class="contets">
    <div class="cont">
      <div class="cont_left">
        <span>撰写时间：</span>
      </div>
      <div class="cont_right">
        <span>2020/08/03 17:35</span>
      </div>
    </div>

    <div class="cont">
      <div class="cont_left">
        <span>日计划：</span>
      </div>
      <div class="cont_right">
        <span>《隐私条款》</span><br/>
        <span>设计UI交互</span>
      </div>
    </div>

    <div class="cont">
      <div class="cont_left">
        <span>工作记录：</span>
      </div>
      <div class="cont_right">
        <span>无</span>
      </div>
    </div>

    <div class="cont">
      <div class="cont_left">
        <span>工作小结：</span>
      </div>
      <div class="cont_right">
        <span>无</span>
      </div>
    </div>

    <div class="cont">
      <div class="cont_left">
        <span>评阅记录：</span>
      </div>
      <div class="cont_right">
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
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContentsUp',
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
.cont_right_up {
  width: 100%;

}
.cont_right_up_left {
  width: 55%;
  float: left;
  font-size: 12px;
}
.cont_right_up_right {
  width: 40%;
  float: left;

  text-align: right;
  font-size: 12px;
}

.cont_right_down {
  width: 100%;
  float: left;
}
</style>
