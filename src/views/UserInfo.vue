<template>
  <home>
    <div class="user-info">
      <div class="container">
        <user-left></user-left>
        <user-main></user-main>
      </div>
    </div>
  </home>
</template>

<script>
import Home from "./Home";
import UserLeft from "@/components/user/UserLeft";
import UserMain from "@/components/user/UserMain";
export default {
  name: "User",
  components: {
    Home,
    UserLeft,
    UserMain,
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: chartreuse;
  width: 1200px;
  display: flex;
}
</style>