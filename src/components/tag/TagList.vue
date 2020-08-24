<template>

    <div class="tag">
      <div class="top-bar">
        <h1>标签</h1>
      </div>
      <div class="list">
        <router-link  :to="'/tag/' + tag.id +'/'"
                      tag="div" class="item" v-for="tag in tags" :key="tag.id">
          <div class="item-title">{{tag.name}}</div>
          <div class="item-num">{{tag.id}}</div>
        </router-link>
      </div>
    </div>

</template>

<script>

export default {
  name: "List",

  data() {
    return {
      tags: [],
    };
  },
  created() {
    this.getTags();
  },
  methods: {
    getTags() {
      this.$axios
        .get("http://localhost:8000/tags/")
        .then((response) => {
          this.tags = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.tag {
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
    cursor: pointer;

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
