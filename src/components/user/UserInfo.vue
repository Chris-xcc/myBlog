<template>
  <div class="user-info">
    <div class="container">
      <div class="avatar">
        <el-avatar :size="300">
          <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        </el-avatar>
      </div>
      <div class="info">
        <div class="username">
          <span>用户名:</span>
          <span>{{$store.state.username}}</span>
        </div>
        <div class="email">
          <span>邮箱:</span>
          <span>{{ $store.state.email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_USERNAME } from "@/store/mutations-types";
import { GET_EMAIL } from "@/store/mutations-types";
import { get } from "@/api/services/instance";

export default {
  name: "UserMain",
  methods: {
    getUser() {
      get({ url: "http://localhost:8000/users/1/" })
        .then((response) => {
          console.log(response);
          window.localStorage.setItem("email", response.data.email);
          this.$store.commit({
            type: GET_EMAIL,
            email: response.data.email,
          });
          window.localStorage.setItem("username", response.data.username);
          this.$store.commit({
            type: GET_USERNAME,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style lang="less" scoped>
.user-info {
  width: 100%;
  height: 300px;
  margin-left: 20px;

  .container {
    padding: 40px;
    display: flex;
    justify-content: space-around;
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 0 0 15px rgb(39, 37, 37);
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>