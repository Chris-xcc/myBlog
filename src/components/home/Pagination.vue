<template>
  <el-pagination
    :page-size="10"
    background
    layout="prev, pager, next, jumper"
    :total="count"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage"
  ></el-pagination>
</template>

<script>
import { Get_Page } from "@/store/mutations-types";
import { TotalPost } from "@/api";

export default {
  name: "Pagination",
  data() {
    return {
      count: NaN,
      currentPage: '',
    };
  },
  created() {
    this.getTotalPost();
  },
  beforeUpdate () {
    this.currentPage = this.$store.state.page
  },
  methods: {
    handleCurrentChange(page) {
      // console.log(`当前页: ${page}`);
      window.localStorage.setItem("page", page);
      // currentPage = page
      this.$store.commit({
        type: Get_Page,
      });
    },
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
  },
};
</script>

<style lang="less" scoped>
.el-pagination{
  text-align: center;
  margin: 50px;
}
</style>