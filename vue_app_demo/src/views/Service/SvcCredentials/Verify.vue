<template>
  <div class="verify">
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
    <!-- 内容区域 -->

    <!-- <div class="fail-container content-container">
      <Icon type="warnning" class="fail-icon"></Icon>
      <span class="fail-title">您的业务已提交失败</span>
      <span class="tips-title">当前网络链接失败，请重试提交</span>
    </div>-->
    <div class="success-container content-container">
      <Icon type="selected" class="success-icon"></Icon>
      <span class="success-title">您的业务已提交成功</span>
      <span class="num">申请编号为：23444556654345675</span>
      <span class="tips-title">我们会在1个工作日内以短信的形式通知给您，或者您也可以进入个人中心查看办事进度</span>
    </div>

    <div class="btn-box">
      <Btn native-type="button" class="mine-btn" @click="goMine" plain>个人中心</Btn>
      <Btn native-type="button" class="next-btn" @click="next">完成</Btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: [
        { id: "001", status: "finished", title: "办事指南", num: 1 },
        { id: "002", status: "finished", title: "条件自检", num: 2 },
        { id: "003", status: "finished", title: "填写资料", num: 3 },
        { id: "004", status: "finished", title: "上传附件", num: 4 },
        { id: "005", status: "finished", title: "提交审核", num: 5 }
      ]
    };
  },
  methods: {
    next() {
      this.$router.push({ path: "/home" });
    },
    goBack() {
      this.$router.back();
    },
    goMine() {
      this.$router.push({ path: "/mine" });
    }
  }
};
</script>

<style lang="less" scoped>
.verify {
  position: relative;
  min-height: 100vh;
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
  .progress {
    margin: 0.5rem 0;
  }
  .content-container {
    width: 100vw;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .fail-icon {
      color: #ff989e;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .fail-title {
      font: 0.34rem/0.48rem "PingFangSC-Regular";
      color: #ff989e;
    }
    .success-icon {
      color: #9bdf4c;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .success-title {
      font: 0.34rem/0.48rem "PingFangSC-Regular";
      color: #9bdf4c;
    }
    .tips-title {
      font: 0.26rem/0.36rem "PingFangSC-Regular";
      color: #979797;
      text-align: center;
      margin: 1rem 0.5rem 0;
    }
    .num {
      font: 0.26rem/0.46rem "PingFangSC-Regular";
      color: #979797;
    }
  }
  .btn-box {
    width: 100vw;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .mine-btn {
    width: 40%;
    height: 1rem;
    border: 1px solid #005aee;
    color: #005aee;
    border-radius: 0.1rem;
    margin-left: 8%;
  }
  .next-btn {
    background-color: #005aee;
    width: 40%;
    height: 1rem;
    border-radius: 0.1rem;
    margin: 0.7rem 0.3rem;
  }
}
</style>