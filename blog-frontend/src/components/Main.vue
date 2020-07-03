<template>
  <el-container class="main-container">
    <el-header>
      <el-menu
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div class="top-bar">
          <div class="logo">
            <el-image
              style="height: 45px; width: 50px;"
              :src="require('../assets/logo.png')"
              :lazy="true"
            ></el-image>
          </div>

          <div class="title">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
          </div>

          <div class="user">
            <i class="el-icon-s-custom" @click="userLogin"></i>
            <div v-if="isShow">
            <login></login>
            </div>
            <!-- <el-dialog
              title="登录"
              :visible.sync="dialogFormVisible"
              center
              :close-on-click-modal="false"
              width="20%"
            >
              <div class="login-container">
                <div class="login-box">
                  <el-form :model="loginForm" class="login-form" :rules="loninFormRules" ref="loginFormRef">
                    <el-form-item prop="username">
                      <el-input
                        type="text"
                        v-model="loginForm.username"
                        prefix-icon="el-icon-s-custom"
                        :style="formInputWidth"
                        placeholder="用户名"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                      <el-input
                        type="password"
                        v-model="loginForm.password"
                        prefix-icon="el-icon-lock"
                        :style="formInputWidth"
                        placeholder="密码"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="remember">
                        <el-checkbox >记住密码</el-checkbox>
                    </el-form-item>

                    <el-form-item class="btn">
                      <el-button type="primary" @click="submitForm('loginForm')" style="margin-right: 20px">登录</el-button>
                      <el-button @click="resetForm('loginForm')">忘记密码</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <div>
                <div class="signUp">注册</div>
              </div>
            </el-dialog> -->
          </div>
        </div>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside></el-aside>
      <el-main></el-main>
      <el-aside></el-aside>
    </el-container>
    <el-footer>
      <div class="foo">111</div>
    </el-footer>
  </el-container>
</template>

<script>
import Login from './Login';
export default {
  name: "Main",
  data() {
    return {
      dialogTableVisible: true,
      dialogFormVisible: true,
      isShow: false
      // formInputWidth: "200px",
      // loninFormRules:{

      // },
      // loginForm: {
      //   username: "",
      //   password: ""
      // },
    };
  },
  components: {
    Login
  },
  methods: {
    userLogin(){
      this.isShow = !this.isShow
    }
  }
};
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;
  background-color: green;
}

.el-header {
  padding: 0;

  .top-bar {
    display: flex;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      margin-left: 15px;
      .el-image {
        border-radius: 50%;
        background-color: #fff;
      }
    }
    .title {
      display: flex;
      justify-content: center;
    }
    .user {
      display: flex;
      align-items: center;
      margin-right: 15px;
      font-size: 25px;
      cursor: pointer;
      position: relative;

      // .login-box {
      //   display: flex;
      //   justify-content: center;
      // }
      // .btn {
      //   display: flex;
      //   justify-content: center;
      //   margin-top: 40px;
      //   margin-top: -20px;

      // }

      // .signUp {
      //   position: absolute;
      //   bottom: 20px;
      //   right: 20px;
      // }
    }
  }
  .el-menu {
    border: 0;
  }
}

.el-footer {
  background: #fff;
}
</style>