<template>
  <div>
    <mt-header title="我的收藏">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="example-tabs">
      <Tabs box=".example-tabs" value="name1" :scrollable="true">
        <Pane label="咨询" name="name1">标签一的内容</Pane> 
        <Pane label="服务" name="name2">
          <ul class="service-list">
            <li>
              <i class="iconfont iconxiaolian"></i>
              <p>公积金查询</p>
            </li>
            <li>
              <i class="iconfont iconxiaolian"></i>
              <p>社保查询</p>
            </li>
            <li>
              <i class="iconfont iconxiaolian"></i>
              <p>密保卡查询</p>
            </li>
            <li>
              <i class="iconfont iconxiaolian"></i>
              <p>医疗保险查询</p>
            </li>
          </ul>
        </Pane>
        <Pane label="应用" name="name3">标签三的内容</Pane>
        <Pane label="指南" name="name4">标签四的内容</Pane>
        <Pane label="政策" name="name5">标签五的内容</Pane>
      </Tabs>
    </div>
  </div>
</template>
<script>
export default {
  name:'Collect',

}
</script>
<style lang="less" scoped>
.service-list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  li{
    width: 50%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 14px;
    color: #888888;
    i{
      color: #1A6AEE;
    }
    p{
      margin-left: 0.25rem;
    }
  }
  li:nth-child(2),li:nth-child(4){
     border-right: 0;
  }
}
</style>
