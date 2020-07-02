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
            <img src="../assets/logo.png" alt />
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
            <el-button type="primary">登录</el-button>
            <el-button type="primary">注册</el-button>
            <!-- <el-button type="primary">退出</el-button> -->
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
export default {
  name: "Main",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
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
       margin-left: 10px;
      img {
        height: 45px;
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
      margin-right: 10px;
    }
  }
  .el-menu {
    border: 0;
  }
}
.el-footer{
  background: #fff;
}
</style>