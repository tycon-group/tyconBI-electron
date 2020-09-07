<template>
  <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
      :model="forms"
  >
    <a-form-item>
      <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }], initialValue: forms.userName, },
        ]"
          placeholder="Username"
          this.form.setFieldsValue='forms.userName'
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }], initialValue: forms.password, },
        ]"
          type="password"
          placeholder="Password"
          this.form.setFieldsValue='forms.password'
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
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
      <a-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      Or
      <a href="#">
        register now!
      </a>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      forms: {
        userName: '',
        password: '',
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'admin', password: '123456' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          console.log(this.form.getFieldValue('userName'));
          if (this.form.getFieldValue('userName') === 'admin' && this.form.getFieldValue('password') === '123456') {
            this.$message.success('登陆成功');
            this.$router.push({ path: '/home' });
          } else {
            this.$message.error('登陆失败');
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin:0 auto;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
