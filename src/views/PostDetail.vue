<template>
  <home>
    <div class="post-detail">
      <div class="container">
        <div class="wrapper">
          <breadcrumb></breadcrumb>
          <div class="post-detail">
            <div class="title">{{post.title}}</div>
            <div class="bar">
              <div class="category">{{category}}</div>
              <div class="tag" v-if="tag">{{tag}}</div>
            </div>
            <div class="content">{{post.content}}</div>
          </div>
          <comment></comment>
        </div>
        <post-side></post-side>
      </div>
    </div>
  </home>
</template>

<script>
import Home from "./Home";
import PostSide from "../components/post/PostSide";
import Breadcrumb from "../components/post/Breadcrumb";
import Comment from "../components/post/Comment";
import { get, post } from "@/api/services/instance";

export default {
  name: "PostDetail",
  components: {
    Home,
    Breadcrumb,
    PostSide,
    Comment,
  },
  data() {
    return {
      post: "",
      category: "",
      tag: "",
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      if (this.$route.params.id)
        get("/posts/" + this.$route.params.id)
          .then((response) => {
            this.post = response.data;
            this.category = response.data.category.name;
            this.tag = response.data.tag.name;
            // console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      else {
        get("/posts/1")
          .then((response) => {
            this.post = response.data;
            this.category = response.data.category.name;
            this.tag = response.data.tag.name;
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.post-detail {
  // background-color: burlywood;
}
.container {
  width: 1200px;
  display: flex;
  justify-content: space-between;

  .wrapper {
    width: 900px;
    // background-color: #fff;
    // text-align: center;
    // margin: 50px;
    // padding: 50px 100px;
    box-sizing: border-box;
    font-size: 18px;

    .post-detail {
      margin: 10px;

      .title {
        text-align: center;
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: bold;
      }

      .bar {
        text-align: center;
        margin-bottom: 20px;
      }

      .content {
        font-size: 20px;
        line-height: 50px;
      }
    }
  }
}
</style>