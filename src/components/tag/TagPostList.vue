<template>
  <div>
    <breadcrumb tag="标签" :title="tag"></breadcrumb>
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
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../post/Breadcrumb";
import { get } from "@/api/services/instance";

export default {
  name: "TagPostList",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      postList: "",
      tag: "",
    };
  },
  created() {
    this.getPostList();
  },
  methods: {
    // 获取文章列表
    getPostList() {
      get("/tags/" + this.$route.params.id + "/")
        .then((response) => {
          this.postList = response.data.post;
          this.tag = response.data.name;
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
.post-list-wrapper {
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 20px;

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
</style>