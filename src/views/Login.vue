<template>
  <home>
    <el-form :model="loginForm" ref="loginFormRef" status-icon label-width="100px">
      <el-form-item>
        <el-input
          type="text"
          v-model="loginForm.username"
          autocomplete="on"
          prefix-icon="el-icon-s-custom"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
          prefix-icon="el-icon-lock"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item>
        <el-checkbox v-model="loginForm.remember" @click="getRemember">记住密码</el-checkbox>
      </el-form-item>-->

      <el-form-item>
        <el-button type="primary" @click="login('loginFormRef')">登录</el-button>
        <el-button @click="resetForm('loginFormRef')">重置</el-button>
      </el-form-item>
    </el-form>
    <router-link to="register" tag="div">
      <div class="register">注册</div>
    </router-link>
  </home>
</template>



<script>
import Home from "./Home";
export default {
  name: "Login",
  components: {
    Home,
  },
  data() {
    return {
      loginForm: {
        username: "admin@163.com",
        password: "admin",
        // remember: false,
      },
    };
  },
  methods: {
    getRemember() {
      this.remember = !this.remember;
    },
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("login/",this.loginForm )
            .then((response) => {
              // console.log(response.data.token);
              // userToken = "Bearer " + response.data.token;
              // console.log(_this.userToken);
              // 将用户token保存到vuex中
              // _this.changeLogin({ Authorization: _this.userToken });
              alert("登陆成功");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>


 <style lang="less" scoped>
</style>