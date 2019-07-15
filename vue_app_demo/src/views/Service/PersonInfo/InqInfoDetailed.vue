<template>
  <!-- 个人信息展示页 -->
  <div class="info-detailed">
    <!-- 顶部导航 -->
    <mt-header title="个人信息查询" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="content-container">
      <div class="top-title">
        <span class="blueline"></span>
        <span class="title">职工基本信息</span>
      </div>
      <div class="content">
        <mt-cell title="单位账号" value="12345678909"></mt-cell>
        <mt-cell title="单位名称" value="公积金管理中心"></mt-cell>
        <mt-cell title="个人账号" value="12334543245"></mt-cell>
        <mt-cell title="职工姓名" value="李哈"></mt-cell>
        <mt-cell title="证件号码" value="411903199409230987"></mt-cell>
      </div>
      <div class="top-title second">
        <span class="blueline"></span>
        <span class="title">职工基本信息</span>
      </div>
      <div class="content">
        <mt-cell title="月缴金额（元）" value="3000"></mt-cell>
        <mt-cell title="当前余额（元）" value="12533"></mt-cell>
        <mt-cell title="汇缴年月" value="1年"></mt-cell>
        <mt-cell title="工资基数（元）" value="3000"></mt-cell>
        <mt-cell title="单位缴存比例（%）" value="30"></mt-cell>
        <mt-cell title="职工缴存比例（%）" value="30"></mt-cell>
        <mt-cell title="汇缴状态（%）" value="3"></mt-cell>
      </div>
    </div>
    <Btn native-type="button" class="next-btn" @click="goHome">首页</Btn>
  </div>
</template>

<script>
export default {
  name: "InqInfoDetailed",
  methods: {
    goHome() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<style lang="less" scoped>
.info-detailed {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  .content-container {
    width: 100%;
    .content-top {
      margin: 0.4rem 0 0.2rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 0.2rem;
      .small-box {
        width: 0.1rem;
        height: 0.3rem;
        background-color: #005aee;
        display: inline-block;
        margin-right: 0.3rem;
      }
      .content-title {
        font: 0.3rem/0.4rem "PingFangSC-Medium";
        color: #3e3e3e;
      }
    }
    .content {
      width: 100%;
      .nav-bar {
        width: 100vw;
      }
    }
  }
  .next-btn {
    background-color: #005aee;
    width: 6.9rem;
    height: 1rem;
    border-radius: 0.1rem;
    margin: 0.7rem 0.3rem;
  }
}
</style>