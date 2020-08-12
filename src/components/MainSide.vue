<template>
  <div class="main-side">
    <search></search>
    <rss></rss>
      <day></day>
      <news></news>
  </div>
</template>

<script>
import Search from "./Search";
import Rss from "./Rss";
import Day from "./Day";
import News from "./News";

export default {
  name: "MainSide",
  components: {
    Search,
    Rss,
      Day,
      News
  },
};
</script>

<style lang="less" scoped>
.main-side{
  width: 256px;
}
</style>