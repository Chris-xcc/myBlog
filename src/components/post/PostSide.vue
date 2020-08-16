<template>
  <div class="post-side">
    <div class="container">
      <div class="search">
        <el-form>
          <el-form-item>
            <el-input placeholder prefix-icon="el-icon-search"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search"></el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="nav-wrapper">
        <div class="nav">
          <div class="title">目录</div>
          <div class="guide">
            <div class="item">
              <div class="item-name">具有这种什么手机</div>
              <ul class="list">
                <li class="item-list">以增加.你们朋</li>
                <li class="item-list">以增加.你们朋</li>
                <li class="item-list">以增加.你们朋</li>
                <li class="item-list">以增加.你们朋</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostSide",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="less" scoped>
.post-side {
  // background-color: #fff;
  .container {
    // background-color: #fff;
  }

  .search {
    // background-color: yellowgreen;

    .el-form {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
      //  height: 40px;

      .el-form-item {
        margin-bottom: 0;
      }

      .el-input,
      .el-button {
        // margin: 30px;
        margin-bottom: 0px;
      }
    }
  }

  .nav-wrapper {
    margin-top: 25px;
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 0 0 15px rgb(39, 37, 37);

    .nav {
      margin: 15px;

      .title {
        font-size: 25px;
      }
      .guide {
        margin-top: 10px;
        margin-left: 5px;
        .item {
          margin-top: 0px;
          .item-name {
          }
          .list {
            margin-top: 5px;
            margin-bottom: 5px;
            padding-left: 25px;
          }
          .item-list {
            margin-top: 2px;
          }
        }
      }
    }
  }
}
</style>