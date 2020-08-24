<template>
  <home>
    <div class="forget">
      <div class="container">
        <div class="top">忘记密码</div>

        <el-form :model="forgetForm" ref="forgetFormRef" status-icon>
          <el-form-item>
            <el-input
              type="text"
              v-model="forgetForm.username"
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
    </div>
  </home>
</template>


<script>
import Home from "./Home";

export default {
  name: "Forget",
  components: {
    Home,
  },
  data() {
    return {
      forgetForm: {
        username: "test@163.com",

      },
    };
  },
  methods: {
    forget() {
     console.log(this.forgetForm.username);
      this.$axios.patch( "http://127.0.0.1:8000/reset_password/", {"username": this.forgetForm.username} )

            .then((response) => {
              console.log(response);
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
        }


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