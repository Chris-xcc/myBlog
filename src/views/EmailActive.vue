<template>
  <home>
    <div class="email-active">
      <div class="container" v-if="!email">
        <div class="top">账号激活</div>
        <el-form :model="EmailForm" ref="EmailForm" status-icon>
          <el-form-item>
            <el-input
              type="text"
              v-model="EmailForm.email"
              autocomplete="on"
              prefix-icon="el-icon-message"
              placeholder="邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="emailActive()">确定</el-button>
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
  name: "EmailActive",
  components: {
    Home,
  },
  data() {
    return {
      EmailForm: {
        email: "1486316634@qq.com",
      },
      email: false,
      message: "",
    };
  },
  methods: {
    emailActive() {
      post({ url: "/email_active/", data: this.EmailForm })
        .then((response) => {
          this.email = !this.email;
          this.message = response.data;
          // console.log(response);
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