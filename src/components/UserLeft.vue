<template>
  <div class="user-left">
    <div class="left">
      <el-menu
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">个人资料</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">收藏列表</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLeft",
};
</script>

<style lang="less" scoped>
.left {
  margin-right: 20px;

  .el-menu {
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 0 0 15px rgb(39, 37, 37);
    .el-menu-item {
      border-radius: 20px;
    }
  }
}
</style>