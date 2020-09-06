<template>
  <home>
    <div class="register">
      <div class="container" v-if="!newuser">
        <div class="top">注册</div>
        <el-form :model="registerForm" ref="registerForm" status-icon>
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
            <el-button type="primary" @click="register()" style="width:100%">注册</el-button>
          </el-form-item>
        </el-form>
        <div class="bottom-box">
          <div class="right">
            <!-- <router-link to="email_active" tag="div">
              <div class="active">激活</div>
            </router-link>
            <span>|</span> -->
            <router-link to="login" tag="div">
              <div class="login">登录</div>
            </router-link>
            <span>|</span>
             <router-link to="forget" tag="div">
              <div class="forget">忘记密码</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="container" style="text-align:center" v-else>{{message}}</div>
    </div>
  </home>
</template>

<script>
import Home from "./Home";
import { post } from "../api/services/instance";

export default {
  name: "Register",
  components: {
    Home,
  },
  data() {
    return {
      registerForm: {
        email: "",
        username: "",
        password: "",
        check_password: "",
      },
      newuser: false,
      message: "",
    };
  },
  methods: {
    register() {
      post({ url: "/users/", data: this.registerForm })
        .then((response) => {
          this.newuser = !this.newuser;
          this.message = response.data;
          console.log(response);
          // alert("登陆成功");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("@/assets/css/login/login.less");
</style>
