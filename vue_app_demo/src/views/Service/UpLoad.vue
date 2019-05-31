<template>
  <div class="upload-appendix">
    <!-- 顶部导航 -->
    <div class="navigation-bar">
      <div class="icon-box" @click="goBack">
        <Icon class="navigation-arrow" type="arrow-left"></Icon>
      </div>
      <span class="navigation-title">上传附件</span>
      <div class="collection-box">
        <Icon class="collection" type="collection"></Icon>
      </div>
    </div>
    <!-- 进度条 -->
    <Steps direction="horizontal" class="progress">
      <Step v-for="item in datalist" :key="item.id" :item="item"></Step>
    </Steps>
    <!-- 内容区域 -->
    <div class="content-container">
      <div class="content-top">
        <span class="small-box"></span>
        <span class="content-title">身份证（男）</span>
      </div>
      <div class="up-box">
        <div class="up-item">
          <Icon type="add" class="add"></Icon>
          <span>请上传身份证正面照片</span>
        </div>
      </div>
      <div class="content-top">
        <span class="small-box"></span>
        <span class="content-title">身份证（女）</span>
      </div>
      <div class="up-box">
        <div class="up-item">
          <Icon type="add" class="add"></Icon>
          <span>请上传身份证正面照片</span>
        </div>
        <div class="up-item">
          <Icon type="add" class="add"></Icon>
          <span>请上传身份证正面照片</span>
        </div>
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
        { id: "003", status: "finished", title: "填写资料", num: 3 },
        { id: "004", status: "finished", title: "上传附件", num: 4 },
        { id: "005", status: "", title: "提交审核", num: 5 }
      ]
    };
  },
  methods: {
    next() {
      this.$router.push({ path: "/verify" });
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.upload-appendix {
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
    .content-top {
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
    .up-box {
      width: 100vw;
      height: 2.4rem;
      box-sizing: border-box;
      padding: 0 0.3rem;
      margin: 0.3rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .up-item {
        width: 3rem;
        height: 2.4rem;
        box-shadow: 0 0.2px 5px 0 rgba(169, 169, 169, 0.23);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #979797;
        .add {
          font-size: 0.4rem;
          margin-bottom: 0.2rem;
        }
      }
    }
  }
  .nextBtn {
    background-color: #005aee;
    width: 6.9rem;
    height: 1rem;
    border-radius: 0.1rem;
    margin: 0.7rem 0.3rem;
  }
}
</style>