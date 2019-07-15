<template>
  <!-- 公开页 -->
  <div class="public">
    <!-- 顶部区域 -->
    <top-header></top-header>
    <!-- 中间区域 -->
    <div class="center-container">
      <div class="example-tabs">
        <Tabs box=".example-tabs" :value="activeTab" :scrollable="true" class="tab-box">
          <Pane label="新闻资讯" name="name1" ref="newPane">
            <div class="some-list">
              <div
                class="pane-item"
                v-for="(item,index) in list.newInfo.list.slice(0,4)"
                :key="index"
                @click="newInfo"
              >
                <p class="pane-item-title">{{item.title}}</p>
                <span class="pane-item-time">{{item.time}}</span>
              </div>
            </div>
          </Pane>
          <Pane label="政府文件" name="name2" ref="222">
            <div class="some-list">
              <div
                class="pane-item"
                v-for="(item,index) in list.newInfo.list.slice(0,4)"
                :key="index"
                @click="newInfo"
              >
                <p class="pane-item-title">{{item.title}}</p>
                <span class="pane-item-time">{{item.time}}</span>
              </div>
            </div>
          </Pane>
          <Pane label="领导动态" name="name3" ref="333">
            <!-- 部分列表 -->
            <div class="some-list">
              <div
                class="pane-item"
                v-for="(item,index) in list.newInfo.list.slice(0,4)"
                :key="index"
                @click="newInfo"
              >
                <p class="pane-item-title">{{item.title}}</p>
                <span class="pane-item-time">{{item.time}}</span>
              </div>
            </div>
          </Pane>
        </Tabs>
        <!-- 查看更多 -->
        <div class="center-more" @click="showMoreNews">
          <Icon type="arrow-dropdown"></Icon>
          <span class="title">查看更多</span>
        </div>
      </div>
    </div>
    <!-- 下部区域 -->
    <div class="bottom-container">
      <div class="bottom-top">
        <img class="img-item" @click="goLeaderInfo" src="../../assets/why/images/leader.png" alt>
        <img
          class="img-item"
          @click="goGovernment"
          src="../../assets/why/images/government.png"
          alt
        >
      </div>
      <div class="bottom-item">
        <div class="top-title" @click="goSvcList">
          <span class="blueline"></span>
          <span class="title">决策公开</span>
          <span class="more">
            <Icon type="arrow-right"></Icon>
          </span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>决策预公开</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>决策后公开</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title" @click="goSvcList">
          <span class="blueline"></span>
          <span class="title">执行公开</span>
          <span class="more">
            <Icon type="arrow-right"></Icon>
          </span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>执行过程公开</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>监督审计公开</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title" @click="goSvcList">
          <span class="blueline"></span>
          <span class="title">管理公开</span>
          <span class="more">
            <Icon type="arrow-right"></Icon>
          </span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>债券清单</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>行政执行公开</span>
          </div>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>监管信息公开</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>双随机抽查事项公开</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title" @click="goSvcList">
          <span class="blueline"></span>
          <span class="title">服务公开</span>
          <span class="more">
            <Icon type="arrow-right"></Icon>
          </span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>办事服务</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>公共企业事业</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title" @click="goSvcList">
          <span class="blueline"></span>
          <span class="title">结果公开</span>
          <span class="more">
            <Icon type="arrow-right"></Icon>
          </span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>落实情况公开</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>跟踪反馈公开</span>
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
  data() {
    return {
      // active状态的tab
      activeTab: 0,
      // 资讯信息
      list: {
        newInfo: {
          listType: "新闻资讯",
          list: [
            {
              title: "安康：扎实推进政务信息资源共享工作",
              time: "2019.02.03"
            },
            {
              title: "陕西政务开通“支付宝第三方账户快捷登陆”",
              time: "2019.02.03"
            },
            {
              title: "一秒读懂2019《政府工作报告》",
              time: "2019.02.03"
            },
            {
              title: "聚焦|陕西政务服务“一网通办”工作顺利推进",
              time: "2019.02.03"
            },
            {
              title: "安康：扎实推进政务信息资源共享工作",
              time: "2019.02.03"
            },
            {
              title: "陕西政务开通“支付宝第三方账户快捷登陆”",
              time: "2019.02.03"
            },
            {
              title: "一秒读懂2019《政府工作报告》",
              time: "2019.02.03"
            },
            {
              title: "聚焦|陕西政务服务“一网通办”工作顺利推进",
              time: "2019.02.03"
            },
            {
              title: "一秒读懂2019《政府工作报告》",
              time: "2019.02.03"
            },
            {
              title: "聚焦|陕西政务服务“一网通办”工作顺利推进",
              time: "2019.02.03"
            }
          ]
        },
        govInfo: {
          listType: "新闻资讯",
          list: [
            {
              title: "安康：扎实推进政务信息资源共享工作",
              time: "2019.02.03"
            },
            {
              title: "陕西政务开通“支付宝第三方账户快捷登陆”",
              time: "2019.02.03"
            },
            {
              title: "一秒读懂2019《政府工作报告》",
              time: "2019.02.03"
            },
            {
              title: "聚焦|陕西政务服务“一网通办”工作顺利推进",
              time: "2019.02.03"
            },
            {
              title: "安康：扎实推进政务信息资源共享工作",
              time: "2019.02.03"
            },
            {
              title: "陕西政务开通“支付宝第三方账户快捷登陆”",
              time: "2019.02.03"
            },
            {
              title: "一秒读懂2019《政府工作报告》",
              time: "2019.02.03"
            },
            {
              title: "聚焦|陕西政务服务“一网通办”工作顺利推进",
              time: "2019.02.03"
            },
            {
              title: "一秒读懂2019《政府工作报告》",
              time: "2019.02.03"
            },
            {
              title: "聚焦|陕西政务服务“一网通办”工作顺利推进",
              time: "2019.02.03"
            }
          ]
        },
        leaderInfo: {
          listType: "新闻资讯",
          list: [
            {
              title: "安康：扎实推进政务信息资源共享工作",
              time: "2019.02.03"
            },
            {
              title: "陕西政务开通“支付宝第三方账户快捷登陆”",
              time: "2019.02.03"
            },
            {
              title: "一秒读懂2019《政府工作报告》",
              time: "2019.02.03"
            },
            {
              title: "聚焦|陕西政务服务“一网通办”工作顺利推进",
              time: "2019.02.03"
            },
            {
              title: "安康：扎实推进政务信息资源共享工作",
              time: "2019.02.03"
            },
            {
              title: "陕西政务开通“支付宝第三方账户快捷登陆”",
              time: "2019.02.03"
            },
            {
              title: "一秒读懂2019《政府工作报告》",
              time: "2019.02.03"
            },
            {
              title: "聚焦|陕西政务服务“一网通办”工作顺利推进",
              time: "2019.02.03"
            },
            {
              title: "一秒读懂2019《政府工作报告》",
              time: "2019.02.03"
            },
            {
              title: "聚焦|陕西政务服务“一网通办”工作顺利推进",
              time: "2019.02.03"
            }
          ]
        }
      }
    };
  },
  methods: {
    // 选择城市
    chooseCity() {
      this.$router.push({ path: "/city" });
    },
    // 搜索页
    goSearch() {
      this.$router.push({ path: "/searchinfo" });
    },
    // 点击查看更多
    showMoreNews() {
      this.$router.push({ path: "/publiclist" });
    },
    // 产看服务列表
    goSvcList() {
      this.$router.push({ path: "/svclist" });
    },
    // 进入新闻详情页
    newInfo() {
      this.$router.push({ path: "/newinfo" });
    },
    // 进入到领导之窗页
    goLeaderInfo() {
      this.$router.push({ path: "/leaderlist" });
    },
    // 进入政府机构列表
    goGovernment() {
      this.$router.push({ path: "/government" });
    }
  }
};
</script>

