<template>
  <div class="svc-list">
    <div class="navigation-bar">
      <div class="icon-box" @click="goBack">
        <Icon class="navigation-arrow" type="arrow-left"></Icon>
      </div>
      <span class="navigation-title">缴费类</span>
    </div>
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
      console.log(1111);
    },
    // 独生子女证办理(办理类)
    goHandle() {
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
    .navigation-arrow {
      font: 0.4rem/1rem "宋体";
    }
    .navigation-title {
      font: 0.34rem/1rem "PingFangSC-Medium";
      color: #3e3e3e;
      text-align: center;
    }
  }
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