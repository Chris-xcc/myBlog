<template>
  <div class="post-list">
    <Nav></Nav>
    <div class="post-list-wrapper" v-for="post in postList" :key="post.id" v-cloak>
      <div class="title">{{post.title}}</div>
      <div class="body">{{post.excerpt}}</div>
    </div>
  </div>
</template>

<script>
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
      this.$axios
        .get("/posts/")
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

  .title {
    margin: 10px;
  }
  .body {
    margin: 10px;
  }
}
</style>