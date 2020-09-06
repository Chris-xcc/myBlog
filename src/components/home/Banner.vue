<template>
  <div class="banner">
    <el-carousel height=" 400px">
      <el-carousel-item v-for="(item,index) in image" :key="index">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      image: [
        require("@/assets/img/Captain Marvel.jpg"),
        require("@/assets/img/Carry White.jpg"),
        require("@/assets/img/20200307203002.jpg"),
        require("@/assets/img/background.jpg"),
        require("@/assets/img/django.jpg"),
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    // height: 100%;
  }
}
</style>