<template>
  <div class="post-list">
    <div class="post-list-wrapper" v-for="post in postList" :key="post.id">
      <router-link to="" tag="div">
        <div class="title">{{post.title}}</div>
        <div class="body">{{post.excerpt}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { get } from "../api/services/instance";

export default {
  name: "PostList",
  data() {
    return {
      postList: "",
    };
  },
  created() {
    this.getPostList();
  },
  methods: {
    getPostList() {
      get("/posts/")
        .then((response) => {
          this.postList = response.data.results;
          // console.log(response.data.results);
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

  &:last-child{
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