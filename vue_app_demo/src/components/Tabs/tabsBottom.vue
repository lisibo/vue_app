<template>
  <div class="tab">
    <ul>
      <li v-for="(item,index) in tabsList" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'TabsBottom',
  data(){
    return {
      tabsList:[
        {title:'首页',ex:''},
        {title:'办事',ex:''},
        {title:'首页',ex:''},
        {title:'公开',ex:''},
        {title:'我的',ex:''}
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>


