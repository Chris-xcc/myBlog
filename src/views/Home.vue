<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <slot>
         <Main></Main>
        </slot>
      </el-main>
      <!-- <el-footer>
        <Footer></Footer>
      </el-footer> -->
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import PostDetail from "../components/PostDetail";
import PostList from "../components/PostList";

export default {
  name: "Home",
  components: {
    Header,
    PostDetail,
    Footer,
    Main,
    PostList
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  background-color:#F5F5F5;
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
