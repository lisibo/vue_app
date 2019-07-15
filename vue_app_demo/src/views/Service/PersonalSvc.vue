<template>
  <div class="personal-svc page">
    <!-- 顶部导航 -->
    <mt-header title="独生子女父母光荣" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <mt-button slot="right" @click="collectHandle">
        <!-- 未收藏 -->
        <span class="iconfont iconunie601" v-if="collected==false"></span>
        <!-- 已收藏 -->
        <span class="iconfont iconshoucang1" v-else></span>
      </mt-button>
    </mt-header>

    <div class="example-tabs">
      <Tabs box=".example-tabs" :value="data.activeTab" :scrollable="true">
        <Pane id="all-inner" label="主体服务" name="all-inner">
          <div class="bottom-container">
            <div class="bottom-item">
              <div class="item-top">
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
              <div class="item-top">
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
              <div class="item-top">
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
              <div class="item-top">
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
        </Pane>
        <Pane class="part-inner" label="部门服务" name="part-inner">
          <div class="bottom-container">
            <div class="bottom-item">
              <div class="item-top">
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
              <div class="item-top">
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
              <div class="item-top">
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
              <div class="item-top">
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
        </Pane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        activeTab: 0 // active状态的tab
      }
    };
  },
  methods: {
    handleClick: function(index) {
      this.data.activeTab = index; // active状态的tab
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/global.css";
.personal-svc {
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
    .navigation-arrow {
      font: 0.4rem/1rem "宋体";
    }
    .navigation-title {
      font: 0.34rem/1rem "PingFangSC-Medium";
      color: #3e3e3e;
      text-align: center;
    }
  }
  // 内容区域
  .bottom-container {
    width: 100vw;
    margin-top: 0.2rem;
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