<template>
  <!-- 识别完跳转中页面 -->
  <div class="jump-page">
    <!-- 顶部导航 -->
    <mt-header title="个人信息查询" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="content-container" @click="next">
      <p class="cons-title">识别成功！即将跳转至查询结果...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InqJump",
  methods: {
    next() {
      this.$router.push({ path: "/inqinfodetailed" });
    }
  }
};
</script>

<style lang="less" scoped>
.jump-page {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
}
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
  text-align: center;
  .cons-title {
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #3e3e3e;
    margin-top: 2rem;
  }
}
</style>