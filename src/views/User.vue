<template>
  <home>
    <div class="user">
      <user-left></user-left>
      <user-info>
        <slot></slot>
      </user-info>
    </div>
  </home>
</template>

<script>
import Home from "./Home";
import UserLeft from "@/components/user/Side/UserLeft";
import UserInfo from "@/components/user/UserInfo";

export default {
  name: "User",
  components: {
    UserInfo,
    UserLeft,
    Home,
  },
};
</script>

<style lang="less" scoped>
.user {
  background-color: chartreuse;
  width: 1200px;
  display: flex;
}
</style>