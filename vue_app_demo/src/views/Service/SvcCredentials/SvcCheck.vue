<template>
  <div class="svc-check">
    <!-- 顶部导航 -->
    <mt-header title="独生子女父母光荣" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <!-- 进度条 -->
    <Steps direction="horizontal" class="progress">
      <Step v-for="item in datalist" :key="item.id" :item="item"></Step>
    </Steps>
    <!-- 内容 -->
    <div class="content-container">
      <div class="top-title">
        <span class="blueline"></span>
        <span class="title">条件自检</span>
      </div>
      <div class="content">
        <p class="content-title">申请临时进口设备应当具备一下几个条件：</p>
        <p class="tip">申请临时进口设备需要在国内临时实在国内临时实施发射（如技术、比赛等）的</p>
        <p>1、申请临时进口设备应当具备合法的用途；</p>
        <p>2、申请临时进口设备应当具备合法的用途；</p>
        <p>3、申请临时进口设备应当具备合法的用途；</p>
      </div>
    </div>
    <Btn native-type="button" class="nextBtn" @click="next">下一步</Btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: [
        { id: "001", status: "finished", title: "办事指南", num: 1 },
        { id: "002", status: "finished", title: "条件自检", num: 2 },
        { id: "003", status: "", title: "填写资料", num: 3 },
        { id: "004", status: "", title: "上传附件", num: 4 },
        { id: "005", status: "", title: "提交审核", num: 5 }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    next() {
      this.$router.push({ path: "/svcfillin" });
    }
  }
};
</script>

<style lang="less" scoped>
.svc-check {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  position: relative;
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
  .progress {
    width: 100%;
    margin: 0.5rem 0;
  }
  .content-container {
    width: 100%;
    .content {
      width: 100%;
      box-sizing: border-box;
      padding: 0.2rem 0.2rem;
      p {
        font: 0.26rem/0.7rem "宋体";
        color: #262626;
      }
    }
  }
  .nextBtn {
    background-color: #005aee;
    width: 6.9rem;
    height: 1rem;
    border-radius: 0.1rem;
    margin: 0.2rem 0.3rem;
    position: absolute;
    bottom: 0;
  }
}
</style>