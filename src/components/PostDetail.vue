<template>
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
        <div class="talk-bar">
          <div class="talk-detail" v-for="(value,index) in comment" :key="index">
            <div class="info">
              <div class="username">{{value.username}}</div>
              <div class="time">{{value.created_time}}</div>
            </div>
            <div class="text">{{value.text}}</div>
          </div>
        </div>
      </div>
      <post-side></post-side>
    </div>
  </div>
</template>

<script>
import PostSide from "./PostSide";
import Breadcrumb from "./Breadcrumb";
export default {
  name: "PostDetail",
  components: {
    Breadcrumb,
    PostSide,
  },
  data() {
    return {
      post: "",
      category: "",
      tag: "",
      comment: "",
      commentForm: {
        post: "20",
        text: "test2",
      },
    };
  },
  created() {
    this.getPosts();
    this.getComment();
  },
  methods: {
    getPosts() {
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
    getComment() {
      this.$axios
        .get("/posts/20/comments/")
        .then((response) => {
          this.comment = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postComment() {
      this.$axios
        .post("comments/", this.commentForm)
        .then((response) => {
          alert("成功");
        })
        .catch((err) => {
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

    .talk-bar {
      // background-color: cadetblue;
      margin: 30px;
      padding: 10px;

      .talk-detail {
        border-top: 1px solid #000;
        // border-bottom: 1px solid #000;
        &:last-child {
          border-bottom: 1px solid #000;
        }

        .info {
          // background-color: chartreuse;
        }

        .info::after,
        .info::before {
          display: table;
          clear: both;
          content: "";
        }
        .username {
          float: left;
          font-size: 24px;
          margin: 10px auto;
          // background-color: #fff;
        }
        .time {
          font-size: 14px;
          margin: 10px auto;
          float: right;
        }
        .text {
          font-size: 18px;
          margin: 0 0 10px 40px;
        }
      }
    }
  }
}
</style>