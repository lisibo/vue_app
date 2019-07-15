<template>
  <div class="help-poor">
    <!-- 顶部导航 -->
    <mt-header title="金融扶贫专区" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- 列表内容 -->
    <div class="center-container">
      <div class="example-tabs">
        <Tabs box=".example-tabs" :value="activeTab" :scrollable="true" class="tab-box">
          <Pane label="扶贫新闻" name="name1" ref="newPane">
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
          <Pane label="扶贫政策" name="name2" ref="222">
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
    <!-- 下部模块 -->
    <div class="bottom-container">
      <div class="bottom-item">
        <div class="top-title">
          <span class="blueline"></span>
          <span class="title">金融扶贫产品</span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>善融扶贫</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>扶贫助农贷</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>新社区工厂贷</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>富硒茶叶贷</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>扶贫小额信用贷</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title">
          <span class="blueline"></span>
          <span class="title">扶贫办事</span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>残疾人求值办事</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>公积金失业销户提取</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>公积金重病部分提取</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>法律事务所查询</span>
          </div>
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>法律援助机构查询</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title">
          <span class="blueline"></span>
          <span class="title">扶贫教育</span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>敬请期待</span>
          </div>
        </div>
      </div>
      <div class="bottom-item">
        <div class="top-title">
          <span class="blueline"></span>
          <span class="title">扶贫医疗</span>
        </div>
        <div class="item-content">
          <div class="item-content-inner">
            <Icon class="icon-content-inner" type="speaker"></Icon>
            <span>敬请期待</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // active状态的tab
      activeTab: 0,
      // 资讯信息
      list: {
        newInfo: {
          listType: "扶贫新闻",
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
          listType: "扶贫政策",
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
    newInfo() {
      this.$router.push({ path: "/newinfo" });
    },
    showMoreNews() {
      this.$router.push({ path: "/publiclist" });
    }
  }
};
</script>

<style lang="less" scoped>
.help-poor {
  .center-container {
    width: 100vw;
    background-color: #fff;
    .hui-tabs_inkbar {
      background-color: #f00;
    }
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
    padding-top: 0.2rem;
    .bottom-item {
      width: 100%;
      background-color: #fff;
      margin-bottom: 0.2rem;
      .item-content {
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.3rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
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