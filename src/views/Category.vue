<template>
  <home>
    <category-post-list v-if="this.$route.params.id"></category-post-list>
    <list v-else></list>
  </home>
</template>

<script>
import Home from "./Home";
import List from "@/components/category/List";
import CategoryPostList from "@/components/category/CategoryPostList";

export default {
  name: "Category",
  components: {
    Home,
    CategoryPostList,
    List,
  },
};
</script>