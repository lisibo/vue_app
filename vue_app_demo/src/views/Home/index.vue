<template>
  <!-- 首页 -->
  <div class="home">
    <!-- 顶部区域 -->
    <top-header></top-header>
    <!-- 内容区域 -->
    <div class="content-container">
      <!-- 资讯消息 -->
      <div class="message-session">
        <img class="message-img" src="../../assets/images/资讯.png" alt>
        <div class="message-list">
          <p>安康市政务服务平台新版建立，用户办业务是的说的的的ssss的额的</p>
          <p>您申请办理的普通护照补发申请已通过</p>
        </div>
      </div>
      <!-- 服务列表 -->
      <div class="serviceList-session">
        <div class="sev-item" @click="goMyExpress">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">快递服务</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">用电缴费</span>
        </div>
        <div class="sev-item" @click="SeeMore">
          <span class="iconfont iconxiaoxi1 font-icon"></span>
          <span class="sev-name">查看更多</span>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="banner">
        <div class="banner-wrap">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img
                class="bannerImg"
                src="../../assets/why/images/banner.png"
                alt
                @click="goHelpPoor"
              >
            </mt-swipe-item>
            <mt-swipe-item>222222</mt-swipe-item>
            <mt-swipe-item>333333</mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <!-- 新闻模块 -->
      <div class="news-container">
        <!-- 标题 -->
        <div class="top-title">
          <span class="blueline"></span>
          <span class="title">安康新闻</span>
        </div>
        <!-- 新闻内容 -->
        <div class="news-item" @click="goNewInfo">
          <img class="news-img" src="../../assets/why/images/new1.png" alt>
          <div class="new-info">
            <div>
              <span class="news-type">新闻</span>
              <span class="news-title">陕西省统一身份认证系统用户使用说明。</span>
            </div>
            <p class="news-time">2019.9.12</p>
          </div>
        </div>
        <div class="news-item" @click="goNewInfo">
          <img class="news-img" src="../../assets/why/images/new1.png" alt>
          <div class="new-info">
            <div>
              <span class="news-type">新闻</span>
              <span class="news-title">陕西省统一身份认证系统用户使用说明。</span>
            </div>
            <p class="news-time">2019.9.12</p>
          </div>
        </div>
        <div class="news-item" @click="goNewInfo">
          <img class="news-img" src="../../assets/why/images/new1.png" alt>
          <div class="new-info">
            <div>
              <span class="news-type">新闻</span>
              <span class="news-title">陕西省统一身份认证系统用户使用说明。</span>
            </div>
            <p class="news-time">2019.9.12</p>
          </div>
        </div>
        <div class="news-item" @click="goNewInfo">
          <img class="news-img" src="../../assets/why/images/new1.png" alt>
          <div class="new-info">
            <div>
              <span class="news-type">新闻</span>
              <span class="news-title">陕西省统一身份认证系统用户使用说明。</span>
            </div>
            <p class="news-time">2019.9.12</p>
          </div>
        </div>
      </div>
      <!-- 底部模块 -->
      <div class="bottom-session">
        <div class="bot-item">
          <img class="bot-img" src="../../assets/why/images/国徽.png" alt>
          <span class="bot-title">信用安康</span>
        </div>
        <div class="bot-item">
          <img class="bot-img" src="../../assets/why/images/学习.png" alt>
          <span class="bot-title">学习强国</span>
        </div>
        <div class="bot-item">
          <img class="bot-img" src="../../assets/why/images/党支部.png" alt>
          <span class="bot-title">手机党支部</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopHeader from "@/components/TopHeader/TopHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    TopHeader
  },
  methods: {
    goHelpPoor() {
      this.$router.push({ path: "/helppoor" });
    },
    // 查看更多
    SeeMore() {
      this.$router.push({ path: "/moreservice" });
    },
    // 我的快递
    goMyExpress() {
      this.$router.push({ path: "/myexpress" });
    },
    // 查看新闻
    goNewInfo() {
      this.$router.push({ path: "/newinfo" });
    }
  }
};
</script>
<style lang="less">
.home {
  width: 100vw;
  .content-container {
    width: 100vw;
    margin-bottom: 1rem;
    background-color: #fff;
    // 资讯消息
    .message-session {
      width: 100;
      box-sizing: border-box;
      padding: 0.2rem;
      border: 1px solid #f6f6f6;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .message-img {
        width: 0.74rem;
        height: 0.48rem;
        margin: 0 0.5rem 0 0.3rem;
      }
      .message-list {
        width: 5.2rem;
        height: 0.8rem;
        padding: 0 0.3rem;
        border-left: 1px solid #f6f6f6;
        font: 0.26rem/0.4rem "PingFangSC-Regular";
        color: #3e3e3e;
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p:before {
          content: "";
          display: inline-block;
          width: 0.1rem;
          height: 0.1rem;
          margin-right: 0.1rem;
          background-color: #005aee;
          border-radius: 50%;
          vertical-align: middle;
        }
        p:nth-child(2):before {
          background-color: #ef6d4c;
        }
      }
    }
    // 服务列表
    .serviceList-session {
      width: 100%;
      box-sizing: border-box;
      padding: 0.2rem 0 0.4rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      .sev-item {
        width: 25%;
        color: #3e3e3e;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .font-icon {
          font-size: 0.52rem;
          margin: 0.2rem 0 0.1rem;
          color: tomato;
        }
        .sev-name {
          font: 0.24rem/0.34rem "PingFangSC-Regular";
        }
      }
    }
    // 轮播图
    .banner {
      width: 100%;
      height: 2.5rem;
      background-color: #eee;
      overflow: hidden;
      .banner-wrap {
        width: 6.9rem;
        height: 2.2rem;
        background-color: #fff;
        margin: 0.15rem auto;
        .bannerImg {
          width: 6.9rem;
          height: 2.2rem;
        }
      }
    }
    // 新闻列表
    .news-container {
      width: 100%;
      .news-item {
        width: 100%;
        box-sizing: border-box;
        padding: 0.2rem;
        border: 1px solid #f6f5f8;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .news-img {
          width: 2rem;
          height: 1.4rem;
          margin-right: 0.2rem;
        }
        .new-info {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
          .news-type {
            display: inline-block;
            width: 0.6rem;
            height: 0.34rem;
            padding: 0 0.05rem;
            margin-right: 0.1rem;
            background-color: #005aee;
            text-align: center;
            font: 0.2rem/0.34rem "PingFangSC-Regular";
            border-radius: 0.06rem;
            color: #fff;
          }
          .news-title {
            font: 0.28rem/0.4rem "PingFangSC-Regular";
            color: #3e3e3e;
          }
          .news-time {
            font: 0.2rem/0.4rem "PingFangSC-Regular";
            color: #999999;
          }
        }
      }
    }
    .bottom-session {
      width: 100vw;
      height: 2.8rem;
      box-sizing: border-box;
      padding: 0.2rem;
      background-color: #eee;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .bot-item {
        width: 2.1rem;
        height: 2.4rem;
        background-color: #fff;
        border-radius: 0.1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .bot-img {
          width: 0.84rem;
          height: 0.84rem;
          margin-bottom: 0.2rem;
        }
        .bot-title {
          font: 0.28rem/0.4rem "PingFangSC-Regular";
          color: #3e3e3e;
        }
      }
    }
  }
}
</style>

