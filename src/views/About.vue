<template>
  <home>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </home>
</template>
<script>
import Home from "./Home";
export default {
  name: "About",
  components: {
    Home,
  },
};
</script>

<style lang="less" scoped>
.about {
  height: 100%;
}
</style>