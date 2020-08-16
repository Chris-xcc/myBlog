<template>
  <div class="main-side">
    <search></search>
    <rss></rss>
    <day></day>
    <random></random>
  </div>
</template>

<script>
import Search from "../common/Search";
import Rss from "./Side/Rss";
import Day from "./Side/Day";
import Random from "./Side/Random";

export default {
  name: "MainSide",
  components: {
    Search,
    Rss,
    Day,
    Random,
  },
};
</script>

<style lang="less" scoped>
.main-side {
  width: 256px;
}
</style>