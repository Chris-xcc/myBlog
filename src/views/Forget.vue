<template>
  <home>
    <div class="forget">
      <div class="container" v-if="!reset">
        <div class="top">忘记密码</div>
        <el-form :model="forgetForm" ref="forgetForm" status-icon>
          <el-form-item>
            <el-input
              type="text"
              v-model="forgetForm.email"
              autocomplete="on"
              prefix-icon="el-icon-message"
              placeholder="邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="forget()">确定</el-button>
          </el-form-item>
        </el-form>
        <div class="bottom-box">
          <div class="right">
            <router-link to="register" tag="div">
              <div class="register">注册</div>
            </router-link>
            <span>|</span>
            <router-link to="login" tag="div">
              <div class="login">登录</div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else class="container" style="text-align:center">{{message}}</div>
    </div>
  </home>
</template>


<script>
import Home from "./Home";
import { post } from "../api/services/instance";

export default {
  name: "Forget",
  components: {
    Home,
  },
  data() {
    return {
      forgetForm: {
        email: "",
      },
      reset: false,
      message: "",
    };
  },
  methods: {
    forget() {
      post({ url: "/password/", data: this.forgetForm })
        .then((response) => {
          this.reset = !this.reset;
          this.message = response.data;
          // console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      // this.$axios.get("users/1/")
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
};
</script>


<style lang="less" scoped>
@import url("@/assets/css/login/login.less");
</style>