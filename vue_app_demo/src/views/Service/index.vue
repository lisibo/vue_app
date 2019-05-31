<template>
  <div class="service">
    <!-- 顶部区域 -->
    <div class="top-container">
      <div class="top-adress">
        <span class="city">安康市</span>
        <span class="weather">
          <img class="icon-weather" src="../../assets/why/images/search@2x.png" alt>
          15℃
        </span>
      </div>
      <div class="top-search">
        <img class="icon-search" src="../../assets/why/images/search@2x.png" alt>
        <input class="search-input" type="text" placeholder="请输入您要搜索的内容">
      </div>
    </div>
    <!-- 中间区域 -->
    <div class="center-container">
      <div class="center-item" @click="goPersonalSvc">
        <img class="center-img" src="../../assets/why/images/个人服务@2x.png" alt>
        <span class="center-title">个人服务</span>
      </div>
      <div class="center-item">
        <img class="center-img" src="../../assets/why/images/法人服务@2x.png" alt>
        <span class="center-title">法人服务</span>
      </div>
      <div class="center-item">
        <img class="center-img" src="../../assets/why/images/部门办事@2x.png" alt>
        <span class="center-title">部门办事</span>
      </div>
      <div class="center-item">
        <img class="center-img" src="../../assets/why/images/办事指南@2x.png" alt>
        <span class="center-title">办事指南</span>
      </div>
    </div>
    <!-- 下部区域 -->
    <div class="bottom-container">
      <div class="bottom-item">
        <div class="item-top" @click="goSvcList">
          <span class="title">办理类</span>
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
        <div class="item-top" @click="goSvcList">
          <span class="title">查询类</span>
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
        <div class="item-top" @click="goSvcList">
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
        <div class="item-top" @click="goSvcList">
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
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  methods: {
    goSvcList() {
      this.$router.push({ path: "/svclist" });
    },
    goPersonalSvc() {
      this.$router.push({ path: "/personalsvc" });
    }
  }
};
</script>

<style lang="less" scoped>
.service {
  width: 100vw;
  height: 100vh;
  .top-container {
    height: 0.5rem;
    margin: 0.15rem 2.5%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    .top-adress {
      font: 0.34rem/0.5rem "PingFangSC-Medium";
      color: #3e3e3e;
      .city {
        margin-right: 0.1rem;
      }
      .icon-weather {
        width: 0.26rem;
        height: 0.26rem;
      }
      .weather {
        font: 0.26rem/0.5rem "PingFangSC-Regular";
        color: #656565;
      }
    }
    .top-search {
      width: 4.24rem;
      height: 0.5rem;
      background: #f6f5f8;
      border-radius: 12.5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon-search {
        width: 0.26rem;
        height: 0.26rem;
      }
      .search-input {
        width: 80%;
        height: 80%;
        outline: none;
        border: none;
        background-color: #f6f5f8;
      }
    }
  }
  .center-container {
    box-sizing: border-box;
    width: 100vw;
    height: 2rem;
    padding: 0 0.2rem;
    margin-bottom: 0.3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .center-item {
      flex: 1;
      height: 100%;
      margin-right: 0.1rem;
      background: #ffffff;
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
    padding: 0 0.2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .bottom-item {
      width: 100%;
      height: 2rem;
      margin-bottom: 0.2rem;
      .item-top {
        width: 100%;
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font: 0.3rem/0.42rem "PingFangSC-Medium";
          color: #3e3e3e;
        }
        .more {
          font: 0.24rem/0.42rem "PingFangSC-Medium";
          color: #888;
        }
      }
      .item-content {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: flex-start;
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