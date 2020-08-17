<template>
  <div class="header">
    <div class="container">
      <router-link to="/" tag="i" class="logo">Chris Blog</router-link>
      <el-menu
        :default-active="activeIndex2"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="category">分类</el-menu-item>
        <el-menu-item index="tag">标签</el-menu-item>
        <!-- <el-menu-item index="archives">归档</el-menu-item> -->
        <el-menu-item index="about">关于</el-menu-item>
      </el-menu>
      <div class="left-bar">
        <router-link to="login" tag="div" class="login" v-if="!$store.state.token">
          <i class="el-icon-s-custom"></i>
        </router-link>
        <router-link to tag="div" class="user" v-else>
          <div class="username">admin</div>
          <router-link to="/" tag="div" class="logout-bar">
            <router-link to="/user" tag="div">
              <div class="user-info">个人中心</div>
            </router-link>
            <div class="logout" @click="logout">退出</div>
          </router-link>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { REMOVE_TOKEN } from "../../store/mutations-types";

export default {
  name: "Header",
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      style: {},
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    logout() {
      window.localStorage.setItem("token", "");
      this.$store.commit({
        type: REMOVE_TOKEN,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
  background-color: #545c64;
  position: fixed;
  width: 100%;
  z-index: 999;
}
.container {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  position: relative;
  i {
    cursor: pointer;
    font-size: 25px;
  }

  .logo {
    display: block;
    border-radius: 10px;
    border: white 1px solid;
    text-align: center;
    font-size: 20px;
    width: 150px;
    margin: auto 5px;
    padding: 3px;
  }

  .el-menu {
    width: 100%;
    display: flex;
    justify-content: left;
    border-right: none;
  }

  .left-bar {
    // display: flex;
    // background-color: red;
    // justify-content: flex-end;
    margin: auto 20px;
    cursor: pointer;

    .login {
      margin: auto 0;
    }
    .user {
      position: absolute;
      bottom: 0px;
      right: 0px;
      height: 56px;
      width: 70px;
      padding: 0 10px 0 10px;
      line-height: 54px;
      // background-color: red;

      &:hover .logout-bar {
        display: block;
      }

      .logout-bar {
        display: none;

        .logout,
        .user-info {
          // width: 50px;
          // float: right;
          height: 25px;
          line-height: 25px;
          text-align: center;
          background-color: #545c64;
          border: 1px solid wheat;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
