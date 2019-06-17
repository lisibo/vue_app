<template>
  <!-- 服务页 -->
  <div class="service">
    <!-- 顶部区域 -->
    <top-header></top-header>
    <!-- 中间区域 -->
    <div class="center-container">
      <div class="center-item" @click="goPersonalSvc">
        <img class="center-img" src="../../assets/why/images/个人服务@2x.png" alt>
        <span class="center-title">个人服务</span>
      </div>
      <div class="center-item" @click="goPersonalSvc">
        <img class="center-img" src="../../assets/why/images/法人服务@2x.png" alt>
        <span class="center-title">法人服务</span>
      </div>
      <div class="center-item" @click="goPersonalSvc">
        <img class="center-img" src="../../assets/why/images/部门办事@2x.png" alt>
        <span class="center-title">部门办事</span>
      </div>
      <div class="center-item" @click="goPersonalSvc">
        <img class="center-img" src="../../assets/why/images/办事指南@2x.png" alt>
        <span class="center-title">办事指南</span>
      </div>
    </div>
    <!-- 下部区域 -->
    <div class="bottom-container">
      <div class="bottom-item">
        <!-- 标题 -->
        <div class="top-title" @click="goSvcList">
          <span class="blueline"></span>
          <span class="title">办理类</span>
          <span class="more">
            更多
            <Icon type="arrow-right"></Icon>
          </span>
        </div>
        <!-- 内容 -->
        <div class="item-content">
          <div class="item-content-inner">
            <span class="iconfont iconelectricity_icon font-icon"></span>
            <span>电台呼号指配审批</span>
          </div>
          <div class="item-content-inner">
            <span class="iconfont iconxuewei font-icon"></span>

            <span>食盐定点批发许可</span>
          </div>
          <div class="item-content-inner">
            <span class="iconfont iconcaidan- font-icon"></span>

            <span>开发盐资源、开办制...</span>
          </div>
          <div class="item-content-inner">
            <span class="iconfont iconlvyouguanguang font-icon"></span>
            <span>粮食企业收购资格认定</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title" @click="goSvcList">
          <span class="blueline"></span>
          <span class="title">查询类</span>
          <span class="more">
            更多
            <Icon type="arrow-right"></Icon>
          </span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <span class="iconfont iconlvyouguanguang font-icon"></span>
            <span>电台呼号指配审批</span>
          </div>
          <div class="item-content-inner">
            <span class="iconfont iconlvyouguanguang font-icon"></span>
            <span>食盐定点批发许可</span>
          </div>
          <div class="item-content-inner">
            <span class="iconfont iconlvyouguanguang font-icon"></span>
            <span>开发盐资源、开办制...</span>
          </div>
          <div class="item-content-inner">
            <span class="iconfont iconlvyouguanguang font-icon"></span>
            <span>粮食企业收购资格认定</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title" @click="goSvcList">
          <span class="blueline"></span>
          <span class="title">预约类</span>
          <span class="more">
            更多
            <Icon type="arrow-right"></Icon>
          </span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>电台呼号指配审批</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>食盐定点批发许可</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>开发盐资源、开办制...</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>粮食企业收购资格认定</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title" @click="goSvcList">
          <span class="blueline"></span>
          <span class="title">缴费类</span>
          <span class="more">
            更多
            <Icon type="arrow-right"></Icon>
          </span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>电台呼号指配审批</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>食盐定点批发许可</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>开发盐资源、开办制...</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>粮食企业收购资格认定</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader/TopHeader.vue";
export default {
  components: {
    TopHeader
  },
  methods: {
    chooseCity() {
      this.$router.push({ path: "/city" });
    },
    goSvcList() {
      this.$router.push({ path: "/svclist" });
    },
    goPersonalSvc() {
      this.$router.push({ path: "/personalsvc" });
    },
    // 去搜索详情页
    goSearch() {
      this.$router.push({ path: "/searchinfo" });
    }
  }
};
</script>

<style lang="less" scoped>
.service {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  .center-container {
    box-sizing: border-box;
    width: 100vw;
    height: 2rem;
    padding: 0 0.2rem;
    margin: 0.2rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .center-item {
      flex: 1;
      height: 100%;
      margin-right: 0.1rem;
      box-shadow: 0 0 3px 0 rgba(0, 90, 238, 0.16);
      border-radius: 4px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .center-img {
        width: 0.74rem;
        height: 0.88rem;
        margin-top: 0.1rem;
      }
      .center-title {
        font: 0.28rem/0.4rem "PingFangSC-Medium";
        color: #3e3e3e;
      }
    }
    .center-item:last-child {
      margin-right: 0;
    }
  }
  .bottom-container {
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .bottom-item {
      width: 100%;
      height: 2rem;
      margin-bottom: 0.2rem;
      .item-content {
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.2rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: flex-start;
        .font-icon {
          display: inline-block;
          width: 0.3rem;
          height: 0.3rem;
          color: #f00;
          // background-color: #f00;
        }
        .item-content-inner {
          width: 50%;
          font: 0.28rem/0.7rem "PingFangSC-Light";
          color: #3e3e3e;
          .icon-content-inner {
            width: 0.3rem;
            height: 0.3rem;
          }
        }
      }
    }
    .hui-icon_speaker {
      color: #f00;
    }
  }
}
</style>