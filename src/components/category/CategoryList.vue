<template>
  <div class="category">
    <div class="top-bar">
      <h1>分类</h1>
    </div>
    <div class="list">
      <router-link
        :to="'/category/' + category.id +'/'"
        tag="div"
        class="item"
        v-for=" category in categorys"
        :key="category.id"
      >
        <div class="item-title">{{category.name}}</div>
        <div class="item-num">{{category.id}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      categorys: [],
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      this.$axios
        .get("http://localhost:8000/categorys/")
        .then((response) => {
          this.categorys = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.category {
  // background-color: cadetblue;
  width: 1200px;

  .top-bar {
    text-align: center;
    // background-color: chocolate;
    margin: 50px;
  }

  .list {
    // background-color: chartreuse;
    margin: 50px;
  }

  .item {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 40px;
    margin: 20px;
    border: 1px solid #dcdcdc;
    box-shadow: 0 0 1px #c0c0c0;
    border-radius: 20px;

    &:hover {
      transition: all 1s;
      transform: translate(50px);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }

    .item-title {
      font-weight: bold;
    }
  }
}
</style>>

</script>

