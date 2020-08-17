<template>
  <div class="comment-form">
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
  </div>
</template>

<script>
    import {post} from "../../api/services/instance";

    export default {
  name: "CommentForm",
  data() {
    return {
      comment: "",
      commentForm: {
        post: this.$route.params.id,
        text: "",
      },
    };
  },
  methods: {
    postComment() {
      post({ url: "comments/", data: this.commentForm })
        .then((response) => {
          // reload();
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
</style>>

