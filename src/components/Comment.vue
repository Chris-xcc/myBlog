<template>
  <div class="talk-bar">
    <div class="talk-detail" v-for="(value,index) in comment" :key="index">
      <div class="info">
        <div class="username">{{value.username}}</div>
        <div class="time">{{value.created_time}}</div>
      </div>
      <div class="text">{{value.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      comment: "",
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$axios
        .get("/posts/20/comments/")
        .then((response) => {
          this.comment = response.data;
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