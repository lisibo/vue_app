<template>
  <div id="app">
    <router-view/>
    <tabs-bottom></tabs-bottom>
  </div>
</template>

<script>
import tabsBottom from "@/components/Tabs/tabsBottom.vue";
export default {
  name: "App",
  components: {
    "tabs-bottom": tabsBottom
  }
};
</script>

<style>
/* 样式重置 */
@import "./assets/css/main.css";
/* 公共样式 */
@import "./assets/css/global.css";
</style>



