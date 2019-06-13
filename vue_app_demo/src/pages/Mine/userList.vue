<template>
  <div>
    <mt-header title="个人信息查询">
      <router-link to="/search" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <i slot="right" class="iconfont" :class="isCollect?'iconshoucang':'iconbuoumaotubiao45'" @click="collect"></i>
    </mt-header>

    <div class="user-list">
      <mt-cell title="职工基本信息" class="list-title"></mt-cell>
      <mt-cell title="单位账号">32178117129</mt-cell>
      <mt-cell title="单位名称">公积金管理中心</mt-cell>
      <mt-cell title="个人账号">321781687626271</mt-cell>
      <mt-cell title="职工姓名">李丽丽</mt-cell>
      <mt-cell title="证件号码">1233422123442224</mt-cell>
      <mt-cell title="职工基本信息" class="list-title"></mt-cell>
      <mt-cell title="月缴金额（元）">3000</mt-cell>
      <mt-cell title="当前余额（元）">726462</mt-cell>
      <mt-cell title="汇缴年月">1年</mt-cell>
      <mt-cell title="工资基数（元）">7000</mt-cell>
      <mt-cell title="单位缴存比例（%）">50</mt-cell>
      <mt-cell title="职工缴存比例（%）">50</mt-cell>
      <mt-cell title="汇缴状态">3</mt-cell>
    </div>

    <div class="back-home">
      <mt-button type="primary" @click.native="firstPage">首页</mt-button>
    </div>
    
  </div>
</template>
<script>
export default {
  name:'UserList',
  data(){
    return {
      isCollect:false
    }
  },
  methods: {
    collect(){
      this.isCollect = !this.isCollect
    },
    firstPage(){
      this.$router.push('/')
    }
  },
}
</script>
<style lang="less" scoped>
  .user-list{
    margin-bottom: 1.2rem;
  }
  .list-title{
    font-weight: bold;
  }
  .back-home{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 0.72rem;
    .mint-button{
      width: 100%;
    }
  }
</style>
