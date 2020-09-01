<template>
  <home>
    <div class="post-detail">
      <div class="container">
        <div class="wrapper">
          <breadcrumb :title="title" :category="category"></breadcrumb>
          <div class="post-detail">
            <div class="title">{{title}}</div>
            <div class="bar">
              <div class="time el-icon-date">{{time}}</div>
              <div class="view el-icon-view">{{view}}</div>
              <div class="category el-icon-collection">{{category}}</div>
              <div class="tag el-icon-discount" v-if="tag">{{tag}}</div>
            </div>
            <div class="content markdown-body" v-html="post"></div>
          </div>
          <comment></comment>
        </div>
        <!-- <post-side></post-side> -->
      </div>
    </div>
  </home>
</template>

<script>
import Home from "./Home";
import PostSide from "@/components/post/PostSide";
import Breadcrumb from "@/components/post/Breadcrumb";
import Comment from "@/components/post/Comment";
import { get } from "../api/services/instance";

import marked from "marked";

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
      title: "",
      post: "",
      time: "",
      view: "",
      category: "",
      tag: "",
    };
  },
  mounted() {
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href =
      "https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css";
    document.head.appendChild(link);
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      if (this.$route.params.id)
        get("/posts/" + this.$route.params.id + "/")
          .then((response) => {
            this.title = response.data.title;
            this.post = marked(response.data.content);
            this.time = response.data.created_time;
            this.view = response.data.look;
            this.category = response.data.category.name;
            this.tag = response.data.tag.name;
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      else {
        this.$route.params.id = 1;
        get("/posts/1/")
          .then((response) => {
            this.title = response.data.title;
            this.post = response.data;
            this.category = response.data.category.name;
            this.tag = response.data.tag.name;
            // console.log(response);
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
  // justify-content: space-between;
  justify-content: center;

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
        width: 300px;
        margin: 10px auto;
        text-align: center;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-around;
        // background-color: red;
      }

      .content {
        // font-size: 20px;
        // line-height: 50px;
      }
    }
  }
}
</style>