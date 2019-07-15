<template>
  <div v-show="$route.meta.isShow ">
    <ul class="tabs">
      <router-link
        class="tabs-list"
        v-for="(item,index) in tabsList"
        :key="index"
        :to="item.router"
        tag="li"
      >
        <img class="tabs-img" v-if="index !== 2" :src="item.src" :alt="item.title">
        <img class="tabs-helper" v-else :src="item.helper" alt>
        <span class="tabs-title">{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabsBottom",
  data() {
    return {
      tabsList: [
        {
          router: "/home",
          src: require("@/assets/images/home@3x.png"),
          title: "首页"
        },
        {
          router: "/service",
          src: require("@/assets/images/service@3x.png"),
          title: "服务"
        },
        {
          router: "/helper",
          helper: require("@/assets/images/helper@3x.png")
        },
        {
          router: "/public",
          src: require("@/assets/images/public@3x.png"),
          title: "公开"
        },
        {
          router: "/mine",
          src: require("@/assets/images/mine@3x.png"),
          title: "我的"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.tabs {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  .tabs-list {
    flex: 1;
    .tabs-img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto 0.1rem;
    }
    .tabs-helper {
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      margin: 0 auto 0.5rem;
    }
    .tabs-title {
      display: block;
      font-family: PingFangSC-Regular;
      font-size: 8px;
      letter-spacing: 0;
      text-align: center;
    }
  }
}
</style>


