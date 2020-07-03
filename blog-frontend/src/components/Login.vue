<template>
  <el-dialog
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
            <el-checkbox>记住密码</el-checkbox>
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
  </el-dialog>
</template>



<script>
export default {
  name: "Login",
  props: {
    
  },
  data() {
    return {
      dialogTableVisible: true,
      dialogFormVisible: true,
      formInputWidth: "200px",
      loninFormRules: {},
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    
  }
};
</script>


<style lang="less" scoped>
.login-box {
  display: flex;
  justify-content: center;
}
.btn {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-top: -20px;
}

.signUp {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>