<template>
  <home>
    <div class="category">
      <div class="top-bar">
        <h1>分类</h1>
      </div>
      <div class="list">
        <div class="item">
          <div class="item-title">fwaeffwa</div>
          <div class="item-num">11</div>
        </div>
        <div class="item">
          <div class="item-title">fwaeffwa</div>
          <div class="item-num">11</div>
        </div>
        <div class="item">
          <div class="item-title">fwaeffwa</div>
          <div class="item-num">11</div>
        </div>
        <div class="item">
          <div class="item-title">fwaeffwa</div>
          <div class="item-num">11</div>
        </div>
        <div class="item">
          <div class="item-title">fwaeffwa</div>
          <div class="item-num">11</div>
        </div>
      </div>
    </div>
  </home>
</template>

<script>
import Home from "./Home";
export default {
  name: "Category",
  components: {
    Home,
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
