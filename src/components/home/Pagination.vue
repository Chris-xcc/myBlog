<template>
  <el-pagination
    :page-size="10"
    background
    layout="prev, pager, next, jumper"
    :total="count"
    @current-change="handleCurrentChange"
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
    };
  },
  created() {
    this.getTotalPost();
  },
  methods: {
    handleCurrentChange(page) {
      // console.log(`当前页: ${val}`);
      this.$store.commit({
        type: Get_Page,
        page: page,
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

<style scoped>
</style>