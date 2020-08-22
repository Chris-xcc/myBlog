<template>
  <home>
    <div class="login">
      <div class="container">
        <div class="top">登录</div>
        <el-form :model="loginForm" ref="loginFormRef" status-icon>
          <el-form-item>
            <el-input
              type="text"
              v-model="loginForm.username"
              autocomplete="on"
              prefix-icon="el-icon-s-custom"
              placeholder="邮箱"
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
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('loginFormRef')">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="bottom-box">
          <div class="right">
            <router-link to="register" tag="div">
              <div class="register">注册</div>
            </router-link>
            <span>|</span>
            <router-link to="forget" tag="div">
              <div class="forget">忘记密码</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </home>
</template>


<script>
import Home from "./Home";
import { post } from "@/api/services/instance";
import { SET_TOKEN } from "@/store/mutations-types";
import {GET_EMAIL} from "../store/mutations-types";

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
          window.localStorage.setItem("email", this.loginForm.username);
          this.$store.commit({
                type: GET_EMAIL,
                email: this.loginForm.username
              });
              
          post({ url: "login/", data: this.loginForm })
            .then((response) => {
              // this.Authorization = response.data.token;
              // console.log(this.token);
              window.localStorage.setItem("token", "Token " + response.token);
              // console.log(response);
              this.$store.commit({
                type: SET_TOKEN,
                token: "Token " + response.token,
              });
              this.$router.push("/");
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
@import url("@/assets/css/login/login.less");

.el-button {
  width: 100%;
}
.bottom-box {
  span {
    margin: auto 5px;
  }
  .register,
  .forget {
    cursor: pointer;
  }
}
</style>