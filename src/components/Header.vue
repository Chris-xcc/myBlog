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
        <el-menu-item index="archives">归档</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
      <div class="left-bar">
        <router-link to='login' tag="div" class="login" v-if="1">
          <i class="el-icon-s-custom"></i>
        </router-link>
        <router-link to="" tag="div" class="user" v-else>
          <span>11111</span>
        </router-link>
      </div>
    </div>
    <div class="banner"></div>
  </div>
</template>

<script>
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

    .search {
      display: flex;
      margin: auto 20px;
      div {
        margin: auto 0;
        margin-left: 5px;
      }
    }
    .login {
      margin: auto 0;
    }
  }
}
</style>
