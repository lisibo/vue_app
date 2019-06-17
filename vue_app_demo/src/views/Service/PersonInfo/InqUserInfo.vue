<template>
  <!-- 信息确认页 -->
  <div class="inq-userinfo">
    <!-- 顶部导航 -->
    <mt-header title="个人信息查询" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="content-container">
      <mt-cell title="姓名" value="李实"></mt-cell>
      <mt-cell title="身份证号码" value="12347654329876"></mt-cell>
    </div>
    <Btn native-type="button" class="next-btn" @click="next">确认信息，进行身份验证</Btn>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push({ path: "/inqfacediscern" });
    }
  }
};
</script>

<style lang="less" scoped>
.inq-userinfo {
  position: relative;
  min-height: 100vh;
  background-color: #fff;
  .sev-cell {
    width: 95%;
    height: 1.1rem;
    margin: 0 auto;
    border-bottom: 1px solid #f6f5f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: 0.3rem/1rem "PingFangSC-Regular";
    position: relative;
    .cell-title {
      font: 0.3rem/1rem "PingFangSC-Regular";
      color: #3e3e3e;
    }
    .tips {
      position: absolute;
      bottom: 0;
      left: 0;
      font: 0.18rem/0.4rem "PingFangSC-Regular";
      color: #f4445a;
    }
    .inner-box {
      .cell-icon {
        font-size: 0.28rem;
        margin-right: 0.2rem;
      }
    }
    .inner {
      color: #b8b8b8;
    }
  }
  .next-btn {
    position: relative;
    left: 0;
    bottom: 0;
    background-color: #005aee;
    width: 6.9rem;
    height: 1rem;
    border-radius: 0.1rem;
    margin: 0.7rem 0.3rem;
  }
}
</style>