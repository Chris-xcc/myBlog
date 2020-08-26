<template>
  <div>
    <breadcrumb category="分类" :title="category"></breadcrumb>
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
import { get } from "@/api/services/instance";

export default {
  name: "CategoryPostList",
  components: {
    Breadcrumb,
  },

  data() {
    return {
      postList: "",
      category: "",
    };
  },
  created() {
    this.getPostList();
  },
  methods: {
    // 获取文章列表
    getPostList() {
      get("/categorys/" + this.$route.params.id + "/")
        .then((response) => {
          this.postList = response.data.post;
          this.category = response.data.name;
          // console.log(response.data);
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