<template>
  <home>
    <category-post-list v-if="this.$route.params.id"></category-post-list>
    <category-list v-else></category-list>
  </home>
</template>

<script>
import Home from "./Home";
import CategoryList from "@/components/category/CategoryList";
import CategoryPostList from "@/components/category/CategoryPostList";

export default {
  name: "Category",
  components: {
    Home,
    CategoryPostList,
    CategoryList,
  },
};
</script>