<style lang="less" scoped>
.public {
  width: 100vw;
  margin-bottom: 1rem;
  box-sizing: border-box;
  padding-bottom: 0.3rem;
  // tab切换
  .center-container {
    width: 100vw;
    background-color: #fff;
    .center-more {
      width: 100%;
      height: 0.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font: 0.26rem/0.7rem "PingFangSC-Regular";
      color: #888888;
      .title {
        margin: 0 0.2rem;
      }
    }
    .pane-item {
      width: 95%;
      margin: 0 auto;
      height: 1rem;
      box-sizing: border-box;
      border-bottom: 1px solid #f6f5f8;
      display: flex;
      justify-content: space-between;
      .pane-item-title {
        font: 0.28rem/0.6rem "PingFangSC-Regular";
        color: #333333;
      }
      .pane-item-time {
        font: 0.22rem/0.4rem "PingFangSC-Regular";
        color: #999;
        align-self: flex-end;
      }
    }
    .pane-item:last-child {
      border-bottom: none;
    }
  }

  .bottom-container {
    width: 100vw;
    background-color: #f6f5f8;
    .bottom-top {
      width: 100%;
      box-sizing: border-box;
      padding: 0.3rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .img-item {
        width: 40%;
      }
    }
    .bottom-item {
      width: 100%;
      // height: 1.5rem;
      background-color: #fff;
      margin-bottom: 0.2rem;
      .item-top {
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid #f6f5f8;
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .small-box {
          width: 0.1rem;
          height: 0.3rem;
          background-color: #005aee;
          display: inline-block;
          margin-right: 0.3rem;
        }
        .title {
          font: 0.3rem/0.42rem "PingFangSC-Medium";
          color: #3e3e3e;
          flex: 2;
        }
        .more {
          font: 0.24rem/0.42rem "PingFangSC-Medium";
          color: #888;
          margin-right: 0.3rem;
        }
      }
      .item-content {
        width: 100%;
        height: 0.8rem;
        box-sizing: border-box;
        padding: 0 0.3rem;
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
  }
}
</style>