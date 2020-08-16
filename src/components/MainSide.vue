<template>
  <div class="main-side">
    <search></search>
    <rss></rss>
      <day></day>
      <random></random>
  </div>
</template>

<script>
import Search from "./Search";
import Rss from "./Rss";
import Day from "./Day";
import Random from "./Random";

export default {
  name: "MainSide",
  components: {
    Search,
    Rss,
      Day,
      Random
  },
};
</script>

<style lang="less" scoped>
.main-side{
  width: 256px;
}
</style>