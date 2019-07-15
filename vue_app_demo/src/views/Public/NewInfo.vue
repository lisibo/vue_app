<template>
  <!-- 新闻详情页 -->
  <div class="new-info">
    <!-- 顶部导航 -->
    <mt-header title="新闻" class="header">
      <router-link slot="left" to>
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <mt-button slot="right">
        <span class="iconfont iconz font-icon"></span>
        <span class="header-right-info">分享</span>
      </mt-button>
    </mt-header>
    <!-- 内容 -->
    <div class="content-container">
      <span class="news-title">陕西政务服务网开通“支付宝第三方账户快捷登录”</span>
      <div class="news-info">
        <span class="news-day">2019.03.02</span>
        <span class="news-time">20:09</span>
        <span class="news-browse">450次</span>
      </div>
      <div class="news-content">
        4月17日，为提升用户体验，优化登录流程，陕西政务服务网开通“支付宝第三方账户快捷登录”，支持自然人通过“支付宝扫码”登录网站并办理相关业务。据悉，陕西政务服务网统一身份认证系统针对自然人支持“账号+密码、手机号+短信验证码、支付宝”、针对法人支持“账号+密码、陕西CA认证”等多种登录方式。后期还将陆续增加微信、电子社保卡等第三方账户快捷登录方式，并按照“一码通享”（身份证号码、社会信用代码）思路，依托统一身份认证系统，实现“一次提交、多方利用”，整合汇聚各级政务服务信息资源，为企业和个人实名用户开设个性化专属空间及提供管理功能，集聚企业或个人的基本信息、证照信息、办理信息，为用户提供更佳的服务体验。
        <img
          class="news-img"
          src="../../assets/why/images/news-img.png"
          alt
        >
        4月17日，为提升用户体验，优化登录流程，陕西政务服务网开通“支付宝第三方账户快捷登录”，支持自然人通过“支付宝扫码”登录网站并办理相关业务。据悉，陕西政务服务网统一身份认证系统针对自然人支持“账号+密码、手机号+短信验证码、支付宝”、针对法人支持“账号+密码、陕西CA认证”等多种登录方式。后期还将陆续增加微信、电子社保卡等第三方账户快捷登录方式，并按照“一码通享”（身份证号码、社会信用代码）思路，依托统一身份认证系统，实现“一次提交、多方利用”，整合汇聚各级政务服务信息资源，为企业和个人实名用户开设个性化专属空间及提供管理功能，集聚企业或个人的基本信息、证照信息、办理信息，为用户提供更佳的服务体验。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewInfo",
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.new-info {
  width: 100vw;
  background-color: #fff;
  .header {
    .header-right-info {
      font: 0.22rem/1rem "PingFangSC-Regular";
      color: #005aee;
    }
    .font-icon {
      color: #005aee;
    }
  }
  .content-container {
    width: 100%;
    box-sizing: border-box;
    padding: 0.3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .news-title {
      font-family: PingFangSC-Medium;
      width: 70%;
      font: 0.34rem/0.48rem "PingFangSC-Medium";
      color: #3e3e3e;
      text-align: center;
    }
    .news-info {
      font: 0.22rem/0.32rem "PingFangSC-Regular";
      color: #b8b8b8;
      text-align: center;
      margin: 0.2rem 0;
    }
    .news-content {
      font: 0.24rem/0.5rem "PingFangSC-Regular";
      color: #000000;
      margin: 0 0.3rem;
      text-align: left;
    }
    .news-img {
      width: 100%;
      height: 3.4rem;
    }
  }
}
</style>