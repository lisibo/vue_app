<template>
  <!-- 以及页面的顶部 -->
  <div class="top-header">
    <!-- 地区、温度 -->
    <div class="top-adress">
      <span class="city">安康市</span>
      <span class="weather">
        <img class="icon-weather" src="../../assets/why/images/search@2x.png" alt>
        15℃
      </span>
    </div>
    <!-- 搜索框 -->
    <div class="top-search">
      <img class="icon-search" src="../../assets/why/images/search@2x.png" alt>
      <input class="search-input" type="text" placeholder="请输入您要搜索的内容">
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader"
};
</script>

<style lang="less" scoped>
.top-header {
  width: 100vw;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0.2rem 2.5%;
  display: flex;
  justify-content: space-between;
  .top-adress {
    font: 0.34rem/0.5rem "PingFangSC-Medium";
    color: #3e3e3e;
    .city {
      margin-right: 0.1rem;
    }
    .icon-weather {
      width: 0.26rem;
      height: 0.26rem;
    }
    .weather {
      font: 0.26rem/0.5rem "PingFangSC-Regular";
      color: #656565;
    }
  }
  .top-search {
    width: 4.24rem;
    height: 0.5rem;
    background: #f6f5f8;
    border-radius: 12.5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon-search {
      width: 0.26rem;
      height: 0.26rem;
    }
    .search-input {
      width: 80%;
      height: 80%;
      outline: none;
      border: none;
      background-color: #f6f5f8;
    }
  }
}
</style>