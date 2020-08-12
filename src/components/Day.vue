<template>
  <div class="day">
    <div class="title">
      <div class="el-icon-postcard icon"></div>
      <div>每日一句</div>
    </div>
    <div class="time">2020年8月5日</div>
    <div class="info">你是我人生中唯一的主角，我却只能是你故事中的一晃而过得路人甲。</div>
  </div>
</template>

<script>
export default {
  name: "Day",
};
</script>

<style lang="less" scoped>
.day {
  background-color: #fff;
  margin-top: 20px;
  border: 1px solid #dcdcdc;
  box-shadow: 0 0 1px #c0c0c0;
  border-radius: 20px;

  &:hover {
    transition: all 0.5s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  .title {
    margin: 10px;
    display: flex;
    .icon{
      font-size: 20px;
      margin: auto 2px;
    }
  }
  .time{
    margin: auto 10px;
    font-size: 15px;
  }
  .info{
    margin: 10px;
    font-size: 12px;
    color:#696969;
  }
}
</style>