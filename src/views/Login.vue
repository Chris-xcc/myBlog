<template>
  <home>
    <div class="login">
      <div class="container">
        <div class="top">登录</div>
        <el-form :model="loginForm" ref="loginForm" status-icon>
          <el-form-item prop="username">
            <el-input
              type="text"
              v-model="loginForm.username"
              autocomplete="on"
              prefix-icon="el-icon-s-custom"
              placeholder="邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
            <el-button type="primary" @click="login('loginForm')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="bottom-box">
          <div class="right">
            <router-link to="register" tag="div">
              <div class="register">注册</div>
            </router-link>
            <!-- <span>|</span>
            <router-link to="forget" tag="div">
              <div class="forget">忘记密码</div>
            </router-link>-->
          </div>
        </div>
      </div>
    </div>
  </home>
</template>


<script>
import Home from "./Home";
import { SET_TOKEN } from "@/store/mutations-types";
import { GET_EMAIL } from "@/store/mutations-types";

export default {
  name: "Login",
  components: {
    Home,
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
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
            email: this.loginForm.username,
          });
          this.$axios
            .post("http://localhost:8000/login/", {username:this.loginForm.username,password:this.loginForm.password})
            .then((response) => {
              // this.Authorization = response.data.token;
              // console.log(this.token);
              window.localStorage.setItem(
                "token",
                "Token " + response.data.token
              );
              this.$store.commit({
                type: SET_TOKEN,
                token: "Token " + response.data.token,
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // console.log('reset');
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