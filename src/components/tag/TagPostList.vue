<template>
  <div>
    <breadcrumb tag="标签" :title="tag"></breadcrumb>
    <div class="post-list">
      <div class="post-list-wrapper" v-for="post in postList" :key="post.id">
        <router-link :to="'/post/' + post.id" tag="div">
          <div class="title">{{post.title}}</div>
          <div class="body" v-html="post.excerpt">{{post.excerpt}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../post/Breadcrumb";
export default {
  name: "TagPostList",
  components: {
    Breadcrumb,
  },

  data() {
    return {
      postList: "",
      tag: "",
    };
  },
  created() {
    this.getPostList();
  },
  methods: {
    // 获取文章列表
    getPostList() {
      this.$axios
        .get("http://localhost:8000/tags/" + this.$route.params.id + "/")
        .then((response) => {
          this.postList = response.data.post;
          this.tag = response.data.name;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
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
</style>