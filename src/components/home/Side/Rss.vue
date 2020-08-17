<template>
  <div class="rss">
    <div class="container">
      <div class="title">
        <div class="el-icon-s-promotion icon"></div>
        <div>RSS订阅</div>
      </div>
      <div class="rss-info">有新文章时通知我</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rss",
};
</script>

<style lang="less" scoped>
@import url("@/assets/css/side/border.less");

.container {
  &:hover {
    transition: all 0.5s;
    // transform: translate(10 10);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  .title {
    display: flex;
    margin: 10px 10px 0 10px;

    .icon {
      font-size: 18px;
      margin: auto 2px;
    }
  }
  .rss-info {
    text-align: center;
    margin: 15px;
    color: green;
    &:hover {
      transform: translateX(10px);
      transition: 0.5s;
      color: orange;
    }
  }
}
</style>