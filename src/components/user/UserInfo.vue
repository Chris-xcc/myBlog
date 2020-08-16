<template>
  <div class="user-info">
       <div class="demo-basic--circle">
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
        </div>
      </div>
      <div class="info"></div>
  </div>
</template>

<script>
export default {
  name: "UserMain",
};
</script>

<style lang="less" scoped>
</style>