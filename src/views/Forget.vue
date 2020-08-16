<template>
  <home>
    <div class="forget">
      <div class="container">
        <div class="top">忘记密码</div>

        <el-form :model="forgetForm" ref="forgetFormRef" status-icon>
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
            <el-button type="primary" @click="forget('forgetFormRef')">确定</el-button>
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
    </div>
  </home>
</template>


<script>
import Home from "./Home";
import { post } from "@/api/services/instance";
import { SET_TOKEN } from "@/store/mutations-types";

export default {
  name: "Forget",
  components: {
    Home,
  },
  data() {
    return {
      forgetForm: {
        email: "admin@163.com",
      },
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          post({ url: "login/", data: this.forgetForm })
            .then((response) => {
              // this.Authorization = response.data.token;
              // console.log(this.token);
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
  .login {
    cursor: pointer;
  }
}
</style>