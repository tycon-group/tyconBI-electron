<template>
  <div class="login-form">
    <div>
      <img class="logo_img" src="../assets/tycon.png" />
    </div>
    <a-form-model
        id="components-form-demo-normal-login"
        :model="forms"
    >
      <a-form-model-item>
        <a-input
            placeholder="Username"
            v-model='forms.userName'
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input
            type="password"
            placeholder="Password"
            v-model='forms.password'
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-checkbox
            v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          Remember me
        </a-checkbox>
        <a class="login-form-forgot" href="#">
          Forgot password
        </a>
        <a-button type="primary" html-type="submit" class="login-form-button" @click="handleSubmit(user)">
          Log in
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: {
        userName: '',
        password: '',
      },
      user: '',
    };
  },
  methods: {
    handleSubmit(user) {
      const param = new URLSearchParams();
      param.append('username', this.forms.userName);
      param.append('password', this.forms.password);
      const instance = this.$http.create({ headers: { 'content-type': 'application/x-www-form-urlencoded' } });
      instance.post('https://tyconcps.cn:8888/auth-token/', param).then((response) => {
        console.log(response);
        this.$message.success('登录成功');
        const data1 = response.data;
        const Store = require('electron-store');
        const store = new Store();
        store.set('my_token', data1.token);
        store.set('user', this.forms.userName);
        user = store.get('user');
        console.log(user);
        console.log(data1.token);
        if (store.get('my_token')) {
          this.$router.push({ name: 'home', query: { user: this.forms.userName } });
        } else {
          this.$router.replace('/');
        }
      }).catch((error) => {
        console.log(error);
        this.$message.error('账号或密码错误');
      });
    },
  },
};
</script>

<style scoped>
.logo_img {
  width: 160px;
  padding: 14px;
  margin-top: -20px;
}
.login-form {
  width: 300px;
  margin:50px auto;

}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
