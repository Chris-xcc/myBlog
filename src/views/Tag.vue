<template>
  <home>
    <tag-post-list v-if="this.$route.params.id"></tag-post-list>
    <tag-list v-else></tag-list>
  </home>
</template>

<script>
import Home from "./Home";
import TagPostList from "@/components/tag/TagPostList";
import TagList from "@/components/tag/TagList";

export default {
  name: "Tag",
  components: {
    Home,
    TagPostList,
    TagList,
  },
};
</script>

