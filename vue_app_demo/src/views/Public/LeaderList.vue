<template>
  <div class="leader-list">
    <!-- 顶部导航 -->
    <mt-header title="领导之窗" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="content-container">
      <div class="content-item">
        <div class="content-item-title">
          <img class="content-item-img" src="../../assets/why/images/国徽.png" alt>
          <span>中共安康市委</span>
        </div>
        <div class="content-info">
          <div class="content-info-item">
            <span class="info-item-job">书记</span>
            <div class="info-people-box">
              <span class="info-item-people" @click="goInfo">郭青</span>
            </div>
          </div>
          <div class="content-info-item">
            <span class="info-item-job">副书记</span>
            <div class="info-people-box">
              <span class="info-item-people" @click="goInfo">郭青函</span>
              <span class="info-item-people" @click="goInfo">郭青书</span>
            </div>
          </div>
          <div class="content-info-item">
            <span class="info-item-job">常委</span>
            <div class="info-people-box">
              <span class="info-item-people">郭青函</span>
              <span class="info-item-people">郭青书</span>
              <span class="info-item-people">郭青里</span>
              <span class="info-item-people">郭青时</span>
              <span class="info-item-people">郭青函</span>
              <span class="info-item-people">郭青</span>
              <span class="info-item-people">郭青里</span>
              <span class="info-item-people">郭青时</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">
          <img class="content-item-img" src="../../assets/why/images/国徽.png" alt>
          <span>中共安康市委</span>
        </div>
        <div class="content-info">
          <div class="content-info-item">
            <span class="info-item-job">书记</span>
            <div class="info-people-box">
              <span class="info-item-people" @click="goInfo">郭青</span>
            </div>
          </div>
          <div class="content-info-item">
            <span class="info-item-job">副书记</span>
            <div class="info-people-box">
              <span class="info-item-people">郭青函</span>
              <span class="info-item-people">郭青书</span>
            </div>
          </div>
          <div class="content-info-item">
            <span class="info-item-job">常委</span>
            <div class="info-people-box">
              <span class="info-item-people">郭青函</span>
              <span class="info-item-people">郭青书</span>
              <span class="info-item-people">郭青里</span>
              <span class="info-item-people">郭青时</span>
              <span class="info-item-people">郭青函</span>
              <span class="info-item-people">郭青</span>
              <span class="info-item-people">郭青里</span>
              <span class="info-item-people">郭青时</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">
          <img class="content-item-img" src="../../assets/why/images/国徽.png" alt>
          <span>中共安康市委</span>
        </div>
        <div class="content-info">
          <div class="content-info-item">
            <span class="info-item-job">书记</span>
            <div class="info-people-box">
              <span class="info-item-people">郭青</span>
            </div>
          </div>
          <div class="content-info-item">
            <span class="info-item-job">副书记</span>
            <div class="info-people-box">
              <span class="info-item-people">郭青函</span>
              <span class="info-item-people">郭青书</span>
            </div>
          </div>
          <div class="content-info-item">
            <span class="info-item-job">常委</span>
            <div class="info-people-box">
              <span class="info-item-people">郭青函</span>
              <span class="info-item-people">郭青书</span>
              <span class="info-item-people">郭青里</span>
              <span class="info-item-people">郭青时</span>
              <span class="info-item-people">郭青函</span>
              <span class="info-item-people">郭青</span>
              <span class="info-item-people">郭青里</span>
              <span class="info-item-people">郭青时</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goInfo() {
      this.$router.push({ path: "/leaderintroduce" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/global.css";
.leader-list {
  width: 100vw;
  background-color: #f6f5f8;
  .content-container {
    width: 100%;
    box-sizing: border-box;
    padding: 0.3rem 0;
    .content-item {
      width: 6.9rem;
      margin: 0 auto;
      box-shadow: 0 0 5px 0 rgba(0, 90, 238, 0.2);
      border-radius: 10px;
      background-color: #fff;
      .content-item-title {
        font: 0.3rem/1rem "PingFangSC-Medium";
        color: #3e3e3e;
        border-bottom: 1px solid #f6f5f8;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .content-item-img {
        width: 0.38rem;
        height: 0.4rem;
        padding-left: 0.3rem;
        margin-right: 0.2rem;
      }
    }
    .content-info {
      margin: 0.3rem;
      font: 0.28rem/0.86rem "PingFangSC-Regular";
      color: #3e3e3e;
      .content-info-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .info-people-box {
          color: #005aee;
          width: 4.9rem;

          .info-item-people {
            display: inline-block;
            width: 0.84rem;
            margin-left: 0.2rem;
            text-align-last: justify;
          }
        }
      }
    }
  }
}
</style>