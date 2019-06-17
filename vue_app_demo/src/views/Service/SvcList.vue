<template>
  <div class="svc-list">
    <!-- 顶部导航 -->
    <mt-header title="缴费类" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 列表 -->
    <div class="sev-list">
      <div class="sev-cell" @click="SvcHandle">
        <Icon class="cell-icon" type="statistics"></Icon>
        <span class="cell-title">独生子女父证</span>
        <Icon class="cell-icon" type="arrow-right"></Icon>
      </div>
      <div class="sev-cell" @click="InqHandle">
        <Icon class="cell-icon" type="statistics"></Icon>
        <span class="cell-title">个人信息查询</span>
        <Icon class="cell-icon" type="arrow-right"></Icon>
      </div>
      <div class="sev-cell">
        <Icon class="cell-icon" type="statistics"></Icon>
        <span class="cell-title">居住证申领（就业）</span>
        <Icon class="cell-icon" type="arrow-right"></Icon>
      </div>
      <div class="sev-cell">
        <Icon class="cell-icon" type="statistics"></Icon>
        <span class="cell-title">居住证申领（居住）</span>
        <Icon class="cell-icon" type="arrow-right"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SvcList",
  methods: {
    goBack() {
      this.$router.back();
    },
    // 独生子女证办理(办理类)
    SvcHandle() {
      this.$router.push({ path: "/svcguide" });
    },
    // 个人信息查询（查询类）
    InqHandle() {
      this.$router.push({ path: "/inqinfo" });
    }
  }
};
</script>

<style lang="less" scoped>
.svc-list {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  .sev-list {
    width: 100%;
    border: 1px solid #f6f5f8;
    .sev-cell {
      width: 95%;
      height: 1.1rem;
      margin: 0 auto;
      border-bottom: 1px solid #f6f5f8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cell-icon {
        font: 0.28rem/1rem "PingFangSC-Regular";
        margin-right: 0.2rem;
      }
      .cell-title {
        flex: 2;
        font: 0.3rem/1rem "PingFangSC-Regular";
        color: #3e3e3e;
      }
    }
  }
}
</style>