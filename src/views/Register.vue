<template>
  <home>
    <div class="register">
      <div class="container">
        <div class="top">注册</div>

        <el-form :model="registerForm" ref="registerFormRef" status-icon>
          <el-form-item>
            <el-input
              type="text"
              v-model="registerForm.email"
              autocomplete="on"
              prefix-icon="el-icon-message"
              placeholder="邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="text"
              v-model="registerForm.username"
              autocomplete="on"
              prefix-icon="el-icon-s-custom"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="registerForm.password"
              autocomplete="off"
              prefix-icon="el-icon-lock"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="registerForm.check_password"
              autocomplete="off"
              prefix-icon="el-icon-key"
              placeholder="确认密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register('registerFormRef')" style="width:100%">注册</el-button>
          </el-form-item>
        </el-form>
        <div class="bottom-box">
          <div class="right">
            <router-link to="login" tag="div">
              <div class="login">登录</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </home>
</template>

<script>
import Home from "./Home";
export default {
  name: "Register",
  components: {
    Home,
  },
  data() {
    return {
      registerForm: {
        email: "test@163.com",
        username: "test",
        password: "test",
        check_password: "test",
      },
    };
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("users/", this.registerForm)
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("@/assets/css/login/login.less");

.login {
  cursor: pointer;
}
</style>