<template>
  <div id="app">
    <router-view />
    <tabs-bottom />
  </div>
</template>

<script>
import tabsBottom from '@/views/Tabs/tabsBottom.vue'
export default {
  name: 'App',
  components:{
    'tabs-bottom':tabsBottom
  }
}
</script>

<style>

</style>



