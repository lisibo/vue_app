<template>
  <!-- 人脸识别页 -->
  <div class="face-discern">
    <!-- 顶部导航 -->
    <mt-header title="个人信息查询" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="content-container">
      <p class="cons-title">请将您的脸部移入框内</p>

      <div class="face-box" @click="next"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InqFaceDiscern",
  methods: {
    next() {
      this.$router.push({ path: "/inqjump" });
    }
  }
};
</script>

<style lang="less" scoped>
.face-discern {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .navigation-bar {
    width: 100%;
    height: 1rem;
    position: relative;
    text-align: center;
    border: 1px solid #f6f5f8;
    margin-bottom: 0.2rem;
    .icon-box {
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: 0rem;
      top: 0rem;
    }
    .collection-box {
      width: 1rem;
      height: 1rem;
      position: absolute;
      right: 0rem;
      top: 0rem;
    }
    .navigation-arrow {
      font: 0.4rem/1rem "宋体";
    }
    .collection {
      font: 0.4rem/1rem "宋体";
      color: #999;
    }
    .navigation-title {
      font: 0.34rem/1rem "PingFangSC-Medium";
      color: #3e3e3e;
      text-align: center;
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .cons-title {
      font-family: PingFangSC-Semibold;
      font-size: 17px;
      color: #888888;
      letter-spacing: 0.01px;
      margin: 0.6rem;
    }
    .face-box {
      width: 4rem;
      height: 4rem;
      //   background-color: #3e3e3e;
      background-image: url(../../../assets/why/images/header.jpg);
      background-size: 4rem;
      box-shadow: 0 0 10px 0 rgba(0, 90, 238, 0.16);
      border-radius: 50%;
    }
  }
}
</style>