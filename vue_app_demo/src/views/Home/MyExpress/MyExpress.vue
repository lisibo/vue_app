<template>
  <div class="my-express page">
    <!-- 顶部导航 -->
    <mt-header title="我的快递" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <mt-button slot="right" class="add-express" @click="addExpress">新增快递</mt-button>
    </mt-header>
    <!-- 快递查询 -->
    <div class="express-search">
      <div>
        <mt-cell title="快递公司" is-link value="顺丰"></mt-cell>
        <mt-cell title="快递状态" is-link value="待揽件"></mt-cell>
      </div>
      <div class="search-box">
        <mt-button class="search-btn" @click="goExpressInfo">查询</mt-button>
      </div>
    </div>
    <!-- 快递信息 -->
    <div class="info-session">
      <div class="info-header express-info">
        <span>快递单号</span>
        <span>快递公司</span>
        <span>商品信息</span>
        <span>快递状态</span>
      </div>
      <div class="info-item express-info">
        <span>1234567880</span>
        <span>韵达快递</span>
        <span>身份证，结婚证，户口本</span>
        <span>等待揽收</span>
      </div>
      <div class="info-item express-info">
        <span>1234567880</span>
        <span>韵达快递</span>
        <span>身份证，结婚证，户口本</span>
        <span>等待揽收</span>
      </div>
      <div class="info-item express-info">
        <span>1234567880</span>
        <span>韵达快递</span>
        <span>身份证，结婚证，户口本</span>
        <span>等待揽收</span>
      </div>
      <div class="info-item express-info">
        <span>1234567880</span>
        <span>韵达快递</span>
        <span>身份证，结婚证，户口本</span>
        <span>等待揽收</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goExpressInfo() {
      this.$router.push({ path: "/expressinfo" });
    },
    addExpress() {
      this.$router.push({ path: "/addexpress" });
    }
  }
};
</script>

<style lang="less" scoped>
.my-express {
  width: 100vw;
  .header {
    .add-express {
      font-size: 0.24rem;
      color: #005aee;
    }
  }
  .express-search {
    width: 100vw;
    .search-btn {
      width: 3.5rem;
      height: 0.9rem;
      margin: 0.4rem 2rem 0.6rem;
      background-color: #005aee;
      color: #fff;
      width: 3.35rem;
      height: 0.9rem;
    }
  }
  .info-session {
    .express-info {
      width: 100vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font: 0.26rem/0.7rem "PingFangSC-Regular";
      text-align: center;
      border-top: 1px solid #f6f5f8;
      border-bottom: 1px solid #f6f5f8;
      span {
        width: 25%;
        height: 1.1rem;
        box-sizing: border-box;
        padding: 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .info-header {
      color: #888;
    }
  }
}
</style>