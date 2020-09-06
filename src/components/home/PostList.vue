<template>
  <div class="post-list">
    <div class="post-list-wrapper" v-for="post in postList" :key="post.id">
      <router-link :to="'/post/' + post.id" tag="div" class="item">
        <div class="title">{{post.title}}</div>
        <div class="body" v-html="post.excerpt"></div>
        <div class="item-bottom">
          <div class="time">
            <i class="el-icon-date"></i>
            <span>{{post.created_time.slice(0,10)}}</span>
          </div>
          <div class="category">
            <router-link :to="'/category/' + post.category.id " tag="div">
              <i class="el-icon-notebook-1"></i>
              <span>{{post.category.name}}</span>
            </router-link>
          </div>
          <div class="look">
            <i class="el-icon-view"></i>
            <span>{{post.look}}</span>
          </div>
        </div>
      </router-link>
    </div>
    <el-pagination
      :page-size="10"
      background
      layout="prev, pager, next, jumper"
      :total="count"
      @current-change="handleCurrentChange"
      :current-page="1"
    ></el-pagination>
  </div>
</template>

<script>
import { PostList, TotalPost } from "@/api";
import { GET_PAGE } from "@/store/mutations-types";

export default {
  name: "PostList",
  data() {
    return {
      postList: "",
      count: NaN,
    };
  },
  created() {
    this.getPostList();
    this.getTotalPost();
  },
  destroyed() {
    this.pageReset();
  },
  methods: {
    // 获取文章列表
    getPostList() {
      PostList()
        .then((response) => {
          this.postList = response.data.results;
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 获取文章总数
    getTotalPost() {
      TotalPost()
        .then((response) => {
          // console.log(response.data.count)
          this.count = response.data.count;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 页码改变时
    handleCurrentChange(page) {
      // console.log(`当前页: ${page}`);
      window.localStorage.setItem("page", page);
      // currentPage = page
      this.$store.commit({
        type: GET_PAGE,
      });
      this.getPostList();
    },
    // 页码重置为1
    pageReset() {
      window.localStorage.setItem("page", 1);
      this.$store.commit({
        type: GET_PAGE,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.post-list-wrapper {
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 20px;

  &:hover {
    transition: all 1s;
    // transform: translate(50px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  &:last-child {
    margin-bottom: 20px;
  }
  .item {
    cursor: pointer;
    margin: 10px;

    .title {
      margin: 10px;

      &:hover {
        transition: all 1s;
        transform: translate(10px);
      }
    }

    .body {
      margin: 10px;
    }

    .item-bottom {
      display: flex;

      i {
        margin: 0 5px 0 0;
      }
      .time,
      .look,
      .category {
        margin-left: 10px;
      }
    }
  }
}

.el-pagination {
  text-align: center;
  margin: 50px;
}
</style>