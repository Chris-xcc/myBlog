<template>
  <div class="post-list">
    <div class="post-list-wrapper" v-for="post in postList" :key="post.id">
      <router-link :to="'/post/' + post.id" tag="div">
        <div class="title">{{post.title}}</div>
        <div class="body" v-html="post.excerpt">{{post.excerpt}}</div>
      </router-link>
    </div>
    <el-pagination
      :page-size="10"
      background
      layout="prev, pager, next, jumper"
      :total="count"
      @current-change="handleCurrentChange"
      :current-page="1"
    ></el-pagination>
  </div>
</template>

<script>
import { PostList, TotalPost } from "@/api";
import { GET_PAGE } from "@/store/mutations-types";

export default {
  name: "PostList",
  data() {
    return {
      postList: "",
      count: NaN,
    };
  },
  created() {
    this.getPostList();
    this.getTotalPost();
  },
  destroyed() {
    this.pageReset();
  },
  methods: {
    // 获取文章列表
    getPostList() {
      this.$axios
        .get("http://localhost:8000/posts/?page=" + this.$store.state.page)
        .then((response) => {
          this.postList = response.data.results;
          // console.log(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 获取文章总数
    getTotalPost() {
      this.$axios
        .get("http://localhost:8000/posts/")
        .then((response) => {
          // console.log(response.data.count)
          this.count = response.data.count;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 页码改变时
    handleCurrentChange(page) {
      // console.log(`当前页: ${page}`);
      window.localStorage.setItem("page", page);
      // currentPage = page
      this.$store.commit({
        type: GET_PAGE,
      });
      this.getPostList();
    },
    // 页码重置为1
    pageReset() {
      window.localStorage.setItem("page", 1);
      this.$store.commit({
        type: GET_PAGE,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.post-list-wrapper {
  margin-top: 20px;
  border: 1px solid black;

  &:last-child {
    margin-bottom: 20px;
  }

  .title {
    margin: 10px;
  }

  .body {
    margin: 10px;
  }
}

.el-pagination {
  text-align: center;
  margin: 50px;
}
</style>