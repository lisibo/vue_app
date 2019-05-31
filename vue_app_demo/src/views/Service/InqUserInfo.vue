<template>
  <div class="inq-userinfo">
    <!-- 顶部导航 -->
    <div class="navigation-bar">
      <div class="icon-box" @click="goBack">
        <Icon class="navigation-arrow" type="arrow-left"></Icon>
      </div>
      <span class="navigation-title">个人信息查询</span>
      <div class="collection-box">
        <Icon class="collection" type="collection"></Icon>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content-container">
      <div class="sev-cell">
        <span class="cell-title">姓名</span>
        <div class="inner-box">
          <span class="cell-inner inner">李实</span>
        </div>
      </div>
      <div class="sev-cell">
        <span class="cell-title">身份证号码</span>
        <div class="inner-box">
          <span class="cell-inner inner">12347654329876</span>
        </div>
      </div>
    </div>
    <Btn native-type="button" class="next-btn" @click="next">确认信息，进行身份验证</Btn>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.inq-userinfo {
  position: relative;
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