<template>
  <a-layout id="components-layout-demo-custom-trigger" class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="title_name">
        <span>太江数据分析系统</span>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>待办事项</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>所有评分</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>KPI分析</span>
        </a-menu-item>
      </a-menu>
      <div class="title_footer">
        <a-avatar :size="64" src="https://tyconstore-1302115199.cos.ap-shanghai.myqcloud.com/leo.jpg" alt="加载失败"/>
        <div class="user_name">摆鱼</div>
        <div class="company_name">上海太江信息科技有限公司</div>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
        <div class="certain-category-search-wrapper" style="width: 250px">
          <a-auto-complete
              class="certain-category-search"
              dropdown-class-name="certain-category-search-dropdown"
              :dropdown-match-select-width="false"
              :dropdown-style="{ width: '300px' }"
              size="large"
              style="width: 100%"
              placeholder="input here"
              option-label-prop="value"
          >
            <template slot="dataSource">
              <a-select-opt-group v-for="group in dataSource" :key="group.title">
          <span slot="label">
            {{ group.title }}
            <a
                style="float: right"
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >more
            </a>
          </span>
                <a-select-option v-for="opt in group.children" :key="opt.title" :value="opt.title">
                  {{ opt.title }}
                  <span class="certain-search-item-count">{{ opt.count }} people</span>
                </a-select-option>
              </a-select-opt-group>
              <a-select-option key="all" disabled class="show-all">
                <a
                    href="https://www.google.com/search?q=ant-design-vue"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  View all results
                </a>
              </a-select-option>
            </template>
            <a-input>
              <a-icon slot="suffix" type="search" class="certain-category-icon" />
            </a-input>
          </a-auto-complete>
        </div>
      </a-layout-header>
      <div class="mid_content">
        <div class="meun_mid">
          <a-menu mode="inline" :default-selected-keys="['1']">
            <a-menu-item key="1">
              <span>丁涯_研发组_2020年08月03日（星期一）工作汇报</span>
            </a-menu-item>
            <a-menu-item key="2">
              <span>丁涯_研发组_2020年08月02日（星期日）工作汇报</span>
            </a-menu-item>
            <a-menu-item key="3">
              <span>丁涯_研发组_2020年08月01日（星期六）工作汇报</span>
            </a-menu-item>
          </a-menu>
        </div>

        <a-layout-content class="content">
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

        </a-layout-content>
        <a-layout-content class="mark_submit">
          <div class="cont">
            <div class="cont_left">
              <span>评分：</span>
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
      </div>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
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
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
  background-color: red;
}

.title_name {
  font-family: "Adobe Caslon Pro Bold",serif;
  font-size: 20px;
  height: 32px;
  margin: 16px;
  color: #ffffff;
}

.layout {
  width: 100%;
  height: 100%;
}

.title_footer {
  height: 80px;
  margin: 25px;
  font-size: 12px;
  color: #888888;
  position:fixed;
  bottom:0;
}


.user_name {
  width: 100%;
  height: 10px;
  color: azure;
  font-size: 15px;
}

.company_name {
  width: 100%;
  margin-top: 10px;
  height: 10px;
}


.mid_content {
  width: 100%;
  height: 100%;
}

.meun_mid {
  width: 30%;
  min-height: 90%;
  float: left;
  background: #ffffff;
  margin: 24px 16px;
  padding: 24px;
}

.content {
  width: 60%;
  margin: 24px 16px;
  padding: 24px;
  background: #ffffff;
  min-Height: 40%;
  float: left;
}
.mark_submit {
  width: 60%;
  min-Height: 40%;
  margin: 20px 16px;
  padding: 24px;
  background: #ffffff;
  float: left;
}

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

.footer_btn {
  width: 100%;
  float: left;
  margin-top: 10px;
  margin-right: 10px;
  text-align: right;
}
</style>

