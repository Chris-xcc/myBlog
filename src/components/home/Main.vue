<template>
  <div class="main">
    <div class="container">
      <div class="main-wrapper">
        <banner></banner>
        <post-list></post-list>
        <pagination></pagination>
      </div>
      <div class="side">
        <main-side></main-side>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import PostList from "./PostList";
import MainSide from "./MainSide";
import Pagination from "./Pagination";

export default {
  name: "Main",
  components: {
    Banner,
    PostList,
    MainSide,
    Pagination,
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 1200px;
  // background-color: rgb(0, 140, 255);
  .container {
    display: flex;
    justify-content: space-between;

    .main-wrapper {
      width: 900px;
    }
    .side {
      // background-color: chartreuse;
    }
  }
}
</style>>

