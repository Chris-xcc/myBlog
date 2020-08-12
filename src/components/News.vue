<template>
  <div class="news">
    <div class="top">
      <div class="el-icon-document-copy icon"></div>
      <div>最新文章</div>
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
</template>

<script>
export default {
  name: "News",
};
</script>

<style lang="less" scoped>
.news {
  background-color: #fff;
  margin-top: 20px;
  border: 1px solid #dcdcdc;
  box-shadow: 0 0 1px #c0c0c0;
  border-radius: 20px;

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
        color:	#5F9EA0;
      }
    }
  }
}
</style>