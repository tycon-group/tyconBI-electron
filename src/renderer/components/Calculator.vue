<template>
  <a-locale-provider :locale="locale">
    <div>
      <a-layout id="components-layout-demo-top-side">
        <a-layout-header class="header">

          <a-menu
              theme="dark"
              mode="horizontal"
              :defaultSelectedKeys="defaultSelectedKeys"
              class="top-menu"
              @click="handleMenuClick"
              :key="headerKey"
          >
            <!-- 默认key值一定要与url路径xxx/key/xxxx相同 -->
            <a-menu-item key="home">首页</a-menu-item>
            <a-menu-item key="cd">持续交付</a-menu-item>
            <a-menu-item key="apitest">接口测试</a-menu-item>
            <a-menu-item key="perftest">性能测试</a-menu-item>
            <a-menu-item key="toolset">工具集</a-menu-item>
            <a-menu-item key="resume">我的简历</a-menu-item>
            <!--<a-menu-item key="uitest">UI自动化</a-menu-item>
            <a-menu-item key="CODESCAN">源码扫描</a-menu-item>
            <a-menu-item key="SECTEST">安全测试</a-menu-item>-->
          </a-menu>
          <span class="top-right">
                        <a-icon type="bell" class="top-bell" />
                        <a-icon type="user" class="top-user" />
                        <span class="top-login">
                            <!-- todo 1:接入用户中心 -->
                          <!-- todo 2:登陆了显示登陆人名字，否则显示登陆按钮 -->
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link" href>
                                    <!--xxx-->
                                    <a-icon type="down" />
                                </a>
                                <a-menu slot="overlay">
                                    <a-menu-item key="0">
                                        <a href>登陆</a>
                                    </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </span>
                    </span>
        </a-layout-header>
      </a-layout>
      <div>
        <router-view />
      </div>

    </div>

  </a-locale-provider>

</template>

<script>

</script>

<style>

.top-menu {
  line-height: 63px;
  position: absolute;
  left: 20px;
}
.top-right {
  position: absolute;
  right: 50px;

}
.top-bell {
  font-size: 20px;
  vertical-align: middle;
}
.top-user {
  font-size: 20px;
  vertical-align: middle;
  margin-left: 10px;
}
.top-login {
  font-size: 14px;
  margin-left: 10px;
}
.header {
  width: 100%;
}
</style>
