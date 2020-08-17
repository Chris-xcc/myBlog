<template>
  <div class="random">
    <div class="container">
      <div class="top">
        <div class="el-icon-document-copy icon"></div>
        <div>随机推荐</div>
      </div>
      <div class="list">
        <div class="post">
          <div class="el-icon-document icon"></div>
          <div class="post-title">拥有</div>
        </div>
        <div class="post">
          <div class="el-icon-document icon"></div>
          <div class="post-title">拥有</div>
        </div>
        <div class="post">
          <div class="el-icon-document icon"></div>
          <div class="post-title">拥有</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Random",
};
</script>

<style lang="less" scoped>
@import url("@/assets/css/side/border.less");

.random {
  .top {
    margin: 10px;
    display: flex;

    .icon {
      font-size: 20px;
      margin: auto 2px;
    }
  }

  .list {
    margin: 10px;
    .post {
      margin: 10px;
      display: flex;
      // padding-bottom:5px;
      // border-bottom: 1px solid #000;
      .icon {
        margin: auto 2px;
      }
      .post-title {
        font-size: 14px;
        color: #5f9ea0;
      }
    }
  }
}
</style>