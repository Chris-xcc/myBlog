<template>
  <div class="comment">
    <div class="comment-form">
      <div class="bottom-bar" v-if="$store.state.token">
        <div class="body">评论</div>
        <el-form :model="commentForm">
          <el-form-item>
            <el-input v-model="commentForm.text" type="textarea" resize="none" rows="5"></el-input>
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary" class="button" @click="postComment()">发表</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="bottom-bar-auth" v-else>
        <router-link to="/login" tag="div" class="login">
          <div>
            <span>登录评论</span>
            <i class="el-icon-s-custom"></i>
          </div>
        </router-link>
      </div>
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
</template>
 
<script>
import { get, post } from "@/api/services/instance";

export default {
  name: "Comment",
  data() {
    return {
      comment: [],
      commentForm: {
        post: this.$route.params.id,
        text: "",
      },
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      get("/posts/" + this.$route.params.id + "/comments/")
        .then((response) => {
          this.comment = response.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postComment() {
      post({ url: "/comments/", data: this.commentForm })
        .then((response) => {
          // console.log(response);
          this.comment.splice(0, 0, response.data);
          // console.log(this.comment)
          alert("成功");
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
.bottom-bar {
  // background-color: greenyellow;
  margin: 20px;
  padding: 10px;
  // border: 1px solid black;
  // border-radius: 20px;
  .body {
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
.bottom-bar-auth {
  height: 117px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  margin: 40px;
  .login {
    margin: auto;
    cursor: pointer;
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
</style>