<template>
  <div class="search">
    <el-form>
      <el-form-item>
        <el-input placeholder prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search"></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="less" scoped>
.search {
  // background-color: yellowgreen;

  .el-form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    //  height: 40px;

    .el-form-item {
      margin-bottom: 0;
    }

    .el-input,
    .el-button {
      // margin: 30px;
      margin-bottom: 0px;
    }
  }
}
</style>>

