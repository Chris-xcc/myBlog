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
          <div class="bottom-bar">
            <div class="comment">评论</div>
            <el-form :model="commentForm">
              <el-form-item>
                <el-input v-model="commentForm.text" type="textarea" resize="none" rows="5"></el-input>
              </el-form-item>
              <el-form-item size="large">
                <el-button type="primary" class="button" @click="postComment()">发表</el-button>
              </el-form-item>
            </el-form>
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
      comment: "",
      commentForm: {
        post: this.$route.params.id,
        text: "",
      },
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
    postComment() {
      post({ url: "comments/", data: this.commentForm })
        .then((response) => {
          location.reload();
          alert("成功");
          console.log(response);
        })
        .catch((err) => {
          alert("失败");
          console.log(err);
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
        text-align: left;
        letter-spacing: 100px;
      }
    }
    .bottom-bar {
      // background-color: greenyellow;
      margin: 20px;
      padding: 10px;
      // border: 1px solid black;
      // border-radius: 20px;
      .comment {
        margin: 10px;
      }

      .el-form-item {
        margin-bottom: 10px;
        // /deep/ .el-input__inner {
        //   height: 250px;
        // }
        .button {
          float: right;
        }
      }
    }
  }
}
</style>