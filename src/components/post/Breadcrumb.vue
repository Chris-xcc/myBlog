<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/category'}" v-if="category">{{category}}</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/tag'}" v-if="tag">{{tag}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["title", "category", "tag"],
};
</script>

<style lang="less" scoped>
.breadcrumb {
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}
</style>