<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <slot>
          <!--          <Main></Main>-->
          <post-detail></post-detail>
        </slot>
      </el-main>
      <!-- <el-footer>
        <Footer></Footer>
      </el-footer>-->
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Main from "@/components/home/Main";
import PostDetail from "@/components/post/PostDetail";

export default {
  name: "Home",
  components: {
    Header,
    PostDetail,
    Footer,
    Main,
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  background-color: #f5f5f5;
  .el-container {
    position: relative;
    height: 100%;
  }

  .el-header {
    padding: 0;

    //   left: 0;
    //   top: 0;
  }

  .el-main {
    // position: absolute;
    // top: 56px;
    // transform: (50 50);
    // background-color: green;
    display: flex;
    justify-content: center;
  }

  .el-footer {
    padding: 0;
  }
}
</style>
