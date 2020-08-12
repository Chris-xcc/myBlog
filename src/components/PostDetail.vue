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
            <div class="conent">{{post.content}}</div>
          </div>
          <div class="post-detail">
            <div class="title">{{post.title}}</div>
            <div class="bar">
              <div class="category">{{category}}</div>
              <div class="tag" v-if="tag">{{tag}}</div>
            </div>
            <div class="conent">{{post.content}}</div>
          </div>
          <div class="post-detail">
            <div class="title">{{post.title}}</div>
            <div class="bar">
              <div class="category">{{category}}</div>
              <div class="tag" v-if="tag">{{tag}}</div>
            </div>
            <div class="conent">{{post.content}}</div>
          </div>
          <div class="post-detail">
            <div class="title">{{post.title}}</div>
            <div class="bar">
              <div class="category">{{category}}</div>
              <div class="tag" v-if="tag">{{tag}}</div>
            </div>
            <div class="conent">{{post.content}}</div>
          </div>
        </div>
        <post-side></post-side>
      </div>
    </div>
  </home>
</template>

<script>
import Home from "../views/Home";
import PostSide from "./PostSide";
import Breadcrumb from "./Breadcrumb";
export default {
  name: "PostDetail",
  components: {
    Home,
    PostSide,
    Breadcrumb,
  },
  data() {
    return {
      post: "",
      category: "",
      tag: "",
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.$axios
        .get("/posts/1/")
        .then((response) => {
          this.post = response.data;
          this.category = response.data.category.name;
          this.tag = response.data.tag.name;
          // console.log(response.data.category.name);
        })
        .catch((error) => {
          console.log(error);
        });
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
    // background-color: red;
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
        text-align: left;
        letter-spacing: 100px;
      }
    }
  }
}
</style>