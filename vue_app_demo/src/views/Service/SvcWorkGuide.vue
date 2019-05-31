<template>
  <div class="svc-guide">
    <!-- 顶部导航 -->
    <div class="navigation-bar">
      <div class="icon-box" @click="goBack">
        <Icon class="navigation-arrow" type="arrow-left"></Icon>
      </div>
      <span class="navigation-title">独生子女光荣证</span>
      <div class="collection-box">
        <Icon class="collection" type="collection"></Icon>
      </div>
    </div>

    <!-- 进度条 -->
    <Steps direction="horizontal" class="progress">
      <Step v-for="item in datalist" :key="item.id" :item="item"></Step>
    </Steps>

    <!-- 内容 -->
    <div class="content-container">
      <div class="content-top">
        <span class="small-box"></span>
        <span class="content-title">独生子女父母光荣证办理指南</span>
      </div>
      <div class="content">
        <div class="content-item" data-show="fasle" ref="cell">
          <div class="content-cell" @click="showInfo" data-show="true">
            <span>基本要素</span>
            <Icon class="cell-icon" type="arrow-down"></Icon>
          </div>
          <div class="content-info">
            <div class="qa">
              <p class="question">问题一：资料不齐全怎么办？</p>
              <p class="answer">答 案：需补齐后再提交申请需补齐后再提交申请</p>
            </div>
            <div class="qa">
              <p class="question">问题一：资料不齐全怎么办？</p>
              <p class="answer">答 案：需补齐后再提交申请</p>
            </div>
          </div>
        </div>
        <div class="content-item" data-show="true" ref="cell">
          <div class="content-cell" @click="showInfo" data-show="false">
            <span>申请材料</span>
            <Icon class="cell-icon" type="arrow-down"></Icon>
          </div>
          <!-- <div class="content-info">
            <div class="qa">
              <p class="question">问题一：资料不齐全怎么办？</p>
              <p class="answer">答 案：需补齐后再提交申请需补齐后再提交申请</p>
            </div>
            <div class="qa">
              <p class="question">问题一：资料不齐全怎么办？</p>
              <p class="answer">答 案：需补齐后再提交申请</p>
            </div>
          </div>-->
        </div>
        <div class="content-item" data-show="true" ref="cell">
          <div class="content-cell" @click="showInfo" data-show="false">
            <span>申请材料</span>
            <Icon class="cell-icon" type="arrow-down"></Icon>
          </div>
          <!-- <div class="content-info">
            <div class="qa">
              <p class="question">问题一：资料不齐全怎么办？</p>
              <p class="answer">答 案：需补齐后再提交申请需补齐后再提交申请</p>
            </div>
            <div class="qa">
              <p class="question">问题一：资料不齐全怎么办？</p>
              <p class="answer">答 案：需补齐后再提交申请</p>
            </div>
          </div>-->
        </div>
      </div>
    </div>
    <!-- 跳转按钮 -->
    <Btn native-type="button" class="nextBtn" @click="next">下一步</Btn>
  </div>
</template>

<script>
export default {
  name: "SvcSingleChild",
  data() {
    return {
      datalist: [
        { id: "001", status: "finished", title: "办事指南", num: 1 },
        { id: "002", status: "", title: "条件自检", num: 2 },
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
      this.$router.push({ path: "/svccheck" });
    },
    showInfo(e) {}
  }
};
</script>

<style lang="less" scoped>
.svc-guide {
  width: 100vw;
  min-height: 100vh;
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
    margin: 0.5rem 0;
  }
  .content-container {
    width: 100%;
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
    .content {
      width: 100%;
      .content-item {
        .content-cell {
          width: 100%;
          height: 1.1rem;
          box-sizing: border-box;
          padding: 0 0.35rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font: 0.28rem/1.1rem "PingFangSC-Regular";
          color: #3e3e3e;
          border: 1px solid #f6f5f8;
        }
        .hui-icon_arrow-down {
          color: #b8b8b8;
        }
        .qa {
          margin: 0.21rem 0;
        }
        .content-info {
          width: 100%;
          box-sizing: border-box;
          padding: 0 0.3rem;
          font: 0.24rem/0.4rem "PingFangSC-Regular";
          color: #262626;
        }
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
    bottom: 0.2rem;
  }
}
</style>