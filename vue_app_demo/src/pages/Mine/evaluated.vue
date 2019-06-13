<template>
  <div>
    <mt-header title="评价详情">
      <router-link to="/assess" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-cell title="部门名称">市公积金管理所</mt-cell>

    <mt-cell title="事项名称">公积金提取</mt-cell>

    <mt-cell title="评价">{{val}}</mt-cell>

    <mt-cell title="评价内容"></mt-cell>
    <p class="assess_content">{{value}}</p>
  </div>
</template>
<script>
export default {
  name:'Evaluated',
  data(){
    return {
      val:'非常满意',
      value:'在搭配时，我最注重一个层次感，首先色系搭配上不要出错，然后就是质感和衣服的长度，比如说这套衣服，最外面是军绿多口袋外套，不仅实用性强而且与内里卡其色内搭衬衫相互配合，最里面在穿一件白色衬衫打底，细心的朋友会发现，由于内外衣长的长短不一，我们的视线会卡在内搭卡其色衬衫上。'  
    }
  }
}
</script>
<style lang="less" scoped>
.assess_content{
  padding: 0 10px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #888888;
  letter-spacing: 0.16px;
  line-height: 26px;
}
</style>

