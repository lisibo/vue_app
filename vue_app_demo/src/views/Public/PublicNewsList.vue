<template>
  <!-- 公开新闻列表 -->
  <div class="public-list">
    <!-- 顶部导航 -->
    <mt-header title="公开" class="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <!-- tab -->
    <div class="center-container">
      <div class="example-tabs">
        <Tabs box=".example-tabs" :value="activeTab" :scrollable="true" class="tab-box">
          <Pane label="新闻资讯" name="name1" ref="newPane">
            <div
              class="pane-item"
              v-for="(item,index) in list.newInfo.list"
              :key="index"
              @click="newInfo"
            >
              <p class="pane-item-title">{{item.title}}</p>
              <span class="pane-item-time">{{item.time}}</span>
            </div>
          </Pane>
          <Pane label="政府文件" name="name2" ref="222">
            <div
              class="pane-item"
              v-for="(item,index) in list.newInfo.list"
              :key="index"
              @click="newInfo"
            >
              <p class="pane-item-title">{{item.title}}</p>
              <span class="pane-item-time">{{item.time}}</span>
            </div>
          </Pane>
          <Pane label="领导动态" name="name3" ref="333">
            <div
              class="pane-item"
              v-for="(item,index) in list.newInfo.list"
              :key="index"
              @click="newInfo"
            >
              <p class="pane-item-title">{{item.title}}</p>
              <span class="pane-item-time">{{item.time}}</span>
            </div>
          </Pane>
        </Tabs>
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
    // 进入新闻详情页
    newInfo() {
      this.$router.push({ path: "/newinfo" });
    }
  }
};
</script>

<style lang="less" scoped>
.public-list {
  .center-container {
    width: 100vw;
    min-height: 100vh;
    background-color: #fff;
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
}
</style>